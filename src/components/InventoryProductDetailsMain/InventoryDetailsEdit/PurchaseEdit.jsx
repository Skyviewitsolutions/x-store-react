import React from 'react'
import './PurchaseEdit.css'
const PurchaseEdit = () => {
  return (
    <div className='PurchaseEditContainer'>
    <div className="PurchaseEditVariants">
     <p>Vendor</p>
     <p>Agreement</p>
     <p>Currency</p>
     <p>Quantity</p>
     <p>Unit of Measure</p>
     <p>Price</p>
    </div>
    <div className="PurchaseEditVariants2">
      <p>Add a line</p>
    </div>
    <div className="PurchaseEditVariants3">
        <h5>Reordering</h5>
        <div className="PurchaseEdittext">
            <p>Procurement</p>
            <input type="radio" name='name' />
            <label>Create a draft purchase order</label>
        </div>
        <div className="PurchaseEdittext">
            <p></p>
            <input type="radio" name='name'/>
            <label>Propose a call for tenders</label>
        </div>
        <h5>Purchase Description</h5>
        <p>This note is added to Purchase order</p>
    </div>

</div>
  )
}

export default PurchaseEdit