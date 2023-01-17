import { FourGMobiledataSharp, FreeBreakfast } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Destination from "../../../../components/ShippingMethodComp/Distination/Destination";
import Pricing from "../../../../components/ShippingMethodComp/Pricing/Pricing";
import { endpoints } from "../../../../services/endpoints";
import SalesNavbar from "../../SalesNavbar/SalesNavbar";
import "./AddShipingMethod.css";

const AddShippingMethod = () => {

  const [isEdit, setIsEdit] = useState(false);
  const [getProduct , setGetProduct] = useState([])
  const [update , setUpdate] = useState("");
  const [events, setEvents] = useState("Pricing");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const addShippingUrl = endpoints.shippingMethod.addShipping;
  const getProductUrl = endpoints.products.allProduct;

  useEffect(() => {
      const formData = new FormData()
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(getProductUrl , formData)
      .then((res) => {
           if(res.data.status === true){
            setGetProduct(res.data.data)
           }else if(res.data.status === false){
            toast(res.data.message , {type:"error"})
           }
      })
      .catch((err) => {
        console.log(err,"something went wrong")
      })
  },[])

  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [provider, setProvider] = useState("");
  const [fixedPrice, setFixedPrice] = useState("");
  const [margin, setMargin] = useState("");
  const [free, setFree] = useState("");
  const [amount, setAmount] = useState("");
  const [deliver, setDeliver] = useState("");
  const [countries, setCountries] = useState("");
  const [state, setState] = useState("");
  const [zipfrom, setZipFrom] = useState("");
  const [zipto, setZipTo] = useState("");

 

  const save = () => {
    if(name === "") {
      toast("Name is required !", { type: "warning" });
    }else if(active === "") {
      toast("Active is required !", { type: "warning" });
    }else if(provider === "") {
      toast("Provider is required !", { type: "warning" });
    }else if(fixedPrice === "") {
      toast("Fixed Price is required !", { type: "warning" });
    }else if(free === "") {
      toast("Free if order amount is above !", { type: "warning" });
    }else if(amount === "") {
      toast("Amount is required !", { type: "warning" });
    }else if(deliver === "") {
      toast("Delivery Product is required !", { type: "warning" });
    }else if(fixedPrice === "") {
      toast("Fixed Price is required !", { type: "warning" });
    }else if(countries === "") {
      toast("Counties is required !", { type: " warning" });
    }else if(state === "") {
      toast(" State is required !", { type: " warnign" });
    }else if(zipfrom === "") {
      toast(" Zip from is required !", { type: "warning" });
    }else if(zipto === "") {
      toast(" Zip to is required !", { type: " warnign " });
    }else{
      const formData = new FormData()
      formData.append("Name" , name);
      formData.append("Active" , active);
      formData.append("Provider" , provider);
      formData.append("Fixed_Price" , fixedPrice);
      formData.append("Margin" , margin);
      formData.append("Order_Amount" , free);
      formData.append("Amount" , amount);
      formData.append("ProductID" , deliver);
      formData.append("Country" , countries);
      formData.append("State" , state);
      formData.append("Zip_From" , zipfrom)
      formData.append("Zip_To" , zipto);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(addShippingUrl ,formData)
      .then((res) => {
        if(res.data.status === true){
          toast("Shipping Method Added Successfully" ,{type:"success"})
        }else if(res.data.status === false){
          toast(res.data.message,{type:"error"})
        }
      })
      .catch((err) => {
        console.log(err,"error")
      })
    }
  };

  // -------------------------Update Shipping Method-------------------

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");

  const updateShipping = endpoints.shippingMethod.updatShipping;

  useEffect(() => {
   if(selectedData){
    setUpdate(true)
    setName(selectedData.SHIP_NAME);
    setActive(selectedData.SHIP_ACTIVE);
    setMargin(selectedData.MARGIN_ON_RATE);
    setProvider(selectedData.SHIPPING_PROVIDER);
    setFree(selectedData.ORDER_AMOUNT);
    setAmount(selectedData.SHIPPING_AMOUNT);
    setDeliver(selectedData.DELIVERY_PRODUCT_ID);
    setFixedPrice(selectedData.FIXED_PRICE);
    setCountries(selectedData.DESTINATION_COUNTRY);
    setState(selectedData.DISTINATION_STATE);
    setZipFrom(selectedData.ZIP_FROM);
    setZipTo(selectedData.ZIP_TO);

   }
  },[selectedData])

  const updateData = () => {
    if(name === "") {
      toast("Name is required !", { type: "warning" });
    }else if(active === "") {
      toast("Active is required !", { type: "warning" });
    }else if(provider === "") {
      toast("Provider is required !", { type: "warning" });
    }else if(fixedPrice === "") {
      toast("Fixed Price is required !", { type: "warning" });
    }else if(free === "") {
      toast("Free if order amount is above !", { type: "warning" });
    }else if(amount === "") {
      toast("Amount is required !", { type: "warning" });
    }else if(deliver === "") {
      toast("Delivery Product is required !", { type: "warning" });
    }else if(fixedPrice === "") {
      toast("Fixed Price is required !", { type: "warning" });
    }else if(countries === "") {
      toast("Counties is required !", { type: " warning" });
    }else if(state === "") {
      toast(" State is required !", { type: " warnign" });
    }else if(zipfrom === "") {
      toast(" Zip from is required !", { type: "warning" });
    }else if(zipto === "") {
      toast("Zip to is required !", { type: "warnign" });
    }else{
      const formData = new FormData()
      formData.append("ID",selectedData.ID)
      formData.append("Name" , name);
      formData.append("Active" , active);
      formData.append("Provider" , provider);
      formData.append("Fixed_Price" , fixedPrice);
      formData.append("Margin" , margin);
      formData.append("Order_Amount" , free);
      formData.append("Amount" , amount);
      formData.append("ProductID" , deliver);
      formData.append("Country" , countries);
      formData.append("State" , state);
      formData.append("Zip_From" , zipfrom)
      formData.append("Zip_To" , zipto);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(updateShipping ,formData)
      .then((res) => {
        if(res.data.status === true){
          toast("Shipping Method Updated Successfully" ,{type:"success"})
        }else if(res.data.status === false){
          toast(res.data.message,{type:"error"})
        }
      })
      .catch((err) => {
        console.log(err,"error")
      })
    }
  };

  return (
    <div>
      <SalesNavbar showBelowMenu={true} title="Shipping Methods" save={update === true ? updateData : save} showCanelBtn={true}/>
      <div className="AddShipingMainCon">
        <div className="AddShipingContainer">
          <div className="AddShippingName">
            <p>Name</p>
            <input type="text" placeholder="e.g UPS Express" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="AddShippingdetails">
            <div className="ShippingFirst">
              <div className="shippingActive">
                <p>Active</p>
                <input
                  type="checkbox"
                  checked={active}
                  onChange={(e) => setActive(!active)}
                />
              </div>
              <div className="shippingProvider">
                <div className="textpro">
                  <p>Provider</p>
                </div>
                <div className="shipingradio">
                  <div className="fixed">
                    <input
                      type="radio"
                      name="fixed"
                      onChange={() => setProvider("FixedPrice")}
                      checked={provider === "FixedPrice" ? true : false}
                    />
                    <span>Fixed Price</span>
                  </div>
                  <div className="fixed">
                    <input
                      type="radio"
                      name="fixed"
                      onChange={() => setProvider("Basedonrules")}
                      checked={provider === "Basedonrules" ? true : false}
                    />
                    <span>Based on Rules</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ShippingSecond">
              <div className="marginonrate">
                <p>Margin on Rate</p>
                <input type="text" placeholder="0.00" value={margin} onChange={(e) => setMargin(e.target.value)}/>
                <span>%</span>
              </div>
              <div className="free">
                <p>Free if order amount is above</p>
                <input type="checkbox"  checked={free}
                  onChange={(e) => setFree(!free)}/>
              </div>
              <div className="ammount">
                <p>Ammount</p>
                <input type="text" placeholder="0.00"  value={amount} onChange={(e) => setAmount(e.target.value)}/>
              </div>
              <div className="delivery">
                <p>Delivery Product</p>
                <select value={deliver} onChange={(e) => setDeliver(e.target.value)}>
                  <option>choose any one</option>
                 {getProduct.map((item,index) => {
                  if(item.DELETE_STATUS != 'X'){
                    return(
                      <option value={item.PRODUCT_ID}>{item.PRODUCT_NAME}</option>
                    )
                  }
                 })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="detailsbtn">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item
                className={
                  events === "Pricing"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }
                onClick={() => setEvents("Pricing")} 
              >
                <Nav.Link   className={
                  events === "Pricing"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                } >Pricing</Nav.Link>
              </Nav.Item>
              <Nav.Item
              className={
                events === "Destination"
                  ? "navLinkActive"
                  : "navLinkDeactive"
              }
                onClick={() => setEvents("Destination")}
              >
                <Nav.Link eventKey="link-1"   className={
                  events === "Destination"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }>Destination Availbility</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="GeneralInformation">
            {events === "Pricing" && isEdit === false && <Pricing fixedPrice={fixedPrice} setFixedPrice={setFixedPrice}/>}
            {events === "Destination" && isEdit === false && <Destination state={state} countries={countries} setCountries={setCountries} zipfrom={zipfrom} zipto={zipto} setState={setState} setZipTo={setZipTo} setZipFrom={setZipFrom}/>}
          </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddShippingMethod;
