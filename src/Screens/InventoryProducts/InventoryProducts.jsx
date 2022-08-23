import React, { useEffect, useState } from "react";
import "./Products.css";
import InventoryProductsCard from "../../components/InventoryProductsCard/InventoryProductsCard";
import Navebar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InventoryProducts = () => {
  const [product, setProduct] = useState([]);
  const url = "https://xstore.skyviewads.com/ProductManagement/ProductManagement/GetAllProduct";

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(url)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setProduct(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const handleCreatePage = () => {
    navigate("/AddProduct");
  };
  return (
    <>
      <div className="ProductsMainContainer">
        <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage} />
        <div className="ProductContainer">
          <div className="ProductSidebar">
            <Sidebar />
          </div>
          <div className="Product33Card">
            <div className="productcardcont">
              {product.map((item, index) => {
                return (
                  <>
                    <InventoryProductsCard data={item} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default InventoryProducts;
