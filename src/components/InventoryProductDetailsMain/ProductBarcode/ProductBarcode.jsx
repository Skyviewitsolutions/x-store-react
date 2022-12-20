import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../services/endpoints";
import CustomTable from "../../CustomTable/CustomTable";
import { MdArrowDropDown, MdDelete } from "react-icons/md";
import Barcode from "../../Model/BarcodeModal/Barcode";
import "./ProductBarcode.css";
import { FiEdit } from "react-icons/fi";


const ProductBarcode = (props) => {

  const navigate = useNavigate();
  const { productId } = props;
  const [modalShow, setModalShow] = useState(false);
  const userAuth = localStorage.getItem("userAuth");
  const getAuthtoken = localStorage.getItem("authtoken");
  const [proBarcodeAll, setProBarcodeAll] = useState([]);
  const [singleProBarcode, setSingleProBarcode] = useState([]);
  const [allBarcode, setAllBarcode] = useState([]);
  const allProductBarcodeUrl = endpoints.products.ProductBarcodeAll;
  const singleProductBarcodeUrl = endpoints.products.ProductBarcodeSingle;

  const getProBarcode = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allProductBarcodeUrl, formData)
      .then((res) => {
        console.log(res, "all here");
        if (res.data.status === true) {
          setAllBarcode(res.data.data);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
        toast("something went wrong", { type: "error" });
      });
  };

  const getSingleBarcode = () => {

    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("Product_ID", productId);
    axios
      .post(singleProductBarcodeUrl, formData)
      .then((res) => {
      
        if (res.data.status === true) {
          setAllBarcode(res.data.data);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
        toast("something went wrong", { type: "error" });
      });
  };

  useEffect(() => {
    if (productId) {
      getSingleBarcode();
    } else {
      getProBarcode();
    }
  }, []);

  const column = [
    { label: "Barcode", name: "BARCODE" },
    { label: "Barcode Description", name: "BARCODE_DESCRIPTION" },
    { label: "UOM", name: "UOM" },
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
                  // onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
                  // onClick={() => deleteItem(value)}
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
    { label: "Barcode", name: "BARCODE" },
    { label: "Barcode Description", name: "BARCODE_DESCRIPTION" },
    { label: "UOM", name: "UNIT_OF_MEASUREMENT" },
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
                  // onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
                  // onClick={() => deleteItem(value)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          );
        },
      },
    },
  ];

  return (
    <div>
      <div className="barcode_container">
        {productId != "" ? (
          <CustomTable data={allBarcode} column={column} />
        ) : (
          <CustomTable data={allBarcode} column={column2} />
        )}
        <button className="barcode_btn" onClick={() => setModalShow(true)}>
          Add Line
        </button>
        <Barcode
          modalShow={modalShow}
          setModalShow={setModalShow}
          proBarcodeAll={proBarcodeAll}
          setProBarcodeAll={setProBarcodeAll}
          getSingleBarcode={getSingleBarcode}
          {...props}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductBarcode;
