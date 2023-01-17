import axios from "axios";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSearchMinus } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../services/endpoints";

const PurchaseNavbar = (props) => {
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
              Purchase
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
            <NavDropdown title="Orders" id="collasible-nav-dropdown">
                <NavDropdown.Item  onClick={() => navigate('/RequestforQuotation')}>Requests for Quotation</NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate('/PurchaseOrder')}>Purchase Orders</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/PurchaseAgreement')}>Purchase Agreements</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/PurchaseVendor')}>Vendors</NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item
                onClick={() => navigate('/InventoryProducts')}
                >
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item>Product Variants</NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link href="#link" className="navetext">
                Reporting
              </Nav.Link> */}
              <NavDropdown title="Configuration" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate('/PurchasePriceList')}>
                Vendors Pricelists
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate('/PurchaseAgreementTypes')}>
                Purchase Agreement Types
                </NavDropdown.Item>
                {/* <NavDropdown.Item onClick={() => navigate('/ProductBrand')}>ProductBrand</NavDropdown.Item> */}
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
                {title ? title : "Purchase"}
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
          <ToastContainer/>
        </div>
      )}
    </>
  );
};

export default PurchaseNavbar;
