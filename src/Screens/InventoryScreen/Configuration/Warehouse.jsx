import React, { useEffect, useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";


const Warehouse = () => {

  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddWarehouse");
  };

  const url = endpoints.wareHouse.allWarehouse;

  const [WareHousedetails, setWareHousedetails] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const formData = new FormData();
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);
  const getWarehouseList = () => {
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse()
          setWareHousedetails(val);
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
      });
  };

  useEffect(() => {
    getWarehouseList();
  }, []);

  const WarehousedeleteUrl = endpoints.wareHouse.deleteWarehouse;
  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("Id", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(WarehousedeleteUrl, formData)
      .then((res) => {
        console.log(res, "warehousedelete");
        if (res.data.status === true) {
          toast("Warehouse deleted successfully!", { type: "success" });
          getWarehouseList();
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
      });
  };

  const handleUpdate = (data) => {
    const val = WareHousedetails.filter((itm, index) => {
      return itm.WAREHOUSE_ID == data;
    });

    const orgValue = val[0];
    // console.log(orgValue , "orgValue")
    navigate("/AddWarehouse", { state: orgValue });
  };

  const column = [
    { label: "Warehouse", name: "WAREHOUSE_NAME" },
    { label: "Location stock", name: "LOCATIONS_STOCK" },
    { label: "Address", name: "WAREHOUSE_ADDRESS" },
    {
      label: "Actions",
      name: "WAREHOUSE_ID",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="#4f4e4d"
                  onClick={() => deleteItem(value)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          );
        },
      },
    },
  ];
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Navebar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Warehouse"
      />
      <CustomTable column={column} data={WareHousedetails} />
      <ToastContainer />
    </div>
  );
};

export default Warehouse;
