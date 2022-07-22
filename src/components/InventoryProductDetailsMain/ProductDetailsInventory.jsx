import React from 'react'
import './ProductDetailsInventory.css'
const ProductDetailsInventory = () => {
  return (
    <div className='InventoryContainer'>
        <div className="Inventory1">
            <div className="Operatin">
            <h5>Operations</h5>
        <div className="content1">
                    <p>Routes</p>
                      <input type="checkbox" />
                      <label>Buy</label>
                </div>
        <div className="content1">
                    <p></p>
                      <input type="checkbox" />
                      <label>Replenish on Order (MTO)</label>
                </div>
        <div className="content1">
                    <p>Customer Lead Time</p>
                    <span>0.00 days</span>
                </div>
        </div>
        <div className='Logistics'>
        <h5>Logistics</h5>
        <div className="content1">
                  <p>Weight</p>
                  <span>0.00kg</span>
                </div>
        <div className="content1">
                  <p>Volume</p>
                  <span>0.00m³</span>
                </div>
        <div className="content1">
                  <p>Responsible</p>
                  <span style={{color:"#00878f"}}>Administrator</span>
                </div>
        </div>
        <div className='Description'>
           <h5>Description for Delivery Orders</h5>
           <h5>Description for Receipts</h5>
           <h5>Description for Internal Transfers</h5>
        </div>
        </div>
        <div className="Inventory2">
        <h5>Traceability</h5>
        <div className="content1">
                  <p>Tracking</p>
                  <span>	No Tracking </span>
                </div>
        </div>
    </div>
  )
}

export default ProductDetailsInventory