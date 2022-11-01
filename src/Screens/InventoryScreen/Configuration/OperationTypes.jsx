import React, { useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../services/endpoints";
import { useEffect } from "react";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast,ToastContainer } from "react-toastify";

const OperationTypes = (props) => {

  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddOperationTypes");
  };

  const [opertaionType, setOperationType] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const alloperationUrl = endpoints.OpertionType.allOpertaionType;

  const getOperationType = () => {

    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios
      .post(alloperationUrl , formData)
      .then((res) => {
        if (res.data.status === true) {
          setOperationType(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  useEffect(() => {
    getOperationType();
  }, []);
  
  const opertaionTypeDelteUrl = endpoints.OpertionType.deleteOperationType;

  const deleteItem = (data) => {
   const formdata = new FormData();
   formdata.append("Id" , data);
   formdata.append("User_Authorization" , getAuthtoken);
   formdata.append("User_AuthKey" , userAuth);
   axios.post(opertaionTypeDelteUrl , formdata)
    .then((res) => {
       
        if(res.data.status === true)
        {
          getOperationType();
            toast("Operation Type deleted Successfully",{type:"success"});
        }
        else if(res.data.status === false)
        {
            toast(res.data.message,{type:"error"});
        }
    })
    .catch((err) => {
        console.log(err,"error");
    })
   
  }

  const handleUpdate = (data) => {
     const val = opertaionType.filter((itm,index) => {
      return itm.OPERATION_ID == data
     })
     console.log(val,"val");

     const orgValue = val[0];
     navigate("/AddOperationTypes" , {state:orgValue});
     console.log(orgValue,"ORGVALUE")
  }
  
  const column = [
    { label: "Operation Type", name: "OPERATION_TYPE" },
    { label: "WareHouse", name: "WAREHOUSE_INFO" },
    {
      label: "Actions",
      name: "OPERATION_ID",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={ () => handleUpdate(value)}
                  style={{cursor:"pointer"}}
                />
                <MdDelete
                  size={23}
                  color="#4f4e4d"
                  onClick={ () => deleteItem(value)}
                  style={{cursor:"pointer"}}
                />
              </div>
            </>
          );
        },
      },
    },
  ];
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Navebar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Operation Types"
      />
      <CustomTable data={opertaionType} column={column} />
      <ToastContainer />
    </div>
  );
};

export default OperationTypes;
