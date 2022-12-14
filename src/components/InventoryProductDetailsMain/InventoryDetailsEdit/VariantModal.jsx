import React, { useEffect, useState } from "react";
import "./variantsModel.css";
import { Modal } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { MdOutlineCancel } from "react-icons/md";

const VariantModal = (props) => {

  const { showModal, setShowModal } = props;
  const [allAttribute , setAllAttribute] = useState([])
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const options = [
    { name: "VAT Goods Purchases-STD (Purchases)", id: 1 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 3 },
    { name: "Sales VAT-STD (Sales)", id: 4 },
    { name: "Sales VAT-Zero Rated (Sales)", id: 5 },
  ];
 
  const onSelect1 = (selectedList, selectedItem) => {
  };

  const onRemove1 = (selectedList, removedItem) => {
  };
  
  const allattValUrl = endpoints.attribute.allValue;

  const getAllAttribute = () =>{

    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allattValUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          console(res.data.data);
        } else if (res.data.status === false) {
          // toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error here");
      });
  }


  useEffect(() =>{
    getAllAttribute()
  },[])
 
  return (
    <>
      <Modal show={showModal} size="lg">
        <div className="purchase_main">
          <div className="purchase_con varCont">
            <div className="varBox">
                <h6>Attribute</h6>
               <select name="" id="">
                <option value="">shape</option>
                <option value="">size</option>
               </select>
            </div>
            <div className="varBox">
                <h6>Value</h6>
                <Multiselect
                className="AddChartAccmultiselect"
                options={options} // Options to display in the dropdown
                // selectedValues={} // Preselected value to persist in dropdown
                onSelect={onSelect1} // Function will trigger on select event
                onRemove={onRemove1} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
               
         <div className="bar_btn">
                    <button className='barcode_btns'>Save</button>
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
