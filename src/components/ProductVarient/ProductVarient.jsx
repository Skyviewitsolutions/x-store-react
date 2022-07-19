import React from "react";
import Navebar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./ProductVarient.css";
const ProductVarient = () => {
  return (
    <div>
      <Navebar />
      <div className="container-fluid VarientProduct">
        <div className="main1">
          <div className="VarientSidebar">
            <Sidebar />
          </div>
          <div className="ProductTab">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVarient;
