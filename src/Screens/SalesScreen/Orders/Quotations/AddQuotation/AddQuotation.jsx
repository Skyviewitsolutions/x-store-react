import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import AddProductRequest from '../../../../PurchaseScreen/RequestsforQuotation/AddRequestQuotation/AddProductRequest';
import SalesNavbar from '../../../SalesNavbar/SalesNavbar';
import './AddQuotation.css';
import Optional from './Optional';
import Other from './Other';

const AddQuotation = () => {

    const [events, setEvents] = useState("Products");
  return (
    <div>
        <SalesNavbar showBelowMenu={true}  title="Quotation" showCanelBtn={true}/>
        <div className="quotation_Container">
            <div className="quotation_content">
                <div className="quotation_firstCon">
                    <div className="quotation_details">
                        <p>Customer</p>
                        <select>
                            <optiion></optiion>
                            <option>MAY ALONAZI</option>
                            <option>khalid alzain</option>
                            <option>manan</option>
                            <option>hunger station credit</option>
                            <option>zid online</option>
                        </select>
                    </div>
                    <div className="quotation_details">
                        <p>Invoice Address</p>
                        <select>
                            <optiion></optiion>
                            <option>MAY ALONAZI</option>
                            <option>khalid alzain</option>
                            <option>manan</option>
                            <option>hunger station credit</option>
                            <option>zid online</option>
                        </select>
                    </div>
                    <div className="quotation_details">
                        <p>Delivery Address</p>
                        <select>
                            <optiion></optiion>
                            <option>MAY ALONAZI</option>
                            <option>khalid alzain</option>
                            <option>manan</option>
                            <option>hunger station credit</option>
                            <option>zid online</option>
                        </select>
                    </div>
                </div>
                <div className="quotation_secondCon">
                <div className="quotation_details">
                        <p>Expiration</p>
                       <input type="date" />
                    </div>
                    <div className="quotation_details">
                        <p>Pricelist</p>
                        <select>
                            <optiion></optiion>
                            <option>Public Pricelist (SAR)</option>
                            <option>Akun-20 (SAR)</option>
                            <option>10% OFF (SAR)</option>
                            <option>WA Pricelist (SAR)</option>
                            <option>Covid-19 Free (SAR)</option>
                        </select>
                    </div>
                    <div className="quotation_details">
                        <p>Payment Terms</p>
                        <select>
                            <optiion></optiion>
                            <option>Immediate Payment</option>
                            <option>Akun-20 (SAR)</option>
                            <option>10% OFF (SAR)</option>
                            <option>WA Pricelist (SAR)</option>
                            <option>Covid-19 Free (SAR)</option>
                        </select>
                    </div>
                    <div className="quotation_details">
                        <p>Warehouse</p>
                        <select>
                            <optiion></optiion>
                            <option>Immediate Payment</option>
                            <option>Akun-20 (SAR)</option>
                            <option>10% OFF (SAR)</option>
                            <option>WA Pricelist (SAR)</option>
                            <option>Covid-19 Free (SAR)</option>
                        </select>
                    </div>
                    <div className="quotation_details">
                        <p>Analytic Account</p>
                        <select>
                            <optiion></optiion>
                            <option>Immediate Payment</option>
                            <option>Akun-20 (SAR)</option>
                            <option>10% OFF (SAR)</option>
                            <option>WA Pricelist (SAR)</option>
                            <option>Covid-19 Free (SAR)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
              className={
                events === "Order Lines" ? "navLinkActive" : "navLinkDeactive"
              }
            >
              <Nav.Link
                href=""
                className={
                  events === "Products" ? "navLinkActive" : "navLinkDeactive"
                }
                onClick={() => setEvents("Products")}
              >
                Order Lines
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={
                events === "Optional"
                  ? "navLinkActive"
                  : "navLinkDeactive"
              }
            >
              <Nav.Link
                href=""
                className={
                  events === "Optional"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }
                onClick={() => setEvents("Optional")}
              >
                Optional Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={
                events === "Other"
                  ? "navLinkActive"
                  : "navLinkDeactive"
              }
            >
              <Nav.Link
                href=""
                className={
                  events === "Other"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }
                onClick={() => setEvents("Other")}
              >
                Other Info
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
          {events === "Products" && <AddProductRequest/>}
          {events === "Optional" && <Optional/>}
          {events === "Other" && <Other/>}
        </div>
        </div>
    </div>
  )
}

export default AddQuotation