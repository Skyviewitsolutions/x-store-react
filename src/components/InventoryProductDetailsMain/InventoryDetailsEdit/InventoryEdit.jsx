import React, { useEffect, useState } from "react";
import "./InventoryEdit.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

const InventoryEdit = (props) => {
  const {
    buy,
    setBuy,
    customerLeadTime,
    setCustomerLeadTime,
    weight,
    setWeight,
    volume,
    setVolume,
    responsible,
    setResponsible,
    descriptionDeliveryOrder,
    setDescriptionDeliveryOrder,
    descriptionInternalTranser,
    setDescriptionInternalTranser,
    descriptionForReceipt,
    setDescriptionForReceipt,
    replenishOnOrder,
    setReplenishOnOrder,
  } = props;

  return (
    <div className="InventoryEditContainer">
      <div className="Inventory1Edit">
        <div className="OperatinEdit">
          <h5>Operations</h5>
          <div className="Editcontent1">
            <p>Routes</p>
            <input
              type="checkbox"
              value={buy}
              onChange={() => setBuy(!buy)}
              checked={buy}
            />
            <label>Buy</label>
          </div>
          <div className="Editcontent1">
            <p></p>
            <input
              type="checkbox"
              value={replenishOnOrder}
              checked={replenishOnOrder}
              onChange={() => setReplenishOnOrder(!replenishOnOrder)}
            />
            <label>Replenish on Order (MTO)</label>
          </div>
          <div className="Editcontent2">
            <p>Customer Lead Time</p>
            <input
              type="text"
              placeholder="0.00"
              value={customerLeadTime}
              onChange={(e) => setCustomerLeadTime(e.target.value)}
            />
            <span>days</span>
          </div>
        </div>
        <div className="EditLogistics">
          <h5>Logistics</h5>
          <div className="Editcontent2">
            <p>Weight</p>
            <input
              type="text"
              placeholder="0.00"
              style={{ width: "450px" }}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <span>kg</span>
          </div>
          <div className="Editcontent2">
            <p>Volume</p>
            <input
              type="text"
              placeholder="0.00"
              style={{ width: "450px" }}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            <span>m³</span>
          </div>
          <div className="Editcontent1">
            <p>Responsible</p>
            <select value={responsible} onChange={(e) => setResponsible(e.target.value)}>
            <option value="">Select any one</option>
              <option value="Administrator">Administrator</option>
              <option value="Abd Alla Mohamed Ahmed">Abd Alla Mohamed Ahmed</option>
              <option value="Abdel Hamid Ali Altawaita">Abdel Hamid Ali Altawaita</option>
              <option value="Abdul Basit Abdul Ghani">Abdul Basit Abdul Ghani</option>
              <option value="Abdulmajeed Zidan Khan">Abdulmajeed Zidan Khan</option>
              <option value="Abdullah Mahyoub Moh">Abdullah Mahyoub Moh</option>
              <option value="Abdullah Saad Mohsen Alghamdi">Abdullah Saad Mohsen Alghamdi</option>
            </select>
            {/* <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            /> */}
          </div>
        </div>
        <div className="EditDescription">
          <h5>Description for Delivery Orders</h5>
          <textarea
            placeholder="This note is added to delivery orders"
            value={descriptionDeliveryOrder}
            onChange={(e) => setDescriptionDeliveryOrder(e.target.value)}
          ></textarea>
          <h5>Description for Receipts</h5>
          <textarea
            placeholder="This note is added to receipt orders (e.g.where to store the product in the warehouse)."
            value={descriptionForReceipt}
            onChange={(e) => setDescriptionForReceipt(e.target.value)}
          ></textarea>
          <h5>Description for Internal Transfers</h5>
          <textarea
            placeholder="This note is added to internal transfer orders (e.g.where to pick the product in the warehouse)."
            value={descriptionInternalTranser}
            onChange={(e) => setDescriptionInternalTranser(e.target.value)}
          ></textarea>
        </div>
      </div>
      {/* <div className="EditInventory2">
        <h5>Traceability</h5>
        <div className="Editcontent1">
          <p>Tracking</p>
          <div className="ediContList">
            <div>
              <input type="radio" name="name" />
              <label>By Unique Serial Number</label>
            </div>
            <div>
              <input type="radio" name="name" />
              <label>By Lots</label>
            </div>
            <div>
              <input type="radio" name="name" />
              <label>No Tracking</label>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default InventoryEdit;
