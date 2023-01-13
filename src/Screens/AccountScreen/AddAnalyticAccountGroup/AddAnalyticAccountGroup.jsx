import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast,ToastContainer} from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import { endpoints } from '../../../services/endpoints'
import './AddAnalyticAccountGroup.css'

const AddAnalyticAccountGroup = () => {
  
  const navigate = useNavigate()
  const [name , setName] = useState("");
  const [parent , setParent] = useState("");
  const [description , setDescription] = useState("")
  const [update , setUpdate] = useState("");
  
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");  
  const addAnnAccGrpUrl = endpoints.AnalyticAccGrp.addAnnAccGrp;

  const save = () => {
    if(name === "")
    {
      toast("Name is Required!",{type:"warning"});
    }
    else if(parent === "")
    {
      toast("Parent Is Required!",{type:"warning"});
    }
    else
    {
    const formData = new FormData();
    formData.append("Name",name);
    formData.append("Parent",parent);
    formData.append("Description",description);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(addAnnAccGrpUrl,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        toast("Analytic Account Group Added Successfully",{type:"success"});
        setTimeout(() => {
          navigate('/AnalyticAccountGroup')
        }, 1000);
      }
      else if(res.data.status === false)
      {
        toast(res.data.message,{type:"error"});
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
  const updateAnnAccUrl = endpoints.AnalyticAccGrp.updateAnnAccGrp;

  useEffect(() => {
    if(selectedData)
    {
      setUpdate(true);
      setName(selectedData.ANALYTIC_NAME);
      setParent(selectedData.ANALYTIC_PARENT);
      setDescription(selectedData.ANALYTIC_DESCRIPTION);
    }
  },[selectedData])

  const updateData = () => {
    if(name === "")
    {
      toast("Name is Required!",{type:"warning"});
    }
    else if(parent === "")
    {
      toast("Parent Is Required!",{type:"warning"});
    }
    else{
      const formData = new FormData();
      formData.append("Id" ,selectedData.ID);
      formData.append("Name",name);
      formData.append("Parent",parent);
      formData.append("Description",description);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(updateAnnAccUrl,formData)
       .then((res) => {
         console.log(res,"update")
         if(res.data.status === true)
         {
           toast("Aseet use Status is updated Successfully !",{type:"success"})
           setTimeout(() => {
            navigate('/AnalyticAccountGroup')
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

  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Analytic Account Group" save={update === true ? updateData : save} showCanelBtn={true}/>
      <div className='AddAnalyticAccountGroupCon'>
       {/* <div className="AddAnalyticAccountGrouphead">
        <div className="AddAnalyticAccountGroupcontent">
          <FaBars
            size="33px"
            style={{ color: "#848484", marginTop: "5px" }}
          />
          <div className="AddAnalyticAccountGrouptext">
            <p>0</p>
            <p>Account</p>
          </div>
        </div>
      </div> */}
      <div className="AddAnalyticAccountGroupdetails">
            <div className="AddAnalyticAccountGroupfirst">
                <div className="AddAnalyticAccountGrouptext1">
                    <p>Name</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="AddAnalyticAccountGrouptext1">
                    <p>Parent</p>
                    <select value={parent} onChange={(e) => setParent(e.target.value)}>
                        <option>Choose any one</option>
                        <option value="Bank">Bank</option>s
                        <option value="Other C.Assets">Other C.Assets</option>
                        <option value="accumulated depreciation">accumulated depreciation</option>
                        <option value="Advance Payment">Advance Payment</option>
                        <option value="Inventory/C.Assets">Inventory/C.Assets</option>
                        <option value="Cash">Cash</option>
                        <option value="Sub employee">Sub employee</option>
                    </select>
                </div>
                <div className="AddAnalyticAccountGrouptext1">
                    <p>Description</p>
                  <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
            </div>
            {/* <div className="AddAnalyticAccountGroupsecond">
                <p>Hierarchy</p>
                <div className="AddAnalyticAccountGroupalertbox">
                    <p>No hierarchy position.</p>
                </div>
            </div> */}
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default AddAnalyticAccountGroup