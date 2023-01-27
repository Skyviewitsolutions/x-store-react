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
import './AddPurchaseAgreement.css'
import { FiEdit } from 'react-icons/fi'

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
    const [pAId , setPAID] = useState("")
    const [update , setUpdate] = useState("")

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
          var val = res.data.data;
          const filterAgreementType = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
          })
          setAllAgreementType(filterAgreementType);
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
            var val = res.data.data;
            const filterVendors = val.filter((itm,ind) => {
              return itm.VENDOR_STATUS != "X"
            })
            setAllVendor(filterVendors);
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
        formData.append("Source_Document" , sourceDocument)
        formData.append("Condition" , condition);
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(addAgreementUrl,formData)
        .then((res) => {
          if(res.data.status === true){
            toast("Purchase Agreement Added Successfully",{type:'success'})
            setTimeout(() => {
              navigate('/PurchaseAgreement')
            }, 1000);
          }else if(res.data.status === false){
            toast(res.data.message,{type:"warning"})
          }
        })
        .catch((err) => {
          console.log(err , "something went wrong")
        })
      }
    }

// -------------------------Purchase Agreement Update------------------

const locations = useLocation();
const selectedData = locations.state;
console.log(selectedData , "selectedData here");
 
const updatePurchaseAgree = endpoints.agreementType.updateAgreement;

useEffect(() => {
  if(selectedData){
   setUpdate(true);
   setPAID(selectedData.ID);
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
    formData.append("ID" , pAId)
    formData.append("Purchase_Representative" , purchaseRep)
    formData.append("Agreement_Deadline" , agreeDeadLine);
    formData.append("Agreement_TypeID" , agreementType);
    formData.append("Order_Date" , orderDate);
    formData.append("Vendor_ID" , vendor);
    formData.append("Delivery_Date" , deliveryDate);
    formData.append("Currency" , currency);
    formData.append("Source_Document" , sourceDocument)
    formData.append("Condition" , condition);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(updatePurchaseAgree,formData)
    .then((res) => {
      if(res.data.status === true){
        toast("Purchase Agreement Updated Successfully",{type:'success'})
        setTimeout(() => {
          navigate('/PurchaseAgreement')
        }, 1000);
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



//  -------------------------ProductDetails useState-----------------------

const [modalShow , setModalShow] = useState(false)
const [productAll , setProductAll] = useState([]);
const [singleProduct , setSingleProduct] = useState([])

const [productdet , setProductDet] = useState("")
const [description , setDescription] = useState("")
const [quantity , setQuantity] = useState("")
const [uomdet , setUomdet] = useState("")


const [selectedProductsId , setSelectedProductsId] = useState("")
const [updateProductDetails , setUpdateProductDetails] = useState(false)

const productDetailsUrl = endpoints.agreementType.allProductDetails;
const addProductUrl = endpoints.agreementType.addProductdetailsPurchase;

const singleProductUrl = endpoints.agreementType.singleProductDetails;

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
    formData.append("PA_ID" ,pAId);
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
  console.log(pAId,"jbkjbk")
  if(pAId){
    getSingleProduct()
  }else{
    getAllproductdetails()
  }
 
},[pAId])



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
    formData.append("Discription" , description);
    formData.append("Qty" , quantity);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(addProductUrl , formData)
    .then((res) => {
      console.log(res,":nscjk")
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

  console.log("vsahd")
};

// ------------------deleteProductDetails---------------------------

const deleteProductDetailsUrl = endpoints.requestQuotation.deleteProductdetails;

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

const updateProductDetailsUrl = endpoints.agreementType.updateProductDetails;
 const handleUpdate = (id) => {
  console.log(id)
  console.log(singleProduct , "proeuc")
  var selectedProductsList = singleProduct.filter((itm,ind) => {
    return itm.ID === id
  })
  console.log(selectedProductsList,"csdf")
  setModalShow(true)
  setSelectedProductsId(id)
  selectedProductsList = selectedProductsList[0];
  setProductDet(selectedProductsList.PRODUCT_ID
    );
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
  formData.append("Discription" , description);
  formData.append("Qty" , quantity);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);
  axios.post(updateProductDetailsUrl,formData)
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
    title="Purchase Agreements"
    save={update === true ? updateData : save} 
    showCanelBtn={true}
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
                <PurchaseAgreeProduct vendor={vendor}  column={column} productAll={productAll} modalShow={modalShow} setModalShow={setModalShow} saveProduct={saveProduct} setProductDet={setProductDet} setDescription={setDescription} setQuantity={setQuantity} setUomdet={setUomdet}   setVendor={setVendor}  productdet={productdet} description={description} quantity={quantity} uomdet={uomdet} deleteItem={deleteItem} updateSelectedProductList={updateSelectedProductList} updateProductDetails={updateProductDetails} column2={column2} pAId={pAId} singleProduct={singleProduct} setSingleProduct={setSingleProduct}/>
            )} 
            </div>

            
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddPurchaseAgreement