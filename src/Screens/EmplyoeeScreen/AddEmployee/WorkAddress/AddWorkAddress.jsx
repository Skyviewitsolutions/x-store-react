import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CusInvoicing from '../../../SalesScreen/Customer/AddCustomer/CusInvoicing';
import CustomerSales from '../../../SalesScreen/Customer/AddCustomer/CustomerSales';
import EmployeeNavbar from '../../EmplyoeeNavbar/EmployeeNavbar';
import camera from '../../../../assets/Images/camera.png'
import './AddWorkAddress.css'
import WorkAddreSales from './WorkAddreSales';

const AddWorkAddress = () => {

    const navigate = useNavigate();
    const [event, setEvent] = useState("Sales & Purchase");
    const [showCompany, setShowCompany] = useState(false);
    const [workAddress, setWorkAddress] = useState(false);
  return (
    <div> 
    <EmployeeNavbar showBelowMenu={true} title="Work Address"/>
    <div className="work_maincon">
      <div className="work_container">
        <div className="work_details">
          <div className="work_radio">
            <div className="work_ind">
              <input type="radio" name="com" id="com" value="individual"  />
              <label htmlFor="com">Individual</label>
            </div>
            <div className="work_com">
            <input
                type="radio"
                name="com"
                id="company"
                value="company"
              />
              <label htmlFor="company">Company</label>
            </div>
            </div>
          <div className="work_name">
            <p>Name</p>
            <input
              type="text"
            />
            </div>
            <div className="work_company">
          
              <select
              >
                <option value="">Choose any one</option>
                <option value="Company">Company</option>
                <option value="300048513700003 - 30004851370 0003">
                  300048513700003 - 30004851370 0003
                </option>
                <option value="AALY ALQEMA EST. - 0305">
                  AALY ALQEMA EST. - 0305
                </option>
                <option value="Abandoned armor for furnishings -310151424200003">
                  Abandoned armor for furnishings -310151424200003
                </option>
                <option value="Abandoned armor for furnishings - 310151424200003">
                  Abandoned armor for furnishings - 310151424200003
                </option>
              </select>
          </div>
          <div className="cameraimg">
          <label htmlFor="takePhoto">
              <img src={camera} alt="camera" />
            </label>
            {/* <input type="file" id="takePhoto" onChange={handleChange} /> */}
          </div>
        </div>
        <div className="work_personaldetails">
        <div className="work_first">
            <div className="work_text">
              <p>Street</p>
              <input
                type="text"
              />
            </div>
            <div className="work_text">
              <p>City</p>
              <input
                type="text"
              />
            </div>
            <div className="work_text">
              <p>State</p>
              <input
                type="text"
              />
            </div>
            <div className="work_text">
              <p>Zip</p>
              <input
                type="text" 
              />
            </div>
            <div className="work_text">
              <p>Country</p>
              <input
                type="text" 
              />
            </div>
            <div className="work_text">
              <p>Tax Id</p>
              <input
                type="text"
              />
            </div>
            <div className="work_addr">
              <label htmlFor="work">Work Address</label>
              <input
                type="checkbox"
                id="work"
                checked={workAddress}
              />
            </div>
          </div>
          <div className="work_second">
          <div className="work_text">
              <p>Supplier type</p>
              <select
              >
                <option value="">Choose any one</option>
                <option value="Contractor">Contractor</option>
                <option value="Vendor">Vendor</option>
              </select>
            </div>
            <div className="work_text">
              <p>Phone</p>
              <input
                type="text"
              />
            </div>
            <div className="work_text">
              <p>Mobile</p>
              <input
                type="text"
              />
            </div>
            <div className="work_text">
              <p>Email</p>
              <input
                type="text"
              />
            </div>
            <div className="work_text">
              <p>Website Link</p>
              <input
                type="text"
              />
            </div>
          </div>
          </div>
          {/* <div className="Adddetails">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item className={event === "Sales & Purchase" ? "navLinkActive" : "navLinkDeactive"}>
              <Nav.Link
                eventKey="link-1"
                className={event === "Sales & Purchase" ? "navLinkActive" : "navLinkDeactive"}
                onClick={() => setEvent("Sales & Purchase")}
              >
                Sales & Purchase
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={event === "Invoicing" ? "navLinkActive" : "navLinkDeactive"}>
              <Nav.Link
                eventKey="link-1"
                className={event === "Invoicing" ? "navLinkActive" : "navLinkDeactive"}
                onClick={() => setEvent("Invoicing")}
              >
                Invoicing
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
          {event === "Sales & Purchase" && (
         <WorkAddreSales/>
          )}
          {event === "Invoicing" && (
         <CusInvoicing/>
          )}
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default AddWorkAddress