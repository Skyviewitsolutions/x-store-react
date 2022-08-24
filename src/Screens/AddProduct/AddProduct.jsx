import React, { useState } from "react";
import Navebar from "../../components/Navbar/Navbar";
import InventoryProductDetailsMain from "../../components/InventoryProductDetailsMain/InventoryProductDetailsMain";
import ProductDetailsHeader from "../../components/ProductDeatilsHeader/ProductDetailsHeader";
import { Modal } from "react-bootstrap";
import "./AddProduct.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ProductCategoryPopup from "../../components/Model/AllPopupProductCategory/ProductCategoryPopup";

const AddProduct = () => {

  const url = "https://xstore.skyviewads.com/ProductsXM/AddProducts";
  
  const [isEdit, setIsEdit] = useState(false);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("Consumable");
  const [productCategory, setProductCategory] = useState(
    "Filters / PUTZMEISTER"
  );
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
  const [account , setAccount] = useState("");
  const [img , setImg] = useState("");



  const formData = new FormData();

  formData.append("ProductName", productName);
  formData.append("ProductType", productType);
  formData.append("ProductCategory", productCategory);
  formData.append("units", units);
  formData.append("cost", cost);
  formData.append("SalesPrice", salesPrice);
  formData.append("InterRef", interRef);
  formData.append("CustomerTax", customerTax);
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


  const save = () => {
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
    } else {
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res, "response");
        })
        .catch((err) => {
          console.log(err, "error");
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
        setProductcategory={setProductCategory}
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
        img={img}
        setImg={setImg}
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
