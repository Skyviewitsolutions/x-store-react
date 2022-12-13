import React from "react";
import "./Accounting.css";
const Accounting = (props) => {
  const { incomeAccount, expenseAccount, assetType, priceDifference } = props;
  return (
    <div className="AccountingContainer">
      <div className="acc1">
        <h5>Receivables</h5>
        <div className="firstcontent3">
          <p>Income Account</p>
          <span>{incomeAccount}</span>
        </div>
      </div>
      <div className="acc2">
        <h5>Payables</h5>
        <div className="firstcontent3">
          <p>Expense Account</p>
          <span>{expenseAccount}</span>
        </div>
        {/* <div className="firstcontent3">
        <p>Asset/Expense Type</p>
        <span>{assetType}</span>
        </div>
         */}
        <div className="firstcontent3">
          <p>Price Difference</p>
          <span>{priceDifference}</span>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
