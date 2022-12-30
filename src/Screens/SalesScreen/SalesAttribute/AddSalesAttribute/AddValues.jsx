import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import AttributeValues from "../../../../components/Model/SalesAttribute/AttributeValues";
import { endpoints } from "../../../../services/endpoints";
import "./AddValues.css";

const AddValues = (props) => {
  const navigate = useNavigate();

  const {
    variablCreationmode,
    setVariableCreationmode,
    attributeValues,
    setAttributeValues,
    attributeColor,
    setAttributeColor,
  } = props;

  const [allAddLine, setAllAddLine] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [attributeDetails, setAttributeDetails] = useState([]);
  const singleAddLineUrl = endpoints.attribute.allValue;

  const allValueUrl = endpoints.attribute.allValue;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const allAttributeValues = () => {

    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allValueUrl, formData)
      .then((res) => {
        console.log(res, "all vendorlist");
        if (res.data.status === true) {
          setAllAddLine(res.data.data);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            // toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
        toast("something went wrong", { type: "error" });
      });
  };

  const getAddLine = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(singleAddLineUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setAllAddLine(res.data.data);
        } else if (res.data.status === false) {
          // toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error here");
      });
  };

  useEffect(() => {
    getAddLine();
    allAttributeValues();
  }, []);

  const column = [
    { label: "Attribute Values", name: "VALUE" },
    { label: "Attribute Color", name: "COLOR" },
  ];
  const column2 = [
    { label: "Attribute Values", name: "ATTRIBUTE_VALUE" },
    { label: "Attribute Color", name: "ATTRIBUT_COLOR" },
  ];

  return (
    <div className="value_tbl">
      <CustomTable column={column} data={allAddLine} />
      <button className="btn_add" onClick={() => setModalShow(true)}>
        Add Line
      </button>
      <AttributeValues
        modalShow={modalShow}
        setModalShow={setModalShow}
        attributeDetails={attributeDetails}
        setAttributeDetails={setAttributeDetails}
        getAddLine={getAddLine}
      />
      <ToastContainer />
    </div>
  );
};

export default AddValues;
