import React, { useEffect, useState } from "react";
import "./AccountingEdit.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

const AccountingEdit = (props) => {
  const incomeaccUrl =
    "https://xstore.skyviewads.com/AccountDepartment/ProductIncome/GetAllPI";
  const expenseUrl =
    "https://xstore.skyviewads.com/AccountDepartment/ExpenseAccount/GetAllExp";
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

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
            <option value=""></option>
            <option value="110306001 ضريبة القيمة المضافة على المشتريات">
              110306001 ضريبة القيمة المضافة على المشتريات
            </option>
            <option value="110601001 مخزون قطع غيار">
              110601001 مخزون قطع غيار
            </option>
            <option value="110601002 مخزون كفرات">110601002 مخزون كفرات</option>
            <option value="110601003 مخزون زيوت وشحوم">
              110601003 مخزون زيوت وشحوم
            </option>
            <option value="110601004 مخزون ديزل ">110601004 مخزون ديزل </option>
            <option value="110601005 مخزون مواد جاهزة">
              110601005 مخزون مواد جاهزة
            </option>
            <option value="110601006 وسيط مخزون">110601006 وسيط مخزون</option>
          </select>
        </div>
        <div className="AccountingEditcontent">
          <p>Price Difference</p>
          <select
            value={priceDifference}
            onChange={(e) => setPriceDifference(e.target.value)}
          >
            <option value="110306001 ضريبة القيمة المضافة على المشتريات">
              110306001 ضريبة القيمة المضافة على المشتريات
            </option>
            <option value="110601001 مخزون قطع غيار">
              110601001 مخزون قطع غيار
            </option>
            <option value="110601002 مخزون كفرات">110601002 مخزون كفرات</option>
            <option value="110601003 مخزون زيوت وشحوم">
              110601003 مخزون زيوت وشحوم
            </option>
            <option value="110601004 مخزون ديزل ">110601004 مخزون ديزل </option>
            <option value="110601005 مخزون مواد جاهزة">
              110601005 مخزون مواد جاهزة
            </option>
            <option value="110601006 وسيط مخزون">110601006 وسيط مخزون</option>
          </select>
        </div>

        <div className="AccountingEditcontent">
          <p>Account</p>
          <select value={account} onChange={(e) => setAccount(e.target.value)}>
            <option value="110306001 ضريبة القيمة المضافة على المشتريات">
              110306001 ضريبة القيمة المضافة على المشتريات
            </option>
            <option value="110601001 مخزون قطع غيار">
              110601001 مخزون قطع غيار
            </option>
            <option value="110601002 مخزون كفرات">110601002 مخزون كفرات</option>
            <option value="110601003 مخزون زيوت وشحوم">
              110601003 مخزون زيوت وشحوم
            </option>
            <option value="110601004 مخزون ديزل ">110601004 مخزون ديزل </option>
            <option value="110601005 مخزون مواد جاهزة">
              110601005 مخزون مواد جاهزة
            </option>
            <option value="110601006 وسيط مخزون">110601006 وسيط مخزون</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AccountingEdit;
