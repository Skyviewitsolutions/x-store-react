import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer} from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import DeletePopup from '../../../components/Model/DeletePopup/DeletePopup'
import { endpoints } from '../../../services/endpoints'

const AssetUseStatus = () => {
    const navigate = useNavigate();
    const  handleCreatePage = () => {
        navigate('/AddAssetUseStatus');
    }

    const [show , setShow] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [selectedData, setSelectedData] = useState("");
   
    const [assetUseStatus , setAssetUseStatus] = useState([]);
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    const allAssetUsseStatusUrl = endpoints.AssetUseStatus.allAssetuseStatus;

    const getAssetType = () => {
        const formData = new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(allAssetUsseStatusUrl , formData)
          .then((res) => {
            if(res.data.status === true)
            {
                var val = res.data.data;
                val = val.reverse();
                const filterAssUseStatus = val.filter((itm,ind) => {
                    return itm.DELETE_STATUS != "X"
                  })
                setAssetUseStatus(filterAssUseStatus);
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

    const deleteAssetUseSt = endpoints.AssetUseStatus.deleteAssetUseStatus;

    const deleteItem = (data) => {
        const formData = new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        formData.append("ID",data);
        axios.post(deleteAssetUseSt,formData)
        .then((res) => {
            console.log(res,"response Acc")
            if(res.data.status === true)
            {
                setShow(false)
                setDeleteConfirm(false)
                setSelectedData("")
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

    useEffect(() => {
        if (deleteConfirm) {
          deleteItem(selectedData);
        }
      }, [deleteConfirm]);

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
              print:false,
                customBodyRender:(value,tableMeta,updateValue) =>  {
                    return(
                        <>
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}  style={{cursor:"pointer"}}/>
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
        <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
        <ToastContainer/>
    </div>
  )
}

export default AssetUseStatus