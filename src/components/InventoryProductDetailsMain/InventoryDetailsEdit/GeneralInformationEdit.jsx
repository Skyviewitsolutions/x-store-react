import React, { useEffect, useState } from "react";
import "./GeneralInformationEdit.css";
import { FaArrowRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GeneralInformationEdit = (props) => {
  const navigate = useNavigate();
  const [proCate, setProCate] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [getPurchase , setGetPurchase] = useState([]);
  const [proTypes, setProductTypes] = useState([]);
  const [proBrand , setProBrand] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const productCategoryurl = endpoints.productCategory.allProductCate;
  const productBrandUrl = endpoints.productBrand.allProductBrand;

  const uomsurl = endpoints.UOM.allUOM;

  
  const protypeurl = endpoints.products.productType;
  const handleCostPrice = (e) =>{
  
    const val = e.target.value;
    // console.log(val , "cost")
    // if(val > salesPrice){
    //   toast("Cost price cannot be greater than sales price" ,{type : "warning"})
    // }
    // else {
    //   setCost(val)
    // }
    setCost(val)
  }

  const handleSalesPrice = (e) =>{
    const val = e.target.value;
    // console.log(val , "sales")
    // if(val < cost){
    //   toast("Sales price cannot be less than cost price" , {type : "warning"})
    // }
    // else {
    //   setSalesPrice(val)
    // }
    setSalesPrice(val)
  }
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios
      .post(productCategoryurl,formData)
      .then((res) => {
        console.log(res, "responsedddd");
        if (res.data.status == true) {
          setProCate(res.data.data);
        } else if (res.data.status == false) {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios
      .post(uomsurl,formData)
      .then((res) => {
        if (res.data.status == true) {
          setUoms(res.data.data);
        } else if (res.data.status == false) {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios
      .post(uomsurl,formData)
      .then((res) => {
        console.log(res, "unit");
        if (res.data.status == true) {
          setGetPurchase(res.data.data);
        } else if (res.data.status == false) {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err, "this is error");
      });
  }, []);
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios
      .post(protypeurl,formData)
      .then((res) => {
        console.log(res, "this is product");
        if (res.data.status === true) {
          setProductTypes(res.data.data);
        }
        else if (res.data.status === false) {
          if(res.data.code === 3)
          {
            toast("session  expired , Please re-login",{type:"warning"});
            navigate('/');
            
          }
         else{
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
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
  axios.post(productBrandUrl,formData)
  .then((res) => {
    if(res.data.status === true){
      setProBrand(res.data.data);
    }
    else if(res.data.status === false){
      toast(res.data.message);
    }
  })
  },[])
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
    purchased,
    setPurchased,
    productBrand,
    setProductBrand,
  } = props;
  

  console.log(productType, "productType");

  return (
    <div>
      <div className="GeneralInformationEditContainer">
        <div className="Editpart1">
          <div className="Editfirstcontent">
            <p>Product Type</p>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              {proTypes.map((item, index) => {
                return (
                  <>
                    <option value="Consumable" key={index}>
                      {item.PRODUCT_TYPE}
                    </option>
                  </>
                );
              })}

              <option value="Service">Service</option>
              <option value="Storable Product">Storable Product</option>
            </select>
          </div>
          <div className="Editfirstcontent">
            <p> Product Category</p>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value=""></option>
              {proCate.map((item, index) => {
                return (
                  <>
                    <option key={index} value={item.CATEGORY_NAME}>
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
              type="text"
              value={interRef}
              readOnly={true}
              onChange={(e) => setInterRef(e.target.value)}
            />
          </div>
          <div className="Editfirstcontent2">
            <p>Barcode</p>
            <input type="text" />
          </div>
          <div className="Editfirstcontent">
            <p> Product Brand</p>
            <select value={productBrand} onChange={(e) => setProductBrand(e.target.value)}>
              <option value="">Select Any One</option>
              {proBrand.map((item,index) => {
                return(
                  <>
                  <option value={item.BRAND_NAME_ENGLISH}>{item.BRAND_NAME_ENGLISH}</option>
                  </>
                )
              })}
            </select>
          </div>
          <h5>Internal Notes</h5>
          <textarea
            placeholder="This note is only for internal purposes."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "450px", border: "none", outline: "none" }}
          />
        </div>
        <div className="Editpart2">
          <div className="Editfirstcontent3">
            <p>Sales Price</p>
            <input
              type="text"
              placeholder="1.0000 SAR"
              value={salesPrice}
              onChange={(e) => handleSalesPrice(e)}
            />
            {/* <FaArrowRight
              size="20px"
              style={{ color: "#008784", marginLeft: "10px" }}
            />
            <span>Extra Prices</span> */}
          </div>
          <div className="Editfirstcontent3">
            <p
              style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}
            >
              Customer Taxes
            </p>
            <input
              type="text"
              style={{
                width: "450px",
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
              type="text"
              placeholder="0.0000 SAR per Units"
              value={cost}
              onChange={(e) => handleCostPrice(e)}
              style={{
                width: "450px",
                border: "none",
                outline: "none",
                borderBottom: "1px solid #cccc",
              }}
            />
            {/* <span style={{ color: "#008784" }}>Update Cost</span> */}
          </div>
          <div className="Editfirstcontent3">
            <p>Unit of Measure</p>
            <select value={units} onChange={(e) => setUnits(e.target.value)}>
              {uoms.map((item, index) => {
                return (
                  <>
                    <option value={item.UNITCATEGORY} key={index}>
                      {item.UNITCATEGORY}
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
            <p>Purchase Unit of</p>
            <select value={purchased} onChange={(e) => setPurchased(e.target.value)}>
              {getPurchase.map((item, index) => {
                return (
                  <>
                    <option value= {item.UNITNAME} key={index}>
                      {item.UNITNAME}
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
          <p style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}>
            Measure
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GeneralInformationEdit;
