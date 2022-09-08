import React ,{useState,useEffect} from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import ProductDetailsHeader from '../../../components/ProductDeatilsHeader/ProductDetailsHeader';
import InventoryProductDetailsMain from '../../../components/InventoryProductDetailsMain/InventoryProductDetailsMain';
import InventoryProductDetailsFooter from '../../../components/InventoryProductDetailsFooter/InventoryProductDetailsFooter';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {endpoints} from "../../../services/endpoints";
import { ToastContainer, toast } from "react-toastify";



const InventoryProductDetails = () => {

   const [isEdit , setIsEdit] = useState(false);
   const location = useLocation();
   const productdetails = location.state;

  //  all usestate data here ;
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("Consumable");
  const [productCategory, setProductCategory] = useState(
    "Filters / PUTZMEISTER");
  const [sold , setSold] = useState(false)
  const [purchased , setPurchased] = useState(false)
  const [expensed , setExpensed] = useState(false);
  const [deduction , setDeduction] = useState(false)
  const [id , setId] = useState("");
  const [units, setUnits] = useState("Barell");
  const [cost, setCost] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [interRef, setInterRef] = useState("");
  const [customerTax, setCustomerTax] = useState("");
  const [description, setDescription] = useState("");
  const [unitOfMeasurement , setUnitOfMeasurement] = useState("meter");
  const [purchaseUnitOfMeasuremnt , setPurchaseUnitOfMeasurement] = useState("unit");
  const [weight , setWeight] = useState("0");
  const [volume , setVolume] = useState("0");
  const [buy , setBuy] = useState(false)
  const [replenishOnOrder , setReplenishOnOrder] = useState(false)
  const [customerLeadTime , setCustomerLeadTime] = useState("");
  const [descriptionDeliveryOrder , setDescriptionDeliveryOrder] = useState("");
  const [descriptionInternalTranser , setDescriptionInternalTranser] = useState("")
  const [descriptionForReceipt , setDescriptionForReceipt] = useState("")
  const [incomeAccount , setIncomeAccount] = useState("0")
  const [expenseAccount , setExpenceAccount] = useState("SBI")
  const [assetType , setAssetType] = useState("110601001 مخزون قطع غيار")
  const [priceDifference , setPriceDifference] = useState("110306001 ضريبة القيمة المضافة على المشتريات")
  const [account , setAccount] = useState("110306001 ضريبة القيمة المضافة على المشتريات");
  const [img , setImg] = useState("");

   console.log(productdetails , "produtDetails");
  
   const updateUrl = endpoints.products.updateProduct;

   useEffect(() =>{
    setProductName(productdetails.PRODUCT_NAME)
    setId(productdetails.PRODUCT_ID)
    setProductType(productdetails.PRODUCT_TYPE)
    setSold(productdetails.SOLD)
    setPurchased(productdetails.PERCHASED)
    setExpensed(productdetails.EXPENDED)
    setDeduction(productdetails.DEDUCTION)
    setUnits(productdetails.UNITS_MEASUREMENT)
    setCost(productdetails.PRODUCT_COST)
    setSalesPrice(productdetails.SALE_PRICE)
    setInterRef(productdetails.INTERNAL_REFERENCE)
    setCustomerTax(productdetails.CUSTOMER_TAX)
    setDescription(productdetails.DESCRIBTION)
    setUnitOfMeasurement(productdetails.UNITS_MEASUREMENT)
    setPurchaseUnitOfMeasurement(productdetails.PURCHASE_UNITS)
    setWeight(productdetails.WEIGHT)
    setVolume(productdetails.VALUME)
    setBuy(productdetails.BUY)
    setReplenishOnOrder(productdetails.REPLENISH_ON_ORDER)
    setCustomerLeadTime(productdetails.CUSTOMER_TIME)
    setDescriptionDeliveryOrder(productdetails.DESCIBTION_DETAIL_ORDER)
    setDescriptionForReceipt(productdetails.DESCRIBTION_REC)
    setDescriptionInternalTranser(productdetails.DESCRIBTION_TRANS)
    setIncomeAccount(productdetails.INCOME_ACCOUNT)
    setExpenceAccount(productdetails.EXPENCE_ACCOUNT)
    setAssetType(productdetails.EXPENCE_TYPE)
  },[productdetails])
   
   const formData = new FormData();

  formData.append("productName",productName)
  formData.append("productType", productType);
  formData.append("productCategory", productCategory);
  formData.append("units", units);
  formData.append("cost", cost);
  formData.append("sales_price", salesPrice);
  formData.append("internal_Reference", interRef);
  formData.append("customer_tax", customerTax);
  formData.append("description", description);
  formData.append('unit_of_measurement' , unitOfMeasurement)
  formData.append('purchase_unit_of_measurement' , purchaseUnitOfMeasuremnt)
  formData.append('weight' , weight)
  formData.append('volume' , volume)
  formData.append('buy' , buy)
  formData.append('replenish_on_order' , replenishOnOrder)
  formData.append('customer_lead_time' , customerLeadTime)
  formData.append('description_for_delivery_order' , descriptionDeliveryOrder)
  formData.append('description_for_receipts' , descriptionForReceipt)
  formData.append('description_for_internal_transfer' , descriptionInternalTranser)
  formData.append("income_account" , incomeAccount)
  formData.append('expense_account' ,expenseAccount)
  formData.append("asset_type" , assetType)
  formData.append('price_differnce' , priceDifference)
  formData.append('account' , account);
  formData.append('sold' , sold)
  formData.append('perchased' , purchased)
  formData.append('expended' , expensed)
  formData.append('perchased' , purchased)
  formData.append('deduction' , deduction)
  formData.append('id' , id)
   
  const updateData = () =>{
    if (productName === "") {
      toast("Product name required !", { type: "warning" });
    } else if (cost === "") {
      toast("Cost is required !", { type: "warning" });
    } else if (salesPrice === "") {
      toast("Sales Price is reqiured !", { type: "warning" });
    } else if (interRef === "") {
      toast("InterRef field is required !", { type: "warning" });
    } else if (customerTax === "") {
      toast("Customer Tax is required", { type: "warning" });
    } 
    else if(customerLeadTime === ""){
      toast("Customer lead time is required" , {type : "warning"})
    }
   
    else {
      axios
        .post(updateUrl, formData)
        .then((res) => {
          console.log(res, "response");
          if(res.data.status === true){
            toast("Product Updated Successfully" , {type : "success"})
          }
          else if(res.data.status === false){
            toast(res.data.message , {type : "error"});
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong" , {type : "error"})
        });
    }
  }

  return (
    <div>
        <Navebar />
        <ProductDetailsHeader isEdit={isEdit} setIsEdit={setIsEdit} name={productdetails.PRODUCT_NAME}  save={updateData}/>
        
        <InventoryProductDetailsMain isEdit={isEdit} 
           productName = {productName}
           sold= {sold}
           purchased={purchased}
           expensed={expensed}
           deduction={deduction}
           productType={productType}
           productCategory={productCategory}
           interRef = {interRef}
           salesPrice = {salesPrice}
           customerTax = {customerTax}
           cost = {cost}
           unitOfMeasurement={unitOfMeasurement}
           purchaseUnitOfMeasuremnt={purchaseUnitOfMeasuremnt}
           description ={description}
           buy={buy}
           replenishOnOrder={replenishOnOrder}
           customerLeadTime={customerLeadTime}
           weight={weight}
           volume={volume}
           descriptionDeliveryOrder={descriptionDeliveryOrder}
           descriptionForReceipt={descriptionForReceipt}
           descriptionInternalTranser={descriptionInternalTranser}
           incomeAccount = {incomeAccount}
           expenseAccount={expenseAccount}
           assetType = { assetType}
           priceDifference = {priceDifference}
           setProductName={setProductName}
           setProductType={setProductType}
           setSold={setSold}
           setPurchase={setPurchased}
           setExpensed={setExpensed}
           setDeduction={setDeduction}
           setUnits={setUnits}
           setCost={setCost}
           setSalesPrice={setSalesPrice}
           setInterRef={setInterRef}
           setCustomerTax={setCustomerTax}
           setDescription={setDescription}
           setUnitOfMeasurement={setUnitOfMeasurement}
           setPurchaseUnitOfMeasurement={setPurchaseUnitOfMeasurement}
           setWeight={setWeight}
           setVolume={setVolume}
           setBuy={ setBuy}
           setReplenishOnOrder={setReplenishOnOrder}
           setCustomerLeadTime={setCustomerLeadTime}
           setDescriptionDeliveryOrder={setDescriptionDeliveryOrder}
           setDescriptionForReceipt={setDescriptionForReceipt}
           setDescriptionInternalTranser={ setDescriptionInternalTranser}
           setIncomeAccount={setIncomeAccount}
           setExpenceAccount={setExpenceAccount}
           setAssetType={setAssetType}
        />
        <ToastContainer />
        {/* <InventoryProductDetailsFooter /> */}
    </div>
  )
}

export default InventoryProductDetails