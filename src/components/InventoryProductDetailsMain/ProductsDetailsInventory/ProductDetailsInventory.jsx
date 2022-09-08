import React from "react";
import "./ProductDetailsInventory.css";

const ProductDetailsInventory = (props) => {

  const {buy,replenishOnOrder,customerLeadTime,weight,volume,descriptionDeliveryOrder,descriptionForReceipt,descriptionInternalTranser} = props;
  return (
    <div className="InventoryContainer">
      <div className="Inventory1">
        <div className="Operatin">
          <h5>Operations</h5>
          <div className="content1">
            <p>Routes</p>
            <input type="checkbox" />
            <label>Buy</label>
          </div>
          <div className="content1">
            <p></p>
            <input type="checkbox" />
            <label>Replenish on Order (MTO)</label>
          </div>
          <div className="content1">
            <p>Customer Lead Time</p>
            <span>{customerLeadTime}</span>
          </div>
        </div>
        <div className="Logistics">
          <h5>Logistics</h5>
          <div className="content1">
            <p>Weight</p>
            <span>{weight}</span>
          </div>
          <div className="content1">
            <p>Volume</p>
            <span>{volume}</span>
          </div>
          <div className="content1">
            <p>Responsible</p>
            <span style={{ color: "#00878f" }}>Administrator</span>
          </div>
        </div>
        <div>
          <h5>{descriptionDeliveryOrder}</h5>
          <h5>{descriptionForReceipt}</h5>
          <h5>{descriptionInternalTranser}</h5>
        </div>
      </div>
      <div className="Inventory2">
        <h5>Traceability</h5>
        <div className="content1">
          <p>Tracking</p>
          <span> No Tracking </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsInventory;
