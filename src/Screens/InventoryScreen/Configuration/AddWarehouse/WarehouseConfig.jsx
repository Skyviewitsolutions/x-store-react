import React from "react";
import "./WarehouseConfig.css";

const WarehouseConfig = (props) => {
  const {
  buy,setBuy,resupply,setResupply,menufactureResupply,setMenufactureResupply,manufacture,setManufacture,
  } = props;

  console.log(resupply , "resupply here");
  return (
    <div className="WarehouseConfigContainer">
      <div className="config2">
        <h6>Resupply</h6>
        <div className="configcontent">
          <p>Buy to Resupply</p>
          <input
            type="checkbox"
            checked={buy}
            onChange={() => setBuy(!buy)}
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
            checked={menufactureResupply}
            onChange={() => setMenufactureResupply(!menufactureResupply)}
          />
        </div>
        <div className="manufacturure">
            <p>Manufacture</p>
            <select value={manufacture} onChange={(e) => setManufacture(e.target.value)}>
              <option value="">Select any one</option>
              <option value="Manufacture (1 step)">Manufacture (1 step)</option>
              <option value="Pick components and then manufacture (2 steps)">Pick components and then manufacture (2 steps)</option>
              <option value="Pick components, manufacture and then store products (3 steps)">Pick components, manufacture and then store products (3 steps)Pick components, manufacture and then store products (3 steps)</option>
            </select>
            </div>
        </div>
      </div>
  );
};

export default WarehouseConfig;
