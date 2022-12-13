import React from "react";
import "./variantsModel.css";
import { Modal } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";



const VariantModal = (props) => {

  const { showModal, setShowModal } = props;

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
               
            <button>Save</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VariantModal;
