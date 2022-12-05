import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../services/endpoints";
import "./RequestProduct.css";

export const RequestProduct = (props) => {
  const { modalShow, setModalShow,serialNo,setSerialNo,productdet,setProductDet,description,setDescription,quantity,setQuantity,uomdet,setUomdet,vendorId,setVendorId,saveProduct} = props;
  const navigate = useNavigate();
  const [productAll, setProductAll] = useState([]);
  const [uomAll, setUomAll] = useState([]);

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const producrUrl = endpoints.products.allProduct;
  const uomUrl = endpoints.UOM.allUOM;


  

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(producrUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setProductAll(res.data.data);
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
        console.log(err, "something went wrong");
      });
  }, []);
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(uomUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setUomAll(res.data.data);
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
        console.log(err, "something went wrong");
      });
  }, []);

  return (
    <div>
      <Modal show={modalShow} size="lg">
        <div className="reproductCon">
          <div className="product_content">
            <div className="product_text">
              <h1>Product Details</h1>
              <div className="pro_details">
                <p>No.</p>
                <input type="text" value={serialNo} onChange={(e) => setSerialNo(e.target.value)}/>
              </div>
              <div className="pro_details">
                <p>Vendor Id</p>
                <input type="text" value={vendorId} onChange={(e) => setVendorId(e.target.value)}/>
              </div>
              <div className="pro_details">
                <p>Product</p>
                <select value={productdet} onChange={(e) => setProductDet(e.target.value)}>
                  <option>Choose any one</option>
                  {productAll.map((item, index) => {
                    if(item.DELETE_STATUS != "X"){
                    return (
                      <>
                        <option value={item.PRODUCT_ID}>
                          {item.PRODUCT_NAME}
                        </option>
                      </>
                    );
                    }
                  })}
                </select>
              </div>
              <div className="pro_details">
                <p>description</p>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
              </div>
              <div className="pro_details">
                <p>Quantity</p>
                <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
              </div>
              <div className="pro_details">
                <p>UOM</p>
                <select value={uomdet} onChange={(e) => setUomdet(e.target.value)}>
                  <option>select any one</option>
                  {uomAll.map((item, index) => {
                    return (
                      <>
                        <option value={item.UNITNAME}>{item.UNITNAME}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="probtn">
                <button className="btn" onClick={saveProduct}>
                  Save
                </button>
              </div>
            </div>
            <div className="pro_text2">
              {/* <div className="pro_details">
                         <p>UOM</p>
                         <input type="text" />
                       </div> */}
              {/* <div className="pro_details">
                         <p>Unity Price</p>
                         <input type="text" />
                       </div>
                       <div className="pro_details">
                         <p>Taxes</p>
                         <input type="text" />
                       </div>
                       <div className="pro_details">
                         <p>Sub Total</p>
                         <input type="text" />
                       </div> */}
            </div>
          </div>

          <div onClick={() => setModalShow(false)}>
            <MdOutlineCancel size="25px" className="Acccuticons" />
          </div>
          <ToastContainer />
        </div>
      </Modal>
    </div>
  );
};
