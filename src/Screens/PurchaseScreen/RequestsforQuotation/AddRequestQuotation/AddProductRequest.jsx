import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CustomTable from '../../../../components/CustomTable/CustomTable'
import { RequestProduct } from '../../../../components/Model/PurhcaseRequestProduct/RequestProduct'
import { endpoints } from '../../../../services/endpoints'
import './AddProductRequest.css'

const AddProductRequest = (props) => {

    const navigate = useNavigate()
    const {vendor} = props;

const [modalShow , setModalShow] = useState(false)
const [productAll , setProductAll] = useState([]);
const productUrl = endpoints.requestQuotation.getAllproductdetails;
console.log(productUrl,"gfshdgfgad")
const getAuthtoken = localStorage.getItem("authtoken");
const userAuth = localStorage.getItem("userAuth");
const vendorId = localStorage.getItem("varId");

useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    formData.append("Vendor_ID" , vendor)
    axios.post(productUrl,formData)
    .then((res) => {
      console.log(res,"responscbdch")
      if(res.data.status === true){
        setProductAll(res.data.data)
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
      console.log(err , "something went wrong");
    })
},[vendor])


const column = [
    {label:"VenID" , name:"VENDOR_ID"},
    {label:"No" , name:"SERIAL_NO"},
    {label:"Product" , name:"PRODUCT_NAME"},
    {label:"Description" , name:"DESCRIPTION"},
    {label:"Quantity" , name:"PRODUCT_QUANTITY"},
    {label:"UOM" , name:"UNIT_OF_MEASUREMENT"},
]

  return (
    <div>
        <div className="addproduct_Con">
        <CustomTable data={productAll} column={column} />
            <button className='add_productbtn' onClick={() => setModalShow(true)}>Add Product</button>
            <div className="addproduct_conditions">
                <div className="add_Part1">
                    <input type="text" placeholder='Define your terms and conditions...' />
                </div>
                {/* <div className="add_part2">
                <hr style={{width:"250px",color:"#6666",fontWeight:"bold",height:"2px"}}/>
                    <div className="add_text">
                        <p>Untaxed Amount:</p>
                        <span>0.00 SR</span>
                    </div>
                    <div className="add_text">
                        <p>Taxes:</p>
                        <span>0.00 SR</span>
                    </div>
                    <hr style={{width:"250px",color:"#6666",height:"2px"}}/>
                    <div className="add_text">
                        <p>Total:</p>
                        <span>0.00 SR</span>
                    </div>
                </div> */}
            </div>

        </div>
        <RequestProduct modalShow={modalShow} setModalShow={setModalShow}/>
    </div>
  )
}

export default AddProductRequest