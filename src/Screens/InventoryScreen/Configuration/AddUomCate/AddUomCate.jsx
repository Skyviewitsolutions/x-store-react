import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navebar from "../../../../components/Navbar/Navbar";
import { endpoints } from "../../../../services/endpoints";
import axios from "axios";
import "./AddUomCate.css";
import { useLocation, useNavigate } from "react-router-dom";

const AddUomCate = () => {

  const AddUomCateUrl = endpoints.UomCategory.addUomCate;
  const navigate = useNavigate();
  const [uomCategory, setUomCategory] = useState("");
  const [update, setUpdate] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const save = () => {

    const formData = new FormData();
    formData.append("Unit_Name" , uomCategory)
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    if (uomCategory === "") {
      toast("Uom Category is Required!", { type: "warning" });
    } else {
      axios
        .post(AddUomCateUrl, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Uom Category Added Successfully!", { type: "success" });
            setTimeout(() => {
              navigate('/UomCategories')
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

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData, "selectedData here");

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setUomCategory(selectedData.UOM_CATEGORY);
    }
  }, [selectedData]);

  const UomCateupdateUrl = endpoints.UomCategory.updateUomCate;

  const updateData = () => {
    if (uomCategory === "") {
      toast("Uom Category is Required!", { type: "warning" });
    } else {
      const formData = new FormData();

      formData.append("ID", selectedData.ID);
      formData.append("Unit_Name", uomCategory);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      
      axios.post(UomCateupdateUrl, formData).then((res) => {
        if (res.data.status == true) {
          toast("Uom Category Updated Successfully!", { type: "success" });
          setTimeout(() => {
            navigate('/UomCategories')
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
      });
    }
  };
  return (
    <div>
      <Navebar
        showBelowMenu={true}
        save={update === true ? updateData : save}
        title="UOM Category"
        showCanelBtn={true}
      />
      <div className="AddUomCateCon">
        <div className="AddUomCateContent">
          <p>UOM Category</p>
          <input
            type="text"
            value={uomCategory}
            onChange={(e) => setUomCategory(e.target.value)}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddUomCate;
