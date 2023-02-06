import React, { useState } from "react";
import "./VariantsEdit.css";
import { MdArrowDropDown, MdDelete } from "react-icons/md";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";
import { Button, Table } from "react-bootstrap";
import { useEffect } from "react";
import VariantModal from "./VariantModal";
import CustomTable from "../../CustomTable/CustomTable";
import Loader from "../../Loader/Loader";
import ProductTable from "../../ProductTable/ProductTable";

const VariantsEdit = (props) => {
  const navigate = useNavigate();
  const { productId, salesPrice, isEdit, setIsEdit } = props;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [showModal, setShowModal] = useState(false);

  const [attributesValues, setAttributeValues] = useState([]);
  const [singleVarients, setSingleVarients] = useState([]);
  const [varientsDetails, setVarientsDetails] = useState([]);

  /// creating usestate for the modal part
  const [allAttribute, setAllAttribute] = useState([]);
  const [allAttributeValue, setAllAttributeValue] = useState([]);
  const [attributeName, setAttributeName] = useState("");
  const [attributeId, setAttributeId] = useState("");
  const [attributeValId, setAttributeValId] = useState("");
  const [updateVarients, setUpdateVarients] = useState(false);
  const [attributeVal, setAttributeVal] = useState("");
  const [selectedVarientsId, setSelectedVarientsId] = useState("");
  const [loading, setLoading] = useState(false);

  const allattValUrl = endpoints.products.ProductAllVarients;
  const singleVarientsUrl = endpoints.products.ProductSingleVariens;
  const updateVrientUrl = endpoints.products.ProductUpdateVarients;

  const GetAllAttribute = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allattValUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAttributeValues(val);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            // toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  console.log(productId, "product id aeha hai");

  const getSingleVarients = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("Product_ID", productId);
    axios
      .post(singleVarientsUrl, formData)

      .then((res) => {
        console.log(res, "single varients");
        if (res.data.status === true) {
          var val = res.data.data;

          val = val.filter((itm, index) => {
            return itm.DELETE_STATUS != "X";
          });
          console.log(val ,'vall here')
          setAttributeValues(val);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            // toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (productId) {
      getSingleVarients();
    } else {
      GetAllAttribute();
    }
  }, []);

  const deleteVarientsurl = endpoints.products.ProductDeleteVarients;
  const allAttributeUrl = endpoints.attribute.allsalesattribute;
  const attributeValueUrl = endpoints.attribute.singleValue;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deleteVarientsurl, formData)
      .then((res) => {
        if (res.data.status === true) {
          GetAllAttribute();
          toast("Varients Deleted Successfully!", { type: "success" });
        } else if (res.data.message === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const getAllAttribute = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allAttributeUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          const val = res.data.data;
          setAllAttribute(val);
        } else if (res.data.status === false) {
          // toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error here");
      });
  };

  const getAttributeValues = (id) => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("ID", id);

    setLoading(true);

    axios
      .post(attributeValueUrl, formData)
      .then((res) => {
        setLoading(false);
        if (res.data.status === true) {
          const val = res.data.data;
          setAllAttributeValue(val);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "this is the error ");
      });
  };

  useEffect(() => {
    getAllAttribute();
  }, []);

  const handleUpdate = (id) => {
    setShowModal(true);

    var seletedAttribute = attributesValues.filter((itm, ind) => {
      return itm.ID == id;
    });
    console.log(seletedAttribute, "attr here");
    setSelectedVarientsId(id);
    seletedAttribute = seletedAttribute[0];
    setAttributeName(seletedAttribute.SALESATTRIBUTE_NAME);
    setAttributeId(seletedAttribute.SALES_ATTRIBUTE_ID);
    setAttributeVal(seletedAttribute.SALESATTRIBUTEVALUE_VALUE);
    setAttributeValId(seletedAttribute.SALESATTRIBUTEVALUE_ID);
    getAttributeValues(seletedAttribute.SALES_ATTRIBUTE_ID);
    setUpdateVarients(true);
  };

  // updating selected varients;

  const updateSelectedVarients = () => {
    const formData = new FormData();
    formData.append("ID", selectedVarientsId);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("SalesAttribute_ID", attributeId);
    formData.append("SalesAttributeValue_ID", attributeValId);
    formData.append("Price", salesPrice);
    axios
      .post(updateVrientUrl, formData)
      .then((res) => {
        if (res.data.status) {
          toast("Varients updated successfully", { type: "success" });
          // window.location.reload();
          setShowModal(false);
          GetAllAttribute();
          getSingleVarients();
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  };

  const column1 = [
    { label: "Attribute", name: "SALESATTRIBUTE_NAME" },
    { label: "Value", name: "SALESATTRIBUTEVALUE_VALUE" },
    {
      label: "Action",
      name: "ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
                  onClick={() => deleteItem(value)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          );
        },
      },
    },
  ];

  const column2 = [
    { label: "Attribute", name: "SALESATTRIBUTE_NAME" },
    { label: "Value", name: "SALESATTRIBUTEVALUE_VALUE" },
    {
      label: "Action",
      name: "ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
                  onClick={() => deleteItem(value)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          );
        },
      },
    },
  ];
  console.log(attributesValues , "attributes values here");
  return (
    <div className="VariantsEditContainer">
      {productId ? (
        <ProductTable data={attributesValues} column={column2} />
      ) : (
        <ProductTable data={attributesValues} column={column1} />
      )}

      {productId == undefined && (
        <button
          className="varients_btns"
          onClick={() => {
            setShowModal(true);
            setUpdateVarients(false);
          }}
        >
          Add Line
        </button>
      )}

      {/* <p className="VariantsEditContainerp">
        Warning: adding or deleting attributes will delete and recreate existing
        variants and lead to the loss of their possible customizations.
      </p> */}

      <VariantModal
        showModal={showModal}
        setShowModal={setShowModal}
        varientsDetails={varientsDetails}
        setVarientsDetails={setVarientsDetails}
        GetAllAttribute={GetAllAttribute}
        {...props}
        attributeName={attributeName}
        setAttributeName={setAttributeName}
        attributeVal={attributeVal}
        setAttributeVal={setAttributeVal}
        allAttribute={allAttribute}
        loading={loading}
        setAllAttribute={allAttribute}
        allAttributeValue={allAttributeValue}
        updateVarients={updateVarients}
        setAllAttributeValue={setAllAttributeValue}
        getAttributeValues={getAttributeValues}
        updateSelectedVarients={updateSelectedVarients}
        attributeId={attributeId}
        setAttributeId={setAttributeId}
        setAttributeValId={setAttributeValId}
        attributeValId={attributeValId}
      />
      {loading && <Loader />}
    </div>
  );
};

export default VariantsEdit;
