import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { MdOutlineCancel } from 'react-icons/md';

import './PurchaseInventory.css'
const PurchaseInventory = (props) => {

    const {modalShow , setModalShow,purchaseDetails,setPurchaseDetails} = props;

    const [purchase , setPurchase] = useState({});


    const [allVendor , setAllVendor] = useState([]);

    const [vendor , setVendor] = useState("")
    const [vendorProductName , setVendorProductName] = useState("")
    const [vendorProductCode , setVendorProductCode] = useState("")
    const [vendorLeadTime , setVendorLeadTime] = useState("")
    const [vendorQuantity, setVendorQuantity] = useState("")
    const [vendorPrice, setVendorPrice] = useState("")
    const [vendorCurrency , setVendorCurrency] = useState("")
    const [vendorDate1 , setVendorDate1] = useState("")
    const [vendorDate2 , setVendorDate2] = useState("")

    const save = () => {

        const data  = {
            vendor : vendor,
            vendorProductName : vendorProductName ,
            vendorProductCode : vendorProductCode ,
            vendorLeadTime  : vendorLeadTime ,
            vendorQuantity : vendorQuantity ,
            vendorPrice : vendorPrice ,
            vendorCurrency : vendorCurrency ,
            vendorDate1 :  vendorDate1 ,
            vendorDate2 : vendorDate2,
        }
        setPurchaseDetails((item) => {
            return [ ...item , data]
            
        })
        setModalShow(false)
    }


  return (
    <div>
         <Modal show={modalShow} size='lg'>
           <div className="purchase_main">
            <div className="purchase_con">
                   <div className="purchase_firstcontent">
                     <h3>Vendor</h3>
                     <div className="purchase_content">
                        <p>Vendor</p>
                        <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
                            <option  value="Testing">Testing</option>
                            <option value="Testing">Testing</option>
                            <option value="Testing">Testing</option>
                        </select>
                     </div>
                     <div className="purchase_content">
                        <p>Vendor Product Name</p>
                         <input type="text" value={vendorProductName} onChange={(e) => setVendorProductName(e.target.value)}/>
                     </div>
                     <div className="purchase_content">
                        <p>Vendor Product Code</p>
                         <input type="text" value={vendorProductCode} onChange={(e) => setVendorProductCode(e.target.value)}/>
                     </div>
                     <div className="purchase_dltime">
                        <p>Delivery Lead Time</p>
                        <div> <input  type="text" value={vendorLeadTime} onChange={(e) => setVendorLeadTime(e.target.value)}/>
                        <span>Days</span></div>
                       
                     </div>
                   </div>
                   <div className="purchase_secondContent">
                        <h3>Price List</h3>
                        <div className="purchase_pr">
                            <p>Quantity</p>
                            <input type="text"  value={vendorQuantity} onChange={(e) => setVendorQuantity(e.target.value)}/>
                        </div>
                        <div className="purchase_price">
                            <p>Price</p>
                            <input type="text" value={vendorPrice} onChange={(e) => setVendorPrice(e.target.value)}/>
                            <select value={vendorCurrency} onChange={(e) => setVendorCurrency(e.target.value)}>
                                <option value="Currency">Currency</option>
                                <option value="SAR">SAR</option>
                                <option value="EAR">EAR</option>
                            </select>
                        </div>
                        <div className="purchase_val">
                            <p>Validity</p>
                            <input type="Date" value={vendorDate1} onChange={(e) => setVendorDate1(e.target.value)}/>
                            <span>to</span>
                            <input type="Date" value={vendorDate2} onChange={(e) => setVendorDate2(e.target.value)}/>
                        </div>
                   </div>
            </div>
            <div className="pu_btn">
           <button className='pur_btn' onClick={save}>Save</button>
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