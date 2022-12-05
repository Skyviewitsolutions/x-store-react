import axios from "axios";
import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import camera from '../../assets/Images/camera.png'
import { endpoints } from "../../services/endpoints";
import './CustomerCard.css'

const CustomerCard = (props) => {

    const [iconColor, setIconColor] = useState("#7478a1");
    const { data ,getCustomer} = props;
    const navigate = useNavigate();
    console.log(data,"data here")
    const renderToEditPage = (dta) =>{
      var customerData = JSON.stringify(dta);
      navigate("/AddCustomer" , {state : customerData})
    }
  
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    const deleteCustomerUrl = endpoints.customer.deleteCustomer;

    const deleteCustomer = (dta) => {
  
      const formData = new FormData()
      formData.append("ID" ,dta.ID);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(deleteCustomerUrl,formData)
      .then((res) => {
       console.log(res ,"resp")
       if (res.data.status == true) {
         toast("Customer Deleted Successfuly !", { type: "success" });
         getCustomer();
       } else if (res.data.status == false) {
         toast(res.data.message, { type: "warning" });
       }
     })
     .catch((err) => {
       console.log(err, "error");
     });
      
 }
  return (
    <div>
       {data?.DELETE_STATUS == "X" ?
       <div style={{opacity : 0.5}}>
      <div className="CustomerContainer">
        <div className="CustomerContainerCon" onClick={() => renderToEditPage(data)}>
          <div className="CustomerContainerImg">
            <img src={data?.CUSTOMER_PROFILE} alt="vendors" />
          </div>
          <div className="CustomerContainerContent">
            <h6>{data?.CUSTOMER_NAME}</h6>
            <p>{data?.CUSTOMER_ADDRESS}</p>
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
      </div>
      </div>
   : <div className="CustomerContainer">
        <div className="CustomerContainerCon" onClick={() => renderToEditPage(data)}>
          <div className="CustomerContainerImg">
            <img src={data?.CUSTOMER_PROFILE} alt="vendors" />
          </div>
          <div className="CustomerContainerContent">
            <h6>{data?.CUSTOMER_NAME}</h6>
            <p>{data?.CUSTOMER_CITY}</p>
          </div>
        </div>
        <div className="deleteicon">
          <MdDelete
            size={20}
            style={{ color: iconColor, zIndex: 10 }}
            onMouseOver={() => setIconColor("#293391")}
            onMouseOut={() => setIconColor("#7478a1")}
            onClick={() => deleteCustomer(data)}
          />
        </div> 
        <ToastContainer />

      </div> 
}
    </div>
  );
};

export default CustomerCard;

