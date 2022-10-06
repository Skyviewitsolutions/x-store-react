import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdList } from "react-icons/md";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Sidebar.css";
import { endpoints } from "../../services/endpoints";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const Sidebar = () => {
  const [productCate, setProductCate] = useState([]);
  const productCateUrl = endpoints.productCategory.allProductCate;

  useEffect(() => {
    axios.post(productCateUrl).then((res) => {
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
