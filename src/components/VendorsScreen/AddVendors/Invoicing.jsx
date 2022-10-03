import React from 'react'
import './Invoicing.css'
const Invoicing = () => {
  return (
    <div>
        <div className="invoicing">
            <div className="BankAccount">
                <h3>Bank Account</h3>
                <div className="banktext">
                    <p>Bank</p>
                    <input type="text" />
                </div>
                <div className="banktext">
                    <p>Account Number</p>
                    <input type="text" />
                </div>
            </div>
            <div className="Accounting">
                <h3>Accounting Entries</h3>
            <div className="banktext">
                    <p>Account Receivable</p>
                    <select>
                        <option></option>
                        <option>110301001  Ministry Of Transport</option>
                        <option>110301002 Royal commission Yanbu</option>
                        <option>110301003 Ministry Of Muncipal and Ruler Affairs</option>
                        <option>Red Sea Company</option>
                    </select>
                </div>
            <div className="banktext">
                    <p>Account Payable</p>
                    <select>
                        <option></option>
                        <option>210101001 Suppliers</option>
                        <option>210101001 Net SubContractors Proceeds</option>
                        <option>210101001 Employee Salaries Owed</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invoicing