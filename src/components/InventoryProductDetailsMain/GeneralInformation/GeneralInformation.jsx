import React from 'react'
import './GeneralInformation.css';
import { FaArrowRight } from 'react-icons/fa';
import UpdateCost from '../../Model/GenInfoUpdate/UpdateCost';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const GeneralInformation = () => {

    const [showUpdateCost , setShowUpdateCost] = useState(false);
    const navigate = useNavigate();
     
    const RedirectToUnit  = () => {
        navigate('/UnitPage');
    }

    return (
        <div className='GeneralInformationContainer'>
            <div className="part1">
                <div className="firstcontent">
                    <p>Product Type</p>
                    <span>Storable Product</span>
                </div>
                <div className="firstcontent">
                    <p> Product Category</p>
                    <span style={{ color: "#008784" }}>Filters / PUTZMEISTER</span>
                </div>
                <div className="firstcontent2">
                    <p>Internal Reference</p>
                    <p>Barcode</p>
                </div>
                <h5>Internal Notes</h5>
            </div>
            <div className="part2">
                <div className="firstcontent3">
                    <p>Sales Price</p>
                    <span>1.0000 SAR</span>
                    <FaArrowRight size="20px" style={{ color: "#008784", marginLeft: "10px" }} />
                    <span>Extra Prices</span>
                </div>
                <p  className="custext">Customer Taxes</p>
                <div className="firstcontent3">
                    <p>Cost</p>
                    <span>	0.0000 SAR per Units</span>
                    <span style={{ color: "#008784" }} onClick={() => setShowUpdateCost(true)}>Update Cost</span>
                </div>
                <div className="firstcontent3">
                    <p>Unit of Measure</p>
                    <span style={{ color: "#008784" }} onClick={RedirectToUnit}>Units</span>
                </div>
                <div className="firstcontent3">
                    <p>Purchase Unit of</p>
                    <span style={{ color: "#008784" }} onClick={RedirectToUnit}>Units</span>
                </div>
                <p  className="custext">Measure</p>

            </div>
             <UpdateCost showUpdateCost={showUpdateCost} setShowUpdateCost={setShowUpdateCost}/>
        </div>
    )
}

export default GeneralInformation