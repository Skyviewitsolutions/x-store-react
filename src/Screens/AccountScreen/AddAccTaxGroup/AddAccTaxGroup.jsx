import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { endpoints } from '../../../services/endpoints';
import './AddAccGroup.css';
const AddAccTaxGroup = () => {

   const [name , setName] = useState("");
   const [taxCurr , setTaxCurr] = useState("");
   const [taxRec , setTaxRec] = useState("");
   const [advTax , setAdvTax] = useState("");
   const [update,setUpdate] = useState("");
   const AddAccTaxGroupUrl = endpoints.AccountTaxGrp.addAccGrpTax;

   const navigate = useNavigate();

   const getAuthtoken = localStorage.getItem("authtoken");
   const userAuth = localStorage.getItem("userAuth");

   const save = () => {
      if(name === "")
      {
         toast("Name Is Required!",{type:"warning"});
      }
      else if(taxCurr === "")
      {
         toast("Tax Current Account(Payable) is required!",{type:"warning"});
      }
      else if(taxRec === "")
      {
         toast("Tax Current Account(Receivale)",{type:"warning"});
      }
      else if(advTax === "")
      {
         toast("Advance Tax Payment Account is Required!",{type:"warning"});
      }
      else{
       const formData = new FormData();
       formData.append("User_Authorization", getAuthtoken);
       formData.append("User_AuthKey", userAuth);
       formData.append("Name",name);
       formData.append("Payable",taxCurr);
       formData.append("Receivale",taxRec);
       formData.append("Advance_Tax_Payment_Account",advTax);
       axios.post(AddAccTaxGroupUrl,formData)
       .then((res) => {
         if(res.data.status === true)
         {
            toast("Accout Tax Group Added Successfully",{type:"success"});
            setTimeout(() => {
               navigate('/AccTaxGroup')
            }, 1000);
         }
         else if(res.data.status === false)
         {
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
         console.log(err,"error");
       })

      }
   }

   const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");

  const updateAccTaxGrp = endpoints.AccountTaxGrp.updateAccGrpTax;
  useEffect(() => {
   if(selectedData)
   {
    setUpdate(true);
    setName(selectedData.ACCOUNT_NAME);
    setTaxCurr(selectedData.TAX_PAYABLE);
    setTaxRec(selectedData.TAX_RECEIVAL);
    setAdvTax(selectedData.ADVANCE_TAX_PAYMENT_ACCOUNT);
   }
   },[selectedData])

   const updateData = () => {
      if(name === "")
      {
         toast("Name Is Required!",{type:"warning"});
      }
      else if(taxCurr === "")
      {
         toast("Tax Current Account(Payable) is required!",{type:"warning"});
      }
      else if(taxRec === "")
      {
         toast("Tax Current Account(Receivale)",{type:"warning"});
      }
      else if(advTax === "")
      {
         toast("Advance Tax Payment Account is Required!",{type:"warning"});
      }
      else{
       const formData = new FormData();
       formData.append("Id",selectedData.ACCOUNT_ID)
       formData.append("Name",name);
       formData.append("Payable",taxCurr);
       formData.append("Receivale",taxRec);
       formData.append("Advance_Tax_Payment_Account",advTax);
       formData.append("User_Authorization", getAuthtoken);
       formData.append("User_AuthKey", userAuth);
       axios.post(updateAccTaxGrp,formData)
       .then((res) => {
         console.log(res,"update AccTax")
         if(res.data.status === true)
         {
           toast("Account Tax Group is updated Successfully !",{type:"success"})
           setTimeout(() => {
            navigate('/AccTaxGroup')
         }, 1000);
         }
         else if(res.data.status === false)
         {
           toast(res.data.message , {type:"error"});
         }
        })
        .catch((err) => {
         console.log(err,"error");
        })
      }
   }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Account Tax Group" save={update === true ? updateData : save} showCanelBtn={true}/>
        <div className='AddAccTaxGroupCon'>
           <div className="AddAccTaxGroupContent">
             <div className="AddAccTaxGroupText">
                <p>Name</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
             </div>
             <div className="AddAccTaxGroupText">
                <p>Tax Current Account(Payable)</p>
                <input type="text"  value={taxCurr} onChange={(e) => setTaxCurr(e.target.value)}/>
             </div>
             <div className="AddAccTaxGroupText">
                <p>Tax Current Account(Receivable)</p>
                <input type="text"  value={taxRec} onChange={(e) => setTaxRec(e.target.value)}/>
             </div>
             <div className="AddAccTaxGroupText">
                <p>Advance Tax Payment Account</p>
                <input type="text"  value={advTax} onChange={(e) => setAdvTax(e.target.value)}/>
             </div>
           </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AddAccTaxGroup