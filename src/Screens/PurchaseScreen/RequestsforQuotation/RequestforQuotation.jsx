import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { generatePath, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../components/CustomTable/CustomTable";
import Loader from "../../../components/Loader/Loader";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import PurchaseNavbar from "../PurchaseNavbar";
import "./AddRequestQuotation/AddRequestQuotation.css";
import {genaratePath} from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai"


const RequestforQuotation = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddRequestQuotation");
  };

  const [requestQuotationAll, setRequestQuotationAll] = useState([]);
  const [loading, setLoading] = useState(false);
  const requestUrl = endpoints.requestQuotation.allRequestQuotation;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const getAllRequestQuation = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    setLoading(true);
    axios
      .post(requestUrl, formData)
      .then((res) => {
        setLoading(false);
        if (res.data.status === true) {
          var val = res.data.data;
          // val = val.reverse();
          const filterRFQ = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          console.log(val, "all data here");
          setRequestQuotationAll(filterRFQ);
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
        setLoading(false);
        console.log(err, "something went wrong");
      });
  };

  useEffect(() => {
    getAllRequestQuation();
  }, []);

  const deleteRequest = endpoints.requestQuotation.deleteRequestQuotation;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deleteRequest, formData)
      .then((res) => {
        if (res.data.status === true) {
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          getAllRequestQuation();
          toast("Request Quotation deleted Successfully", { type: "success" });
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.mrssage, { type: "error" });
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
    const val = requestQuotationAll.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    console.log(orgValue, "irhhcbsdh");
    navigate("/AddRequestQuotation", { state: orgValue });
  };

  // const rowClicked = (rowData , rowMeta) =>{
  //   var rowId = rowMeta.rowIndex;
  //   var selectedRow = requestQuotationAll[rowId];
  //   var dataId = selectedRow.VENDOR_ID;
  //   var rfqID = selectedRow.ID;
  //   var path = generatePath("/RequestForQuotaion/Details/:VendorId/:RFQID" , {
  //    VendorId : dataId,
  //    RFQID : rfqID
 
  //   })
  //   navigate(path)
  //  }

  const handleDetails = (data) =>{
    const val = requestQuotationAll.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    var dataId = orgValue.VENDOR_ID;
    var rfqID = orgValue.ID;
    var path = generatePath("/RequestForQuotaion/Details/:VendorId/:RFQID" , {
     VendorId : dataId,
     RFQID : rfqID
 
    })
    navigate(path)
  }

  const column = [
    { label: "Refrence", name: "VENDOR_REFERENCE" },
    { label: "Order Date", name: "ORDER_DATE" },
    { label: "Vendor", name: "VENDOR_NAME" },
    { label: "Purchase Representative", name: "PURCHASE_REPRESENTATIVE" },
    // { label : "IDs" , name : "Id" , options : { customBodyRender : (value) => { return <span style={{display : "none"}}>{value}</span>}}},
    {
      label: "Actions",
      name: "ID",
      options: {
        print: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f434d"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleUpdate(value)}
                />
                <MdDelete
                  size={23}
                  color="#4f434d"
                  onClick={() => {
                    setShow(true);
                    setSelectedData(value);
                  }}
                  style={{ cursor: "pointer" }}
                />
                <AiOutlineEye 
                  size={23}
                  color="#4f434d"
                  onClick={() => handleDetails(value)}
                />
              </div>
            </>
          );
        },
      },
    },
  ];


  

  return (
    <div>
      <PurchaseNavbar
        showBelowMenu={true}
        title="Requests for Quotation"
        handleCreatePage={handleCreatePage}
      />
      <CustomTable data={requestQuotationAll} column={column}  />
      {loading === true && <Loader />}
      <DeletePopup
        show={show}
        setShow={setShow}
        setDeleteConfirm={setDeleteConfirm}
      />
      <ToastContainer />
    </div>
  );
};

export default RequestforQuotation;
