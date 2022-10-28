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

  const [events, setEvents] = useState("WarehouseConfig");
  const [isEdit, setIsEdit] = useState(false);

  const AddWarehouseUrl = endpoints.wareHouse.addWarehouse;
  const AllLoactionUrl = endpoints.location.allLocation;
  const [locationall, setLocationall] = useState([]);
  const [warehouseName, setWarehousename] = useState("");
  const [shortName, setShortname] = useState("");
  const [address, setAddress] = useState("");
  const [buy, setBuy] = useState("");
  const [resupply, setResupply] = useState("");
  const [menufactureResupply, setMenufactureResupply] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [update, setUpdate] = useState(false);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const save = () => {
    const formData = new FormData();
    formData.append("Name", warehouseName);
    formData.append("Short_Name", shortName);
    formData.append("Address", address);
    formData.append("Buy_To_Resupply", buy);
    formData.append("Resupply_Sub", resupply);
    formData.append("Manufacture_To_Resupply", menufactureResupply);
    formData.append("Manufacture", manufacture);
    formData.append("User_Authorization" , getAuthtoken)
    formData.append("User_AuthKey" , userAuth);
    if (warehouseName === "") {
      toast("WareHouseName required !", { type: "warning" });
    } else if (shortName === "") {
      toast("ShortName is required !", { type: "warning" });
    } else if (address === "") {
      toast("Adress is required !", { type: "warning" });
    } else if (buy === "") {
      toast("Buy to resupply is required !", { type: "warning" });
    } else if (resupply === "") {
      toast("Resupply Subcontractors is required !", {type: "warning"});
    } else if (menufactureResupply === "") {
      toast("Manufacture to Resupply is required !", {type: "warning"});
    } else {
      axios
        .post(AddWarehouseUrl, formData,)
        .then((res) => {
          console.log(res,"response warehouse")
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
  }
  useEffect(() => {
    axios
      .post(AllLoactionUrl)
      .then((res) => {
        console.log(res, "locationresult");
        if (res.data.status === true) {
          setLocationall(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message);
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
      setShortname(selectedData.SHORT_NAME);
      setAddress(selectedData.WAREHOUSE_ADDRESS);
      setBuy(selectedData.BUY_RESUPPLY);
      setResupply(selectedData.RESUPPLY);
      setMenufactureResupply(selectedData.MANUFACTURE_RESUPPLY);
      setManufacture(selectedData.MANUFACTURE);
    }
  }, [selectedData]);

  const updateUrl = endpoints.wareHouse.updateWarehouse;

  const updateData = () => {
    if (warehouseName === "") {
      toast("WareHouseName required !", { type: "warning" });
    } else if (shortName === "") {
      toast("ShortName is required !", { type: "warning" });
    } else if (address === "") {
      toast("Adress is required !", { type: "warning" });
    } else if (buy === "") {
      toast("Buy to resupply is required !", { type: "warning" });
    } else if (resupply === "") {
      toast("Resupply Subcontractors is required !", { type: "warning" });
    } else if (menufactureResupply === "") {
      toast("Manufacture to Resupply is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Id", selectedData.WAREHOUSE_ID);
      formData.append("Name", warehouseName);
      formData.append("Short_Name", shortName);
      formData.append("Address", address);
      formData.append("Buy_To_Resupply", buy);
      formData.append("Resupply_Sub", resupply);
      formData.append("Manufacture_To_Resupply", menufactureResupply);
      formData.append("Manufacture", manufacture);
      formData.append("User_Authorization" , getAuthtoken);
      formData.append("User_AuthKey" , userAuth);
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
            <div className="textIn">
              <p>Short Name</p>
              <input
                type="text"
                value={shortName}
                onChange={(e) => setShortname(e.target.value)}
              />
            </div>

          </div>
          <div className="Addcontent2">
            <div className="Adddropdown">
              <p>Address</p>
              <select
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                <option value=""></option>
                {locationall.map((item, index) => {
                  return (
                    <>
                      <option value={item.LOCATION_NAME}>
                        {item.LOCATION_NAME}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
              className="detailslink"
              onClick={() => setEvents("WarehouseConfig")}
            >
              <Nav.Link href="">Warehouse Configuration</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="GeneralInformation">
          {events === "WarehouseConfig" && isEdit === false && (
            <WarehouseConfig
              buy={buy}
              setBuy={setBuy}
              resupply={resupply}
              setResupply={setResupply}
              menufactureResupply={menufactureResupply}
              setMenufactureResupply={setMenufactureResupply}
              manufacture={manufacture}
              setManufacture={setManufacture}
            />
          )}
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default AddWarehouse;
