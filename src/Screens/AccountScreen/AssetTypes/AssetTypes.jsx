import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer} from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import DeletePopup from '../../../components/Model/DeletePopup/DeletePopup'
import { endpoints } from '../../../services/endpoints'
import './AssetTypes.css'

const AssetTypes = () => {

    const navigate = useNavigate()

    const [show , setShow] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [selectedData, setSelectedData] = useState("");

    const [assetType , setAssetType] = useState([]);
    const allAseetTypeUrl = endpoints.AssetType.allAssettype;
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    const getAssetType = () => {
        const formData = new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(allAseetTypeUrl , formData)
        .then((res) => {
            if(res.data.status === true){
                var val = res.data.data;
                val = val.reverse();
                const filterassetType = val.filter((itm,ind) => {
                    return itm.DELETE_STATUS != "X"
                  })
              setAssetType(filterassetType);
            }
            else if(res.data.status === false)
            {
                if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
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
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(deleteAssetTypeUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
                setShow(false)
                setDeleteConfirm(false)
                setSelectedData("")
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

    useEffect(() => {
        if (deleteConfirm) {
          deleteItem(selectedData);
        }
      }, [deleteConfirm]);

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
                print:false,
                customBodyRender:(value,tableMeta,updateValue) => {
                    return(
                        <>
                        <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d"onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d"   onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}  style={{cursor:"pointer"}}/>
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
   <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
   <ToastContainer/>
    </>
  )
}

export default AssetTypes