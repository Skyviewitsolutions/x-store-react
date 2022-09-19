import React, { useEffect, useState } from "react";
import "./InventoryProductDetailsMain.css";
import { FaCubes } from "react-icons/fa";
import { TbArrowsLeftRight } from "react-icons/tb";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaRandom } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import Accounting from "./Accounting/Accounting";
import ProductDetailsInventory from "./ProductsDetailsInventory/ProductDetailsInventory";
import Variants from "./Varients/Variants";
import Purchase from "./Purchase/Purchase";
import GeneralInformationEdit from "./InventoryDetailsEdit/GeneralInformationEdit";
import VariantsEdit from "./InventoryDetailsEdit/VariantsEdit";
import PurchaseEdit from "./InventoryDetailsEdit/PurchaseEdit";
import InventoryEdit from "./InventoryDetailsEdit/InventoryEdit";
import AccountingEdit from "./InventoryDetailsEdit/AccountingEdit";
import camera from "../../assets/Images/camera.png";
import { useNavigate } from "react-router-dom";
import InventoryProductDetailsFooter from "../InventoryProductDetailsFooter/InventoryProductDetailsFooter";
import axios from "axios";

const InventoryProductDetailsMain = (props) => {

  const [events, setEvents] = useState("generalInformation");

  const { isEdit , productName , setProductName ,productType , setProductType , productCategory , setProductCategory ,units,setUnits,cost, setCost,salesPrice, setSalesPrice , interRef,setInterRef , customerTax , setCustomerTax , description , setDescription , sold , purchased , expensed , deduction , setSold , setPurchased , setExpensed , setDecution,productdetails, buy ,setBuy,replenishOnOrder,setReplenishOnOrder} = props;

  const navigate = useNavigate();
    
  const RedirectToEmpty = (data) => {
    if (data === "Hand") {
      const val = {
        title: "No Stock On Hand",
        text: "This analysis gives you an overview of the current stock level of your products.",
      };
      navigate("/Empty", { state: val });
    } else if (data === "units") {
      const val = {
        title: "No data to display",
        text: "Try to add some records, or make sure that there is no active filter in the search bar.",
      };
      navigate("/Empty", { state: val });
    } else if (data === "Traceability") {
      const val = {
        title: "There's no product move yet",
        text: "This menu gives you the full traceability of inventory operations on a specific product. You can filter on the product to see all the past movements for the product.",
      };
      navigate("/Empty", { state: val });
    }
  };

  return (
    <div className="MainContainer">
      <div className="Container">
        <div className="ContainerHeader">
          <div className="div1"></div>
          <div className="div2" onClick={() => RedirectToEmpty("Hand")}>
            <FaCubes
              size="30px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="text">
              <p>0.000 Units</p>
              <span>On Hand</span>
            </div>
          </div>
          <div className="div2" onClick={() => RedirectToEmpty("units")}>
            <FaCubes
              size="30px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="text">
              <p>0.000 Units</p>
              <span>Forecasted</span>
            </div>
          </div>
          <div className="div2" onClick={() => RedirectToEmpty("Traceability")}>
            <TbArrowsLeftRight
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="text2">
              <p>Traceability</p>
            </div>
          </div>
          <div className="div2">
            <HiOutlineRefresh
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="text">
              <p>0</p>
              <span>Reordering</span>
            </div>
          </div>
          <div className="div2">
            <FaCogs
              size="25px" className="hello"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="text2">
              <p>Routes</p>
            </div>
          </div>
          <div className="div2">
            <FaRandom
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="text2">
              <p>Puteway Rules</p>
            </div>
          </div>
        </div>
        <div className="detailsbox">
          <div className="detailsheading">
            {isEdit === false && <p>{productName}</p>}
            {isEdit === true && (
             
              <input
                type="text"
                className="proin"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            )}
            <div className="detailsinput">
              <div>
                <input type="checkbox" value={sold} onChange={ () => setSold(!sold)} checked={sold}/>
                <label>Sold</label>
              </div>
              <div>
                <input type="checkbox" value={purchased} onChange={() => setPurchased(!purchased)} checked={purchased}/>
                <label>Purchased</label>
              </div>
              <div>
                <input type="checkbox" value={expensed} onChange={() => setExpensed(!expensed)} checked={expensed}/>
                <label>Expensed</label>
              </div>
              <div>
                <input type="checkbox" value={deduction} onChange={() => setDecution(!deduction)} checked={deduction}/>
                <label>Deduction</label>
              </div>
            </div>
            {isEdit === true && (
              <div className="cameraimg">
                <img src={camera} alt="camera" />
              </div>
            )}
          </div>
        </div>
        <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
              className="detailslink"
              onClick={() => setEvents("generalInformation")}
            >
              <Nav.Link href="">General Information</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="detailslink"
              onClick={() => setEvents("variants")}
            >
              <Nav.Link eventKey="link-1">Variants</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="detailslink"
              onClick={() => setEvents("Purchase")}
            >
              <Nav.Link eventKey="link-2">Purchase</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="detailslink"
              onClick={() => setEvents("Inventory")}
            >
              <Nav.Link eventKey="link-3">Inventory</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="detailslink"
              onClick={() => setEvents("Accounting")}
            >
              <Nav.Link eventKey="link-4">Accounting</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="GeneralInformation">
          {events === "generalInformation" && isEdit === false && (
            <GeneralInformation {...props}/>
          )}
          {events === "variants" && isEdit === false && <Variants />}
          {events === "Purchase" && isEdit === false && <Purchase />}
          {events === "Inventory" && isEdit === false && (
            <ProductDetailsInventory {...props}/>
          )}
          {events === "Accounting" && isEdit === false && <Accounting {...props} />}
          {events === "generalInformation" && isEdit === true && (
            <GeneralInformationEdit {...props}/>
          )}
          {events === "variants" && isEdit === true && <VariantsEdit />}
          {events === "Purchase" && isEdit === true && <PurchaseEdit />}
          {events === "Inventory" && isEdit === true && <InventoryEdit {...props} />}
          {events === "Accounting" && isEdit === true && <AccountingEdit {...props}/>}
        </div>
      </div>

      {/* footer */}
      <InventoryProductDetailsFooter />
    </div>
  );
};

export default InventoryProductDetailsMain;
