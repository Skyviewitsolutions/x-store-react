import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../components/CustomTable/CustomTable";
import Loader from "../../../components/Loader/Loader";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import PurchaseNavbar from "../PurchaseNavbar";

const PurchaseOrder = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddPurchaseOrders");
  };

  const [allpurchaseOrder, setAllPurchaseOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const allpurOrdersUrl = endpoints.purchaseOrders.allpurchaseOrder;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const allpurOrders = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    setLoading(true);
    axios
      .post(allpurOrdersUrl, formData)
      .then((res) => {
        setLoading(false);
        if (res.data.status === true) {
          var val = res.data.data;
          console.log(val,"hgdshdcs")
          // val = val.reverse()
          const filterPurchaseOr = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != 'X'
          })
          setAllPurchaseOrder(filterPurchaseOr);
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
    allpurOrders();
  }, []);

  
  const deleteRequest = endpoints.purchaseOrders.deletePurchaseOrders;

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
          allpurOrders();
          toast("Purchase Orders deleted Successfully", { type: "success" });
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
    console.log(data, "value");
    const val = allpurchaseOrder.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    console.log(orgValue, "irhhcbsdh");
    navigate("/AddPurchaseOrders", { state: orgValue });
  };


  const column = [
    { label: "Reference", name: "VENDOR_REFERENCE" },
    { label: "Order Date", name: "ORDER_DATE" },
    { label: "Vendor", name: "VENDOR_NAME" },
    { label: "Receipt Date", name: "RECEIPT_DATE" },
     {
      label: "Actions",
      name: "ID",
      options: {
        print:false,
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
                 <MdDelete size={23} color="#4f434d" onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}  style={{cursor:"pointer"}}/>
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
        title="Purchase Orders"
        handleCreatePage={handleCreatePage}
      />
      <CustomTable data={allpurchaseOrder} column={column} />
      {loading === true && <Loader />}
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default PurchaseOrder;
