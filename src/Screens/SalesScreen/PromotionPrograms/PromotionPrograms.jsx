import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'
import SalesNavbar from '../SalesNavbar/SalesNavbar'

const PromotionPrograms = () => {

    const navigate = useNavigate()

    const handleCreatePage = () => {
        navigate('/AddPromotionProgram')    
           
    }
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    const [allPromotion , setAllPromotion] = useState([]);
    const allproUrl = endpoints.promotionProgram.allPromotion;

    const getAllPromotion = () => {
        const formData = new FormData()
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(allproUrl , formData)
        .then((res) => {
            if(res.data.status === true){
                setAllPromotion(res.data.data)
            }else if(res.data.status === false){
                toast(res.data.message,{type:"error"})
            }
        })
        .catch((err) => {
            console.log(err,"error customer")
        })
    }

    useEffect(() => {
getAllPromotion()
    },[])

    // -------------------------DeletePromotion--------------------------------
    const deletePromotionUrl = endpoints.promotionProgram.deletePromotion;

    const deleteItem = (data) => {
        const formData = new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        formData.append("ID" , data);
        axios.post(deletePromotionUrl,formData)
        .then((res) => {
           if(res.data.status === true)
           {
            getAllPromotion();
            toast("Promotion Program deleted Successfully" , {type:"success"});
           }
           else if(res.data.status === false)
           {
            toast(res.data.message , {type:"error"})
           }
        })
        .catch((err) => {
          console.log(err,"error");
        })
      }

    const handleUpdate = (data) => {
        const val = allPromotion.filter((itm,index) =>  {
          return itm.ID == data
        })
        const orgValue = val[0];
        navigate("/AddPromotionProgram" , {state:orgValue});
      }
    
    const column = [
        {label:"Name", name:"PROMOTION_NAME"},
        {
            label: "Action",
            name:"ID",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                  return (
                    <div className="AtrributrUpdDel">
                      <FiEdit
                        size={23}
                        color="#4f4e4d"
                        onClick={() => handleUpdate(value)}
                        style={{ cursor: "pointer" }}
                      />
                      <MdDelete
                        size={23}
                        color="#4f4e4d"
                          onClick={() => deleteItem(value)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  );
                },
              },
        }
    ]
   
  return (
    <div>
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <SalesNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Promotion Programs"/>
      <CustomTable  column = {column} data={allPromotion} />
      <ToastContainer/>
    </div>
    </div>
  )
}

export default PromotionPrograms