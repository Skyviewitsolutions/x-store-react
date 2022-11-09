import React, { useState } from 'react';
import "./InventoryScreen.css"
import Navebar from '../../../components/Navbar/Navbar';
import InventoryCard from '../../../components/InventoryCard/InventoryCard'
import { useEffect } from 'react';
import { endpoints } from '../../../services/endpoints';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const InventoryScreen = () => {

  const [getOverview , setGetOverview] = useState([])
  const getAllOverviewUrl = endpoints.overView.allOverview;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const navigate = useNavigate();

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(getAllOverviewUrl,formData)
    .then((res) => {
      if(res.data.status === true){
        setGetOverview(res.data.data)
      }else if(res.data.status === false){
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        else{
         toast(res.data.mrssage,{type:"error"});
        }
      }
    })
  .catch((err) => {
    console.log(err , "error")
  })
    
  })
  return (
  <>
  <div className="inveScren">
    <Navebar title="Inventory"/>
    <div className="inveBox">
  
        {getOverview.map((item ,index) => {
          return(
            <>
             <InventoryCard data={item}/>
            </>
          )
        })}
      
         
    
    </div>
    </div>
    </>)
}

export default InventoryScreen;