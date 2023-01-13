import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { endpoints } from '../../../services/endpoints';
import './AddAccountType.css';

const AddAccountType = () => {
   
   const navigate = useNavigate()
   const [accType , setAccType] = useState("");
   const [type, setType] = useState("");
   const [internal , setInternal] = useState("");
   const [description , setDescription] = useState("");
   const [balance , setBalance] = useState(false);
   const [update,setUpdate] = useState("");
   const addAccTypeURL = endpoints.AccountType.addAccountType;
   const getAuthtoken = localStorage.getItem("authtoken");
   const userAuth = localStorage.getItem("userAuth");

   const save = () => {
   if(accType === "")
   {
  toast("Account Type is Required!",{type:"warning"});
   }
   else if(type === "")
   {
      toast("Type is Required!",{type:"warning"});
   }
   else if(internal === "")
   {
      toast("Internal Group is Required!",{type:"warning"});
   }
   else if(balance === "")
   {
      toast("Bring Accounts Balance Forward is Required!",{type:"warning"});
   }
   else{
      const formData = new FormData();
      formData.append("Account_Type",accType);
      formData.append("Type",type);
      formData.append("Internal_Grp",internal);
      formData.append("Bring_Account",balance);
      formData.append("Description" ,description);
      formData.append("User_Authorization" , getAuthtoken);
      formData.append("User_AuthKey" , userAuth);
      axios.post(addAccTypeURL,formData)
      .then((res) => {
         if(res.data.status === true)
         {
            toast("Account Type Added Successfully!",{type:"success"});
            setTimeout(() => {
               navigate('/AccountTypes')
            }, 1000);
         }
         else if(res.data.status === false)
         {
            toast(res.data.message,{type:"error"});
         }
      })
   }
   }

   
  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");

  useEffect(() => {
   if(selectedData)
   {
    setUpdate(true);
    setAccType(selectedData.ACCOUNT_TYPE);
    setType(selectedData.TYPE);
    setInternal(selectedData.INTERNAL_GROUP);
    setBalance(selectedData.BRING_ACCOUNTS);
    setDescription(selectedData.DISCRIPTION);
   }
  },[selectedData])

  const updateAccTypeUrl = endpoints.AccountType.updateAccountType;

  const updateData = () => {
   if(accType === "")
   {
  toast("Account Type is Required!",{type:"warning"});
   }
   else if(type === "")
   {
      toast("Type is Required!",{type:"warning"});
   }
   else if(internal === "")
   {
      toast("Internal Group is Required!",{type:"warning"});
   }
   else if(balance === "")
   {
      toast("Bring Accounts Balance Forward is Required!",{type:"warning"});
   }
   else{
      const formData = new FormData();
      formData.append("Id", selectedData.ACCOUNT_TYPE_ID);
      formData.append("Account_Type",accType);
      formData.append("Type",type);
      formData.append("Internal_Grp",internal);
      formData.append("Bring_Account",balance);
      formData.append("Description" ,description);
      formData.append("User_Authorization" , getAuthtoken);
      formData.append("User_AuthKey" , userAuth);
      axios.post(updateAccTypeUrl ,formData)
      .then((res) => {
         if(res.data.status === true)
         {
           toast("Account Type is updated Successfully !",{type:"success"})
           setTimeout(() => {
            navigate('/AccountTypes')
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
    <>
      <AccountNavbar showBelowMenu={true} title="Account Type" save={update === true ? updateData : save} showCanelBtn={true}/>
      <div className="AddAccountCon">
         <div className="AddAccTypeFirst">
            <div className="AddAccContent">
                <p>Account Type</p>
                <input type="text" value={accType} onChange={(e) => setAccType(e.target.value)} />
            </div>
            <div className="AddAccContent">
                <p>Type</p>
               <select value={type} onChange={(e) => setType(e.target.value)}>
                <option>Choose any one</option>
                <option value="Regular">Regular</option>
                <option value="Receivable">Receivable</option>
                <option value="Payable">Payable</option>
                <option value="Liquidity">Liquidity</option>
               </select>
            </div>
            <div className="AddAccContent">
                <p>Internal Group</p>
               <select value={internal} onChange={(e) => setInternal(e.target.value)}>
                <option>Choose any one</option>
                <option value="Equity">Equity</option>
                <option value="Asset">Asset</option>
                <option value="Liability">Liability</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
                <option value="Off Balance">Off Balance</option>
               </select>
            </div>
           
            <div className="des">
            <h3>Description</h3>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="AddAccTypecheckbox">
                <label htmlFor='balance'>Bring Accounts Balance Forward</label>
                <input type="checkbox" value={balance} onChange={() => setBalance(!balance)} checked={balance} id='balance'/>
            </div>
           
         </div>
         <ToastContainer/>
      </div>
    </>
  )
}

export default AddAccountType