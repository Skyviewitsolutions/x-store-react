import React, { useState } from "react";
import "./EmployeeCard.css";
import camera from "../../../../assets/Images/vendor.png";
import { MdDelete } from "react-icons/md";
import EmployeeNavbar from "../../EmplyoeeNavbar/EmployeeNavbar";


const EmployeCard = () => {
  const [iconColor, setIconColor] = useState("#7478a1");

  return (
    <>
      <div className="row empCard_con">
        <div className="col-lg-4">
        <div className="emp_profile">
            <img src={camera} alt="vendors" className="center"/>
          </div>
        </div>
        <div className="col-lg-8 emp_contents">
            <h6>Hello hghhhjhhj</h6>
            <p>Hhh jhghghg</p>
        </div>
        <div className="deleteicon">
            <MdDelete
             className="deleteicon"
              size={20}
              style={{ color: iconColor, zIndex: 10 }}
              onMouseOver={() => setIconColor("#293391")}
              onMouseOut={() => setIconColor("#7478a1")}
            />
          </div>
      </div>
    
    </>
  );
};

export default EmployeCard;
