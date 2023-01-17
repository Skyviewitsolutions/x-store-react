import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSearchMinus } from "react-icons/fa";
import "./SalesNavbar.css";
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { endpoints } from "../../../services/endpoints";
import { toast } from "react-toastify";
import axios from "axios";
const SalesNavbar = (props) => {
  const { showBelowMenu, handleCreatePage, title, save ,showCanelBtn,disabledCreate} = props;
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
              Sales
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
                <NavDropdown.Item  onClick={() => navigate("/Quotations")}>Quotations</NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate("/SalesOrders")}>Orders</NavDropdown.Item>
                <NavDropdown.Item>Sales Teams</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/Customer")}>Customers</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="To Invoice" id="collasible-nav-dropdown">
                <NavDropdown.Item  onClick={() => navigate("/OrderstoInvoice")}>Orders to Invoice</NavDropdown.Item>
                <NavDropdown.Item>Orders to Upsell</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item
                // onClick={() => navigate('/InventoryProducts')}
                >
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item>Product Variants</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/Pricelists")}>
                  Pricelists
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/PromotionPrograms")}
                >
                  Promotion Programs
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/CouponPrograms")}>
                  Coupon Programs
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="navetext">
                Reporting
              </Nav.Link>
              <NavDropdown title="Configuration" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/sales_teams")}>
                  Sales Teams
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/shipping_methods")}>
                  Shipping Methods
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/sales_attribute")}>
                  Attributes
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                  Units of Measures{" "}
                </NavDropdown.Item> */}
                <NavDropdown.Item
                  onClick={() => navigate("/sales_units_of_measure_category")}
                >
                  UOM Categories
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/sales_units_of_measure")}
                >
                  UOM
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
              <button className="savebtn" onClick={save}>Save</button>
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
    </>
  );
};

export default SalesNavbar;
