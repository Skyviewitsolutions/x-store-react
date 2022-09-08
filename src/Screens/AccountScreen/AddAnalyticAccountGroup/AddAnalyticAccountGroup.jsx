import React from 'react'
import { FaBars } from 'react-icons/fa'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import './AddAnalyticAccountGroup.css'

const AddAnalyticAccountGroup = () => {
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Analytic Account Group" />
      <div className='AddAnalyticAccountGroupCon'>
       <div className="AddAnalyticAccountGrouphead">
        <div className="AddAnalyticAccountGroupcontent">
          <FaBars
            size="33px"
            style={{ color: "#848484", marginTop: "5px" }}
          />
          <div className="AddAnalyticAccountGrouptext">
            <p>0</p>
            <p>Account</p>
          </div>
        </div>
      </div>
      <div className="AddAnalyticAccountGroupdetails">
            <div className="AddAnalyticAccountGroupfirst">
                <div className="AddAnalyticAccountGrouptext1">
                    <p>Name</p>
                    <input type="text" />
                </div>
                <div className="AddAnalyticAccountGrouptext1">
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
                <div className="AddAnalyticAccountGrouptext1">
                    <p>Description</p>
                  <input type="text" />
                </div>
            </div>
            <div className="AddAnalyticAccountGroupsecond">
                <p>Hierarchy</p>
                <div className="AddAnalyticAccountGroupalertbox">
                    <p>No hierarchy position.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddAnalyticAccountGroup