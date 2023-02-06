import React from "react";
import skyview from "../../../assets/Images/Asset 2.png";
const PAInvoice = () => {
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
        <p
          style={{
            color: "#6a6a6a",
            fontSize: "15px",
            fontWeight: "600",
            marginTop: "10px",
          }}
        >
          X-Store Market
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
        {/* <div>
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
        </div> */}
      </div>
      <h3
        style={{
          fontSize: "25px",
          fontFamily: "sans-serif",
          color: "#0077b0",
          marginTop: "10px",
        }}
      >
        Call for Tenders
      </h3>
      <h3
        style={{
          fontSize: "25px",
          fontFamily: "sans-serif",
          color: "#0077b0",
          marginTop: "10px",
        }}
      >
        CR#1010234010/VAT#310807391400003
      </h3>
      <table style={{marginTop:'20px'}}>
        <tr>
        <th style={{width:'20%',fontWeight:'500'}}>Cash Purchases </th>
        <th style={{width:'35%',fontWeight:'500'}}>Scheduled Ordering </th>
        <th style={{width:'20%',fontWeight:'500'}}>Selection Type</th>
        <th style={{width:'20%',fontWeight:'500'}}>Source</th>
        </tr>
        <tr>
        <th style={{width:'25%',fontWeight:'500'}}>Reference</th>
        <th style={{width:'25%',fontWeight:'500'}}>Date</th>
        <th style={{width:'25%',fontWeight:'500'}}>Call for Tender</th>
        </tr>
      </table>
      <p style={{
            width: "20%",
            color: "#000",
            fontSize: "13px",
            marginTop:'5px',
            marginBottom:'5px'
          }}>CR#1010234010/VAT#31</p>
      <p style={{
            width: "20%",
            color: "#000",
            fontSize: "13px",
          }}>0807391400003</p>
      <div style={{ marginTop: "20px", width: "100%" }}>
        <h3 style={{
          fontSize: "25px",
          fontFamily: "sans-serif",
          color: "#000",
          marginTop: "10px",
        }}>Requests for Quotation Details</h3>
        <table>
          <tr
            style={{
              borderTop: "1px solid #cccc",
              display: "flex",
              paddingTop: "5px",
            }}
          >
            <th style={{width:'25%',fontWeight:'500'}}>Description</th>
            <th style={{ textAlign: "center" ,width:'25%',fontWeight:'500'}}>Date</th>
            <th style={{ textAlign: "center" ,width:'50%',textAlign:'right',fontWeight:'500'}}>Reference</th>
          </tr>
          <tr
            style={{
              borderTop: "1px solid #cccc",
              display: "flex",
              paddingTop: "5px",
            }}
          >
            <th style={{width:'25%',fontWeight:'500'}}>Cash Purchases </th>
            <th style={{ textAlign: "center" ,width:'25%',fontWeight:'500'}}>17/01/2022 13:48:39</th>
            <th style={{ textAlign: "center" ,width:'50%',textAlign:'right',fontWeight:'500'}}>P02332</th>
          </tr>
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
          marginTop: "350px",
          borderTop: "1px solid #000",
        }}
      >
        <div
          style={{
            textAlign: "initial",
            textAlign: "center",
            width: "100%",
            marginTop: "5px",
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

export default PAInvoice;
