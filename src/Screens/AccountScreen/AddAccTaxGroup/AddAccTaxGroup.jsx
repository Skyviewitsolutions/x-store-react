import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import './AddAccGroup.css';
const AddAccTaxGroup = () => {
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Account Tax Group"/>
        <div className='AddAccTaxGroupCon'>
           <div className="AddAccTaxGroupContent">
             <div className="AddAccTaxGroupText">
                <p>Name</p>
                <input type="text" />
             </div>
             <div className="AddAccTaxGroupText">
                <p>Tax Current Account(Payable)</p>
                <input type="text" />
             </div>
             <div className="AddAccTaxGroupText">
                <p>Tax Current Account(Receivale)</p>
                <input type="text" />
             </div>
             <div className="AddAccTaxGroupText">
                <p>Advance Tax Payment Account</p>
                <input type="text" />
             </div>
           </div>
        </div>
    </div>
  )
}

export default AddAccTaxGroup