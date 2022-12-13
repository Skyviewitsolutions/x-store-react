import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints';
import EmployeeNavbar from '../EmplyoeeNavbar/EmployeeNavbar'

const Department = () => {

    const navigate = useNavigate();

    const handleCreatePage = () => {
      navigate('/AddDepartment');
    }

    const [allDeparment , setAllDepartment] = useState([]);
    const allDeparmentUrl = endpoints.department.allDepartment;
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    const getAllDepartment = () => {
        const formData = new FormData()
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios
    .post(allDeparmentUrl, formData)
    .then((res) => {
      if (res.data.status === true) {
        setAllDepartment(res.data.data);
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
        getAllDepartment()
    },[])

    const deleteDeparmentUrl = endpoints.department.deleteDepartment;
    const deleteItem = (data) => {
        const formData = new FormData();
        formData.append("ID",data);
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(deleteDeparmentUrl,formData)
        .then((res) => {
  
          console.log(res,"response")
            if(res.data.status === true)
            {
                getAllDepartment();
                toast("Department deleted Successfully",{type:"success"});
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
            console.log(err,"error");
        })
    }
  
    const handleUpdate = (data) => {
      console.log(data ,"value")
      const val = allDeparment.filter((itm,index) => {
        return itm.ID == data
      })
      const orgValue = val[0];
      console.log(orgValue,"irhhcbsdh")
      navigate("/AddDepartment" , {state:orgValue});   
  }
   
    const column = [
        {label:"Department Name" , name:"DEPARTMENT_NAME"},
        {
            label:"Actions",
            name:"ID",
            options:{
                customBodyRender:(value , tableMeta , updateValue) => {
                    return(
                        <>
                         <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}/>
                        </div>
                        </>
                        
                    )
                }
            }
        }
    ]

  return (
    <div>
        <EmployeeNavbar showBelowMenu={true} title="Department" handleCreatePage={handleCreatePage}/>
        <CustomTable data={allDeparment} column={column} />
        <ToastContainer />
    </div>
  )
}

export default Department