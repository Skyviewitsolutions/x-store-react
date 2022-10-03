import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";

const AnalyticAccountType = () => {
  const navigate = useNavigate();

  const [anAccType, setAnAccType] = useState([]);
  const allAnAcctypeUrl = endpoints.AnalyticAccType.allAnalytictype;

  const getAnAccType = () => {
    axios
      .post(allAnAcctypeUrl)
      .then((res) => {
        if (res.data.status === true) {
          setAnAccType(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getAnAccType();
  }, []);

  const deleteAnnAcctypeUrl = endpoints.AnalyticAccType.deleteAnAccType;

  const deleteItem = (data) => {
    const formData = new FormData();
        formData.append("ID",data);
        axios.post(deleteAnnAcctypeUrl,formData)
        .then((res) => {
            console.log(res,"response Acc")
            if(res.data.status === true)
            {
                getAnAccType();
                toast("Analytic Account Type deleted Successfully!",{type:"success"})
            }
            else if(res.data.status === false)
            {
               
                toast(res.data.message,{type:"error"})
            }
          })
          .catch((err) => {
            console.log(err,"error")
          })
  }

  const handleUpdate = (data) => {
    console.log(data ,"value")
    const val = anAccType.filter((itm,index) => {
      return itm.ANALYTIC_ACCOUNT_TYPE_ID == data
    })
    const orgValue = val[0];
    console.log(orgValue,"irhhcbsdh")
    navigate("/AddAnalyticAccountType" , {state:orgValue});
}

  const column = [
    { label: "Analytic Account Type", name: "ANALYTIC_ACCOUNT_TYPE" },
    { 
        label: "Action", 
        name: "ANALYTIC_ACCOUNT_TYPE_ID" ,
        options:{
            customBodyRender:(value, tableMeta, updateValue) => {
                return(
                    <>
                     <FiEdit size={23} color="#4f434d"onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}/>
                    </>
                )
            }
        }
    },
  ];

  const handleCreatePage = () => {
    navigate("/AddAnalyticAccountType");
  };
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Analytic Account Type"
      />
      <CustomTable data={anAccType} column={column} />
      <ToastContainer/>
    </div>
  );
};

export default AnalyticAccountType;
