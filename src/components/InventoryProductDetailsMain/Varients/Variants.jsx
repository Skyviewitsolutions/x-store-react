import React, { useEffect, useState } from "react";
import "./Variants.css";
import { MdArrowDropDown } from "react-icons/md";
import CustomTable from "../../CustomTable/CustomTable";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../services/endpoints";
import { useNavigate } from "react-router-dom";
import ProductTable from "../../ProductTable/ProductTable";

const Variants = (props) => {
  
  const navigate = useNavigate();
  const {productId} = props;
  
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [singleVarients , setSingleVarients] = useState([])
  const singleVarientsUrl = endpoints.products.ProductSingleVariens
  const  getSingleVarients = () => {
    const formData = new FormData();
     formData.append("User_Authorization", getAuthtoken);
     formData.append("User_AuthKey", userAuth);
     formData.append("Product_ID" ,productId)
     axios
       .post(singleVarientsUrl, formData)
       .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data ;
          val = val.filter((itm, index) => {
            return itm.DELETE_STATUS != "X";
          });
           setSingleVarients(val);
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
   }

   useEffect(() => {
    getSingleVarients()
   },[])
   const column2 = [
    { label :'Attribute', name:'SALESATTRIBUTE_NAME'},
  { label :'Value', name:'SALESATTRIBUTEVALUE_VALUE'},
]
  return (
    <div className="VariantsContainer">
      <ProductTable data={singleVarients}  column={column2}/>
     <ToastContainer/>
     
    </div>
  );
};

export default Variants;
