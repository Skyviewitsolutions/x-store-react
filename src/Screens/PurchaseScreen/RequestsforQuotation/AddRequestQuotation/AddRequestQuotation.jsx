import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { RequestProduct } from "../../../../components/Model/PurhcaseRequestProduct/RequestProduct";
import SalesPurchase from "../../../../components/VendorsScreen/AddVendors/SalesPurchase";
import PurchaseNavbar from "../../PurchaseNavbar";
import AddProductRequest from "./AddProductRequest";
import OtherInfo from "./OtherInfo";
import './AddRequestQuotation.css'
import { endpoints } from "../../../../services/endpoints";
import { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddRequestQuotation =(props)=> {

  const navigate = useNavigate();
    const [events, setEvents] = useState("Products");

    const [vendorAll , setVendorAll] = useState([]);
    const [currencyAll , setCurrencyAll] = useState([]);
    const [paymentTermsAll , setPaymentTermsAll] = useState([]);

    const vendorUrl = endpoints.vendors.allVendors;
    const currencyUrl = endpoints.Currency.allCurrency;
    const paymentUrl = endpoints.PaymentTerms.allPayment;

    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    
    const [vendor , setVendor] = useState("");
    const [vendorRef , setVendorRef] = useState("");
    const [purchaseAgree , setPurchaseAgree] = useState("");
    const [deliver , setDeliver] = useState("");
    const [currency , setCurrency] = useState("");
    const [purchaseType , setPurchaseType] = useState("");
    const [purchaseTerm , setPurcjaseTerms] = useState(""); 
    const [location , setLocation] = useState("");
    const [orderDate , setOrderDate] = useState("");
    const [productNo , setProductNo] = useState("");
    const [description , setDescription] = useState("");
    const [no , setNo] = useState("");
    const [product , setProduct] = useState("");
    const [description1 , setDescription1] = useState("");
    const [quantity , setQuantity] = useState("");
    const [uom , setUom] = useState("");
    const [recepitDate , setRecepitDate] = useState("");
    const [incoTerms , setIncoTrems] = useState("");
    const [purchaseRep , setPurchaseRep] = useState("");
    const [fisicalPositin , setFisicalPosition] = useState("")

    const save = () => {
      if(vendor === ""){
        toast("Vendor is required !",{type:"warning"})
      }else if(vendorRef === ""){
        toast("Vendor refrence is required !",{type:"warning"})
      } else if(purchaseAgree === ""){
        toast("Purchase Agreement is required !",{type:"warning"})
      }else if(deliver === ""){
        toast("Deliver To is required !",{type:"warning"})
      }else if(currency === ""){
        toast("Currency is required !",{type:"warning"})
      }else if(purchaseType === ""){
        toast("Purchase Type is required !",{type:"warning"})
      }else if(location === ""){
        toast("Destination Location is required !",{type:"warning"})
      }else if(purchaseTerm === ""){
        toast("Purchase Terms is required !",{type:"warning"})
      }else if(orderDate === ""){
        toast("Order Date is required !",{type:"warning"})
      }else if(product === ""){
        toast("Product is required !",{type:"warning"})
      }else if(quantity === ""){
        toast("Quantity is required !",{type:"warning"} )
      }else if(uom === ""){
        toast("UOM is required !",{type:"warning"})
      }else if(recepitDate === ""){
        toast("Receipt Date is required !",{type:"warning"})
      }
    }

    useEffect(() => {
      const formData = new FormData();
      formData.append("User_Authorization" , getAuthtoken);
      formData.append("User_AuthKey" , userAuth);
      axios.post(vendorUrl,formData)
      .then((res) => {
        if(res.data.status === true){
          setVendorAll(res.data.data)
        }else if(res.data.status === false){
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err , "something went wrong");
      })
    },[])

   useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios.post(currencyUrl ,formData)
    .then((res) => {
      if(res.data.status === true){
        setCurrencyAll(res.data.data)
      }else if(res.data.status === false){
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        else{
         toast(res.data.message,{type:"error"});
        }
      }
    })
    .catch((err) => {
      console.log(err , "something went wrong");
    })
   },[])
   useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios.post(paymentUrl ,formData)
    .then((res) => {
      if(res.data.status === true){
        setPaymentTermsAll(res.data.data)
      }else if(res.data.status === false){
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        else{
         toast(res.data.message,{type:"error"});
        }
      }
    })
    .catch((err) => {
      console.log(err , "something went wrong");
    })
   },[])



  return (
    <div>
      <PurchaseNavbar
        showBelowMenu={true}
        title="Requests for Quotation
"
      />
      <div className="addRequestQuoContainer">
        <div className="addRequestCon">
          <div className="requestQuofirst">
            <div className="reqQuotext">
              <p>Vendor</p>
              <select>
                <option value="">Select Any one</option>
               {vendorAll.map((item,index) => {
               if(item.VENDOR_STATUS!="X"){
                return(
                    <>
                     <option value={item.VENDOR_ID}>{item.VENDOR_NAME}</option>
                    </>
                )   
            }
               })}
              </select>
            </div>
            <div className="reqQuotext">
              <p>Vendor Reference</p>
              <input type="text" />
            </div>
            <div className="reqQuotext">
              <p>Purchase Agreement</p>
              <select>
                <option value="">Select Any one</option>
                <option>tesing</option>
                <option>testing</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Deliver To</p>
              <select>
                <option value="">Select Any one</option>
                <option>RUH-STORE 01: Receipts</option>
                <option>HEAD OFFICE: Receipts</option>
                <option>RUH-STORE 01: Receipts</option>
                <option>NTE DAMAGE WAREHOUSE: Receipts</option>
                <option>Bakery: Receipts</option>
                <option>Online Stock: Receipts</option>
                <option>Main Warehouse Ruh-01: Receipts</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Currency</p>
              <select>
                <option value="">Select Any one</option>
                {currencyAll.map((item,index) => {
               if(item.DELETE_STATUS!="X"){
                return(
                    <>
                     <option value={item.CURRENCY}>{item.CURRENCY}</option>
                    </>
                )   
            }
               })}
              </select>
            </div>
          </div>
          <div className="requestQuoSecond">
            <div className="reqQuotext">
              <p>Purchase Type</p>
              <select>
                <option value="">Select Any one</option>
                <option>Cash Po</option>
                <option>Standard Po</option>
                <option>Credit</option>
                <option>international</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Payment Terms</p>
              <select>
                <option value="">Select Any one</option>
                {paymentTermsAll.map((item,index) => {
               if(item.DELETE_STATUS!="X"){
                return(
                    <>
                     <option value={item.PAYMENT_TERMS}>{item.PAYMENT_TERMS}</option>
                    </>
                )   
            }
               })}
              </select>
            </div>
            <div className="reqQuotext">
              <p>Destination Location</p>
              <select>
                <option value="">Select Any one</option>
                <option>Lucknow</option>
                <option>Aagra</option>
                <option>Delhi</option>
                <option>Kanpur</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Order Date</p>
              <input type="date" />
            </div>
          </div>
        </div>
        <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item   className={events === "Products" ? "navLinkActive" : "navLinkDeactive"}>
              <Nav.Link href=""  className={events === "Products" ? "navLinkActive" : "navLinkDeactive"} onClick={() => setEvents("Products")}>Products</Nav.Link>
            </Nav.Item>
            <Nav.Item  className={events === "Other Information" ? "navLinkActive" : "navLinkDeactive"}>
              <Nav.Link href=""  className={events === "Other Information" ? "navLinkActive" : "navLinkDeactive"} onClick={() => setEvents("Other Information")}>Other Information</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
            {events === "Products" && (
                <AddProductRequest/>
            )}
            {events === "Other Information" && (
              <OtherInfo
              />
            )}
            </div>

            
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddRequestQuotation;
