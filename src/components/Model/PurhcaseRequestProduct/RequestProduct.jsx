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
  const { modalShow, setModalShow,productdet,setProductDet,description,setDescription,quantity,setQuantity,uomdet,setUomdet,vendorId,setVendorId,saveProduct,updateSelectedProductList,updateProductDetails} = props;
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
          const val = res.data.data;
          const filterProduct = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != 'X'
          })
          setProductAll(filterProduct);
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
          const val = res.data.data;
          const filterUOM = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != 'X'
          })
          setUomAll(filterUOM);
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
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
              </div>
              <div className="pro_details">
                <p>UOM</p>
                <select value={uomdet} onChange={(e) => setUomdet(e.target.value)}>
                  <option>select any one</option>
                  {uomAll.map((item, index) => {
                    return (
                      <>
                        <option value={item.ID}>{item.UNIT_OF_MEASUREMENT}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="probtn">
                <button className="product_save" onClick={updateProductDetails ? updateSelectedProductList : saveProduct}>
              {updateProductDetails ? "update" : "save"}
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
