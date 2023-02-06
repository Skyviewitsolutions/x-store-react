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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import $ from "jquery";


const AddWarehouse = (props) => {

  const [events, setEvents] = useState("WarehouseConfig");
  const [isEdit, setIsEdit] = useState(false);

  const AddWarehouseUrl = endpoints.wareHouse.addWarehouse;
  const AllWorkAddrUrl = endpoints.workAddress.allWorkAddres;
  const navigate = useNavigate();
  const [locationall, setLocationall] = useState([]);
  const [warehouseName, setWarehousename] = useState("");
  const [shortName, setShortname] = useState("");
  const [address, setAddress] = useState("");
  const [buy, setBuy] = useState(false);
  const [resupply, setResupply] = useState(false);
  const [menufactureResupply, setMenufactureResupply] = useState(false);
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
    } else if (buy == false && resupply == false && menufactureResupply == false) {
      toast("please select any resupply !", { type: "warning" });
    } else if (manufacture === "") {
      toast("manufacture is required !", { type: "warning" });
    } else {
      axios
        .post(AddWarehouseUrl, formData,)
        .then((res) => {
          console.log(res,"response warehouse")
          if (res.data.status == true) {
            toast("Warehouse Added Sucessfully!", { type: "success" });
            setTimeout(() => {
              navigate('/Warehouse')
            }, 1000);
          } else if (res.data.status === false) {
            if(res.data.code === 3)
            {
              toast("Session expired , Please re-login",{type:"warning"})
              navigate('/');
            }
            else{
             toast(res.data.message,{type:"error"});
            }
          }
        })      
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }
  }

  
  useEffect(() => {

    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken)
    formData.append("User_AuthKey" , userAuth);
    axios
      .post(AllWorkAddrUrl , formData)
      .then((res) => {
        console.log(res, "address");
        if (res.data.status === true) {
        
          const val = res.data.data;
          const filterAddr = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
          })
          setLocationall(filterAddr);
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
      setBuy(JSON.parse(selectedData.BUY_RESUPPLY));
      setResupply(JSON.parse(selectedData.RESUPPLY));
      setMenufactureResupply(JSON.parse(selectedData.MANUFACTURE_RESUPPLY));
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
            toast("Warehouse Updated Sucessfully!", { type: "success" });
            setTimeout(() => {
              navigate('/Warehouse')
            }, 1000);
          } else if (res.data.status === false) {
            if(res.data.code === 3)
            {
              toast("Session expired , Please re-login",{type:"warning"})
              navigate('/');
            }
            else{
             toast(res.data.message,{type:"error"});
            }
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }

  };

  useEffect(() => {
    $('#field_warehouse').bind('keypress', function(e) {
      if(e.keyCode==13){
        $('#field_shortname').focus();
      }
  });
    $('#field_shortname').bind('keypress', function(e) {
      if(e.keyCode==13){
        $('#select_address').focus();
      }
  });
  },[])

  return (
    <>
      <Navebar
        showBelowMenu={true}
        save={update === true ? updateData : save}
        title="Warehouse"
        showCanelBtn={true}
      />
      <div className="AddwareHouseContainer">
        {/* <div className="AddWareHouseHead">
          <div className="head2">
            <HiOutlineRefresh
              size="33px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddWarehousetext">
              <p>Routes</p>
            </div>
          </div>
        </div> */}
        <div className="main_ware">
        <div className="Createcontent">
          <p>Warehouse</p>
          <input
          id="field_warehouse"
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
              id="field_shortname"
                type="text"
                value={shortName}
                onChange={(e) => setShortname(e.target.value)}
                readOnly={update === true ? true : false}
              />
            </div>
            <div className="Adddropdown">
              <p>Address</p>
              <select
              id="select_address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                <option value="">Choose any one</option>
                {locationall.map((item, index) => {
                  return (
                    <>
                      <option value={item.WORK_NAME}>
                        {item.WORK_NAME}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>

          </div>
          <div className="Addcontent2">
            
          </div>
        </div>
        </div>
        <div className="details_btns">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
              className={events === "WarehouseConfig" ? "navLinkActive" : "navLinkDeactive"}
              onClick={() => setEvents("WarehouseConfig")}
            >
              <Nav.Link>Warehouse Configuration</Nav.Link>
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
