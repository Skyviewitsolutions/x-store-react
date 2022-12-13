import React from "react";
import "./Variants.css";
import { MdArrowDropDown } from "react-icons/md";

const Variants = () => {
  return (
    <div className="VariantsContainer">
      <div className="Variants">
        <div className="VariantsContent1">
          <p>Attributes</p>
          <MdArrowDropDown
            size="25px"
            style={{ marginTop: "5px", color: "#212529" }}
          />
        </div>
        <div className="Variantscontent2">
          <p>Values</p>
        </div>
      </div>
      <div className="Variants2"></div>
    </div>
  );
};

export default Variants;
