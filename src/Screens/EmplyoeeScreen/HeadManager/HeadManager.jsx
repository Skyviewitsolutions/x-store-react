import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { endpoints } from '../../../services/endpoints'
import EmployeeNavbar from '../EmplyoeeNavbar/EmployeeNavbar'
import HeadCard from './HeadCard'
import './HeadManager.css'

const HeadManager = () => {

  const navigate = useNavigate()

  const handleCreatePage = () => {
    navigate('/AddHeadManager')
  }


  const [loading , setLoading] = useState(false)
  const [deActiveHManager, setDeActiveHManager] = useState([]);
  const [activeHManager, setActiveHManager] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
 const [allHManager , setAllHManager] = useState([])

 const headmanagerUrl = endpoints.Headmanager.allHeadmanager;



  const getAllHManager = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    setLoading(true)
    axios
      .post(headmanagerUrl, formData)
      .then((res) => {
        setLoading(false)
        console.log(res,"response")
        if (res.data.status === true) {
          const customer = res.data.data;
          var val = customer.reverse();
          const deletedVendor = val.filter((itm, ind) => {
            return itm.DELETE_STATUS === "X";
          });
          setDeActiveHManager(deletedVendor);
          const allCustomer = customer.filter((itm, index) => {
            return itm.DELETE_STATUS === null;
           
          });
           console.log(allCustomer,"val here")
           setActiveHManager(allCustomer);
          setAllHManager(res.data.data);
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
    getAllHManager()
  },[])


  return (
    <div>
       <EmployeeNavbar showBelowMenu={true} title="Head Manager" handleCreatePage={handleCreatePage}/>
       <div className="container-fluid">
        <div className="row">
        {activeHManager.map((itm,ind) => {
            return(
              <>
          <div className="col-lg-4 col-md-6">
              <HeadCard getAllHManager={getAllHManager} data={itm}/>
          </div>
          </>
            )
           })} 
           {deActiveHManager.map((itm,ind) => {
            return(
              <>
                <div className="col-lg-4 col-md-6">
              <HeadCard getAllHManager={getAllHManager} data={itm}/>
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

export default HeadManager