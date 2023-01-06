import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import { endpoints } from '../../../services/endpoints';
import './AddAnalyticTag.css'
const AddAnalyticTag = () => {

  const navigate = useNavigate()
  const [ analyTag , setAnalyTag] = useState("");
  const [analyDis , setAnalyDis] = useState(false);
  const [analAcc , setAnalAcc] = useState("");
  const [update , setUpdate] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const addAnnTag = endpoints.AnalyticTag.addAnnTag;

  const save = () => {
    if(analyTag === "")
    {
      toast("Analytic Tag is Required!",{type:"warning"})
    }
    else if(analyDis === "")
    {
      toast("Analytic Distribution is Required!",{type:"warning"})
    }
    else if(analAcc === "")
    {
      toast("Analytic Account is Required!",{type:"warning"});
    }
    else{
      const formData = new FormData()
      formData.append("Analytic_Tag",analyTag);
      formData.append("Analytic_Distribution",analyDis);
      formData.append("Analytic_Account",analAcc);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(addAnnTag,formData)
      .then((res) => {
        if(res.data.status === true)
        {
          toast("Analytic Tag Added Successfully",{type:"success"});
          setTimeout(() => {
            navigate('/AnalyticTag')
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
      .catch((err) =>{
        console.log(err,"error");
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
   setAnalyTag(selectedData.ANALYTIC_TAG);
   setAnalyDis(selectedData.ANALYTIC_DISTRIBUTION);
   setAnalAcc(selectedData.ANALYTIC_ACCOUNT);
  }
  },[selectedData])

  const updateAnalTagUrl = endpoints.AnalyticTag.updateAnnTag;

  const updateData = () => {
    if(analyTag === "")
    {
      toast("Analytic Tag is Required!",{type:"warning"})
    }
    else if(analyDis === "")
    {
      toast("Analytic Distribution is Required!",{type:"warning"})
    }
    else if(analAcc === "")
    {
      toast("Analytic Account is Required!",{type:"warning"});
    }
    else{
      const formData = new FormData()
      formData.append("ID",selectedData.ID);
      formData.append("Analytic_Tag",analyTag);
      formData.append("Analytic_Distribution",analyDis);
      formData.append("Analytic_Account",analAcc);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(updateAnalTagUrl,formData)
      .then((res) => {
        if(res.data.status === true)
        {
          toast("Analytic Tag Updated Successfully",{type:"success"});
           setTimeout(() => {
            navigate('/AnalyticTag')
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
      .catch((err) =>{
        console.log(err,"error");
      })
  }
}


  return (
    <>
    <AccountNavbar showBelowMenu={true} title="Analytic Tag" save={update === true ? updateData : save} showCanelBtn={true} />
    <div className="AddAnalyticTagCon">
       <div className="AddAnalyticTagContent">
        <p>Analytic Tag</p>
        <input type="text" value={analyTag} onChange={(e) => setAnalyTag(e.target.value)}/>
       </div>
       <div className="AddAnalyticTagContent">
        <p>Analytic Account</p>
        <input type="text" value={analAcc} onChange={(e) => setAnalAcc(e.target.value)}/>
       </div>
       <div className="AddAnalyticTagChecbox">
        <label htmlFor='analyDis'>Analytic Distribution</label>
        <input type="checkbox" value={analyDis} onChange={() => setAnalyDis(!analyDis)} checked={analyDis} id='analyDis'/>
       </div>
       <ToastContainer/>
        </div>
    </>
  )
}

export default AddAnalyticTag