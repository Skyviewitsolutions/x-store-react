import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdList } from "react-icons/md";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Sidebar.css";
import { endpoints } from "../../services/endpoints";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";


const Sidebar = (props) => {

  const [productCate, setProductCate] = useState([]);
  const productCateUrl = "https://xstore.skyviewads.com/ProductManagement/ProductCategory/GetAllProductCat"
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth")
  const {productCategory , setProductCategory} = props;

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(productCateUrl,formData).then((res) => {
      console.log(res , "product category response")
      if (res.data.status === true) {
        setProductCate(res.data.data);
      } else if (res.data.status === false) {
        toast(res.data.message, { type: "error" });
      }
    });
  }, []);
  
  return (
    <div>
      <div className="sbr">
        <ul className="sidebar">
          <span className="sp">
            {<MdList />}
            <span className="sp1">PRODUCT CATEGORY</span>
          </span>
          <li>
            <label htmlFor="all">All</label>
            <span>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="all"
                value="all"
                onChange={(e) => setProductCategory(e.target.value)}
                checked={productCategory === "all" ? true : false}
              />
            </span>
          </li>
          {productCate.map((item, index) => {
            return (
              <>
                <li>
                  <label htmlFor={item.CATEGORY_NAME}>
                    {item.CATEGORY_NAME}
                  </label>{" "}
                  <span>
                    {" "}
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={item.CATEGORY_NAME}
                      checked={productCategory === item.CATEGORY_NAME ? true : false}
                      value={item.CATEGORY_NAME}
                      onChange={(e) => setProductCategory(e.target.value)}
                    />
                  </span>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sidebar;