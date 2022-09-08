import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import './AssetTypes.css'

const AssetTypes = () => {
    const navigate = useNavigate()

    const data = [
        {
            id:1,
            AssetType:"The machines and the equipments",
            ParentCategory:"",
            Journal:"Assets(SAR)",
            ComputationMethod:"Linear"
        },
        {
            id:2,
            AssetType:"The Cars",
            ParentCategory:"",
            Journal:"Assets(SAR)",
            ComputationMethod:"Linear"
        },
        {
            id:3,
            AssetType:"Prehab Houses",
            ParentCategory:"",
            Journal:"Assets(SAR)",
            ComputationMethod:"Linear"
        },
        {
            id:4,
            AssetType:"Leasehold improvements",
            ParentCategory:"",
            Journal:"Assets(SAR)",
            ComputationMethod:"Linear"
        },
        {
            id:5,
            AssetType:"lab equipment",
            ParentCategory:"",
            Journal:"Assets(SAR)",
            ComputationMethod:"Linear"
        },
    ]

    const column = [
        {label:"Asset Type", name:"AssetType"},
        {label:"Parent Category" , name:""},
        {label:"Journal" , name:"Journal"},
        {label:"Computation Method",name:"ComputationMethod"},
    ]

    const handleCreatePage = () => {
        navigate('/AddAssetType')
    }
  return (
    <>
   <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage}  title="Asset Type"/>
   <CustomTable data={data} column={column}/>
    </>
  )
}

export default AssetTypes