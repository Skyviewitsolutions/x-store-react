import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSearchMinus } from "react-icons/fa";
import "./AccountNavbar.css";
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AccountNavbar = (props) => {
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
      <div className="container-fluid AccnavCont">
        <Navbar className="AccNavbar" expand="lg" style={{ color: "white" }}>
          <Navbar.Brand href="/Dashboard">
            <span style={{ color: "white", marginLeft: "15px" }}>
              {" "}
              {<BsFillGrid3X3GapFill />}
            </span>
            <span
              style={{ marginLeft: "25px", color: "white", fontWeight: "bold" }}
            >
              Accounting
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
              {/* <Nav.Link href="#home" className="Accnavetext">
                OverView
              </Nav.Link>
              <Nav.Link href="/Inventory" className="Accnavetext">
                Customers
              </Nav.Link> */}
              <NavDropdown title="Vendors" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item href="/InventoryProducts">
                  Bills
                </NavDropdown.Item>
                <NavDropdown.Item href="/InventoryVarient">
                  Refund
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Receipts
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Payment
                </NavDropdown.Item> */}
                <NavDropdown.Item onClick={ () => navigate('/AccountProduct')}>
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={ () => navigate('/AccountVendor')}>
                  vendors
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#link" className="Accnavetext">
                Accounting
              </Nav.Link>
              <Nav.Link href="#link" className="Accnavetext">
                Reporting
              </Nav.Link> */}
              <NavDropdown title="Settings" id="collasible-nav-dropdown" >
                <div className="Configcls">
                <NavDropdown.Item  onClick={ () => navigate('/PaymentTerms')}>Payment Terms</NavDropdown.Item>
                <NavDropdown.Item  onClick = {()=> navigate('/TaxName')}>Taxes</NavDropdown.Item>
                {/* <NavDropdown.Item  onClick={()=> navigate('/Fisical')}>
                  Fisical Positions
                </NavDropdown.Item> */}
                <NavDropdown.Item onClick={() => navigate('/Incometerms')}>
                  IncomeTerms
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"  onClick={ () => navigate('/Journal')}>
                  Journals
                </NavDropdown.Item>
              
                {/* <NavDropdown.Item >
                  Add a Bank Account
                </NavDropdown.Item> */}
                <NavDropdown.Item  onClick={() => navigate('/BankAcc')}>
                  Bank Accounts
                </NavDropdown.Item>
                {/* <NavDropdown.Item  onClick = {() => navigate('/AccPaymentCard')}>
                Payment Acquirers
                </NavDropdown.Item> */}

                <NavDropdown.Item  onClick={() => navigate('/Currencies')}>
                Currencies
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={()=> navigate('/ChartAccount')}>Chart of Accounts</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/JournalGroup')}>Journal Group</NavDropdown.Item>
                {/* <NavDropdown.Item >Reconciliation Models</NavDropdown.Item> */}
                <NavDropdown.Item onClick={() => navigate('/AccountTypes')}>Account Types</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/AccountTags')}>Account Tags</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/AccountGroup')}>Account Groups</NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate('/AccTaxGroup')}>Account Tax Groups</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/AssetTypes')}>Asset Type</NavDropdown.Item>
                {/* <NavDropdown.Item>Asset Upgrade</NavDropdown.Item> */}
                <NavDropdown.Item onClick={() => navigate('/AssetUseStatus')}>Asset Use Status</NavDropdown.Item>
                <NavDropdown.Item  onClick={() => navigate('/DifferedExpenseType')}>Deferred Expense Types</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/AnalyticAccounts')}>Analytic Accounts</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/AnalyticTag')}>Analytic Tags</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/AnalyticAccountGroup')}>Analytic Account Groups</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/AnalyticAccountType')}>Analytic Account Type</NavDropdown.Item>
                {/* <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                 Templates
                </NavDropdown.Item>
                <NavDropdown.Item>Chart of Accounts Templates</NavDropdown.Item>
                <NavDropdown.Item>Account Templates</NavDropdown.Item>
                <NavDropdown.Item>Tax Templates</NavDropdown.Item>
                <NavDropdown.Item>Fiscal Position Templates</NavDropdown.Item>
                <NavDropdown.Item href="" style={{ fontSize: "12px" }}>
                 Excel Reports
                </NavDropdown.Item>
                <NavDropdown.Item>Entry Details Template</NavDropdown.Item> 
                <NavDropdown.Item>Report Source</NavDropdown.Item>
             <NavDropdown.Item>Report Template</NavDropdown.Item>
             <NavDropdown.Item>Aged Partner Balance</NavDropdown.Item>
             <NavDropdown.Item>Report Dimension</NavDropdown.Item> */}
             </div>
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
          <div className="row Acchead">
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
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default  AccountNavbar;
