import React, { useState } from "react";
import "./ProductDeatils.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import PrintProductBarcode from "../../Screens/InventoryScreen/AddAccount/PrintProductBarcode/PrintProductBarcode";

const ProductDetailsHeader = (props) => {
  
  const [showBarcode, setShowBarcode] = useState(false);

  const { productId } = props;

  const navigate = useNavigate();
  const RedirectToProduct = () => {
    navigate("/InventoryProducts");
  };
  const RedirectToEmpty = () => {
    navigate("/Empty");
  };
  const { isEdit, setIsEdit, save, name } = props;
  console.log(isEdit, "isEdit");

  return (
    <div className="DetailsMainheader">
      <div className="Detaialsheader">
        <div className="detailsText">
          <p>Products{name && `/${name}`}</p>
          <div className="detailsbutton">
            {isEdit === false && (
              <button className="btn2" onClick={RedirectToProduct}>
                Cancel
              </button>
            )}
            {isEdit === true && (
              <button className="btn2" onClick={RedirectToProduct}>
                Cancel
              </button>
            )}
               {isEdit === false && (
              <button className="btn1" onClick={() => setIsEdit(true)}>
                Edit
              </button>
            )}
            {isEdit === true && (
              <button className="btn1" onClick={save}>
                Save
              </button>
            )}
          </div>
        </div>
        <div className="deatailsdropdown">
          {isEdit === false && (
            <div className="detailsIcons" onClick={() => setShowBarcode(true)}>
              <p>Print</p>
              <MdArrowDropDown
                size="20px"
                style={{ marginTop: "4px", color: "#666666" }}
              />
            </div>
          )}
          {/* <div className="detailsIcons">
                        <p>Action</p>
                        <MdArrowDropDown size="20px" style={{ marginTop: "4px", color: "#666666" }} />
                    </div> */}
        </div>
        {/* <div className="detailsArrow">
                    <p>1 / 80</p>
                    <IoIosArrowBack size="25px" style={{ color: "#666666", marginBottom: "15px" }} />
                    <IoIosArrowForward size="25px" style={{ color: "#666666", marginBottom: "15px", fontWeight: "bold", marginLeft: "10px" }} />
                </div> */}
      </div>
      {/* <div className="detailsheader2">
                <button className='btn3'>Update Quantity</button>
                <button className='btn3'>Replenish</button>
            </div> */}
      <PrintProductBarcode
        showBarcode={showBarcode}
        setShowBarcode={setShowBarcode}
        productId={productId}
      />
    </div>
  );
};

export default ProductDetailsHeader;
