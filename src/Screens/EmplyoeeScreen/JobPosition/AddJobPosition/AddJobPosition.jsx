import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { endpoints } from '../../../../services/endpoints'
import EmployeeNavbar from '../../EmplyoeeNavbar/EmployeeNavbar'
import './AddJobPosition.css'

const AddJobPosition = () => {
  const[allDepartment , setAllDepartment] =useState([])
  const [jobPositon , setJobPosition]=useState("")
  const [expectedNew , setExpectedNew]= useState("")
  const [department , setDepartment]=useState("")
  const [ update , setUpdate]= useState("")
  const[ jobDescription, setJObDescription]=useState("")
  const  getAuthtoken =localStorage.getItem("authtoken");
  const  userAuth=localStorage.getItem("userAuth");
  const allDepartmentUrl= endpoints.department.allDepartment;
  const addJobpositiourl=endpoints.jobposition. Addemployeejobposition;
  const getDepartment = () => {
  const formData= new FormData()
  formData.append("User_Authorization",getAuthtoken)
  formData.append("User_AuthKey", userAuth)
  
 axios.post(allDepartmentUrl,formData)
 .then((res)=>{
 if(res.data.status===true){
  setAllDepartment(res.data.data)
 }
 else if(res.data.status===false){
 toast(res.data.message,{type:"error"})
 }
 })
 .catch((err)=>{
console.log(err,"errors")
 }
 )
}
useEffect(()=>{
  getDepartment() 
  
},[])

const save=()=>{
  if (jobPositon==""){
    toast("please select the job Position", { type:"warning"})
  }
  else if (expectedNew==""){
    toast("Expected new employee", {type:"warning"})
  }
  else if (department==""){
    toast ("Please Mention Your Department", {type: "warning"})
  }
  else if (jobDescription == ""){
    toast ("Please describe your job description", {type:"warning"})
  }
  else{  
  const formdata= new FormData()
  formdata.append("Position",jobPositon);
  formdata.append("New_Employee",expectedNew );
  formdata.append("DepartmentID", department);
  formdata.append("Description", jobDescription);
  formdata.append("User_Authorization",getAuthtoken);
  formdata.append("User_AuthKey", userAuth)
  axios.post(addJobpositiourl, formdata)
  .then((res)=>{
if (res.data.status===false){
   toast("Job Position added successfully", {type: "success"} )
}else if(res.data.status===false){
  toast(res.data.message,{type:"error"})
  }
  })
  .catch((err)=>{
  console.log (err , "erhuhghbfhjtguh")
  })}
}

  const Location =useLocation();
  const selectData=Location.state;
  console.log(selectData, " find your data here");
  const updateJobPositionUrl=endpoints.jobposition.Employeeupdatejobposition;
  useEffect(()=>{
    if (selectData){
    setUpdate(true);
   setJobPosition(selectData. JOB_POSITION)
   setExpectedNew(selectData.NEW_EMPOLYEES)
   setDepartment(selectData.DEPARTMENT_ID)
   setJObDescription(selectData.JOB_DESCRIPTION)
  }
  },[selectData])
const updatedData = () => {
  if (jobPositon==""){
    toast("please select the job Position", { type:"warning"})
  }
  else if (expectedNew==""){
    toast("Expected new employee", {type:"warning"})
  }
  else if (department==""){
    toast ("Please Mention Your Department", {type: "warning"})
  }
  else if (jobDescription == ""){
    toast ("Please describe your job description", {type:"warning"})
  }
  else{  
  const formdata= new FormData()
  formdata.append("Position",jobPositon);
  formdata.append("New_Employee",expectedNew );
  formdata.append("DepartmentID", department);
  formdata.append("Description", jobDescription);
  formdata.append("User_Authorization",getAuthtoken);
  formdata.append("User_AuthKey", userAuth);
  formdata.append("ID", selectData.ID)
  axios.post(updateJobPositionUrl,formdata)
 .then((res)=>{
 if(res.data.status===true){
  toast(res.data.message,{type:"success"})

 }
 else if(res.data.status===false){
 toast(res.data.message,{type:"error"})
 }
 })
 .catch((err)=>{
console.log(err,"errors")
 }
 )
}
  

}

  return (
    <div>
        <EmployeeNavbar showBelowMenu={true} title="Job Position" save={update === true ? updatedData : save}/>
      <div className="AddOperatintypeContainer_department">
        <div className="Addoperationcontent_department">
          <div className="operationcon1_department">
            <div className="operation_department">
              <p>Job Position</p>
              <input type="text" value={jobPositon} onChange={(e)=>setJobPosition(e.target.value)}/>
            </div>
            <div className="operation_department">
              <p>Expected New Employees</p>
              <input type="text"  value ={expectedNew} onChange={(e)=>  setExpectedNew(e.target.value)} />
            </div>
            <div className="operation_department_1">
              <p>Department</p>

              <select value={department} onChange={(e)=> setDepartment(e.target.value)}>
                {allDepartment.map((itm,index)=>{
                  return(
                    <>
                    <option value={itm.ID} key={index}> {itm.DEPARTMENT_NAME} </option> 
                    </>
                  )
                })}
              </select>
            </div>
            <div className="operation_department">
              <p>Job Description</p>
              <input type="text" value ={jobDescription} onChange={(e)=> setJObDescription(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )

              }
export default AddJobPosition