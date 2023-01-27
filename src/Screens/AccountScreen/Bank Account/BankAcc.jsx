import React, { useState } from 'react'
import './BankAcc.css'
import CustomTable from '../../../components/CustomTable/CustomTable'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../../../services/endpoints'
import axios from 'axios'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { toast,ToastContainer} from 'react-toastify';
import DeletePopup from '../../../components/Model/DeletePopup/DeletePopup'

const BankAcc = (props) => {

    const navigate = useNavigate();

    const handleCreatePage = () => {
        navigate('/AddBankAcc')
    }

    const [show , setShow] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [selectedData, setSelectedData] = useState("");
    const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
    const [bankAcc , setBankAcc] = useState([]);

    const allBankUrl = endpoints.BankAccount.allBank;

    const getAllBank = () => {
        const formData = new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(allBankUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
                var val = res.data.data;
                val = val.reverse();
                const filterBankAcc = val.filter((itm,ind) => {
                    return itm.DELETE_STATUS != "X"
                  })
                setBankAcc(filterBankAcc);
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
        getAllBank();
    },[])

    const deleteBankUrl = endpoints.BankAccount.deleteBank;

    const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" ,data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(deleteBankUrl,formData)
    .then((res) => {
        if(res.data.status === true)
        {
            setShow(false)
            setDeleteConfirm(false)
            setSelectedData("")
            getAllBank();
            toast("Bank Account Is Deleted Successfully!",{type:"success"})
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
    const val = bankAcc.filter((itm,index) => {
        return itm.ID === data
    })
    const orgValue = val[0];
    console.log(orgValue,"value")
    navigate("/AddBankAcc",{state:orgValue});
    }
    
    
    const column = [
        { label :'Bank Name', name:'BANK_ACCOUNT_NAME'},
        { label :'Account Number', name:'ACCOUNT_NUMBER'},
        {
            label:"Action",
            name:"ID",
            options:{
                print:false,
                customBodyRender:(value,tableMeta,updateValue) => {
                    return(
                        <>
                        <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }} style={{cursor:"pointer"}}/>
                    </div>
                        </>
                    )
                }
            }
        }
      ]
  return (
    <>
     <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Bank Account"/>
    <CustomTable  data={bankAcc} column={column}/>
    <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
    <ToastContainer/>
    </>
  )
}

export default BankAcc