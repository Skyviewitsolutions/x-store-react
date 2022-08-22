import React, { useEffect, useState } from "react";
import "./AddProductCategories.css";
import { FaRandom } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
import Navebar from "../../../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DiffrentAccount  from "../../../components/Model/AddDiffrentAccount/DiffrentAccount"


const AddProductCategories = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [showAccount , setShowAccount] = useState(false);
  const options = [
    { name: "Vendor Location", id: 1 },
    { name: "View", id: 2 },
    { name: "Internal Location", id: 2 },
    { name: "Customer Location", id: 3 },
    { name: "Inventory Loss", id: 4 },
    { name: "Production", id: 5 },
    { name: "Transit Location", id: 6 },
  ];

  const onSelect = (selectedList, selectedItem) => {};

  const onRemove = (selectedList, removedItem) => {};
  const navigate = useNavigate();


  const url = "https://xstore.skyviewads.com/ProductsXM/AddProduct_Category";
  const [AddProductcate , setProductCate] = useState([]);
  const [parentCategory , setParentCategory] = useState('');
  

  const updateParentCategory = (val) =>{
    if(val === "Create and Edit.."){
      setShowAccount(true);
    }
  }

  return (

    <>
    <Navebar showBelowMenu={true}/>
    <div className="AddProductCategoriesContainer">
      <div className="AddProductCatehead">
        <div className="AddProductCate1"></div>
        <div className="AddProductCate2">
          <div className="AddProductcatehead1">
            <FaList
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddProductCateText">
              <p>0</p>
              <p>Product</p>
            </div>
          </div>
          <div className="AddProductcatehead1">
            <FaRandom
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddProductCateText">
              <p>Puteway Rules</p>
            </div>
          </div>
        </div>
      </div>
      <div className="AddProductCateMain">
      <div className="AddProductCatedetails">
        <div className="AddProductCatedetails1">
          <div className="AddProductCatecontent">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="AddProductCatecontent">
            <p>Parent Category</p>
            <select onChange={(e) => updateParentCategory(e.target.value)} className="prntSlt">
              <option value="Assets">Assets</option>
              <option value="Assets / Computers and printers">Assets / Computers and printers</option>
              <option value="Assets / Extinguishing programs, permits and licenses">
                Assets / Extinguishing programs, permits and licenses
              </option>
              <option  value="Assets / Furniture">Assets / Furniture </option>
              <option value="Assets / Houses">Assets / Houses</option>
              <option value="Assets / lab equipment">Assets / lab equipment</option>
              <option value="Assets / Prefabricated plastic and concrete barriers">
                Assets / Prefabricated plastic and concrete barriers
              </option>
              <option value="Create and Edit.." style={{ color : '#1f1fed'}}>Create and Edit..</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
        </div>
        <div className="AddProductdetails2">
          <p>Hierarchy</p>
          <div className="alertbox">
            <b>No hierarchy position.</b>
          </div>
        </div>
      </div>
      <div className="AddProductCateContent">
        <h5>Logistics</h5>

        <div className="AddProductCateMultiselect">
          <p>Routes</p>
          <Multiselect
            className="Addmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div>
        <div className="AddProductCatetotal">
          <p>Total routes</p>
        </div>
          <div className="AddProductCatedropdown">
            <p>Force Removal Strategy</p>
            <select>
              <option>First in first out (FIFO)</option>
              <option>Last in First Out (LIFO)</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
      </div>
      <div className="AddProductdetailscontent3">
        <div className="InventoryValuation">
          <h5>Inventory Valuation</h5>
        <div className="AddProductCate3dropdown">
            <p>Costing Method</p>
            <select>
              <option></option>
              <option>Standard Price</option>
              <option>First in first out (FIFO)</option>
              <option>Average Cost(AVCO)</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
        <div className="AddProductCate3dropdown">
            <p>Inventory Valuation</p>
            <select>
              <option>Manual</option>
              <option>Automated</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
        </div>
        <div className="AddProductCateEmptybox"></div>
      </div>
      <div className="AddProductCatecontent4">
        <div className="AccountProperties">
          <h5>Account Properties</h5>
        
        <div className="stockdropdown">
            <p>Income Account</p>
            <select>
              <option></option>
              <option>110101001 صندوق ادارة الرياض</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
        <div className="stockdropdown">
            <p>Price Difference Account</p>
            <select>
              <option></option>
              <option>110101001 صندوق ادارة الرياض</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>Create and Edit....</option>
              <option>Search More...</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
        <div className="stockdropdown">
            <p>Expense Account</p>
            <select>
              <option></option>
              <option>110101001 صندوق ادارة الرياض</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
        </div>
        <div className="AccountStock">
        <h5>Account Stock Properties</h5>
        <div className="stockdropdown">
            <p>Stock Input Account</p>
            <select>
              <option></option>
              <option>110101001 صندوق ادارة الرياض</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
      </div>
        <div className="stockdropdown">
            <p>Stock Output Account</p>
            <select>
              <option></option>
              <option>110101001 صندوق ادارة الرياض</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
      </div>
        <div className="stockdropdown">
            <p>Stock Valuation Account</p>
            <select>
              <option></option>
              <option>110101001 صندوق ادارة الرياض</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
      </div>
        <div className="stockdropdown">
            <p>Stock Journal</p>
            <select>
              <option></option>
              <option>110101001 صندوق ادارة الرياض</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
              <option>110101002 صندوق الزلفي</option>
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
      </div>
        </div>
       
        </div>
      </div>
      </div>
      <DiffrentAccount showAccount={showAccount} setShowAccount={setShowAccount}/>
      
      </>
  );
};

export default AddProductCategories;
