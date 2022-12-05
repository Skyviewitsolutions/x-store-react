import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { RequestProduct } from "../../../../components/Model/PurhcaseRequestProduct/RequestProduct";
import { endpoints } from "../../../../services/endpoints";

const PurchaseAgreeProduct = (props) => {

  const navigate = useNavigate()
    const { modalShow, setModalShow,serialNo,setSerialNo,productdet,setProductDet,description,setDescription,quantity,setQuantity,uomdet,setUomdet,vendorId,setVendorId,save,vendor,column,productAll,saveProduct,condition,setCondition} = props;

  
  return (
    <div>
      <div className="addproduct_Con">
      <CustomTable data={productAll} column={column} />
        <button className="add_productbtn" onClick={() => setModalShow(true)}>
          Add Product
        </button>
        <div className="addproduct_conditions">
          <div className="add_Part1">
            <input
              type="text"
              placeholder="Define your terms and conditions..."
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </div>
        </div>
        <RequestProduct {...props}/>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PurchaseAgreeProduct;
