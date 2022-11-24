import React, { useEffect, useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import InventoryProductDetailsMain from "../../../components/InventoryProductDetailsMain/InventoryProductDetailsMain";
import ProductDetailsHeader from "../../../components/ProductDeatilsHeader/ProductDetailsHeader";
import { Modal } from "react-bootstrap";
import "./AddProduct.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from "../../../services/endpoints";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {

  const navigate = useNavigate();
  const url = endpoints.products.addProduct;
  
  const [isEdit, setIsEdit] = useState(true);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [sold , setSold] = useState(false)
  const [purchased , setPurchased] = useState(false)
  const [expensed , setExpensed] = useState(false);
  const [deduction , setDeduction] = useState(false)
  const [units, setUnits] = useState("");
  const [cost, setCost] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [interRef, setInterRef] = useState("");
  const [customerTax, setCustomerTax] = useState("");
  const [description, setDescription] = useState("");
  const [unitOfMeasurement , setUnitOfMeasurement] = useState("");
  const [purchaseUnitOfMeasuremnt , setPurchaseUnitOfMeasurement] = useState("");
  const [weight , setWeight] = useState("");
  const [volume , setVolume] = useState("");
  const [buy , setBuy] = useState(false)
  const [replenishOnOrder , setReplenishOnOrder] = useState(false)
  const [customerLeadTime , setCustomerLeadTime] = useState("");
  const [descriptionDeliveryOrder , setDescriptionDeliveryOrder] = useState("");
  const [descriptionInternalTranser , setDescriptionInternalTranser] = useState("")
  const [descriptionForReceipt , setDescriptionForReceipt] = useState("")
  const [incomeAccount , setIncomeAccount] = useState("")
  const [expenseAccount , setExpenceAccount] = useState("")
  const [assetType , setAssetType] = useState("")
  const [priceDifference , setPriceDifference] = useState("")
  const [barcode , setBarcode] = useState("");
  const [account , setAccount] = useState("");
  const [files , setFiles] = useState("");
  const [productBrand  , setProductBrand] = useState("");
  const [productImg , setProductImg] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [uniqueCode , setUniqueCode] = useState("");
  const [productCatCode , setProductCatCode] = useState("");
  


  const productCodeUrl = "https://xstore.skyviewads.com/ProductManagement/ProductManagement/Code";
   
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
     axios.post(productCodeUrl,formData)
     .then((res) => {
      if(res.data.status === true){
        setUniqueCode(res.data.Present_Key)
      }else if(res.data.status === false){
        toast(res.data.message,{type:"error"})
      }
     })
     .catch((err) => {
      console.log(err , "error")
     })
  },[])

  const save = () => {
    if (productName === "") {
      toast("Product name required !", { type: "warning" });
    } else if (cost === "") {
      toast("Cost is required !", { type: "warning" });
    } else if (salesPrice === "") {
      toast("Sales Price is reqiured !", { type: "warning" });
    }  else if (customerTax === "") {
      toast("Customer Tax is required", { type: "warning" });
    } 
    else if(customerLeadTime === ""){
      toast("Customer lead time is required" , {type : "warning"})
    }
   
    else {

      const formData = new FormData();

  formData.append("Product_Name", productName);
  formData.append("Product_Type", productType);
  formData.append("Product_Category", productCategory);
  formData.append('Product_Brand' , productBrand);
  formData.append("units", units);
  formData.append("Cost", cost);
  formData.append("Sales_Price", salesPrice);
  formData.append("internal_Reference", interRef);
  formData.append("Customer_Taxes", customerTax);
  formData.append("description", description);
  formData.append('Unit_Of_Measure' , unitOfMeasurement)
  formData.append('Purchase_UOM' , purchaseUnitOfMeasuremnt)
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
  formData.append('Sold' , sold)
  formData.append('Purchase' , purchased)
  formData.append('Expensed' , expensed)
  formData.append('perchased' , purchased)
  formData.append('Deduction' , deduction)
  formData.append('Product_Code' ,uniqueCode + productCatCode);
  formData.append('ChooseFile' , files);
  formData.append("Barcode" , barcode);
  formData.append("Present_Key" , uniqueCode);
  formData.append("User_Authorization" , getAuthtoken);
  formData.append("User_AuthKey" , userAuth);
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res, "response");
          if(res.data.status === true){
            toast("Product Added Successfully" , {type : "success"})
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
  };

  

  return (
    <div>
      <Navebar showBelowMenu={false} />
      <ProductDetailsHeader isEdit={isEdit} setIsEdit={setIsEdit} save={save} />
      <InventoryProductDetailsMain
        isEdit={isEdit}
        productName={productName}
        setProductName={setProductName}
        productType={productType}
        setProductType={setProductType}
        productCategory={productCategory}
        setProductCategory={setProductCategory}
        units={units}
        setUnits={setUnits}
        cost={cost}
        setCost={setCost}
        salesPrice={salesPrice}
        setSalesPrice={setSalesPrice}
        interRef={interRef}
        setInterRef={setInterRef}
        customerTax={customerTax}
        setCustomerTax={setCustomerTax}
        description={description}
        setDescription={setDescription}
        sold={sold}
        uniqueCode={uniqueCode}
        setSold={setSold}
        purchased={purchased}
        setPurchased={setPurchased}
        setExpensed={setExpensed}
        expensed={expensed}
        deduction={deduction}
        setDeduction={setDeduction}
        unitOfMeasurement={unitOfMeasurement}
        setUnitOfMeasurement={setUnitOfMeasurement}
        purchaseUnitOfMeasuremnt={purchaseUnitOfMeasuremnt}
        setPurchaseUnitOfMeasurement={setPurchaseUnitOfMeasurement}
        weight={weight}
        setWeight={setWeight}
        volume={volume}
        setVolume={setVolume}
        buy={buy}
        setBuy={setBuy}
        replenishOnOrder={replenishOnOrder}
        setReplenishOnOrder={setReplenishOnOrder}
        customerLeadTime={customerLeadTime}
        setCustomerLeadTime={setCustomerLeadTime}
        descriptionDeliveryOrder={descriptionDeliveryOrder}
        setDescriptionDeliveryOrder={setDescriptionDeliveryOrder}
        descriptionInternalTranser={descriptionInternalTranser}
        setDescriptionInternalTranser={setDescriptionInternalTranser}
        descriptionForReceipt={descriptionForReceipt}
        setDescriptionForReceipt={setDescriptionForReceipt}
        incomeAccount={incomeAccount}
        setIncomeAccount={setIncomeAccount}
        expenseAccount={expenseAccount}
        setExpenceAccount={setExpenceAccount}
        assetType={assetType}
        setAssetType={setAssetType}
        priceDifference={priceDifference}
        setPriceDifference={setPriceDifference}
        account={account}
        setAccount={setAccount}
        files={files}
        barcode={barcode}
        setBarcode={setBarcode}
        setFiles={setFiles}
        setProductCatCode={setProductCatCode}
        productImg={productImg}
        setProductImg={setProductImg}
        productCatCode={productCatCode}
        productBrand={productBrand}
        setProductBrand={setProductBrand}
      />

      {/* <Modal show={true}>
           <div className="modalCont">

           </div>
        </Modal> */}
      <ToastContainer />
      {/* <ProductCategoryPopup /> */}
    </div>
  );
};

export default AddProduct;
