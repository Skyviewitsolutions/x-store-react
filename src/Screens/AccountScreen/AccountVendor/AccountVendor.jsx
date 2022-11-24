import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import VendorsCard from '../../../components/VendorsCard/VendorsCard';
import { endpoints } from '../../../services/endpoints';


 
const AccountVendor = () => {
    const navigate = useNavigate();
  const [vendorsAll , setVendorsAll] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const vendorsAllUrl = endpoints.vendors.allVendors;

  const getVendors = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(vendorsAllUrl,formData)
    .then((res) => {
     
      if(res.data.status === true)
      {
        setVendorsAll(res.data.data);
      }
      else if(res.data.status === false)
      {
        toast(res.data.message,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"something went wrong");
    })
  }

  useEffect(() => {
    getVendors();
  },[])
  const handleCreatePage = () => {
    navigate("/AddVendors");
  };

  return (
    <div>
      <AccountNavbar showBelowMenu={true} title="Vendor" handleCreatePage={handleCreatePage}/>
      <div className="vendor_Container">
     {vendorsAll.map((item,index) => {      

      return(
        <>
         <VendorsCard data={item} />
        </>
      )
     })}
      </div>
      <ToastContainer />
    </div>
  )
}

export default AccountVendor