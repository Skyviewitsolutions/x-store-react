import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import {FaAngleLeft} from 'react-icons/fa'

import { BsChatText } from 'react-icons/bs';
import{RiContactsBookLine,RiUserSearchLine,RiMoneyEuroBoxLine} from 'react-icons/ri'
import { GoCalendar } from 'react-icons/go';
import {FaBoxOpen,FaFileInvoiceDollar,FaUserClock,FaUserCog} from 'react-icons/fa';
import {GiNotebook,GiArchiveResearch,GiTakeMyMoney} from 'react-icons/gi';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineLocalActivity,MdOutlineLocalAtm ,MdOutlinePayment,MdOutlineAccountBalanceWallet,MdOutlineSwitchAccount} from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const {onClick} = props;
  
  return (
    <div className="col-sm-1 cardd" onClick={onClick}>
      <div >
        <div className="Dash" style={{ background:props.bgColor,justifyContent:"center",paddingTop:"20px",textAlign:"center"}}>  {props.img}</div>
        <h6 className="odtxt" style={{ fontSize: "14px",textAlign:"center", width:"100%",marginTop:"8px",color:"white"}}>{props.text}</h6></div>
      
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const RedirectToInventory = () => {
   navigate('/Inventory');
  }

  return (
    <>
      <div className="container-fluid main">
        <div className="containers">
        <div className="dashCont">
          <Card img={<BsChatText size={40} color="white"/>} text="Discuss" className="dash" bgColor="#cc6886"/>
            <Card img={<GoCalendar size={40} color="white"/>} text="Calender" className="dash" bgColor="#c2b871"/>
            <Card img={<RiContactsBookLine size={40} color="white"/>} text="Contact" className="dash" bgColor="#259093"/>
            <Card img={<RiUserSearchLine size={40} color="white"/>} text="User Audit" className="dash" bgColor="#6f9fa6"/>
            <Card img={<GiNotebook size={40} color="white"/>} text="Doc Manager" className="dash" bgColor="#9a8156"/>
            <Card img={<GiArchiveResearch size={40} color="white"/>} text="Asset Tracking" className="dash" bgColor="#68ae82"/>

          <Card img={<FaFileInvoiceDollar size={40} color="white"/>} text="Cost Center" className="dash" bgColor="#bd6882"/>
            <Card img={<MdOutlineLocalActivity size={40} color="white"/>} text="COC" className="dash" bgColor="#484d93"/>
            <Card img={<MdOutlineLocalAtm size={40} color="white"/>} text="Purchase Contract" className="dash" bgColor="#b43d7a"/>
            <Card img={<MdOutlinePayment size={40} color="white"/>} text="Purchase" className="dash" bgColor="#7faac1"/>
            <Card img={<FaBoxOpen size={40} color="white"/>} text="Inventory" className="dash" bgColor="#a35656" onClick={RedirectToInventory}/>
            <Card img={<MdOutlineAccountBalanceWallet size={40} color="white"/>} text="Accounting" className="dash" bgColor="#d78d61" onClick={()=>navigate('/ChartAccount')}/>

            <Card img={<MdOutlineSwitchAccount size={40} color="white"/>} text="Payroll" className="dash" bgColor="#cc6786"/>
            <Card img={<HiOutlineUserGroup size={40} color="white"/>} text="Employee" className="dash" bgColor="#248e91"/>
            <Card img={<FaUserClock size={40} color="white"/>} text="Attendance" className="dash" bgColor="#82acc2"/>
            <Card img={<FaUserCog size={40} color="white"/>} text="Time Off" className="dash" bgColor="#c2b870"/>
            <Card img={<RiMoneyEuroBoxLine size={40} color="white"/>} text="Expenses" className="dash" bgColor="#737573"/>
            <Card img={<GiTakeMyMoney size={40} color="white"/>} text="Loan" className="dash" bgColor="#bcb377"/> 
            
          
            </div>
        </div>
        <div className="arrowicon"> <FaAngleLeft size={40} onClick={RedirectToInventory}/></div>
       
      </div>
    </>
  );
};

export default Dashboard;
