import React from 'react'
import './Other.css'
const Other = () => {
  return (
    <div>
        <div className="other_Container">
            <div className="other_Sales">
                {/* <h3>Sales</h3> */}
                <div className="other_details">
                    <p>Sales Person</p>
                    <select>
                        <option> </option>
                        <option>Accountant-Ryd</option>
                        <option>CRUH 01</option>
                        <option>CRUH 02</option>
                        <option>Finance & Controlling</option>
                    </select>
                </div>
                <div className="other_details">
                    <p>Sales Team</p>
                    <select>
                        <option> </option>
                        <option>Accountant-Ryd</option>
                        <option>CRUH 01</option>
                        <option>CRUH 02</option>
                        <option>Finance & Controlling</option>
                    </select>
                </div>
                <div className="other_details">
                    <p>Shipping Policy</p>
                    <select>
                        <option> </option>
                        <option>Accountant-Ryd</option>
                        <option>CRUH 01</option>
                        <option>CRUH 02</option>
                        <option>Finance & Controlling</option>
                    </select>
                </div>
                <div className="other_details">
                    <p>Delivery Date</p>
                   <input type="date" />
                </div>
                {/* <div className="other_checkbox">
                    <p>Online Signature</p>
                   <input type="checkbox" />
                </div>
                <div className="other_checkbox">
                    <p>Online Payment</p>
                   <input type="checkbox" />
                </div>
                <div className="other_details">
                    <p>Customer Reference</p>
                   <input type="text" />
                </div> */}
            </div>
            <div className="other_Invoicing">
                {/* <h3>Invoicing</h3> */}
                {/* <div className="other_details">
                    <p>Fiscal Position</p>
                    <select>
                        <option> </option>
                        <option>Accountant-Ryd</option>
                        <option>CRUH 01</option>
                        <option>CRUH 02</option>
                        <option>Finance & Controlling</option>
                    </select>
                </div> */}
               
            </div>
        </div>
    </div>
  )
}

export default Other