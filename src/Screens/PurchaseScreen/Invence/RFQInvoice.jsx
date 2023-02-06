import { width } from "@mui/system";
import React from "react";
import skyview from "../../../assets/Images/Asset 2.png";
const RFQInvoice = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        padding: "10px 25px",
        height: "auto",
        display: "flow-root",
      }}
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
        <p style={{ color: "#6a6a6a", fontSize: "15px", fontWeight: "600" ,marginTop:'10px'}}>
          X-Store Market
        </p>
      </div>

      <div style={{ marginTop: "10px",display:"flex",justifyContent:'space-between'}}>
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
          Xstore Market
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
          Lucknow
        </p>
        </div>
        <div>
        <h3
          style={{ fontSize: "18px", color: "#000", fontFamily: "sans-serif",marginBottom:'2px', textAlign:'right'}}
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
            textAlign:'right'
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
            textAlign:'right'
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
            textAlign:'right'
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
            marginTop:'10px'
          }}
        >
          Request for Quotation #P03578
        </h3>
      <div style={{ display: "flex", width: "50%" }}>
        <div>
          <p
            style={{
              marginBottom: "0px",
              color: "black",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Purchase
          </p>
          <p
            style={{
              marginBottom: "0px",
              color: "black",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Representative:
          </p>
          <p
            style={{
              marginBottom: "0px",
              color: "black",
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "sans-serif",
            }}
          >
            Accountant-Ryd
          </p>
        </div>
        <div style={{ marginLeft: "25%" }}>
          <p
            style={{
              marginBottom: "5px",
              color: "black",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Order Date:
          </p>
          <p
            style={{
              marginBottom: "0px",
              color: "#666666",
              fontSize: "14px",
              fontWeight: "400",
              fontFamily: "sans-serif",
            }}
          >
            13/01/2023 09:44:23
          </p>
        </div>
      </div>
      <div style={{ marginTop: "20px", width: "100%" }}>
        <table>
          <tr style={{ borderTop: "1px solid #cccc" }}>
            <th style={{ width: "16%" }}>Barcode</th>
            <th style={{ width: "18%", textAlign: "center" }}>Description</th>
            <th style={{ width: "18%", textAlign: "center" }}>Taxes</th>
            <th style={{ width: "16%", textAlign: "center" }}>Qty</th>
            <th style={{ width: "16%", textAlign: "center" }}>Unit Price</th>
            <th style={{ width: "16%", textAlign: "right" }}>Ammount</th>
          </tr>
        </table>
      </div>

      <div>
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
      </div>
    <div style={{padding:"0px 20px", marginTop: "400px", borderTop: "1px solid #000",}}>
      <div style={{textAlign:'initial',textAlign:'center',width:"100%",marginTop:"10px"}}>
        <span style={{ fontSize: "15px",color:'#6a6a6a'}}>
          Phone: +966 58 199 1152{" "}
        </span>
        <span  style={{ fontSize: "15px",color:'#6a6a6a'}}> Email: skyviewsmartsolutions@gmail.com </span>{" "}
        <span  style={{ fontSize: "15px",color:'#6a6a6a'}}>Web: http://www.akunmarket.com</span>
        <p  style={{ fontSize: "15px",color:'#6a6a6a'}}>Tax ID: 310823835300003</p>
      </div>
    </div>
    </div>
  );
};

export default RFQInvoice;
