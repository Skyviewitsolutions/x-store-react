import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import CustomTable from '../../../components/CustomTable/CustomTable'
import Loader from '../../../components/Loader/Loader'
import { endpoints } from '../../../services/endpoints'
import PurchaseNavbar from '../PurchaseNavbar'
import './AddRequestQuotation/AddRequestQuotation.css'

const RequestforQuotation = () => {

     const navigate = useNavigate();
     const handleCreatePage = () => {
       navigate("/AddRequestQuotation");
     };
  
     const [requestQuotationAll , setRequestQuotationAll] = useState([]);
     const [loading , setLoading] = useState(false);
     const requestUrl = endpoints.requestQuotation.allRequestQuotation;
     const getAuthtoken = localStorage.getItem("authtoken");
     const userAuth = localStorage.getItem("userAuth");

     const getAllRequestQuation = () => {
      const formData = new FormData();
          formData.append("User_Authorization" , getAuthtoken);
          formData.append("User_AuthKey" , userAuth);
          setLoading(true);
          axios.post(requestUrl,formData)
          .then((res) => {
            setLoading(false)
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
            setLoading(false)
            console.log(err , "something went wrong");
          })
     }

     useEffect(() => {
            getAllRequestQuation();
     },[])

     const deleteRequest = endpoints.requestQuotation.deleteRequestQuotation;

     const deleteItem = (data) => {
      const formData = new FormData();
      formData.append("ID" , data);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(deleteRequest,formData)
      .then((res) => {
        if(res.data.status === true)
        {
            getAllRequestQuation();
            toast("Request Quotation deleted Successfully",{type:"success"});
        }
        else if(res.data.status === false)
        {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.mrssage,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err,"error");
    })
     }

     const handleUpdate = (data) => {
      console.log(data ,"value")
      const val = requestQuotationAll.filter((itm,index) => {
        return itm.ID == data
      })
      const orgValue = val[0];
      console.log(orgValue,"irhhcbsdh")
      navigate("/AddRequestQuotation" , {state:orgValue});   
  }
  
   
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
                      <FiEdit size={23} color="#4f434d"  style={{cursor:"pointer"}} onClick={() => handleUpdate(value)}/>
                      <MdDelete size={23} color="#4f434d"  onClick={() => deleteItem(value)} style={{cursor:"pointer"}}/>
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
        {loading === true && <Loader/>}
        <ToastContainer />
    </div>
  )
}

export default RequestforQuotation