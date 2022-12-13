import React from "react";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Modal } from "react-bootstrap";
import "./AttributeValues.css";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const AttributeValues = (props) => {

  const { modalShow, setModalShow, attributeDetails, setAttributeDetails , getAddLine } = props;

  const [attributeValue, setAttributeValue] = useState("");
  const [attributeColor, setAttributeColor] = useState("");
  const addValueUrl = endpoints.attribute.addValue;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const addValue = () => {
    
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("Attribute_Color", attributeColor);
    formData.append("Attribute_Values", attributeValue);
    axios
      .post(addValueUrl, formData)
      .then((res) => {
        console.log(res , "response here")
        if (res.data.status === true) {
          toast("Values Added Successfully", { type: "success" });
          setModalShow(false);
          getAddLine();
        } else if (res.data.status === false) {
          // toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error here");
      });
    const data = {
      attributeColor: attributeColor,
      attributeValue: attributeValue,
    };
    setAttributeDetails((item) => {
      return [...item, data];
    });
  };

  return (
    <Modal show={modalShow} size="lg">
      <div className="attribute_valuesmain">
        <div className="att_value_con">
          <div className="att_contents">
            <p>Attribute Value</p>
            <input
              type="text"
              value={attributeValue}
              onChange={(e) => setAttributeValue(e.target.value)}
            />
          </div>
          <div className="color_pickers">
            <p>Attribute Color</p>
            <input
              type="color"
              value={attributeColor}
              onChange={(e) => setAttributeColor(e.target.value)}
            />
          </div>
        </div>
        <div className="pu_btn">
          <button className="pur_btn" onClick={() => addValue()}>
            Save
          </button>
        </div>
        <div onClick={() => setModalShow(false)}>
          <MdOutlineCancel size="25px" className="Acccuticons" />
        </div>
      </div>
      <ToastContainer />
    </Modal>
  );
};

export default AttributeValues;
