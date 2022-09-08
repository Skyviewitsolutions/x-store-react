import React from 'react'
import {useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'

const AccountGroup = () => {

    const navigate = useNavigate();
    const data = [
        {
            id:1,
            codePrifix:'',
            Name:"Bank",
        },
        {
            id:2,
            codePrifix:'',
            Name:"Other C.Assets",
        },
        {
            id:3,
            codePrifix:'',
            Name:"accumulated depreciation",
        },
        {
            id:4,
            codePrifix:'',
            Name:"Advance Payment",
        },
        {
            id:5,
            codePrifix:'',
            Name:"Inventory/C.Assets",
        }
    ]

    const column = [
        {label:"code Prifix" , name:"codePrifix"},
        {label:"Name" , name:"Name"}
    ]

    const handleCreatePage = () => {
        navigate('/AddAccGroup');
    }
  return (
    <>
    <AccountNavbar showBelowMenu={true}  handleCreatePage={handleCreatePage}  title="Account Group"/>
    <CustomTable data={data} column={column}/>
    </>
  )
}

export default AccountGroup