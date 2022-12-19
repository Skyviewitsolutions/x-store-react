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

const VariantsEdit = (props) => {

  const navigate = useNavigate();
  const { productId } = props;

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
  const [attributeVal, setAttributeVal] = useState("");

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
          setAttributeValues(res.data.data);
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

  const getSingleVarients = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("Product_ID", productId);
    axios
      .post(singleVarientsUrl, formData)
      .then((res) => {
      
        if (res.data.status === true) {
          setSingleVarients(res.data.data);
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

    axios
      .post(attributeValueUrl, formData)
      .then((res) => {
        console.log(res , "attribute value response");
        if (res.data.status === true) {
          const val = res.data.data;
          setAllAttributeValue(val);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error ");
      });
  };

  useEffect(() => {
    getAllAttribute();
  }, []);

  const handleUpdate = (id) => {

    // const  formData = new FormData();
    // formData.append("ID" , id);
    // formData.append("User_Authorization", getAuthtoken);
    // formData.append("User_AuthKey", userAuth);

    // axios.post(updateVrientUrl , formData)
    // .then((res) => {
    //   if(res.data.status){
    //     toast("Varients updated successfully" , {type : "success"})
    //   }
    //   else if(res.data.status === false){
    //     toast(res.data.message , {type : "warning"})
    //   }
    // })
    // .catch((err) =>{
    //   console.log(err , "this is the error")
    // })

    setShowModal(true);
   
    var seletedAttribute = attributesValues.filter((itm, ind) => {
      return itm.ID == id;
    });

    seletedAttribute = seletedAttribute[0];
    console.log(seletedAttribute , "selected attribute")
    setAttributeName(seletedAttribute.SALESATTRIBUTE_NAME)
    setAttributeId(seletedAttribute.SALES_ATTRIBUTE_ID)
    setAttributeVal(seletedAttribute.SALESATTRIBUTEVALUE_VALUE)
    setAttributeValId(seletedAttribute.SALESATTRIBUTEVALUE_ID)
    getAttributeValues(seletedAttribute.SALES_ATTRIBUTE_ID)
    
  };

  const column1 = [
    { label: "Attribute", name: "SALESATTRIBUTE_NAME" },
    { label: "Value", name: "SALESATTRIBUTEVALUE_VALUE" },
    {
      label: "Action",
      name: "ID",
      options: {
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
  ];
  return (
    <div className="VariantsEditContainer">
      {productId ? (
        <CustomTable data={singleVarients} column={column2} />
      ) : (
        <CustomTable data={attributesValues} column={column1} />
      )}

      <button className="varients_btns" onClick={() => setShowModal(true)}>
        Add Line
      </button>

      <p className="VariantsEditContainerp">
        Warning: adding or deleting attributes will delete and recreate existing
        variants and lead to the loss of their possible customizations.
      </p>

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
        setAllAttribute={allAttribute}
        allAttributeValue={allAttributeValue}
        setAllAttributeValue={setAllAttributeValue}
        getAttributeValues={getAttributeValues}
        attributeId={attributeId}
        setAttributeId={setAttributeId}
        setAttributeValId={setAttributeValId}
        attributeValId={attributeValId}
      />
    </div>
  );
};

export default VariantsEdit;
