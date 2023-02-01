import React, { useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import "./AddVendors.css";
import { Nav, Navbar } from "react-bootstrap";
import SalesPurchase from "./SalesPurchase";
import Invoicing from "./Invoicing";
import camera from "../../../assets/Images/camera.png";
import Navebar from "../../Navbar/Navbar";
import { endpoints } from "../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import validator from "validator";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddVendors = () => {
  const [event, setEvent] = useState("Sales & Purchase");
  const [showCompany, setShowCompany] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [files, setFiles] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const VendorsData = location.state;

  const VendorsDetails = JSON.parse(VendorsData);

  // -------------AddVendors UseState-----------
  const AddVendors = endpoints.vendors.addVendors;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [addressType, setAddressType] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [taxId, setTaxId] = useState("");
  const [workAddress, setWorkAddress] = useState(false);
  const [supplierType, setSupplieType] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [webLink, setWebLink] = useState("");
  const [salesPerson, setSalesPersons] = useState("");
  const [salesPaymentTerms, setSalesPaymentTerms] = useState("");
  const [purchasePaymentTerms, setPurchaseSalesPaymentTerms] = useState("");
  const [priceList, setPriceList] = useState("");
  const [supplierCurrency, setSupplierCurrency] = useState("");
  const [fiscalPosition, setFiscalPosition] = useState("");
  const [refrence, setRefrence] = useState("");
  const [industry, setIndustry] = useState("");
  const [bank, setBank] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [accReceviable, setAccReceviable] = useState("");
  const [accPayable, setAccPayable] = useState("");
  const [vendorImg, setVendorImg] = useState("");
  const [id, setId] = useState("");
  const [updated, setUpdated] = useState(true);
  const [edit, setEdit] = useState(false);

  const save = () => {
    if (vendorName === "") {
      toast("Vendor name is required!", { type: "warning" });
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
    } else if (supplierType === "") {
      toast("Suppiler Type is required !", { type: "warning" });
    } else if (phone === "") {
      toast("Phone is required !", { type: "warning" });
    } else if (mobile === "") {
      toast("Mobile is required !", { type: "warning" });
    } else if (email === "") {
      toast("Email is required !", { type: "warning" });
    } else if (!validator.isEmail(email)) {
      toast("InValid Email !", { type: "warning" });
    }
     else if (salesPerson === "") {
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
    } else if(vendorImg === ""){
      toast("Vendor Imgae is required !",{type:"warning"})
    }else {
      const formData = new FormData();
      formData.append("Address_Type", addressType);
      formData.append("Name", vendorName);
      formData.append("Company", company ? company : "company");
      formData.append("Street", street);
      formData.append("City", city);
      formData.append("State", state);
      formData.append("Zip", zip);
      formData.append("Country", country);
      formData.append("Phone", phone);
      formData.append("Mobile", mobile);
      formData.append("Email", email);
      formData.append("Suplier_Type", supplierType);
      formData.append("Website_Link", webLink);
      formData.append("Tax_ID", taxId);
      formData.append("Work_Address", workAddress);
      formData.append("Sales_Person", salesPerson);
      formData.append("Payment_Terms", salesPaymentTerms);
      formData.append("Price_List", priceList);
      formData.append("Fiscal_Position", fiscalPosition);
      formData.append("Payment_Terms1", purchasePaymentTerms);
      formData.append("Supplier_Currency", supplierCurrency);
      formData.append("Reference", refrence);
      formData.append("Industry", industry);
      formData.append("Bank", bank);
      formData.append("Account_Number", accNumber);
      formData.append("Account_Receivable", accReceviable);
      formData.append("Account_Payable", accPayable);
      formData.append("ChooseFile", files);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(AddVendors, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Vendors is Added Successfully !", { type: "success" });
            setTimeout(() => {
              navigate('/Vendors')
            }, 1000);
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

  // -------------------update vendors url ---------------------
  const updateVendors = endpoints.vendors.updateVendors;
  useEffect(() => {
    if (VendorsDetails && updated) {
      setVendorName(VendorsDetails.VENDOR_NAME);
      setId(VendorsDetails.VENDOR_ID);
      setAddressType(VendorsDetails.ADDRESS_TYPE);
      setCompany(VendorsDetails.COMPANY);
      setStreet(VendorsDetails.STREET);
      setCity(VendorsDetails.CITY);
      setState(VendorsDetails.STATE);
      setZip(VendorsDetails.ZIP);
      setCountry(VendorsDetails.COUNTRY);
      setPhone(VendorsDetails.PHONE);
      setMobile(VendorsDetails.MOBILE);
      setEmail(VendorsDetails.EMAIL);
      setSupplieType(VendorsDetails.SUPLLIER_TYPE);
      setWebLink(VendorsDetails.WEBSITE_LINK);
      setTaxId(VendorsDetails.TAX_ID);
      setWorkAddress(VendorsDetails.WORK_ADDRESS);
      setSalesPersons(VendorsDetails.SALES_PERSON);
      setSalesPaymentTerms(VendorsDetails.PAYMENT_TERMS);
      setPriceList(VendorsDetails.PRICE_LIST);
      setFiscalPosition(VendorsDetails.FISCAL_POSITION);
      setPurchaseSalesPaymentTerms(VendorsDetails.PAYMENTS_TERM);
      setSupplierCurrency(VendorsDetails.SUPPLIER_CURRENCY);
      setRefrence(VendorsDetails.VENDOR_REFERENCE);
      setIndustry(VendorsDetails.VENDOR_INDUSTORY);
      setBank(VendorsDetails.V_BANK);
      setAccNumber(VendorsDetails.ACCOUNT_NUMBER);
      setAccReceviable(VendorsDetails.ACCOUNT_RECEIPT);
      setAccPayable(VendorsDetails.ACCOUNT_PAYABLE);
      setVendorImg(VendorsDetails.VENDOR_PROFILE);
      setFiles(VendorsDetails.VENDOR_PROFILE);
      setEdit(true);
      const url = VendorsDetails.VENDOR_PROFILE;
      const fileName = "myFile.jpg";

      fetch(url).then(async (response) => {
        const contentType = response.headers.get("content-type");
        const blob = await response.blob();
        const file = new File([blob], fileName, { contentType });
        setFiles(file);
      });
      if (VendorsDetails.ADDRESS_TYPE == 1) {
        setShowCompany(true);
      } else if (VendorsDetails.ADDRESS_TYPE == 0) {
        setShowCompany(false);
      }
      setUpdated(false);
    }
  }, [VendorsDetails]);

  const updateData = () => {
    if (vendorName === "") {
      toast("Vendor name is required!", { type: "warning" });
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
    } else if (supplierType === "") {
      toast("Suppiler Type is required !", { type: "warning" });
    } else if (phone === "") {
      toast("Phone is required !", { type: "warning" });
    } else if (mobile === "") {
      toast("Mobile is required !", { type: "warning" });
    } else if (email === "") {
      toast("Email is required !", { type: "warning" });
    } else if (!validator.isEmail(email)) {
      toast("Invaild Email !", { type: "warning" });
    } else if (salesPerson === "") {
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
      formData.append("Address_Type", addressType);
      formData.append("Name", vendorName);
      formData.append("Company", company ? company : "company");
      formData.append("Street", street);
      formData.append("City", city);
      formData.append("State", state);
      formData.append("Zip", zip);
      formData.append("Country", country);
      formData.append("Phone", phone);
      formData.append("Mobile", mobile);
      formData.append("Email", email);
      formData.append("Suplier_Type", supplierType);
      formData.append("Website_Link", webLink);
      formData.append("Tax_ID", taxId);
      formData.append("Work_Address", workAddress);
      formData.append("Sales_Person", salesPerson);
      formData.append("Payment_Terms", salesPaymentTerms);
      formData.append("Price_List", priceList);
      formData.append("Fiscal_Position", fiscalPosition);
      formData.append("Payment_Terms1", purchasePaymentTerms);
      formData.append("Supplier_Currency", supplierCurrency);
      formData.append("Reference", refrence);
      formData.append("Industry", industry);
      formData.append("Bank", bank);
      formData.append("Account_Number", accNumber);
      formData.append("Account_Receivable", accReceviable);
      formData.append("Account_Payable", accPayable);
      formData.append("ChooseFile", files);
      formData.append("ID", id);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(updateVendors, formData)
        .then((res) => {
          console.log(res, "response");
          if (res.data.status === true) {
            toast("Product Updated Successfully", { type: "success" });
            setTimeout(() => {
              navigate('/Vendors')
            }, 1000);
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

  const handleIndividual = (e) => {
    if (e.target.value === "individual") {
      setShowCompany(true);
      setAddressType(1);
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
    setVendorImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Navebar
        showBelowMenu={true}
        title="Vendor"
        save={edit === true ? updateData : save}
        showCanelBtn={true}
      />
      <div className="AddVendorsCon">
        <div className="Ven_container">
          {/* <div className="VendorsHeader">
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
          </div> */}
          <div className="VendorsDetails">
            <div className="radiobutton">
              <div className="IndCom">
                <input
                  type="radio"
                  name="com"
                  id="com"
                  value="individual"
                  onChange={(e) => handleIndividual(e)}
                  checked={addressType == 1 ? true : false}
                />
                <label htmlFor="com">Individual</label>
              </div>
              <div className="com">
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
            <div className="nameinput">
              <p>Name</p>
              <input
                type="text"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
              />
            </div>
            <div className="comselect">
              {showCompany === true ? (
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
              ) : null}
            </div>
            <div className="Vendor_img">
              <label htmlFor="takePhoto">
                <img src={vendorImg ? vendorImg : camera} alt="camera" />
              </label>
              <input
                type="file"
                id="takePhoto"
                style={{ visibility: "hidden" }}
                accept="image/png, image/gif, image/jpeg"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="VendorsDetails2">
            <div className="vendorsbox1">
              <h3>Company Address</h3>
              <div className="vendorstextinput">
                <p>Street</p>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="vendorstextinput">
                <p>City</p>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="vendorstextinput">
                <p>State</p>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="vendorstextinput">
                <p>Zip</p>
                <input
                  type="number"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div className="vendorstextinput">
                <p>Country</p>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="vendorstextinput">
                <p>Tax Id</p>
                <input
                  type="number"
                  min="1"
                  value={taxId}
                  onChange={(e) => setTaxId(e.target.value)}
                />
              </div>
              <div className="vendorstextcheckbox">
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
            <div className="Vendorsbox2">
              <div className="vendorstextinput">
                <p>Supplier type</p>
                <select
                  value={supplierType}
                  onChange={(e) => setSupplieType(e.target.value)}
                >
                  <option value="">Choose any one</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Vendor">Vendor</option>
                </select>
              </div>
              <div className="vendorstextinput">
                <p>Phone</p>
                {/* <input
                  type="number"
                  value={phone}
                  onChange={(e) => SetPhone(e.target.value)}
                /> */}
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(e) => setPhone(e)}
                  containerClass="phone_sty"
                />
              </div>
              <div className="vendorstextinput">
                <p>Mobile</p>
                {/* <input
                  type="number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                /> */}
                <PhoneInput
                  country={"in"}
                  value={mobile}
                  onChange={(e) => setMobile(e)}
                  containerClass="phone_sty"
                />
              </div>
              <div className="vendorstextinput">
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="vendorstextinput">
                <p>Website Link</p>
                <input
                  type="url"
                  placeholder="e.g. https://xstore-front.skyviewads.com"
                  value={webLink}
                  onChange={(e) => setWebLink(e.target.value)}
                />
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
              <Nav.Item
                className={
                  event === "Sales & Purchase"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }
              >
                <Nav.Link
                  eventKey="link-1"
                  className={
                    event === "Sales & Purchase"
                      ? "navLinkActive"
                      : "navLinkDeactive"
                  }
                  onClick={() => setEvent("Sales & Purchase")}
                >
                  Sales & Purchase
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={
                  event === "Invoicing" ? "navLinkActive" : "navLinkDeactive"
                }
              >
                <Nav.Link
                  eventKey="link-1"
                  className={
                    event === "Invoicing" ? "navLinkActive" : "navLinkDeactive"
                  }
                  onClick={() => setEvent("Invoicing")}
                >
                  Invoicing
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item className="detailslink">
                <Nav.Link eventKey="link-1">Internal Notes</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </div>
          <div className="Warehouse">
            {event === "Sales & Purchase" && (
              <SalesPurchase
                salesPerson={salesPerson}
                setSalesPersons={setSalesPersons}
                salesPaymentTerms={salesPaymentTerms}
                setSalesPaymentTerms={setSalesPaymentTerms}
                priceList={priceList}
                setPriceList={setPriceList}
                purchasePaymentTerms={purchasePaymentTerms}
                setPurchaseSalesPaymentTerms={setPurchaseSalesPaymentTerms}
                supplierCurrency={supplierCurrency}
                setSupplierCurrency={setSupplierCurrency}
                fiscalPosition={fiscalPosition}
                setFiscalPosition={setFiscalPosition}
                refrence={refrence}
                setRefrence={setRefrence}
                industry={industry}
                setIndustry={setIndustry}
              />
            )}
            {event === "Invoicing" && (
              <Invoicing
                bank={bank}
                setBank={setBank}
                accNumber={accNumber}
                setAccNumber={setAccNumber}
                accReceviable={accReceviable}
                setAccReceviable={setAccReceviable}
                accPayable={accPayable}
                setAccPayable={setAccPayable}
              />
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddVendors;
