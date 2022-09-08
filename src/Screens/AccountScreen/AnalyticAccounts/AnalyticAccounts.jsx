import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable';
import './AnalyticAccounts.css'

const AnalyticAccounts = () => {
 
    const navigate = useNavigate();
    const data = [
        {
            id:1,
            Name:"Al Aflag Project",
            Refrence:"",
            Customer:"",
            Debit:"2,817,110.48",
            Credit:'4,269,380.86',
            Balance:"1,452,270.38",

        },
        {
            id:2,
            Name:"Al Bahah Administration",
            Refrence:"",
            Customer:"",
            Debit:"2,817,110.48",
            Credit:'4,269,380.86',
            Balance:"1,452,270.38",

        },
        {
            id:3,
            Name:"Al Bahah Warehouse",
            Refrence:"",
            Customer:"",
            Debit:"2,817,110.48",
            Credit:'4,269,380.86',
            Balance:"1,452,270.38",

        },
        {
            id:4,
            Name:"Al Bahah Workshop",
            Refrence:"",
            Customer:"",
            Debit:"2,817,110.48",
            Credit:'4,269,380.86',
            Balance:"1,452,270.38",

        },
        {
            id:5,
            Name:"Al Majma'ah 108 Project",
            Refrence:"",
            Customer:"",
            Debit:"2,817,110.48",
            Credit:'4,269,380.86',
            Balance:"1,452,270.38",

        },
    ]

    const column = [
        {label:"Name" , name:"Name"},
        {label:"Refrence", name:"Refrence"},
        {label:"Customer", name:"Customer"},
        {label:"Debit", name:"Debit"},
        {label:"Credit", name:"Credit"},
        {label:"Balance", name:"Balance"},
    ]

    const handleCreatePage = () => {
     navigate('/AddAnalyticAccount')
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage}  title="Analytic Account"/>
        <CustomTable  data={data} column={column}/>
    </div>
  )
}

export default AnalyticAccounts