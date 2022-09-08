import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import './AddIncoterms.css'
const AddIncoterms = () => {
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Incoterms"/>
        <div className='AddIncotermsCon'>
           <div className="AddIncotermsContent">
             <div className="AddIncoText">
                <p>Code</p>
                <input type="text" />
             </div>
             <div className="AddIncoText">
                <p>Name</p>
                <input type="text" />
             </div>
           </div>
        </div>
    </div>
  )
}

export default AddIncoterms