import React, { useEffect, useState } from "react";
import Navebar from "../../Navbar/Navbar";
import "./UnitPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const UnitPage = () => {

  const navigate = useNavigate()
  
  const AddUOMUrl = endpoints.UOM.addUOM;
  const UomCateURL = endpoints.products.productUnitAll;
  const [unitName, setUnitName] = useState("");
  const [unitCategory, setUnitcategory] = useState("");
  const [unitType, setUnitType] = useState("");
  const [uomcate, setUomCate] = useState([]);
  const [value, setValue] = useState("");
  const [update, setUpdate] = useState();
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const formData = new FormData();
  formData.append("UnitName", unitName);
  formData.append("UnitCategoryID", unitCategory);
  formData.append("UnitType", unitType);
  formData.append("Value", value);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);

  const save = () => {
    if (unitName === "") {
      toast("Unit  is Required!", { type: "warning" });
    } else if (unitCategory === "") {
      toast("Unit Category is Required!", { type: "warning" });
    } else if (unitType === "") {
      toast("Unit type is Required!", { type: "warning" });
    } else if (value === "") {
      toast("Rounding Precisio is Required!,", { type: "warning" });
    } else {
      axios
        .post(AddUOMUrl, formData)
        .then((res) => {
          console.log(res, "UOMResponse");
          if (res.data.status == true) {
            toast("UOM Added Successfully!", { type: "success" });
            setTimeout(() => {
              navigate('/Uom')
            }, 1000);
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
          var val = res.data.data;
          const filterUom = val.filter((itm,ind) =>{
            return itm.DELETE_STATUS != "X"
          })
          setUomCate(filterUom);
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
  console.log(selectedData,"selectedData here")

  const UomUpdateUrl = endpoints.UOM.updateUOM;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setUnitName(selectedData.UNIT_OF_MEASUREMENT);
      setUnitType(selectedData.UOM_TYPE);
      setUnitcategory(selectedData.UOM_CATEGORY_ID);
      setValue(selectedData.UOM_VALUE);
    }
  }, [selectedData]);

  const updateData = () => {
    if (unitName === "") {
      toast("Unit is Required!", { type: "warning" });
    } else if (unitCategory === "") {
      toast("Unit Category is Required!", { type: "warning" });
    } else if (unitType === "") {
      toast("Unit type is Require!", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("id", selectedData.ID);
      formData.append("UnitName", unitName);
      formData.append("UnitType", unitType);
      formData.append("UnitCategoryID", unitCategory);
      formData.append("Value", value);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);

      axios
        .post(UomUpdateUrl, formData)
        .then((res) => {
          console.log(res, "response");
          if (res.data.status == true) {
            toast("UOM Updated Successfully!", { type: "success" });
            setTimeout(() => {
              navigate('/Uom')
            }, 1000);
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
        showCanelBtn={true}
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
             <option value="">Choose any one</option>
              {uomcate.map((item, index) => {
                return (
                  <>
                    <option key={index} value={item.ID}>
                      {item.UOM_CATEGORY}
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
              <option >Choose any one</option>
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
            <p>Value</p>
            <input
              type="text"
              placeholder="0.00010"
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
