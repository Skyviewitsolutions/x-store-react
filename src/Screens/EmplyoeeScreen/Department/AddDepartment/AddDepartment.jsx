import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import EmployeeNavbar from "../../EmplyoeeNavbar/EmployeeNavbar";
import "./AddDepartment.css";

const AddDepartment = () => {

  const navigate = useNavigate()

  const [depName , setDepName] = useState("");
  const [headDepName , setHeadDepName] = useState("")
  const [manager , setManager] = useState("")
  const [update , setUpdate] = useState("")

  const [allHeadDep , setAllHeadDep] = useState([]);
  const [allManager , setAllManager] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const addDepartmentUrl = endpoints.department.addDepartment;
  const allHeadUrl = endpoints.headDepartment.allHeaddepartment;
  const allManagerUrl = endpoints.manager.allmanager;

  const getHead = () => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios.post(allHeadUrl,formData)
    .then((res) => {
      if(res.data.status === true){
       setAllHeadDep(res.data.data)
      }else if(res.data.status === false){
        toast(res.data.message,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"something went wrong")
    })
  }
  const getManager = () => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios.post(allManagerUrl,formData)
    .then((res) => {
      if(res.data.status === true){
       setAllManager(res.data.data)
      }else if(res.data.status === false){
        toast(res.data.message,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"something went wrong")
    })
  }

  useEffect(() => {
    getHead()
    getManager()
  },[])

  const save = () => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("Deparment_Name" ,depName);
    formData.append("Head_DepartmentID" ,headDepName);
    formData.append("ManagerID" , manager);
    axios.post(addDepartmentUrl,formData)
    .then((res) => {
      if(res.data.status === true){
        toast("Deparment Added successfully !",{type:"success"})
      }else if(res.data.status === false){
        toast(res.data.message,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"something went wrong")
    })
  }

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");
  useEffect(() => {
    if(selectedData)
    {
      setUpdate(true);
      setDepName(selectedData.DEPARTMENT_NAME);
      setHeadDepName(selectedData.HEAD_DEPARTMENT_NAME);
      setManager(selectedData.DEPARTMENT_MANAGER);
    }

  },[selectedData])

  const departmentupdaterUrl = endpoints.department.updateDepartment

  const updateData = () => {
    const formData = new FormData()
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("Deparment_Name",depName);
    formData.append("ID" ,selectedData.ID);
    axios
        .post(departmentupdaterUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Department Updated Successfully",{type:"success"})
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
  


  return (
    <div>
      <EmployeeNavbar showBelowMenu={true} title="Department" save={update === true ? updateData : save}/>
      <div className="AddOperatintypeContainer_department">
        <div className="Addoperationcontent_department">
          <div className="operationcon1_department">
            <div className="operation_department">
              <p>Department Name</p>
              <input type="text" value={depName} onChange={(e) => setDepName(e.target.value)}/>
            </div>
            <div className="operation_department_1">
              <p>Head Department</p>

              <select value={headDepName} onChange={(e) => setHeadDepName(e.target.value)} >
                {allHeadDep.map((item,ind) => {
                  return(
                    <>
                    <option value={item.ID}>{item.DEPARTMENT_NAME}</option>
                    </>
                  )
                })}
              </select>
            </div>

            <div className="operation_department_1">
              <p>Manager</p>

              <select value={manager} onChange={(e) => setManager(e.target.value)}>
                <option value=""></option>
              {allManager.map((item,ind) => {
                  return(
                    <>
                    <option value={item.ID}>{item.MANAGER_NAME}</option>
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
  );
};

export default AddDepartment;
