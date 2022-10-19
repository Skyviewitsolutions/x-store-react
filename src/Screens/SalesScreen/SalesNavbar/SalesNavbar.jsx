import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSearchMinus } from "react-icons/fa";
import "./SalesNavbar.css";
import { useNavigate } from "react-router-dom";
const SalesNavbar = (props) => {
  const { showBelowMenu, handleCreatePage, title, save } = props;
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
                <NavDropdown.Item>Customers</NavDropdown.Item>
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
                <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                  Sales Orders
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/shipping_methods")}>
                  Shipping Methods
                </NavDropdown.Item>
                <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/sales_attribute")}>
                  Attributes
                </NavDropdown.Item>
                <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                  Units of Measures{" "}
                </NavDropdown.Item>
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
        </Navbar>
      </div>
      {showBelowMenu === true && (
        <div className="container-fluid">
          <div className="row head">
            <div className="col-sm-6" style={{ width: "50%" }}>
              <h5 style={{ marginTop: "10px", color: "#8f8f8f" }}>
                {title ? title : "Sales"}
              </h5>
              <button className="createbtn" onClick={handleCreatePage}>
                Create
              </button>
              <button className="createbtn" onClick={save}>
                Save
              </button>
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

export default SalesNavbar;
