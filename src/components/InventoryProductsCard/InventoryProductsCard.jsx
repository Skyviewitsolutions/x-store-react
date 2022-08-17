import React from 'react'
import './ProductsCard.css'
import {TbCameraPlus}  from 'react-icons/tb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Camera from '../../assets/Images/camera.png';
import { useNavigate } from 'react-router-dom';

const InventoryProductsCard = (props) => {
  const navigate = useNavigate();
  const redirectToProductdetails = () => {
     navigate('/InventoryProductsDetails')
  }
  const {data} = props;

  return (
    <div className="ProductsContainer" onClick={redirectToProductdetails}>
    <div className="ProductsCamera">
        <img src={Camera}  alt="camera"/>
    </div>
    <div className="ProductContent">
      <h6>{data.PRODUCT_NAME}</h6>
      <p>Price: {data.COST} SAR</p>
     <p>On hand: {data.UNIT_OF_MEASURE} Units</p>
     
    </div>
    </div>
  )
}

export default InventoryProductsCard

