import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoints } from "../../../services/endpoints";
import "./PurchaseInventory.css";

const PurchaseInventory = (props) => {

  const navigate = useNavigate();

  const {
    modalShow,
    setModalShow,
    purchaseDetails,
    setPurchaseDetails,
    getAllVendorlist,
    getSingleVendorList,
    setSelectedVID,
    vendor ,
    setVendor ,
    vendorProductName,setVendorProductName, vendorProductCode , setVendorProductCode , vendorLeadTime , setVendorLeadTime , vendorQuantity , setVendorQuantity , vendorPrice , setVendorPrice , vendorCurrency , setVendorCurrency , vendorDate1 , setVendorDate1 , vendorDate2 , setVendorDate2,updateSelectedVendorlist,updatedVendorList,setUpdtedVendorList
  } = props;

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const addVndorListUrl = endpoints.products.vendorListAdd;

  const [allVendor, setAllVendor] = useState([]);

  const getVendorUrl = endpoints.vendors.allVendors;

  useEffect(() => {

    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(getVendorUrl, formData)
      .then((res) => {
       
        if (res.data.status === true) {
          setAllVendor(res.data.data);
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

  }, []);

 

  const save = (e) => {
    e.preventDefault()
    if (vendor === "") {
      toast("Vendor Name is Required !", { type: "warning" });
    } else if (vendorProductName === "") {
      toast("Vendor Product Name is Required !", { type: "warning" });
    } else if (vendorProductCode === "") {
      toast("Vendor Product Code is Required !", { type: "warning" });
    } else if (vendorLeadTime === "") {
      toast("vendor Lead Time is Required !", { type: "warning" });
    } else if (vendorQuantity === "") {
      toast("vendor Quantity is Required !", { type: "warning" });
    } else if (vendorPrice === "") {
      toast("vendor Price is Required !", { type: "warning" });
    }else if (vendorCurrency === "") {
      toast("vendor Currency is Required !", { type: "warning" });
    } else if (vendorDate1 === "") {
      toast("vendor Date1 is Required !", { type: "warning" });
    } else if (vendorDate2 === "") {
      toast("vendor Date2 is Required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      formData.append("Vendor_ID", vendor);
      formData.append("V_ProductName", vendorProductName);
      formData.append("V_ProductCode", vendorProductCode);
      formData.append("V_DeleveryLeadTime", vendorLeadTime);
      formData.append("V_Quantity", vendorQuantity);
      formData.append("V_Price", vendorPrice);
      formData.append("V_Currency", vendorCurrency);
      formData.append("V_StartDate", vendorDate1);
      formData.append("V_EndDate", vendorDate2);
      axios
        .post(addVndorListUrl, formData)
        .then((res) => {
          console.log(res, "response");
          if (res.data.status === true) {
            setSelectedVID(res.data.code);
            getSingleVendorList();
            getAllVendorlist()
            toast("Vendor List Added Successfully", { type: "success" });
            setVendor("")
            setVendorProductName("")
            setVendorProductCode("")
            setVendorLeadTime("")
            setVendorQuantity("")
            setVendorPrice("")
            setVendorCurrency("")
            setVendorDate1("")
            setVendorDate2("")
            
            setModalShow(false);
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
    }

    const data = {
      vendor: vendor,
      vendorProductName: vendorProductName,
      vendorProductCode: vendorProductCode,
      vendorLeadTime: vendorLeadTime,
      vendorQuantity: vendorQuantity,
      vendorPrice: vendorPrice,
      vendorCurrency: vendorCurrency,
      vendorDate1: vendorDate1,
      vendorDate2: vendorDate2,
    };
    setPurchaseDetails((item) => {
      return [...item, data];
    });
  };


  return (
    <div>
      <Modal show={modalShow} size="lg">
        <form className="purchase_main" onSubmit={updatedVendorList ? updateSelectedVendorlist : save}>
          <div className="purchase_con">
            <div className="purchase_firstcontent">
              <h3>Vendor</h3>
              <div className="purchase_content">
                <p>Vendor</p>
                <select
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                >
                  <option value="">Select any one</option>
                  {allVendor.map((item, index) => {
                    return (
                      <>
                        {item.VENDOR_STATUS != "X" && (
                          <option value={item.VENDOR_ID}>
                            {item.VENDOR_NAME}
                          </option>
                        )}
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="purchase_content">
                <p>Vendor Product Name</p>
                <input
                  type="text"
                  value={vendorProductName}
                  onChange={(e) => setVendorProductName(e.target.value)}
                />
              </div>
              <div className="purchase_content">
                <p>Vendor Product Code</p>
                <input
                  type="text"
                  value={vendorProductCode}
                  onChange={(e) => setVendorProductCode(e.target.value)}
                />
              </div>
              <div className="purchase_dltime">
                <p>Delivery Lead Time</p>
                <div>
                  {" "}
                  <input
                    type="text"
                    value={vendorLeadTime}
                    onChange={(e) => setVendorLeadTime(e.target.value)}
                  />
                  <span>Days</span>
                </div>
              </div>
            </div>
            <div className="purchase_secondContent">
              <h3>Price List</h3>
              <div className="purchase_pr">
                <p>Quantity</p>
                <input
                  type="number"
                  min="1"
                  value={vendorQuantity}
                  onChange={(e) => setVendorQuantity(e.target.value)}
                />
              </div>
              <div className="purchase_price">
                <p>Price</p>
                <input
                  type="number"
                  min="1"
                  value={vendorPrice}
                  onChange={(e) => setVendorPrice(e.target.value)}
                />
                <select
                  value={vendorCurrency}
                  onChange={(e) => setVendorCurrency(e.target.value)}
                >
                  <option value="Currency">Currency</option>
                  <option value="SAR">SAR</option>
                  <option value="EAR">EAR</option>
                </select>
              </div>
              <div className="purchase_val">
                <p>Validity</p>
                <input
                  type="Date"
                  value={vendorDate1}
                  onChange={(e) => setVendorDate1(e.target.value)}
                />
                <span>to</span>
                <input
                  type="Date"
                  value={vendorDate2}
                  onChange={(e) => setVendorDate2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="pu_btn">
            <button className="pur_btn" type="submit">
              {updatedVendorList ? "update" : "save"}
            </button>
          </div>
          <div onClick={() => setModalShow(false)}>
            <MdOutlineCancel size="25px" className="Acccuticons" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default PurchaseInventory;
