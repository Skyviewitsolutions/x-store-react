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

const BankAcc = (props) => {

    const navigate = useNavigate();

    const handleCreatePage = () => {
        navigate('/AddBankAcc')
    }
  
    const [bankAcc , setBankAcc] = useState([]);

    const allBankUrl = endpoints.BankAccount.allBank;

    const getAllBank = () => {
        axios.post(allBankUrl)
        .then((res) => {
            if(res.data.status === true)
            {
                setBankAcc(res.data.data);
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

    useEffect(() => {
        getAllBank();
    },[])

    const deleteBankUrl = endpoints.BankAccount.deleteBank;

    const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" ,data);
    axios.post(deleteBankUrl,formData)
    .then((res) => {
        if(res.data.status === true)
        {
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

    const handleUpdate = (data) => {
    const val = bankAcc.filter((itm,index) => {
        return itm.BANK_ID === data
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
            name:"BANK_ID",
            options:{
                customBodyRender:(value,tableMeta,updateValue) => {
                    return(
                        <>
                        <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}/>
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
    <ToastContainer/>
    </>
  )
}

export default BankAcc