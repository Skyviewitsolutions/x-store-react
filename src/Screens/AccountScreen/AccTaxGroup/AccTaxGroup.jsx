import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import { endpoints } from '../../../services/endpoints';
import './AccTaxGroup.css';
const AccTaxGroup = () => {
 
    const navigate =  useNavigate();
    const [accTaxGrp , setAccTaxGrp] = useState([]);
    const allAccTaxGrpUrl = endpoints.AccountTaxGrp.allAccgrpTax;

    const getAccTaxGrp = () => {
        axios.post(allAccTaxGrpUrl)
        .then((res) => {
            if(res.data.status === true)
            {
                setAccTaxGrp(res.data.data);
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
     getAccTaxGrp();
    },[])

    const deleteAcctaxUrl = endpoints.AccountTaxGrp.deleteAccGrpTax;

    const deleteItem = (data) => {
      const formData = new FormData();
      formData.append("Id",data);
      axios.post(deleteAcctaxUrl,formData)
      .then((res) => {
        console.log(res,"response Acc")
        if(res.data.status === true)
        {
            getAccTaxGrp();
            toast("Account Tax Group deleted Successfully!",{type:"success"})
        }
        else if(res.data.status === false)
        {
            getAccTaxGrp();
            toast(res.data.message,{type:"error"})
        }
      })
      .catch((err) => {
        console.log(err,"error")
      })
    }

    const handleUpdate = (data) => {
        console.log(data ,"value")
        const val = accTaxGrp.filter((itm,index) => {
          return itm.ACCOUNT_ID == data
        })
        const orgValue = val[0];
        console.log(orgValue,"irhhcbsdh")
        navigate("/AddAccTaxGroup" , {state:orgValue});
    }
    
    const column = [
        { label : "Name" , name :"ACCOUNT_NAME"},
        { label : "Tax Curent Account(Payable)" , name:"TAX_PAYABLE"},
        { label : "Tax Current Account(Receivable)", name:"TAX_RECEIVAL"},
        {label : "Advance Tax Payment Account" , name:"ADVANCE_TAX_PAYMENT_ACCOUNT"},
        {
            label:"Action",
            name:"ACCOUNT_ID",
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

    const handleCreatePage = () => {
        navigate('/AddAccTaxGroup');
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Account Tax Group"/>
        <CustomTable data={accTaxGrp} column={column}/>
        <ToastContainer/>
    </div>
  )
}

export default AccTaxGroup