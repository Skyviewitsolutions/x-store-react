import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import SalesNavbar from "../../SalesNavbar/SalesNavbar";
import "./AddSalesAttribute.css";

const AddSalesAttribute = () => {


  const AddAttributeUrl = endpoints.Attribute.addallattribute;
  const [attributeName, setAttributename] = useState("");
  const [variablCreationmode, setVariableCreationmode] = useState("");
  const [attributeValues, setAttributeValues] = useState("");
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
    } else if (attributeValues === "") {
      toast("Attriute Value is Required !", { type: "warning" });
    } else {
      formData.append("Attribute_Name", attributeName);
      formData.append("Variable_CreationMode", variablCreationmode);
      formData.append("Attribute_Values", attributeValues);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(addAttributeUrl, formData)
        .then((res) => {
          console.log(res, "Attributeresult");
          if (res.data.status === true) {
            toast("Attribute Added Successfully", { type: "success" });
          } else if (res.data.status === false) {
            toast(res.data.message, { ype: "error" });
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
    } else if (attributeValues === "") {
      toast("Attriute Value is Required !", { type: "warning" });
    } else {
      const formData = new FormData();

      formData.append("ID", selectedData.ID);
      formData.append("Attribute_Name", attributeName);
      formData.append("Variable_CreationMode", variablCreationmode);
      formData.append("Attribute_Values", attributeValues);
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
              <input type="text"  value={attributeName}
                onChange={(e) => setAttributename(e.target.value)}/>
            </div>
            </div>
            <div className="variable">
              <p>Variable creation mode</p>
              <div className="radio" name="variable">
                <div>
                  <input type="radio" name="variable"  onChange={() => setVariableCreationmode("Instantly")}
                    checked={variablCreationmode === "Instantly" ? true : false}/>{" "}
                  <label>Instantly</label>
                </div>
                <div>
                  <input type="radio" name="variable"  onChange={() => setVariableCreationmode("Dynamically")}
                    checked={
                      variablCreationmode === "Dynamically" ? true : false
                    }/>
                  <label>Dynamically</label>
                </div>
                <div>
                  <input type="radio" name="variable"  onChange={() => setVariableCreationmode("Never")}
                    checked={variablCreationmode === "Never" ? true : false} />
                  <label>Never</label>
                </div>
              </div>
            </div>
            <div className="Attributename">
            <p>Attribute Values</p>
            <input type="text"  value={attributeValues}
              onChange={(e) => setAttributeValues(e.target.value)}/>
          </div>
          </div>
      
          {/* <div className='AddValues'>
        <div className="AddAttributes">
        <div className="AddAttributeContent1">
            <p>Values</p>
        </div>
        </div>
        <div className="AddAtrributebox">
             <p>Add Line</p>
         
        </div>
    </div> */}
        </div>
        <ToastContainer />
      </div>
  
  );
};

export default AddSalesAttribute;
