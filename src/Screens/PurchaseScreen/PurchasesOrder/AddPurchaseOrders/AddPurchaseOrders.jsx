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
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const AddPurchaseOrders = (props) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState("Products");

  
  const [allPurchaseAgree , setAllPurchaseAgree] = useState([])

  const allPAUrl = endpoints.agreementType.allAgreement;

  const getAllPA = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(allPAUrl,formData)
    .then((res) => {
      console.log(res,"data here")
      if(res.data.status === true){

        var val = res.data.data;
        const filterPA = val.filter((itm,ind) => {
          return itm.DELETE_STATUS != 'X'
        })
        setAllPurchaseAgree(filterPA)
      }
    })
  }

  useEffect(() => {
    getAllPA()
  },[])

  // ------------------------Request Quotation State----------------------------

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
  const [POId , setPOId] = useState("")

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
        .post(PurchaseOrdersUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Request Quotation Added Successfully", { type: "success" });
            setTimeout(() => {
              navigate('/PurchaseOrder')
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

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(vendorUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          const filterVendor = val.filter((itm,ind) => {
            return itm.VENDOR_STATUS != "X"
          })
          setVendorAll(filterVendor);
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

          var val = res.data.data;
          const filterCurrency = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != 'X'
          })
          setCurrencyAll(filterCurrency);
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
   
  const updatePurchaseOrders = endpoints.purchaseOrders.updatepurchaseOrder;

  useEffect(() => {
     if(selectedData){
      setUpdate(true);
      setPOId(selectedData.ID);
      setVendor(selectedData.VENDOR_ID);
      setVendorRef(selectedData.VENDOR_REFERENCE);
      setPurchaseAgree(selectedData.PURCHASEAGREEMENT_ID);
      setOrderDate(selectedData.ORDER_DATE);
      setRecepitDate(selectedData.RECEIPT_DATE);
      setPurchaseRep(selectedData.PURCHASE_REPRESENTATIVE);
      setIncoTerms(selectedData.INCOMETERMS_ID);
      setPaymentTerms(selectedData.PAYMENT_TERMS);
      setCurrency(selectedData.PRODUCT_CURRENCY);
      setLocation(selectedData.DESTINATION_LOCATION);
      setDeliver(selectedData.DELIVER_TO);
      setFisicalPosition(selectedData.FISCAL_POSITION);
      setPurchaseType(selectedData.PURCHASE_TYPE);
      setTermsCondition(selectedData.DEFINE_U_TERMS);
     }
  },[selectedData])
 

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
      formData.append("ID" , POId);
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
        .post(updatePurchaseOrders, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Request Quotation updated Successfully", { type: "success" });
            setTimeout(() => {
              navigate('/PurchaseOrder')
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


  const [vendorAll, setVendorAll] = useState([]);
  const [currencyAll, setCurrencyAll] = useState([]);
  const [paymentTermsAll, setPaymentTermsAll] = useState([]);
  const [vendor, setVendor] = useState("");

  const [selectedProductsId , setSelectedProductsId] = useState("")
  const [updateProductDetails , setUpdateProductDetails] = useState(false)


  const vendorUrl = endpoints.vendors.allVendors;
  const currencyUrl = endpoints.Currency.allCurrency;
  const paymentUrl = endpoints.PaymentTerms.allPayment;
  const PurchaseOrdersUrl = endpoints.purchaseOrders.addpurchaseOrder;

 
//  -------------------------ProductDetails useState-----------------------

const [modalShow , setModalShow] = useState(false)
const [productAll , setProductAll] = useState([]);
const [singleProduct , setSingleProduct] = useState([])

const [productdet , setProductDet] = useState("")
const [description , setDescription] = useState("")
const [quantity , setQuantity] = useState("")
const [uomdet , setUomdet] = useState("")

const getAuthtoken = localStorage.getItem("authtoken");
const userAuth = localStorage.getItem("userAuth");

const productDetailsUrl = endpoints.purchaseOrders.allProductDetails;
const addProductUrl = endpoints.purchaseOrders.addProductdetails;

const singleProductUrl = endpoints.purchaseOrders.singleProductDetails;

const getAllproductdetails = () => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
   
    axios.post(productDetailsUrl,formData)
    .then((res) => {
      console.log(res,"responscbdch")
      if(res.data.status === true){
        var val = res.data.data;
        val = val.reverse();
        const filterProduct = val.filter((itm,ind) =>{
          return itm.DELETE_STATUS != "X"
        })
        setProductAll(filterProduct)
      }else if(res.data.status === false){
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        else{
        //  toast(res.data.message,{type:"error"});
        }
      }
    })
    .catch((err) => {
      console.log(err , "something went wrong");
    })
}

const getSingleProduct = () => {
  const formData = new FormData()
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("PO_ID" ,POId);
    axios.post(singleProductUrl,formData)
    .then((res) => {
      if(res.data.status === true){
        const val = res.data.data;
        console.log(val,"single data here")
        const filteredProductDetails = val.filter((itm,ind) =>{
          return itm.DELETE_STATUS != "X"
        })
        setSingleProduct(filteredProductDetails)
      }
      else if(res.data.status === false){
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
      }
    })
    .catch((err) => {
      
    })


  }


useEffect(() => {
  console.log(POId,"jbkjbk")
  if(POId){
    getSingleProduct()
  }else{
    getAllproductdetails()
  }
 
},[POId])



 const saveProduct = () => {
 
 if(productdet === ""){
    toast("Product is required" ,{type:'warning'})
  }else if(description === ""){
    toast("Description is required" ,{type:"warning"})
  }else if(quantity === ""){
    toast("Quantity is required",{type:"warning"})
  }else if(uomdet === ""){
    toast("UOM is required",{type:"warning"})
  }else{
    const formData = new FormData()
    formData.append("Product_ID" , productdet);
    formData.append("UOM_ID" , uomdet);
    formData.append("Description" , description);
    formData.append("Qty" , quantity);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(addProductUrl , formData)
    .then((res) => {
      if(res.data.status === true){
        toast("Product Details Added successfully" ,{type:"success"})
        setModalShow(false)
        getAllproductdetails()
      }else if(res.data.status === false){
        toast(res.data.data ,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"error")
    })
  }

};

// ------------------deleteProductDetails---------------------------

const deleteProductDetailsUrl = endpoints.purchaseOrders.deleteProductdetails;

const deleteItem = (data) => {
  const formData = new FormData();
  formData.append("ID" , data);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);
  axios.post(deleteProductDetailsUrl,formData)
  .then((res) => {
    if(res.data.status === true)
    {
        toast("Product deleted Successfully",{type:"success"});
        getAllproductdetails()
    }
    else if(res.data.status === false)
    {
      if(res.data.code === 3)
      {
        toast("Session expired , Please re-login",{type:"warning"})
        navigate('/');
      }
      else{
       toast(res.data.mrssage,{type:"error"});
      }
    }
  })
  .catch((err) => {
    console.log(err,"error");
})
 }

//  ----------------------Update ProductDetails-------------------------------

const productUpdateUrl = endpoints.purchaseOrders.PurchaseupdateProductDetails;
 const handleUpdate = (id) => {
  var selectedProductsList = productAll.filter((itm,ind) => {
    return itm.ID === id
  })
  console.log(selectedProductsList,"csdf")
  setModalShow(true)
  setSelectedProductsId(id)
  selectedProductsList = selectedProductsList[0];
  setProductDet(selectedProductsList.PRODUCT_ID);
  setDescription(selectedProductsList.DESCRIPTION);
  setUomdet(selectedProductsList.UNITOFMEASUREMENT_ID);
  setQuantity(selectedProductsList.PRODUCT_QUANTITY);
  setUpdateProductDetails(true)
 }

 const updateSelectedProductList = () => {
  const formData = new FormData();
  formData.append("ID",selectedProductsId)
  formData.append("Product_ID" , productdet);
  formData.append("UOM_ID" , uomdet);
  formData.append("Description" , description);
  formData.append("Qty" , quantity);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);
  axios.post(productUpdateUrl,formData)
  .then((res) => {
    console.log(res,"vfshgdf")
    if(res.data.status === true){
      toast("Product Details Updated successfully" ,{type:"success"})
      window.location.reload()
      setModalShow(false)
      getAllproductdetails()
      getSingleProduct()
    }else if(res.data.status === false){
      toast(res.data.data ,{type:"error"})
    }
  })
  .catch((err) => {
    console.log(err,"error")
  })
  console.log(selectedProductsId,"id pro")
 }




const column = [
    {label:"Product" , name:"PRODUCT_NAME"},
    {label:"Description" , name:"DESCRIPTION"},
    {label:"Quantity" , name:"PRODUCT_QUANTITY"},
    {label:"UOM" , name:"UNIT_OF_MEASUREMENT"},
    {
      label:"Actions",
      name:"ID",
      options:{
        print:false,
          customBodyRender:(value , tableMeta , updateValue) => {
              return(
                  <>
                   <div className="updtdlt">
                  <MdDelete size={23} color="#4f434d"  onClick={() => deleteItem(value)} style={{cursor:"pointer"}}/>
                  <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                  </div>
                  </>
                  
              )
          }
      }
  }
]

const column2 = [
    {label:"Product" , name:"PRODUCT_NAME"},
    {label:"Description" , name:"DESCRIPTION"},
    {label:"Quantity" , name:"PRODUCT_QUANTITY"},
    {label:"UOM" , name:"UNIT_OF_MEASUREMENT"},
    {
      label:"Actions",
      name:"ID",
      options:{
        print:false,
          customBodyRender:(value , tableMeta , updateValue) => {
              return(
                  <>
                   <div className="updtdlt">
                  <MdDelete size={23} color="#4f434d"  onClick={() => deleteItem(value)} style={{cursor:"pointer"}}/>
                  <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                  </div>
                  </>
                  
              )
          }
      }
  }
]
  return (
    <div>
      <PurchaseNavbar
        showBelowMenu={true}
        title="Purchase Orders"
        save={update === true ? updateData : save} 
        showCanelBtn={true}
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
                {allPurchaseAgree.map((itm,ind) => {
                return (
                  <>
                  <option value={itm.AGREEMENT_TYPE_ID}>{itm.AGREEMENT_TYPE}</option>
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
        {events === "Products" && <AddProductRequest vendor={vendor} termsCondition={termsCondition} setTermsCondition={setTermsCondition} column={column} productAll={productAll} modalShow={modalShow} setModalShow={setModalShow} saveProduct={saveProduct} setProductDet={setProductDet} setDescription={setDescription} setQuantity={setQuantity} setUomdet={setUomdet}   setVendor={setVendor}  productdet={productdet} description={description} quantity={quantity} uomdet={uomdet} deleteItem={deleteItem} updateSelectedProductList={updateSelectedProductList} updateProductDetails={updateProductDetails} column2={column2} POId={POId} singleProduct={singleProduct} setSingleProduct={setSingleProduct} uniqueId={POId}/>}

          {events === "Other Information" && <OtherInfo recepitDate={recepitDate} setRecepitDate={setRecepitDate} incoTerms={incoTerms} setIncoTerms={setIncoTerms} purchaseRep={purchaseRep} setPurchaseRep={setPurchaseRep} fisicalPosition={fisicalPosition} setFisicalPosition={setFisicalPosition}/>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddPurchaseOrders;
