import React from 'react'

const CusInvoicing = (props) => {
    const {bank,setBank,accNumber,setAccNumber,accReceviable,setAccReceviable,accPayable,setAccPayable} = props;
  return (
    <div>
         <div className="invoicing">
            <div className="BankAccount">
                <h3>Bank Account</h3>
                <div className="banktext">
                    <p>Bank</p>
                    <input type="text" value={bank} onChange={(e) => setBank(e.target.value)}/>
                </div>
                <div className="banktext">
                    <p>Account Number</p>
                    <input type="text" value={accNumber} onChange={(e) => setAccNumber(e.target.value)}/>
                </div>
            </div>
            <div className="Accounting">
                <h3>Accounting Entries</h3>
            <div className="banktext">
                    <p>Account Receivable</p>
                    <select  value={accReceviable} onChange={(e) => setAccReceviable(e.target.value)}>
                        <option value="">Select any one</option>
                        <option value="110301001  Ministry Of Transport">110301001  Ministry Of Transport</option>
                        <option value="110301002 Royal commission Yanbu">110301002 Royal commission Yanbu</option>
                        <option value="110301003 Ministry Of Muncipal and Ruler Affairs">110301003 Ministry Of Muncipal and Ruler Affairs</option>
                        <option value="Red Sea Company">Red Sea Company</option>
                    </select>
                </div>
            <div className="banktext">
                    <p>Account Payable</p>
                    <select  value={accPayable} onChange={(e) => setAccPayable(e.target.value)}>
                        <option value="">Choose any one</option>
                        <option value="210101001 Suppliers">210101001 Suppliers</option>
                        <option value="210101001 Net SubContractors Proceeds">210101001 Net SubContractors Proceeds</option>
                        <option value="210101001 Employee Salaries Owed">210101001 Employee Salaries Owed</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CusInvoicing