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
      <div className="configpart1">
        <p>Shipments</p>
        <div className="checkbox">
          <p>Incoming Shipments</p>
          <input
            type="radio"
            name="incomeShipping"
            onChange={(e) => setIncomingships(e.target.value)}
            value="Receive goods directly (1 step)"
            checked={incomingShips === "Receive goods directly (1 step)"}
          />
          <label>Receive goods directly (1 step)</label>
        </div>
        <div className="checkbox">
          <p></p>
          <input
            type="radio"
            name="incomeShipping"
            value="Receive goods in input and then stock (2 steps)"
            onChange={(e) => setIncomingships(e.target.value)}
            checked={
              incomingShips ===
              "Receive goods in input and then stock (2 steps)"
            }
          />
          <label>Receive goods in input and then stock (2 steps)</label>
        </div>
        <div className="checkbox">
          <p></p>
          <input
            type="radio"
            name="incomeShipping"
            value="Receive goods in input, then quality and then stock (3 steps)"
            onChange={(e) => setIncomingships(e.target.value)}
            checked={
              incomingShips ===
              "Receive goods in input, then quality and then stock (3 steps)"
            }
          />
          <label>
            Receive goods in input, then quality and then stock (3 steps)
          </label>
        </div>
        <div className="checkbox" style={{ marginTop: "12px" }}>
          <p>Outgoing Shipments</p>
          <input
            type="radio"
            name="outgoingShipping"
            value="Receive goods directly (1 step)"
            onChange={(e) => setOutgoingships(e.target.value)}
            checked={outgoingShips === "Receive goods directly (1 step)"}
          />
          <label>Receive goods directly (1 step)</label>
        </div>

        <div className="checkbox">
          <p></p>
          <input
            type="radio"
            name="outgoingShipping"
            value="Send goods in output and then deliver (2 steps)"
            onChange={(e) => setOutgoingships(e.target.value)}
            checked={
              outgoingShips ===
              "Send goods in output and then deliver (2 steps)"
            }
          />
          <label>Send goods in output and then deliver (2 steps)</label>
        </div>
        <div className="checkbox">
          <p></p>
          <input
            type="radio"
            name="outgoingShipping"
            value="Pack goods, send goods in output and then deliver (3 steps)"
            onChange={(e) => setOutgoingships(e.target.value)}
            checked={
              outgoingShips ===
              "Pack goods, send goods in output and then deliver (3 steps)"
            }
          />
          <label>
            Pack goods, send goods in output and then deliver (3 steps)
          </label>
        </div>
      </div>
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
      </div>
    </div>
  );
};

export default WarehouseConfig;
