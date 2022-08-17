import React, { useState } from "react";
import Navebar from "../../components/Navbar/Navbar";
import InventoryProductDetailsMain from "../../components/InventoryProductDetailsMain/InventoryProductDetailsMain";
import ProductDetailsHeader from "../../components/ProductDeatilsHeader/ProductDetailsHeader";
import { Modal } from "react-bootstrap";
import "./AddProduct.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

  const [isEdit, setIsEdit] = useState(false);

  const url = "https://xstore.skyviewads.com/ProductsXM/AddProducts";

  const [productName , setProductName] = useState('');
  const [productType , setProductType] = useState('');
  const [productCategory ,setProductCategory] = useState('');
  const [units , setUnits] = useState('');
  const [cost , setCost] = useState('');
  const [salesPrice , setSalesPrice] = useState('');
  const [interRef , setInterRef] = useState('');
  const [customerTax , setCustomerTax] = useState('');
  const [description , setDescription] = useState('');

  const formData = new FormData();

  formData.append('ProductName' , productName);
  formData.append('ProductType' , productType);
  formData.append('ProductCategory' , productCategory);
  formData.append('units' , units);
  formData.append('cost' , cost);
  formData.append('SalesPrice' , salesPrice);
  formData.append('InterRef' , interRef);
  formData.append('CustomerTax' , customerTax);
  formData.append('description' , description);
  const save = () => 
 {
    // setIsEdit(false);
    axios.post(url,formData)
    .then((res) => {
      console.log(res,"response");
    })
    .catch((err) => {
      console.log(err,"error");
    })
    toast('Hello World',{type : 'warning'});
  };

  return (
    <div>
      <Navebar showBelowMenu={false} />
      <ProductDetailsHeader isEdit={isEdit} setIsEdit={setIsEdit} save={save} />
      <InventoryProductDetailsMain isEdit={isEdit}
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
      setSalesPrice = {setSalesPrice}
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
        <ToastContainer/>
    </div>
  );
};

export default AddProduct;
