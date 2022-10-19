import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navebar from "../../../../components/Navbar/Navbar";
import { endpoints } from "../../../../services/endpoints";
import "./AddOperationTypes.css";

const AddOperationTypes = () => {
  const warehouseurl = endpoints.wareHouse.allWarehouse;
  const locationUrl = endpoints.location.allLocation;
  const [warehouse, setWareHouse] = useState([]);
  const [location, setLocation] = useState([]);

  const AddOperationTypeURL = endpoints.OpertionType.addOperationType;

  const [operationType, setOperationType] = useState("");
  const [typeofoperation, setTypeOfOperation] = useState("");
  const [code, setCode] = useState("");
  const [detailsoperation, setDetailsoperation] = useState("");
  const [sourcelocation, setSourceLocation] = useState("");
  const [destination , setDestination] = useState("");
  const [operationWarehouse, setOperationwarehouse] = useState("");

  const [update, setUpdate] = useState();

  const formData = new FormData();
  formData.append("Operation_Type", operationType);
  formData.append("Type_Of_Operation", typeofoperation);
  formData.append("Code", code);
  formData.append("Show_Detailed_Operations", detailsoperation);
  formData.append("Warehouse", operationWarehouse);
  formData.append("Default_Source_Location", sourcelocation);
  formData.append("Default_Destination", destination);

  const save = () => {
    if (operationType === "") {
      toast("Operation Type is Required !", { type: "warning" });
    } else if (typeofoperation === "") {
      toast("Type of Operation is Required!", { type: "warning" });
    } else if (code === "") {
      toast("Code is Required!", { type: "warning" });
    } else if (detailsoperation === "") {
      toast("Details id Required !", { type: "warning" });
    } else if (operationWarehouse === "") {
      toast("Warehouse is required !", { type: "warning" });
    } else if (sourcelocation === "") {
      toast("Source Location is Required!", { type: "warning" });
    } else if(destination === ""){
      toast("Destination Location is Required!", { type: "warning" });
    }else {
      axios
        .post(AddOperationTypeURL, formData)
        .then((res) => {
          console.log(res, "response");
          if (res.data.status == true) {
            toast("Operation Type Added successfully", { type: "Sucess" });
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
    axios
      .post(warehouseurl)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setWareHouse(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
    axios
      .post(locationUrl)
      .then((res) => {
        console.log(res, "locationres");
        if (res.data.status === true) {
          setLocation(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const locationn = useLocation();
  const selectedData = locationn.state;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setOperationType(selectedData.OPERATION_NAME);
      setTypeOfOperation(selectedData.OPERATION_TYPE);
      setCode(selectedData.OPERATION_CODE);
      setDetailsoperation(selectedData.SHOW_DETAILED);
      setSourceLocation(selectedData.DEFAULT_SOURCE_LOCATION);
      setDestination(selectedData.DEFAULT_DESTINATION);
      setOperationwarehouse(selectedData.WAREHOUSE_INFO);

    }
  }, [selectedData]);

  const operationUpdateUrl = endpoints.OpertionType.updateOperationType;

  const updateData = () => {
    if (operationType === "") {
      toast("Operation Type is Required !", { type: "warning" });
    } else if (typeofoperation === "") {
      toast("Type of Operation is Required!", { type: "warning" });
    } else if (code === "") {
      toast("Code is Required!", { type: "warning" });
    } else if (detailsoperation === "") {
      toast("Details id Required !", { type: "warning" });
    } else if (operationWarehouse === "") {
      toast("Warehouse is required !", { type: "warning" });
    } else if (sourcelocation === "") {
      toast("Source Location is Required!", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Id", selectedData.OPERATION_ID);
      formData.append("Operation_Type", operationType);
      formData.append("Type_Of_Operation", typeofoperation);
      formData.append("Code", code);
      formData.append("Show_Detailed_Operations", detailsoperation);
      formData.append("Warehouse", operationWarehouse);
      formData.append("Default_Source_Location", sourcelocation);
      formData.append("Default_Destination", destination);
      
      axios
        .post(operationUpdateUrl, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Opertaion Type Updated Successfully!", { type: "success" });
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
    <>
      <Navebar
        showBelowMenu={true}
        title="Operation Types"
        save={update === true ? updateData : save}
      />
      <div className="AddOperatintypeContainer">
        <div className="Addoperationcontent">
          <div className="operationcon1">
            <div className="operation">
              <p>Operation Name</p>
              <input
                type="text"
                value={operationType}
                onChange={(e) => setOperationType(e.target.value)}
              />
            </div>
            <div className="operation">
              <p>Code</p>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="operation">
              <p>WareHouse</p>
              <select
                value={operationWarehouse}
                onChange={(e) => setOperationwarehouse(e.target.value)}
              >
                <option value=""></option>
                {warehouse.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.WAREHOUSE_NAME}>
                        {item.WAREHOUSE_NAME}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="operation">
              <p>Barcode</p>
              <input
                type="text"
              />
            </div>
          </div>
          <div className="type">
            <div className="operation">
              <p>Opeation Type</p>
              <select
                value={typeofoperation}
                onChange={(e) => setTypeOfOperation(e.target.value)}
              >
                <option></option>
                <option>Receipt</option>
                <option>Delivery</option>
                <option>Internal Transfer</option>
              </select>
            </div>
            <div className="show">
              <p>Show Detailed Operations</p>
              <input
                type="checkbox"
                checked={detailsoperation}
                onChange={(e) => setDetailsoperation(!detailsoperation)}
              />
            </div>
           
          </div>
        </div>
        <div className="location">
          <h3>Locations</h3>
          <div className="operation">
              <p>Default Source Location</p>
              <select
                value={sourcelocation}
                onChange={(e) => setSourceLocation(e.target.value)}
              >
                <option></option>
                {location.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.LOCATION_NAME}>
                        {item.LOCATION_NAME}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
          <div className="operation">
              <p>Default Destination Location</p>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option></option>
                {location.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.LOCATION_NAME}>
                        {item.LOCATION_NAME}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default AddOperationTypes;
