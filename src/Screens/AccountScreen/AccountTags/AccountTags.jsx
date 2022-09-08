import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import './AccountTags.css'
const AccountTags = () => {
  
    const navigate = useNavigate();
    const data = [
        {
            id:1,
            TagName:"Operating Activities",
            Applicability:"Accounts",
        },
        {
            id:2,
            TagName:"Financing Activities",
            Applicability:"Accounts",
        },
        {
            id:3,
            TagName:"Investing & Extraordinary Activities",
            Applicability:"Accounts",
        },
    ]

    const column = [
        {label:"Tag Name" , name:"TagName"},
        {label:"Applicability" , name:"Applicability"}
    ]

    const handleCreatePage = () => {
    navigate('/AddAccountTag')
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Account Tag" handleCreatePage={handleCreatePage}/>
        <CustomTable  data={data} column={column}/>
    </div>
  )
}

export default AccountTags