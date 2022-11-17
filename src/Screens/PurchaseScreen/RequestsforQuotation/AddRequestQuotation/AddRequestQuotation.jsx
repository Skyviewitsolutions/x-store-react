import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { RequestProduct } from "../../../../components/Model/PurhcaseRequestProduct/RequestProduct";
import SalesPurchase from "../../../../components/VendorsScreen/AddVendors/SalesPurchase";
import PurchaseNavbar from "../../PurchaseNavbar";
import AddProductRequest from "./AddProductRequest";
import OtherInfo from "./OtherInfo";
import './AddRequestQuotation.css'

const AddRequestQuotation =(props)=> {
    const [events, setEvents] = useState("Products");

  return (
    <div>
      <PurchaseNavbar
        showBelowMenu={true}
        title="Requests for Quotation
"
      />
      <div className="addRequestQuoContainer">
        <div className="addRequestCon">
          <div className="requestQuofirst">
            <div className="reqQuotext">
              <p>Vendor</p>
              <select>
                <option value="">Select Any one</option>
                <option>tesing</option>
                <option>testing</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Vendor Reference</p>
              <input type="text" />
            </div>
            <div className="reqQuotext">
              <p>Purchase Agreement</p>
              <select>
                <option value="">Select Any one</option>
                <option>tesing</option>
                <option>testing</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Deliver To</p>
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
              <p>Purchase Type</p>
              <select>
                <option value="">Select Any one</option>
                <option>Cash Po</option>
                <option>Standard Po</option>
                <option>Credit</option>
                <option>international</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Payment Terms</p>
              <select>
                <option value="">Select Any one</option>
                <option>tesing</option>
                <option>Currency</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Destination Location</p>
              <select>
                <option value="">Select Any one</option>
                <option>tesing</option>
                <option>Currency</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Order Date</p>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item   className={events === "Products" ? "navLinkActive" : "navLinkDeactive"}>
              <Nav.Link href=""  className={events === "Products" ? "navLinkActive" : "navLinkDeactive"} onClick={() => setEvents("Products")}>Products</Nav.Link>
            </Nav.Item>
            <Nav.Item  className={events === "Other Information" ? "navLinkActive" : "navLinkDeactive"}>
              <Nav.Link href=""  className={events === "Other Information" ? "navLinkActive" : "navLinkDeactive"} onClick={() => setEvents("Other Information")}>Other Information</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
            {events === "Products" && (
                <AddProductRequest/>
            )}
            {events === "Other Information" && (
              <OtherInfo
              />
            )}
            </div>

            
      </div>
    </div>
  );
};

export default AddRequestQuotation;
