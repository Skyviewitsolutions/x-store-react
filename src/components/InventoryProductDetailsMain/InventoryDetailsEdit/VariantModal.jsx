import React, { useEffect, useState } from "react";
import "./variantsModel.css";
import { Modal } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "react-toastify";


const VariantModal = (props) => {

  const {
    showModal,
    setShowModal,
    setSalesPrice,
    varientsDetails,
    setVarientsDetails,
    GetAllAttribute,
    attributeName,
    setAttributeName,
    attributeVal,
    setAttributeVal,
    allAttribute,
    allAttributeValue,
    getAttributeValues,
    attributeId ,
    setAttributeId ,
    attributeValId ,
    setAttributeValId
  } = props;

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const handleSelectedAttribute = (e) => {
    const name = e.target.value;

    var id = allAttribute.filter((itm,ind) =>{
      return itm.ATTRIBUTE_NAME === name;
    })
    var id = id[0].ID;
   
    getAttributeValues(id);
    setAttributeName(name);
    
  };

  const addVarientsUrl = endpoints.products.ProductAddVarients;

  const save = () => {
    const formData = new FormData();
    formData.append("SalesAttribute_ID", attributeName);
    formData.append("SalesAttributeValue_ID", attributeVal);
    formData.append("Price", setSalesPrice);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(addVarientsUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          toast(res.data.message, { type: "success" });
          GetAllAttribute();
          setShowModal(false);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "eroor");
      });
    const data = {
      attributeName: attributeName,
      attributeVal: attributeVal,
    };
    setVarientsDetails((item) => {
      return [...item, data];
    });
  };


  const handleSelectedAttributeVal = (e) =>{
    const value = e.target.value;
    setAttributeVal(value)
    
    var id = allAttributeValue.filter((itm,ind) =>{
      return itm.VARIANTS_VALUE == value
    })

    id = id[0].VARIANTS_ID;
    setAttributeValId(id)
  }

console.log(attributeVal , "attribute Val here");

  return (
    <>
      <Modal show={showModal} size="lg">
        <div className="purchase_main">
          <div className="purchase_con varCont">
            <div className="varBox">
              <h6>Attribute</h6>
              <select
                name=""
                id=""
                value={attributeName}
                onChange={(e) => handleSelectedAttribute(e)}
              >
                {allAttribute.map((itm, ind) => {
                  return (
                    <>
                      <option value={itm.ATTRIBUTE_NAME} key={ind}>
                        {itm.ATTRIBUTE_NAME}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="varBox">
              <h6>Value</h6>
              <select
                value={attributeVal}
                onChange={(e) => handleSelectedAttributeVal(e)}
              >
                <option value=""></option>
                {allAttributeValue.map((itm, ind) => {
                  return (
                    <>
                      <option value={itm.ATTRIBUTE_VALUE}>
                        {itm.ATTRIBUTE_VALUE}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>

            <div className="bar_btn">
              <button className="var_btns" onClick={save}>
                Save
              </button>
            </div>
            <div onClick={() => setShowModal(false)}>
              <MdOutlineCancel size="25px" className="Acccuticons" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VariantModal;
