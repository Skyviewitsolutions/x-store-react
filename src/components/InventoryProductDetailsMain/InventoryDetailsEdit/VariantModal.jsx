import React, { useEffect, useState } from "react";
import "./variantsModel.css";
import { Modal } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { MdOutlineCancel } from "react-icons/md";

const VariantModal = (props) => {
  const { showModal, setShowModal } = props;
  const [allAttribute, setAllAttribute] = useState([]);
  const [allAttributeValue, setAllAttributeValue] = useState([]);
  const [attributeValue, setAttributeValue] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [selectedAttributeValue , setSelectedAttributeValue] = useState([])

  const options = [
    { name: "VAT Goods Purchases-STD (Purchases)", id: 1 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 3 },
    { name: "Sales VAT-STD (Sales)", id: 4 },
    { name: "Sales VAT-Zero Rated (Sales)", id: 5 },
  ];

  const allAttributeUrl = endpoints.attribute.allsalesattribute;

  const getAllAttribute = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allAttributeUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          const val = res.data.data;
          setAllAttribute(val);
        } else if (res.data.status === false) {
          // toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error here");
      });
  };

  const getAttributeValues = () => {

    setAttributeValue([])
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios
      .post(attributeValueUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          const val = res.data.data;
          console.log(val , "selected value here")
          setAllAttributeValue(val);

          for(var i = 0 ; i < val.length ; i++){
            const dta = {
              name : val[i].value,
              id : val[i].A_ID ,
              color : val[i].COLOR
            }

            setAllAttributeValue((itm) =>{
              return [...itm , dta]
            })
          }
        }
      })
      .catch((err) => {
        console.log(err, "this is the error ");
      });
  };

  useEffect(() => {
    getAllAttribute();
    getAttributeValues();
  }, []);

  // writing code  for getting the values part here;

  const attributeValueUrl = endpoints.attribute.allValue;

  const handleSelectedAttribute = (e) => {
    const val = e.target.value;
    setSelectedAttribute(val);

    const filterAttributeValue = allAttributeValue.filter((itm, ind) => {
      return itm.id == val;
    });

    setAttributeValue(filterAttributeValue);
  };

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList , "selectedList")
  };

  const onRemove = (selectedList, removedItem) => {

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
                value={selectedAttribute}
                onChange={(e) => handleSelectedAttribute(e)}
              >
                {allAttribute.map((itm, ind) => {
                  return (
                    <>
                      <option value={itm.ID} key={ind}>
                        {itm.ATTRIBUTE_NAME}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="varBox">
              <h6>Value</h6>
              <Multiselect
                className="AddChartAccmultiselect"
                options={attributeValue}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue="name"
              />
            </div>

            <div className="bar_btn">
              <button className="var_btns">Save</button>
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
