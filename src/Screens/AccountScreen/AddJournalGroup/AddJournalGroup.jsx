import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { endpoints } from '../../../services/endpoints';
import './AddJournalGroup.css';

const AddJournalGroup = () => {

  const navigate = useNavigate()
  const [jourrnalG , setJournalG] = useState("");
  const [excluded , setExcluded] = useState("");
  const [update , setUpdate] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
const userAuth = localStorage.getItem("userAuth");

  const addJournalGURL = endpoints.JournalGroup.addJournalGroup;

 

  const save = () => {
    if(jourrnalG === "")
    {
      toast("Journal Group is Required",{type:"warning"});
    }
    else if(excluded === "")
    {
      toast("Excluded is Required!",{type:"warning"});
    }
    else{
      const formData = new FormData();
      formData.append("Journal_Group",jourrnalG);
      formData.append("Excluded_Journals",excluded);
      formData.append("User_Authorization" , getAuthtoken)
      formData.append("User_AuthKey" , userAuth);
      axios.post(addJournalGURL,formData)
      .then((res) => {
        console.log(res,"ressponsone")
       if(res.data.status === true)
       {
        toast("Journal Group Added Successfully",{type:"success"});
        setTimeout(() => {
          navigate('/JournalGroup')
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

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");

  useEffect(() => {
   if(selectedData)
   {
    setUpdate(true);
    setJournalG(selectedData.JOURNAL_GROUP);
    setExcluded(selectedData.EXCLUDED_JOURNALS);
   }
  },[selectedData])

  const updateJournalGURL = endpoints.JournalGroup.updateJournalGroup;

  const updateData = () => {
    if(jourrnalG === "")
    {
      toast("Journal Group is Required",{type:"warning"});
    }
    else if(excluded === "")
    {
      toast("Excluded is Required!",{type:"warning"});
    }
       else{
        const formData = new FormData();
        formData.append("ID",selectedData.JOURNAL_GROUP_ID);
        formData.append("Journal_Group",jourrnalG);
        formData.append("Excluded_Journals",excluded);
        formData.append("User_Authorization" , getAuthtoken)
        formData.append("User_AuthKey" , userAuth);
        axios.post(updateJournalGURL,formData)
        .then((res) => {
          if(res.data.status === true)
          {
            toast("Journal Group is updated Successfully !",{type:"success"})
            setTimeout(() => {
              navigate('/JournalGroup')
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
    <AccountNavbar showBelowMenu={true} title="Journal Group" save={update === true ? updateData : save} showCanelBtn={true}/>
    <div className='AddJournalGroupCon'>
      <div className="JournaalGroupContent">
        <p>Journal Group</p>
        <input type="text" value={jourrnalG} onChange={(e) => setJournalG(e.target.value)}/>
      </div>
      <div className="JournaalGroupContent">
        <p>Excluded Journals</p>
        <input type="text" value={excluded} onChange={(e) => setExcluded(e.target.value)}/>
      </div>
      <ToastContainer/>
    </div>
    </>
  )
}

export default AddJournalGroup