import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import PurchaseNavbar from '../../PurchaseNavbar'
import AddProductRequest from '../../RequestsforQuotation/AddRequestQuotation/AddProductRequest'
import PurchaseAgreeProduct from './PurchaseAgreeProduct'

const AddPurchaseAgreement = () => {

    const [events, setEvents] = useState("Products");

    const [purchaseRep, setPurchaseRep] = useState("");
    const [agreementType , setAgreementtype] = useState("");
    const [vendor , setVendor] = useState("");
    const [currency , setCurrency] = useState("");

  return (
    <div>
        <PurchaseNavbar
        showBelowMenu={true}
        title="Purchase Agreements"
      />
      <div className="addRequestQuoContainer">
        <div className="addRequestCon">
          <div className="requestQuofirst">
            <div className="reqQuotext">
              <p>Purchase Representative</p>
              <select>
                <option value="">Select Any one</option>
                <option>tesing</option>
                <option>testing</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Agreement Type</p>
              <select>
                <option value="">Select Any one</option>
                <option>tesing</option>
                <option>testing</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Vendor</p>
              <select>
                <option value="">Select Any one</option>
                <option>RUH-STORE 01: Receipts</option>
                <option>HEAD OFFICE: Receipts</option>
                <option>RUH-STORE 01: Receipts</option>
                <option>NTE DAMAGE WAREHOUSE: Receipts</option>
                <option>Bakery: Receipts</option>
                <option>Online Stock: Receipts</option>
                <option>Main Warehouse Ruh-01: Receipts</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Currency</p>
              <select>
                <option value="">Select Any one</option>
                <option>tesing</option>
                <option>Currency</option>
              </select>
            </div>
          </div>
          <div className="requestQuoSecond">
            <div className="reqQuotext">
              <p>Agreement Deadline</p>
              <input type="date" />
            </div>
            <div className="reqQuotext">
              <p>Ordering Date</p>
              <input type="date" />
            </div>
            <div className="reqQuotext">
              <p>Delivery Date</p>
              <input type="date" />
            </div>
            <div className="reqQuotext">
              <p>Source Document</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item   className={events === "Products" ? "navLinkActive" : "navLinkDeactive"}>
              <Nav.Link href=""  className={events === "Products" ? "navLinkActive" : "navLinkDeactive"} onClick={() => setEvents("Products")}>Products</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
            {events === "Products" && (
                <PurchaseAgreeProduct/>
            )}
            </div>

            
      </div>
    </div>
  )
}

export default AddPurchaseAgreement