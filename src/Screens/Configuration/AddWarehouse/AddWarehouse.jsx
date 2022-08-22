import React, { useState } from "react";
import "./AddWarehouse.css";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaExternalLinkAlt, FaWarehouse } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import WarehouseConfig from "./WarehouseConfig";
import TechnicalInfor from "./TechnicalInfor";
import Navebar from "../../../components/Navbar/Navbar";

const AddWarehouse = (props) => {
const [event , setEvent] = useState("WarehouseConfig");

  return (
    <>
        <Navebar showBelowMenu={true}/>
    <div className="AddwareHouseContainer">
      <div className="AddWareHouseHead">
        <div className="head2">
          <HiOutlineRefresh
            size="33px"
            style={{ color: "#848484", marginTop: "5px" }}
          />
          <div className="AddWarehousetext">
            <p>Routes</p>
          </div>
        </div>
      </div>
      <div className="Createcontent">
        <p>Warehouse</p>
        <input
          type="text"
          placeholder="Al-Enjaz Contracting & Trading Company"
        />
      </div>
      <div className="shortname">
        <div className="Addcontent">
          <p>Short Name</p>
          <input type="text" />
        </div>
        <div className="Addcontent2">
          <div className="Adddropdown">
            <p> Address</p>
            <select>
              <option>Al-Enjaz Contracting & Trading Company</option>
              <option>110</option>
              <option>13103</option>
              <option>20</option>
              <option>20804</option>
              <option>300048513700003</option>
              <option>Aad Saud Alshaibani Alotaibi</option>
              <option>Aalok Kumar Bodhnath Maht</option>
              <option>
                <span style={{ color: "#008784" }}>Search More....</span>
              </option>
              <option>
                <span style={{ color: "#008784" }}>Create and Edit...</span>
              </option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
          <div className="Adddropdown">
            <p>Responsibles</p>
            <select>
              <option>Al-Enjaz Contracting & Trading Company</option>
              <option>110</option>
              <option>13103</option>
              <option>20</option>
              <option>20804</option>
              <option>300048513700003</option>
              <option>Aad Saud Alshaibani Alotaibi</option>
              <option>Aalok Kumar Bodhnath Maht</option>
              <option>
                <span style={{ color: "#008784" }}>Search More....</span>
              </option>
              <option>
                <span style={{ color: "#008784" }}>Create and Edit...</span>
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="Adddetails">
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item
            className="detailslink"
            onClick={ () => setEvent("WarehouseConfig")}
          >
            <Nav.Link href="">Warehouse Configuration</Nav.Link>
          </Nav.Item>
          <Nav.Item
            className="detailslink"
            onClick = { () => setEvent("TechnicalInfor")}
          >
            <Nav.Link eventKey="link-1">Technical Information</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="Warehouse">
         { event === "WarehouseConfig" && <WarehouseConfig/> }
         { event === "TechnicalInfor" && <TechnicalInfor/> }
      </div>
    </div>
    </>
  );
};

export default AddWarehouse;
