import React, { useState } from 'react'
import { endpoints } from '../../../services/endpoints';
import Barcode from '../../Model/BarcodeModal/Barcode'
import './ProductBarcode.css'

const ProductBarcode = (props) => {

     const {productId} = props;
     const [modalShow , setModalShow] = useState(false);
     const userAuth = localStorage.getItem("userAuth");
     const getAuthtoken = localStorage.getItem("authtoken");
     
     const [proBarcodeAll , setProBarcodeAll] = useState([])
     const [singleProBarcode , setSingleProBarcode] = useState([])

     const allProductBarcodeUrl = endpoints.products.proBarcode.allProductBrand
     const singleProductBarcodeUrl = endpoints.products.proBarcode.singleProBarcode;

     


  return (
    <div>
       <div className="barcode_container">
        <button className='barcode_btn' onClick={() => setModalShow(true)}>Add Line</button>
        <Barcode modalShow={modalShow} setModalShow={setModalShow}/>
        </div> 
    </div>
  )
}

export default ProductBarcode