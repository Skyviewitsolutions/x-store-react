import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'
import PurchaseNavbar from '../PurchaseNavbar'

const PurchaseAgreementTypes = () => {

  const navigate = useNavigate()
  const handleCreatePage = () => {
    navigate("/AddPurchaseAgreementType");
  };
  
  const [allAgreementtype, setAllagreementtype] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const getagreementtypeUrl = endpoints.purchaseAgreementtype.allAgreementtype;


  const getagreeementtype = () => {
    const formData =  new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
   axios.post(getagreementtypeUrl,formData)
   .then((res) => {
    console.log(res,"response")
     if(res.data.status === true){
       setAllagreementtype(res.data.data);
     }else if(res.data.status === false){
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
     console.log(err,"error")
   })
  }

  useEffect(() => {
    getagreeementtype()
  },[])

  const deleteAgreementTypeUrl = endpoints.purchaseAgreementtype.deleteAgreementtype;
  const deleteItem = (data) => {
    const formData = new FormData()
    formData.append("ID", data);
    formData.append("User_Authorization" , getAuthtoken)
    formData.append("User_AuthKey" , userAuth);
    axios.post(deleteAgreementTypeUrl , formData)
    .then((res) => {
     if(res.data.status === true)
     {
      getagreeementtype();
       toast("Purchase Agreement Type deleted Successfully!",{type:"success"});
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
  
 const handleUpdate = (data) => {
  const val =allAgreementtype .filter((itm,index) => {
    return itm.ID == data
  })
  const orgValue = val[0];
  navigate("/AddPurchaseAgreementType" , {state:orgValue});
 }
 
    const column = [
        {title:"Agreement Type" , name:"AGREEMENT_TYPE"},
        {title:"Agreement Selection" , name:"AGREEMENT_SELECTION_TYPE"},
        {
          label:'Action',
          name:'ID',
          options:{
            customBodyRender:(value , tableMeta , updateValue) => {
              return(
                <div className="updtdlt">
                <FiEdit size={23} color="#4f4e4d" onClick={() => handleUpdate(value)} style={{cursor:"pointer"}}/>
                <MdDelete size={23} color="4f4e4d" onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}
                />
              </div>
              )
            }
          }
        }
    ]
  return (
    <div>
      <PurchaseNavbar showBelowMenu={true} title="Purchase Agreement Types" handleCreatePage={handleCreatePage}/>
      <CustomTable data={allAgreementtype} column={column}/>
      <ToastContainer/>
    </div>
  )
}

export default PurchaseAgreementTypes