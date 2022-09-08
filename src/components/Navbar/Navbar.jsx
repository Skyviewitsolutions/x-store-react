import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSearchMinus } from "react-icons/fa";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navebar = (props) => {
  const { showBelowMenu, handleCreatePage,save , title} = props;
  const navigate = useNavigate();

  return (
    <>
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
              Inventory
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
              <Nav.Link href="#home" className="navetext">
                OverView
              </Nav.Link>
              <Nav.Link href="/Inventory" className="navetext">
                Operations
              </Nav.Link>
              <NavDropdown title="Master Data" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/InventoryProducts">
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item href="/InventoryVarient">
                  Product Variants
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Reordering Rules
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Lots/Serial Numbers
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="navetext">
                Warehouses Reports
              </Nav.Link>
              <Nav.Link href="#link" className="navetext">
                Reporting
              </Nav.Link>
              <NavDropdown title="Configurations" id="collasible-nav-dropdown">
                <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                  Warehouse Management
                </NavDropdown.Item>

                <NavDropdown.Item onClick={()=> navigate('/Warehouse')}>Warehouse</NavDropdown.Item>
                <NavDropdown.Item  onClick={ () => navigate('/Location')}>Location</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Rules</NavDropdown.Item>
                <NavDropdown.Item  onClick = {()=> navigate('/ConfigRoutes')}>Routes</NavDropdown.Item>
                <NavDropdown.Item  onClick={()=> navigate('/OperationType')}>
                  Operation Types
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Putaway Rules
                </NavDropdown.Item>
                <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item  onClick = {() => navigate('/ProductCategories')}>
                  Product Categories
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate('/Attributes')}>
                  Attributes
                </NavDropdown.Item>
                <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                  Units of Measures{" "}
                </NavDropdown.Item>
                <NavDropdown.Item  onClick = {() => navigate('/UomCategories')}>
                  UOM Categories
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={()=> navigate('/UOM')}>UOM</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {showBelowMenu === true && (
        <div className="container-fluid">
          <div className="row head">
            <div className="col-sm-6" style={{ width: "50%" }}>
              <h5 style={{ marginTop: "10px", color: "#8f8f8f" }}>
              {title ? title : "Inventory"}
              </h5>
              <button className="createbtn" onClick={handleCreatePage}>
                Create
              </button>
              <button className="createbtn" onClick={save}>Save</button>
            </div>
            <div
              className="col-sm-6 d-flex justify-content-center"
              style={{ width: "50%" }}
            >
              <div class="input-box " className="search">
                <input type="text" placeholder="Search ..." />
                <span>{<FaSearchMinus />}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navebar;
