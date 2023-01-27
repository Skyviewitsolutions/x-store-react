import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import CustomerCard from '../../../components/Customer/CustomerCard'
import CustomTable from '../../../components/CustomTable/CustomTable'
import ManagerCard from '../../../components/ManagerCard/ManagerCard'
import { endpoints } from '../../../services/endpoints'
import EmployeeNavbar from '../EmplyoeeNavbar/EmployeeNavbar'
import './Manager.css'
const Manager = () => {
   
    const navigate = useNavigate()
    const handleCreatePage = () => {
        navigate('/AddManager');
      }

      const [loading , setLoading] = useState(false)
      const [deActiveManager, setDeActiveManager] = useState([]);
      const [activeManager, setActiveManager] = useState([]);
      const getAuthtoken = localStorage.getItem("authtoken");
      const userAuth = localStorage.getItem("userAuth");
     const [allManager , setAllManager] = useState([])
     const allManagerUrl = endpoints.Manager.allmanager;

  const getAllManager = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    setLoading(true)
    axios
      .post(allManagerUrl, formData)
      .then((res) => {
        setLoading(false)
        console.log(res,"response")
        if (res.data.status === true) {
          const customer = res.data.data;
          var val = customer.reverse();
          const deletedVendor = val.filter((itm, ind) => {
            return itm.DELETE_STATUS === "X";
          });
          setDeActiveManager(deletedVendor);

          const allCustomer = customer.filter((itm, index) => {
            return itm.DELETE_STATUS === null;
           
          });
           console.log(allCustomer,"val here")
           setActiveManager(allCustomer);
          setAllManager(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log("something went wrong", err);
      });
  }

  useEffect(() => {
    getAllManager()
  },[])

  return (
    <div>
        <EmployeeNavbar showBelowMenu={true} title="Manager" handleCreatePage={handleCreatePage}/>
        <div className="container-fluid" >
          <div className='row'>
        {activeManager.map((item,ind) => {
          return(
            <>
            <div className='col-lg-4 col-md-6'>
             <ManagerCard getAllManager={getAllManager} data={item}/>
             </div>
            </>
          )
        })}
        {deActiveManager.map((item,ind) => {
          return(
            <>
            <div className='col-lg-4 col-md-6'>
             <ManagerCard getAllManager={getAllManager} data={item}/>
             </div>
            </>
          )
        })}
       </div>
       </div>
        <ToastContainer />
    </div>
  )
}

export default Manager