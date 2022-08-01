import React from "react";
import "./Accounting.css";
const Accounting = () => {
  return (
    <div className="AccountingContainer">
      <div className="acc1">
        <h5>Receivables</h5>
        <p>Income Account</p>
      </div>
      <div className="acc2">
        <h5>Payables</h5>
        <p>Expense Account</p>
        <p>Asset/Expense Type</p>
        <p>Price Difference</p>
        <p>Account</p>
      </div>
    </div>
  );
};

export default Accounting;
