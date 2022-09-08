import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import './AddAnalyticAccountType.css'
const AddAnalyticAccountType = () => {
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Analytic Account Type" />
        <div className="AddAccTyCon">
            <div className="AddAccTypeContent">
                <p>Analytic Account Type</p>
                <input type="text" />
            </div>
        </div>
    </div>
  )
}

export default AddAnalyticAccountType