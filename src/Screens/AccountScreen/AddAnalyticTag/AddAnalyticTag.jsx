import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import './AddAnalyticTag.css'
const AddAnalyticTag = () => {
  return (
    <>
    <AccountNavbar showBelowMenu={true} title="Analytic Tag" />
    <div className="AddAnalyticTagCon">
       <div className="AddAnalyticTagContent">
        <p>Analytic Tag</p>
        <input type="text" />
       </div>
       <div className="AddAnalyticTagChecbox">
        <p>Analytic Distribution</p>
        <input type="checkbox" />
       </div>
       <div className="AddAnalyticTagContent">
        <p>Analytic Account</p>
        <input type="text" />
       </div>
        </div>
    </>
  )
}

export default AddAnalyticTag