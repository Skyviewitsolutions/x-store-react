import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'

const AnalyticTag = () => {

    const navigate = useNavigate();
    const data = [
        {
            id:1,
            AnalyticTag:"135",
        },
        {
            id:2,
            AnalyticTag:"",
        },
        {
            id:3,
            AnalyticTag:"",
        },
    ]
    
    const column = [
        {label:"Analytic Tag", name:"AnalyticTag"}
    ]

    const handleCreatePage = () => {
      navigate('/AddAnalyticTag');
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Analytic Tag" />
        <CustomTable data={data} column={column}/>
    </div>
  )
}

export default AnalyticTag