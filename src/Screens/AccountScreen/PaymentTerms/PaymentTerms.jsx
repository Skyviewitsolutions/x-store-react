import React, { useEffect } from "react";
import "./PaymentTerms.css";
import CustomTable from "../../../components/CustomTable/CustomTable";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";

const PaymentTerms = (props) => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddPayment");
  };

  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const [payment, setPayment] = useState([]);
  const PaymentTermsUrl = endpoints.PaymentTerms.allPayment;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getPaymentTerms = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios
      .post(PaymentTermsUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse();
          const filterpayment = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setPayment(filterpayment);
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
    getPaymentTerms();
  }, []);

  const paymentdeleteUrl = endpoints.PaymentTerms.deletePayment;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("Id", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(paymentdeleteUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          toast("Payment Terms deleted Successfully!", { type: "success" });
          setShow(false)
          setDeleteConfirm(false)
          setSelectedData("")
          getPaymentTerms();
        } else if (res.data.status === false) {
          toast(res.data.meesage, { type: "error" });
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
    const val = payment.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    navigate("/AddPayment", { state: orgValue });
  };

  const column = [
    { label: "Payment Terms", name: "PAYMENT_TERMS" },
    {
      label: "Action",
      name: "ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="updtdlt">
              <FiEdit
                size={23}
                color="#4f4e4d"
                onClick={() => handleUpdate(value)}
                style={{ cursor: "pointer" }}
              />
              <MdDelete
                size={23}
                color="4f4e4d"
                onClick={() => {
                  setShow(true);
                  setSelectedData(value)
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
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
        title="Payment Terms"
      />
      <CustomTable data={payment} column={column} />
      <DeletePopup
        show={show}
        setShow={setShow}
        setDeleteConfirm={setDeleteConfirm}
      />
      <ToastContainer />
    </div>
  );
};

export default PaymentTerms;
