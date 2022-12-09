import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import EmployeeNavbar from "../../EmplyoeeNavbar/EmployeeNavbar";
import "./AddDepartment.css";

const AddDepartment = () => {

  const [depName , setDepName] = useState("");
  const [headDepName , setHeadDepName] = useState("")
  const [manager , setManager] = useState("")
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const addDepartmentUrl = endpoints.department.addDepartment;

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
        toast("Deparment Added successfully !",{type:"warning"})
      }else if(res.data.status === false){
        toast(res.data.message,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"something went wrong")
    })
  }
  return (
    <div>
      <EmployeeNavbar showBelowMenu={true} title="Department" save={save}/>
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
                <option>ABDUL JALEEL MALLUR</option>
                <option>ABDUL RAHMAN KARNAD</option>
                <option>ABDULRAHEM SUIMAN</option>
                <option>ABDULRAHMAN SALAH</option>
                <option>ABDULREHMAN</option>
                <option>ABDULREHMAN</option>
              </select>
            </div>

            <div className="operation_department_1">
              <p>Manager</p>

              <select value={manager} onChange={(e) => setManager(e.target.value)}>
                <option>ABDUL JALEEL MALLUR</option>
                <option>ABDUL RAHMAN KARNAD</option>
                <option>ABDULRAHEM SUIMAN</option>
                <option>ABDULRAHMAN SALAH</option>
                <option>ABDULREHMAN</option>
                <option>ABDULREHMAN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
