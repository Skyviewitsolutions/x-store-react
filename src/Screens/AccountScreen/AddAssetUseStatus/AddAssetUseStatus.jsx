import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import './AddAssetUseStatus.css'
const AddAssetUseStatus = () => {
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Asset Use Status"/>
        <div className="AddAssetUseStatusCon">
        <div className="AddAssetStatusContent">
             <div className="AddAssetStatusText">
                <p>Value</p>
                <input type="text" />
             </div>
             <div className="AddAssetStatusText">
                <p>Name</p>
                <input type="text" />
             </div>
           </div>
        </div>
    </div>
  )
}

export default AddAssetUseStatus