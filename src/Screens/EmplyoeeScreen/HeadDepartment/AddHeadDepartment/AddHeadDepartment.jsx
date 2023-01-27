import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
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
  const [update , setUpdate] = useState("")
  const allManagerUrl = endpoints.Manager.allmanager
  const deparmentUrl = endpoints.headDepartment.addHeaddepartment

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

  const save = () => {
    const formData = new FormData()
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("Deparment_Name",department)
    axios
        .post(deparmentUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Head Department Added Successfully",{type:"success"})
            setTimeout(() => {
                navigate('/HeadDepartment')
            }, 1000);
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
  },[])

    const location = useLocation();
    const selectedData = location.state;
    console.log(selectedData , "selectedData here");

    useEffect(() => {
      if(selectedData)
      {
        setUpdate(true);
        setDepartment(selectedData.DEPARTMENT_NAME)
        
      }

    },[selectedData])
    const updateData = () => {
      const formData = new FormData()
      formData.append("User_Authorization" , getAuthtoken);
      formData.append("User_AuthKey" , userAuth);
      formData.append("Deparment_Name",department);
      formData.append("ID" ,selectedData.ID);
      axios
          .post(deparmentUrl, formData)
          .then((res) => {
            if (res.data.status === true) {
              toast("Head Department Updated Successfully",{type:"success"})
              setTimeout(() => {
                navigate('/HeadDepartment')
            }, 1000);
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
    },[])

  return (
    <div>
         <EmployeeNavbar showBelowMenu={true} title="Head Department" save={update === true ? updateData : save}  showCanelBtn={true}/>
      <div className="Container_Hdepartment">
        <div className="content_Hdepartment">
          <div className="Hdepartment">
            <div className="head_department">
              <p>Department Name</p>
              <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)}/>
            </div>
            {/* <div className="operation_department_1">
              <p>Manager</p>

              <select>
             {allManager.map((itm,ind) => {
              return(
                <>
                <option value={itm.id}>{itm.MANAGER_NAME}</option>
                </>
              )
             })}
              </select>
            </div> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddHeadDepartment