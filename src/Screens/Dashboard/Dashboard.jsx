import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import { FaAngleLeft } from "react-icons/fa";


import { useNavigate } from "react-router-dom";

import Discuss from "../../assets/Images/icons/discuss.png";
import Calender from "../../assets/Images/icons/calender.png";
import Contact from "../../assets/Images/icons/contact.png";
import User from "../../assets/Images/icons/user audit.png";
import Doc from "../../assets/Images/icons/doc manager.png";
import Asset from "../../assets/Images/icons/asset tracking.png";
import Cost from "../../assets/Images/icons/cost center.png";
import Coc from "../../assets/Images/icons/coc.png";
import purchaseCon from "../../assets/Images/icons/purchase contract.png";
import purchase from "../../assets/Images/icons/purchase.png";
import inventory from "../../assets/Images/icons/inventoey.png";
import accounting from "../../assets/Images/icons/accounting.png";
import payroll from "../../assets/Images/icons/payroll.png";
import employee from "../../assets/Images/icons/employee.png";
import attendance from '../../assets/Images/icons/attendance.png';
import timeOff from "../../assets/Images/icons/time off.png";
import expenses from "../../assets/Images/icons/expenses.png";
import loan from "../../assets/Images/icons/loan.png"
import { IoMdLogOut } from "react-icons/io";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { toast } from "react-toastify";

const Card = (props) => {

  const { onClick } = props;



  return (
    <div className="col-sm-1 cardd" onClick={onClick}>
      <div>
        <div
          className="Dash"
          style={{
            display:"flex",
            background: props.bgColor,
            justifyContent: "center",
            textAlign: "center",
            alignItems:"center",
          }}
        >
          {" "}
          <img src={props.img} alt="" width="70%" height="70%"/>
        </div>
        <h6
          className="odtxt"
          style={{
            fontSize: "14px",
            textAlign: "center",
            width: "100%",
            marginTop: "8px",
            color: "white",
          }}
        >
          {props.text}
        </h6>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const RedirectToInventory = () => {
    navigate("/Inventory");
  }

    const logotUrl = endpoints.authentication.logout;
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    const userEmails = localStorage.getItem("UserEmail");
    const userLoginTime = localStorage.getItem("loginTime");
    
    const logout = () => {
      const formData = new FormData()
      formData.append("email",userEmails);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("LoginTime", userLoginTime);
      axios.post(logotUrl,formData)
      .then((res) => {
     if(res.data.status === true){
      toast(res.data.message,{type:"success"})
      setTimeout(() => {
        navigate('/')
      }, 1000);
     }
      })
      .catch((err) => {
        console.log(err,"eror")
      })
    }
  

  return (
    <>
      <div className="container-fluid d-flex justify-content-center px-10 main dash_tiles">
        <div className="row dash_cards">
          <div className="col-lg-2 col-md-3 center">
          <Card
              img={inventory}
              text="Inventory"
              className="dash"
              bgColor="#a35656"
              onClick={RedirectToInventory}
            />
          </div>
          <div className="col-lg-2 col-md-3">
          <Card
              img={accounting}
              text="Accounting"
              className="dash"
              bgColor="#d78d61"
              onClick={() => navigate("/ChartAccount")}
            />
          </div>
          <div className="col-lg-2 col-md-3">
          <Card
              img={Coc}
              text="Sales"
              className="dash"
              bgColor="#484d93"
              onClick={() => navigate('/sales_teams')}
            />
          </div>
          <div className="col-lg-2 col-md-3">
          <Card
              img={purchase}
              text="Purchase"
              className="dash"
              bgColor="#7faac1"
              onClick={() => navigate("/PurchasePriceList")}
            />
          </div>
          <div className="col-lg-2 col-md-3">
          <Card
              img={employee}
              text="Employee"
              className="dash"
              bgColor="#248e91"
              onClick={() => navigate("/Department")}
            />
          </div>
          <div className="col-lg-2 col-md-3">
 <Card
              img={expenses}
              text="Expenses"
              className="dash"
              bgColor="#737573"
            />
          </div>
        </div>
        {/* <div className="containers">
          <div className="dashCont">
            <Card
              img={Discuss}
              text="Discuss"
              className="dash"
              bgColor="#cc6886"
            />
            <Card
              img={Calender}
              text="Calender"
              className="dash"
              bgColor="#c2b871"
            />
            <Card
              img={payroll}
              text="Payroll"
              className="dash"
              bgColor="#cc6786"
            />
             <Card
              img={attendance}
              text="Attendance"
              className="dash"
              bgColor="#82acc2"
            />
            <Card
              img={timeOff}
              text="Time Off"
              className="dash"
              bgColor="#c2b870"
            />
              <Card
              img={loan}
              text="Loan"
              className="dash"
              bgColor="#bcb377"
            />
           
            <Card
              img={User}
              text="User Audit"
              className="dash"
              bgColor="#6f9fa6"
            />
            <Card
              img={Doc}
              text="Doc Manager"
              className="dash"
              bgColor="#9a8156"
            />
            <Card
              img={Asset}
              text="Asset Tracking"
              className="dash"
              bgColor="#68ae82"
            />

            <Card
              img={Cost}
              text="Cost Center"
              className="dash"
              bgColor="#bd6882"
            />
           
            <Card
              img={purchaseCon}
              text="Purchase Contract"
              className="dash"
              bgColor="#b43d7a"
            />
             <Card
              img={inventory}
              text="Inventory"
              className="dash"
              bgColor="#a35656"
              onClick={RedirectToInventory}
            />
            <Card
              img={accounting}
              text="Accounting"
              className="dash"
              bgColor="#d78d61"
              onClick={() => navigate("/ChartAccount")}
            />
             <Card
              img={Coc}
              text="Sales"
              className="dash"
              bgColor="#484d93"
              onClick={() => navigate('/sales_teams')}
            />
            <Card
              img={purchase}
              text="Purchase"
              className="dash"
              bgColor="#7faac1"
              onClick={() => navigate("/PurchasePriceList")}
            />
          
            
            <Card
              img={employee}
              text="Employee"
              className="dash"
              bgColor="#248e91"
              onClick={() => navigate("/Department")}
            />
           
            <Card
              img={expenses}
              text="Expenses"
              className="dash"
              bgColor="#737573"
            />
             <Card
              img={Contact}
              text="Contacts"
              className="dash"
              bgColor="#cc6d89"
            />
          
          </div>
        </div> */}
           <div className="logout_das" onClick={logout}>
              <IoMdLogOut style={{ color: "white", marginRight: "15px",fontSize:"25px"}}/>
              <p>Logout</p>
            </div>
        <div className="arrowicon">
          {" "}
          <FaAngleLeft size={40} onClick={RedirectToInventory} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
