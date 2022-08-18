import React from "react";
import "./GeneralInformationEdit.css";
import { FaArrowRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const GeneralInformationEdit = (props) => {
  const {
    productType,
    setProductType,
    productCategory,
    setProductCategory,
    interRef,
    setInterRef,
    units,
    setUnits,
    salesPrice,
    setSalesPrice,
    customerTax,
    setCustomerTax,
    cost,
    setCost,
    description,
    setDescription,
  } = props;

  return (
    <div>
      <div className="GeneralInformationEditContainer">
        <div className="Editpart1">
          <div className="Editfirstcontent">
            <p>Product Type</p>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="Consumable">Consumable</option>
              <option value="Service">Service</option>
              <option value="Storable Product">Storable Product</option>
            </select>
          </div>
          <div className="Editfirstcontent">
            <p> Product Category</p>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="Filters / PUTZMEISTER">
                Filters / PUTZMEISTER
              </option>
              <option value="Assets">Assets</option>
              <option value="Assets / Computers and Printers">
                Assets / Computers and Printers
              </option>
              <option value="Assets / Extinguishing programs, permits and licenses">
                Assets / Extinguishing programs, permits and licenses
              </option>
              <option value="Assets / Furniture">Assets / Furniture </option>
              <option value="Assets / Houses">Assets / Houses</option>
              <option value="Assets / lab equipment">
                Assets / lab equipment
              </option>
              <option value="Assets / Prefabricated plastic and concrete barriers">
                Assets / Prefabricated plastic and concrete barriers
              </option>
              <option value="Create and Edit..." style={{ color: "#1f1fed" }}>
                Create and Edit...
              </option>
            </select>
          </div>
          <div className="Editfirstcontent2">
            <p>Internal Reference</p>
            <input
              type="text"
              value={interRef}
              onChange={(e) => setInterRef(e.target.value)}
            />
          </div>
          <div className="Editfirstcontent2">
            <p>Barcode</p>
            <input type="text" />
          </div>
          <h5>Internal Notes</h5>
          <textarea
            placeholder="This note is only for internal purposes."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "450px", border: "none", outline: "none" }}
          />
        </div>
        <div className="Editpart2">
          <div className="Editfirstcontent3">
            <p>Sales Price</p>
            <input
              type="text"
              placeholder="1.0000 SAR"
              value={salesPrice}
              onChange={(e) => setSalesPrice(e.target.value)}
            />
            <FaArrowRight
              size="20px"
              style={{ color: "#008784", marginLeft: "10px" }}
            />
            <span>Extra Prices</span>
          </div>
          <div className="Editfirstcontent3">
            <p
              style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}
            >
              Customer Taxes
            </p>
            <input
              type="text"
              style={{
                width: "450px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid #cccc",
              }}
              value={customerTax}
              onChange={(e) => setCustomerTax(e.target.value)}
            />
          </div>
          <div className="Editfirstcontent3">
            <p>Cost</p>
            <input
              type="text"
              placeholder="0.0000 SAR per Units"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              style={{
                width: "450px",
                border: "none",
                outline: "none",
                borderBottom: "1px solid #cccc",
              }}
            />
            {/* <span style={{ color: "#008784" }}>Update Cost</span> */}
          </div>
          <div className="Editfirstcontent3">
            <p>Unit of Measure</p>
            <select value={units} onChange={(e) => setUnits(e.target.value)}>
              <option value="Barell">Barell</option>
              <option value="Cm">Cm</option>
              <option value="Days">Days</option>
              <option value="Dozens">Dozens</option>
              <option value="DRUM">DRUM</option>
              <option value="Oz">Oz</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8x", marginTop: "10px" }}
            />
          </div>
          <div className="Editfirstcontent3">
            <p>Purchase Unit of</p>
            <select>
              <option value="Barell">Barell</option>
              <option value="Cm">Cm</option>
              <option value="Days">Days</option>
              <option value="Dozens">Dozens</option>
              <option value="DRUM">DRUM</option>
              <option value="Oz">Oz</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
          <p style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}>
            Measure
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformationEdit;
