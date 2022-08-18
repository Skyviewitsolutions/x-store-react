import React, { useState } from "react";
import Navebar from "../../components/Navbar/Navbar";
import InventoryProductDetailsMain from "../../components/InventoryProductDetailsMain/InventoryProductDetailsMain";
import ProductDetailsHeader from "../../components/ProductDeatilsHeader/ProductDetailsHeader";
import { Modal } from "react-bootstrap";
import "./AddProduct.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {

  const url = "https://xstore.skyviewads.com/ProductsXM/AddProducts";
  
  const [isEdit, setIsEdit] = useState(false);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("Consumable");
  const [productCategory, setProductCategory] = useState(
    "Filters / PUTZMEISTER"
  );
  const [units, setUnits] = useState("Barell");
  const [cost, setCost] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [interRef, setInterRef] = useState("");
  const [customerTax, setCustomerTax] = useState("");
  const [description, setDescription] = useState("");

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
      />

      {/* <Modal show={true}>
           <div className="modalCont">

           </div>
        </Modal> */}
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
