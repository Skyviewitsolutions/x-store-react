import React from 'react'
import './GeneralInformation.css';
import { FaArrowRight } from 'react-icons/fa';
import UpdateCost from '../../Model/GenInfoUpdate/UpdateCost';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const GeneralInformation = (props) => {

    const [showUpdateCost , setShowUpdateCost] = useState(false);
    const navigate = useNavigate();
    const {productType,productCategory,interRef,salesPrice,customerTax,cost,productCatCode ,proCode, unitOfMeasurement,purchaseUnitOfMeasuremnt,description ,  setProductCatCode,uniqueCode}=props;

    console.log(props , "productCategory")

    const RedirectToUnit  = () => {
        navigate('/UnitPage');
    }

   

    return (
        <div className='GeneralInformationContainer'>
            <div className="part1">
                <div className="firstcontent">
                    <p>Product Type</p>
                    <span>{productType}</span>
                </div>
                <div className="firstcontent">
                    <p> Product Category</p>
                    <span style={{ color: "#1669a2" }}>{productCategory}</span>
                </div>
                <div className="firstcontent2">
                    <p>Product Code</p>
                    <p>{proCode}</p>
                </div>
                <h5>{interRef}</h5>
            </div>
            <div className="part2">
                <div className="firstcontent3">
                    <p>Sales Price</p>
                    <span>{salesPrice && salesPrice.toFixed(2)}</span>
                    {/* <FaArrowRight size="20px" style={{ color: "#1669a2", marginLeft: "10px" }} />
                    <span>Extra Prices</span> */}
                </div>
                <div className="firstcontent3">
                <p  className="custext">Customer Taxes</p>
                <span>{customerTax}</span>
                </div>
                <div className="firstcontent3">
                    <p>Cost</p>
                    <span>{cost && cost.toFixed(2)}</span>
                    {/* <span style={{ color: "#1669a2" }}>Update Cost</span> */}
                </div>
                <div className="firstcontent3">
                    <p>Unit of Measure</p>
                    <span style={{ color: "#1669a2" }} >{unitOfMeasurement}</span>
                </div>
                <div className="firstcontent3">
                    <p>Purchase Unit of Measure</p>
                    <span style={{ color: "#1669a2" }} >{purchaseUnitOfMeasuremnt}</span>
                </div>
             

            </div>
             <UpdateCost showUpdateCost={showUpdateCost} setShowUpdateCost={setShowUpdateCost}/>
        </div>
    )
}

export default GeneralInformation