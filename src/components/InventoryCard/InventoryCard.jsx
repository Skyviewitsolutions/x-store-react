import React from "react";
import "./InventoryCard.css";

const InventoryCard = (props) => {

  const {data} = props;
  return (
    <>
     
       
        <div className="row inventBox" >
          <div className="box">
            <div className="b1">
              <h5
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  color: "#1669a2",
                }}
              >
               {data.OPERATION_TYPE}
              </h5>
              <h6
                style={{
                  marginLeft: "10px",
                  fontSize: "12px",
                  color: "#1669a2",
                }}
              >
                {data.WAREHOUSE_NAME}
              </h6>
              <button className="btnc">0 TO PROCESS</button>
            </div>
            {/* <div className="b2">
              <div style={{ height: "80px" }}></div>

              <div className="htxt">
                <span className="txtclr">Waiting</span>{" "}
                <span className="txtclr2">1</span>
              </div>

              <div className="htxt">
                <span className="txtclr">Late</span>{" "}
                <span className="txtclr2">328</span>
              </div>

              <div className="htxt">
                <span className="txtclr">Back Orders</span>{" "}
                <span className="txtclr2">3</span>
              </div>
            </div> */}
          </div>

         
        </div>
   
    </>
  );
};

export default InventoryCard;