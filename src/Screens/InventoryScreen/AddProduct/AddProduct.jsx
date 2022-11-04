import React, { useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import InventoryProductDetailsMain from "../../../components/InventoryProductDetailsMain/InventoryProductDetailsMain";
import ProductDetailsHeader from "../../../components/ProductDeatilsHeader/ProductDetailsHeader";
import { Modal } from "react-bootstrap";
import "./AddProduct.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from "../../../services/endpoints";

const AddProduct = () => {

  const url = endpoints.products.addProduct;
  
  const [isEdit, setIsEdit] = useState(true);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("Consumable");
  const [productCategory, setProductCategory] = useState("");
  const [sold , setSold] = useState(false)
  const [purchased , setPurchased] = useState(false)
  const [expensed , setExpensed] = useState(false);
  const [deduction , setDeduction] = useState(false)
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
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  


  const save = () => {
    if (productName === "") {
      toast("Product name required !", { type: "warning" });
    } else if (cost === "") {
      toast("Cost is required !", { type: "warning" });
    } else if (salesPrice === "") {
      toast("Sales Price is reqiured !", { type: "warning" });
    } else if (units === "") {
      toast("units field is required !", { type: "warning" });
    } else if (customerTax === "") {
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
  formData.append('ChooseFile' , files);
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
            toast(res.data.message , {type : "error"});
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
        setFiles={setFiles}
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
