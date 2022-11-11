import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { MdOutlineCancel } from 'react-icons/md';
import './RequestProduct.css'

export const RequestProduct = (props) => {
   const {modalShow , setModalShow} = props;
  return (
    <div>
        <Modal show={modalShow} size='lg'> 
           <div className="reproductCon">
                  <div className="product_content">
                    <div className="product_text">
                    <h1>Product Details</h1>
                        <div className="pro_details">
                          <p>No.</p>
                         <input type="text" />
                        </div>
                       <div className="pro_details">
                         <p>Product</p>
                        <select>
                            <option></option>
                            <option>Testing</option>
                            <option>testing</option>
                        </select>
                       </div>
                       <div className="pro_details">
                         <p>description</p>
                         <input type="text" />
                       </div>
                       <div className="pro_details">
                         <p>Quantity</p>
                         <input type="text" />
                       </div>
                    </div>
                       <div className="pro_text2">
                       <div className="pro_details">
                         <p>UOM</p>
                         <input type="text" />
                       </div>
                       <div className="pro_details">
                         <p>Unity Price</p>
                         <input type="text" />
                       </div>
                       <div className="pro_details">
                         <p>Taxes</p>
                         <input type="text" />
                       </div>
                       <div className="pro_details">
                         <p>Sub Total</p>
                         <input type="text" />
                       </div>
                       </div>
                      
                  </div>
                
                  <div onClick={() => setModalShow(false)}>
                <MdOutlineCancel size='25px' className='Acccuticons'/>
                </div>
                  
           </div>
        </Modal>
    </div>
  )
}
