import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdList } from "react-icons/md";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div className="container">
        <ul className="sidebar">
          
            <span className="sp">{<MdList/>}<span className="sp1">PRODUCT CATEGORY</span></span>
        
          <li>
          <div className="all"><span>All</span></div>
          </li>
          <li>
            <level>Dashboard</level><span> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            </span>
          </li>
          <li>
          <level>Dashboard</level>  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" />
          </li>
          <li>
          <level>Dashboard</level> 
          </li>
          <li>
          <level>Dashboard</level> 
          </li>
        </ul>

        <div className="content"></div>
      </div>
    </div>
  );
};

export default Sidebar;
