import React, { useEffect, useState } from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import axios from 'axios';
import { endpoints } from '../../../services/endpoints';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { toast,ToastContainer } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';


const UomCategories = () => {

  const [uomdetails , setUomdetails] = useState([]);
  const url = endpoints.UomCategory.allUomCate;
  const navigate = useNavigate();

const getUomCategory = () => {
  axios.get(url )
  .then((res) => {
    console.log(res,"response");
    if(res.data.status === true)
    {
      setUomdetails(res.data.data);
    }
    else if(res.data.status ===  false) 
    {
      alert(res.data.message);
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
  axios.post(UomCateDeleteUrl,formData)
  .then((res) => {

    console.log(res,"responseuom")
    if(res.data.status === true)
    {
      getUomCategory()
      toast("Uom Category deleted Successfully!",{type:"success"});
    }
    else if(res.data.status === false) 
    {
      toast(res.data.message,{type:"error"});
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
    {label : 'Unit of Measure Category', name: "UNIT_NAME"},
    {
      label:"Actions",
      name:"ID",
      options:{
        customBodyRender:(value,tableMeta,updateValue) => {
          return(
            <>
            <div className="updtdlt">
              <FiEdit size={23} color="#4f4e4d" onClick={() => handleUpdate(value)} />
              <MdDelete size={23} color="4f4e4d"  onClick={() => deleteItem(value)} />
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