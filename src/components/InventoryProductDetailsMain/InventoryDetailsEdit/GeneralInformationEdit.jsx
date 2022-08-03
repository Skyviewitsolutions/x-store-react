import React from 'react'
import './GeneralInformationEdit.css';
import { FaArrowRight } from 'react-icons/fa';
import {FaExternalLinkAlt} from 'react-icons/fa'
const GeneralInformationEdit = () => {
  return (
    <div>
      <div className='GeneralInformationEditContainer'>
        <div className="Editpart1">
          <div className="Editfirstcontent">
            <p>Product Type</p>
           <select>
            <option>Consumable</option>
            <option>Service</option>
            <option>Storable Product</option>
           </select>
          </div>
          <div className="Editfirstcontent">
            <p> Product Category</p>
            <select>
              <option>Filters / PUTZMEISTER</option>
              <option>Assets</option>
              <option>Assets / Computers and Printers</option>
              <option>Assets / Extinguishing programs, permits and licenses</option>
              <option>Assets / Furniture </option>
              <option>Assets / Houses</option>
              <option>Assets / lab equipment</option>
              <option>Assets / Prefabricated plastic and concrete barriers</option>
              <option><span  style={{ color: "#008784" }}>Search More....</span></option>
              <option><span  style={{ color: "#008784" }}>Create and Edit...</span></option>
            </select>
          </div>
          <div className="Editfirstcontent2">
            <p>Internal Reference</p>
            <input type="text" />
          </div>
          <div className="Editfirstcontent2">
            <p>Barcode</p>
            <input type="text" />
          </div>
          <h5>Internal Notes</h5>
          <span>This note is only for internal purposes.</span>
        </div>
        <div className="Editpart2">
          <div className="Editfirstcontent3">
            <p>Sales Price</p>
            <input type='text'  placeholder='1.0000 SAR' />
            <FaArrowRight size="20px" style={{ color: "#008784", marginLeft: "10px" }} />
            <span>Extra Prices</span>
          </div>
          <div className="Editfirstcontent3">
          <p style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}>Customer Taxes</p>
           <input type="text" style={{width:"450px"}}/>
          </div>
          <div className="Editfirstcontent3">
            <p>Cost</p>
            <span>	0.0000 SARper Units</span>
            <span style={{ color: "#008784" }}>Update Cost</span>
          </div>
          <div className="Editfirstcontent3">
            <p>Unit of Measure</p>
            <select>
              <option>Unit</option>
            <option>BAG</option>
            <option>Barell</option>
            <option>Cm</option>
            <option>Days</option>
            <option>Dozens</option>
            <option>DRUM</option>
            <option>Oz</option>
           </select>
           <FaExternalLinkAlt size="14px" style={{color:"#79757d",marginLeft:"8x",marginTop:"10px"}}/>
          </div>
          <div className="Editfirstcontent3">
            <p>Purchase Unit of</p>
            <select>
              <option>Unit</option>
            <option>BAG</option>
            <option>Barell</option>
            <option>Cm</option>
            <option>Days</option>
            <option>Dozens</option>
            <option>DRUM</option>
            <option>Oz</option>
           </select>
           <FaExternalLinkAlt size="14px" style={{color:"#79757d",marginLeft:"8px",marginTop:"10px"}}/>
          </div>
          <p style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}>Measure</p>

        </div>

      </div>
    </div>
  )
}

export default GeneralInformationEdit