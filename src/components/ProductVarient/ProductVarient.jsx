import React from "react";
import Navebar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductVarient.css";
import ProductVarientTab from "./ProductVarientTab";

const ProductVarient = () => {
  return (
    <div>
      <Navebar />
      <div className="container-fluid PROVAR">
        <div className="PVMain">
          <div className="pvmleft">
            <Sidebar />
          </div>
          <div className="pvmRight">
         
            <ProductVarientTab/>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProductVarient;
