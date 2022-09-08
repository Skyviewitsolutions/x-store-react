import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'

const AccountTypes = () => {
 
    const navigate = useNavigate();
    const data = [
        {
            id:1,
            AccountTypes:"Receivable",
            Type:"Receivable",
            Internalgroup:"Asset",
        },
        {
            id:2,
            AccountTypes:"Payable",
            Type:"Payable",
            Internalgroup:"Liability",
        },
        {
            id:3,
            AccountTypes:"Bank and Cash",
            Type:"Liquidity",
            Internalgroup:"Asset",
        },
        {
            id:4,
            AccountTypes:"Credit Card",
            Type:"Liquidity",
            Internalgroup:"Liquidity",
        },
        {
            id:5,
            AccountTypes:"Current Assets",
            Type:"Regular",
            Internalgroup:"Asset",
        },

    ]

    const column = [
        {label:"Account Types", name:"AccountTypes"},
        {label:"Type" , name:"Type"},
        {label:"Internal Group" , name:"Internalgroup"}
    ]

    const handleCreatePage= () => {
        navigate('/AddAccountType')
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Account Type"/>
        <CustomTable  data={data} column={column}/>
    </div>
  )
}

export default AccountTypes