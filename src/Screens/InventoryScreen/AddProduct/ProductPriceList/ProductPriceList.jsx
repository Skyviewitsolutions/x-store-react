import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import Navebar from '../../../../components/Navbar/Navbar';
import { endpoints } from '../../../../services/endpoints';
import './ProductPrice.css';

const ProductPriceList = () => {

  const PriceListUrl = endpoints.productPriceList.allPricelist;
  const CurrencyUrl  = endpoints.Currency.allCurrency;
  const addPriceListUrl = endpoints.productPriceList.addPriceList;
  const navigate = useNavigate();
  const [productPrice , setProductPrice] = useState([]);
  const [currency , setCurrency] = useState([]);
  const [priceList , setPriceList] = useState("");
  const [priceCurrency , setPriceCurrency] = useState("");
  const [applyOn , setApplyOn] = useState("");
  const [computePrice , setComputePrice] = useState("");
  const [minQuantity , setMinQuantity] = useState("");
  const [price , setPrice] = useState("");
  const [startDate , setStartDate] = useState("");
  const [endDate  , setEndDate] = useState("");
  const [fixedPrice , setFixedPrice] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
 

  useEffect(() => {
   axios.post(PriceListUrl)
   .then((res) => {
    if(res.data.status === true){
      setProductPrice(res.data.data);
    }
    else if(res.data.status === false)
    {
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
    console.log(err,"something went wrong");
   })
  },[])


  useEffect(() => {
   axios.post(CurrencyUrl)
   .then((res) => {
    if(res.data.status === true)
    {
      setCurrency(res.data.data);
    }
    else if(res.data.status == false)
    {
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
    console.log(err,"something wrong")
   }) 
  },[])

  const save = () => {
    
    if(priceList === ""){
      toast("Price Name Is Required!",{type:"warning"});
    }
    else if(priceCurrency === "")
    {
      toast("Currency is Required!",{type:"warning"});
    }
    else if(applyOn === "")
    {
      toast("Applied On Is Required!",{type:"warning"});
    }
    else if(minQuantity === "")
    {
      toast("Min Quantity Is Required!",{type:"warning"});
    }
    else if(startDate === "")
    {
      toast("Start Date Is Required!",{type:"warning"});
    }
    else if(endDate === "")
    {
      toast("End Date Is Required!",{type:"warning"});
    }
    else{
    const formData = new FormData();
    formData.append("Price_Name" , priceList);
    formData.append("Currency" , priceCurrency);
    formData.append("Apply_On" , applyOn);
    formData.append("Min_Quantity" , minQuantity);
    formData.append("Start_Date" , startDate);
    formData.append("End_Date" , endDate);
    formData.append("Compute_Price" ,computePrice);
    formData.append("Fixed_Price",fixedPrice);
    formData.append("User_Authorization" , getAuthtoken);
    axios.post(addPriceListUrl,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        toast("Price List Is Added Suucessfull" , {type:"success"})
      }
      else if(res.data.status === false)
      {
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
           <Navebar
           save={save}
        showBelowMenu={true}
        title="Product Price Rules"
      />
      <div className="ProductPriceListCon">
        <div className="ProductPriceContent">
          <div className="ProPriFirstContent">
          <div className="ProPrice">
              <p>PriceName</p>
             <input type="text" value={priceList} onChange={(e) =>setPriceList(e.target.value)}/>
            </div>
            <div className="ProPrice">
              <p>Currency</p>
              <select  value={priceCurrency} onChange={(e) => setPriceCurrency(e.target.value)}>
                <option value=""></option>
                {currency.map((item,index) => {
                  return(
                    <>
                    <option value={item.CURRENCY}>{item.CURRENCY}</option>
                    </>
                  )
                })}
              </select>
            </div>
            
            <div className="ProPrice">
              <p>Applied On</p>
              <select  value={applyOn} onChange={(e) => setApplyOn(e.target.value)}>
                <option value=""></option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
            <div className="ProPrice">
              <p>Compute Price</p>
              <select value={computePrice} onChange={(e) => setComputePrice(e.target.value)}>
                <option value=""></option>
                <option value="Fixed Price">Fixed Price</option>
                <option value="Percentage (discount)">Percentage (discount)</option>
                <option value="Formula">Formula</option>
              </select>
            </div>
          </div>
          <div className="ProPriSecondContent">
          <div className="ProPrice">
              <p>Min.Quantity</p>
             <input type="text" value={minQuantity} onChange={(e) => setMinQuantity(e.target.value)}/>
            </div>
            <div className="ProPrice">
              <p>Fixed Price</p>
             <input type="text" value={fixedPrice} onChange={(e) => setFixedPrice(e.target.value)}/>
            </div>
          <div className="ProPrice">
              <p>Start Date</p>
             <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            </div>
          <div className="ProPrice">
              <p>End Date</p>
             <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            </div>
          </div>
          </div>
        </div>
      <ToastContainer/>
    </div>
  )
}

export default ProductPriceList