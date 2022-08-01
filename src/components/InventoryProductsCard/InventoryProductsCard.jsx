import React from 'react'
import './ProductsCard.css'
import {TbCameraPlus}  from 'react-icons/tb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Camera from '../../assets/Images/camera.png';
import { useNavigate } from 'react-router-dom';
const InventoryProductsCard = () => {
  const navigate = useNavigate();
  const redirectToProductdetails = () => {
     navigate('/InventoryProductsDetails')
  }
  return (
    <div className="ProductsContainer" onClick={redirectToProductdetails}>
    <div className="ProductsCamera">
        <img src={Camera}  alt="camera"/>
    </div>
    <div className="ProductContent">
      <h6>AIC ATLAS 97 G COMORESSOR</h6>
      <p>Price: 1.0000 SAR</p>
     <p>On hand: 0.000 Units</p>
     
    </div>
    </div>
  )
}

export default InventoryProductsCard

