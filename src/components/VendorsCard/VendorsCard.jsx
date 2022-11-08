import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import vendor from "../../assets/Images/vendor.png";
import { useNavigate } from "react-router-dom";
import "./VendorsCard.css";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { toast } from "react-toastify";

const VendorsCard = (props) => {
  const [iconColor, setIconColor] = useState("#7478a1");
  const { data } = props;
  const navigate = useNavigate();

  const renderToEditPage = (dta) =>{
    var vendorsData = JSON.stringify(dta);
    navigate("/addVendors" , {state : vendorsData})
  }

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const deleteVendorUrl = endpoints.vendors.deleteVendors;

  const deleteVendor = (dta) => {
       const formData = new FormData()
       formData.append("ID" ,dta.VENDOR_ID);
       formData.append("User_Authorization", getAuthtoken);
       formData.append("User_AuthKey", userAuth);
       axios.post(deleteVendorUrl,formData)
       .then((res) => {
        if (res.data.status == true) {
          toast("Vendor Deleted Successfuly !", { type: "success" });
        } else if (res.data.status == false) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
       
  }

  return (
    <div onClick={() => renderToEditPage(data)}>
      <div className="VendorsContainer">
        <div className="VendorsCon">
          <div className="VendorsImg">
            <img src={data.VENDOR_PROFILE} alt="vendors" />
          </div>
          <div className="VendorsContent">
            <h6>{data.VENDOR_NAME}</h6>
            <p>{data.CITY}</p>
          </div>
        </div>
        <div className="deleteicon">
          <MdDelete
            size={20}
            style={{ color: iconColor }}
            onMouseOver={() => setIconColor("#293391")}
            onMouseOut={() => setIconColor("#7478a1")}
            onClick={() => deleteVendor(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default VendorsCard;
