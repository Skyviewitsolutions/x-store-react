import React, { useState } from "react";
import "./ProductsCard.css";
import { TbCameraPlus } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.min.css";
import Camera from "../../assets/Images/camera.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";

const InventoryProductsCard = (props) => {
  const navigate = useNavigate();

  const redirectToProductdetails = (dta) => {
    navigate("/InventoryProductsDetails", { state: dta });
  };
  const { data ,deleteRef ,setDeleteRef } = props;
  const [iconColor, setIconColor] = useState("#7478a1");
  const deleteUrl = endpoints.products.deleteProduct;

  const deleteProduct = (dta) => {
    const formData = new FormData();
  formData.append("productName",dta.PRODUCT_NAME);
  formData.append("productType",dta.PRODUCT_TYPE);
  formData.append("productCategory",dta.PRODUCT_CATEGORY);

    axios.post(deleteUrl,formData)
    .then((res) => {
      console.log(res,'deleteresult');
      if(res.data.status == true)
      {
        setDeleteRef(!deleteRef)
       toast("Product Deleted Successfuly !",{type:"success"});
      }
      else if(res.data.status == false)
      {
        toast(res.data.message ,{type:"warning"});
      }
    })
    .catch((err) => {
      console.log(err,"error");
    })
  }
  return (
    <div
      className="ProductsContainer"
  
    >
      <div className="ProductCon" onClick={() => redirectToProductdetails(data)}>
      <div className="ProductsCamera">
        <img src={Camera} alt="camera" />
      </div>
      <div className="ProductContent">
        <h6>{data.PRODUCT_NAME}</h6>
        <p>Price: {data.PRODUCT_COST} SAR</p>
        <p>On hand: {data.UNITS_MEASUREMENT}Units</p>
      </div>
  
      </div>
      <div className="deleteicon">
        <MdDelete
          size={20}
          style={{ color: iconColor }}
          onMouseOver={() => setIconColor("#293391")}
          onMouseOut={() => setIconColor("#7478a1")}
          onClick={() =>deleteProduct(data)}
        />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default InventoryProductsCard;
