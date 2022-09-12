import React, { useState } from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import './AddTaxNAme.css';
const AddTaxName = () => {

    const [taxName , setTaxname] = useState("");
    const [taxScope , setTaxscope] = useState("");
    const [taxComputation , setTaxComputation] = useState("");
    const [ammount ,  setAmmount] = useState("");
    const [labelInvoice , setLabelInvoice] = useState("");
    const [IncludedPrice , setIncludedPrice] = useState("");
    const [taxGroup , setTaxGroup] = useState("");
    const [affect , setAffect] = useState("");
    const [cost , setCost] = useState("");
    
  return (
    <>
    <AccountNavbar showBelowMenu={true} title="TaxName"/>
    <div className='TaxNameCon'>
        <div className="TaxNamemain">
        <div className="TaxNamecontent">
            <div className="AddTaxinput">
            <p>TaxName</p>
           <input type="text" />
            </div>
            <div className="AddTaxinput">
            <p>Tax Computation</p>
             <select>
                <option></option>
                <option>Group Of Taxes</option>
                <option>Fixed</option>
                <option>Percentage of Price</option>
                <option>Percentage of Price Tax Included</option>
                <option>Python Code</option>
             </select>
            </div>
     </div>
     <div className="TaxNamecontent2">
            <div className="AddTaxinput">
            <p>Tax Scope</p>
            <select>
                <option></option>
                <option>Sales</option>
                <option>Purchase</option>
                <option>None</option>
             </select>
            </div>
            <div className="AddTaxammount">
            <p>Amount</p>
            <input type="text"/>
            <span>%</span>
            </div>
            </div>
     
        </div>
        <div className="TaxAdvance">
            <div className="Taxadvance1">
            <h3>Advance Setting</h3>
            <div className="Advanceinput">
            <p>Label on Invoices</p>
            <input type="text"/>
            </div>
            <div className="Advanceinput">
            <p>Tax Group</p>
           <select>
            <option></option>
            <option>Taxes</option>
            <option>Reservation of the owner / advance payment</option>
            <option>advance payment</option>
            <option>Primary Reservation</option>
           </select>
            </div>
            <div className="Advancecheckbox">
                <p>Include in Analytic Cost</p>
                <input type="checkbox"/>
            </div>
            </div>
            <div className="Taxadvance2">
            <div className="Advancecheckbox">
                <p>Included in Price</p>
                <input type="checkbox"/>
            </div>
            <div className="Advancecheckbox">
                <p>Affect Base of Subsequent Taxes</p>
                <input type="checkbox"/>
            </div>
            </div>
        </div>
     
    </div>
    </>
  )
}

export default AddTaxName