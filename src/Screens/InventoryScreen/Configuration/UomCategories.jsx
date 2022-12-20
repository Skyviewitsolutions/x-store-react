import React, { useEffect, useState } from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import axios from 'axios';
import { endpoints } from '../../../services/endpoints';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { toast,ToastContainer } from 'react-toastify';
import {useNavigate } from 'react-router-dom';


const UomCategories = () => {
  
  const [uomdetails , setUomdetails] = useState([]);
  const url = endpoints.UomCategory.allUomCate;
  const navigate = useNavigate();
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

const getUomCategory = () => {

  const formData = new FormData();
  formData.append("User_Authorization" , getAuthtoken);
  formData.append("User_AuthKey" , userAuth);

  axios.post(url  , formData)
  .then((res) => {
    console.log(res,"response");
    if(res.data.status === true)
    {
      var val = res.data.data;
      val = val.reverse();
      setUomdetails(val);
    }
    else if(res.data.status ===  false) 
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
    console.log(err, "error");
  })
}
 useEffect(() => {

 getUomCategory();
      
 },[])

 const UomCateDeleteUrl = endpoints.UomCategory.deleteUomCate;

 const deleteItem = (data) => {
   
  const formData = new FormData();
  formData.append("id" , data);
  formData.append("User_Authorization" , getAuthtoken);
  formData.append("User_AuthKey" , userAuth);

  axios.post(UomCateDeleteUrl,formData)
  .then((res) => {

    if(res.data.status === true)
    {
      getUomCategory()
      toast("Uom Category deleted Successfully!",{type:"success"});
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
  });
 }

 const handleUpdate = (data) => {
  const val = uomdetails.filter((itm,index) => {
    return itm.ID == data
  })
  const orgValue = val[0];
  console.log(orgValue, "orgValue here")
  navigate("/AddUomCate" , {state:orgValue});
 }
  const column = [
    {label : 'Unit of Measure Category', name: "UOM_CATEGORY"},
    {
      label:"Actions",
      name:"ID",
      options:{
        customBodyRender:(value,tableMeta,updateValue) => {
          return(
            <>
            <div className="updtdlt">
              <FiEdit size={23} color="#4f4e4d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
              <MdDelete size={23} color="4f4e4d"  onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}/>
            </div>
            </>
          )
        }
      }

    }
  ]

  const handleCreatePage = () => {
    navigate('/AddUomCate');
  }
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
         <Navebar showBelowMenu={true} title="Units of Measure Categories" handleCreatePage = {handleCreatePage} />
        
            <CustomTable  data={uomdetails} column={column} />
            <ToastContainer />
    </div>
  )
}

export default UomCategories