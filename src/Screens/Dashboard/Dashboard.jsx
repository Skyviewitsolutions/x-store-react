import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

import { GrDocumentConfig } from 'react-icons/gr';
import { GiNotebook } from 'react-icons/gi';
import { FaUserCheck,FaBlog } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import { SiSpring } from 'react-icons/si';

const Card = (props) => {
  return (
    <div className="col-sm-1 cardd">
      <div >
        <div className="Dash" style={{ background:props.bgColor,justifyContent:"center", boxShadow:" rgba(0, 0, 0, 0.35) 0px 3px 8px",lineHeight:"60px;" ,paddingTop:"15px",textAlign:"center"}}>  {props.img}</div>
        <h6 style={{ fontSize: "12px",textAlign:"center", width:"100%",marginTop:"5px"}}>{props.text}</h6></div>
      
    </div>
  );
};

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5 ">
        <div className="dashCont">
         
          <Card img={<GrDocumentConfig size={30} color="white"/>} text="Accounting" className="dash" bgColor="#cc6786"/>
            <Card img={<GiNotebook size={30} color="white"/>} text="Appoitments" className="dash" bgColor="#cb6584"/>
            <Card img={<FaUserCheck size={30} color="white"/>} text="Apporovel" className="dash" bgColor="#75b38e"/>
            <Card img={<BsStarHalf size={30} color="white"/>} text="Appraisals" className="dash" bgColor="#964d4d"/>
            <Card img={<FaBlog size={30} color="white"/>} text="Blog" className="dash" bgColor="#259093"/>
            <Card img={<SiSpring size={30} color="white"/>} text="Consolidation" className="dash" bgColor="#71ab89"/>

          <Card img={<GrDocumentConfig size={30} color="white"/>} text="Accounting" className="dash" bgColor="#cc6786"/>
            <Card img={<GiNotebook size={30} color="white"/>} text="Appoitments" className="dash" bgColor="#cb6584"/>
            <Card img={<FaUserCheck size={30} color="white"/>} text="Apporovel" className="dash" bgColor="#75b38e"/>
            <Card img={<BsStarHalf size={30} color="white"/>} text="Appraisals" className="dash" bgColor="#964d4d"/>
            <Card img={<FaBlog size={30} color="white"/>} text="Blog" className="dash" bgColor="#259093"/>
            <Card img={<SiSpring size={30} color="white"/>} text="Consolidation" className="dash" bgColor="#71ab89"/>

            <Card img={<GrDocumentConfig size={30} color="white"/>} text="Accounting" className="dash" bgColor="#cc6786"/>
            <Card img={<GiNotebook size={30} color="white"/>} text="Appoitments" className="dash" bgColor="#cb6584"/>
            <Card img={<FaUserCheck size={30} color="white"/>} text="Apporovel" className="dash" bgColor="#75b38e"/>
            <Card img={<BsStarHalf size={30} color="white"/>} text="Appraisals" className="dash" bgColor="#964d4d"/>
            <Card img={<FaBlog size={30} color="white"/>} text="Blog" className="dash" bgColor="#259093"/>
            <Card img={<SiSpring size={30} color="white"/>} text="Consolidation" className="dash" bgColor="#71ab89"/> <Card img={<GrDocumentConfig size={30} color="white"/>} text="Accounting" className="dash" bgColor="#cc6786"/>
            <Card img={<GiNotebook size={30} color="white"/>} text="Appoitments" className="dash" bgColor="#cb6584"/>
            <Card img={<FaUserCheck size={30} color="white"/>} text="Apporovel" className="dash" bgColor="#75b38e"/>
            <Card img={<BsStarHalf size={30} color="white"/>} text="Appraisals" className="dash" bgColor="#964d4d"/>
            <Card img={<FaBlog size={30} color="white"/>} text="Blog" className="dash" bgColor="#259093"/>
            <Card img={<SiSpring size={30} color="white"/>} text="Consolidation" className="dash" bgColor="#71ab89"/> <Card img={<GrDocumentConfig size={30} color="white"/>} text="Accounting" className="dash" bgColor="#cc6786"/>
            <Card img={<GiNotebook size={30} color="white"/>} text="Appoitments" className="dash" bgColor="#cb6584"/>
            <Card img={<FaUserCheck size={30} color="white"/>} text="Apporovel" className="dash" bgColor="#75b38e"/>
            <Card img={<BsStarHalf size={30} color="white"/>} text="Appraisals" className="dash" bgColor="#964d4d"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
