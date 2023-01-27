import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../services/endpoints";
import EmployeeNavbar from "../EmplyoeeNavbar/EmployeeNavbar";
import "./Employee.css";
import EmployeCard from "./EmployeeCard/EmployeCard";

const Employee = () => {

  const navigate = useNavigate()
  const handleCreatePage = () => {
    navigate("/AddEmployee");
  }

  
  const [loading , setLoading] = useState(false)
  const [deActiveEmp, setDeActiveEmp] = useState([]);
  const [activeEmp, setActiveEmp] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
 const [allEmployee , setAllEmployee] = useState([]);

 const allEmpUrl = endpoints.employee.allEmp;

 const getAllEmp = () => {
      const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    setLoading(true)
    axios
      .post(allEmpUrl, formData)
      .then((res) => {
        setLoading(false)
        console.log(res,"response")
        if (res.data.status === true) {
          const customer = res.data.data;
          var val = customer.reverse();
          const deletedVendor = val.filter((itm, ind) => {
            return itm.DELETE_STATUS === "X";
          });
          setDeActiveEmp(deletedVendor);
          const allCustomer = customer.filter((itm, index) => {
            return itm.DELETE_STATUS === null;
           
          });
           console.log(allCustomer,"val here")
           setActiveEmp(allCustomer);
          setAllEmployee(res.data.data);
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
  getAllEmp()
},[])


  return (
    <>
      <EmployeeNavbar showBelowMenu={true} title="Employee" handleCreatePage={handleCreatePage}/>
      <div className="container-fluid">
        <div className="row" >
          {activeEmp.map((itm,ind) => {
            return(
              <>
            <div className="col-lg-4">
            <EmployeCard getAllEmp={getAllEmp} data={itm}/>
          </div>
              </>
            )
          })}
          {deActiveEmp.map((itm,ind) => {
            return(
              <>
              <div className="col-lg-4">
            <EmployeCard getAllEmp={getAllEmp} data={itm} />
          </div>
              </>

            )
          })}
        
         
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Employee;
