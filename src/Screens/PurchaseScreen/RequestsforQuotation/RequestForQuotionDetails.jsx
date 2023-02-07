import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast, ToastContainer } from "react-toastify";
import PurchaseHeader from "../../../components/InventoryProductDetailsMain/Purchase/PurchaseHeader";
import useFetchData from "../../../customHooks/useFetchData";
import { endpoints } from "../../../services/endpoints";
import MainRFQ from "../Invence/MainRFQ";
import PurchaseNavbar from "../PurchaseNavbar";
import "./RequestFroQuotionDetails.css";
import RFQOtherInfo from "./RFQOtherInfo";
import RFQProduct from "./RFQProduct";

const RequestForQuotionDetails = () => {
  const { VendorId, RFQID } = useParams();
  //   const requestUrl = endpoints.requestQuotation.allRequestQuotation;
  //   const allRequestQuotation = useFetchData(requestUrl);
  //   console.log(allRequestQuotation , "response")

  const [showInvoice, setShowInvoice] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const Print = () => {
    handlePrint();
    setShowInvoice(true);
  };

  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(true);
  const [singleRFQ, setSingleRFQ] = useState([]);
  const [events, setEvents] = useState("Products");

  const singlerfqUrl = endpoints.requestQuotation.singleRequestQuotation;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getSingleData = () => {
    const formData = new FormData();
    formData.append("Vendor_ID", VendorId);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(singlerfqUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          console.log(val, "data here");
          setSingleRFQ(val[0]);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            //  toast(res.data.message,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err, "something went wrong");
      });
  };

  const [singleProduct, setSingleProduct] = useState([]);

  const singleProductUrl = endpoints.requestQuotation.singleProductDetails;
  const getSingleProduct = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("RFQ_ID", RFQID);
    axios
      .post(singleProductUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          const val = res.data.data;
          console.log(val, "single data");
          setSingleProduct(val);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getSingleData();
    getSingleProduct();
  }, []);

  return (
    <div >
      <PurchaseNavbar />
      <PurchaseHeader isEdit={isEdit} setIsEdit={setIsEdit} Print={Print} />
      <div className="addRequestQuoPContainers" style={{position : 'relative' , background : 'white' , minHeight : "900px" }}>
        <div className="addRequestPCons">
          <div className="rfqCode">
            <p>Request For Quotation</p>
            <h3>{singleRFQ.RFQ_CODE}</h3>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="reqQuotext">
                <p>Vendor</p>
                <span>{singleRFQ.VENDOR_NAME}</span>
              </div>
              <div className="reqQuotext">
                <p>Vendor Refrence</p>
                <span>{singleRFQ.VENDOR_REFERENCE}</span>
              </div>
              <div className="reqQuotext">
                <p>Purchase Agreement</p>
                <span>{singleRFQ.PURCHASE_AGREEMENT}</span>
              </div>
              <div className="reqQuotext">
                <p>Deliver To</p>
                <span>{singleRFQ.DELIVER_TO}</span>
              </div>
              <div className="reqQuotext">
                <p>Currency</p>
                <span>{singleRFQ.PRODUCT_CURRENCY}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="reqQuotext">
                <p>Purchase Type</p>
                <span>{singleRFQ.PURCHASE_TYPE}</span>
              </div>
              <div className="reqQuotext">
                <p>Payment Terms</p>
                <span>{singleRFQ.PAYMENT_TERMS}</span>
              </div>
              <div className="reqQuotext">
                <p>Destinition Location</p>
                <span>{singleRFQ.DESTINATION_LOCATION}</span>
              </div>
              <div className="reqQuotext">
                <p>Order Date</p>
                <span>{singleRFQ.ORDER_DATE}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
              className={
                events === "Products" ? "navLinkActive" : "navLinkDeactive"
              }
            >
              <Nav.Link
                href=""
                className={
                  events === "Products" ? "navLinkActive" : "navLinkDeactive"
                }
                onClick={() => setEvents("Products")}
              >
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={
                events === "Other Information"
                  ? "navLinkActive"
                  : "navLinkDeactive"
              }
            >
              <Nav.Link
                href=""
                className={
                  events === "Other Information"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }
                onClick={() => setEvents("Other Information")}
              >
                Other Information
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
          {events === "Products" && (
            <RFQProduct
              singleProduct={singleProduct}
              setSingleProduct={setSingleProduct}
            />
          )}
          {events === "Other Information" && (
            <RFQOtherInfo singleRFQ={singleRFQ} />
          )}
        </div>
        <div ref={componentRef} style={{zIndex : '-1' , position : 'absolute' , top : 0 ,}}>
          <MainRFQ singleRFQ={singleRFQ} singleProduct={singleProduct} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RequestForQuotionDetails;
