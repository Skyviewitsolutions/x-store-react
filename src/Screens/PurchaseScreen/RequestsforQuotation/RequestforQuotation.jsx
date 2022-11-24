import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'
import PurchaseNavbar from '../PurchaseNavbar'
import './AddRequestQuotation/AddRequestQuotation.css'

const RequestforQuotation = () => {

     const navigate = useNavigate();
     const handleCreatePage = () => {
       navigate("/AddRequestQuotation");
     };
  
     const [requestQuotationAll , setRequestQuotationAll] = useState([]);
     const requestUrl = endpoints.requestQuotation.allRequestQuotation;
     const getAuthtoken = localStorage.getItem("authtoken");
     const userAuth = localStorage.getItem("userAuth");

     useEffect(() => {
          const formData = new FormData();
          formData.append("User_Authorization" , getAuthtoken);
          formData.append("User_AuthKey" , userAuth);
          axios.post(requestUrl,formData)
          .then((res) => {
            if(res.data.status === true){
              setRequestQuotationAll(res.data.data)
            }else if(res.data.status === false){
              if(res.data.code === 3)
              {
                toast("Session expired , Please re-login",{type:"warning"})
                navigate('/');
              }
              else{
               toast(res.data.message,{type:"error"});
              }
            }
          })
          .catch((err) => {
            console.log(err , "something went wrong");
          })
     },[])

   
    const column = [
        {title:"Refrence" , name:"VENDOR_REFERENCE"},
        {title:"Order Date" , name:"ORDER_DATE"},
        {title:"Vendor" , name:"VENDOR_NAME"},
        {title:"Purchase Representative" , name:"PURCHASE_REPRESENTATIVE"},
        {
          label:"Actions",
          name:"ID",
          options:{
              customBodyRender:(value , tableMeta , updateValue) => {
                  return(
                      <>
                       <div className="updtdlt">
                      <FiEdit size={23} color="#4f434d"  style={{cursor:"pointer"}}/>
                      <MdDelete size={23} color="#4f434d" style={{cursor:"pointer"}}/>
                      </div>
                      </>
                      
                  )
              }
          }
      }
    ]
  return (
    <div>
        <PurchaseNavbar showBelowMenu={true} title="Requests for Quotation" handleCreatePage={handleCreatePage}/>
        <CustomTable data={requestQuotationAll} column={column}/>
    </div>
  )
}

export default RequestforQuotation