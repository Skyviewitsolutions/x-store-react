import React, { useEffect, useState } from "react";
import "./ProductsCard.css";
import { TbCameraPlus } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.min.css";
import Camera from "../../assets/Images/camera.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import DeletePopup from "../Model/DeletePopup/DeletePopup";

const InventoryProductsCard = (props) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const redirectToProductdetails = (dta) => {
    navigate("/InventoryProductsDetails", { state: dta });
  };
  const { data, deleteRef, setDeleteRef, getProduct } = props;
  const [iconColor, setIconColor] = useState("#7478a1");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const deleteUrl = endpoints.products.deleteProduct;

  const deleteProduct = (dta) => {
    const formData = new FormData();
    formData.append("ID", dta.PRODUCT_ID);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deleteUrl, formData)
      .then((res) => {
        console.log(res, "deleteresult");
        if (res.data.status == true) {
          setDeleteRef(!deleteRef);
          toast("Product Deleted Successfuly !", { type: "success" });
          setShow(false)
          setDeleteConfirm(false)
          setSelectedData({})
          getProduct();
        } else if (res.data.status == false) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (deleteConfirm) {
      deleteProduct(selectedData);
    }
  }, [deleteConfirm]);
  return (
    <>
      {data.DELETE_STATUS == "X" ? (
        <div className="ProductsContainer" style={{ opacity: 0.5 }}>
          <div className="ProductCon">
            <div className="ProductsCamera">
              <img src={data.PRODUCT_IMAGE} alt="camera" />
            </div>
            <div className="ProductContent">
              <h6>{data.PRODUCT_NAME}</h6>
              <p>Price: {data.SALES_PRICE} SAR</p>
              <p>On hand: {data.UNIT_OF_MEASURE}</p>
            </div>
          </div>
          <div className="deleteicon">
            <MdDelete
              size={20}
              style={{ color: "#b70000", zIndex: 10 }}
              onMouseOver={() => setIconColor("#293391")}
              onMouseOut={() => setIconColor("#7478a1")}
            />
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="ProductsContainer">
          <div
            className="ProductCon"
            onClick={() => redirectToProductdetails(data)}
          >
            <div className="ProductsCamera">
              <img src={data.PRODUCT_IMAGE} alt="camera" />
            </div>
            <div className="ProductContent">
              <h6>{data.PRODUCT_NAME}</h6>
              <p>Price: {data.SALES_PRICE.toFixed(2)} SAR</p>
              <p>On hand: {data.UNIT_OF_MEASURE}</p>
            </div>
          </div>
          <div className="deleteicon">
            <MdDelete
              size={20}
              style={{ color: iconColor, zIndex: 10 }}
              onMouseOver={() => setIconColor("#293391")}
              onMouseOut={() => setIconColor("#7478a1")}
              onClick={() => {
                setShow(true);
                setSelectedData(data)
              }}
            />
          </div>
          <DeletePopup
            show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}
          />
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default InventoryProductsCard;
