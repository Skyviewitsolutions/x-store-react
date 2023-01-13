import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSearchMinus } from "react-icons/fa";
import "./Navbar.css";
import { Form, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { toast,ToastContainer} from "react-toastify";

const Navebar = (props) => {
  
  const { showBelowMenu, handleCreatePage,save , title,disabledCreate, showCanelBtn,} = props;
  const navigate = useNavigate();

  const logotUrl = endpoints.authentication.logout;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const userEmails = localStorage.getItem("UserEmail");
  const userLoginTime = localStorage.getItem("loginTime");
  
  const logout = () => {

    const formData = new FormData()
    formData.append("email",userEmails);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("LoginTime", userLoginTime);
    axios.post(logotUrl,formData)
    .then((res) => {
   if(res.data.status === true){
    toast(res.data.message,{type:"success"})
    setTimeout(() => {
      navigate('/')
    }, 1000);
   }
    })
    .catch((err) => {
      console.log(err,"eror")
    })
  }

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
              <Nav.Link href="/Inventory" className="navetext overview_font">
                Overview
              </Nav.Link>
              {/* <Nav.Link href="" className="navetext">
                Operations
              </Nav.Link> */}
              <NavDropdown title="Master Data" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={()=> navigate('/InventoryProducts')}>
                  Product
                </NavDropdown.Item>
                {/* <NavDropdown.Item  onClick={()=> navigate( "/InventoryVarient")}>
                  Product Variants
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Reordering Rules
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Lots/Serial Numbers
                </NavDropdown.Item> */}
              </NavDropdown>
              {/* <Nav.Link href="#link" className="navetext">
                Warehouses Reports
              </Nav.Link>
              <Nav.Link href="#link" className="navetext">
                Reporting
              </Nav.Link> */}
              <NavDropdown title="Settings" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={()=> navigate('/Warehouse')}>Warehouse</NavDropdown.Item>
                <NavDropdown.Item  onClick={ () => navigate('/Location')}>Location</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.4">Rules</NavDropdown.Item> */}
                {/* <NavDropdown.Item  onClick = {()=> navigate('/ConfigRoutes')}>Routes</NavDropdown.Item> */}
                <NavDropdown.Item  onClick={()=> navigate('/OperationType')}>
                  Operation Types
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.4">
                  Putaway Rules
                </NavDropdown.Item> */}
                <NavDropdown.Item  onClick = {() => navigate('/ProductCategories')}>
                  Product Categories
                </NavDropdown.Item>
                {/* <NavDropdown.Item  onClick={() => navigate('/Attributes')}>
                  Attributes
                </NavDropdown.Item> */}
                {/* <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                  Units of Measures{" "}
                </NavDropdown.Item> */}
                <NavDropdown.Item  onClick = {() => navigate('/UomCategories')}>
                  UOM Categories
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={()=> navigate('/UOM')}>UOM</NavDropdown.Item>
                <NavDropdown.Item  onClick={()=> navigate('/ProductBrandList')}>ProductBrand</NavDropdown.Item>
                {/* <NavDropdown.Item  onClick={()=> navigate('/ParentCategory')}>Parent Category</NavDropdown.Item> */}
                <NavDropdown.Item  onClick={()=> navigate('/Vendors')}>Vendors</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="logout"  onClick={logout}>
              <IoMdLogOut style={{ color: "white", marginRight: "10px",fontSize:"25px"}}/>
              <p>Logout</p>
            </div>
        </Navbar>
        
      </div>
      {showBelowMenu === true && (
        <div className="container-fluid">
          <div className="row head">
            <div className="col-sm-6" style={{ width: "50%" }}>
              <h5 style={{ marginTop: "10px", color: "#8f8f8f" }}>
              {title ? title : "Inventory"}
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
            <div
              className="col-sm-6 d-flex justify-content-center"
              style={{ width: "50%" }}
            >
              {/* <div class="input-box " className="search">
                <input type="text" placeholder="Search ..." />
                <span>{<FaSearchMinus />}</span>
              </div> */}
            </div>
          </div>
        </div>
      )}
      <ToastContainer/>
    </>
  );
};

export default Navebar;
