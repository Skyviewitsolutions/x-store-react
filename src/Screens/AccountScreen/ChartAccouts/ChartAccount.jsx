import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import Navebar from "../../../components/Navbar/Navbar";
import { endpoints } from "../../../services/endpoints";
import "./ChartAccount.css";

function ChartAccount(props) {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddChartAccount");
  };

  
  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [chartAcc, setChartAcc] = useState([]);
  const allChartAccUrl = endpoints.ChartAccount.allChartAcc;

  const getChartAcc = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allChartAccUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse();

          const filterAccount = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
          })
          setChartAcc(filterAccount);
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
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getChartAcc();
  }, []);

  const deleteChartAccURL = endpoints.ChartAccount.deleteChartAcc;

  const deleteItem = (data) => {
    
    const formData = new FormData();
    formData.append("Id", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deleteChartAccURL, formData)
      .then((res) => {
        if (res.data.status === true) {
          setShow(false)
          setDeleteConfirm(false)
          setSelectedData("")
          getChartAcc();
          toast("Chart Of Account Is Deleted Successfully!", {
            type: "success",
          });
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
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

  const handleUpdate = (data) => {
    console.log(data, "value");
    const val = chartAcc.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    console.log(orgValue, "irhhcbsdh");
    navigate("/AddChartAccount", { state: orgValue });
  };

  const column = [
    { label: "Code", name: "CHART_CODE" },
    { label: "Name", name: "CHART_OF_NAME" },
    { label: "Type", name: "CHART_TYPE" },
    { label: "AccountCurrency", name: "ACCOUNT_CURRENCY" },
    {
      label: "Action",
      name: "ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <FiEdit
                size={23}
                color="#4f434d"
                onClick={() => handleUpdate(value)}
                style={{ cursor: "pointer" }}
              />
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
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Chart of Account"
      />
      <CustomTable data={chartAcc} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
}

export default ChartAccount;
