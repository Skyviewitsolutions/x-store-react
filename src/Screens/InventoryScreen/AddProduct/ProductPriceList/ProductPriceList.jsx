import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast,ToastContainer} from 'react-toastify';
import Navebar from '../../../../components/Navbar/Navbar';
import { endpoints } from '../../../../services/endpoints';
import './ProductPrice.css';

const ProductPriceList = () => {

  const PriceListUrl = endpoints.productPriceList.allPricelist;
  const [productPrice , setProductPrice] = useState([]);


  useEffect(() => {
   axios.post(PriceListUrl)
   .then((res) => {
    if(res.data.status === true){
      setProductPrice(res.data.data);
    }
    else if(res.data.status === false)
    {
      toast(res.data.message,{type:"error"})
    }
   })
  },[])

  return (
    <div>
           <Navebar
        showBelowMenu={true}
        title="Product Price Rules"
      />
      <div className="ProductPriceListCon">
        <div className="ProductPriceContent">
          <div className="ProPriFirstContent">
            <div className="ProPrice">
              <p>Price List</p>
              <select>
                <option></option>
                {productPrice.map((item,index) => {
                  return(
                    <>
                    <option value={item.PRICE_NAME}>{item.PRICE_NAME}</option>
                    </>
                  )
                })}
                
              </select>
            </div>
            <div className="ProPrice">
              <p>Applied On</p>
              <select>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div className="ProPrice">
              <p>Min.Quantity</p>
             <input type="text" />
            </div>
          </div>
          <div className="ProPriSecondContent">
          <div className="ProPrice">
              <p>Price</p>
             <input type="text" />
            </div>
          <div className="ProPrice">
              <p>Start Date</p>
             <input type="date" />
            </div>
          <div className="ProPrice">
              <p>End Date</p>
             <input type="date" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default ProductPriceList