import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { endpoints } from '../../../../services/endpoints'
import PurchaseNavbar from '../../PurchaseNavbar'
import AddProductRequest from '../../RequestsforQuotation/AddRequestQuotation/AddProductRequest'
import PurchaseAgreeProduct from './PurchaseAgreeProduct'

const AddPurchaseAgreement = () => {
    
    const navigate = useNavigate();
    const [events, setEvents] = useState("Products");
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    const [purchaseRep, setPurchaseRep] = useState("");
    const [agreementType , setAgreementtype] = useState("");
    const [vendor , setVendor] = useState("");
    const [currency , setCurrency] = useState("");
    const [agreeDeadLine , setAgreeDeadLine] = useState("");
    const [orderDate , setOrderDate] = useState("");
    const [deliveryDate , setDeliveryDate] = useState("")
    const [condition , setCondition] = useState("")
    const [sourceDocument , setSourceDocument] = useState("")

    const [allAgreementType , setAllAgreementType] = useState([]);
    const [allVendor , setAllVendor] = useState([]);
    const [allCurrency , setAllCurrency] = useState([]);

    const allAgreementTypeUrl = endpoints.purchaseAgreementtype.allAgreementtype;
    const vendorAllUrl = endpoints.vendors.allVendors;
    const allCurrencyUrl = endpoints.Currency.allCurrency;
    const addAgreementUrl = endpoints.agreementType.addAgreement;

    useEffect(() => {
      const formData = new FormData();
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(allAgreementTypeUrl , formData)
      .then((res) => {
        if(res.data.status === true){
          setAllAgreementType(res.data.data);
        }else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err,"error")
      })
    },[])

    useEffect(() => {
      const formData = new FormData();
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(vendorAllUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            setAllVendor(res.data.data);
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
        .post(allCurrencyUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            setAllCurrency(res.data.data);
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

    const save = () => {
      if(purchaseRep === ""){
        toast("Purchase Representative is required !" ,{type:'warning'})
      }else if(agreementType === ""){
      toast("Agreement Type is required !",{type:'warning'})
      }else if(vendor === ""){
        toast("Vendor is required !",{type:"warning"})
      }else if(currency === ""){
        toast("Currency is required !",{type:"warning"})
      }else if(agreeDeadLine === ""){
        toast("Agreement Deadline is required !",{type:'warning'})
      }else if(orderDate === ""){
        toast("DeadLine is required !",{type:"warning"})
      }else if(deliveryDate === ""){
        toast("Deliver Date is required !",{type:"warning"})
      }else{
        const formData = new FormData()
        formData.append("Purchase_Representative" , purchaseRep)
        formData.append("Agreement_Deadline" , agreeDeadLine);
        formData.append("Agreement_TypeID" , agreementType);
        formData.append("Order_Date" , orderDate);
        formData.append("Vendor_ID" , vendor);
        formData.append("Delivery_Date" , deliveryDate);
        formData.append("Currency" , currency);
        formData.append("Source_Document" , document)
        formData.append("Condition" , condition);
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(addAgreementUrl,formData)
        .then((res) => {
          if(res.data.status === true){
            toast("Purchase Agreement Added Successfully",{type:'success'})
          }else if(res.data.status === false){
            toast(res.data.message,{type:"warning"})
          }
        })
        .catch((err) => {
          console.log(err , "something went wrong")
        })
      }
    }

    //  -------------------------ProductDetails useState-----------------------

const [modalShow , setModalShow] = useState(false)
const [productAll , setProductAll] = useState([]);

const [serialNo , setSerialNo] = useState("")
const [productdet , setProductDet] = useState("")
const [description , setDescription] = useState("")
const [quantity , setQuantity] = useState("")
const [uomdet , setUomdet] = useState("")
const [venId , setVendId] = useState("") 
const [update , setUpdate] = useState("");
const [requestId , setRequestId] = useState("")
const productUrl = endpoints.requestQuotation.getAllproductdetails;
const productDetailsUrl = endpoints.requestQuotation.addProductdetails;
const vendorId = localStorage.getItem("varId");


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
        toast("Product Details Added successfully" ,{type:"success"})
      }else if(res.data.status === false){
        toast(res.data.data ,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"error")
    })
  }

};

// -------------------------Purchase Agreement Update------------------

const locations = useLocation();
const selectedData = locations.state;
console.log(selectedData , "selectedData here");
 
const updatePurchaseAgree = endpoints.agreementType.updateAgreement;

useEffect(() => {
  if(selectedData){
   setUpdate(true);
   setRequestId(selectedData.ID);
   setVendor(selectedData.VENDOR_ID);
   setOrderDate(selectedData.ORDER_DATE);
   setPurchaseRep(selectedData.PURCHASE_REPRESENTATIVE);
   setCurrency(selectedData.PRODUCT_CURRENCY);
   setDeliveryDate(selectedData.DELIVERY_DATE);
   setSourceDocument(selectedData.SOURCE_DOCUMENT);
   setAgreeDeadLine(selectedData.AGREEMENT_DEADLINE);
   setAgreementtype(selectedData.AGREEMENT_TYPE_ID);
   setCondition(selectedData.DEFINE_U_TERMS);
  }
},[])

const updateData = () => {
  if(purchaseRep === ""){
    toast("Purchase Representative is required !" ,{type:'warning'})
  }else if(agreementType === ""){
  toast("Agreement Type is required !",{type:'warning'})
  }else if(vendor === ""){
    toast("Vendor is required !",{type:"warning"})
  }else if(currency === ""){
    toast("Currency is required !",{type:"warning"})
  }else if(agreeDeadLine === ""){
    toast("Agreement Deadline is required !",{type:'warning'})
  }else if(orderDate === ""){
    toast("DeadLine is required !",{type:"warning"})
  }else if(deliveryDate === ""){
    toast("Deliver Date is required !",{type:"warning"})
  }else{
    const formData = new FormData()
    formData.append("ID" , requestId)
    formData.append("Purchase_Representative" , purchaseRep)
    formData.append("Agreement_Deadline" , agreeDeadLine);
    formData.append("Agreement_TypeID" , agreementType);
    formData.append("Order_Date" , orderDate);
    formData.append("Vendor_ID" , vendor);
    formData.append("Delivery_Date" , deliveryDate);
    formData.append("Currency" , currency);
    formData.append("Source_Document" , document)
    formData.append("Condition" , condition);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(updatePurchaseAgree,formData)
    .then((res) => {
      if(res.data.status === true){
        toast("Purchase Agreement Updated Successfully",{type:'success'})
      }else if(res.data.status === false){
        if (res.data.code === 3) {
          toast("Session expired , Please re-login", { type: "warning" });
          navigate("/");
        } else {
          toast(res.data.message, { type: "error" });
        }
      }
    })
    .catch((err) => {
      console.log(err , "something went wrong")
    })
  }
}
// ------------------deleteProductDetails---------------------------

const deleteProductDetailsUrl = endpoints.agreementType.productdeletepurchase;

const deleteItem = (data) => {
  const formData = new FormData();
  formData.append("ID" , data);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);
  axios.post(deleteProductDetailsUrl,formData)
  .then((res) => {
    if(res.data.status === true)
    {
      saveProduct()
        toast("Product deleted Successfully",{type:"success"});
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

const column = [
    {label:"VenID" , name:"VENDOR_ID"},
    {label:"No" , name:"SERIAL_NO"},
    {label:"Product" , name:"PRODUCT_NAME"},
    {label:"Description" , name:"DESCRIPTION"},
    {label:"Quantity" , name:"PRODUCT_QUANTITY"},
    {label:"UOM" , name:"UNIT_OF_MEASUREMENT"},
    {
      label:"Actions",
      name:"ID",
      options:{
          customBodyRender:(value , tableMeta , updateValue) => {
              return(
                  <>
                   <div className="updtdlt">
                  <MdDelete size={23} color="#4f434d"  onClick={() => deleteItem(value)} style={{cursor:"pointer"}}/>
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
        title="Purchase Agreements"
        save={update === true ? updateData : save}
      />
      <div className="addRequestQuoContainer">
        <div className="addRequestCon">
          <div className="requestQuofirst">
            <div className="reqQuotext">
              <p>Purchase Representative</p>
              <select value={purchaseRep} onChange={(e) => setPurchaseRep(e.target.value)}>
                <option value="">Select Any one</option>
                <option value="Accountant-Ryd">Accountant-Ryd</option>
                <option value="Account 02">Account 02</option>
                <option value="CRUH 01">CRUH 01</option>
                <option value="CRUH 02">CRUH 02</option>
                <option value="CRUH 03">CRUH 03</option>
              </select>
            </div>
            <div className="reqQuotext">
              <p>Agreement Type</p>
              <select onChange={(e) => setAgreementtype(e.target.value)} value={agreementType}>
                <option value="">Select Any one</option>
               {allAgreementType.map((item,index) => {
                if(item.DELETE_STATUS != 'X'){
                return(
                  <>
                  <option value={item.ID}>{item.AGREEMENT_TYPE}</option>
                  </>

                )
                }
                
               })}
              </select>
            </div>
            <div className="reqQuotext">
              <p>Vendor</p>
              <select value={vendor} onChange={(e) => setVendor(e.target.value)} disabled={update}>
                <option value="">Select Any one</option>
                {allVendor.map((item, index) => {
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
              <p>Currency</p>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="">Select Any one</option>
                {allCurrency.map((item, index) => {
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
              <p>Agreement Deadline</p>
              <input type="date" value={agreeDeadLine} onChange={(e) => setAgreeDeadLine(e.target.value)}/>
            </div>
            <div className="reqQuotext">
              <p>Ordering Date</p>
              <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)}/>
            </div>
            <div className="reqQuotext">
              <p>Delivery Date</p>
              <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)}/>
            </div>
            <div className="reqQuotext">
              <p>Source Document</p>
              <input type="text" value={sourceDocument} onChange={(e) => setSourceDocument(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item   className={events === "Products" ? "navLinkActive" : "navLinkDeactive"}>
              <Nav.Link href=""  className={events === "Products" ? "navLinkActive" : "navLinkDeactive"} onClick={() => setEvents("Products")}>Products</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
            {events === "Products" && (
                <PurchaseAgreeProduct vendor={vendor} condition={condition} setCondition={setCondition} column={column} productAll={productAll} modalShow={modalShow} setModalShow={setModalShow} saveProduct={saveProduct} setSerialNo={setSerialNo} setProductDet={setProductDet} setDescription={setDescription} setQuantity={setQuantity} setUomdet={setUomdet} setVendId={setVendId} venId={venId}  setVendor={setVendor} serialNo={serialNo} productdet={productdet} description={description} quantity={quantity} uomdet={uomdet}/>
            )} 
            </div>

            
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddPurchaseAgreement