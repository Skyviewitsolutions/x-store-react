import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import skyview from "../../../assets/Images/Asset 2.png";

const MainRFQ = (props) => {
 const {singleRFQ ,singleProduct} = props  
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        padding: "10px 25px",
        height: "auto",
        display: "flow-root",
      }}
      // ref={componentRef}
    >
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #cccccc",
          borderBottom: "1px solid #cccccc",
        }}
      >
        <img src={skyview} height="100%" style={{ objectFit: "cover" }} />
        <p
          style={{
            color: "#6a6a6a",
            fontSize: "15px",
            fontWeight: "600",
            marginTop: "10px",
          }}
        >
        {singleRFQ.CREATE_BY}
        </p>
      </div>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              marginBottom: "0px",
              color: "#6a6a6a",
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "sans-serif",
            }}
          >
       {singleRFQ.CREATE_BY}
          </p>
          <p
            style={{
              marginBottom: "0px",
              color: "#6a6a6a",
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "sans-serif",
            }}
          >
            Skyview Smart Solutions
          </p>
          <p
            style={{
              marginBottom: "0px",
              color: "#6a6a6a",
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "sans-serif",
            }}
          >
            Khuramnagar
          </p>
          <p
            style={{
              marginBottom: "5px",
              color: "#6a6a6a",
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "sans-serif",
            }}
          >
          {singleRFQ.DESTINATION_LOCATION}
          </p>
        </div>
        <div>
          <h3
            style={{
              fontSize: "18px",
              color: "#000",
              fontFamily: "sans-serif",
              marginBottom: "2px",
              textAlign: "right",
            }}
          >
            Shipping address
          </h3>
          <p
            style={{
              marginBottom: "0px",
              color: "#6a6a6a",
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "sans-serif",
              textAlign: "right",
            }}
          >
            RUH-STORE 01
          </p>
          <p
            style={{
              marginBottom: "0px",
              color: "#6a6a6a",
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "sans-serif",
              textAlign: "right",
            }}
          >
            Riyadh
          </p>
          <p
            style={{
              marginBottom: "0px",
              color: "#6a6a6a",
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "sans-serif",
              textAlign: "right",
            }}
          >
            Saudi Arabia
          </p>
        </div>
      </div>
      <h3
        style={{
          fontSize: "25px",
          fontFamily: "sans-serif",
          color: "#0077b0",
          marginTop: "10px",
        }}
      >
        Request for Quotation {singleRFQ.RFQ_CODE}
      </h3>

      <div style={{ margin: "20px", width: "100%" }}>
      <table style={{ textAlign: "center",padding:"2px 5px" ,border:'1px solid #cccc'}}>
          <tr>
            <th style={{border
            :"1px solid #cccc",padding:"2px 5px"}}>Description</th>
            <th  style={{border
            :"1px solid #cccc",padding:"2px 5px"}}>Expected Date </th>
            <th  style={{border
            :"1px solid #cccc",padding:"2px 5px"}}>Qty</th>
          </tr>
    
            {singleProduct.map((itm, ind) => {
              return (
                <>
                
                <tr>
                  <td  style={{border:
          "1px solid #cccc",width:'300px',padding:"2px 5px"}}>{itm.DESCRIPTION}</td>
                  <td  style={{border
            :"1px solid #cccc",padding:"2px 5px"}}>{itm.CREATE_DATE}</td>
                  <td  style={{border
            :"1px solid #cccc",padding:"2px 5px"}}>{itm.PRODUCT_QUANTITY}</td>
                  </tr>
                </>
              );
            })}
      </table>
      </div>

      {/* <div>
        <div
          style={{
            marginTop: "25px",
            height: "100px",
            float: "right",
            textAlign: "right",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "space-arround",
              borderTop: "1px solid #000",
              marginBottom: "5px",
            }}
          >
            <span
              style={{
                minWidth: "168px",
                display: " inline-flex",
                color: "#0077b0",
                fontWeight: "500",
              }}
            >
              Subtotal{" "}
            </span>
            <span style={{ fontSize: "15px" }}>0.00 SR</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-arround",
              borderTop: "1px solid #cccc",
              marginBottom: "5px",
            }}
          >
            <span
              style={{
                minWidth: "168px",
                display: " inline-flex",
                color: "#6a6a6a",
                fontWeight: "500",
              }}
            >
              Taxes{" "}
            </span>
            <span style={{ fontSize: "15px" }}>0.00 SR</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-arround",
              borderTop: "1px solid #000",
              marginBottom: "5px",
            }}
          >
            <span
              style={{
                minWidth: "168px",
                display: " inline-flex",
                color: "#0077b0",
                fontWeight: "500",
              }}
            >
              Subtotal{" "}
            </span>
            <span style={{ fontSize: "15px" }}>0.00 SR</span>
          </p>
        </div>
      </div> */}
      <div
        style={{
          padding: "0px 20px",
          marginTop: "400px",
          borderTop: "1px solid #000",
        }}
      >
        <div
          style={{
            textAlign: "initial",
            textAlign: "center",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <span style={{ fontSize: "15px", color: "#6a6a6a" }}>
            Phone: +966 58 199 1152{" "}
          </span>
          <span style={{ fontSize: "15px", color: "#6a6a6a" }}>
            {" "}
            Email: skyviewsmartsolutions@gmail.com{" "}
          </span>{" "}
          <span style={{ fontSize: "15px", color: "#6a6a6a" }}>
            Web: http://www.akunmarket.com
          </span>
          <p style={{ fontSize: "15px", color: "#6a6a6a" }}>
            Tax ID: 310823835300003
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainRFQ;
