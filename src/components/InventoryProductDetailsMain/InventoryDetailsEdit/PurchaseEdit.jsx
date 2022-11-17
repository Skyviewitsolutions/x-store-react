import React, { useState } from 'react'
import PurchaseInventory from '../../Model/PurchaseInventory/PurchaseInventory'
import './PurchaseEdit.css'

const PurchaseEdit = () => {
  const [modalShow , setModalShow] = useState(false)
  return (
   <>
   <div className="purchase_container">
   <button className='add_productbtn' onClick={() => setModalShow(true)}>Add Line</button>
       <div className="purchase_Reordering">
              <div className="purchase_first">
                <h1>Reordering</h1>
                <div className="purchase_radio">
                            <p>Procurement</p>
                            <div className="radio">
                            <div className="asradio">
                                <input type="radio" name='create'/>
                                <span>Create a draft purchase order</span>
                            </div>
                            <div className="asradio">
                                <input type="radio"  name='create' />
                                <span>Propose a call for tenders</span>
                            </div>
                            </div>
                           
                        </div>
                        <div className="purchase_des">
                          <p>Purchase Description</p>
                          <input type="text" />
                        </div>
              </div>
              <div className="purchase_second">
                <h1>Vendor Bills</h1>
                <div className="purchase_radio">
                  <p>Vendor Taxes</p>
                  <select>
                    <option>Purchase Vat</option>
                    <option>GST</option>
                  </select>
                </div>
                <div className="purchase_radio">
                  <p>Control Policy</p>
                  <div className="radio">
                            <div className="asradio">
                                <input type="radio" name='control'/>
                                <span>On ordered quantities</span>
                            </div>
                            <div className="asradio">
                                <input type="radio"  name='control'/>
                                <span>On received quantities</span>
                            </div>
                            </div>
                </div>
                <div className="warning">
                          <p>Warning when Purchasing this Product</p>
                          <input type="text" />
                        </div>
              </div>
            </div>
            <PurchaseInventory modalShow={modalShow} setModalShow={setModalShow}/>
          </div>
   </>
  )
}

export default PurchaseEdit