import React ,{useState,useEffect} from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import ProductDetailsHeader from '../../../components/ProductDeatilsHeader/ProductDetailsHeader';
import InventoryProductDetailsMain from '../../../components/InventoryProductDetailsMain/InventoryProductDetailsMain';
import InventoryProductDetailsFooter from '../../../components/InventoryProductDetailsFooter/InventoryProductDetailsFooter';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import {endpoints} from "../../../services/endpoints";
import { ToastContainer, toast } from "react-toastify";


const InventoryProductDetails = () => {

   const [isEdit , setIsEdit] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   const productdetails = location.state;

   console.log(productdetails , "productDetails here")

  //  all usestate data here ;
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("Consumable");
  const [productCategory, setProductCategory] = useState("");
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
  const [files , setFiles] = useState("");
  const [productImg , setProductImg] = useState("");
  const [productBrand  , setProductBrand] = useState("");
  const [prodcuctCode , setProductCode] = useState("")

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
   const updateUrl = endpoints.products.updateProduct;



   useEffect(() =>{

    setProductName(productdetails.PRODUCT_NAME)
    setId(productdetails.PRODUCT_ID)
    setProductType(productdetails.PRODUCT_TYPE)
    setSold(productdetails.PRODUCT_SOLD)
    setPurchased(productdetails.PRODUCT_BUY)
    setExpensed(productdetails.PRODUCT_EXPENDED)
    setDeduction(productdetails.PRODUCT_DEDUCTION)
    setUnits(productdetails.UNIT_OF_MEASURE)
    setProductBrand(productdetails.PRODUCT_BRAND)
    setProductCategory(productdetails.PRODUCT_CATEGORY);
    setCost(productdetails.COST_PRICE)
    setSalesPrice(productdetails.SALES_PRICE)
    setCustomerTax(productdetails.CUSTOMER_TAXES)
    setProductCode(productdetails.PRODUCT_CODE)
    setDescription(productdetails.INTERNAL_NOTES)
    setUnitOfMeasurement(productdetails.UNIT_OF_MEASURE)
    setPurchaseUnitOfMeasurement(productdetails.PURCHASE_UOM)
    setWeight(productdetails.PRODUCT_WEIGHT)
    setVolume(productdetails.PRODUCT_VOLUME)
    setBuy(productdetails.PRODUCT_BUY)
    setReplenishOnOrder(productdetails.REPLENISH_ON_ORDER)
    setCustomerLeadTime(productdetails.CUSTOMER_LEAD_TIME)
    setDescriptionDeliveryOrder(productdetails.DESCIBTION_DETAIL_ORDER)
    setDescriptionForReceipt(productdetails.DESCRIPTION_FOR_RECEIPTS)
    setDescriptionInternalTranser(productdetails.DISCRIPTION_FOR_IT)
    setPriceDifference(productdetails.PRICE_DIFFERENCE)
    setIncomeAccount(productdetails.INCOME_ACCOUNT)
    setExpenceAccount(productdetails.EXPENSE_ACCOUNT)
    setAssetType(productdetails.EXPENSE_TYPE)
    setProductImg(productdetails.PRODUCT_IMAGE);
  },[productdetails])
   


  const updateData = () =>{

    if (productName === "") {
      toast("Product name required !", { type: "warning" });
    } else if(files === ""){
      toast("Product Image is required!",{type:"warning"});
    }else if (cost === "") {
      toast("Cost is required !", { type: "warning" });
    } else if (salesPrice === "") {
      toast("Sales Price is reqiured !", { type: "warning" });
    } else if (units === "") {
      toast( "units field is required !", { type: "warning" });
    } else if (customerTax === "") {
      toast("Customer Tax is required", { type: "warning" });
    } 
    else if(customerLeadTime === ""){
      toast("Customer lead time is required" , {type : "warning"})
    }
   
    else {
      const formData = new FormData();
      formData.append("Product_Name",productName)
      formData.append("Product_Type", productType);
      formData.append("Product_Category", productCategory);
      formData.append("units", units);
      formData.append("Cost", cost);
      formData.append("Sales_Price", salesPrice);
      formData.append("internal_Reference", interRef);
      formData.append("Customer_Taxes", customerTax);
      formData.append("Internal_Notes", description);
      formData.append('Unit_Of_Measure' , unitOfMeasurement)
      formData.append('Purchase_UOM' , purchaseUnitOfMeasuremnt)
      formData.append('Weight' , weight)
      formData.append('Volume' , volume)
      formData.append('Buy' , buy)
      formData.append('Replenish_On_Order' , replenishOnOrder)
      formData.append('Customer_Lead_Time' , customerLeadTime)
      formData.append('Description_for_Delivery_Order' , descriptionDeliveryOrder)
      formData.append('Description_for_Receipts' , descriptionForReceipt)
      formData.append('Description_for_Internal_Transfer' , descriptionInternalTranser)
      formData.append("Income_Account" , incomeAccount)
      formData.append('Expense_Account' ,expenseAccount)
      formData.append("Expense_Type" , assetType)
      formData.append('Price_Difference' , priceDifference)
      formData.append('Account' , account);
      formData.append('Sold' , sold)
      formData.append('Purchase' , purchased)
      formData.append('Expensed' , expensed)
      formData.append('Purchase' , purchased)
      formData.append('Deduction' , deduction)
      formData.append('ChooseFile' , files);
      formData.append('ID' , id)
      formData.append("User_Authorization" , getAuthtoken);
      formData.append("User_AuthKey" , userAuth);
       
      axios
        .post(updateUrl, formData)
        .then((res) => {
          console.log(res, "response");
          if(res.data.status === true){
            toast("Product Updated Successfully" , {type : "success"})
          }
          else if(res.data.status === false){
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
           sold= {JSON.parse(sold)}
           purchased={JSON.parse(purchased)}
           expensed={JSON.parse(expensed)}
           deduction={JSON.parse(deduction)}
           productType={productType}
           productCategory={productCategory}
           productBrand={productBrand}
           interRef = {interRef}
           salesPrice = {salesPrice}
           customerTax = {customerTax}
           cost = {cost}
           unitOfMeasurement={unitOfMeasurement}
           setPriceDifference={setPriceDifference}
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
           assetType = {assetType}
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
           setBuy={setBuy}
           prodcuctCode={prodcuctCode}
           setReplenishOnOrder={setReplenishOnOrder}
           setCustomerLeadTime={setCustomerLeadTime}
           setDescriptionDeliveryOrder={setDescriptionDeliveryOrder}
           setDescriptionForReceipt={setDescriptionForReceipt}
           setDescriptionInternalTranser={ setDescriptionInternalTranser}
           setIncomeAccount={setIncomeAccount}
           setExpenceAccount={setExpenceAccount}
           setAssetType={setAssetType}
           setProductBrand={setProductBrand}
           productImg={productImg}
           setProductImg={setProductImg}
           files={files}
           setFiles={setFiles}
        />

        <ToastContainer />
        {/* <InventoryProductDetailsFooter /> */}
    </div>
  )
}

export default InventoryProductDetails