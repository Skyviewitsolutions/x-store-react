import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints'
import PurchaseNavbar from '../../PurchaseNavbar';
import './AddPurchasePriceList.css'

const AddPurchasePriceList = () => {

    const navigate = useNavigate();
    const [getVendors , setGetVendors] = useState([])
    const [getProduct , setGetProduct] = useState([]);
    const [getCurrency , setGetCurrency] = useState([]);
    const [update , setUpdate] = useState([]);

    const [vendor , setVendor] = useState("")
    const [vendorProductName , setVendorProductName] = useState("");
    const [vendorProductCode , setVendorProductCode] = useState("");
    const [leadtime , setLeadTime] = useState("");
    const [product , setProduct] = useState("");
    const [quantity , setQuantity] = useState("");
    const [price , setPrice] = useState("");
    const [currency , setCurrency] = useState("");
    const [startDate , setStartDate] = useState("")
    const [endDate , setEndDate] = useState("")
    const allVendorsUrl = endpoints.vendors.allVendors;
    const allProducturl = endpoints.products.allProduct;
    const allcurrencyurl = endpoints.Currency.allCurrency;
    const AddVendorsPricelistUrl = endpoints.vendorPriceList.addvendorpricelist;
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    useEffect(() => {
       const formData =  new FormData();
       formData.append("User_Authorization", getAuthtoken);
       formData.append("User_AuthKey", userAuth);
       axios.post(allVendorsUrl,formData)
       .then((res) => {
        if(res.data.status === true){
            const val = res.data.data;
            const filterVendor = val.filter((itm,ind) => {
                return itm.DELETE_STATUS != 'X'
            })
           setGetVendors(filterVendor);
        }
        else if(res.data.status === false){
            if(res.data.code === 3)
            {
              toast("Session expired , Please re-login",{type:"warning"})
              navigate('/');
            }
            else{
             toast(res.data.message,{type:"error"});
            }
        }
       })
       .catch((err) => {
        console.log(err,"error")
       })
    },[])
    useEffect(() => {
       const formData =  new FormData();
       formData.append("User_Authorization", getAuthtoken);
       formData.append("User_AuthKey", userAuth);
       axios.post(allProducturl,formData)
       .then((res) => {
        if(res.data.status === true){
            const val = res.data.data;
            const filterProduct = val.filter((itm,ind) => {
                return itm.DELETE_STATUS != 'X'
            })
           setGetProduct(filterProduct);
        }
        else if(res.data.status === false){
            if(res.data.code === 3)
            {
              toast("Session expired , Please re-login",{type:"warning"})
              navigate('/');
            }
            else{
             toast(res.data.message,{type:"error"});
            }
        }
       })
       .catch((err) => {
        console.log(err,"error")
       })
    },[])
    useEffect(() => {
       const formData =  new FormData();
       formData.append("User_Authorization", getAuthtoken);
       formData.append("User_AuthKey", userAuth);
       axios.post(allcurrencyurl,formData)
       .then((res) => {
        if(res.data.status === true){

            const val = res.data.data;
            const filterCurrency = val.filter((itm,ind) => {
                return itm.DELETE_STATUS != 'X'
            })
           setGetCurrency(filterCurrency);
        }
        else if(res.data.status === false){
            if(res.data.code === 3)
                {
                  toast("Session expired , Please re-login",{type:"warning"})
                  navigate('/');
                }
                else{
                 toast(res.data.message,{type:"error"});
                }
        }
       })
       .catch((err) => {
        console.log(err,"error")
       })
    },[])

    const save = () => {
        if(vendor === ""){
            toast("Vendor is required ",{type:"warning"});
        }
        else if(vendorProductName === ""){
            toast("Vendor Product Name is required ",{type:"warning"});
        }
        else if(vendorProductCode === ""){
            toast("Vendor Product Code is required ",{type:"warning"});
        }
        else if(leadtime === ""){
            toast("Delivery Lead Time is required ",{type:"warning"});
        }
        else if(product === ""){
            toast("Product is required ",{type:"warning"});
        }
        else if(quantity === ""){
            toast("Quantity is required ",{type:"warning"});
        }
        else if(price === ""){
            toast("Price is required ",{type:"warning"});
        }
        else if(currency === ""){
            toast("Currency is required ",{type:"warning"});
        }
        else if(startDate === ""){
            toast("Start Date is required ",{type:"warning"});
        }
        else if(endDate === ""){
            toast("End Date is required ",{type:"warning"});
        }else {
            const formData = new FormData();
            formData.append("Vendor_ID",vendor);
            formData.append("Vendor_Product_Name",vendorProductName)
            formData.append("Vendor_Product_Code",vendorProductCode);
            formData.append("Dilevery_LeadTime" , leadtime);
            formData.append("Product_ID",product);
            formData.append("Quantity",quantity);
            formData.append("Price" , price);
            formData.append("Currency" , currency);
            formData.append("Start_Date" , startDate);
            formData.append("End_Date" , endDate)
            formData.append("User_Authorization", getAuthtoken);
            formData.append("User_AuthKey", userAuth);
            axios.post(AddVendorsPricelistUrl,formData)
            .then((res) => {
                if(res.data.status === true){
                    toast("Venodr Pricelists added successfully",{type:"success"})
                    setTimeout(() => {
                        navigate('/PurchasePriceList')
                    }, 1000);
                }else if(res.data.status === false){
                    if(res.data.code === 3)
                {
                  toast("Session expired , Please re-login",{type:"warning"})
                  navigate('/');
                }
                else{
                 toast(res.data.message,{type:"error"});
                }
                }
            })
            .catch((err) => {
                console.log(err,"error");
            })
        }
    }

    const location = useLocation();
    const selectedData = location.state;
    console.log(selectedData , "selectedData here");
    

    const updatePurchasePriceUrl = endpoints.vendorPriceList.updatevendorpricelist;

    useEffect(() => {
        if(selectedData)
        {
          setUpdate(true);
          setVendor(selectedData.VENDOR_ID);
          setVendorProductName(selectedData.VENDOR_PRODUCT);
          setVendorProductCode(selectedData.VENDOR_PRODUCT_CODE);
          setLeadTime(selectedData.DILEVERY_LEADTIME);
          setPrice(selectedData.VENDOR_PRICE);
          setCurrency(selectedData.VENDOR_CURRENCY);
          setEndDate(selectedData.END_DATE);
          setStartDate(selectedData.START_DATE);
          setQuantity(selectedData.VENDOR_QUANTITY);
          setProduct(selectedData.PRODUCT_ID);
        }
      },[selectedData])
    

      const updateData = () => {

        if(vendor === ""){
            toast("Vendor is required ",{type:"warning"});
        }
        else if(vendorProductName === ""){
            toast("Vendor Product Name is required ",{type:"warning"});
        }
        else if(vendorProductCode === ""){
            toast("Vendor Product Code is required ",{type:"warning"});
        }
        else if(leadtime === ""){
            toast("Delivery Lead Time is required ",{type:"warning"});
        }
        else if(product === ""){
            toast("Product is required ",{type:"warning"});
        }
        else if(quantity === ""){
            toast("Quantity is required ",{type:"warning"});
        }
        else if(price === ""){
            toast("Price is required ",{type:"warning"});
        }
        else if(currency === ""){
            toast("Currency is required ",{type:"warning"});
        }
        else if(startDate === ""){
            toast("Start Date is required ",{type:"warning"});
        }
        else if(endDate === ""){
            toast("End Date is required ",{type:"warning"});
        }else {
            const formData = new FormData();
            formData.append("ID",selectedData.ID)
            formData.append("Vendor_ID",vendor);
            formData.append("Vendor_Product_Name",vendorProductName)
            formData.append("Vendor_Product_Code",vendorProductCode);
            formData.append("Dilevery_LeadTime" , leadtime);
            formData.append("Product_ID",product);
            formData.append("Quantity",quantity);
            formData.append("Price" , price);
            formData.append("Currency" , currency);
            formData.append("Start_Date" , startDate);
            formData.append("End_Date" , endDate)
            formData.append("User_Authorization", getAuthtoken);
            formData.append("User_AuthKey", userAuth);
            axios.post(updatePurchasePriceUrl,formData)
            .then((res) => {
                if(res.data.status === true){
                    toast("Venodr Pricelists updated successfully",{type:"success"})
                    setTimeout(() => {
                        navigate('/PurchasePriceList')
                    }, 1000);
                }else if(res.data.status === false){
                    if(res.data.code === 3)
                {
                  toast("Session expired , Please re-login",{type:"warning"})
                  navigate('/');
                }
                else{
                 toast(res.data.message,{type:"error"});
                }
                }
            })
            .catch((err) => {
                console.log(err,"error");
            })
        }
      }

  return (
    <div>
        <PurchaseNavbar  showBelowMenu={true}
        title="Purchase PriceList"
        save={update === true ? updateData : save} 
        showCanelBtn={true}/>
       <div className="vendorsPriceListContainer">
            <div className="vendorsPart1">
                <h1>Vendor</h1>
                <div className="vendorstext">
                    <p>Vendor</p>
                    <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
                        <option value="">Select any one</option>
                       
                        {getVendors.map((item,index) => {
                            if(item.VENDOR_STATUS!="X"){
                                return(
                                    <>
                                     <option value={item.VENDOR_ID}>{item.VENDOR_NAME}</option>
                                    </>
                                )   
                            }
                        })}
                    </select>
                </div>
                <div className="vendorstext">
                    <p>Vendor Product Name</p>
                    <input type="text" value={vendorProductName} onChange={(e) => setVendorProductName(e.target.value)}/>
                </div> 
                <div className="vendorstext">
                    <p>Vendor Product Code</p>
                    <input type="text" value={vendorProductCode} onChange={(e) => setVendorProductCode(e.target.value)}/>
                </div>
                {/* <div className="vendorstext">
                    <p>Product Variant</p>
                    <select>
                        <option value="">Select any one</option>
                        <option></option>
                    </select>
                </div> */}
                <div className="leadtime">
                    <p>Delivery Lead Time</p>
                    <input type="text" placeholder='1' value={leadtime} onChange={(e) => setLeadTime(e.target.value)}/>
                    <span>days</span>
                </div>
            </div>
            <div className="priceListPart2">
                <h1>Price List</h1>
            <div className="priceListtext">
                    <p>Product </p>
                    <select value={product} onChange={(e) => setProduct(e.target.value)}>
                        <option value="">Select any one</option>
                       
                        {getProduct.map((item,index) => {
                            return(
                                <>
                                 <option value={item.PRODUCT_ID}>{item.PRODUCT_NAME}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div className="pricetexts">
                    <p>Quantitye</p>
                    <input type="text" placeholder='0.00' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                <div className="price_currency">
                    <p>Price</p>
                    <input type="text" placeholder='0.00' value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option>Select Currency</option>
                        {getCurrency.map((item,index) => {
                            return(
                                <>
                                 <option value={item.CURRENCY}>{item.CURRENCY}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div className="valid_date">
                    <p>Valid Date</p>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                    <span style={{padding:"10px"}}>to</span>
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                </div>
            </div>
       </div>
       <ToastContainer />
    </div>
  )
}

export default AddPurchasePriceList