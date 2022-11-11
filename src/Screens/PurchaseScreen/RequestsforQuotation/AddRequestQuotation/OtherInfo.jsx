import React from "react";
import "./OtherInfo.css";
const OtherInfo = () => {
  return (
    <div>
      <div className="OtherInfoCon">
        <div className="otherInfotext">
          <div className="otherinfo">
            <p>Receipt Date</p>
            <input type="date" />
          </div>
          <div className="otherinfo">
            <p>Incoterm</p>
            <select>
              <option>Choose any one</option>
              <option></option>
              <option>Ex works</option>
              <option>Free Carrier</option>
            </select>
          </div>
        </div>
        <div className="otherInfotext2">
          <div className="otherinfo">
            <p>Purchase Representative</p>
            <select>
              <option>Choose any one</option>
              <option>Accountant-Ryd</option>
              <option>Account 02</option>
              <option>CRUH 01</option>
              <option>CRUH 02</option>
              <option>CRUH 03</option>
              <option>CRUH 04</option>
              <option>Data Entry</option>
            </select>
          </div>
          <div className="otherinfo">
            <p>Fiscal Position</p>
            <select>
              <option>Choose any one</option>
              <option></option>
              <option>Accountant-Ryd</option>
              <option>Account 02</option>
            
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
