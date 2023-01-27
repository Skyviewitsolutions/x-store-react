import React, { useEffect, useState } from "react";
import "./Location.css";
import Navebar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";

const Location = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddLocation");
  };

  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  
  const url = endpoints.location.allLocation;

  const [Locationdetails, setLocationdetails] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getLocation = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios
      .post(url, formData)
      .then((res) => {
        console.log(res, "response location");
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse();
          setLocationdetails(val);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const locationDeleteUrl = endpoints.location.deleteLocation;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("Id", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(locationDeleteUrl, formData)
      .then((res) => {
        console.log(res, "deleteLoaction");
        if (res.data.status === true) {
          setShow(false)
          setDeleteConfirm(false)
          setSelectedData("")
          getLocation();
          toast("Location deleted Successfully", { type: "success" });
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

  const handleUpdate = (data) => {
    const val = Locationdetails.filter((itm, index) => {
      return itm.LOCATION_ID == data;
    });

    const orgValue = val[0];
    // console.log(orgValue , "orgValue");
    navigate("/AddLocation", { state: orgValue });
  };

  const column = [
    { label: "Location", name: "LOCATION_NAME" },
    { label: "Removal stratagy", name: "REMOVAL_STRATAGY" },
    { label: "Location Type", name: "LOCATION_TYPE" },
    {
      label: "Actions",
      name: "LOCATION_ID",
      options: {
        print : false ,
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
                  onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}
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
    <div>
      <Navebar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Location"
        disabledCreate={false}
      />
      <div className="container-fluid PROVAR">
        <div className="Main">
          {/* <div className="left">
       
          <Sidebar/>
          </div> */}
          <div className="Right">
            <CustomTable data={Locationdetails} column={column} />
            <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
          </div>
          
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Location;
