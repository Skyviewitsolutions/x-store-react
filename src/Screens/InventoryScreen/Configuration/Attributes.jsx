import React, { useEffect, useState } from 'react'
import Navebar from '../../../components/Navbar/Navbar'
import CustomTable from '../../../components/CustomTable/CustomTable';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../../services/endpoints';
import axios from 'axios';
import {toast , ToastContainer} from "react-toastify";
const Attributes = () => {
 
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate('/AddAttribute')
  }

  const attributeUrl = endpoints.Attribute.allattribute;
  const [attribute , setAttribute] = useState();

  useEffect(() => {
  axios.post(attributeUrl)
  .then((res) => {
    console.log(res,"response");
    if(res.data.status === true)
    {
      setAttribute(res.data.data);
    }
    else if(res.data.status === false)
    {
      toast(res.data.message,{type:'info'});
    }
  })
  .catch((err) => {
    console.log(err,"error");
  })
  },[])

  const column = [
    { label : 'Attribute' , name : 'ATTRIBUTE_NAME'},
    { label : 'Variable Creation Mode' , name : 'VARIABLE_CREATION_MODE'},

  ]
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
        <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Attributes"/>
        <CustomTable  data={attribute} column={column}/>
        <ToastContainer />
    </div>
  )
}

export default Attributes