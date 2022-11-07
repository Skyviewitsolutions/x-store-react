import React, { useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import "./AddVendors.css";
import { Nav, Navbar } from "react-bootstrap";
import SalesPurchase from "./SalesPurchase";
import Invoicing from "./Invoicing";
import camera from "../../../assets/Images/camera.png";
import Navebar from "../../Navbar/Navbar"
import { endpoints } from "../../../services/endpoints";
import { toast } from "react-toastify";

const AddVendors = () => {
    const [event, setEvent] = useState("Sales & Purchase");
    const [showCompany , setShowCompany] = useState(false);

  // -------------AddVendors UseState-----------
  const AddVendors = endpoints.vendors.addVendors;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth")
  const [addressType , setAddressType] = useState("");
  const [vendorName , setVendorName] = useState("");
  const [company , setCompany] = useState("");
  const [street , setStreet] = useState("");
  const [city , setCity] = useState("");
  const [state , setState] = useState("");
  const [zip , setZip] = useState("");
  const [country , setCountry] = useState("");
  const [taxId , setTaxId] = useState("");
  const [workAddress , setWorkAddress] = useState("");
  const [supplierType , setSupplieType] = useState("");
  const [phone , SetPhone] = useState("");
  const [mobile , setMobile] = useState("");
  const [email , setEmail] = useState("");
  const [webLink , setWebLink] = useState("");
  const [salesPerson , setSalesPersons] = useState("");
  const [salesPaymentTerms , setSalesPaymentTerms] = useState("");
  const [purchasePaymentTerms , setPurchaseSalesPaymentTerms] = useState("");
  const [priceList , setPriceList] = useState("");
  const [supplierCurrency , setSupplierCurrency] = useState("");
  const [fiscalPosition , setFiscal] = useState("");
  const [refrence , setRefrence] = useState("");
  const [industry , setIndustry] = useState("");
  const [bank , setBank] = useState("");
  const [accNumber , setAccNumber] = useState("");
  const [accReceviable , setAccReceviable] = useState("");
  const [accPayable , setAccPayable] = useState("")

   const save = () => {
    const formData = new FormData();
    formData.append("Address_Type" , addressType);
    formData.append("Name" , vendorName);
    formData.append("Company" , company);
    formData.append("Street" ,street);
    formData.append("City" , city);
    formData.append("State" , state);
    formData.append("Zip" , zip);
    formData.append("Country" , country);
    formData.append("Phone" , phone);
    formData.append("Mobile" , mobile);
    formData.append("Email" , email);
    formData.append("Suplier_Type" , supplierType);
    formData.append("Website_Link" , webLink);
    formData.append("Tax_ID" ,taxId);
    formData.append("Work_Address" , workAddress);
    formData.append("Sales_Person" , salesPerson);
    formData.append("Payment_Terms" , salesPaymentTerms);
    formData.append("Price_List" , priceList);
    formData.append("Fiscal_Position" , fiscalPosition);
    formData.append("Payment_Terms1" ,purchasePaymentTerms);
    formData.append("Supplier_Currency" , supplierCurrency);
    formData.append("Reference" , refrence);
    formData.append("Industry" , industry);
    formData.append("Bank" , bank);
    formData.append("Account_Number" , accNumber);
    formData.append("Account_Receivable" , accReceviable);
    formData.append("Account_Payable" , accPayable);
    formData.append("User_Authorization",getAuthtoken);
    formData.append("User_AuthKey" ,userAuth)

    if(vendorName === ""){
      toast("Vendor name is required!" , {type:"warning"})
    }else if(showCompany===true && company === ""){
      toast("Comapny is required!",{type:"warning"})
    }else if(street === "")
    {
      toast("Street is required!",{type:"warning"});
    }else if(city === ""){
      toast("City is required!",{type:"warning"});
    }else if(state === ""){
      toast("State is required !" ,{type:"warning"});
    }else if(zip === ""){
      toast("Zip code is required !",{type:"warning"});
    }else if(country === ""){
      toast("Country is required !",{type:"warning"});
    }else if(taxId === ""){
      toast("Tax Id is required !",{type:"warning"});
    }else if(workAddress === ""){
      toast("Work Address is required!",{type:"warning"});
    }else if(supplierType === ""){
      toast("Suppiler Type is required !",{type:"warning"});
    }else if(phone === ""){
      toast("Phone is required !" , {type:"warning"})
    }else if(mobile === ""){
      toast("Mobile is required !",{type:"warning"});    
    }
   }
 
    

    const handleIndividual = (e) => {
     if(e.target.value === "individual")
     {
      setShowCompany(true);
     }
    }

    const handleCompany = (e) => {
      if(e.target.value === "company") {
        setShowCompany(false)
      }
    }
  return (
    <div>
     <Navebar
        showBelowMenu={true}
        title="Vendors"
      />
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
              <input type="radio" name="com" id='com' value="individual" onChange={(e) =>handleIndividual(e)}/>
              <label htmlFor="com">Individual</label>
              </div>
              <div className="com">
              <input type="radio" name="com"  id='company' value="company" onChange={(e) => handleCompany(e)}/>
              <label htmlFor="company">Company</label>
              </div>
              </div>
            <div className="nameinput">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="comselect">
             {showCompany===true ? <select>
                <option>Company</option>
                <option>300048513700003 - 300048513700003</option>
                <option>AALY ALQEMA EST. - 0305</option>
                <option>
                  Abandoned armor for furnishings -310151424200003
                </option>
                <option>
                  Abandoned armor for furnishings - 310151424200003
                </option>
              </select>: null}
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
