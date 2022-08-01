import React from "react";
import "./WarehouseConfig.css";
const WarehouseConfig = () => {
  return (
    <div className="WarehouseConfigContainer">
      <div className="configpart1">
        <p>Shipments</p>
        <div className="checkbox">
          <p>Incoming Shipments</p>
          <input type="radio" />
          <label>Receive goods directly (1 step)</label>
        </div>
        <div className="checkbox">
          <p></p>
          <input type="radio" />
          <label>Receive goods in input and then stock (2 steps)</label>
        </div>
        <div className="checkbox">
          <p></p>
          <input type="radio" />
          <label>
            Receive goods in input, then quality and then stock (3 steps)
          </label>
        </div>
        <div className="checkbox" style={{marginTop : "12px"}}>
          <p>Outgoing Shipments</p>
          <input type="radio" />
          <label>Receive goods directly (1 step)</label>
        </div>
       
        <div className="checkbox">
          <p></p>
          <input type="radio" />
          <label>Send goods in output and then deliver (2 steps)</label>
        </div>
        <div className="checkbox">
          <p></p>
          <input type="radio" />
          <label>
            Pack goods, send goods in output and then deliver (3 steps)
          </label>
        </div>
      </div>
      <div className="config2">
        <h6>Resupply</h6>
        <div className="configcontent">
          <p>Buy to Resupply</p>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default WarehouseConfig;
