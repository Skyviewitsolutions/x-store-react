import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'

const AnalyticAccountType = () => {

    const navigate = useNavigate();

    const data = [
        {
            id:1,
            AnalyticAccountType:"Administrative",
        },
        {
            id:2,
            AnalyticAccountType:"Projects",
        },
        {
            id:3,
            AnalyticAccountType:"Machines and Equipment",
        },
        {
            id:4,
            AnalyticAccountType:"Workshops",
        },
        {
            id:5,
            AnalyticAccountType:"Transportation",
        },

    ]

    const column = [
        {label:"Analytic Account Type" , name:"AnalyticAccountType"}
    ]

    const handleCreatePage = () => {
     navigate('/AddAnalyticAccountType');
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage}title="Analytic Account Type"/>
        <CustomTable data={data} column={column}/>
    </div>
  )
}

export default AnalyticAccountType