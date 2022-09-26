import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import { endpoints } from '../../../services/endpoints';
import './AddAnalyticAccountType.css'

const AddAnalyticAccountType = () => {

  const [annAcctype , setAnAccType] = useState("");
  const [update , setUpdate] = useState("");

  const addAnAccTypeUrl = endpoints.AnalyticAccType.addAnAccType;

  const save = () => {
    if(annAcctype === "")
    {
      toast("Analytic Account Type Is Required!",{type:"warning"});
    }
    else{
      const formdata = new FormData();
      formdata.append("Analytic_Acc_Type",annAcctype);
      axios.post(addAnAccTypeUrl,formdata)
      .then((res) => {
        if(res.data.status === true)
        {
          toast("Analytic Account Type Added Successfully",{type:"success"});
        }
        else if(res.data.status === false)
        {
          toast(res.data.message,{type:"error"});
        }
      })
      .catch((err) => {
        console.log(err,"error")
      })
    }
  }

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");

  const updateAnnAcctypeUrl = endpoints.AnalyticAccType.updateAnAccType;

  useEffect(() => {
    if(selectedData)
    {
      setUpdate(true);
      setAnAccType(selectedData.ANALYTIC_ACCOUNT_TYPE);
    }
  },[selectedData])

  const updateData =  () => {
    if(annAcctype === "")
    {
      toast("Analytic Account Type Is Required!",{type:"warning"});
    }
    else{
      const formdata = new FormData();
      formdata.append("ID" ,selectedData.ANALYTIC_ACCOUNT_TYPE_ID);
      formdata.append("Analytic_Acc_Type",annAcctype);
      axios.post(updateAnnAcctypeUrl,formdata)
      .then((res) => {
        console.log(res,"update AccTax")
        if(res.data.status === true)
        {
          toast("Analytic Account Type is updated Successfully !",{type:"success"})
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
        <AccountNavbar showBelowMenu={true} title="Analytic Account Type" save={update === true ? updateData : save}/>
        <div className="AddAccTyCon">
            <div className="AddAccTypeContent">
                <p>Analytic Account Type</p>
                <input type="text" value={annAcctype} onChange={(e) => setAnAccType(e.target.value)}/>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default AddAnalyticAccountType