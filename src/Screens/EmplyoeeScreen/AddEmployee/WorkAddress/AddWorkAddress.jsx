import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import CusInvoicing from '../../../SalesScreen/Customer/AddCustomer/CusInvoicing';
import CustomerSales from '../../../SalesScreen/Customer/AddCustomer/CustomerSales';
import EmployeeNavbar from '../../EmplyoeeNavbar/EmployeeNavbar';
import camera from '../../../../assets/Images/camera.png'
import './AddWorkAddress.css'
import WorkAddreSales from './WorkAddreSales';
import { toast, ToastContainer } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints';
import validator from "validator";
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';

const AddWorkAddress = () => {

    const navigate = useNavigate();
    const [event, setEvent] = useState("Sales & Purchase");
    const [showCompany, setShowCompany] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [update , setUpdate] = useState("")
   
    const addWorkAddrUrl = endpoints.workAddress.addWorkAddress;
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    const [type , setType] = useState("");
    const [name , setName] = useState("");
    const [company , setCompany] = useState("");
    const [street , setStreet] = useState("");
    const [city , setCity] = useState("");
    const [state , setState] = useState("");
    const [zip , setZip] = useState("");
    const [country , setCountry] = useState("");
    const [taxId , setTaxId] = useState("");
    const [workAddress , setWorkAddress] = useState(false);
    const [supplierType , setSupplieType] = useState("");
    const [phone , setPhone] = useState("");
    const [mobile , setMobile] = useState("");
    const [email , setEmail] = useState("");
    const [webLink , setWebLink] = useState("")

    const save = () => {
        if(name === ""){
          toast("Name is required !",{type:"warning"})
        } else if (showCompany === true && company === "") {
          {
            toast("Comapny is required!", { type: "warning" });
          }
    }
    else if (street === "") {
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
    }else {
      const formData = new FormData();
      formData.append("Type", type);
      formData.append("Name", name);
      formData.append("Company_Name", company ? company : "company");
      formData.append("Street", street);
      formData.append("City", city);
      formData.append("State", state);
      formData.append("Zip", zip);
      formData.append("Country", country);
      formData.append("Phone", phone);
      formData.append("Mobile", mobile);
      formData.append("Email", email);
      formData.append("Supplier_Type", supplierType);
      formData.append("Website_Link", webLink);
      formData.append("Tax_ID", taxId);
      formData.append("Work_Address", workAddress);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
      .post(addWorkAddrUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          toast("WorkAddress is Added Successfully !", { type: "success" });
          setTimeout(() => {
            navigate('/WorkAddress')
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
  }
// ----------------------------------------Update WorkAddress-----------------------------
  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");

const updateWorkAddressUrl = endpoints.workAddress.upadteWorkAddress;

useEffect(() => {
  if(selectedData){
   setUpdate(true)
   setName(selectedData.WORK_NAME);
   setCity(selectedData.WORK_CITY);
   setCompany(selectedData.COMPANY_NAME);
   setCountry(selectedData.WORK_COUNTRY);
   setEmail(selectedData.EMAIL_ID);
   setMobile(selectedData.MOBILE_NO);
   setPhone(selectedData.WORK_PHONE);
   setState(selectedData.WORK_STATE);
   setCountry(selectedData.WORK_COUNTRY);
   setStreet(selectedData.WORK_STREET);
   setZip(selectedData.WORK_ZIP);
   setWorkAddress(selectedData.WORK_ADDRESS);
   setWebLink(selectedData.WEBSITE_LINK);
   setSupplieType(selectedData.SUPPLER_TYPE);
   setTaxId(selectedData.TAX_ID);
   setType(selectedData.WORK_TYPE)
   if(selectedData.WORK_TYPE == 1){
    setShowCompany(true);
  }else  if(selectedData.WORK_TYPE == 0){
    setShowCompany(false)
  }
}
 },[selectedData])

const updateData = () => {
  if(name === ""){
    toast("Name is required !",{type:"warning"})
  } else if (showCompany === true && company === "") {
    {
      toast("Comapny is required!", { type: "warning" });
    }
}
else if (street === "") {
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
    }  else {
const formData = new FormData();
formData.append("Type", type);
formData.append("Name", name);
formData.append("Company_Name", company ? company : "company");
formData.append("Street", street);
formData.append("City", city);
formData.append("State", state);
formData.append("Zip", zip);
formData.append("Country", country);
formData.append("Phone", phone);
formData.append("Mobile", mobile);
formData.append("Email", email);
formData.append("Supplier_Type", supplierType);
formData.append("Website_Link", webLink);
formData.append("Tax_ID", taxId);
formData.append("Work_Address", workAddress);
formData.append("User_Authorization", getAuthtoken);
formData.append("User_AuthKey", userAuth);
formData.append("ID",selectedData.ID);
axios
.post(updateWorkAddressUrl, formData)

.then((res) => {
  if (res.data.status === true) {
    toast("WorkAddress is Updated Successfully !", { type: "success" });
    setTimeout(() => {
      navigate('/WorkAddress')
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
}








  // ---------------------------------------------------------------------------------------
    const handleIndividual = (e) => {
      if (e.target.value === "individual") {
        setShowCompany(true);
        setType(1);
      }
    };
  
    const handleCompany = (e) => {
      if (e.target.value === "company") {
        setShowCompany(false);
        setType(0);
      }
    };

  return (
    <div> 
    <EmployeeNavbar showBelowMenu={true} title="Work Address" save={update === true ? updateData : save}  showCanelBtn={true}/>
    <div className="work_maincon">
      <div className="work_container">
        <div className="work_details">
          <div className="work_radio">
            <div className="work_ind">
              <input type="radio" name="com" id="com" value="individual"   onChange={(e) => handleIndividual(e)}
                  checked={type == 1 ? true : false}/>
              <label htmlFor="com">Individual</label>
            </div>
            <div className="work_com">
            <input
                type="radio"
                name="com"
                id="company"
                value="company"
                  onChange={(e) => handleCompany(e)}
                  checked={type == 0 ? true : false}
              />
              <label htmlFor="company">Company</label>
            </div>
            </div>
          <div className="work_name">
            <p>Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="work_company">
          
             {showCompany &&  <select
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
              </select>}
          </div>
         
        </div>
        <div className="work_personaldetails">
        <div className="work_first">
            <div className="work_text">
              <p>Street</p>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="work_text">
              <p>City</p>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="work_text">
              <p>State</p>
              <input
                type="text"
                value={state} 
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="work_text">
              <p>Zip</p>
              <input
                type="number" 
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="work_text">
              <p>Country</p>
              <input
                type="text" value={country} onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="work_text">
              <p>Tax Id</p>
              <input
                type="number"
                value={taxId}
                onChange={(e) => setTaxId(e.target.value)}
              />
            </div>
            <div className="work_addr">
              <label htmlFor="work">Work Address</label>
              <input
                type="checkbox"
                id="work"
                checked={workAddress}
                value={workAddress}
                onChange={(e) => setWorkAddress(!workAddress)}
              />
            </div>
          </div>
          <div className="work_second">
          <div className="work_text">
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
            <div className="work_text">
              <p>Phone</p>
              <PhoneInput
                  country={"in"}
                  value={phone}
                onChange={(e) => setPhone(e)}
                containerClass="phone_sty"
                />
            </div>
            <div className="work_text">
              <p>Mobile</p>
              {/* <input
                type="text"
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
            <div className="work_text">
              <p>Email</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="work_text">
              <p>Website Link</p>
              <input
                type="text"
                value={webLink}
                onChange={(e) => setWebLink(e.target.value)}
              />
            </div>
          </div>
          </div>
        
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddWorkAddress