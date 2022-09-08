import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import './AddBankAcc.css';
const AddBankAcc = () => {
  return (
   <>
   <AccountNavbar  showBelowMenu={true} title="Bank Account"/>
   <div className="AddBankCon">
     <div className="AddBanktext">
        <p>Bank Account Name</p>
        <input type="text" />
     </div>
     <div className="AddBankConbox">
        <div className="AddBankfirsttext">
            <div className="BankAc">
            <p>Bank Account</p>
            <select>
                <option></option>
                <option>3608010777782</option>
                <option>3608010185812</option>
                <option>3608010419021</option>
                <option>2672506179940</option>
                <option>2900757779901</option>
            </select>
            </div>
            <div className="BankAc">
            <p>Account Number</p>
            <span>3608010777782</span>
            </div>
            <div className="BankAc">
            <p>Bank</p>
            <span>RIYAD BANK - RIBLSARIXXX</span>
            </div>
        </div>
        <div className="AddBankAccSecondText">
            <p>Currency</p>
            <select>
                <option></option>
                <option>SAR</option>
            </select>
        </div>
     </div>
     <div className="Addbankbox2">
        <div className="Paymenttype">
            <p>Payment Method Types</p>
            <div className="Addbankpay">
                <p>For Incoming</p>
                <input type="checkbox" />
                <span>Manual</span>
            </div>
            <div className="Addbankpay">
                <p>Payments</p>
                <input type="checkbox" />
                <span>Electronic</span>
            </div>
            <div className="Addbankpay">
                <p>For Outgoing Payments</p>
                <input type="checkbox" />
                <span>Manual</span>
            </div>
        </div>
        <div className="BankStatements">
            <p>Bank Statement</p>
            <div className="bankselect">
                <p>Post At</p>
                <select>
                    <option></option>
                    <option>Payment Validation</option>
                    <option>Bank Reconciliation</option>
                </select>
            </div>
            <div className="bankselect">
                <p>Bank Feeds</p>
               <input type="radio" />
               <span>Undefined Yet</span>
            </div>
        </div>
     </div>
   </div>
   </>
  )
}

export default AddBankAcc