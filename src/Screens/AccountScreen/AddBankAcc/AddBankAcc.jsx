import { fabClasses } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import { endpoints } from "../../../services/endpoints";
import "./AddBankAcc.css";

const AddBankAcc = () => {

  const navigate = useNavigate()
  const [bankName, setBankName] = useState("");
  const [bankAcc, setBankAcc] = useState("");
  const [bank, setBank] = useState("");
  const [accNum, setAccNum] = useState("");
  const [currency, setCurrency] = useState("");
  const [incomingPay, setIncomingPay] = useState(false);
  const [outgoingPay, setOutgoingPay] = useState(false);
  const [postAt, setPostAt] = useState("");
  const [bankFeed, setBankFeed] = useState(false);
  const [curr, setCurr] = useState([]);
  const [update, setUpdate] = useState("");

  const addBankUrl = endpoints.BankAccount.addBank;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const save = () => {
    const formData = new FormData();
    formData.append("Bank_Account_Name", bankName);
    formData.append("Bank_Account", bankAcc);
    formData.append("Account_No", accNum);
    formData.append("Bank", bank);
    formData.append("Currency", currency);
    formData.append("In_Payments", incomingPay);
    formData.append("Out_Payments", outgoingPay);
    formData.append("Post_At", postAt);
    formData.append("Bank_Feed", bankFeed);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    if (bankName === "") {
      toast("Bank Name is Required!", { type: "warning" });
    } else if (bankAcc === "") {
      toast("Bank Account is Required!", { type: "warning" });
    } else if (accNum === "") {
      toast("Account Number is Required!", { type: "warning" });
    } else if (bank === "") {
      toast("Bank is Required!", { type: "warning" });
    } else if (currency === "") {
      toast("Currency is Required!", { type: "warning" });
    } else if (incomingPay === "") {
      toast("Incoming Payment is Required!", { type: "warning" });
    } else if (outgoingPay === "") {
      toast("Outgoing Payment is Required!", { type: "warning" });
    } else if (postAt === "") {
      toast("Post At Is Required!", { type: "warning" });
    } else if (bankFeed === "") {
      toast("Bank feed is Required!", { type: "warning" });
    } else {
      axios
        .post(addBankUrl, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Bank Added Sucessfully!", { type: "success" });
            setTimeout(() => {
              navigate('/BankAcc')
            }, 1000);
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }
  };

  const CurrencyUrl = endpoints.Currency.allCurrency;

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(CurrencyUrl,formData)
      .then((res) => {
        if (res.data.status === true) {

          const val = res.data.data;
          const filterBankAcc = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
          })
          setCurr(filterBankAcc);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const location = useLocation();

  const selectedData = location.state;
  // console.log(selectedData, "selectedDataaaa");

  const updateBank = endpoints.BankAccount.updateBank;

  useEffect(() => {
    if(selectedData){
    setUpdate(true);
    setBankName(selectedData.BANK_ACCOUNT_NAME);
    setAccNum(selectedData.ACCOUNT_NUMBER);
    setBank(selectedData.ACCOUNT_BANK);
    setBankAcc(selectedData.BANK_ACCOUNT);
    setCurrency(selectedData.BANK_CURRENCY);
    setIncomingPay(selectedData.IN_PAYMENTS);
    setOutgoingPay(selectedData.OUT_PAYMENTS);
    setBankFeed(selectedData.BANK_FEEDS);
    setPostAt(selectedData.POST_AT);
    }
  }, [selectedData]);

  const updateData = () => {
    if (bankName === "") {
      toast("Bank Name is Required!", { type: "warning" });
    } else if (bankAcc === "") {
      toast("Bank Account is Required!", { type: "warning" });
    } else if (accNum === "") {
      toast("Account Number is Required!", { type: "warning" });
    } else if (bank === "") {
      toast("Bank is Required!", { type: "warning" });
    } else if (currency === "") {
      toast("Currency is Required!", { type: "warning" });
    } else if (incomingPay === "") {
      toast("Incoming Payment is Required!", { type: "warning" });
    } else if (outgoingPay === "") {
      toast("Outgoing Payment is Required!", { type: "warning" });
    } else if (postAt === "") {
      toast("Post At Is Required!", { type: "warning" });
    } else if (bankFeed === "") {
      toast("Bank feed is Required!", { type: "warning" });
    } else{
      const formData = new FormData();
      formData.append("ID",selectedData.ID);
      formData.append("Bank_Account_Name",bankName);
      formData.append("Bank_Account",bankAcc);
      formData.append("Account_No",accNum);
      formData.append("Bank",bank);
      formData.append("Currency",currency);
      formData.append("In_Payments",incomingPay);
      formData.append("Out_Payments",outgoingPay);
      formData.append("Post_At",postAt);
    formData.append("Bank_Feed",bankFeed);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(updateBank,formData)
    .then((res) => {
      console.log(res,"ressss")
      if (res.data.status == true) {
        toast("Bank Updated Sucessfully!", { type: "success" });
        setTimeout(() => {
          navigate('/BankAcc')
        }, 1000);
      } else if (res.data.status === false) {
        toast(res.data.message, { type: "error" });
      }
    })
    .catch((err) => {
      console.log(err, "error");
      toast("something went wrong", { type: "error" });
    });
    }
  };
  return (
    <>
      <AccountNavbar
        showBelowMenu={true}
        title="Bank Account"
        save={update === true ? updateData : save}
        showCanelBtn={true}
      />
      <div className="AddBankCon">
        <div className="AddBanktext">
          <p>Bank Account Name</p>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </div>
        <div className="AddBankConbox">
          <div className="AddBankfirsttext">
            <div className="BankAc">
              <p>Account Number</p>
              <select
                value={accNum}
                onChange={(e) => setAccNum(e.target.value)}
              >
                <option value="">select any one</option>
                <option value="3608010777782">3608010777782</option>
                <option value="3608010185812">3608010185812</option>
                <option value="3608010419021">3608010419021</option>
                <option value="2672506179940"> 2672506179940</option>
                <option value="2900757779901">2900757779901</option>
              </select>
            </div>
            <div className="BankAc">
              <p>Bank Account</p>
              <input
                type="text"
                value={bankAcc}
                onChange={(e) => setBankAcc(e.target.value)}
              />
            </div>
            <div className="BankAc">
              <p>Bank</p>
              <input
                type="text"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              />
            </div>
            <div className="BankAc">
            <p>Currency</p>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option>select any one</option>
              {curr.map((item, index) => {
                return (
                  <>
                    <option>{item.CURRENCY_UNIT}</option>
                  </>
                );
              })}
            </select>
          </div>
          </div>
         
        </div>
        <div className="Addbankbox2">
          <div className="Paymenttype">
            <p>Payment Method Types</p>
            <div className="Addbankpay">
              <p>For Incoming Payments</p>
              <input
                type="radio"
                value={incomingPay}
                name="incoming"
                onChange={() => setIncomingPay("Manual")}
                checked={incomingPay === "Manual" ? true : false}
              />
              <span>Manual</span>
            </div>
            <div className="Addbankpay">
              <p></p>
              <input
                type="radio"
                value={incomingPay}
                onChange={() => setIncomingPay("Electronic")}
                checked={incomingPay === "Electronic" ? true : false}
                name="incoming"
              />
              <span>Electronic</span>
            </div>
            <div className="Addbankpay">
              <p>For Outgoing Payments</p>
              <input
                type="checkbox"
                value={outgoingPay}
                onChange={() => setOutgoingPay(!outgoingPay)}
                checked={outgoingPay == true}
              />
              <span>Manual</span>
            </div>
          </div>
          <div className="BankStatements">
            <p>Bank Statement</p>
            <div className="bankselect">
              <p>Post At</p>
              <select
                value={postAt}
                onChange={(e) => setPostAt(e.target.value)}
              >
                <option value="">select any one</option>
                <option value="Payment Validation">Payment Validation</option>
                <option value="Bank Reconciliation">Bank Reconciliation</option>
              </select>
            </div>
            <div className="bankselect">
              <p>Bank Feeds</p>
              <input
                type="radio"
                value={bankFeed}
                onChange={() => setBankFeed(!bankFeed)}
                checked={bankFeed}
              />
              <span>Undefined Yet</span>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddBankAcc;
