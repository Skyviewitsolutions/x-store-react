import React from 'react'
import './AddRoutePopup.css';
import { Modal } from 'react-bootstrap';
import {MdOutlineCancel} from 'react-icons/md';
import {FaExternalLinkAlt} from 'react-icons/fa'
const AddRoutePopup = (props) => {
     
    const {showAddRoute ,setShowAddRoute} = props;

  return (
    <>
     <Modal show={showAddRoute} size='lg'>
    <div className="AddLocationPapupCon">
        <div className="AddLocationDiv1">
            <p>Create Rules</p>
        </div>
        <div className="Addlocationpopupmain">
         <div className="Addlocationdetails">
            <p>Name</p>
            <input type="text" />
         </div>
         <div className="Addlocationpopupdropdown">
           <div className="dropdownpart">
            <div className="dropdowndetails">
            <p>Action</p>
            <select>
                <option></option>
                <option>Pull Form</option>
                <option>Push To</option>
                <option>Pull & Push</option>
                <option>Buy </option>
            </select>
            </div>
            <div className="dropdowndetails">
            <p>Operation Type</p>
            <select>
                <option></option>
                <option>RIYADH warehouse: Receipts</option>
                <option>Al-Aflaj Warehouse: Receipts</option>
                <option>Al-Majma'ah Warehouse: Receipts</option>
                <option> Yanbu Warehouse: Receipts</option>
                <option> Makkah Warehouse: Receipts</option>
                <option> Al-Bahah Warehouse: Receipts</option>
                <option>Al-Reen Warehouse: Receipts</option>
                <option>Search More...</option>
                <option>Create & Edit...</option>
            </select>
            <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
            </div>
            <div className="dropdowndetails">
            <p>Source Location</p>
            <select>
                <option></option>
                <option>AFWH</option>
                <option>AFWH/Stock</option>
                <option>AFWH/Stock/Diesel</option>
                <option>AFWH/Stock/Oil</option>
                <option>BAPMS</option>
                <option>BAPMS/Al Baha Store for Projects Materials</option>
                <option>Search More..</option>
             </select>
             <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
            </div>
            <div className="dropdowndetails">
            <p>Distinition Location</p>
            <select>
                <option></option>
                <option>AFWH</option>
                <option>AFWH/Stock</option>
                <option>AFWH/Stock/Diesel</option>
                <option>AFWH/Stock/Oil</option>
                <option>BAPMS</option>
                <option>BAPMS/Al Baha Store for Projects Materials</option>
                <option>Search More..</option>
             </select>
             <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
            </div>
            <div className="dropdowndetails">
            <p>Supply Method</p>
            <select>
                <option></option>
                <option>Take from stock</option>
                <option>Trigger Another Rule</option>
                <option>Take from stock,If Unavailable,Trigger another Rule</option>
             </select>
             <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
            </div>
         </div>
         <div className="Addlocationempty"></div>
         </div>
         
         <div className="Options">
            <h5>Options</h5>
            <div className="optioninputtype">
                <p>Delay</p>
                <input type="text" placeholder='0'/>
            </div>
             </div>
                <div onClick={() => setShowAddRoute(false)}>
                <MdOutlineCancel size='25px' className='cuticons'/>
                </div>
    </div>
    <div className="Addlocationfooter">
            <button className='Addlocationbtn'>Save & Close</button>
            <button className='Addlocationbtn'>Save & New</button>
            <button className='Addlocationbtn1'>Discard</button>
                </div>
    </div>
    </Modal>
    </>
  )
}

export default AddRoutePopup