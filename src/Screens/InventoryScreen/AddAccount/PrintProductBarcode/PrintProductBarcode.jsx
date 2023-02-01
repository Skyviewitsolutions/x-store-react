import React, { useEffect, useState, useRef } from "react";
import "./PrintProductBarcode.css";
import Barcode from "../../../../assets/Images/Barcode.png";
import logo from "../../../../assets/Images/logo_2.png";
import { Button, Modal } from "react-bootstrap";
import { endpoints } from "../../../../services/endpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineCancel } from "react-icons/md";
import { useReactToPrint } from "react-to-print";

const PrintProductBarcode = (props) => {
  const { showBarcode, setShowBarcode, productId } = props;
  const componentRef = useRef();

  console.log(productId, "his");

  const navigate = useNavigate();

  const [singleProductBarcode, setSingleProductBarcode] = useState({});

  const SingleBarcodeUrl = endpoints.products.ProductBarcodeSingle;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getSingleBarcode = () => {
    const formData = new FormData();
    formData.append("PRODUCT_ID", productId);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(SingleBarcodeUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          const getData = val[0];
          setSingleProductBarcode(getData);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
        toast("something went wrong", { type: "error" });
      });
  };

  useEffect(() => {
    if (productId) {
      getSingleBarcode();
    }
  }, [productId]);

  // const Print = () => {
  //   var divContents = document.getElementById("printablediv").innerHTML;
  //   // var a = window.crea("", "", "height=800, width=1200");
  //   var a = document.body.innerHTML
  //   a.document.write("<html>");
  //   a.document.write("<body > <h1>Div contents are <br>");
  //   a.document.write(divContents);
  //   a.document.write("</body></html>");
  //   a.document.close();
  //   window.close()
  //   a.print();
  // };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    
  }
  );

  const Print = () =>{
    handlePrint()
    setShowBarcode(false)
  }

  console.log(typeof(singleProductBarcode.SALES_PRICE),)

  return (
    <>
      <Modal show={showBarcode} size="md">
        <div  >
          <Modal.Header>
            <div onClick={() => setShowBarcode(false)}>
              <MdOutlineCancel size="25px" className="Acccuticons" />
            </div>
          </Modal.Header>
          <div>
            <div className="containerr" ref={componentRef}>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1>{singleProductBarcode.PRODUCT_NAME}</h1>
                  <h5>Price : {singleProductBarcode.SALES_PRICE && singleProductBarcode.SALES_PRICE.toFixed(2)}</h5>
                  <div className="barcode_img">
                    <img
                      src={singleProductBarcode.BARCODE_IMAGE}
                      alt="barcode"
                    />
                  </div>
                  <h6>{singleProductBarcode.BARCODE}</h6>
                </div>
              </div>

              {/* <div className="row company_detail">
                <div className="col-lg-12">
                    <div className='company_logo'>
                <img src={logo} alt="logo"/>
                </div>
                    <p>Skyview Smart Solutions</p>
                    <p> 529, Hans Bhakti Dham, 39, Kamla Nehru Nagar, Khurram Nagar, Lucknow, Uttar Pradesh 226022</p>
                    <p>India</p>
                    <p>skyview.ads@gmail.com</p>
                </div>
            </div> */}
            </div>
            <ToastContainer />
          </div>
          <Modal.Footer>
            <Button className="print_btn" onClick={Print}>
              Print
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default PrintProductBarcode;