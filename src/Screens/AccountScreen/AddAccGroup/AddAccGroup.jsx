import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import './AddAccGrup.css'

const AddAccGroup = () => {
  return (
    <>
    <AccountNavbar showBelowMenu={true}  title="Account Group"/>
    <div className="AddAccGroupCon">
        <div className="AddAccgroupdetails">
            <div className="accgroupfirst">
                <div className="acctext">
                    <p>Code Prefix</p>
                    <input type="text" />
                </div>
                <div className="acctext">
                    <p>Name</p>
                    <input type="text" />
                </div>
                <div className="acctext">
                    <p>Parent</p>
                    <select>
                        <option></option>
                        <option>Bank</option>s
                        <option>Other C.Assets</option>
                        <option>accumulated depreciation</option>
                        <option>Advance Payment</option>
                        <option>Inventory/C.Assets</option>
                        <option>Cash</option>
                        <option>Sub employee</option>
                    </select>
                </div>
                <div className="acctext">
                    <p>Account</p>
                    <select>
                        <option></option>
                        <option>Bank</option>s
                        <option>HDFC</option>
                        <option>CBOI</option>
                        <option>SBI</option>
                    </select>
                </div>
            </div>
            <div className="accgroupsecond">
                <p>Hierarchy</p>
                <div className="accgroupalertbox">
                    <p>No hierarchy position.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddAccGroup