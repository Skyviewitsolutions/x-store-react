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

const DifferedExpenseType = () => {
 
  const navigate = useNavigate();
  const [defExType , setDefType] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const allDefExTypeUrl = endpoints.DefExpenseType.allDefExType;

  
  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const getDefExType = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(allDefExTypeUrl , formData)
    .then((res) => {
        if(res.data.status === true){
          var val = res.data.data;
          val = val.reverse()
          const filterDiffExType = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
          })
          setDefType(filterDiffExType);
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
  getDefExType();
},[])


const deleteDefExTypeUrl = endpoints.DefExpenseType.deleteDefExType;
    const deleteItem = (data) =>  {
        const formData = new FormData();
        formData.append("ID",data);
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(deleteDefExTypeUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
              setShow(false)
              setDeleteConfirm(false)
              setSelectedData("")
              getDefExType();
                toast("Defered Expense type deleted Successfully",{type:"success"});
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
      if (deleteConfirm) {
        deleteItem(selectedData);
      }
    }, [deleteConfirm]);
    
    const handleUpdate = (data) => {
      console.log(data ,"value")
      const val = defExType.filter((itm,index) => {
        return itm.ID == data
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
          name:"ID",
          options:{
            print:false,
              customBodyRender:(value,tableMeta,updateValue) => {
                  return(
                      <>
                      <div className="updtdlt">
                      <FiEdit size={23} color="#4f434d"onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                      <MdDelete size={23} color="#4f434d" onClick={() => {
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
      navigate('/AddDifferedType');
    }
  return (
    <div>
           <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Differed Expense Type"/>
           <CustomTable data={defExType} column={column}/>
           <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
           <ToastContainer/>
    </div>
  )
}

export default DifferedExpenseType