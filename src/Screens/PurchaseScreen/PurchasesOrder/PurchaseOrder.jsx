import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../components/CustomTable/CustomTable";
import Loader from "../../../components/Loader/Loader";
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
          val = val.reverse()
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
  const column = [
    { title: "Reference", name: "VENDOR_REFERENCE" },
    { title: "OrderDate", name: "ORDER_DATE" },
    { title: "Vendor", name: "VENDOR_NAME" },
    { title: "Receipt Date", name: "RECEIPT_DATE" },
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
      <ToastContainer />
    </div>
  );
};

export default PurchaseOrder;
