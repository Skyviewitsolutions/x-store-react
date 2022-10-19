import React, { useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import "./AddVendors.css";
import AccountNavbar from "../../AccountNavbar/AccountNavbar";
import { Nav } from "react-bootstrap";
import SalesPurchase from "./SalesPurchase";
import Invoicing from "./Invoicing";
import camera from "../../../assets/Images/camera.png";

const AddVendors = () => {
    const [event, setEvent] = useState("Sales & Purchase");

  return (
    <div>
      <AccountNavbar showBelowMenu={true} title="Vendors" />
      <div className="AddVendorsCon">
        <div className="container">
          <div className="VendorsHeader">
            <div className="VendorsIcons">
              <RiShoppingCartFill
                size="25px"
                style={{ color: "#848484", marginTop: "5px" }}
              />
              <div className="text">
                <p>0</p>
                <span>Purchase</span>
              </div>
            </div>
            <div className="VendorsIcons">
              <BsPencilSquare
                size="25px"
                style={{ color: "#848484", marginTop: "5px" }}
              />
              <div className="text">
                <p>0.00</p>
                <span>Invoiced</span>
              </div>
            </div>
            <div className="VendorsIcons">
              <BsPencilSquare
                size="25px"
                style={{ color: "#848484", marginTop: "5px" }}
              />
              <div className="text">
                <p>0</p>
                <span>Vendors Bills</span>
              </div>
            </div>
          </div>
          <div className="VendorsDetails">
            <div className="radiobutton">
            <div className="IndCom">
              <input type="radio" name="com" id='com'/>
              <label htmlFor="com">Individual</label>
              </div>
              <div className="com">
              <input type="radio" name="com"  id='company'/>
              <label htmlFor="company">Company</label>
              </div>
              </div>
            <div className="nameinput">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="comselect">
              <select>
                <option>Company</option>
                <option>300048513700003 - 300048513700003</option>
                <option>AALY ALQEMA EST. - 0305</option>
                <option>
                  Abandoned armor for furnishings -310151424200003
                </option>
                <option>
                  Abandoned armor for furnishings - 310151424200003
                </option>
              </select>
            </div>
            <div className="cameraimg">
                <img src={camera} alt="camera" />
              </div>
          </div>
          <div className="VendorsDetails2">
            <div className="vendorsbox1">
              <h3>Company Address</h3>
              <div className="vendorstextinput">
                <p>Street</p>
                <input type="text" />
              </div>
              <div className="vendorstextinput">
                <p>City</p>
                <input type="text" />
              </div>
              <div className="vendorstextinput">
                <p>State</p>
                <input type="text" />
              </div>
              <div className="vendorstextinput">
                <p>Zip</p>
                <input type="text" />
              </div>
              <div className="vendorstextinput">
                <p>Country</p>
                <input type="text" />
              </div>
              <div className="vendorstextinput">
                <p>Tax Id</p>
                <input type="text" />
              </div>
              <div className="vendorstextcheckbox">
                <label htmlFor="work">Work Address</label>
                <input type="checkbox" id='work'/>
              </div>
            </div>
            <div className="Vendorsbox2">
            <div className="vendorstextinput">
                <p>Supplier type</p>
                <select>
                  <option></option>
                  <option>Contractor</option>
                  <option>Vendor</option>
                </select>
              </div>
              <div className="vendorstextinput">
                <p>Phone</p>
                <input type="text" />
              </div>
              <div className="vendorstextinput">
                <p>Mobile</p>
                <input type="text" />
              </div>
              <div className="vendorstextinput">
                <p>Email</p>
                <input type="text" />
              </div>
              <div className="vendorstextinput">
                <p>Website Link</p>
                <input type="text" />
              </div>
              {/* <div className="vendorstextinput">
                <p>Language</p>
                <select>
                  <option></option>
                  <option>Arabic(SA)</option>
                  <option>English</option>
                </select>
              </div>
              <div className="vendorstextinput">
                <p>Tags</p>
                <select>
                  <option></option>
                  <option>Ministry Of Transportaion</option>
                </select>
              </div> */}
            </div>
          </div>
          <div className="Adddetails">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item className="detailslink">
                <Nav.Link eventKey="link-1" onClick={() => setEvent("Sales & Purchase")}>Sales & Purchase</Nav.Link>
              </Nav.Item>
              <Nav.Item className="detailslink">
                <Nav.Link eventKey="link-1"  onClick={() => setEvent("Invoicing")}>Invoicing</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item className="detailslink">
                <Nav.Link eventKey="link-1">Internal Notes</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </div>
          <div className="Warehouse">
          {event === "Sales & Purchase" && (
            <SalesPurchase
            />
          )}
          {event === "Invoicing" && (<Invoicing/>)}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddVendors;
