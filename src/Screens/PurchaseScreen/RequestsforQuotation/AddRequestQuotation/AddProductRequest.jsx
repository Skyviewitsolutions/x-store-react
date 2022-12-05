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
    const { modalShow, setModalShow,serialNo,setSerialNo,productdet,setProductDet,description,setDescription,quantity,setQuantity,uomdet,setUomdet,vendorId,setVendorId,save,vendor,column,productAll,saveProduct,} = props;
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
       
        <RequestProduct {...props}/>

    </div>
  )
}

export default AddProductRequest