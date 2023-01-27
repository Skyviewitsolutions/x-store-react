import React from 'react'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSearchMinus } from "react-icons/fa";
import "./EmployeeNavbar.css";
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const EmployeeNavbar = (props) => {
    const { showBelowMenu, handleCreatePage, title, save,showCanelBtn,disabledCreate} = props;
    const navigate = useNavigate();
  return (
    <div>
         <div className="container-fluid navCont">
        <Navbar className="Navbar" expand="lg" style={{ color: "white" }}>
          <Navbar.Brand href="/Dashboard">
            <span style={{ color: "white", marginLeft: "15px" }}>
              {" "}
              {<BsFillGrid3X3GapFill />}
            </span>
            <span
              style={{ marginLeft: "25px", color: "white", fontWeight: "bold" }}
            >
              Employees
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              color: "white",
              marginRight: "15px",
              backgroundColor: "white",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
            <Nav className="me-auto px-5">
            <NavDropdown title="Employees" id="collasible-nav-dropdown">
            <NavDropdown.Item  onClick={() => navigate('/Employee')}>
                  Employees
                </NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown title="Employee Directory" id="collasible-nav-dropdown">
              </NavDropdown>
              <Nav.Link href="#link" className="navetext">
                Reporting
              </Nav.Link> */}
              <NavDropdown title="Settings" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate('/Department')}>
                  Department
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/HeadDepartment')}>
                Head Department
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/JobPosition')}>
                 Job Position
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/Manager')}>
                  Manager
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/WorkAddress')}>
                  Work Address
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/HeadManager')}>
                   Head Manager
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="logout">
              <IoMdLogOut
               style={{ color: "white", marginRight: "10px",fontSize:"25px"}} onClick={() => navigate('/')}/>
              <p>Logout</p>
            </div>
        </Navbar>
      </div>
      {showBelowMenu === true && (
        <div className="container-fluid">
          <div className="row head">
            <div className="col-sm-6" style={{ width: "50%" }}>
              <h5 style={{ marginTop: "10px", color: "#8f8f8f" }}>
                {title ? title : "Sales"}
              </h5>
              {showCanelBtn === true ? (
                <button
                  className="createbtn"
                  onClick={() => navigate(-1)}
                  disabled={disabledCreate}
                >
                  cancel
                </button>
              ) : (
                <button
                  className="createbtn"
                  onClick={handleCreatePage}
                  disabled={disabledCreate}
                >
                  create
                </button>
               
              )}
              {showCanelBtn === true && <button className="savebtn" onClick={save}>Save</button> }
            </div>
            {/* <div
              className="col-sm-6 d-flex justify-content-center"
              style={{ width: "50%" }}
            >
              <div class="input-box " className="search">
                <input type="text" placeholder="Search ..." />
                <span>{<FaSearchMinus />}</span>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default EmployeeNavbar