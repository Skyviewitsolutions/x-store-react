import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints';
import './CustomerSales.css';

const CustomerSales = (props) => {

    const [getPaymentTerms , setGetPaymentTerms] = useState([]);

    const paymentTermsUrl = endpoints.PaymentTerms.allPayment;
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    useEffect(() => {
         const formData = new FormData()
         formData.append("User_Authorization", getAuthtoken);
         formData.append("User_AuthKey", userAuth);
         axios.post(paymentTermsUrl, formData)
         .then((res) => {
            if(res.data.status === true){
                 setGetPaymentTerms(res.data.data) 
            }else if(res.data.status === false){
                toast(res.data.message,{type:"error"})
            }
         })
         .catch((err) => {
            console.log(err,"error")
         })
    },[])

    const {salesPersons, setSalesPersons,salesPaymentTerms,setSalesPaymentTerms,priceList,setPriceList,purchasePaymentTerms,setPurchasePaymentTerms,supplierCurrency,setSupplierCurrency,fiscalPosition,setFiscalPosition,refrence,setRefrence,industry,setIndustry} = props
  return (
    <div>
        <div className="cus_saleCon">
            <div className="cus_salesdetails">
                <div className="cus_detailsfirst">
                    <h3>Sales</h3>
                    <div className="cus_content">
                    <p>Salesperson</p>
                    <select value={salesPersons} onChange={(e) => setSalesPersons(e.target.value)}>
                        <option value="">Select Any One</option>
                        <option value="Abd Alla Mohamed Ahmed">Abd Alla Mohamed Ahmed</option>
                        <option value="Abdel Hamid Ali Altawaita">Abdel Hamid Ali Altawaita</option>
                        <option value="Abdulaziz Fangal Sultan Alotaibi">Abdulaziz Fangal Sultan Alotaibi</option>
                        <option value="Abdul Basit Abdul Ghani">Abdul Basit Abdul Ghani</option>
                        <option value="Abdulmajeed Zidan Khan">Abdulmajeed Zidan Khan</option>
                    </select>
                    </div>
                    <div className="cus_content">
                    <p>Payment Terms</p>
                    <select  value={salesPaymentTerms} onChange={(e) => setSalesPaymentTerms(e.target.value)}>
                        <option value="">Choose any one</option>
                        {getPaymentTerms.map((item,index) => {
                            if(item.DELETE_STATUS === 'X'){
                            return(
                                <>
                                <option value={item.ID}>{item.PAYMENT_TERMS}</option>
                                </>
                            )
                            }
                        })}
                    </select>
                    </div>
                    <div className="cus_content">
                    <p>Price List</p>
                    <select value={priceList} onChange={(e) => setPriceList(e.target.value)}>
                        <option value="">Choose any one</option>
                        <option value="Public Pricelist (EUR)">Public Pricelist (EUR)</option>
                    </select>
                    </div>
                </div>
                <div className="cus_detailssecond">
                <h3>Purchase</h3>
                <div className="cus_content">
                <p>Payment Terms</p>
                    <select  value={purchasePaymentTerms} onChange={(e) => setPurchasePaymentTerms(e.target.value)}>
                    <option value="">Choose any one</option>
                    {getPaymentTerms.map((item,index) => {
                            if(item.DELETE_STATUS === 'X'){
                            return(
                                <>
                                <option value={item.ID}>{item.PAYMENT_TERMS}</option>
                                </>
                            )
                            }
                        })}
                    </select>
                </div>
                <div className="cus_content">
                <p>Supplier Currency</p>
                    <select value={supplierCurrency} onChange={(e) => setSupplierCurrency(e.target.value)}>
                        <option value="">Select Any One</option>
                        <option value="SAR">SAR</option>
                    </select>
                </div>

                </div>
            </div>
            <div className="customer_salesfisc">
                <div className="customer_fisical">
                    <h3>Fiscal Information</h3>
                    <div className="cus_content">
                    <p>Fiscal Position</p>
                    <select value={fiscalPosition} onChange={(e) => setFiscalPosition(e.target.value)}>
                        <option value="">Choose any one</option>
                        <option value="Immediat Payment">Immediat Payment</option>
                    </select>
                    </div>
                </div>
                <div className="customer_misc">
                    <h3>Misc</h3>
                    <div className="cus_content">
                    <p>Reference</p>
                  <input type="text" value={refrence} onChange={(e) => setRefrence(e.target.value)}/>
                    </div>
                    <div className="cus_content">
                    <p>Industry</p>
                    <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                        <option value="">Choose any one</option>
                        <option value="Administrative">Administrative</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Construction">Construction</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Extraterritorial">Extraterritorial</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    <ToastContainer />
    </div>
  )
}

export default CustomerSales