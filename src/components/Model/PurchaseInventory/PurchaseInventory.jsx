import React from 'react'
import { Modal } from 'react-bootstrap';
import { MdOutlineCancel } from 'react-icons/md';

import './PurchaseInventory.css'
const PurchaseInventory = (props) => {
    const {modalShow , setModalShow} = props;
  return (
    <div>
         <Modal show={modalShow} size='lg'>
        <div className="ven_container">
   <div className="vendorsPriceListContainer">
            <div className="vendors_box">
                <h1>Vendor</h1>
                <div className="vendorstext">
                    <p>Vendor</p>
                    <select>
                        <option value="">Select any one</option>
                        <option></option>
                    </select>
                </div>
                <div className="vendorstext">
                    <p>Vendor Product Name</p>
                    <input type="text" />
                </div>
                <div className="vendorstext">
                    <p>Vendor Product Code</p>
                    <input type="text" />
                </div>
                <div className="vendorstext">
                    <p>Product Variant</p>
                    <select>
                        <option value="">Select any one</option>
                        <option></option>
                    </select>
                </div>
                <div className="leadtime">
                    <p>Delivery Lead Time</p>
                    <input type="text" placeholder='1'/>
                    <span>days</span>
                </div>
            </div>
            <div className="vendor_box2">
                <h1>Price List</h1>
            <div className="priceListtext">
                    <p>Product </p>
                    <select>
                        <option value="">Select any one</option>
                        <option></option>
                    </select>
                </div>
                <div className="pricetexts">
                    <p>Quantitye</p>
                    <input type="text" placeholder='0.00'/>
                </div>
                <div className="pricetexts">
                    <p>Price</p>
                    <input type="text" placeholder='0.00'/>
                    <select>
                        <option>Select Currency</option>
                        <option>SAR</option>
                    </select>
                </div>
                <div className="pricetexts">
                    <p>Valid Date</p>
                    <input type="date"/>
                    <span style={{padding:"10px"}}>to</span>
                    <input type="date" />
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

export default PurchaseInventory