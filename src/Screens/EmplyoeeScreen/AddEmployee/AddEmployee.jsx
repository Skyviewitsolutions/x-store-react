import React, { useState } from "react";
import EmployeeNavbar from "../EmplyoeeNavbar/EmployeeNavbar";
import "./AddEmployee.css";
import camera from "../../../assets/Images/camera.png";
import { Nav } from "react-bootstrap";
import WorkInfo from "./WorkInfo";
import PrivateInfo from "./PrivateInfo";
import HrSettings from "./HrSettings";
const AddEmployee = () => {
    const [event, setEvent] = useState("WorkInfo");
  return (
    <div>
      <EmployeeNavbar showBelowMenu={true} title="Employees"/>
      <div className="employee_maniContainer">
        <div className="employee_container">
          <div className="emp_details">
            <div className="emp_content">
              <div className="emp_Name">
                <input type="text" placeholder="Employee Name" />
              </div>
              <div className="emp_job">
                <input type="text" placeholder="Job Position" />
              </div>
            </div>
            <div className="employee_img">
              <img src={camera} alt="camera" />
            </div>
          </div>
          <div className="emp_persanalContent">
            <div className="emp_work">
              <div className="emp_mob">
                <p>Work Mobile</p>
                <input type="text" />
              </div>
              <div className="emp_mob">
                <p>Work Phone</p>
                <input type="text" />
              </div>
              <div className="emp_mob">
                <p>Work Email</p>
                <input type="text" />
              </div>
              <div className="emp_mob">
                <p>Work Location</p>
                <input type="text" />
              </div>
            </div>
            <div className="emp_dep">
              <div className="emp_select">
                <p>Department</p>
                <select>
                  <option> </option>
                  <option>HEAD OFFICE / Administration</option>
                  <option>STORE-RUH 01 / BackStore (WHB)</option>
                  <option>STORE-RUH 01 / Bakery</option>
                  <option>STORE-RUH 01 / Camera</option>
                </select>
              </div>
              <div className="emp_select">
                <p>Job Position</p>
                <select>
                  <option> </option>
                  <option>IT Consultant</option>
                  <option>Cashier</option>
                  <option>Branch Manager</option>
                </select>
              </div>
              <div className="emp_select">
                <p>Manager</p>
                <select>
                  <option> </option>
                  <option>ABDUL JALEEL MALLUR</option>
                  <option>ABDUL RAHMAN KARNAD</option>
                  <option>ABDULRAHEM SUIMAN</option>
                  <option>ABDULRAHMAN SALAH</option>
                  <option>ABDULREHMAN</option>
                  <option>ABDUS SALAM</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Adddetails">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item className={event ==="WorkInfo" ? "navLinkActive" : "navLinkDeactive"}>
                <Nav.Link
                  eventKey="link-1"
                  className={event === "WorkInfo" ? "navLinkActive" : "navLinkDeactive"}
                  onClick={() => setEvent("WorkInfo")}
                >
                  Work Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={event === "PrivateInfo" ? "navLinkActive" : "navLinkDeactive"}>
                <Nav.Link
                  eventKey="link-1"
                  className={event === "PrivateInfo" ? "navLinkActive" : "navLinkDeactive"}
                  onClick={() => setEvent("PrivateInfo")}
                >
                  Private Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={event === "PrivateInfo" ? "navLinkActive" : "navLinkDeactive"}>
                <Nav.Link
                  eventKey="link-1"
                  className={event === "HrSettings" ? "navLinkActive" : "navLinkDeactive"}
                  onClick={() => setEvent("HrSettings")}
                >
                 Hr Settings
                </Nav.Link>
              </Nav.Item>
             
            </Nav>
          </div>
        <div className="Warehouse">
            {event === "WorkInfo" && (
              <WorkInfo/>
            )}
            {event === "PrivateInfo" && (
              <PrivateInfo/>
            )}
            {event === "HrSettings" && (
              <HrSettings/>
            )}
          </div>
        </div>
        </div>
    </div>
  );
};

export default AddEmployee;
