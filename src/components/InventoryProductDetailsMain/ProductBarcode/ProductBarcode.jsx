import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { endpoints } from '../../../services/endpoints';
import CustomTable from '../../CustomTable/CustomTable';
import Barcode from '../../Model/BarcodeModal/Barcode'
import './ProductBarcode.css'

const ProductBarcode = (props) => {

     const navigate = useNavigate()
     const {productId} = props;
     const [modalShow , setModalShow] = useState(false);
     const userAuth = localStorage.getItem("userAuth");
     const getAuthtoken = localStorage.getItem("authtoken");
     
     const [proBarcodeAll , setProBarcodeAll] = useState([])
     const [singleProBarcode , setSingleProBarcode] = useState([])
     const [allBarcode , setAllBarcode] = useState([])

     const allProductBarcodeUrl = endpoints.products.ProductBarcodeAll;
     const singleProductBarcodeUrl = endpoints.products.ProductBarcodeSingle;

     const getProBarcode = () => {
      const formData = new FormData()
     formData.append("User_Authorization" , getAuthtoken);
     formData.append("User_AuthKey" , userAuth);
     axios.post(allProductBarcodeUrl,formData)
     .then((res) => {
      console.log(res,"all here")
      if(res.data.status === false){
        setSingleProBarcode(res.data.data)
      }else if(res.data.status === false){
        if(res.data.code === 3){
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
      }
     })
     .catch((err) => {
      console.log(err, "error");
      toast("something went wrong" , {type : "error"})
    });
     }
     const getSingleBarcode = () => {
      const formData = new FormData()
     formData.append("User_Authorization" , getAuthtoken);
     formData.append("User_AuthKey" , userAuth);
     formData.append("Product_ID",productId)
     axios.post(singleProductBarcodeUrl,formData)
     .then((res) => {
      console.log(res,"single data")
      if(res.data.status === false){
        setAllBarcode(res.data.data)
      }else if(res.data.status === false){
        if(res.data.code === 3){
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        toast(res.data.message,{type:"error"})
      }
     })
     .catch((err) => {
      console.log(err, "error");
      toast("something went wrong" , {type : "error"})
    });
     }

     useEffect(() => {
      if(productId != ""){
        getProBarcode()
      }
       getSingleBarcode()
     },[])

     const column = [
      {label:"Barcode" , name:"BARCODE"},
      {label:"Barcode Description" , name:"BARCODE_DESCRIPTION"},
      {label:"UOM" , name:"UOM"}
     ]
     const column2 = [
      {label:"Barcode" , name:"BARCODE"},
      {label:"Barcode Description" , name:"BARCODE_DESCRIPTION"},
      {label:"UOM" , name:"UNIT_OF_MEASUREMENT"}
     ]

     

  return (
    <div>
       <div className="barcode_container">
        {productId != "" ? <CustomTable data={allBarcode} column={column} /> :<CustomTable data={singleProBarcode} column={column2}/> }
        <button className='barcode_btn' onClick={() => setModalShow(true)}>Add Line</button>
        <Barcode modalShow={modalShow} setModalShow={setModalShow} proBarcodeAll={proBarcodeAll} setProBarcodeAll={setProBarcodeAll} getSingleBarcode={getSingleBarcode} {...props}/>
        </div> 
        <ToastContainer/>
    </div>
  )
}

export default ProductBarcode