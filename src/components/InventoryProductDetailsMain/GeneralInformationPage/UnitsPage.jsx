import React, { useEffect, useState } from "react";
import Navebar from "../../Navbar/Navbar";
import "./UnitPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UnitPage = () => {
  
  const AddUOMUrl = endpoints.UOM.addUOM;
  const UomCateURL = endpoints.products.productUnitAll;
  const [unitName, setUnitName] = useState("");
  const [unitCategory, setUnitcategory] = useState("");
  const [unitType, setUnitType] = useState("");
  const [uomcate, setUomCate] = useState([]);
  const [rounding, setRounding] = useState("");
  const [update, setUpdate] = useState();
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const formData = new FormData();
  formData.append("UnitName", unitName);
  formData.append("UnitCategory", unitCategory);
  formData.append("UnitType", unitType);
  formData.append("Rounding_Precisio", rounding);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);

  const save = () => {
    if (unitName === "") {
      toast("Unit Name is Required!", { type: "warning" });
    } else if (unitCategory === "") {
      toast("Unit Category is Required!", { type: "warning" });
    } else if (unitType === "") {
      toast("Unit type is Required!", { type: "warning" });
    } else if (rounding === "") {
      toast("Rounding Precisio is Required!,", { type: "warning" });
    } else {
      axios
        .post(AddUOMUrl, formData)
        .then((res) => {
          console.log(res, "UOMResponse");
          if (res.data.status == true) {
            toast("UOM Added Successfully!", { type: "success" });
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
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios
      .post(UomCateURL, formData)
      .then((res) => {
        console.log(res, "UOmCateResponse");
        if (res.data.status == true) {
          setUomCate(res.data.data);
        } else if (res.data.status == false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const location = useLocation();
  const selectedData = location.state;

  const UomUpdateUrl = endpoints.UOM.updateUOM;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setUnitName(selectedData.UNITNAME);
      setUnitType(selectedData.UNITTYPE);
      setUnitcategory(selectedData.UNITCATEGORY);
      setRounding(selectedData.ROUNDING_PRECISIO);
    }
  }, [selectedData]);

  const updateData = () => {
    if (unitName === "") {
      toast("Unit Name is Required!", { type: "warning" });
    } else if (unitCategory === "") {
      toast("Unit Category is Required!", { type: "warning" });
    } else if (unitType === "") {
      toast("Unit type is Require!", { type: "warning" });
    } else {
      const formData = new FormData();

      formData.append("id", selectedData.ID);
      formData.append("UnitName", unitName);
      formData.append("UnitType", unitType);
      formData.append("UnitCategory", unitCategory);
      formData.append("Rounding_Precisio", rounding);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);

      axios
        .post(UomUpdateUrl, formData)
        .then((res) => {
          console.log(res, "response");
          if (res.data.status == true) {
            toast("UOM Updated Successfully!", { type: "success" });
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
      <Navebar
        showBelowMenu={true}
        save={update === true ? updateData : save}
        title="Units of Measure "
      />
      <div className="UnitContainer">
        <div className="unitpart1">
          <div className="unitcontent">
            <p>Unit of Measure</p>
            <input
              type="text"
              onChange={(e) => setUnitName(e.target.value)}
              value={unitName}
            />
          </div>
          <div className="unitcontent">
            <p>Category</p>
            <select
              onChange={(e) => setUnitcategory(e.target.value)}
              value={unitCategory}
            >
              <option></option>
              {uomcate.map((item, index) => {
                return (
                  <>
                    <option key={index} value={item.UNIT_NAME}>
                      {item.UNIT_NAME}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="unitcontent">
            <p>Type</p>
            <select
              onChange={(e) => setUnitType(e.target.value)}
              value={unitType}
            >
              <option value=""></option>
              <option value="Bigger than the reference Unit of Measure">
                Bigger than the reference Unit of Measure
              </option>
              <option value="Reference Unit of Measure for this category">
                Reference Unit of Measure for this category
              </option>
              <option value="Smaller than the reference Unit of Measure">
                Smaller than the reference Unit of Measure
              </option>
            </select>
          </div>
          <div className="unitcontent">
            <p>Rounding Precisio</p>
            <input
              type="text"
              placeholder="0.00010"
              value={rounding}
              onChange={(e) => setRounding(e.target.value)}
            />
          </div>
          <div className="unitcheckbox">
            {/* <p>Active</p> */}
            {/* <input type="checkbox" /> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UnitPage;
