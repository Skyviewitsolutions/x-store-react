import React, { useEffect, useState } from "react";
import "./variantsModel.css";
import { Modal } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { MdOutlineCancel } from "react-icons/md";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";


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
    updateVarients,
    attributeId,
    setAttributeId,
    salesPrice,
    updateSelectedVarients,
    attributeValId,
    setAttributeValId,
  } = props;

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const handleSelectedAttribute = (e) => {

    const name = e.target.value;

    var id = allAttribute.filter((itm, ind) => {
      return itm.ATTRIBUTE_NAME === name;
    });
    var id = id[0].ID;

    getAttributeValues(id);
    setAttributeName(name);
    setAttributeId(id);
  };

  const addVarientsUrl = endpoints.products.ProductAddVarients;

  const save = () => {

    const formData = new FormData();
    formData.append("SalesAttribute_ID", attributeId);
    formData.append("SalesAttributeValue_ID", attributeValId);
    formData.append("Price", salesPrice);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(addVarientsUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          toast(res.data.message, { type: "success" });
          setAttributeId("")
          setAttributeValId("")
          setSalesPrice("")
          // window.location.reload()
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

  const handleSelectedAttributeVal = (e) => {
    
    const value = e.target.value;
    setAttributeVal(value);

    var id = allAttributeValue.filter((itm, ind) => {
      return itm.ATTRIBUTE_VALUE == value;
    });

    console.log(id ,"idd")

    id = id[0].ID;
    setAttributeValId(id);
    setAttributeVal(value);
  };

  

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
                <option>select any one</option>
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
               <option>select any one</option>
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
              <button
                className="var_btns"
                onClick={updateVarients ? updateSelectedVarients : save}
              >
                {updateVarients ? "Update" : "Save"}
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
