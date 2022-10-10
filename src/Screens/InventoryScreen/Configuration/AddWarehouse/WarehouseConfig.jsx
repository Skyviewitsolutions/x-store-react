import React from "react";
import "./WarehouseConfig.css";

const WarehouseConfig = (props) => {
  const {
    incomingShips,
    setIncomingships,
    outgoingShips,
    setOutgoingships,
    setResupply,
    resupply,
  } = props;
  return (
    <div className="WarehouseConfigContainer">
      <div className="config2">
        <h6>Resupply</h6>
        <div className="configcontent">
          <p>Buy to Resupply</p>
          <input
            type="checkbox"
            checked={resupply}
            onChange={() => setResupply(!resupply)}
          />
        </div>
        <div className="configcontent">
          <p>Resupply Subcontractors</p>
          <input
            type="checkbox"
            checked={resupply}
            onChange={() => setResupply(!resupply)}
          />
        </div>
        <div className="configcontent">
          <p>Manufacture to Resupply</p>
          <input
            type="checkbox"
            checked={resupply}
            onChange={() => setResupply(!resupply)}
          />
        </div>
        <div className="manufacturure">
            <p>Manufacture</p>
            <select>
              <option></option>
              <option>Manufacture (1 step)</option>
              <option>Pick components and then manufacture (2 steps)</option>
              <option>Pick components, manufacture and then store products (3 steps)</option>
            </select>
            </div>
        </div>
      </div>
  );
};

export default WarehouseConfig;
