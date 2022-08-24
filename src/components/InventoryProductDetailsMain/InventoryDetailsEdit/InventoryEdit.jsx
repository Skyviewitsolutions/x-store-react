import React, { useEffect , useState} from 'react'
import './InventoryEdit.css';
import { FaExternalLinkAlt } from 'react-icons/fa'
import axios from 'axios'
const InventoryEdit = () => {
    return (
        <div className='InventoryEditContainer'>
            <div className="Inventory1Edit">
                <div className="OperatinEdit">
                    <h5>Operations</h5>
                    <div className="Editcontent1">
                         <p>Routes</p>
                        <input type="checkbox" />
                        <label>Buy</label> 
                    </div>
                    <div className="Editcontent1">
                        <p></p>
                        <input type="checkbox" />
                        <label>Replenish on Order (MTO)</label>
                    </div>
                    <div className="Editcontent2">
                        <p>Customer Lead Time</p>
                        <input type="text" placeholder='0.00' />
                        <span>days</span>
                    </div>
                </div>
                <div className='EditLogistics'>
                    <h5>Logistics</h5>
                    <div className="Editcontent2">
                        <p>Weight</p>
                        <input type="text" placeholder='0.00' style={{ width: "450px" }} />
                        <span>kg</span>
                    </div>
                    <div className="Editcontent2">
                        <p>Volume</p>
                        <input type="text" placeholder='0.00' style={{ width: "450px" }} />
                        <span>m³</span>
                    </div>
                    <div className="Editcontent1">
                        <p>Responsible</p>
                        <select>
                            <option>Administrator</option>
                            <option>Abd Alla Mohamed Ahmed</option>
                            <option>Abdel Hamid Ali Altawaita</option>
                            <option>Abdul Basit Abdul Ghani</option>
                            <option>Abdulmajeed Zidan Khan</option>
                            <option>Abdullah Mahyoub Moh</option>
                            <option>Abdullah Saad Mohsen Alghamdi</option>
                            <option>Search More..</option>
                        </select>
                        <FaExternalLinkAlt size="14px" style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }} />
                    </div>
                </div>
                <div className='EditDescription'>
                    <h5>Description for Delivery Orders</h5>
                    <textarea placeholder='this note is added to delivery orders'>
                    </textarea>
                    <h5>Description for Receipts</h5>
                    <textarea placeholder='This note is added to receipt orders (e.g.where to store the product in the warehouse).'>
                    </textarea>
                    <h5>Description for Internal Transfers</h5>
                    <textarea placeholder='This note is added to internal transfer orders (e.g.where to pick the product in the warehouse).'>
                    </textarea>
                </div>
            </div>
            <div className="EditInventory2">
                <h5>Traceability</h5>
                <div className="Editcontent1">
                    <p>Tracking</p>
                    <div className='ediContList'>
                        <div>
                    <input type="radio" name='name' />
                    <label>By Unique Serial Number</label>
                    </div>
                    <div>
                    <input type="radio" name='name' />
                    <label>By Lots</label>
                    </div>
                    <div>
                    <input type="radio" name='name' />
                    <label>No Tracking</label>
                    </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryEdit