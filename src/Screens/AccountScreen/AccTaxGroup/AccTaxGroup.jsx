import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import "./AccTaxGroup.css";
const AccTaxGroup = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [accTaxGrp, setAccTaxGrp] = useState([]);
  const allAccTaxGrpUrl = endpoints.AccountTaxGrp.allAccgrpTax;

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getAccTaxGrp = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allAccTaxGrpUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse();
          const filterAccTaxGrp = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAccTaxGrp(filterAccTaxGrp);
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
    getAccTaxGrp();
  }, []);

  const deleteAcctaxUrl = endpoints.AccountTaxGrp.deleteAccGrpTax;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("Id", data);
    axios
      .post(deleteAcctaxUrl, formData)
      .then((res) => {
        console.log(res, "response Acc");
        if (res.data.status === true) {
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          getAccTaxGrp();
          toast("Account Tax Group deleted Successfully!", { type: "success" });
        } else if (res.data.status === false) {
          getAccTaxGrp();
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
    const val = accTaxGrp.filter((itm, index) => {
      return itm.ACCOUNT_ID == data;
    });
    const orgValue = val[0];
    console.log(orgValue, "irhhcbsdh");
    navigate("/AddAccTaxGroup", { state: orgValue });
  };

  const column = [
    { label: "Name", name: "ACCOUNT_NAME" },
    { label: "Tax Curent Account(Payable)", name: "TAX_PAYABLE" },
    { label: "Tax Current Account(Receivable)", name: "TAX_RECEIVAL" },
    {
      label: "Advance Tax Payment Account",
      name: "ADVANCE_TAX_PAYMENT_ACCOUNT",
    },
    {
      label: "Action",
      name: "ACCOUNT_ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
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
              </div>
            </>
          );
        },
      },
    },
  ];

  const handleCreatePage = () => {
    navigate("/AddAccTaxGroup");
  };
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Account Tax Group"
      />
      <CustomTable data={accTaxGrp} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default AccTaxGroup;
