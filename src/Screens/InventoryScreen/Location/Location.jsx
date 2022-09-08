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
import {toast , ToastContainer} from "react-toastify";

const Location = () => {

  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddLocation");
  };
  const url = endpoints.location.allLocation;

  const [Locationdetails, setLocationdetails] = useState([]);

  const getLocation = () => {
    axios
    .post(url)
    .then((res) => {
      console.log(res, "response");
      if (res.data.status === true) {
        setLocationdetails(res.data.data);
      } else if (res.data.status === false) {
        alert(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err, "error");
    });
  }

  useEffect(() => {
    getLocation();
  }, []);

  const locationDeleteUrl = endpoints.location.deleteLocation;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("Id",data);
    axios.post(locationDeleteUrl,formData)
    .then((res) => {
      console.log(res,"deleteLoaction");
      if(res.data.status === true)
      {
        getLocation();
        toast("Location deleted Successfully",{type:"success"});
      }
      else if(res.data.status === false)
      {
        toast(res.data.message,{type:"error"})
      }
    })
    .catch((err) => {
      console.log(err,"error");
    });
  };

  const handleUpdate = (data) => {
    const val = Locationdetails.filter((itm,index) => {
      return itm.LOCATION_ID == data
    })

    const orgValue = val[0];
    // console.log(orgValue , "orgValue");
    navigate("/AddLocation" , {state:orgValue});
  }

  const column = [
    { label: "Location", name: "LOCATION_NAME" },
    { label: "Location Type", name: "LOCATION_TYPE" },
    {
      label: "Actions",
      name: "LOCATION_ID",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit size={23} color="#4f4e4d" onClick={() => handleUpdate(value)} />
                <MdDelete
                  size={23}
                  color="#4f4e4d"
                  onClick={() => deleteItem(value)}
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
      <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Location"/>
      <div className="container-fluid PROVAR">
        <div className="Main">
          {/* <div className="left">
       
          <Sidebar/>
          </div> */}
          <div className="Right">
            <CustomTable data={Locationdetails} column={column} />
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Location;
