import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints'
import PurchaseNavbar from '../../PurchaseNavbar';
import './AddPurchasePriceList.css'

const AddPurchasePriceList = () => {

    const [getVendors , setGetVendors] = useState([])
    const allVendorsUrl = endpoints.vendors.allVendors;

    useEffect(() => {
       const formData =  new FormData();
       axios.post(allVendorsUrl,formData)
       .then((res) => {
        if(res.data.status === true){
           setGetVendors(res.data.data);
        }
        else if(res.data.status === false){
            toast(res.data.message ,{type:"error"});
        }
       })
       .catch((err) => {
        console.log(err,"error")
       })
    },[])
  return (
    <div>
        <PurchaseNavbar  showBelowMenu={true} title="Venodr Pricelists"/>
       <div className="vendorsPriceListContainer">
            <div className="vendorsPart1">
                <h1>Vendor</h1>
                <div className="vendorstext">
                    <p>Vendor</p>
                    <select>
                        <option value="">Select any one</option>
                        <option></option>
                    </select>
                </div>
                <div className="vendorstext">
                    <p>Vendor Product Name</p>
                    <input type="text" />
                </div>
                <div className="vendorstext">
                    <p>Vendor Product Code</p>
                    <input type="text" />
                </div>
                <div className="vendorstext">
                    <p>Product Variant</p>
                    <select>
                        <option value="">Select any one</option>
                        <option></option>
                    </select>
                </div>
                <div className="leadtime">
                    <p>Delivery Lead Time</p>
                    <input type="text" placeholder='1'/>
                    <span>days</span>
                </div>
            </div>
            <div className="priceListPart2">
                <h1>Price List</h1>
            <div className="priceListtext">
                    <p>Product </p>
                    <select>
                        <option value="">Select any one</option>
                        <option></option>
                    </select>
                </div>
                <div className="pricetexts">
                    <p>Quantitye</p>
                    <input type="text" placeholder='0.00'/>
                </div>
                <div className="pricetexts">
                    <p>Price</p>
                    <input type="text" placeholder='0.00'/>
                    <select>
                        <option>Select Currency</option>
                        <option>SAR</option>
                    </select>
                </div>
                <div className="pricetexts">
                    <p>Validity</p>
                    <input type="date"/>
                    <span style={{padding:"10px"}}>to</span>
                    <input type="date" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default AddPurchasePriceList