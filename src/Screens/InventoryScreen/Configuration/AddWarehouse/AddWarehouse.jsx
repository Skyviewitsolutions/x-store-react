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
  const [isEdit , setIsEdit] = useState(false);

  const AddWarehouseUrl = endpoints.wareHouse.addWarehouse;
  const AllLoactionUrl = endpoints.location.allLocation;
  const [locationall, setLocationall] = useState([]);
  const [warehouseName, setWarehousename] = useState("");
  const [shortName, setShortname] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState("");
  const [update, setUpdate] = useState(false);



  const save = () => {
    const formData = new FormData();

    formData.append("WareHsName", warehouseName);
    formData.append("ShortName", shortName);
    formData.append("Street", street);
    formData.append("City", city);
    formData.append("Country", country);
    formData.append("State",state);
    formData.append("Zip_Code", zipCode);
    formData.append("Phone", phone);
    formData.append("Mobile", mobile);
    formData.append("Email", email);
    formData.append("Users", users);

    if (warehouseName === "") {
      toast("WareHouseName required !", { type: "warning" });
    } else if (shortName === "") {
      toast("ShortName is required !", { type: "warning" });
    } else if (street === "") {
      toast("Street is required !", { type: "warning" });
    } else if (city === "") {
      toast("City is required !", { type: "warning" });
    } else if (state === "") {
      toast("State is required !", { type: "warning" });
    } else if (country === "") {
      toast("Country is required !", { type: "warning" });
    } else if (zipCode === "") {
      toast("Zip Code is required !", { type: "warning" });
    } else if (mobile === "") {
      toast("Mobile is required !", { type: "warning" });
    } else if (email === "") {
      toast("Email is required !", { type: "warning" });
    } else if (users === "") {
      toast("Users is required !", { type: "warning" });
    } else if (phone === "") {
      toast("Phone  is required !", { type: "warning" });
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

  useEffect(() => {
    axios
      .post(AllLoactionUrl)
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
      setShortname(selectedData.WAREHOUSE_SHOT_NAME);
      setStreet(selectedData.WAREHOUSE_STREET);
      setCity(selectedData.WAREHOUSE_CITY);
      setState(selectedData.WAREHOUSE_STATE);
      setCountry(selectedData.WAREHOUSE);
      setZipCode(selectedData.WAREHOUSE_ZIPCODE);
      setPhone(selectedData.WAREHOUSE_PHONE);
      setMobile(selectedData.WAREHOSE_MOBILE);
      setEmail(selectedData.WAREHOUSE_EMAIL);
      setUsers(selectedData.WAREHOUSE_USER);
    }
  }, [selectedData]);

  const updateUrl = endpoints.wareHouse.updateWarehouse;

  const updateData = () => {
    if (warehouseName === "") {
      toast("WareHouseName required !", { type: "warning" });
    } else if (shortName === "") {
      toast("ShortName is required !", { type: "warning" });
    } else if (street === "") {
      toast("Street is required !", { type: "warning" });
    } else if (city === "") {
      toast("City is required !", { type: "warning" });
    } else if (state === "") {
      toast("State is required !", { type: "warning" });
    } else if (country === "") {
      toast("Country is required !", { type: "warning" });
    } else if (zipCode === "") {
      toast("Zip Code is required !", { type: "warning" });
    } else if (mobile === "") {
      toast("Mobile is required !", { type: "warning" });
    } else if (email === "") {
      toast("Email is required !", { type: "warning" });
    } else if (users === "") {
      toast("Users is required !", { type: "warning" });
    } else if (phone === "") {
      toast("Phone  is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Id", selectedData.WARE_ID);
      formData.append("WareHsName", warehouseName);
      formData.append("ShortName", shortName);
      formData.append("Street", street);
      formData.append("City", city);
      formData.append("Country", country);
      formData.append("State",state);
      formData.append("Zip_Code", zipCode);
      formData.append("Phone", phone);
      formData.append("Mobile", mobile);
      formData.append("Email", email);
      formData.append("Users", users);
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
             <select>
            <option value=""></option>
              {locationall.map((item,index) => {
                return(
                  <>
                <option value={item.LOCATION_NAME}>{item.LOCATION_NAME}</option>
                  </>
                )
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
            <WarehouseConfig/>
          )}
        </div>
    

        <ToastContainer />
      </div>
    </>
  );
};

export default AddWarehouse;
