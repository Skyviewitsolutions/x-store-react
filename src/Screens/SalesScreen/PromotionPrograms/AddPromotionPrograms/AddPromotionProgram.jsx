import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints';
import SalesNavbar from '../../SalesNavbar/SalesNavbar'
import './AddPromotionProgram.css'

const AddPromotionProgram = () => {



    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    
  

    const [allCustomer , setAllCustomer] = useState([]);
    const [allProduct , setAllProduct] = useState([]);


    const getCustomerUrl = endpoints.customer.allCustomer;
    const getProductUrl = endpoints.products.allProduct;

    const getAllCustomer = () => {
        const formData = new FormData()
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(getCustomerUrl , formData)
        .then((res) => {
            if(res.data.status === true){
                setAllCustomer(res.data.data)
            }else if(res.data.status === false){
                toast(res.data.message,{type:"error"})
            }
        })
        .catch((err) => {
            console.log(err,"error customer")
        })

    }

    const getAllProduct = () => {
        const formData = new FormData()
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(getProductUrl , formData)
        .then((res) => {
            if(res.data.status === true){
                setAllProduct(res.data.data)
            }else if(res.data.status === false){
                toast(res.data.message,{type:"error"})
            }
        })
        .catch((err) => {
            console.log(err,"error customer")
        })
    }

    useEffect(() => {
      getAllCustomer()
      getAllProduct()
    },[])

    // ---------------------------------Add PromotionProgram----------------------

    const [proName , setProName] = useState("")
    const [basedCustomer , setBasedCustomer] = useState("")
    const [basedProduct , setBasedProduct] = useState("")
    const [applyFirst , setApplyFirst] = useState("")
    const [startDate , setStartDate] = useState("")
    const [endDate , setEndDate] = useState("")
    const [quantity , setQuantity] = useState("")
    const [minimumPurchase , setMinimumPurchase] = useState("")
    const [promoCode , setPromoCode] = useState("")
    const [applicability , setApplicability] = useState("")
    const [reward , setReward] = useState("")
    const [disCount , setDisCount] = useState("")
    const [disApplyOn , setDisApplyOn] = useState("")
    const [maxDis , setMaxDis] = useState("")
    const [promotionCode , setPromotionCode] = useState("")
    const [freeProduct , setFreeProduct] = useState("")
    const [currency , seytCurrency] = useState("")
    const [taxType , setTaxType] = useState("")
    const [disPrice , setDisPrice] = useState("")

    const addPromotionUrl = endpoints.promotionProgram.addPromotion;
    const save = () => {
        if(proName === ""){
            toast("Program Name Is Required !",{type:"warning"})
        }else if(basedCustomer === ""){
            toast("Based On Customers Is Required !",{type:"warning"})
        }else if(basedProduct === ""){
            toast("Based On Product Is Required !",{type:"warning"})
        }else if(applyFirst === ""){
            toast("Apply First Is Required !",{type:"warning"})
        }else if(startDate === ""){
            toast("Start Date Is Required !",{type:"warning"})
        }else if(endDate === ""){
            toast("End Date Is Required !",{type:"warning"})
        }else if(quantity === ""){
            toast("Quantity Is Required !",{type:"warning"})
        }else if(minimumPurchase === ""){
            toast("Minimum Purchase Of Is Required !",{type:"warning"})
        }else if(promoCode === ""){
            toast("Promo Code Is Required !",{type:"warning"})
        }else if(promoCode === "Use a code" && promotionCode === ""){
            toast("Promotion Code Is Required !",{type:"warning"})
        }else if(applicability === ""){
            toast("Applicability Is Required !",{type:"warning"})
        }else if(reward === ""){
            toast("Reward Is Required !",{type:"warning"})
        }else if(reward === "Discount" && disCount === ""){
            toast("Discount Is Required !",{type:"warning"})
        }else if(reward === "Discount" && disApplyOn === ""){
            toast("Apply Discount Is Required !",{type:"warning"})
        }else if(reward === "Discount" && maxDis === ""){
            toast("Max Discount Amount Is Required !",{type:"warning"})
        }else if(reward === "Free Product" && freeProduct === ""){
            toast("Free Product Is Required !",{type:"warning"})
        }else{
           const formData = new FormData()
           formData.append("User_Authorization", getAuthtoken);
           formData.append("User_AuthKey", userAuth);
           formData.append("Name" ,proName);
           formData.append("Customer" ,basedCustomer);
           formData.append("Product" ,basedProduct);
           formData.append("Apply_On",applyFirst);
           formData.append("Start_Date" ,startDate);
           formData.append("End_Date",endDate);
           formData.append("Qty" ,quantity);
           formData.append("Min_PurchaseOff" ,minimumPurchase);
           formData.append("Currency" ,currency);
           formData.append("Tax_Type" ,taxType);
           formData.append("Promotion_Code" ,promoCode);
           formData.append("Applicability" ,applicability);
           formData.append("Reward_Type" ,reward);
           formData.append("Discount_Type" ,disCount);
           formData.append("Discount_Price",disPrice);
           formData.append("Discount_Applyon" ,disApplyOn);
           formData.append("Discount_Product",freeProduct);
           formData.append("Max_Amount",maxDis)
           axios.post(addPromotionUrl,formData)
           .then((res) => {
            if(res.data.status === true){
                toast("Promotion Program Added Successfully",{type:"success"})
            }else if(res.data.status === false){
                toast(res.data.data,{type:"error"})
            }
           })
           .catch((err) => {
            console.log(err,"error promotion")
           })

        }
    }

    // ---------------------------Update PromotinProgram----------------------

    const updatePromotionUrl = endpoints.promotionProgram.updatePromotion
    const [update , setUpdate] = useState("")
    const location = useLocation();
    const selectedData = location.state;

    useEffect(() => {
         if(selectedData){
            setUpdate(true);
            setProName(selectedData.PROMOTION_NAME);
            setBasedCustomer(selectedData.PROMOTION_CUSTOMER);
            setBasedProduct(selectedData.PROMOTION_PRODUCT);
            setApplyFirst(selectedData.APPLY_ON);
            setStartDate(selectedData.START_DATE);
            setEndDate(selectedData.END_DATE);
            setQuantity(selectedData.PROMOTION_QUANTITY);
            setMinimumPurchase(selectedData.PURCHASE_OF);
            setTaxType(selectedData.TAX_TYPE);
            setPromoCode(selectedData.PROMOTION_CODE)
            setApplicability(selectedData.PROMOTION_APPLICABILITY);
            setReward(selectedData.REWARD_TYPE);
            setDisCount(selectedData.DISCOUNT_TYPE);
            setDisApplyOn(selectedData.DISCOUNT_PRICE);
            setFreeProduct(selectedData.PRODUCT_NAME);
            setMaxDis(selectedData.MAXDISCOUNT_AMOUNT)
            

         }
    },[selectedData])

    const updateData = () => {
        if(proName === ""){
            toast("Program Name Is Required !",{type:"warning"})
        }else if(basedCustomer === ""){
            toast("Based On Customers Is Required !",{type:"warning"})
        }else if(basedProduct === ""){
            toast("Based On Product Is Required !",{type:"warning"})
        }else if(applyFirst === ""){
            toast("Apply First Is Required !",{type:"warning"})
        }else if(startDate === ""){
            toast("Start Date Is Required !",{type:"warning"})
        }else if(endDate === ""){
            toast("End Date Is Required !",{type:"warning"})
        }else if(quantity === ""){
            toast("Quantity Is Required !",{type:"warning"})
        }else if(minimumPurchase === ""){
            toast("Minimum Purchase Of Is Required !",{type:"warning"})
        }else if(promoCode === ""){
            toast("Promo Code Is Required !",{type:"warning"})
        }else if(promoCode === "Use a code" && promotionCode === ""){
            toast("Promotion Code Is Required !",{type:"warning"})
        }else if(applicability === ""){
            toast("Applicability Is Required !",{type:"warning"})
        }else if(reward === ""){
            toast("Reward Is Required !",{type:"warning"})
        }else if(reward === "Discount" && disCount === ""){
            toast("Discount Is Required !",{type:"warning"})
        }else if(reward === "Discount" && disApplyOn === ""){
            toast("Apply Discount Is Required !",{type:"warning"})
        }else if(reward === "Discount" && maxDis === ""){
            toast("Max Discount Amount Is Required !",{type:"warning"})
        }else if(reward === "Free Product" && freeProduct === ""){
            toast("Free Product Is Required !",{type:"warning"})
        }else{
           const formData = new FormData()
           formData.append("User_Authorization", getAuthtoken);
           formData.append("User_AuthKey", userAuth);
           formData.append("Name" ,proName);
           formData.append("Customer" ,basedCustomer);
           formData.append("Product" ,basedProduct);
           formData.append("Apply_On",applyFirst);
           formData.append("Start_Date" ,startDate);
           formData.append("End_Date",endDate);
           formData.append("Qty" ,quantity);
           formData.append("Min_PurchaseOff" ,minimumPurchase);
           formData.append("Currency" ,currency);
           formData.append("Tax_Type" ,taxType);
           formData.append("Promotion_Code" ,promoCode);
           formData.append("Applicability" ,applicability);
           formData.append("Reward_Type" ,reward);
           formData.append("Discount_Type" ,disCount);
           formData.append("Discount_Price",disPrice);
           formData.append("Discount_Applyon" ,disApplyOn);
           formData.append("Discount_Product",freeProduct);
           formData.append("Max_Amount",maxDis);
           formData.append("ID" ,selectedData.ID)
           axios.post(updatePromotionUrl,formData)
           .then((res) => {
            if(res.data.status === true){
                toast("Promotion Program Updated Successfully",{type:"success"})
            }else if(res.data.status === false){
                toast(res.data.data,{type:"error"})
            }
           })
           .catch((err) => {
            console.log(err,"error promotion")
           })

        }
    }
  return (
    <div>""
        <SalesNavbar showBelowMenu={true} title="Promotion Programs
" showCanelBtn={true}  save={update === true ? updateData : save}/>
         <div className="addproMainCon">
              <div className="addproCon">
                    <div className="proprogramName">
                        <p>Program Name</p>
                        <input type="text"  value={proName} onChange={(e) => setProName(e.target.value)}/>
                    </div>
                    <div className="program_content">
                        <div className="program_conditions">
                            <h3>Conditions</h3>
                            <div className="program_text">
                                <p>Based on Customers</p>
                                <select onChange={(e) => setBasedCustomer(e.target.value)} value={basedCustomer}>
                                    <option value="">Choose any customer</option>
                                    {allCustomer.map((itm,ind) => {
                                        if(itm.DELETE_STATUS != 'X'){

                                            return(
                                                <>
                                                <option value={itm.CUSTOMER_NAME} >{itm.CUSTOMER_NAME}</option>
                                                </>
                                            )
                                        }
                                       
                                    })}
                                </select>
                            </div>
                            <div className="program_text">
                                <p>Based on Product</p>
                                <select value={basedProduct} onChange={(e) => setBasedProduct(e.target.value)}>
                                    <option value="">Choose any Product</option>
                                    {allProduct.map((itm,ind) => {
                                        if(itm.DELETE_STATUS != 'X'){

                                            return(
                                                <>
                                                <option value={itm.PRODUCT_NAME} >{itm.PRODUCT_NAME}</option>
                                                </>
                                            )
                                        }
                                       
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="program_validity">
                            <h3>Validity</h3>
                        <div className="program_text">
                                <p>Apply on First</p>
                               <input type="text" value={applyFirst} onChange={(e) => setApplyFirst(e.target.value)}/>
                            </div>
                        <div className="program_text">
                                <p>Start Date</p>
                               <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                            </div>
                        <div className="program_text">
                                <p>End Date</p>
                               <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="program_quantity">
                    <div className="program_text">
                                <p>Quantity</p>
                               <input type="text" placeholder='1' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                            </div>
                    <div className="program_minimum">
                                <p>Minimum Purchase Of</p>
                               <input type="text" placeholder='1' value={minimumPurchase} onChange={(e) => setMinimumPurchase(e.target.value)}/>
                               <select value={taxType} onChange={(e) => setTaxType(e.target.value)}>
                                <option value="Tax Included">Tax Included</option>
                                <option value="Tax Excluded">Tax Excluded</option>
                               </select>
                            </div>
                            <div className="promo_Code">
                                <p>Promo Code</p>
                                <div>
                                <div className="promo_radio">
                                    <input type="radio" name="proCode" onChange={() => setPromoCode("Automatically Applied")} checked={promoCode === "Automatically Applied" ? true : false}/>
                                    <span>Automatically Applied</span>
                                </div>
                                <div className="promo_radio">
                                    <input type="radio" name="proCode" onChange={() => setPromoCode("Use a code")}  checked={promoCode === "Use a code" ? true : false}/>
                                    <span>Use a code</span>
                                </div>
                                </div>
                            </div>
                            <div className="program_text">
                             
                              {promoCode === "Use a code" && (
                                <>
                                <p>Promotion Code</p>
                               <input type="text" value={promotionCode} onChange={(e) => setPromotionCode(e.target.value)}/>
                                </>
                              )}  
                            </div>

                    </div>
                    <div className="program_rewards">
                        <div className="pro_reward">
                        <h3>Rewards</h3>
                        <div className="promo_Code">
                                <p>Applicability</p>
                                <div>
                                <div className="promo_radio">
                                    <input type="radio" name='appl'onChange={() => setApplicability("Use a code")}  checked={applicability === "Use a code" ? true : false}/>
                                    <span>Apply On Current Order</span>
                                </div>
                                <div className="promo_radio">
                                    <input type="radio" name='appl' onChange={() => setApplicability("Use a code")}  checked={applicability === "Use a code" ? true : false}/>
                                    <span>Apply On Next Order</span>
                                </div>
                                </div>
                            </div>
                        <div className="promo_Code">
                                <p>Reward</p>
                                <div>
                                <div className="promo_radio">
                                    <input type="radio" name='reward' onChange={() => setReward("Discount")} checked={reward === "Discount" ? true : false}/>
                                    <span>Discount</span>
                                </div>
                                <div className="promo_radio">
                                    <input type="radio" name="reward" onChange={() => setReward("Free Product")} checked={reward === "Free Product" ? true : false}/>
                                    <span>Free Product</span>
                                </div>
                                <div className="promo_radio">
                                    <input type="radio" name='reward' onChange={() => setReward("Free Shipping")} checked={reward === "Free Shipping" ? true : false}/>
                                    <span>Free Shipping</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        {reward === "Discount" && (
                            <>
                           
                        <div className="pro_discount">
                        <div className="program_minimum">
                                <p>Apply Discount</p>
                                <select value={disApplyOn} onChange={(e) => setDisApplyOn(e.target.value)}>
                                <option></option>
                                <option value="Percentage">Percentage</option>
                                <option value="Fixed Ammount">Fixed Ammount</option>
                               </select>
                               <input type="text" placeholder='10.0' value={disPrice} onChange={(e) => setDisPrice(e.target.value)}/>
                            </div>
                            <div className="promo_Code">
                                <p>Discount Apply On</p>
                                <div>
                                <div className="promo_radio">
                                    <input type="radio" name="dis" onChange={() => setDisCount("On Order")} checked={disCount === "On Order" ? true : false}/>
                                    <span>On Order</span>
                                </div>
                                <div className="promo_radio">
                                    <input type="radio" name="dis" onChange={() => setDisCount("On Cheapest Product")} checked={disCount === "On Cheapest Product" ? true : false}/>
                                    <span>On Cheapest Product</span>
                                </div>
                                <div className="promo_radio">
                                    <input type="radio" name="dis" onChange={() => setDisCount("On Specific Products")} checked={disCount === "On Specific Products" ? true : false}/>
                                    <span>On Specific Products</span>
                                </div>
                                </div>
                            </div>
                            {disCount === "On Specific Products" && (
                            <>
                             <div className="program_text">
                                <p>Products</p>
                            <select value={freeProduct} onChange={(e) => setFreeProduct(e.target.value)}>
                            <option value="">Choose any Product</option>
                            {allProduct.map((itm,ind) => {
                                        if(itm.DELETE_STATUS != 'X'){

                                            return(
                                                <>
                                                <option value={itm.PRODUCT_NAME} >{itm.PRODUCT_NAME}</option>
                                                </>
                                            )
                                        }
                                       
                                    })}
                            </select>
                            </div>
                            </>
                        )}
                            <div className="program_text">
                                <p>Max Discount Amount</p>
                               <input type="text" placeholder='0.00' value={maxDis} onChange={(e) => setMaxDis(e.target.value)}/>
                            </div>

                        </div>

 
                        </>
                        )}

                        
                        {reward === "Free Product" && (
                            <>
                             <div className="program_text">
                                <p>Free Product</p>
                            <select value={freeProduct} onChange={(e) => setFreeProduct(e.target.value)}>
                            <option value="">Choose any Product</option>
                            {allProduct.map((itm,ind) => {
                                        if(itm.DELETE_STATUS != 'X'){

                                            return(
                                                <>
                                                <option value={itm.PRODUCT_NAME} >{itm.PRODUCT_NAME}</option>
                                                </>
                                            )
                                        }
                                       
                                    })}
                            </select>
                            </div>
                            </>
                        )}
                        
                    </div>
              </div>
         </div>
         <ToastContainer />
    </div>
  )
}

export default AddPromotionProgram