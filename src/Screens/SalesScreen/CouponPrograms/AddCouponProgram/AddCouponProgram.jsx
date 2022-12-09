import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SalesNavbar from '../../SalesNavbar/SalesNavbar'
import './AddCouponProgram.css'
import GenerateCoupon from './GenerateCoupon'

const AddCouponProgram = () => {
    const [modalShow , setModalShow] = useState(false)
  return (
    <div><SalesNavbar showBelowMenu={true} title="Coupon Programs
    "/>
          <div className="coupon_generate">
            <button className='generatebtn' onClick={() => setModalShow(true)}>Generate Coupon</button>
          </div>
             <div className="addproMainCon">
                  <div className="addproCon">
                        <div className="proprogramName">
                            <p>Program Name</p>
                            <input type="text"  />
                        </div>
                        <div className="program_content">
                            <div className="program_conditions">
                                <h3>Conditions</h3>
                                <div className="program_text">
                                    <p>Based on Product</p>
                                    <select>
                                        <option></option>
                                        <option>041015671551 - Sayed Abubakar Idrees</option>
                                        <option>041059735525 Aboulwafa Abdulhameed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="program_validity">
                                <h3>Validity</h3>
                            <div className="program_text">
                                    <p>Start Date</p>
                                   <input type="date" />
                                </div>
                            <div className="program_text">
                                    <p>End Date</p>
                                   <input type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="program_quantity">
                        <div className="program_text">
                                    <p>Quantity</p>
                                   <input type="text" placeholder='1'/>
                                </div>
                        <div className="program_minimum">
                                    <p>Minimum Purchase Of</p>
                                   <input type="text" placeholder='1'/>
                                   <select>
                                    <option></option>
                                    <option>Tax Included</option>
                                    <option>Tax Excluded</option>
                                   </select>
                                </div>
    
                        </div>
                        <div className="program_rewards">
                            <div className="pro_reward">
                            <h3>Rewards</h3>
                            <div className="promo_Code">
                                    <p>Reward</p>
                                    <div>
                                    <div className="promo_radio">
                                        <input type="radio" name='reward'/>
                                        <span>Discount</span>
                                    </div>
                                    <div className="promo_radio">
                                        <input type="radio" name='reward' />
                                        <span>Free Product</span>
                                    </div>
                                    <div className="promo_radio">
                                        <input type="radio"  name='reward'/>
                                        <span>Free Shipping</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pro_discount">
                            <div className="program_minimum">
                                    <p>Apply Discount</p>
                                    <select>
                                    <option></option>
                                    <option>Percentage</option>
                                    <option>Fixed Ammount</option>
                                   </select>
                                   <input type="text" placeholder='10.0'/>
                                </div>
                                <div className="promo_Code">
                                    <p>Discount Apply On</p>
                                    <div>
                                    <div className="promo_radio">
                                        <input type="radio" name="discount"/>
                                        <span>On Order</span>
                                    </div>
                                    <div className="promo_radio">
                                        <input type="radio" name="discount"/>
                                        <span>On Cheapest Product</span>
                                    </div>
                                    <div className="promo_radio">
                                        <input type="radio" name="discount"/>
                                        <span>On Specific Products</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="program_text">
                                    <p>Max Discount Amount</p>
                                   <input type="text" placeholder='0.00'/>
                                </div>
    
                            </div>
                        </div>
                  </div>
             </div>
             <GenerateCoupon modalShow={modalShow} setModalShow={setModalShow}/>
             </div>
  )
}

export default AddCouponProgram