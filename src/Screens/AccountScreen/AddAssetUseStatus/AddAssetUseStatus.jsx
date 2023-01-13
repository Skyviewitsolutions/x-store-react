import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import { endpoints } from '../../../services/endpoints';
import './AddAssetUseStatus.css'

const AddAssetUseStatus = () => {

  const navigate = useNavigate()
  const [value , setValue] = useState("");
  const [name , setName] = useState("");
  const [update , setUpdate] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const allAddAssetUseStatus = endpoints.AssetUseStatus.addAssetUseStatus;

  const save = () => {
    if(value === "")
    {
      toast("Value is Required!",{type:"warning"});
    }
    else if(name === "")
    {
      toast("name is required!",{type:"warning"});
    }
    else{
      const formData = new FormData();
      formData.append("Value",value);
      formData.append("Name",name);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(allAddAssetUseStatus,formData)
      .then((res) => {
        if(res.data.status === true)
        {
          toast("Asset Use Status Added Successfully!",{type:"success"});
          setTimeout(() => {
            navigate('/AssetUseStatus')
          }, (1000));
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

  const updateAssetUSURL = endpoints.AssetUseStatus.updateAssetUseStatus;

  useEffect(() => {
    if(selectedData)
    {
     setUpdate(true);
     setValue(selectedData.VALUE);
     setName(selectedData.NAME);
    }
  },[selectedData])

  const updateData = () => {
    if(value === "")
    {
      toast("Value is Required!",{type:"warning"});
    }
    else if(name === "")
    {
      toast("name is required!",{type:"warning"});
    }
    else{
      const formData = new FormData();
      formData.append("ID" ,selectedData.ID);
      formData.append("Value",value);
      formData.append("Name",name);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(updateAssetUSURL,formData)
       .then((res) => {
         console.log(res,"update")
         if(res.data.status === true)
         {
           toast("Aseet use Status is updated Successfully !",{type:"success"})
           setTimeout(() => {
            navigate('/AssetUseStatus')
          }, (1000));
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

  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Asset Use Status" save={update === true ? updateData : save} showCanelBtn={true}/>
        <div className="AddAssetUseStatusCon">
        <div className="AddAssetStatusContent">
             <div className="AddAssetStatusText">
                <p>Value</p>
                <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
             </div>
             <div className="AddAssetStatusText">
                <p>Name</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
             </div>
           </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default AddAssetUseStatus