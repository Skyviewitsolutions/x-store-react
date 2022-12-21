import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { endpoints } from '../../../services/endpoints'
import CustomTable from '../../CustomTable/CustomTable'
import PurchaseInventory from '../../Model/PurchaseInventory/PurchaseInventory'
import './PurchaseEdit.css'
import { FiEdit } from "react-icons/fi";


const PurchaseEdit = (props) => {

  const {productId} = props
  const navigate = useNavigate();
  const [modalShow , setModalShow] = useState(false)
  const userAuth = localStorage.getItem("userAuth");
  const getAuthtoken = localStorage.getItem("authtoken");

  const [purchaseDetails , setPurchaseDetails] = useState([])

  const [singleVendorList , setSingleVendorList] = useState([]);
  const [allVendorList , setAllVendorList] = useState([]);


  // creating useState for the model;

  const [vendor, setVendor] = useState("");
  const [vendorProductName, setVendorProductName] = useState("");
  const [vendorProductCode, setVendorProductCode] = useState("");
  const [vendorLeadTime, setVendorLeadTime] = useState("");
  const [vendorQuantity, setVendorQuantity] = useState("");
  const [vendorPrice, setVendorPrice] = useState("");
  const [vendorCurrency, setVendorCurrency] = useState("");
  const [vendorDate1, setVendorDate1] = useState("");
  const [vendorDate2, setVendorDate2] = useState("");
  const [venodrId , setVendorId] = useState("");
  const [selectedVendorListId , setSelectedVendorListId] = useState("")
  const [updatedVendorList , setUpdtedVendorList] = useState(false)
  



  const vendorListUrl = endpoints.products.vendorListsingle;
  const singleVendorListUrl = endpoints.products.vendorListAllProduct;
  const deleteUrl = endpoints.products.vendorListdelete;

  
  const getSingleVendorList = () => {

    const formData = new FormData()
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("ID" ,productId);
   
    axios
    .post(singleVendorListUrl, formData)
    .then((res) => {
      
      if(res.data.status === true){
        const val = res.data.data;
        const filteredVendorList = val.filter((itm,ind) =>{
          return itm.DEL_STATUS != "X"
        })
        setAllVendorList(filteredVendorList)
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
  
    axios
    .post(vendorListUrl, formData)
    .then((res) => {
      console.log(res, "all vendorlist");
      if(res.data.status === true){


        const val = res.data.data;
        const filteredVendorList = val.filter((itm,ind) =>{
          return itm.DEL_STATUS != "X"
        })
        
        setAllVendorList(filteredVendorList)
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
      getSingleVendorList()
    }else{
      getAllVendorlist()
    }
   
   
  },[])
  
  console.log(singleVendorList,"single nhjs")

  const deleteVendorlistUrl = endpoints.products.vendorListdelete;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" , data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(deleteVendorlistUrl,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        getAllVendorlist();
        toast("VendorList Deleted Successfully!" ,{type:"success"});
      }
      else if(res.data.message === false)
      {
        toast(res.data.message,{type:"error"});
      }
    })
    .catch((err) => {
       console.log(err,"error");
    })
  }

  // --------------------updated VendorList--------------------------------------

  const updatedVendorListUrl = endpoints.products.vendorListUpdate

  const handleUpdate = (id) =>{
   setModalShow(true);

   var selectedVendorlist = allVendorList.filter((itm , ind) => {
    return itm.ID == id
   })
   console.log(allVendorList,"all vendor")
   setSelectedVendorListId(id)
  console.log(selectedVendorlist,"here id")

  selectedVendorlist = selectedVendorlist[0];
  setVendorProductName(selectedVendorlist.VENDOR_PNAME);
  setVendorProductCode(selectedVendorlist.VENDOR_PCODE);
  setVendorLeadTime(selectedVendorlist.DELI_LEADTIME);
  setVendorQuantity(selectedVendorlist.VQTY);
  setVendorPrice(selectedVendorlist.VPRICE)
  setVendorCurrency(selectedVendorlist.VAL_CURRENCY);
  setVendorDate1(selectedVendorlist.START_DATE);
  setVendorDate2(selectedVendorlist.END_DATE);
  setVendor(selectedVendorlist.VID)
  setUpdtedVendorList(true)
  }

 const updateSelectedVendorlist = () => {

  const formData = new FormData();
  formData.append("ID" , selectedVendorListId);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);
  formData.append("User_AuthKey", userAuth);
  formData.append("Vendor_ID", vendor);
  formData.append("V_ProductName", vendorProductName);
  formData.append("V_ProductCode", vendorProductCode);
  formData.append("V_DeleveryLeadTime", vendorLeadTime);
  formData.append("V_Quantity", vendorQuantity);
  formData.append("V_Price", vendorPrice);
  formData.append("V_Currency", vendorCurrency);
  formData.append("V_StartDate", vendorDate1);
  formData.append("V_EndDate", vendorDate2);
  axios
  .post(updatedVendorListUrl, formData)
  .then((res) => {
    if (res.data.status) {
      toast("Varients updated successfully", { type: "success" });
      setModalShow(false);
      getAllVendorlist();
    } else if (res.data.status === false) {
      toast(res.data.message, { type: "warning" });
    }
  })
  .catch((err) => {
    console.log(err, "this is the error");
  });


 }


  const column = [
    { label :'Name', name:'VENDOR_PNAME'},
    { label :'currency', name:'VAL_CURRENCY'},
    { label :'Quantity', name:'VQTY'},
    { label :'Price', name:'VPRICE'},
    { label: "Action",
    name: "ID",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <div className="updtdlt">
            <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
              <MdDelete
                size={23}
                color="4f4e4d"
                onClick={() => deleteItem(value)}
                style={{cursor:"pointer"}}
              />
            </div>
          </>
        );
      },
    },
  }
    
  ]
  const column2 = [
    { label :'Name', name:'VENDOR_NAME'},
    { label :'currency', name:'VENDOR_CURRENCY'},
    { label :'Price', name:'VENDOR_PRICE'},
    { label: "Action",
    name: "ID",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <div className="updtdlt">
            <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
              <MdDelete
                size={23}
                color="4f4e4d"
                onClick={() => deleteItem(value)}
                style={{cursor:"pointer"}}
              />
            </div>
          </>
        );
      },
    },
  }
   
  ]

  console.log(productId , "productId")

  return (
   <>
   <div className="purchase_container">
    {productId  ?  <CustomTable data={allVendorList} column={column2}/> : <CustomTable data={allVendorList} column={column}/>
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
            <PurchaseInventory modalShow={modalShow} setModalShow={setModalShow} purchaseDetails={purchaseDetails} setPurchaseDetails={setPurchaseDetails} getSingleVendorList={getSingleVendorList} {...props} vendor={vendor} setVendor={setVendor} vendorProductName={vendorProductName} setVendorProductName={setVendorProductName} vendorProductCode={vendorProductCode} setVendorProductCode={setVendorProductCode} vendorLeadTime={vendorLeadTime} setVendorLeadTime={setVendorLeadTime} vendorQuantity={vendorQuantity} setVendorQuantity={setVendorQuantity} vendorPrice={vendorPrice} setVendorPrice={setVendorPrice} vendorCurrency={vendorCurrency} setVendorCurrency={setVendorCurrency} vendorDate1={vendorDate1} setVendorDate1={setVendorDate1} vendorDate2={vendorDate2} setVendorDate2={setVendorDate2} updateSelectedVendorlist={updateSelectedVendorlist} updatedVendorList={updatedVendorList} setUpdtedVendorList={setUpdtedVendorList}/>

            <ToastContainer />
          </div>
   </>
  )
}

export default PurchaseEdit