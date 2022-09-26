import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer} from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'
import './AssetTypes.css'

const AssetTypes = () => {
    const navigate = useNavigate()

    const [assetType , setAssetType] = useState([]);
    const allAseetTypeUrl = endpoints.AssetType.allAssettype;

    const getAssetType = () => {
        axios.post(allAseetTypeUrl)
        .then((res) => {
            if(res.data.status === true){
              setAssetType(res.data.data);
            }
            else if(res.data.status === false)
            {
                toast(res.data.message,{type:"warning"});
            }
        })
        .catch((err) => {
            console.log(err,"error");
        })
    }

    useEffect(() => {
        getAssetType();
    },[])
const deleteAssetTypeUrl = endpoints.AssetType.deleteAssetType;
    const deleteItem = (data) =>  {
        const formData = new FormData();
        formData.append("ID",data);
        axios.post(deleteAssetTypeUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
                getAssetType();
                toast("Asset type deleted Successfully",{type:"success"});
            }
            else if(res.data.status === false)
            {
                toast(res.data.message,{type:"error"});
            }
        })
        .catch((err) => {
            console.log(err,"error");
        })
    }

    const handleUpdate = (data) => {
        console.log(data ,"value")
        const val = assetType.filter((itm,index) => {
          return itm.ASSET_TYPE_ID == data
        })
        const orgValue = val[0];
        console.log(orgValue,"irhhcbsdh")
        navigate("/AddAssetType" , {state:orgValue});
    }
    const column = [
        {label:"Asset Type", name:"ASSET_TYPE"},
        {label:"Parent Category" , name:"PRODUCT_CATEGORY"},
        {label:"Journal" , name:"JOURNAL_INFORMATION"},
        {label:"Computation Method",name:"COMPUTATION_METHOD"},
        {
            label:"Action",
            name:"ASSET_TYPE_ID",
            options:{
                customBodyRender:(value,tableMeta,updateValue) => {
                    return(
                        <>
                        <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d"onClick={() => handleUpdate(value)} />
                        <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}/>
                    </div>
                        </>
                    )
                }
            }
        }
    ]

    const handleCreatePage = () => {
        navigate('/AddAssetType')
    }
  return (
    <>
   <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage}  title="Asset Type"/>
   <CustomTable data={assetType} column={column}/>
   <ToastContainer/>
    </>
  )
}

export default AssetTypes