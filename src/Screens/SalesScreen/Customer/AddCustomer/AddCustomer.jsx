import React, { useState } from "react";
import SalesNavbar from "../../SalesNavbar/SalesNavbar";
import "./AddCustomer.css";
import camera from '../../../../assets/Images/camera.png'
import { Nav } from "react-bootstrap";
import CustomerSales from "./CustomerSales";
import CusInvoicing from "./CusInvoicing";
import { endpoints } from "../../../../services/endpoints";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddCustomer = () => {
    
  const navigate = useNavigate();
    const [event, setEvent] = useState("Sales & Purchase");
    const [showCompany, setShowCompany] = useState(false);

    const location = useLocation();
  const CustomertData = location.state;

  const CustomerDetails = JSON.parse(CustomertData);

    // -------------------AddCustomer useState-----------------
    const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const addCustomerUrl = endpoints.customer.addCustomer;
  const [files, setFiles] = useState("");
  const [decimal , setDecimal] = useState("")
  const [jobPosition , setJobPosition] = useState("");
  const [addressType, setAddressType] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [taxId, setTaxId] = useState("");
  const [workAddress, setWorkAddress] = useState(false);
  const [phone, SetPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [webLink, setWebLink] = useState("");
  const [salesPersons, setSalesPersons] = useState("");
  const [salesPaymentTerms, setSalesPaymentTerms] = useState("");
  const [purchasePaymentTerms, setPurchasePaymentTerms] = useState("");
  const [priceList, setPriceList] = useState("");
  const [supplierCurrency, setSupplierCurrency] = useState("");
  const [fiscalPosition, setFiscalPosition] = useState("");
  const [refrence, setRefrence] = useState("");
  const [industry, setIndustry] = useState("");
  const [bank, setBank] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [accReceviable, setAccReceviable] = useState("");
  const [accPayable, setAccPayable] = useState("");
  const [cusImg, setCusImg] = useState("");
  const [id, setId] = useState("");
  const [updated , setUpdated] = useState(true);
  const [edit , setEdit] = useState(false)

  const save = () => {
    if (customerName === "") {
      toast("Vendor name is required!", { type: "warning" });
    } else if (showCompany === true && company === "") {
      {
        toast("Comapny is required!", { type: "warning" });
      }
    }else if (street === "") {
      toast("Street is required!", { type: "warning" });
    } else if (city === "") {
      toast("City is required!", { type: "warning" });
    } else if (state === "") {
      toast("State is required !", { type: "warning" });
    } else if (zip === "") {
      toast("Zip code is required !", { type: "warning" });
    } else if (country === "") {
      toast("Country is required !", { type: "warning" });
    } else if (taxId === "") {
      toast("Tax Id is required !", { type: "warning" });
    } else if (workAddress === "") {
      toast("Work Address is required!", { type: "warning" });
    }  else if (phone === "") {
      toast("Phone is required !", { type: "warning" });
    } else if (mobile === "") {
      toast("Mobile is required !", { type: "warning" });
    } else if (email === "") {
      toast("Email is required !", { type: "warning" });
    } else if (salesPersons === "") {
      toast("Sales Person is required !", { type: "warning" });
    } else if (salesPaymentTerms === "") {
      toast("Sales Payment Terms is requierd !", { type: "warning" });
    } else if (priceList === "") {
      toast("Price list is required !", { type: "warning" });
    } else if (purchasePaymentTerms === "") {
      toast("Purchase Payment Terms is required !", { type: "warning" });
    } else if (supplierCurrency === "") {
      toast("Suppiler Currency is required !", { type: "warning" });
    } else if (fiscalPosition === "") {
      toast("Fisical Position is required !", { type: "warning" });
    } else if (refrence === "") {
      toast("Refrence is required !", { type: "warning" });
    } else if (industry === "") {
      toast("Industry is required !", { type: "warning" });
    } else if (bank === "") {
      toast("Bank is required !", { type: "warning" });
    } else if (accNumber === "") {
      toast("Account Number is required !", { type: "warning" });
    } else if (accReceviable === "") {
      toast("Account Receviable is required !", { type: "warning" });
    } else if (accPayable === "") {
      toast("Account Payable is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Type", addressType);
      formData.append("Name", customerName);
      formData.append("Company", company ? company : "company");
      formData.append("Address", street);
      formData.append("City", city);
      formData.append("State", state);
      formData.append("Zip", zip);
      formData.append("Country", country);
      formData.append("Phone", phone);
      formData.append("Mobile", mobile);
      formData.append("Email", email);
      formData.append("Website", webLink);
      formData.append("Tax_ID", taxId);
      formData.append("Address", workAddress);
      formData.append("Sales_Persons", salesPersons);
      formData.append("Payment_TermsID1", salesPaymentTerms);
      formData.append("Price_List", priceList);
      formData.append("Fiscal_Position", fiscalPosition);
      formData.append("Payment_TermsID2", purchasePaymentTerms);
      formData.append("Supplier_Currency", supplierCurrency);
      formData.append("Reference", refrence);
      formData.append("Industry", industry);
      formData.append("Bank", bank);
      formData.append("Account", accNumber);
      formData.append("Account_Recievable", accReceviable);
      formData.append("Account_Payable", accPayable);
      formData.append("ChooseFile", files);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(addCustomerUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Customer is Added Successfully !", { type: "success" });
          } else if (res.data.status === false) {
            if (res.data.code === 3) {
              toast("Session expired , Please re-login", { type: "warning" });
              navigate("/");
            } else {
              toast(res.data.message, { type: "error" });
            }
          }
        })
        .catch((err) => {
          console.log(err, "something went wrong");
        });
    }
  };
  
  // ---------------------------Update Customers---------------------------

  const updateCustomer = endpoints.customer.updateCustomer;

  useEffect(() => {
    if (CustomerDetails && updated) {
      setCustomerName(CustomerDetails.CUSTOMER_NAME);
      setId(CustomerDetails.ID);
      setAddressType(CustomerDetails.CUSTOMER_INDIVIDUAL);
      setCompany(CustomerDetails.CUSTOMER_COMPANY);
      setStreet(CustomerDetails.CUSTOMER_ADDRESS);
      setCity(CustomerDetails.CUSTOMER_CITY);
      setState(CustomerDetails.CUSTOMER_STATE);
      setZip(CustomerDetails.CUSTOMER_ZIP);
      setCountry(CustomerDetails.CUSTOMER_COUNTRY);
      SetPhone(CustomerDetails.CUSTOMER_PHONE);
      setMobile(CustomerDetails.CUSTOMER_MOBILE);
      setEmail(CustomerDetails.EMAIL_ID);
      setWebLink(CustomerDetails.WEBSITE_LINK);
      setTaxId(CustomerDetails.TAX_ID);
      setWorkAddress(CustomerDetails.CUSTOMER_ADDRESS);
      setSalesPersons(CustomerDetails.SALES_PERSON);
      setSalesPaymentTerms(CustomerDetails.SALES_PAYMENT_TERMS);
      setPriceList(CustomerDetails.PRICE_LIST);
      setFiscalPosition(CustomerDetails.FISCAL_POSITION);
      setPurchasePaymentTerms(CustomerDetails.PURCHASE_PAYMENT_TERMS);
      setSupplierCurrency(CustomerDetails.SUPPLIER_CURRENCY);
      setRefrence(CustomerDetails.SALES_REFERENCE);
      setIndustry(CustomerDetails.VENDOR_INDUSTORY);
      setBank(CustomerDetails.SALES_BANK);
      setAccNumber(CustomerDetails.SALES_ACCOUNT);
      setAccReceviable(CustomerDetails.ACCOUNT_RECEIVABLE);
      setAccPayable(CustomerDetails.ACCOUNT_PAYABLE);
      setCusImg(CustomerDetails.CUSTOMER_PROFILE);
      setFiles(CustomerDetails.CUSTOMER_PROFILE)
      setEdit(true)
      const url = CustomerDetails.CUSTOMER_PROFILE;
      const fileName = "myFile.jpg";
  
      fetch(url).then(async (response) => {
        const contentType = response.headers.get("content-type");
        const blob = await response.blob();
        const file = new File([blob], fileName, { contentType });
        setFiles(file)
      });
      if (CustomerDetails.ADDRESS_TYPE == 1) {
        setShowCompany(true);
      } else if (CustomerDetails.ADDRESS_TYPE == 0) {
        setShowCompany(false);
      }
      setUpdated(false)
    }
  }, [CustomerDetails]);
  const handleIndividual = (e) => {
    if (e.target.value === "individual") {
      setShowCompany(true);
      setAddressType(true);
    }
  };

  const updateData = () => {
    if (customerName === "") {
      toast("Customer name is required!", { type: "warning" });
    } else if (showCompany === true && company === "") {
      {
        toast("Comapny is required!", { type: "warning" });
      }
    } else if (street === "") {
      toast("Street is required!", { type: "warning" });
    } else if (city === "") {
      toast("City is required!", { type: "warning" });
    } else if (state === "") {
      toast("State is required !", { type: "warning" });
    } else if (zip === "") {
      toast("Zip code is required !", { type: "warning" });
    } else if (country === "") {
      toast("Country is required !", { type: "warning" });
    } else if (taxId === "") {
      toast("Tax Id is required !", { type: "warning" });
    } else if (workAddress === "") {
      toast("Work Address is required!", { type: "warning" });
    }else if (phone === "") {
      toast("Phone is required !", { type: "warning" });
    } else if (mobile === "") {
      toast("Mobile is required !", { type: "warning" });
    } else if (email === "") {
      toast("Email is required !", { type: "warning" });
    } else if (salesPersons === "") {
      toast("Sales Person is required !", { type: "warning" });
    } else if (salesPaymentTerms === "") {
      toast("Sales Payment Terms is requierd !", { type: "warning" });
    } else if (priceList === "") {
      toast("Price list is required !", { type: "warning" });
    } else if (purchasePaymentTerms === "") {
      toast("Purchase Payment Terms is required !", { type: "warning" });
    } else if (supplierCurrency === "") {
      toast("Suppiler Currency is required !", { type: "warning" });
    } else if (fiscalPosition === "") {
      toast("Fisical Position is required !", { type: "warning" });
    } else if (refrence === "") {
      toast("Refrence is required !", { type: "warning" });
    } else if (industry === "") {
      toast("Industry is required !", { type: "warning" });
    } else if (bank === "") {
      toast("Bank is required !", { type: "warning" });
    } else if (accNumber === "") {
      toast("Account Number is required !", { type: "warning" });
    } else if (accReceviable === "") {
      toast("Account Receviable is required !", { type: "warning" });
    } else if (accPayable === "") {
      toast("Account Payable is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("ID" , id)
      formData.append("Type", addressType);
      formData.append("Name", customerName);
      formData.append("Company", company ? company : "company");
      formData.append("Address", street);
      formData.append("City", city);
      formData.append("State", state);
      formData.append("Zip", zip);
      formData.append("Country", country);
      formData.append("Phone", phone);
      formData.append("Mobile", mobile);
      formData.append("Email", email);
      formData.append("Website", webLink);
      formData.append("Tax_ID", taxId);
      formData.append("Address", workAddress);
      formData.append("Sales_Persons", salesPersons);
      formData.append("Payment_TermsID1", salesPaymentTerms);
      formData.append("Price_List", priceList);
      formData.append("Fiscal_Position", fiscalPosition);
      formData.append("Payment_TermsID1", purchasePaymentTerms);
      formData.append("Supplier_Currency", supplierCurrency);
      formData.append("Reference", refrence);
      formData.append("Industry", industry);
      formData.append("Bank", bank);
      formData.append("Account", accNumber);
      formData.append("Account_Recievable", accReceviable);
      formData.append("Account_Payable", accPayable);
      formData.append("ChooseFile", files);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(updateCustomer, formData)
        .then((res) => {
          console.log(res, "response");
          if (res.data.status === true) {
            toast("Customer Updated Successfully", { type: "success" });
          } else if (res.data.status === false) {
            if (res.data.code === 3) {
              toast("Session expired , Please re-login", { type: "warning" });
              navigate("/");
            } else {
              toast(res.data.message, { type: "error" });
            }
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }
  };

  const handleCompany = (e) => {
    if (e.target.value === "company") {
      setShowCompany(false);
      setAddressType(0);
    }
  };


  const handleChange = (e) => {
    setFiles(e.target.files[0]);
    setCusImg(URL.createObjectURL(e.target.files[0]));
  };


  return (
    <div>
      <SalesNavbar showBelowMenu={true} title="Customer" save={edit === true ? updateData : save } showCanelBtn={true}/>
      <div className="customer_maincon">
        <div className="customer_container">
          <div className="customer_details">
            <div className="customer_radio">
              <div className="cus_ind">
                <input type="radio" name="com" id="com" value="individual"  onChange={(e) => handleIndividual(e)}
                  checked={addressType == true ? true : false}/>
                <label htmlFor="com">Individual</label>
              </div>
              <div className="cus_com">
              <input
                  type="radio"
                  name="com"
                  id="company"
                  value="company"
                  onChange={(e) => handleCompany(e)}
                  checked={addressType == 0 ? true : false}
                />
                <label htmlFor="company">Company</label>
              </div>
              </div>
            <div className="customer_name">
              <p>Name</p>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              </div>
              <div className="cus_company">
            
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
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
                <img src={cusImg ? cusImg : camera} alt="camera" />
              </label>
              <input type="file" id="takePhoto" onChange={handleChange} />
            </div>
          </div>
          <div className="customer_personaldetails">
          <div className="customer_first">
              <div className="customer_text">
                <p>Street</p>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="customer_text">
                <p>City</p>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="customer_text">
                <p>State</p>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="customer_text">
                <p>Zip</p>
                <input
                  type="text"   value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div className="customer_text">
                <p>Country</p>
                <input
                  type="text" 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="customer_text">
                <p>Tax Id</p>
                <input
                  type="text"
                  value={taxId}
                  onChange={(e) => setTaxId(e.target.value)}
                />
              </div>
              <div className="customer_addr">
                <label htmlFor="work">Work Address</label>
                <input
                  type="checkbox"
                  id="work"
                  value={workAddress}
                  onChange={(e) => setWorkAddress(!workAddress)}
                  checked={workAddress}
                />
              </div>
            </div>
            <div className="customer_second">
           
              <div className="customer_text">
                <p>Phone</p>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => SetPhone(e.target.value)}
                />
              </div>
              <div className="customer_text">
                <p>Mobile</p>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="customer_text">
                <p>Email</p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="customer_text">
                <p>Website Link</p>
                <input
                  type="text"
                  value={webLink}
                  onChange={(e) => setWebLink(e.target.value)}
                />
              </div>
            </div>
            </div>
            <div className="Adddetails">
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
           <CustomerSales salesPersons={salesPersons}
           setSalesPersons={setSalesPersons}
           salesPaymentTerms={salesPaymentTerms}
           setSalesPaymentTerms={setSalesPaymentTerms}
           priceList={priceList}
           setPriceList={setPriceList}
           purchasePaymentTerms={purchasePaymentTerms}
           setPurchasePaymentTerms={setPurchasePaymentTerms}
           supplierCurrency={supplierCurrency}
           setSupplierCurrency={setSupplierCurrency}
           fiscalPosition={fiscalPosition}
           setFiscalPosition={setFiscalPosition}
           refrence={refrence}
           setRefrence={setRefrence}
           industry={industry}
           setIndustry={setIndustry}/>
            )}
            {event === "Invoicing" && (
           <CusInvoicing  bank={bank}
           setBank={setBank}
           accNumber={accNumber}
           setAccNumber={setAccNumber}
           accReceviable={accReceviable}
           setAccReceviable={setAccReceviable}
           accPayable={accPayable}
           setAccPayable={setAccPayable}/>
            )}
          </div>
          </div>
        </div>
      </div>
  );
};

export default AddCustomer;
