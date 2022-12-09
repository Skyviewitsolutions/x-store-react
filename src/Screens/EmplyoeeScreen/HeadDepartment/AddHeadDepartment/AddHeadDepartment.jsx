import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints';
import EmployeeNavbar from '../../EmplyoeeNavbar/EmployeeNavbar'
import './AddHeadDepartment.css'

const AddHeadDepartment = () => {
  const navigate = useNavigate();
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");


  const [department , setDepartment] = useState("")
  const [manager , setManager] = useState("")
  const allManagerUrl = endpoints.manager.allmanager

  const [allManager , setAllManager] = useState([])

  const getAllManagre = ()=> {
    const formData = new FormData()
        formData.append("User_Authorization" , getAuthtoken);
        formData.append("User_AuthKey" , userAuth);
        axios
        .post(allManagerUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            setAllManager(res.data.data);
          } else if (res.data.status === false) {
            if (res.data.code === 3) {
              toast("Session expired , Please re-login", { type: "warning" });
              navigate("/");
            } else {
              toast(res.data.message, { type: "error" });
            }
          }
        })
        .catch((err) => {
          console.log(err, "something went wrong");
        });
  }

  useEffect(() => {
    getAllManagre()
  })
  return (
    <div>
         <EmployeeNavbar showBelowMenu={true} title="Head Department" />
      <div className="AddOperatintypeContainer_department">
        <div className="Addoperationcontent_department">
          <div className="operationcon1_department">
            <div className="operation_department">
              <p>Department Name</p>
              <input type="text" />
            </div>
            <div className="operation_department_1">
              <p>Manager</p>

              <select>
             {allManager.map((itm,ind) => {
              return(
                <>
                <option value={itm.id}>{itm.Manager}</option>
                </>
              )
             })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddHeadDepartment