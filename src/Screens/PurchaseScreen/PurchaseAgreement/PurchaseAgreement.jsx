import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import PurchaseNavbar from "../PurchaseNavbar";

const PurchaseAgreement = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddPurchaseAgreement");
  };

  const [allAgreement, setAllAgreement] = useState([]);
  const allAgreementUrl = endpoints.agreementType.allAgreement;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const getAgreement = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allAgreementUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          // val = val.reverse();
          const filterPurchaseAgree = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllAgreement(filterPurchaseAgree);
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
        console.log(err, "something went wrong");
      });
  };

  useEffect(() => {
    getAgreement();
  }, []);

  const deletePurchase = endpoints.agreementType.deleteAgreement;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deletePurchase, formData)
      .then((res) => {
        if (res.data.status === true) {
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          getAgreement();
          toast("Purchase Agreement deleted Successfully", { type: "success" });
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
    const val = allAgreement.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    console.log(orgValue, "irhhcbsdh");
    navigate("/AddPurchaseAgreement", { state: orgValue });
  };

  const column = [
    { label: "Agreement Type", name: "AGREEMENT_TYPE" },
    { label: "Purchase Representative", name: "PURCHASE_REPRESENTATIVE" },
    { label: "Ordering Date", name: "ORDER_DATE" },
    { label: "Agreement Deadline", name: "AGREEMENT_DEADLINE" },
    { label: "Source Document", name: "SOURCE_DOCUMENT" },
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
        title="Purchase Agreements"
        handleCreatePage={handleCreatePage}
      />
      <CustomTable data={allAgreement} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default PurchaseAgreement;
