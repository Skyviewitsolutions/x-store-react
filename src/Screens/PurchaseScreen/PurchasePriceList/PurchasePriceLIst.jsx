import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints';
import PurchaseNavbar from '../PurchaseNavbar'

const PurchasePriceLIst = () => {

    const navigate = useNavigate();
    const handleCreatePage = () => {
      navigate("/AddPurchasePriceList");
    };
      
      const [allVenprice , setAllVenprice] = useState([]); 
      const getAuthtoken = localStorage.getItem("authtoken");
      const userAuth = localStorage.getItem("userAuth");
  
      const allPurchaseurl = endpoints.vendorPriceList.allvendorpricelist;
     
      const getAllVendorPrice = () => {
        const formData =  new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(allPurchaseurl , formData)
        .then((res) => {
          console.log(res,"response")
          if(res.data.status === true){
            setAllVenprice(res.data.data);
          }else if(res.data.status === false){
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err,"error")
        })
      }

      useEffect(() => {
         getAllVendorPrice();
      },[])

    const deletePurchaseurl = endpoints.vendorPriceList.deletevendorpricelist;

    const deleteItem = (data) => {
      const formData = new FormData();
      formData.append("Vendor_ID",data);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(deletePurchaseurl,formData)
      .then((res) => {
          if(res.data.status === true)
          {
              getAllVendorPrice();
              toast("Vendor Price List deleted Successfully",{type:"success"});
          }
          else if(res.data.status === false)
          {
              toast(res.data.message,{type:"error"});
          }
      })
      .catch((err) => {
          console.log(err,"error");
      })
  }

    const column  = [
        {title:"Vendor" , name:"VENDOR_PRODUCT_NAME"},
        {title:"Products" , name:"PRODUCT_NAME"},
        {title:"Currency" , name:"VENDOR_CURRENCY"},
        {title:"Quantity" , name:"VENDOR_QUANTITY"},
        {title:"Unit Of Measurment" , name:"UOM"},
        {title:"Price" , name:"VENDOR_PRICE"},
        {
          label:"Actions",
          name:"ID",
          options:{
              customBodyRender:(value , tableMeta , updateValue) => {
                  return(
                      <>
                       <div className="updtdlt">
                      <FiEdit size={23} color="#4f434d"   style={{cursor:"pointer"}}/>
                      <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}/>
                      </div>
                      </>
                      
                  )
              }
          }
      }
    ]

  return (
    <div>
        <PurchaseNavbar  showBelowMenu={true} title="Venodr Pricelists" handleCreatePage={handleCreatePage}/>
        <CustomTable data={allVenprice} column={column}/>
    </div>
  )
}

export default PurchasePriceLIst