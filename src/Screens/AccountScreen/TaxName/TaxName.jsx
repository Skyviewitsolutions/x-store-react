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

const TaxName = () => {
  const navigate = useNavigate();
  const allTaxUrl = endpoints.TaxName.allTaxName;
  const [taxName, setTaxname] = useState([]);

  useEffect(() => {
    axios
      .post(allTaxUrl)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setTaxname(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const column = [
    { label: "TaxName", name: "TAX_NAME" },
    { label: "TaxScope", name: "TAX_SCOPE" },
    { label: "Label on Invoices", name: "LABEL_ON_INVOICES" },
    {
      label: "Actions",
      name: "Id",
      options: {
        customeBodyRender: (value, tableMeta, UpdateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
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
        title="TaxName"
      />
      <CustomTable data={taxName} column={column} />
      <ToastContainer />
    </div>
  );
};

export default TaxName;
