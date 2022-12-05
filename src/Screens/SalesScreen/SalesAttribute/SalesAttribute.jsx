import React, { useState } from "react";
import SalesNavbar from "../SalesNavbar/SalesNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const SalesAttribute = () => {

  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddSalesAttribute");
  };

  const [allAttribute  , setAllAttribute] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const allAttributeUrl = endpoints.attribute.allsalesattribute;

  const getAllAtribute = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(allAttributeUrl,formData)
    .then((res) => {
      if(res.data.status === true){
        setAllAttribute(res.data.data)
      }else if(res.data.status === false){
        toast(res.data.message,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"error")
    })
  }

   useEffect(() => {
    getAllAtribute()
   },[])

   
  const attributeDeleteUrl = endpoints.attribute.deletesalesattribute;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("ID" , data);
    axios.post(attributeDeleteUrl,formData)
    .then((res) => {
       if(res.data.status === true)
       {
        getAllAtribute();
        toast("Attribute deleted Successfully" , {type:"ssuccess"});
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
    const val = allAttribute.filter((itm,index) =>  {
      return itm.ID == data
    })
    const orgValue = val[0];
    navigate("/AddSalesAttribute" , {state:orgValue});
  }

  const column = [
    { label: "Attribute", name: "ATTRIBUTE_NAME" },
    { label: "Varients Creation Mode", name: "VARIABLE_CREATION_MODE" },
    {
      label: "Action",
      name: "ID",
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
    },
  ];
  const data = [
    {
      id: 1,
      attribute: "kurkure",
      displayType: "Yes",
      varientMode: "Yes",
      action: "Updatee Delete",
    },
  ];
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <SalesNavbar showBelowMenu={true} title="Attribute" handleCreatePage={handleCreatePage} />
        <CustomTable column={column} data={allAttribute} />
      </div>
      <ToastContainer />
    </>
  );
};
export default SalesAttribute;
