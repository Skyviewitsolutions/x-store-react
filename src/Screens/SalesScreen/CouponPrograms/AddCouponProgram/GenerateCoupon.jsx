import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { MdOutlineCancel } from 'react-icons/md'
import SalesNavbar from '../../SalesNavbar/SalesNavbar'
import './GenerateCoupon.css'

const GenerateCoupon = (props) => {

    const {modalShow,setModalShow} = props

  return (
    <div>
      <Modal show={modalShow} size="lg">
        <div className="generate_maincon">
            <div className="generate_heading">
                <h3>Number of Coupons To Generate</h3>
            </div>
              <div className="generate_con">
                 <div className="generate_type">
                 <p>Generation Type</p>
                 <div>
                <div className="renerate_radio">
                    <input type="radio" name="generate"/>
                    <label>Number of Coupons</label>
                    </div>
                <div className="renerate_radio">
                    <input type="radio" name="generate"/>
                    <label>Number of Selected Customers</label>
                    </div> 
                 </div>
                 </div>
                <div className="number_coupon">
                <p>Customers</p>
               <select>
                <option></option>
                <option>Ankur</option>
               </select>
              </div>
              <div className="number_coupon">
                <p>Number of Coupons</p>
                <input type="text" />
              </div>
                
              </div>
              <div className="generate_btn">
              <button className="btn_gen" >
                  Generate
                </button>
              </div>
            
             
        </div>
        <div onClick={() => setModalShow(false)}>
            <MdOutlineCancel size="25px" className="Cancel_icons" />
          </div>
        </Modal>
    </div>
  )
}

export default GenerateCoupon