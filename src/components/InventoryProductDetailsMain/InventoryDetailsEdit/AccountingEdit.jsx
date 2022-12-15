import React, { useEffect, useState } from "react";
import "./AccountingEdit.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { Hail } from "@mui/icons-material";
import { endpoints } from "../../../services/endpoints";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AccountingEdit = (props) => {

  const incomeaccUrl = endpoints.products.incomeAcoount;
  const expenseUrl = endpoints.products.expenseAccount;
  const priceUrl = endpoints.products.priceDifference;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const navigate = useNavigate();
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [price, setPrice] = useState([]);

  const {
    incomeAccount,
    setIncomeAccount,
    expenseAccount,
    setExpenseAccount,
    assetType,
    setAssetType,
    priceDifference,
    setPriceDifference,
  } = props;

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(incomeaccUrl, formData)
      .then((res) => {
        console.log(res, "this is income");
        if (res.data.status == true) {
          setIncome(res.data.data);
        } else if (res.data.status == false) {
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

    axios
      .post(expenseUrl, formData)
      .then((res) => {
        console.log(res, "this is expense");
        if (res.data.status == true) {
          setExpense(res.data.data);
        } else if (res.data.status == false) {
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
  }, []);
  return (
    <div className="AccountingContainer">
      <div className="acc1">
        <h5>Receivables</h5>
        <div className="AccountingEditcontent">
          <p>Income Account</p>
          <select
            value={incomeAccount}
            onChange={(e) => setIncomeAccount(e.target.value)}
          >
             <option value="">Select Any One</option>
            {income.map((item, index) => {
              return (
                <>
                  
                  <option value={item.PRODUCT_INCOME_NAME} key={index}>
                    {item.PRODUCT_INCOME_NAME}
                  </option>
                </>
              );
            })}
          </select>
          {/* <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          /> */}
        </div>
      </div>
      <div className="acc2">
        <h5>Payables</h5>

        <div className="AccountingEditcontent">
          <p>Expense Account</p>
          <select
            value={expenseAccount}
            onChange={(e) => setExpenseAccount(e.target.value)}
          >   
          <option value="">Select Any One</option>
          
            {expense.map((item, index) => {
              return (
                <>
                  <option value={item.EXPENSE_NAME} key={index}>
                    {item.EXPENSE_NAME}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div className="AccountingEditcontent">
          <p>Price Difference Account</p>
          <select
            value={priceDifference}
            onChange={(e) => setPriceDifference(e.target.value)}
          >
            <option value="">Select Any One</option>
            {expense.map((item,index) => {
              return(
                <>
                  <option value={item.EXPENSE_NAME} key={index}>
                    {item.EXPENSE_NAME}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AccountingEdit;
