import axios from 'axios'
import React,{ useState }from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import {useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'

const AccountGroup = () => {

    const navigate = useNavigate();
    const [accGrp , setAccGrp] = useState([]);
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    const AccGrpURL = endpoints.AccountGroup.allAccGrp;

    const getAccGrp = () => {

        const formData = new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(AccGrpURL ,formData)
        .then((res) => {
            if(res.data.status === true)
            {
                setAccGrp(res.data.data);
            }
            else if(res.data.status === false)
            {
                if(res.data.code === 3)
                {
                  toast("Session expired , Please re-login",{type:"warning"})
                  navigate('/');
                }
                else{
                 toast(res.data.mrssage,{type:"error"});
                }
            }
        })
        .catch((err) => {
            console.log(err,"error");
        })
    }

    useEffect(() => {
      getAccGrp();
    },[])

    const delteAccGrpUrl = endpoints.AccountGroup.deleteAccGrp;
    const deleteItem = (data) => {
        const formData = new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        formData.append("ID",data);
        axios.post(delteAccGrpUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
                getAccGrp();
                toast("Account Group deleted Successfully",{type:"success"});
            }
            else if(res.data.status === false)
            {
                if(res.data.code === 3)
                {
                  toast("Session expired , Please re-login",{type:"warning"})
                  navigate('/');
                }
                else{
                 toast(res.data.mrssage,{type:"error"});
                }
            }
        })
        .catch((err) => {
            console.log(err,"error");
        })
    }

    const handleUpdate = (data) => {
        console.log(data ,"value")
        const val = accGrp.filter((itm,index) => {
          return itm.ID == data
        })
        const orgValue = val[0];
        console.log(orgValue,"irhhcbsdh")
        navigate("/AddAccGroup" , {state:orgValue});
    }
    

    const column = [
        {label:"code Prifix" , name:"CODE_PREFIX"},
        {label:"Name" , name:"ACCOUNT_GROUP_NAME"},
        {
            label:"Action",
            name:"ID",
            options:{
                customBodyRender:(value,tableMeta,updateValue) => {
                 return(
                    <>
                     <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}/>
                    </div>
                    </>
                 )
                }
            }
        }
    ]

    const handleCreatePage = () => {
        navigate('/AddAccGroup');
    }
  return (
    <>
    <AccountNavbar showBelowMenu={true}  handleCreatePage={handleCreatePage}  title="Account Group"/>
    <CustomTable data={accGrp} column={column}/>
    <ToastContainer/>
    </>
  )
}

export default AccountGroup