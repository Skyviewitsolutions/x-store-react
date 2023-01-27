import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";
import "./TaxName.css";
import axios from "axios";
import { useState } from "react";
import { FaBullseye } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { Update } from "@mui/icons-material";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";

const TaxName = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const allTaxUrl = endpoints.TaxName.allTaxName;
  const [taxName, setTaxname] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getTaxName = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios
      .post(allTaxUrl, formData)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse();
          const filterTaxname = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setTaxname(filterTaxname);
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
    getTaxName();
  }, []);

  const deleteTaxUrl = endpoints.TaxName.deleteTaxName;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("Id", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios
      .post(deleteTaxUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          getTaxName();
          toast("Tax Name Is Deleted Successfully!", { type: "success" });
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
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
    const val = taxName.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    navigate("/AddTaxName", { state: orgValue });
  };

  const column = [
    { label: "TaxName", name: "TAX_NAME" },
    { label: "TaxScope", name: "TAX_SCOPE" },
    { label: "Label on Invoices", name: "LABEL_ON_INVOICES" },
    {
      label: "Action",
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
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
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
              </div>
            </>
          );
        },
      },
    },
  ];

  const handleCreatePage = () => {
    navigate("/AddTaxName");
  };
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Tax Name"
      />
      <CustomTable data={taxName} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default TaxName;
