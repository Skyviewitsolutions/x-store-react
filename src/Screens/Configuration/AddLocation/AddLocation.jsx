import React, { useState } from "react";
import "./AddLocation.css";
import { FaRandom } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
 import Navebar from "../../../components/Navbar/Navbar";


const AddLocation = () => {

    const [selectedValue,setSelectedValue] = useState()
  const options = [
    { name: "Vendor Location", id: 1 },
    { name: "View", id: 2 },
    { name: "Internal Location", id: 2 },
    { name: "Customer Location", id: 3 },
    { name: "Inventory Loss", id: 4 },
    { name: "Production", id: 5 },
    { name: "Transit Location", id: 6 },
  ];

const  onSelect = (selectedList, selectedItem) => {
   
}

const onRemove = (selectedList, removedItem) => {
    
}
  return (
    <>
    <Navebar showBelowMenu={true}/>
    <div className="AddlocationCon">
      <div className="AddLocationhead">
        <div className="AddLocation1"></div>
        <div className="AddLocation2">
          <div className="head1">
            <FaRandom
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddLocationText">
              <p>Puteway Rules</p>
            </div>
          </div>
          <div className="head1">
            <FaCubes
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddLocationText">
              <p>Current Stock</p>
            </div>
          </div>
          <div className="head1">
            <FaList
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddLocationText">
              <p>Current Stock</p>
            </div>
          </div>
        </div>
      </div>
      <div className="AddLocationmain">
      <div className="AddLocationinput">
        <h5>Location Name</h5>
        <input type="text" />
      </div>
      <div className="AddLocationdetails">
        <div className="Locationdetails1">
          <p>Parent Location</p>
          <select>
            <option></option>
            <option>AFWH</option>
            <option>AFWH/Stock</option>
            <option>AFWH/Stock/Diesel</option>
            <option>AFWH/Stock/Oil</option>
            <option>BAPMS</option>
            <option>BAPMS/Al Baha Store for Projects</option>
            <option>BAWH</option>
            <option>Search More...</option>
          </select>
          <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
             <h4>Additional Information</h4>
          <div className="Addlocationcontent">
            <p>Location Type</p>
            <select>
              <option>Vendor Location</option>
              <option>View</option>
              <option>Internal Location</option>
              <option>Customer Location</option>
              <option>Inventory Loss</option>
              <option>Production</option>
              <option>Transit Location</option>
            </select>
          </div>
          <div className="Addlocationcontent">
            <p>Is a Scrap Location?</p>
            <input type="checkbox" />
          </div>
          <div className="Addlocationcontent">
            <p>Is a Return Location?</p>
            <input type="checkbox" />
          </div>
          <div className="Addlocationcontent">
            <p>Users</p>
            {/* <select>
                <option>Vendor Location</option>
                <option>View</option>
                <option>Internal Location</option>
                <option>Customer Location</option>
                <option>Inventory Loss</option>
                <option>Production</option>
                <option>Transit Location</option>
              </select> */}
            <Multiselect className='multiselect'
              options={options} // Options to display in the dropdown
              selectedValues={selectedValue} // Preselected value to persist in dropdown
              onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
            />
          </div>
          <h4>Logistics</h4>
          <div className="Addlocationcontent">
            <p>Removal Strategy</p>
            <select>
                <option>First in first out(FIFO)</option>
                <option>Last in Last out(LIFO)</option>
            </select>
            <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
          </div>
          <p>External note...</p>
        </div>
        <div className="Locationdetails2">
        <h4>Oil details</h4>
        <div className="Addlocationcontent2">
             <p>Oil location</p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
     
    </div>
    </div>
    </>
  );
};

export default AddLocation;
