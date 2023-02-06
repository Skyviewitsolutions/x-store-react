import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from "../../../services/endpoints";
import "./Barcode.css";

const Barcode = (props) => {

  const navigate = useNavigate();

  const {
    modalShow,
    setModalShow,
    barcodeDetails,
    setBarcodeDetails,
    getProBarcode,
    setUnitOfMeasurement,
    unitOfMeasurement,
    uom,
    setUom,
    barcode,
    setBarcode,
    barcodeDes,
    setBarcodeDes,
    updateBarcode,
    setUpdateBarcode,
    updateProductBarcode,
  } = props;


  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const addBarcode = endpoints.products.ProductBarcodeAdd;

  const [allUom, setAllUom] = useState([]);
  const getUom = endpoints.UOM.allUOM;

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(getUom, formData)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setAllUom(res.data.data);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
        toast("something went wrong", { type: "error" });
      });
  }, []);



  const save = () => {
    if (barcode === "") {
      toast("Barcode is required !", { type: "warning" });
    } else if (barcodeDes === "") {
      toast("Barcode Description is required !", { type: "warning" });
    } else if (uom === "") {
      toast("Units of Measure is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      formData.append("Barcode", barcode);
      formData.append("Barcode_Discription", barcodeDes);
      formData.append("UOM_ID", uom);
      axios
        .post(addBarcode, formData)
        .then((res) => {
          console.log(res, "response barcode");
          if (res.data.status === true) {
            setUom(res.data.code);
            toast(res.data.message, { type: "success" });
            setBarcode("")
            setBarcodeDes("")
             setUom("")
            // window.location.reload()
            setModalShow(false);
            getProBarcode();
          } else if (res.data.status === false) {
            if (res.data.code === 3) {
              toast("Session expired , Please re-login", { type: "warning" });
              navigate("/");
            } else{
              toast(res.data.message, { type: "error" });
            }
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }
    const data = {
      barcode: barcode,
      barcodeDes: barcodeDes,
      uom: uom,
    };
    setBarcodeDetails((item) => {
      return [...item, data];
    });
  };

  return (
    <div>
      <Modal show={modalShow} size="lg">
        <div className="barcode_maincon">
          <div className="barcode_container">
            <h3>Product Barcode</h3>
            <div className="barcode_contents">
              <p>Barcode</p>
              <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} maxlength="18"/>
            </div>
            <div className="barcode_contents">
              <p>Barcode Description</p>
              <input type="text" value={barcodeDes} onChange={(e) => setBarcodeDes(e.target.value)}/>
            </div>
            <div className="barcode_contents">
              <p>UOM</p>
              <select value={uom} onChange={(e) => setUom(e.target.value)}>
                <option>selected any one</option>
                {allUom.map((itm, index) => {
                  return (
                    <>
                      {itm.DELETE_STATUS != "X" && (
                        <>
                          <option value={itm.ID}>{itm.UNIT_OF_MEASUREMENT}</option>
                        </>
                      )}
                    </>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="bar_btn">
            <button className="barcode_btns" onClick={updateBarcode ? updateProductBarcode :save}>{updateBarcode ? "update" : "save"}</button>
          </div>
          <div onClick={() => setModalShow(false)}>
            <MdOutlineCancel size="25px" className="Acccuticons" />
          </div>
        </div>
      </Modal>
      <ToastContainer/>
    </div>
  );
};

export default Barcode;
