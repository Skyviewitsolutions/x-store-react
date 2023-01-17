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
import { useLocation, useNavigate } from "react-router-dom";
import { SecurityUpdate } from "@mui/icons-material";


const AddLocation = () => {
  
  const AddLocUrl = endpoints.location.addLocation;
  const locationtypeUrl = endpoints.location.locationType;
  const navigate = useNavigate();
  const [location, setLocation] = useState([]);
  const [alllocation, setAllLocation] = useState([]);
  const [locationName, setLocationName] = useState("");
  const [parentLocation, setParentLocation] = useState("");
  const [locationType, setLocationType] = useState("");
  const [scrapLocation, setScapLocation] = useState(false);
  const [returnLocation, setReturnLocation] = useState(false);
  const [removel, setRemovel] = useState("");
  const [notes, setNotes] = useState("");
  const [update, setUpdate] = useState(false);

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const formData = new FormData();
  
  formData.append("Location_Name", locationName);
  formData.append("Parent_Location", parentLocation);
  formData.append("Location_Type", locationType);
  formData.append("Scrap_Location", scrapLocation);
  formData.append("Return_Location", returnLocation);
  formData.append("Removal_Strategy", removel);
  formData.append("User_Authorization" , getAuthtoken);
  formData.append("User_AuthKey" , userAuth);
  formData.append("Notes", notes);

  const save = () => {
    if (locationName === "") {
      toast("Loaction Name is Require!", { type: "warning" });
    } else if (parentLocation === "") {
      toast("parent Location is Required!", { type: "warning" });
    } else if (locationType === "") {
      toast("Location Type is Required!", { type: "warning" });
    } else if (scrapLocation === "") {
      toast("Scrap Location is Required!", { type: "warning" });
    } else if (returnLocation === "") {
      toast("Return Location is Required!", { type: "warning" });
    } else if (removel === "") {
      toast("Removal_Strategy is Required!", { type: "warning" });
    } else {
      axios
        .post(AddLocUrl, formData)
        .then((res) => {
          console.log(res, "locationResult");
          if (res.data.status == true) {
            toast("Location Added Succesfully!", { type: "success" });
            setTimeout(() => {
              navigate('/Location')
            }, 1000);
          } else if (res.data.status == false) {
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
      setScapLocation(JSON.parse(selectedData.SCRAP_LOCATION));
      setReturnLocation(JSON.parse(selectedData.RETURN_LOCATION));
      setRemovel(selectedData.REMOVAL_STRATAGY);
      setNotes(selectedData.LOCATION_INFO)
    }

    console.log(selectedData , "selectedData here");
  }, [selectedData]);


  const locationupdateUrl = endpoints.location.updateLocation;

  const updateData = () => {

    if (locationName === "") {
      toast("Loaction Name is Require!", { type: "warning" });
    } else if (parentLocation === "") {
      toast("parent Location is Required!", { type: "warning" });
    } else if (locationType === "") {
      toast("Location Type is Required!", { type: "warning" });
    } else if (scrapLocation === "") {
      toast("Scrap Location is Required!", { type: "warning" });
    } else if (returnLocation === "") {
      toast("Return Location is Required!", { type: "warning" });
    } else if (removel === "") {
      toast("Removal_Strategy is Required!", { type: "warning" });
    } else {
      const formData = new FormData();

      formData.append("Id" , selectedData.LOCATION_ID)
      formData.append("Location_Name", locationName);
      formData.append("Parent_Location", parentLocation);
      formData.append("Location_Type", locationType);
      formData.append("Scrap_Location", scrapLocation);
      formData.append("Return_Location", returnLocation);
      formData.append("Removal_Strategy", removel);
      formData.append("Notes", notes);
      formData.append("User_Authorization" , getAuthtoken);
      formData.append("User_AuthKey" , userAuth);
      axios.post(locationupdateUrl,formData)
      .then((res) => {
        if(res.data.status == true)
        {
          toast("Location Updated Successfully!" , {type:"success"})
          setTimeout(() => {
            navigate('/Location')
          }, 1000);
        }
        else if(res.data.status == false)
        {
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
        console.log(err,"error");
        toast("Something went wrong", {type:"error"});
      });
    }
  };

  const parentLocationUrl = endpoints.location.allLocation;

  const getAllLocation = () => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios.post(parentLocationUrl,formData)
    .then((res) => {
     
      if(res.data.status == true)
      {
        setAllLocation(res.data.data)
      }
      else if(res.data.status == false)
      {
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
      console.log(err,"error");
      toast("Something went wrong", {type:"error"});
    });

  }

  useEffect(() => {
    getAllLocation()
  })
  return (
    <>
      <Navebar
        showBelowMenu={true}
        save={update === true ? updateData : save}
        title="Location"
        showCanelBtn={true}
      />
      <div className="AddlocationCon">
        {/* <div className="AddLocationhead">
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
        </div> */}
        <div className="AddLocationmain">
          <div className="AddLocationinput">
            <p>Location Name</p>
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />
          </div>
          <div className="parent_loc">
          <p>Parent Location</p>
              <select
                value={parentLocation}
                onChange={(e) => setParentLocation(e.target.value)}
              >
                <option value="">select any one</option>
              {alllocation.map((itm,ind) => {
                return(
                  <>
                  <option value={itm.LOCATION_NAME}>{itm.LOCATION_NAME}</option>
                  </>
                )
              })}
              </select>
          </div>
          <div className="AddLocationdetails">
            <div className="Locationdetails1">
              <h4>Additional Information</h4>
              <div className="Addlocationcontent">
                <p>Location Type</p>
                <select
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value)}
                >
                  <option>Select any one</option>
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
             
              <h4>Logistics</h4>
              <div className="Addlocationcontents">
                <p>Removal Strategy</p>
                <select
                  value={removel}
                  onChange={(e) => setRemovel(e.target.value)}
                >
                  <option value="">select any one</option>
                  <option value="First in first out(FIFO)">
                    First in first out(FIFO)
                  </option>
                  <option value="Last in Last out(LIFO)">
                    Last in Last out(LIFO)
                  </option>
                </select>
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
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddLocation;
