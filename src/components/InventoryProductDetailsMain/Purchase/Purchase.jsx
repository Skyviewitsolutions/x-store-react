import React, { useEffect, useState } from "react";
import "./Purchase.css";
import { MdArrowDropDown } from "react-icons/md";
import { borderBottom } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import CustomTable from "../../CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";
import { useNavigate } from "react-router-dom";
import ProductTable from "../../ProductTable/ProductTable";
const Purchase = (props) => {

  const navigate = useNavigate()

  const {purchaseDetails,setPurchaseDetails,getSingleVendorList,setSelectedVID,productId} = props;
  const [allVenList , setAllVenList] = useState([]);
  const userAuth = localStorage.getItem("userAuth");
  const getAuthtoken = localStorage.getItem("authtoken");
  const vendorListsAllUrl = endpoints.products.vendorListAllProduct;

  const getAllVendorlist = () => {

    const formData = new FormData()
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("ID" ,productId);
    console.log(productId , 'ss')
    axios
    .post(vendorListsAllUrl, formData)
    .then((res) => {
      console.log(res, "all vendorlist");
      if(res.data.status === true){
        setAllVenList(res.data.data)
      }
      else if(res.data.status === false){
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        // else{
        //  toast(res.data.message,{type:"error"});
        // }
      }
    })
    .catch((err) => {
      console.log(err, "error");
      toast("something went wrong" , {type : "error"})
    });
  }

  useEffect(() => {
    getAllVendorlist()
  },[])

  const column2 = [
    { label :'Name', name:'VENDOR_NAME'},
    { label :'currency', name:'VENDOR_CURRENCY'},
    { label :'Price', name:'VENDOR_PRICE', options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        var price ;
        if(typeof(value) == "string"){
          price = parseFloat(value).toFixed(2);
        }
        else {
          price = value.toFixed(2)
        }
        console.log(value , "value")
        return (
          <>
            <div className="updtdlt">
            <span>{price} </span>
            </div>
          </>
        );
      }}}
    
  ]

  return (
    <div className="VariantsContainer">
   <ProductTable data={allVenList} column={column2}/>
      {/* <div className="content_purchase">
        <div className="content_first">
          <h1>Reordering</h1>
          <div className="reordering_purchase">
            <p>Procurement</p>
            <span>Create a draft purchase order</span>
          </div>
          <div className="reordering_purchase">
            <p>Purchase Description</p>
            <span>Create a draft purchase order</span>
          </div>
        </div>
        <div className="content_second">
          <h1>Vendor Bills</h1>
          <div className="reordering_purchase">
            <p>Vendor Taxes</p>
            <span>Purchase Vat 15%</span>
          </div>
          <div className="reordering_purchase">
            <p>Control Policy</p>
            <span>On received quantities</span>
          </div>
          <div className="reordering_purchase">
            <p>Warning when Purchasing this Product</p>
            <span>No message</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Purchase;
