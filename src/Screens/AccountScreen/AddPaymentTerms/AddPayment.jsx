import React from "react";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import "./AddPayment.css";
const AddPayment = () => {
  return (
    <div>
      <AccountNavbar showBelowMenu={true} title="Payment Terms" />
      <div className="AddPaymentCon">
        <div className="AddPaytext">
          <p>Payment Terms</p>
          <input type="text" />
        </div>
        <div className="AddPayDes">
          <p>Description on the Invoice</p>
          <span>Payment term explanation for the customer...</span>
          <input type="text" />
        </div>
        <div className="AddPayTerms">
          <p>Terms</p>
          <span>
            The last line's computation type should be "Balance" to ensure that
            the whole amount will be allocated..
          </span>
          <input type="text" />
        </div>
        <div className="AddPaymentbox" style={{alignItems : "flex-start" , marginTop : "9px"}}>
          <div className="AddPaymentcontent">
            <div className="addPymentContBx1">
              <p>Due Type</p>
            </div>
            <div className="addPymentContBx2">
              <div>
                <input type="radio" name="due"/>
                <span>Balance</span>
              </div>
              <div>
                <input type="radio" name="due" />
                <span>Percent</span>
              </div>
              <div>
                <input type="radio" name="due"/>
                <span>Fixed Amount</span>
              </div>
            </div>
          </div>

          <div className="AddPaymentcontent1">
            <p>Value</p>
            <input type="text" />
          </div>
          <div className="AddPaymentcontent1">
            <p>Number Of Days</p>
            <input type="text" />            

          </div>
          <div className="AddPaymentcontent1">
            <p>Day Of Month</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
