import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { RequestProduct } from "../../../../components/Model/PurhcaseRequestProduct/RequestProduct";
import SalesPurchase from "../../../../components/VendorsScreen/AddVendors/SalesPurchase";
import PurchaseNavbar from "../../PurchaseNavbar";
import AddProductRequest from "../../RequestsforQuotation/AddRequestQuotation/AddProductRequest";
import OtherInfo from "../../RequestsforQuotation/AddRequestQuotation/OtherInfo";
import { endpoints } from "../../../../services/endpoints";
import { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AddPurchaseOrders = (props) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState("Products");

  const [vendorAll, setVendorAll] = useState([]);
  const [currencyAll, setCurrencyAll] = useState([]);
  const [paymentTermsAll, setPaymentTermsAll] = useState([]);
    const [vendor, setVendor] = useState("");

  const vendorUrl = endpoints.vendors.allVendors;
  const currencyUrl = endpoints.Currency.allCurrency;
  const paymentUrl = endpoints.PaymentTerms.allPayment;
  const addpurchaseOrdersUrl = endpoints.purchaseOrders.allpurchaseOrder;

 
//  -------------------------ProductDetails useState-----------------------

const [modalShow , setModalShow] = useState(false)
const [productAll , setProductAll] = useState([]);

const [serialNo , setSerialNo] = useState("")
const [productdet , setProductDet] = useState("")
const [description , setDescription] = useState("")
const [quantity , setQuantity] = useState("")
const [uomdet , setUomdet] = useState("")
const [venId , setVendId] = useState("") 
const productUrl = endpoints.purchaseOrders.allProductDetails;
const productDetailsUrl = endpoints.purchaseOrders.addProductdetails;
const getAuthtoken = localStorage.getItem("authtoken");
const userAuth = localStorage.getItem("userAuth");
const vendorId = localStorage.getItem("varId");

const [allpurchaseAgree , setAllPurchaseAgree] = useState([]);

const purchaseAgreeUrl = endpoints.agreementType.allAgreement;


useEffect(() => {
  const formData = new FormData();
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);
  axios
    .post(purchaseAgreeUrl, formData)
    .then((res) => {
      if (res.data.status === true) {
        setAllPurchaseAgree(res.data.data);
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
}, []);


useEffect(() => {
   if(vendor != ""){
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("Vendor_ID" , vendor)
    axios.post(productUrl,formData)
    .then((res) => {
      console.log(res,"responscbdch")
      if(res.data.status === true){
        setProductAll(res.data.data)
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
  }
},[vendor])

 const saveProduct = () => {
  if(serialNo === ""){
    toast("No is required" ,{type:'warning'})
  }else if(vendorId === ""){
    toast("Vendor Id is required",{type:"warning"})
  }else if(productdet === ""){
    toast("Product is required" ,{type:'warning'})
  }else if(description === ""){
    toast("Description is required" ,{type:"warning"})
  }else if(quantity === ""){
    toast("Quantity is required",{type:"warning"})
  }else if(uomdet === ""){
    toast("UOM is required",{type:"warning"})
  }else{
    const formData = new FormData()
    formData.append("Vendor_ID",vendorId);
    formData.append("Number",serialNo);
    formData.append("Product_ID" , productdet);
    formData.append("UOM" , uomdet);
    formData.append("Description" , description);
    formData.append("Qty" , quantity);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(productDetailsUrl , formData)
    .then((res) => {
      if(res.data.status === true){
        toast("Product Details Added successfully" ,{type:"warning"})
      }else if(res.data.status === false){
        toast(res.data.data ,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"error")
    })
  }

};


const column = [
    {label:"VenID" , name:"VENDOR_ID"},
    {label:"No" , name:"SERIAL_NO"},
    {label:"Product" , name:"PRODUCT_NAME"},
    {label:"Description" , name:"DESCRIPTION"},
    {label:"Quantity" , name:"PRODUCT_QUANTITY"},
    {label:"UOM" , name:"UNIT_OF_MEASUREMENT"},
]


  // ------------------------Purchase Orders State----------------------------

  const [vendorRef, setVendorRef] = useState("");
  const [purchaseAgree, setPurchaseAgree] = useState("");
  const [deliver, setDeliver] = useState("");
  const [currency, setCurrency] = useState("");
  const [purchaseType, setPurchaseType] = useState("");
  const [location, setLocation] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [termsCondition, setTermsCondition] = useState("");
  const [recepitDate, setRecepitDate] = useState("");
  const [incoTerms, setIncoTerms] = useState("");
  const [purchaseRep, setPurchaseRep] = useState("");
  const [fisicalPosition, setFisicalPosition] = useState("");
  const [update , setUpdate] = useState("");
  const [requestId , setRequestId] = useState("")

  const save = () => {
    if (vendor === "") {
      toast("Vendor is required !", { type: "warning" });
    } else if (vendorRef === "") {
      toast("Vendor refrence is required !", { type: "warning" });
    } else if (purchaseAgree === "") {
      toast("Purchase Agreement is required !", { type: "warning" });
    } else if (deliver === "") {
      toast("Deliver To is required !", { type: "warning" });
    } else if (currency === "") {
      toast("Currency is required !", { type: "warning" });
    } else if (purchaseType === "") {
      toast("Purchase Type is required !", { type: "warning" });
    } else if (location === "") {
      toast("Destination Location is required !", { type: "warning" });
    }  else if (orderDate === "") {
      toast("Order Date is required !", { type: "warning" });
    }  else if (recepitDate === "") {
      toast("Receipt Date is required !", { type: "warning" });
    } else if (paymentTerms === "") {
      toast("Payment Terms is required !", { type: "warning" });
    } else if (purchaseRep === "") {
      toast("Purchase Representative is required", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Vendor_ID", vendor);
      formData.append("Purchase_Type", purchaseType);
      formData.append("Vendor_Reference", vendorRef);
      formData.append("Payment_Terms", paymentTerms);
      formData.append("Purchase_AgreementID", purchaseAgree);
      formData.append("Destination", location);
      formData.append("Deliver_To", deliver);
      formData.append("Order_Date", orderDate);
      formData.append("Currency", currency);
      formData.append("Conditions", description);
      formData.append("Reciept_Date", recepitDate);
      formData.append("Purchase_Representative", purchaseRep);
      formData.append("Income_TermID", incoTerms);
      formData.append("Fiscal_Position", fisicalPosition);
      formData.append("Conditions" , termsCondition);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(addpurchaseOrdersUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Request Quotation Added Successfully", { type: "success" });
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

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(vendorUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setVendorAll(res.data.data);
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
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(currencyUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setCurrencyAll(res.data.data);
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
  }, []);
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(paymentUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setPaymentTermsAll(res.data.data);
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
  }, []);

  const locations = useLocation();
  const selectedData = locations.state;
  console.log(selectedData , "selectedData here");
   
  const updatepurchaseOrder = endpoints.requestQuotation.updatrRequestQuotation;

  useEffect(() => {
     if(selectedData){
      setUpdate(true);
      setRequestId(selectedData.ID);
      setVendor(selectedData.VENDOR_ID);
      setVendorRef(selectedData.VENDOR_REFERENCE);
      setPurchaseAgree(selectedData.PURCHASE_TYPE_ID);
      setOrderDate(selectedData.ORDER_DATE);
      setRecepitDate(selectedData.RECEIPT_DATE);
      setPurchaseRep(selectedData.PURCHASE_REPRESENTATIVE);
      setIncoTerms(selectedData.INCOME_TERMS_ID);
      setPaymentTerms(selectedData.PAYMENT_TERMS);
      setCurrency(selectedData.PRODUCT_CURRENCY);
      setLocation(selectedData.DESTINATION_LOCATION);
      setDeliver(selectedData.DELIVER_TO);
      setFisicalPosition(selectedData.FISCAL_POSITION);
      setPurchaseType(selectedData.PURCHASE_TYPE);
      setTermsCondition(selectedData.DEFINE_U_TERMS);
     }
  },[])
 

  const updateData = () => {
    if (vendor === "") {
      toast("Vendor is required !", { type: "warning" });
    } else if (vendorRef === "") {
      toast("Vendor refrence is required !", { type: "warning" });
    } else if (purchaseAgree === "") {
      toast("Purchase Agreement is required !", { type: "warning" });
    } else if (deliver === "") {
      toast("Deliver To is required !", { type: "warning" });
    } else if (currency === "") {
      toast("Currency is required !", { type: "warning" });
    } else if (purchaseType === "") {
      toast("Purchase Type is required !", { type: "warning" });
    } else if (location === "") {
      toast("Destination Location is required !", { type: "warning" });
    }  else if (orderDate === "") {
      toast("Order Date is required !", { type: "warning" });
    }  else if (recepitDate === "") {
      toast("Receipt Date is required !", { type: "warning" });
    } else if (paymentTerms === "") {
      toast("Payment Terms is required !", { type: "warning" });
    } else if (purchaseRep === "") {
      toast("Purchase Representative is required", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("ID" , requestId);
      formData.append("Vendor_ID", vendor);
      formData.append("Purchase_Type", purchaseType);
      formData.append("Vendor_Reference", vendorRef);
      formData.append("Payment_Terms", paymentTerms);
      formData.append("Purchase_AgreementID", purchaseAgree);
      formData.append("Destination", location);
      formData.append("Deliver_To", deliver);
      formData.append("Order_Date", orderDate);
      formData.append("Currency", currency);
      formData.append("Conditions", description);
      formData.append("Reciept_Date", recepitDate);
      formData.append("Purchase_Representative", purchaseRep);
      formData.append("Income_TermID", incoTerms);
      formData.append("Fiscal_Position", fisicalPosition);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(updatepurchaseOrder, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Request Quotation updated Successfully", { type: "success" });
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
   
  return (
    <div>
      <PurchaseNavbar
        showBelowMenu={true}
        title="Purchase Orders"
        save={update === true ? updateData : save}
      />
      <div className="addRequestQuoContainer">
        <div className="addRequestCon">
          <div className="requestQuofirst">
            <div className="reqQuotext">
              <p>Vendor</p>
              <select value={vendor} onChange={(e) => setVendor(e.target.value)} disabled={update}>
                <option value="">Select Any one</option>
                {vendorAll.map((item, index) => {
                  if (item.VENDOR_STATUS != "X") {
                    return (
                      <>
                        <option value={item.VENDOR_ID}>
                          {item.VENDOR_NAME}
                        </option>
                      </>
                    );
                  }
                })}
              </select>
            </div>
            <div className="reqQuotext">
              <p>Vendor Reference</p>
              <input type="text" value={vendorRef} onChange={(e) => setVendorRef(e.target.value)}/>
            </div>
            <div className="reqQuotext">
              <p>Purchase Agreement</p>
              <select value={purchaseAgree} onChange={(e) => setPurchaseAgree(e.target.value)}>
                <option value="">Select Any one</option>
                 {allpurchaseAgree.map((item,index) => {
                  return(
                    <>
                    <option value={item.AGREEMENT_TYPE_ID}>{item.AGREEMENT_TYPE}</option>
                    </>
                  )
                 })}
              </select>
            </div>
            <div className="reqQuotext">
              <p>Deliver To</p>
              <select value={deliver} onChange={(e) => setDeliver(e.target.value)}>
                <option value="">Select Any one</option>
                <option value="RUH-STORE 01: Receipts">RUH-STORE 01: Receipts</option>
                <option value="HEAD OFFICE: Receipts">HEAD OFFICE: Receipts</option>
                <option value="RUH-STORE 01: Receipts">RUH-STORE 01: Receipts</option>
                <option value="NTE DAMAGE WAREHOUSE: Receipts">NTE DAMAGE WAREHOUSE: Receipts</option>
                <option value="Bakery: Receipts">Bakery: Receipts</option>
                <option value="Online Stock: Receipts">Online Stock: Receipts</option>
                <option value="Main Warehouse Ruh-01: Receipts">Main Warehouse Ruh-01: Receipts</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Currency</p>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="">Select Any one</option>
                {currencyAll.map((item, index) => {
                  if (item.DELETE_STATUS != "X") {
                    return (
                      <>
                        <option value={item.CURRENCY}>{item.CURRENCY}</option>
                      </>
                    );
                  }
                })}
              </select>
            </div>
          </div>
          <div className="requestQuoSecond">
            <div className="reqQuotext">
              <p>Purchase Type</p>
              <select value={purchaseType} onChange={(e) => setPurchaseType(e.target.value)}>
                <option value="">Select Any one</option>
                <option value="Cash Po">Cash Po</option>
                <option value="Standard Po">Standard Po</option>
                <option value="Credit">Credit</option>
                <option value="international">international</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Payment Terms</p>
              <select value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)}>
                <option value="">Select Any one</option>
                {paymentTermsAll.map((item, index) => {
                  if (item.DELETE_STATUS != "X") {
                    return (
                      <>
                        <option value={item.PAYMENT_TERMS}>
                          {item.PAYMENT_TERMS}
                        </option>
                      </>
                    );
                  }
                })}
              </select>
            </div>
            <div className="reqQuotext">
              <p>Destination Location</p>
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">Select Any one</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Aagra">Aagra</option>
                <option value="Delhi">Delhi</option>
                <option value="Kanpur">Kanpur</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Order Date</p>
              <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)}/>
            </div> 
          </div>
        </div>
        <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
              className={
                events === "Products" ? "navLinkActive" : "navLinkDeactive"
              }
            >
              <Nav.Link
                href=""
                className={
                  events === "Products" ? "navLinkActive" : "navLinkDeactive"
                }
                onClick={() => setEvents("Products")}
              >
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={
                events === "Other Information"
                  ? "navLinkActive"
                  : "navLinkDeactive"
              }
            >
              <Nav.Link
                href=""
                className={
                  events === "Other Information"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }
                onClick={() => setEvents("Other Information")}
              >
                Other Information
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
          {events === "Products" && <AddProductRequest vendor={vendor} termsCondition={termsCondition} setTermsCondition={setTermsCondition} column={column} productAll={productAll} modalShow={modalShow} setModalShow={setModalShow} saveProduct={saveProduct} setSerialNo={setSerialNo} setProductDet={setProductDet} setDescription={setDescription} setQuantity={setQuantity} setUomdet={setUomdet} setVendId={setVendId} venId={venId}  setVendor={setVendor} serialNo={serialNo} productdet={productdet} description={description} quantity={quantity} uomdet={uomdet}/>}
          {events === "Other Information" && <OtherInfo recepitDate={recepitDate} setRecepitDate={setRecepitDate} incoTerms={incoTerms} setIncoTerms={setIncoTerms} purchaseRep={purchaseRep} setPurchaseRep={setPurchaseRep} fisicalPosition={fisicalPosition} setFisicalPosition={setFisicalPosition}/>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddPurchaseOrders;
