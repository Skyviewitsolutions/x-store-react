import React, { useEffect, useState } from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import axios from 'axios';
import { endpoints } from '../../../services/endpoints';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { toast,ToastContainer } from 'react-toastify';
import {useNavigate } from 'react-router-dom';
import DeletePopup from '../../../components/Model/DeletePopup/DeletePopup';


const UomCategories = () => {
  
  const [uomdetails , setUomdetails] = useState([]);
  const url = endpoints.UomCategory.allUomCate;
  const navigate = useNavigate();
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  
  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");
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
      const filterUomCate = val.filter((itm,ind) =>{
        return itm.DELETE_STATUS != "X"
      })
      setUomdetails(filterUomCate);
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
      
      toast("Uom Category deleted Successfully!",{type:"success"});
      setShow(false)
      setDeleteConfirm(false)
      setSelectedData("")
      getUomCategory()
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

 useEffect(() => {
  if (deleteConfirm) {
    deleteItem(selectedData);
  }
}, [deleteConfirm]);

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
        print : false ,
        customBodyRender:(value,tableMeta,updateValue) => {
          return(
            <>
            <div className="updtdlt">
              <FiEdit size={23} color="#4f4e4d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
              <MdDelete size={23} color="4f4e4d"    onClick={() => {
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
    navigate('/AddUomCate');
  }
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
         <Navebar showBelowMenu={true} title="Units of Measure Categories" handleCreatePage = {handleCreatePage} />
        
            <CustomTable  data={uomdetails} column={column} />
            <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
            <ToastContainer />
    </div>
  )
}

export default UomCategories