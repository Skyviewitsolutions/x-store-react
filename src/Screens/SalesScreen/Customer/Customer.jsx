import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomerCard from "../../../components/Customer/CustomerCard";
import { endpoints } from "../../../services/endpoints";
import SalesNavbar from "../SalesNavbar/SalesNavbar";
import './Customer.css'

const Customer = () => {
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false)
  const [allCustomer, setAllCustomer] = useState([]);
  const [deActiveCustomer, setDeActiveCustomer] = useState([]);
  const [activeCustomer, setActiveCustomer] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const allCustomerUrl = endpoints.customer.allCustomer;

  const getCustomer = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    setLoading(true)
    axios
      .post(allCustomerUrl, formData)
      .then((res) => {
        setLoading(false)
        console.log(res,"response")
        if (res.data.status === true) {
          const customer = res.data.data;
          var val = customer.reverse();
          const deletedVendor = val.filter((itm, ind) => {
            return itm.DELETE_STATUS === "X";
          });
          setDeActiveCustomer(deletedVendor);

          const allCustomer = customer.filter((itm, index) => {
            return itm.DELETE_STATUS === null;
           
          });
           console.log(allCustomer,"val here")
          setActiveCustomer(allCustomer);
          setAllCustomer(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log("something went wrong", err);
      });
  };

  const handleCreatePage = () => {
    navigate("/AddCustomer");
  };

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div>
      <SalesNavbar
        showBelowMenu={true}
        title="Customer"
        handleCreatePage={handleCreatePage}
      />
      <div className="Customer_Container">
        {activeCustomer.map((item, index) => {
          console.log(item,"item")
          return (
            <>
              <CustomerCard data={item} getCustomer={getCustomer} />
            </>
          );
        })}
        {deActiveCustomer.map((item, index) => {
          return (
            <>
              <CustomerCard data={item} getCustomer={getCustomer} />
            </>
          );
        })}
      </div>
      <CustomerCard />
    </div>
  );
};

export default Customer;
