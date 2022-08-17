import React from 'react'
import './GeneralInformationEdit.css';
import { FaArrowRight } from 'react-icons/fa';
import {FaExternalLinkAlt} from 'react-icons/fa'

const GeneralInformationEdit = (props) => {

  const {productType , setProductType, productCategory , setProductCategory , interRef , setInterRef, units, setUnits,salesPrice,setSalesPrice,customerTax,setCustomerTax,cost,setCost,description,setDescription} = props;

  return (
    <div>
      <div className='GeneralInformationEditContainer'>
        <div className="Editpart1">
          <div className="Editfirstcontent">
            <p>Product Type</p>
           <select value={productType} onChange={(e) => setProductType(e.target.value)}>
            <option>Consumable</option>
            <option>Service</option>
            <option>Storable Product</option>
           </select>
          </div>
          <div className="Editfirstcontent">
            <p> Product Category</p>
            <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
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
            <input type="text" value={interRef} onChange={(e) => setInterRef(e.target.value)}/>
          </div>
          <div className="Editfirstcontent2">
            <p>Barcode</p>
            <input type="text" />
          </div>
          <h5>Internal Notes</h5>
          <textarea placeholder='This note is only for internal purposes.' value={description} onChange={(e) => setDescription(e.target.value)} style={{width:"450px",border:"none",outline:"none",}}/>
        </div>
        <div className="Editpart2">
          <div className="Editfirstcontent3">
            <p>Sales Price</p>
            <input type='text'  placeholder='1.0000 SAR' value={salesPrice} onChange={(e) => setSalesPrice(e.target.value)} />
            <FaArrowRight size="20px" style={{ color: "#008784", marginLeft: "10px" }} />
            <span>Extra Prices</span>
          </div>
          <div className="Editfirstcontent3">
          <p style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}>Customer Taxes</p>
           <input type="text" style={{width:"450px",outline:'none',border:'none',borderBottom:'1px solid #cccc'}} value={customerTax} onChange={(e) => setCustomerTax(e.target.value)}/>
          </div>
          <div className="Editfirstcontent3">
            <p>Cost</p>
            <input type="text" placeholder='0.0000 SARper Units'  value={cost} onChange={(e) => setCost(e.target.value)} style={{width:"450px",border:"none",outline:"none",borderBottom:"1px solid #cccc"}}/>
            {/* <span style={{ color: "#008784" }}>Update Cost</span> */}
          </div>
          <div className="Editfirstcontent3">
            <p>Unit of Measure</p>
            <select value={units} onChange={(e) => setUnits(e.target.value)}>
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