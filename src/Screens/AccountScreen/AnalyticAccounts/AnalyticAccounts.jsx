import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import "./AnalyticAccounts.css";

const AnalyticAccounts = () => {

  const navigate = useNavigate();
  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [analyticAcc, setAnayticAcc] = useState([]);

  const allAnalyticAccUrl = endpoints.AnalyticAcc.allAnaAcc;
    
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth"); 

  const getAnalyticAcc = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allAnalyticAccUrl , formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse();
          const filterAnnAcc = val.filter((itm,ind) =>{
            return itm.DELETE_STATUS != "X"
          })
          setAnayticAcc(filterAnnAcc);
        } else if (res.data.status === false) {
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
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getAnalyticAcc();
  }, []);

  const AnnAccDeleteUrl = endpoints.AnalyticAcc.deleteAnaAcc;

  const deleteItem = (data) => {

    const formData = new FormData();
    formData.append("Id", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(AnnAccDeleteUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setShow(false)
          setDeleteConfirm(false)
          setSelectedData("")
          getAnalyticAcc();
          toast("Analytic Account deleted Successfully", { type: "success" });
        } else if(res.data.status === false)
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
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

  const handleUpdate = (data) => {
    console.log(data ,"value")
    const val = analyticAcc.filter((itm,index) => {
      return itm.ID == data
    })
    const orgValue = val[0];
    console.log(orgValue,"irhhcbsdh")
    navigate("/AddAnalyticAccount" , {state:orgValue});   
}

  const column = [
    { label: "Name", name: "ANALYTIC_ACCOUNT" },
    { label: "Reference", name: "ANALYTIC_REFERENCE" },
    { label: "Customer", name: "ANALYTIC_CUSTOMER" },
    {
      label: "Action",
      name: "ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <FiEdit size={23} color="#4f434d" onClick={() =>  handleUpdate(value)} style={{ cursor: "pointer" }}/>
              <MdDelete
                size={23}
                color="#4f434d"
                onClick={() => {
                  setShow(true);
                  setSelectedData(value)
                }}
                style={{ cursor: "pointer" }}
              />
            </>
          );
        },
      },
    },
  ];

  const handleCreatePage = () => {
    navigate("/AddAnalyticAccount");
  };

  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Analytic Account"
      />
      <CustomTable data={analyticAcc} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default AnalyticAccounts;
