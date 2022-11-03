import React, { useEffect, useState } from "react";
import "./AccountingEdit.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { Hail } from "@mui/icons-material";
import { endpoints } from "../../../services/endpoints";

const AccountingEdit = (props) => {

  const incomeaccUrl = endpoints.products.incomeAcoount;
  const expenseUrl = endpoints.products.expenseAccount;
    const priceUrl = endpoints.products.priceDifference;
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [price , setPrice] = useState([]);

  useEffect(() => {
    axios
      .post(incomeaccUrl)
      .then((res) => {
        console.log(res, "incomeresult");
        if (res.data.status == true) {
          setIncome(res.data.data);
        } else if (res.data.status == false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
    axios
      .post(expenseUrl)
      .then((res) => {
        console.log(res, "ExpenseResponse");
        if (res.data.status == true) {
          setExpense(res.data.data);
        } else if (res.data.status == false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
      axios.post(priceUrl)
      .then((res) => {
        console.log(res,'pricediffrence');
        if(res.data.status == true)
        {
          setPrice(res.data.data);
        }
        else if(res.data.status == false)
        {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err,'error')
      })
  }, []);

  const {
    incomeAccount,
    setIncomeAccount,
    expenseAccount,
    setExpenceAccount,
    assetType,
    setAssetType,
    priceDifference,
    setPriceDifference,
    account,
    setAccount,
  } = props;

  useEffect(() => {
    axios
      .post(incomeaccUrl)
      .then((res) => {
        console.log(res, "this is income");
        if (res.data.status == true) {
          setIncome(res.data.data);
        } else if (res.data.status == false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });

    axios
      .post(expenseUrl)
      .then((res) => {
        console.log(res, "this is expense");
        if (res.data.status == true) {
          setExpense(res.data.data);
        } else if (res.data.status == false) {
          alert(res.data.message);
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
          <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
        </div>
      </div>
      <div className="acc2">
        <h5>Payables</h5>

        <div className="AccountingEditcontent">
          <p>Expense Account</p>
          <select
            value={expenseAccount}
            onChange={(e) => setExpenceAccount(e.target.value)}
          >
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
          <p>Asset/Expense Type</p>
          <select
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
          >
            {expense.map((item,index) => {
              return(
                <>
                <option value={item.EXPENSE_NAME} key={index}>{item.EXPENSE_NAME}</option>
                </>
              )
            })}
          </select>
        </div>
        <div className="AccountingEditcontent">
          <p>Price Difference Account</p>
          <select
            value={priceDifference}
            onChange={(e) => setPriceDifference(e.target.value)}
          >
            {price.map((item,index) => {
              return(
                <>
                <option value={item.AMOUNT_NAME} key={index}>
                {item.AMOUNT_NAME}
            </option>
                </>
              )
            })}
            
          </select>
        </div>
      </div>
    </div>
  );
};

export default AccountingEdit;
