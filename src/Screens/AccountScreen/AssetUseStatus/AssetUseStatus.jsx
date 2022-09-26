import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer} from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'

const AssetUseStatus = () => {
    const navigate = useNavigate();
    const  handleCreatePage = () => {
        navigate('/AddAssetUseStatus');
    }
   
    const [assetUseStatus , setAssetUseStatus] = useState([]);
    const allAssetUsseStatusUrl = endpoints.AssetUseStatus.allAssetuseStatus;

    const getAssetType = () => {
        axios.post(allAssetUsseStatusUrl)
          .then((res) => {
            if(res.data.status === true)
            {
                setAssetUseStatus(res.data.data);
            }
            else if(res.data.status === false)
            {
                alert(res.data.message);
            }

        })
        .catch((err) => {
            console.log(err,"error");
        })
    }

    const deleteAssetUseSt = endpoints.AssetUseStatus.deleteAssetUseStatus;

    const deleteItem = (data) => {
        const formData = new FormData();
        formData.append("ID",data);
        axios.post(deleteAssetUseSt,formData)
        .then((res) => {
            console.log(res,"response Acc")
            if(res.data.status === true)
            {
                getAssetType();
                toast("Asset Use Status deleted Successfully!",{type:"success"})
            }
            else if(res.data.status === false)
            {
                getAssetType();
                toast(res.data.message,{type:"error"})
            }
          })
          .catch((err) => {
            console.log(err,"error")
          })
    }


    useEffect(() => {
        getAssetType();
    },[])

    const handleUpdate = (data) => {
        console.log(data ,"value")
        const val = assetUseStatus.filter((itm,index) => {
          return itm.ID == data
        })
        const orgValue = val[0];
        console.log(orgValue,"irhhcbsdh")
        navigate("/AddAssetUseStatus" , {state:orgValue});   
    }

    const column = [
        {label:"Value" , name:"VALUE"},
        {label:"Name" , name:"NAME"},
        {
            label:"Action",
            name:"ID",
            options:{
                customBodyRender:(value,tableMeta,updateValue) =>  {
                    return(
                        <>
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}/>
                        </>
                    )
                }
            }
        }
    ]
  return (
    <div>
        <AccountNavbar showBelowMenu={true}  handleCreatePage={handleCreatePage} title="Asset Use Status"/> 
        <CustomTable data={assetUseStatus} column={column} />
        <ToastContainer/>
    </div>
  )
}

export default AssetUseStatus