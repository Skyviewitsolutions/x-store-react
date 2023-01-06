import axios from "axios";
import React, { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import { endpoints } from "../../../services/endpoints";
import "./AddPayment.css";

const AddPayment = () => {

  const navigate = useNavigate()
  const addPaymentUrl = endpoints.PaymentTerms.addPayment;
  const [paymentTerms, setPaymentTerms] = useState("");
  const [desInvoice, setDesInvoice] = useState("");
  const [pay, setPay] = useState("");
  const [dueType, setDueType] = useState("");
  const [value, setValue] = useState("");
  const [numOfDays, setNumberofDays] = useState("");
  const [dayOfMonth, setDayOfMonth] = useState("");
  const [update, setUpdate] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");



  const save = () => {
    if (paymentTerms === "") {
      toast("Payment Terms is Required!", { type: "warning" });
    } else if (desInvoice === "") {
      toast("Description Invoice is Required!", { type: "warning" });
    } else if (pay === "") {
      toast("Pay Terms is Required!", { type: "warning" });
    } else if (dueType === "") {
      toast("Due Type is Required!", { type: "warning" });
    } else if (value === "") {
      toast("Value is Required!", { type: "warning" });
    } else if (numOfDays === "") {
      toast("Number of Days is Required!", { type: "warning" });
    } else if (dayOfMonth === "") {
      toast("Days of Month is Required!", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Payment_Terms", paymentTerms);
      formData.append("Description_on_the_invoice", desInvoice);
      formData.append("Terms", pay);
      formData.append("Due_Type", dueType);
      formData.append("Value", value);
      formData.append("Number_Of_Days", numOfDays);
      formData.append("Days_Of_Month", dayOfMonth);
      formData.append("User_Authorization" , getAuthtoken)
      formData.append("User_AuthKey" , userAuth);
      axios
        .post(addPaymentUrl, formData)
        .then((res) => {
          console.log(res, "AddPayment");
          if (res.data.status === true) {
            toast("Payment Terms is Added Successfully!", { type: "success" });
            setTimeout(() => {
              navigate('/PaymentTerms')
             }, 1000);
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "success" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
        });
    }
  };

  const location = useLocation();
  const selectedData = location.state;
  const paymentupdateUrl =endpoints.PaymentTerms.updatePayment;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setPaymentTerms(selectedData.PAYMENT_TERMS);
      setDesInvoice(selectedData.DESCIPTION_ON_THE_INVOICE);
      setDueType(selectedData.DUE_TYPE);
      setPay(selectedData.PAY_TERMS);
      setDayOfMonth(selectedData.DAY_OF_MONTH);
      setNumberofDays(selectedData.NUMBER_OF_DAYS);
      setValue(selectedData.VALUE);
    }
  }, [selectedData]);
  
  const updateData = () => {
    if (paymentTerms === "") {
      toast("Payment Terms is Required!", { type: "warning" });
    } else if (desInvoice === "") {
      toast("Description Invoice is Required!", { type: "warning" });
    } else if (pay === "") {
      toast("Pay Terms is Required!", { type: "warning" });
    } else if (dueType === "") {
      toast("Due Type is Required!", { type: "warning" });
    } else if (value === "") {
      toast("Value is Required!", { type: "warning" });
    } else if (numOfDays === "") {
      toast("Number of Days is Required!", { type: "warning" });
    } else if (dayOfMonth === "") {
      toast("Days of Month is Required!", { type: "warning" });
    }
    else{
       const formData = new FormData()
       formData.append("Id", selectedData.ID);
       formData.append("Payment_Terms" , paymentTerms);
       formData.append("Description_on_the_invoice" , desInvoice);
       formData.append("Terms" , pay);
       formData.append("Due_Type" , dueType);
       formData.append("Value" , value);
       formData.append("Number_Of_Days",numOfDays);
       formData.append("Days_Of_Month",dayOfMonth);
       formData.append("User_Authorization" , getAuthtoken)
       formData.append("User_AuthKey" , userAuth);
       axios.post(paymentupdateUrl,formData)
       .then((res) => {
        if(res.data.status === true)
        {
          toast("Payment Terms is updated Successfully !",{type:"success"})
          setTimeout(() => {
            navigate('/PaymentTerms')
           }, 1000);
        }
        else if(res.data.status === false)
        {
          toast(res.data.message , {type:"error"});
        }
      })
      .catch((err) => {
        console.log(err,"error");
      })
    }
  }

  return (
    <div>
      <AccountNavbar showBelowMenu={true} title="Payment Terms" save={update === true ? updateData : save} showCanelBtn={true} />
      <div className="AddPaymentCon">
        <div className="paymentCon">
        <div className="AddPaytext">
          <p>Payment Terms</p>
          <input
            type="text"
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
          />
        </div>
        <div className="AddPayDes">
          <p>Description on the Invoice</p>
          <input
            type="text"
            value={desInvoice}
            onChange={(e) => setDesInvoice(e.target.value)}
            placeholder="Payment term explanation for the customer..."
          />
        </div>
        <div className="AddPayTerms">
          <p>Terms</p>
          <input
            type="text"
            value={pay}
            onChange={(e) => setPay(e.target.value)}
            placeholder="The last line's computation type should be Balance to ensure that
            the whole amount will be allocated.."
          />
        </div>
        <div
          className="AddPaymentbox"
          style={{ alignItems: "flex-start", marginTop: "9px" }}
        >
          <div className="AddPaymentcontent">
            <div className="addPymentContBx1">
              <p>Due Type</p>
            </div>
            <div className="addPymentContBx2">
              <div>
                <input
                  type="radio"
                  name="due"
                  onChange={(e) => setDueType("Balance")}
                  checked={dueType === "Balance" ? true : false}
                />
                <span>Balance</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="due"
                  onChange={(e) => setDueType("Percent")}
                  checked={dueType === "Percent" ? true : false}
                />
                <span>Percent</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="due"
                  onChange={(e) => setDueType("Fixed Amount")}
                  checked={dueType === "Fixed Amount" ? true : false}
                />
                <span>Fixed Amount</span>
              </div>
            </div>
          </div>

          <div className="AddPaymentcontent1">
            <p>Value</p>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="AddPaymentcontent1">
            <p>Number Of Days</p>
            <input
              type="text"
              value={numOfDays}
              onChange={(e) => setNumberofDays(e.target.value)}
            />
          </div>
          <div className="AddPaymentcontent1">
            <p>Day Of Month</p>
            <input
              type="date"
              value={dayOfMonth}
              onChange={(e) => setDayOfMonth(e.target.value)}
            />
          </div>
          <ToastContainer />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddPayment;
