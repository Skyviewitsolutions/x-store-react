import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../services/endpoints";
import CustomTable from "../../CustomTable/CustomTable";
import Barcode from "../../Model/BarcodeModal/Barcode";
import ProductTable from "../../ProductTable/ProductTable";
import "./ProductBarcode.css";


const ProBarcode = (props) => {

  const navigate = useNavigate();
  const { productId } = props;
  const userAuth = localStorage.getItem("userAuth");
  const getAuthtoken = localStorage.getItem("authtoken");
  const [proBarcodeAll, setProBarcodeAll] = useState([]);
  const [singleProBarcode, setSingleProBarcode] = useState([]);
  const [allBarcode, setAllBarcode] = useState([]);
  const allProductBarcodeUrl = endpoints.products.ProductBarcodeAll;
  const singleProductBarcodeUrl = endpoints.products.ProductBarcodeSingle;




  const getSingleBarcode = () => {

    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("Product_ID", productId);
    console.log(productId,"bar")
    axios
      .post(singleProductBarcodeUrl, formData)
      .then((res) => {

        if (res.data.status === true) {
            setSingleProBarcode(res.data.data);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          }
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
        toast("something went wrong", { type: "error" });
      });
  };

  useEffect(() => {

      getSingleBarcode();
  
  }, []);

  const column = [
    { label: "Barcode", name: "BARCODE" },
    { label: "Barcode Description", name: "BARCODE_DESCRIPTION" },
    { label: "UOM", name: "UOM" },
  ];
  const column2 = [
    { label: "Barcode", name: "BARCODE" },
    { label: "Barcode Description", name: "BARCODE_DESCRIPTION" },
    { label: "UOM", name: "UNIT_OF_MEASUREMENT" },
  ];

  console.log(allBarcode  , "all barcode here")
  return (
    <div>
      <div className="barcode_container">
      
          <ProductTable data={singleProBarcode} column={column2} />
        
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProBarcode;