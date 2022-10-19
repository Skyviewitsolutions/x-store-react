import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Destination from "../../../../components/ShippingMethodComp/Distination/Destination";
import Pricing from "../../../../components/ShippingMethodComp/Pricing/Pricing";
import SalesNavbar from "../../SalesNavbar/SalesNavbar";
import "./AddShipingMethod.css";

const AddShippingMethod = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("./AddShippingMethod");
  };
  const [isEdit , setIsEdit] = useState(false);
  const [events, setEvents] = useState("Pricing");
  return (
    <div>
      <SalesNavbar
        showBelowMenu={true}
        title="Shipping Methods"
      />
      <div className="AddShipingMainCon">
        <div className="AddShipingContainer">
          <div className="AddShippingName">
            <p>Name</p>
            <input type="text" placeholder="e.g UPS Express" />
          </div>
          <div className="AddShippingdetails">
            <div className="ShippingFirst">
              <div className="shippingActive">
                <p>Active</p>
                <input type="checkbox" />
              </div>
              <div className="shippingProvider">
                <div className="textpro">
                  <p>Provider</p>
                </div>
                <div className="shipingradio">
                  <div className="fixed">
                    <input type="radio" name="fixed" />
                    <span>Fixed Price</span>
                  </div>
                  <div className="fixed">
                    <input type="radio" name="fixed" />
                    <span>Based on Rules</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ShippingSecond">
              <div className="marginonrate">
                <p>Margin on Rate</p>
                <input type="text" placeholder="0.00" />
                <span>%</span>
              </div>
              <div className="free">
                <p>Free if order amount is above</p>
                <input type="checkbox" />
              </div>
              <div className="ammount">
                <p>Ammount</p>
                <input type="text" placeholder="0.00" />
              </div>
              <div className="delivery">
                <p>Delivery Product</p>
                <select>
                  <option></option>
                  <option>
                    [00] LABELLO LIP MOIST soft rose 4.8Gلابيلو - 4.8 جم
                  </option>
                  <option>[00001] YANA VEG ZUCINI</option>
                  <option>[00002] YANA VEG ZUCINI PC</option>
                  <option>[00003] YANA TOMATO</option>
                  <option>[00004] YANA EGGPLANT</option>
                  <option>[00005] YANA GREEN PEAS</option>
                  <option>[00006] YANA HOT CHILLI</option>
                </select>
              </div>
            </div>
          </div>
          <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
              className="detailslink"
              onClick={() => setEvents("Pricing")}
            >
              <Nav.Link href="">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="detailslink"
              onClick={() => setEvents("Destination")}
            >
              <Nav.Link eventKey="link-1">Destination Availbility</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="GeneralInformation">
          {events === "Pricing" && isEdit === false && (
            <Pricing/>
          )}
          {events === "Destination" && isEdit === false && (
            <Destination/>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddShippingMethod;
