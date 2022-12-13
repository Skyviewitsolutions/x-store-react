import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../../services/endpoints";
import "./AddValues.css";

const AddValues = (props) => {
  const {
    variablCreationmode,
    setVariableCreationmode,
    attributeValues,
    setAttributeValues,
    attributeColor,
    setAttributeColor,
  } = props;

  const [allAddLine, setAllAddLine] = useState([]);
  const singleAddLineUrl = endpoints.attribute.allValue;

  const addValueUrl = endpoints.attribute.addValue;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const addValue = () => {
    
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("Attribute_Color", attributeColor);
    formData.append("Attribute_Values", attributeValues);
    axios
      .post(addValueUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          toast("Values Added Successfully", { type: "success" });
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error here");
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
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error here");
      });
  };

  useEffect(() => {
    getAddLine();
  }, []);

  return (
    <div>
      <div className="value_con">
        <table>
          <tr className="tbl_value">
            <th>Value</th>
            <th>Color</th>
          </tr>
          <tr>
            {allAddLine.map((itm, ind) => {
              return (
                <>
                  <td>{itm.VALUE}</td>
                  <td>{itm.COLOR}</td>
                </>
              );
            })}
          </tr>
        </table>

        {variablCreationmode === "Radio" && (
          <>
            <table>
              <tr className="tbl_value">
                <th>Value</th>
                <th>Color</th>
              </tr>
              <tr style={{ width: "50%" }}>
                <td className="in_text">
                  <input
                    type="text"
                    value={attributeValues}
                    onChange={(e) => setAttributeValues(e.target.value)}
                  />
                </td>
                <td>
                  <MdDelete
                    size={23}
                    color="#cccc"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            </table>
          </>
        )}
        {variablCreationmode === "Select" && (
          <>
            <table>
              <tr className="tbl_value">
                <th>Value</th>
                <th>Color</th>
              </tr>
              <tr style={{ width: "50%" }}>
                <td className="in_text">
                  <input
                    type="text"
                    value={attributeValues}
                    onChange={(e) => setAttributeValues(e.target.value)}
                  />
                </td>

                <td>
                  <MdDelete
                    size={23}
                    color="#cccc"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            </table>
          </>
        )}
        {variablCreationmode === "Color" && (
          <>
            <table>
              <tr className="tbl_value">
                <th>Value</th>
                <th>Color</th>
              </tr>
              <tr style={{ width: "50%" }}>
                <td className="in_text">
                  <input
                    type="text"
                    value={attributeValues}
                    onChange={(e) => setAttributeValues(e.target.value)}
                  />
                </td>
                <td>
                  <div className="color_picker">
                    <input
                      type="color"
                      value={attributeColor}
                      onChange={(e) => setAttributeColor(e.target.value)}
                    />
                  </div>
                </td>
                <td>
                  <MdDelete
                    size={23}
                    color="#cccc"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            </table>
          </>
        )}
        <button className="btn_add" onClick={addValue}>
          Add Line
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddValues;
