import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import PurchaseNavbar from "../../PurchaseNavbar";
import "./AddPurchaseAgreementTypes.css";

const AddPurchaseAgreementTypes = () => {
  const navigate = useNavigate();
  const [agreementType, setAgreementtype] = useState("");
  const [agreementSelection, setAgreementSelection] = useState("");
  const [dataforquotation, setDataforQuotation] = useState("");
  const [quantites, setQuantites] = useState("");
  const [update, setUpdate] = useState("");

  const addPurchaseagreementType =
    endpoints.purchaseAgreementtype.addAgreementtype;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const save = () => {
    if (agreementType === "") {
      toast("Agreement Type is requird", { type: "warning" });
    } else if (agreementSelection === "") {
      toast("Agreement Selection Type is required", { type: "warning" });
    } else if (dataforquotation === "") {
      toast("Line is required", { type: "warning" });
    } else if (quantites === "") {
      toast("Quantity is required", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Agreement_Type", agreementType);
      formData.append("Selection_Type", agreementSelection);
      formData.append("Lines", dataforquotation);
      formData.append("Quantities", quantites);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(addPurchaseagreementType, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Purchase Agreement Type added successfully", {
              type: "success",
            });
            setTimeout(() => {
              navigate('/PurchaseAgreementTypes')
            }, 1000);
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
    }
  };

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData, "selectedData here");

  const updateAgreementtypeurl =
    endpoints.purchaseAgreementtype.updateAgreementtype;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setAgreementtype(selectedData.AGREEMENT_TYPE);
      setAgreementSelection(selectedData.AGREEMENT_SELECTION_TYPE);
      setDataforQuotation(selectedData.LINES);
      setQuantites(selectedData.QUANTITIES);
    }
  }, [selectedData]);

  const updateData = () => {
    if (agreementType === "") {
      toast("Agreement Type is requird", { type: "warning" });
    } else if (agreementSelection === "") {
      toast("Agreement Selection Type is required", { type: "warning" });
    } else if (dataforquotation === "") {
      toast("Line is required", { type: "warning" });
    } else if (quantites === "") {
      toast("Quantity is required", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("ID", selectedData.ID);
      formData.append("Agreement_Type", agreementType);
      formData.append("Selection_Type", agreementSelection);
      formData.append("Lines", dataforquotation);
      formData.append("Quantities", quantites);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(updateAgreementtypeurl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Purchase Agreement Type updated successfully", {
              type: "success",
            });
            setTimeout(() => {
              navigate('/PurchaseAgreementTypes')
            }, 1000);
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
    }
  };
  return (
    <div>
      <PurchaseNavbar
        showBelowMenu={true}
        title="Purchase Agreement Types
        "
        save={update === true ? updateData : save}
        showCanelBtn={true}
      />
      <div className="Add_Container">
        <div className="addpat_Con">
          <div className="agrements">
            <h1>Agreement Type</h1>
            <div className="at_text">
              <p>Agreement Type</p>
              <input
                type="text"
                value={agreementType}
                onChange={(e) => setAgreementtype(e.target.value)}
              />
            </div>
            <div className="ats_radio">
              <p>Agreement Selection</p>
              <div>
                <div className="att_radio">
                  <input
                    type="radio"
                    name="only"
                    onChange={(e) =>
                      setAgreementSelection("Select only one RFQ (exclusive)")
                    }
                    checked={
                      agreementSelection === "Select only one RFQ (exclusive)"
                        ? true
                        : false
                    }
                  />
                  <span>Select only one RFQ (exclusive)</span>
                </div>
                <div className="att_radio">
                  <input
                    type="radio"
                    name="only"
                    onChange={(e) =>
                      setAgreementSelection("Select multiple RFQ")
                    }
                    checked={
                      agreementSelection === "Select multiple RFQ"
                        ? true
                        : false
                    }
                  />
                  <span>Select multiple RFQ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="data_quo">
            <h1>Data for new quotations</h1>
            <div className="datas_radio">
              <p>Lines</p>
              <div className="radio_pur">
                <div className="ass_radio">
                  <input
                    type="radio"
                    name="lines"
                    onChange={(e) =>
                      setDataforQuotation("Use lines of agreement")
                    }
                    checked={
                      dataforquotation === "Use lines of agreement"
                        ? true
                        : false
                    }
                  />
                  <span>Use lines of agreement</span>
                </div>
                <div className="ass_radio">
                  <input
                    type="radio"
                    name="lines"
                    onChange={(e) =>
                      setDataforQuotation(
                        "Do not create RfQ lines automatically"
                      )
                    }
                    checked={
                      dataforquotation ===
                      "Do not create RfQ lines automatically"
                        ? true
                        : false
                    }
                  />
                  <span>Do not create RfQ lines automatically</span>
                </div>
              </div>
            </div>
            <div className="datas_radio">
              <p>Quantities</p>
              <div className="radio_pur">
                <div className="ass_radio">
                  <input
                    type="radio"
                    name="quanties"
                    onChange={(e) =>
                      setQuantites("Use quantities of agreement")
                    }
                    checked={
                      quantites === "Use quantities of agreement" ? true : false
                    }
                  />
                  <span>Use quantities of agreement</span>
                </div>
                <div className="ass_radio">
                  <input
                    type="radio"
                    name="quanties"
                    onChange={(e) => setQuantites("Set quantities manually")}
                    checked={
                      quantites === "Set quantities manually" ? true : false
                    }
                  />
                  <span>Set quantities manually</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddPurchaseAgreementTypes;
