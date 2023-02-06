import React, { useEffect, useState } from "react";
import "./GeneralInformationEdit.css";
import { FaArrowRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Barcode from "../../Model/BarcodeModal/Barcode";
import $ from "jquery";

const GeneralInformationEdit = (props) => {
  const navigate = useNavigate();
  const [proCate, setProCate] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [getPurchase, setGetPurchase] = useState([]);
  const [proTypes, setProductTypes] = useState([]);
  const [proBrand, setProBrand] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const productCategoryurl = endpoints.productCategory.allProductCate;
  const productBrandUrl = endpoints.productBrand.allProductBrand;
  const uomsurl = endpoints.UOM.allUOM;

  const protypeurl = endpoints.products.productType;

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(productCategoryurl, formData)
      .then((res) => {
        console.log(res, "responsedddd");
        if (res.data.status == true) {
          setProCate(res.data.data);
        } else if (res.data.status == false) {
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
      });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(uomsurl, formData)
      .then((res) => {
        if (res.data.status == true) {
          setUoms(res.data.data);
        } else if (res.data.status == false) {
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
      });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(uomsurl, formData)
      .then((res) => {
        console.log(res, "unit");
        if (res.data.status == true) {
          setGetPurchase(res.data.data);
        } else if (res.data.status == false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "this is error");
      });
  }, []);
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(protypeurl, formData)
      .then((res) => {
        console.log(res, "this is product");
        if (res.data.status === true) {
          setProductTypes(res.data.data);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("session  expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message);
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(productBrandUrl, formData).then((res) => {
      if (res.data.status === true) {
        setProBrand(res.data.data);
      } else if (res.data.status === false) {
        toast(res.data.message);
      }
    });
  }, []);
  const {
    productType,
    setProductType,
    productCategory,
    setProductCategory,
    interRef,
    setInterRef,
    units,
    setUnits,
    salesPrice,
    setSalesPrice,
    customerTax,
    setCustomerTax,
    cost,
    setCost,
    description,
    setDescription,
    setProductCatCode,
    purchased,
    productCatCode,
    setPurchased,
    productBrand,
    uniqueCode,
    setProductBrand,
    setUnitOfMeasurement,
    unitOfMeasurement,
    purchaseUnitOfMeasuremnt,
    setPurchaseUnitOfMeasurement,
    unitOfMeasurementId,
    setUnitOfMeasurementId,
    purchaseUnitOfMeasuremntId,
    setPurchaseUnitOfMeasurementId,
    barcode,
    setBarcode,
    proCode,
    setProCode,
  } = props;

  const handleProductCategory = (e) => {
    setProductCategory(e.target.value);
    const val = e.target.value;
    const code = val.slice(0, 4);
    setProductCatCode(code);
    setProCode(uniqueCode + code);
  };

  // const handleCostPrice = (e) => {
  //   const val = e.target.value;
  //   setCost(val);
  //   if (salesPrice != 0) {
  //     if (val > salesPrice) {
  //       toast("Cost price cannot be greater than sales price", {
  //         type: "warning",
  //       });
  //     }
  //   }
  // };

  // const handleSalesPrice = (e) => {
  //   const val = e.target.value;
  //   setSalesPrice(val);

  //   if (val < cost) {
  //     toast("Sales price cannot be less than cost price", { type: "warning" });
  //     setSalesPrice(0);
  //   }
  // };

  const handleUnitOfMeasurement = (e) => {
    const name = e.target.value;
    setUnitOfMeasurement(name);
    var filterData = uoms.filter((itm, ind) => {
      return itm.UNIT_OF_MEASUREMENT == name;
    });

    filterData = filterData[0];
    const id = filterData.ID;
    setUnitOfMeasurementId(id);
  };

  const handlePurchaseUnitOfMeasuremnt = (e) => {
    const name = e.target.value;
    setPurchaseUnitOfMeasurement(name);
    var filterData = uoms.filter((itm, ind) => {
      return itm.UNIT_OF_MEASUREMENT == name;
    });

    console.log(filterData, "dd");
    filterData = filterData[0];
    const id = filterData.ID;
    setPurchaseUnitOfMeasurementId(id);
  };

  useEffect(() => {
    $(document).ready(function () {
      // alert("Hello");
      // $('#field_proCate').selectmenu('open');
    });
    $("#field_productType").bind("keypress", function (e) {
      if (e.keyCode == 13) {
        // alert("Hello");

        $("#field_proCate").click();
      }
    });
    $("#field_barcode").bind("keypress", function (e) {
      if (e.keyCode == 13) {
        $("#field_brand").focus();
      }
    });
    $("#field_brand").bind("keypress", function (e) {
      if (e.keyCode == 13) {
        $("#field_notes").focus();
      }
    });
  }, []);

  return (
    <div>
      <div className="GeneralInformationEditContainer">
        <div className="Editpart1">
          <div className="Editfirstcontent">
            <p>Product Type</p>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              id="field_productType"
            >
              <option value="">Select any one</option>
              {proTypes.map((item, index) => {
                return (
                  <>
                    <option value="Consumable" key={index}>
                      {item.PRODUCT_TYPE}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="Editfirstcontent">
            <p> Product Category</p>
            <select
              value={productCategory}
              onChange={(e) => handleProductCategory(e)}
              id="field_proCate"
            >
              <option value="">Select any one</option>
              {proCate.map((item, index) => {
                return (
                  <>
                    <option key={index} value={item.CATEGORY_ID}>
                      {item.CATEGORY_NAME}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="Editfirstcontent2">
            <p>Product Code</p>
            <input
              id="field_code"
              type="text"
              value={proCode}
              readOnly={true}
              // onChange={(e) => setInterRef(e.target.value)}
            />
          </div>
          <div className="Editfirstcontent2">
            <p>Barcode</p>
            <input
              type="text"
              id="field_barcode"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
            />
          </div>
          <div className="Editfirstcontent">
            <p> Product Brand</p>
            <select
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
              id="field_brand"
            >
              <option value="">Select Any One</option>
              {proBrand.map((item, index) => {
                return (
                  <>
                    <option value={item.BRAND_ID}>
                      {item.BRAND_NAME_ENGLISH}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <h5>Internal Notes</h5>
          <textarea
            id="field_notes"
            placeholder="This note is only for internal purposes."
            value={interRef}
            onChange={(e) => setInterRef(e.target.value)}
            style={{
              width: "450px",
              border: "none",
              outline: "none",
              borderBottom: "1px solid #cccccc",
            }}
          />
        </div>
        <div className="Editpart2">
          <div className="Editfirstcontent3">
            <p>Sales Price</p>
            <input
              type="number"
              placeholder="1.0000 SAR"
              value={salesPrice}
              onChange={(e) => setSalesPrice(e.target.value)}
            />
            {/* <FaArrowRight
              size="20px"
              style={{ color: "#008784", marginLeft: "10px" }}
            />
            <span>Extra Prices</span> */}
          </div>
          <div className="Editfirstcontent3">
            <p
              style={{ color: "#6a666a", fontSize: "14px", fontWeight: "500" }}
            >
              Customer Taxes
            </p>
            <input
              type="text"
              style={{
                width: "400px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid #cccc",
              }}
              value={customerTax}
              onChange={(e) => setCustomerTax(e.target.value)}
            />
          </div>
          <div className="Editfirstcontent3">
            <p>Cost</p>
            <input
              type="number"
              placeholder="0.0000 SAR per Units"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              style={{
                width: "400px",
                border: "none",
                outline: "none",
                borderBottom: "1px solid #cccc",
              }}
            />
            {/* <span style={{ color: "#008784" }}>Update Cost</span> */}
          </div>
          <div className="Editfirstcontent3">
            <p>Unit of Measure</p>
            <select
              value={unitOfMeasurement}
              onChange={(e) => handleUnitOfMeasurement(e)}
            >
              <option value="">Select any one</option>
              {uoms.map((item, index) => {
                return (
                  <>
                    <option value={item.UNIT_OF_MEASUREMENT} key={index}>
                      {item.UNIT_OF_MEASUREMENT}
                    </option>
                  </>
                );
              })}
            </select>
            {/* <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8x", marginTop: "10px" }}
            /> */}
          </div>
          <div className="Editfirstcontent3">
            <p>Purchase Unit of Measure</p>
            <select
              value={purchaseUnitOfMeasuremnt}
              onChange={(e) => handlePurchaseUnitOfMeasuremnt(e)}
            >
              <option value="">Select any one</option>
              {uoms.map((item, index) => {
                return (
                  <>
                    <option value={item.UNIT_OF_MEASUREMENT} key={index}>
                      {item.UNIT_OF_MEASUREMENT}
                    </option>
                  </>
                );
              })}
            </select>
            {/* <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            /> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GeneralInformationEdit;
