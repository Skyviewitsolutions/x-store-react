import React, { useEffect, useState } from "react";
import "./AddLocation.css";
import { FaRandom } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
import Navebar from "../../../../components/Navbar/Navbar";
import { endpoints } from "../../../../services/endpoints";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { SecurityUpdate } from "@mui/icons-material";

const AddLocation = () => {
  
  const AddLocUrl = endpoints.location.addLocation;
  const locationtypeUrl = endpoints.location.locationType;
  const [location, setLocation] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [parentLocation, setParentLocation] = useState("");
  const [locationType, setLocationType] = useState("");
  const [scrapLocation, setScapLocation] = useState(false);
  const [returnLocation, setReturnLocation] = useState(false);
  const [oillocation, setOillocation] = useState(false);
  const [users, setUsers] = useState("");
  const [removel, setRemovel] = useState("");
  const [notes, setNotes] = useState("");
  const [update, setUpdate] = useState(false);

  const formData = new FormData();
  formData.append("Location_Name", locationName);
  formData.append("Parent_Location", parentLocation);
  formData.append("Location_Type", locationType);
  formData.append("Oil_Details", oillocation);
  formData.append("Scrap_Location", scrapLocation);
  formData.append("Return_Location", returnLocation);
  formData.append("Users", users);
  formData.append("Removal_Strategy", removel);
  formData.append("Notes", notes);

  const save = () => {
    if (locationName === "") {
      toast("Loaction Name is Require!", { type: "warning" });
    } else if (parentLocation === "") {
      toast("parent Location is Required!", { type: "warning" });
    } else if (locationType === "") {
      toast("Location Type is Required!", { type: "warning" });
    } else if (oillocation === "") {
      toast("Oil Details is required!", { type: "warning" });
    } else if (scrapLocation === "") {
      toast("Scrap Location is Required!", { type: "warning" });
    } else if (returnLocation === "") {
      toast("Return Location is Required!", { type: "warning" });
    } else if (users === "") {
      toast("Users is Required!", { type: "warning" });
    } else if (removel === "") {
      toast("Removal_Strategy is Required!", { type: "warning" });
    } else {
      axios
        .post(AddLocUrl, formData)
        .then((res) => {
          console.log(res, "locationResult");
          if (res.data.status == true) {
            toast("Location Added Succesfully!", { type: "success" });
          } else if (res.data.status == false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
        });
    }
  };

  useEffect(() => {
    axios
      .post(locationtypeUrl)
      .then((res) => {
        if (res.data.status === true) {
          setLocation(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const locationn = useLocation();
  const selectedData = locationn.state;


  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setLocationName(selectedData.LOCATION_NAME);
      setLocationType(selectedData.LOCATION_TYPE);
      setParentLocation(selectedData.PARENT_LOCATION);
      setScapLocation(selectedData.SCRAP_LOCATION);
      setReturnLocation(selectedData.RETURN_LOCATION);
      setOillocation(selectedData.OIL_DETAILS);
      setUsers(selectedData.USERS);
      setRemovel(selectedData.REMOVAL_STRATEGY);
      setNotes(selectedData.NOTES)
    }
  }, [selectedData]);

  console.log(locationType, "locationTypehere");

  const locationupdateUrl = endpoints.location.updateLocation;

  const updateData = () => {

    if (locationName === "") {
      toast("Loaction Name is Require!", { type: "warning" });
    } else if (parentLocation === "") {
      toast("parent Location is Required!", { type: "warning" });
    } else if (locationType === "") {
      toast("Location Type is Required!", { type: "warning" });
    } else if (oillocation === "") {
      toast("Oil Details is required!", { type: "warning" });
    } else if (scrapLocation === "") {
      toast("Scrap Location is Required!", { type: "warning" });
    } else if (returnLocation === "") {
      toast("Return Location is Required!", { type: "warning" });
    } else if (users === "") {
      toast("Users is Required!", { type: "warning" });
    } else if (removel === "") {
      toast("Removal_Strategy is Required!", { type: "warning" });
    } else {
      const formData = new FormData();

      formData.append("Id" , selectedData.LOCATION_ID)
      formData.append("Location_Name", locationName);
      formData.append("Parent_Location", parentLocation);
      formData.append("Location_Type", locationType);
      formData.append("Oil_Details", oillocation);
      formData.append("Scrap_Location", scrapLocation);
      formData.append("Return_Location", returnLocation);
      formData.append("Users", users);
      formData.append("Removal_Strategy", removel);
      formData.append("Notes", notes);
      axios.post(locationupdateUrl,formData)
      .then((res) => {
        if(res.data.status == true)
        {
          toast("Location Updated Successfully!" , {type:"success"})
        }
        else if(res.data.status == false)
        {
          toast(res.data.message,{type:"error"});
        }
      })
      .catch((err) => {
        console.log(err,"error");
        toast("Something went wrong", {type:"error"});
      });
    }
  };
  return (
    <>
      <Navebar
        showBelowMenu={true}
        save={update === true ? updateData : save}
        title="Location"
      />
      <div className="AddlocationCon">
        <div className="AddLocationhead">
          <div className="AddLocation2">
            <div className="head1">
              <FaRandom
                size="25px"
                style={{ color: "#848484", marginTop: "5px" }}
              />
              <div className="AddLocationText">
                <p>Puteway Rules</p>
              </div>
            </div>
            <div className="head1">
              <FaCubes
                size="25px"
                style={{ color: "#848484", marginTop: "5px" }}
              />
              <div className="AddLocationText">
                <p>Current Stock</p>
              </div>
            </div>
            <div className="head1">
              <FaList
                size="25px"
                style={{ color: "#848484", marginTop: "5px" }}
              />
              <div className="AddLocationText">
                <p>Current Stock</p>
              </div>
            </div>
          </div>
        </div>
        <div className="AddLocationmain">
          <div className="AddLocationinput">
            <h5>Location Name</h5>
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />
          </div>
          <div className="AddLocationdetails">
            <div className="Locationdetails1">
              <p>Parent Location</p>
              <select
                value={parentLocation}
                onChange={(e) => setParentLocation(e.target.value)}
              >
                <option value=""></option>
                <option value="AFWH">AFWH</option>
                <option value="AFWH/Stock">AFWH/Stock</option>
                <option value="AFWH/Stock/Diesel">AFWH/Stock/Diesel</option>
                <option value="AFWH/Stock/Oil">AFWH/Stock/Oil</option>
                <option value="BAPMS">BAPMS</option>
                <option value="BAPMS/Al Baha Store for Projects">
                  BAPMS/Al Baha Store for Projects
                </option>
                <option value="BAWH">BAWH</option>
              </select>

              <FaExternalLinkAlt
                size="14px"
                style={{
                  color: "#79757d",
                  marginLeft: "8px",
                  marginTop: "10px",
                }}
              />
              <h4>Additional Information</h4>
              <div className="Addlocationcontent">
                <p>Location Type</p>
                <select
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value)}
                >
                  <option value=""></option>
                  {location.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item.LOCATIONTYPE}>
                          {item.LOCATIONTYPE}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="Addlocationcontent">
                <p>Is a Scrap Location?</p>
                <input
                  type="checkbox"
                  checked={scrapLocation}
                  onChange={(e) => setScapLocation(!scrapLocation)}
                />
              </div>
              <div className="Addlocationcontent">
                <p>Is a Return Location?</p>
                <input
                  type="checkbox"
                  checked={returnLocation}
                  onChange={(e) => setReturnLocation(!returnLocation)}
                />
              </div>
              <div className="Addlocationcontent">
                <p>User</p>
                <select
                  value={users}
                  onChange={(e) => setUsers(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Abd Alla Mohamed Ahmed">
                    Abd Alla Mohamed Ahmed
                  </option>
                  <option value="Abdul Basit Abdul Ghani">
                    Abdul Basit Abdul Ghani
                  </option>
                  <option value="Abd Alla Mohamed Ahmed">
                    Abd Alla Mohamed Ahmed
                  </option>
                  <option value="Abdul Rahman Hamad Alosailan">
                    Abdul Rahman Hamad Alosailan
                  </option>
                </select>
              </div>
              <h4>Logistics</h4>
              <div className="Addlocationcontent">
                <p>Removal Strategy</p>
                <select
                  value={removel}
                  onChange={(e) => setRemovel(e.target.value)}
                >
                  <option value=""></option>
                  <option value="First in first out(FIFO)">
                    First in first out(FIFO)
                  </option>
                  <option value="Last in Last out(LIFO)">
                    Last in Last out(LIFO)
                  </option>
                </select>
                <FaExternalLinkAlt
                  size="14px"
                  style={{
                    color: "#79757d",
                    marginLeft: "8px",
                    marginTop: "10px",
                  }}
                />
              </div>
              <div className="notes">
                <p>External note...</p>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>
            <div className="Locationdetails2">
              <h4>Oil details</h4>
              <div className="Addlocationcontent2">
                <p>Oil location</p>
                <input
                  type="checkbox"
                  checked={oillocation}
                  onChange={() => setOillocation(!oillocation)}
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddLocation;
