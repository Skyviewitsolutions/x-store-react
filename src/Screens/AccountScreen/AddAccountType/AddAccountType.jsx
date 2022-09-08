import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import './AddAccountType.css';
const AddAccountType = () => {
  return (
    <>
      <AccountNavbar showBelowMenu={true} title="Account Type"/>
      <div className="AddAccountCon">
         <div className="AddAccTypeFirst">
            <div className="AddAccContent">
                <p>Account Type</p>
                <input type="text" />
            </div>
            <div className="AddAccContent">
                <p>Type</p>
               <select>
                <option></option>
                <option>Regular</option>
                <option>Receivable</option>
                <option>Payable</option>
                <option>Liquidity</option>
               </select>
            </div>
            <div className="AddAccContent">
                <p>Internal Group</p>
               <select>
                <option></option>
                <option>Equity</option>
                <option>Asset</option>
                <option>Liability</option>
                <option>Income</option>
                <option>Expense</option>
                <option>Off Balance</option>
               </select>
            </div>
            <div className="des">
            <h3>Description</h3>
            <input type="text" />
            </div>
           
         </div>
         <div className="AddAccTypeSecond">
            <div className="AddAccTypecheckbox">
                <p>Bring Accounts Balance Forward</p>
                <input type="checkbox" />
            </div>
         </div>
      </div>
    </>
  )
}

export default AddAccountType