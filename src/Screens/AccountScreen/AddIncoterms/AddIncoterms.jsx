import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import { endpoints } from '../../../services/endpoints';
import './AddIncoterms.css'

const AddIncoterms = () => {

  const navigate = useNavigate()
  const [code , setCode] = useState("");
  const [name , setName] = useState("");
  const [update , setUpdate] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const AddIncotermsUrl = endpoints.IncomeTerms.addIncomeTerms;

  const formData = new FormData();
  formData.append("Code" , code);
  formData.append("Income_Name" , name);
  formData.append("User_Authorization" , getAuthtoken)
  formData.append("User_AuthKey" , userAuth);

  const save = () => {
    if(code === "")
    {
      toast("Income Code Is Required !",{type:"warning"});
    }
    else if(name === "")
    {
      toast("Income Name Is Required !" ,{type:"warning"});
    }
    else{
      axios.post(AddIncotermsUrl,formData)
      .then((res) => {
        if(res.data.status === true)
        {
          toast("Income Terms Added Successfully" , {type:"success"});
          setTimeout(() => {
            navigate('/Incometerms')
          }, 1000);
        }
        else if(res.data.status === false)
        {
          toast(res.data.message ,{type:"error"});
        }
      })
      .catch((err) => {
        console.log(err,"error");
      })
    }
  }

  const location = useLocation();
 const selectedData = location.state;
 console.log(selectedData , "selectedData here");
 const updateIncoTermsUrl = endpoints.IncomeTerms.updateIncomeTerms;

 useEffect(() => {
    if(selectedData)
    {
    setUpdate(true);
    setCode(selectedData.INCOME_CODE);
    setName(selectedData.INCOME_NAME);
    }
 },[selectedData])
  
 const updateData = () => {
  if(code === "")
    {
      toast("Income Code Is Required !",{type:"warning"});
    }
    else if(name === "")
    {
      toast("Income Name Is Required !" ,{type:"warning"});
    }
    else{
      const formData = new FormData();
      formData.append("Id" ,selectedData.ID);
      formData.append("Code" ,code);
      formData.append("Income_Name" ,name);
      formData.append("User_Authorization" , getAuthtoken)
      formData.append("User_AuthKey" , userAuth);
      axios.post(updateIncoTermsUrl,formData)
      .then((res) => {
       if(res.data.status === true)
       {
        toast("Income Terms is Updated Successfully !",{type:"success"});
        setTimeout(() => {
          navigate('/Incometerms')
        }, 1000);
       }
       else if(res.data.status === false)
       {
        toast(res.data.message,{type:"error"});
       }
      })
      .catch((err) => {
        console.log(err,"error");
      })
    }
 }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Income Terms" save={update === true ? updateData : save} showCanelBtn={true}/>
        <div className='AddIncotermsCon'>
           <div className="AddIncotermsContent">
             <div className="AddIncoText">
                <p>Code</p>
                <input type="text" value={code} onChange={(e) => setCode(e.target.value)}/>
             </div>
             <div className="AddIncoText">
                <p>Name</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
             </div>
           
           </div>
           <ToastContainer />
        </div>
    </div>
  )
}

export default AddIncoterms