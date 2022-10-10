import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer} from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'

const DifferedExpenseType = () => {
 
  const navigate = useNavigate();
  const [defExType , setDefType] = useState([]);
  const allDefExTypeUrl = endpoints.DefExpenseType.allDefExType;

  const getDefExType = () => {
    axios.post(allDefExTypeUrl)
    .then((res) => {
        if(res.data.status === true){
          setDefType(res.data.data);
        }
        else if(res.data.status === false)
        {
            toast(res.data.message);
        }
    })
    .catch((err) => {
        console.log(err,"error");
    })
}

useEffect(() => {
  getDefExType();
},[])


const deleteDefExTypeUrl = endpoints.DefExpenseType.deleteDefExType;
    const deleteItem = (data) =>  {
        const formData = new FormData();
        formData.append("ID",data);
        axios.post(deleteDefExTypeUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
              getDefExType();
                toast("Defered Expense type deleted Successfully",{type:"success"});
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
      const val = defExType.filter((itm,index) => {
        return itm.ASSET_TYPE_ID == data
      })
      const orgValue = val[0];
      console.log(orgValue,"irhhcbsdh")
      navigate("/AddDifferedType" , {state:orgValue});
  }

    const column = [
        {label:"Asset Type" , name:"EXPENSE_TYPE"},
        {label:"Parent Category" , name:"PRODUCT_CATEGORY"},
        {label:"Journal" , name:"JOURNAL_INFORMATION"},
        {label:"Computation Method" , name:"COMPUTATION_METHOD"},
        {
          label:"Action",
          name:"ASSET_TYPE_ID",
          options:{
              customBodyRender:(value,tableMeta,updateValue) => {
                  return(
                      <>
                      <div className="updtdlt">
                      <FiEdit size={23} color="#4f434d"onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                      <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}/>
                  </div>
                      </>
                  )
              }
          }
      }
    ]

    const handleCreatePage = () => {
      navigate('/AddDifferedType');
    }
  return (
    <div>
           <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Differed Expense Type"/>
           <CustomTable data={defExType} column={column}/>
           <ToastContainer/>
    </div>
  )
}

export default DifferedExpenseType