import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable';
import { endpoints } from '../../../services/endpoints';
import './AnalyticAccounts.css'

const AnalyticAccounts = () => {
 
    const navigate = useNavigate();
     const [analyticAcc , setAnayticAcc] = useState([]);

     const allAnalyticAccUrl = endpoints.AnalyticAcc.allAnaAcc;

     const getAnalyticAcc = () => {
      axios.post(allAnalyticAccUrl)
      .then((res) => {
        if(res.data.status === true)
        {
            setAnayticAcc(res.data.data);
        }
        else if(res.data.status === false)
        {
            toast(res.data.message);
        }
      })
     }

     useEffect(() => {
     getAnalyticAcc();
     },[])

     const column = [
        { label: "Name", name: "ANALYTIC_ACCOUNT" },
    { label: "Reference", name: "ANALYTIC_REFERENCE" },
    { label: "Customer", name: "ANALYTIC_CUSTOMER" },
    { label: "Debit", name: "EXCLUDED_JOURNALS" },
    { label: "Credit", name: "EXCLUDED_JOURNALS" },
    { label: "Balance", name: "EXCLUDED_JOURNALS" },
     ]
    const handleCreatePage = () => {
     navigate('/AddAnalyticAccount')
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage}  title="Analytic Account"/>
        <CustomTable  data={analyticAcc} column={column}/>
    </div>
  )
}

export default AnalyticAccounts