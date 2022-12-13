import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import SalesNavbar from "../../SalesNavbar/SalesNavbar";
import "./AddSalesAttribute.css";
import AddValues from "./AddValues";

const AddSalesAttribute = () => {
  
  const [events, setEvents] = useState("Pricing");
  const [isEdit, setIsEdit] = useState(false);
  const [attributeName, setAttributename] = useState("");
  const [variablCreationmode, setVariableCreationmode] = useState("");
  const [attributeValues, setAttributeValues] = useState("");
  const [attributeColor, setAttributeColor] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [update, setUpdate] = useState("");

  const addAttributeUrl = endpoints.attribute.addsalesattribute;

  const formData = new FormData();

  const save = () => {
    
    if (attributeName === "") {
      toast("Attribute Name is Required !", { type: "warning" });
    } else if (variablCreationmode === "") {
      toast("Variable Creation Mode is required !", { type: "warning" });
   
    } else {
      formData.append("Attribute_Name", attributeName);
      formData.append("Display_Type", variablCreationmode);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(addAttributeUrl, formData)
        .then((res) => {
          console.log(res, "Attributeresult");
          if (res.data.status === true) {
            toast("Attribute Added Successfully", { type: "success" });
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
        });
    }
  };

  const location = useLocation();

  const selectedData = location.state;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setAttributename(selectedData.ATTRIBUTE_NAME);
      setVariableCreationmode(selectedData.VARIABLE_CREATION_MODE);
      setAttributeValues(selectedData.ATTRIBUTE_VALUE);
    }
  }, [selectedData]);

  const attributeUpdateUrl = endpoints.attribute.updatesalesattribute;

  const updateData = () => {
    if (attributeName === "") {
      toast("Attribute Name is Required !", { type: "warning" });
    } else if (variablCreationmode === "") {
      toast("Variable Creation Mode is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("ID", selectedData.ID);
      formData.append("Attribute_Name", attributeName);
      formData.append("Display_Type", variablCreationmode);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(attributeUpdateUrl, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Attribute Updated Successfully!", { type: "success" });
          } else if (res.data.status == false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("Something went wrong", { type: "error" });
        });
    }
  };

  return (
    <div>
      <SalesNavbar
        showBelowMenu={true}
        title="Attribute"
        save={update === true ? updateData : save}
        showCanelBtn={true}
      />
      <div className="AddAtrributeCon">
        <div className="AddAtrributemain">
          <div className="AddAttributedetails">
            <div className="Attributename">
              <p>Attribute Name</p>
              <input
                type="text"
                value={attributeName}
                onChange={(e) => setAttributename(e.target.value)}
              />
            </div>
          </div>
          <div className="variable">
            <p>Display Type</p>
            <div className="radio" name="variable">
              <div>
                <input
                  type="radio"
                  name="variable"
                  onChange={() => setVariableCreationmode("Radio")}
                  checked={variablCreationmode === "Radio" ? true : false}
                />{" "}
                <label>Radio</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="variable"
                  onChange={() => setVariableCreationmode("Select")}
                  checked={variablCreationmode === "Select" ? true : false}
                />
                <label>Select</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="variable"
                  onChange={() => setVariableCreationmode("Color")}
                  checked={variablCreationmode === "Color" ? true : false}
                />
                <label>Color</label>
              </div>
            </div>
          </div>
          {/* <div className="Attributename">
            <p>Attribute Values</p>
            <input type="text"  value={attributeValues}
              onChange={(e) => setAttributeValues(e.target.value)}/>
          </div> */}
          <div className="detailsbtn">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item
                className="detailslink"
                onClick={() => setEvents("Pricing")}
              >
                <Nav.Link href="">Pricing</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="GeneralInformation">
            {events === "Pricing" && isEdit === false && (
              <AddValues
                variablCreationmode={variablCreationmode}
                setVariableCreationmode={setVariableCreationmode}
                attributeValues={attributeValues}
                setAttributeValues={setAttributeValues}
                attributeColor={attributeColor}
                setAttributeColor={setAttributeColor}
              />
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddSalesAttribute;
