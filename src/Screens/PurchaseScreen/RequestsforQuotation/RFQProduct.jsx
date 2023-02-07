import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoints } from "../../../services/endpoints";
import './RFQProduct.css'

const RFQProduct = (props) => {
  const { singleProduct,setSingleProduct } = props;
//   const navigate = useNavigate();
//   const getAuthtoken = localStorage.getItem("authtoken");
//   const userAuth = localStorage.getItem("userAuth");


  return (
    <div className="rfq_products">
      <table style={{ textAlign: "center", padding: "10px" }}>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th className="req_product_des">Description</th>
            <th>Quantity</th>
            <th>Uom</th>
            <th>Unit Price</th>
          </tr>
    
            {singleProduct.map((itm, ind) => {
              return (
                <>
                <tr>
                <td>{ind+1}</td>
                  <td>{itm.PRODUCT_NAME}</td>
                  <td>{itm.DESCRIPTION}</td>
                  <td>{itm.PRODUCT_QUANTITY}</td>
                  <td>{itm.UNIT_OF_MEASUREMENT}</td>
                  <td>{itm.UNIT_PRICE}</td>
                  </tr>
                </>
              );
            })}
      </table>
    </div>
  );
};

export default RFQProduct;
