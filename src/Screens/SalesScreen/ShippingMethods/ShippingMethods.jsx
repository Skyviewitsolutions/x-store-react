import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import CustomTable from '../../../components/CustomTable/CustomTable';
import { endpoints } from '../../../services/endpoints';
import SalesNavbar from '../SalesNavbar/SalesNavbar';

const ShippingMethods = () => {
  
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate('/AddShippingMethod')
  }

  const [allShipping , setAllShipping] = useState([]);
  const getAllShippingUrl = endpoints.shippingMethod.allShipping;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getAllShipping = () => {
   const formData = new FormData();
   formData.append("User_Authorization", getAuthtoken);
   formData.append("User_AuthKey", userAuth);
   axios.post(getAllShippingUrl , formData)
   .then((res) => {
        if(res.data.status === true){
          var val = res.data.data ;
          var val = val.reverse()
         setAllShipping(res.data.data)
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
     console.log(err,"something went wrong")
   })
  }

useEffect(() => {
    getAllShipping()
},[])

// ------------------------Delete Shipping----------------

const deleteShippingUrl = endpoints.shippingMethod.deleteShipping;

const deleteItem = (data) => {
  const formData = new FormData();
      formData.append("ID",data);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(deleteShippingUrl,formData)
      .then((res) => {
          if(res.data.status === true)
          {
              getAllShipping();
              toast("Shipping Method deleted Successfully!",{type:"success"})
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
          console.log(err,"error")
        })
}

const handleUpdate = (data) => {
  console.log(data ,"value")
  const val = allShipping.filter((itm,index) => {
    return itm.ID == data
  })
  const orgValue = val[0];
  console.log(orgValue,"irhhcbsdh")
  navigate("/AddShippingMethod" , {state:orgValue});
}
  const column = [
    {label:"Delivery Methods" , name:"SHIP_NAME"},
    {label:"Provider" , name:"SHIPPING_PROVIDER"},
    { 
      label: "Action", 
      name: "ID" ,
      options:{
          customBodyRender:(value, tableMeta, updateValue) => {
              return(
                  <>
                   <FiEdit size={23} color="#4f434d"onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                      <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}/>
                  </>
              )
          }
      }
  },
];


  return (
    <>
 <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
<SalesNavbar showBelowMenu={true}  title="Shipping Methods"  handleCreatePage={handleCreatePage}/>
<CustomTable column={column} data={allShipping}/>
 </div>
 <ToastContainer />
    </>
  )
}

export default ShippingMethods;
