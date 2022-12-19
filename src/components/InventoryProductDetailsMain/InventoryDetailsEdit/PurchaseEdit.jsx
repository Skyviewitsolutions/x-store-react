import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { endpoints } from '../../../services/endpoints'
import CustomTable from '../../CustomTable/CustomTable'
import PurchaseInventory from '../../Model/PurchaseInventory/PurchaseInventory'
import './PurchaseEdit.css'


const PurchaseEdit = (props) => {

  const {productId} = props
  const navigate = useNavigate();
  const [modalShow , setModalShow] = useState(false)
  const userAuth = localStorage.getItem("userAuth");
  const getAuthtoken = localStorage.getItem("authtoken");

  const [purchaseDetails , setPurchaseDetails] = useState([])

  const [singleVendorList , setSingleVendorList] = useState([]);
  const [allVendorList , setAllVendorList] = useState([]);
  const vendorListUrl = endpoints.products.vendorListsingle;
  const vendorListsAllUrl = endpoints.products.vendorListAllProduct;

  const getSingleVendorList = () => {

    const formData = new FormData()
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
   
    axios
    .post(vendorListUrl, formData)
    .then((res) => {
      console.log(res, "single vendorlists");
      if(res.data.status === true){
        setSingleVendorList(res.data.data)
      }
      else if(res.data.status === false){
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        // else{
        //  toast(res.data.message,{type:"error"});
        // }
      }
    })
    .catch((err) => {
      console.log(err, "error");
      toast("something went wrong" , {type : "error"})
    });
  }


  const getAllVendorlist = () => {

    const formData = new FormData()
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("ID" ,productId);
    axios
    .post(vendorListsAllUrl, formData)
    .then((res) => {
      console.log(res, "all vendorlist");
      if(res.data.status === true){
        setAllVendorList(res.data.data)
      }
      else if(res.data.status === false){
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
      
      }
    })
    .catch((err) => {
      console.log(err, "error");
      toast("something went wrong" , {type : "error"})
    });
  }
  useEffect(() => {
    if(productId){
      getAllVendorlist()
    }else{
      getSingleVendorList()
    }
   
   
  },[])
  
  console.log(singleVendorList,"single nhjs")


  const column = [
    { label :'Name', name:'VENDOR_PNAME'},
    { label :'currency', name:'VAL_CURRENCY'},
    { label :'Quantity', name:'VQTY'},
    { label :'Price', name:'VPRICE'},
    
  ]
  const column2 = [
    { label :'Name', name:'VENDOR_NAME'},
    { label :'currency', name:'VENDOR_CURRENCY'},
    { label :'Price', name:'VENDOR_PRICE'},
    
  ]

  console.log(productId , "productId")

  return (
   <>
   <div className="purchase_container">
    {productId  ?  <CustomTable data={allVendorList} column={column2}/> : <CustomTable data={singleVendorList} column={column}/>
    }
  
   <button className='add_productbtn' onClick={() => setModalShow(true)}>Add Line</button>
       {/* <div className="purchase_Reordering">
              <div className="purchase_first">
                <h1>Reordering</h1>
                
                <div className="purchase_radio">
                            <p>Procurement</p>
                            <div className="radio">
                            <div className="asradio">
                                <input type="radio" name='create'/>
                                <span>Create a draft purchase order</span>
                            </div>
                            <div className="asradio">
                                <input type="radio"  name='create' />
                                <span>Propose a call for tenders</span>
                            </div>
                            </div>
                           
                        </div>
                        <div className="purchase_des">
                          <p>Purchase Description</p>
                          <input type="text" />
                        </div>
              </div>
              <div className="purchase_second">
                <h1>Vendor Bills</h1>
                <div className="purchase_radio">
                  <p>Vendor Taxes</p>
                  <select>
                    <option>Purchase Vat</option>
                    <option>GST</option>
                  </select>
                </div>
                <div className="purchase_radio">
                  <p>Control Policy</p>
                  <div className="radio">
                            <div className="asradio">
                                <input type="radio" name='control'/>
                                <span>On ordered quantities</span>
                            </div>
                            <div className="asradio">
                                <input type="radio"  name='control'/>
                                <span>On received quantities</span>
                            </div>
                            </div>
                </div>
                <div className="warning">
                          <p>Warning when Purchasing this Product</p>
                          <input type="text" />
                        </div>
              </div>
            </div> */} 
            <PurchaseInventory modalShow={modalShow} setModalShow={setModalShow} purchaseDetails={purchaseDetails} setPurchaseDetails={setPurchaseDetails} getSingleVendorList={getSingleVendorList} {...props}/>
            <ToastContainer />
          </div>
   </>
  )
}

export default PurchaseEdit