import React, { useState } from "react";
import "./AddWarehouse.css";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaExternalLinkAlt, FaWarehouse } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import WarehouseConfig from "./WarehouseConfig";
import TechnicalInfor from "./TechnicalInfor";
import Navebar from "../../../../components/Navbar/Navbar";
import { endpoints } from "../../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AddWarehouse = (props) => {
  const [event, setEvent] = useState("WarehouseConfig");

  const AddWarehouseUrl = endpoints.wareHouse.addWarehouse;
  const AllLoactionUrl = endpoints.location.allLocation;
  const [locationall, setLocationall] = useState([]);
  const [warehouseName, setWarehousename] = useState("");
  const [shortName, setShortname] = useState("");
  const [address, setAddress] = useState("");
  const [responsible, setResponsible] = useState("");
  const [incomingShips, setIncomingships] = useState("");
  const [outgoingShips, setOutgoingships] = useState("");
  const [resupply, setResupply] = useState(false);
  const [transitLocation, setTransitLocation] = useState("");
  const [update, setUpdate] = useState(false);

  const save = () => {
    const formData = new FormData();

    formData.append("WareHsName", warehouseName);
    formData.append("ShortName", shortName);
    formData.append("Address", address);
    formData.append("Responsible", responsible);
    formData.append("IncomingShips", incomingShips);
    formData.append("OutGoingShips", outgoingShips);
    formData.append("Resupply", resupply);
    formData.append("TransitLocation", transitLocation);

    if (warehouseName === "") {
      toast("WareHouseName required !", { type: "warning" });
    } else if (shortName === "") {
      toast("ShortName is required !", { type: "warning" });
    } else if (address === "") {
      toast("address is required !", { type: "warning" });
    } else if (responsible === "") {
      toast("responsible is required !", { type: "warning" });
    } else if (incomingShips === "") {
      toast("incomingships is required !", { type: "warning" });
    } else if (outgoingShips === "") {
      toast("outgoing is required !", { type: "warning" });
    } else if (resupply === "") {
      toast("resupply is required !", { type: "warning" });
    } else if (transitLocation === "") {
      toast("transit Location is required !", { type: "warning" });
    } else {
      axios
        .post(AddWarehouseUrl, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Warehouse Added Sucessfully!", { type: "Success" });
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }
  };

  const formData2 = new FormData();

  useEffect(() => {
    axios
      .post(AllLoactionUrl, formData2)
      .then((res) => {
        console.log(res, "locationresult");
        if (res.data.status === true) {
          setLocationall(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const location = useLocation();

  const selectedData = location.state;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setWarehousename(selectedData.WAREHOUSE_NAME);
      setAddress(selectedData.WAREHOUSE_ADDRESS);
      setTransitLocation(selectedData.TRANSIT_LOCATION);
      setShortname(selectedData.SHORTNAME);
      setResponsible(selectedData.RESPONSIBLE);
      setIncomingships(selectedData.INCOMING_SHIPMENT);
      setOutgoingships(selectedData.OUTGOING_SHIPMENTS);
      setResupply(JSON.parse(selectedData.RESUPPLY.toLowerCase()));
    }
  }, [selectedData]);

  const updateUrl = endpoints.wareHouse.updateWarehouse;

  const updateData = () => {
    if (warehouseName === "") {
      toast("WareHouseName required !", { type: "warning" });
    } else if (shortName === "") {
      toast("ShortName is required !", { type: "warning" });
    } else if (address === "") {
      toast("address is required !", { type: "warning" });
    } else if (responsible === "") {
      toast("responsible is required !", { type: "warning" });
    } else if (incomingShips === "") {
      toast("incomingships is required !", { type: "warning" });
    } else if (outgoingShips === "") {
      toast("outgoing is required !", { type: "warning" });
    } else if (resupply === "") {
      toast("resupply is required !", { type: "warning" });
    } else if (transitLocation === "") {
      toast("transit Location is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Id", selectedData.WARE_HOUSE_ID);
      formData.append("WareHsName", warehouseName);
      formData.append("ShortName", shortName);
      formData.append("Address", address);
      formData.append("Responsible", responsible);
      formData.append("IncomingShips", incomingShips);
      formData.append("OutGoingShips", outgoingShips);
      formData.append("Resupply", resupply);
      formData.append("TransitLocation", transitLocation);

      axios
        .post(updateUrl, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Warehouse Updated Sucessfully!", { type: "Success" });
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }
  };

  return (
    <>
      <Navebar
        showBelowMenu={true}
        save={update === true ? updateData : save}
        title="WareHouse"
      />
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
            value={warehouseName}
            onChange={(e) => setWarehousename(e.target.value)}
          />
        </div>
        <div className="shortname">
          <div className="Addcontent">
            <p>Short Name</p>
            <input
              type="text"
              value={shortName}
              onChange={(e) => setShortname(e.target.value)}
            />
          </div>
          <div className="Addcontent2">
            <div className="Adddropdown">
              <p>Address</p>
              <select
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              >
                <option value=""></option>
                {locationall.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.LOCATION_NAME}>
                        {item.LOCATION_NAME}
                      </option>
                    </>
                  );
                })}
              </select>
    

            </div>
            <div className="Adddropdown">
              <p>Responsibles</p>
              <select
                onChange={(e) => setResponsible(e.target.value)}
                value={responsible}
              >
                <option></option>
                <option value="Al-Enjaz Contracting & Trading Company">
                  Al-Enjaz Contracting & Trading Company
                </option>
                <option value="110">110</option>
                <option value="13103">13103</option>
                <option value="20">20</option>
                <option value="20804">20804</option>
                <option value="300048513700003">300048513700003</option>
                <option value="Aad Saud Alshaibani Alotaibi">
                  Aad Saud Alshaibani Alotaibi
                </option>
                <option value="Aalok Kumar Bodhnath Maht">
                  Aalok Kumar Bodhnath Maht
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="Adddetails">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
              className="detailslink"
              onClick={() => setEvent("WarehouseConfig")}
            >
              <Nav.Link href="">Warehouse Configuration</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="detailslink"
              onClick={() => setEvent("TechnicalInfor")}
            >
              <Nav.Link eventKey="link-1">Technical Information</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="Warehouse">
          {event === "WarehouseConfig" && (
            <WarehouseConfig
              incomingShips={incomingShips}
              setIncomingships={setIncomingships}
              outgoingShips={outgoingShips}
              setOutgoingships={setOutgoingships}
              resupply={resupply}
              setResupply={setResupply}
            />
          )}
          {event === "TechnicalInfor" && (
            <TechnicalInfor
              transitLocation={transitLocation}
              setTransitLocation={setTransitLocation}
            />
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddWarehouse;
