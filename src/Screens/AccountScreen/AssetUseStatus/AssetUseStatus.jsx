import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'

const AssetUseStatus = () => {
    const navigate = useNavigate();
    const  handleCreatePage = () => {
        navigate('/AddAssetUseStatus');
    }
    const data = [
        {
            id:1,
            value:"new",
            name:"new",
        },
        {
            id:2,
            value:"active",
            name:"active",
        },
        {
            id:3,
            value:"Inactive",
            name:"Inactive",
        },
        {
            id:4,
            value:"Scrap",
            name:"Scrap",
        },
        {
            id:5,
            value:"Sold",
            name:"Sold",
        },

    ]

    const column = [
        {label:"Value" , name:"value"},
        {label:"Name" , name:"name"}
    ]
  return (
    <div>
        <AccountNavbar showBelowMenu={true}  handleCreatePage={handleCreatePage} title="Asset Use Status"/> 
        <CustomTable data={data} column={column} />
    </div>
  )
}

export default AssetUseStatus