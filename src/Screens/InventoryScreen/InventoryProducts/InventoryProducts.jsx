import React, { useEffect, useState } from "react";
import "./Products.css";
import InventoryProductsCard from "../../../components/InventoryProductsCard/InventoryProductsCard";
import Navebar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../services/endpoints";


const InventoryProducts = () => {
  const [product, setProduct] = useState([]);
  const url = endpoints.products.allProduct;

  const navigate = useNavigate();
 const [deleteRef, setDeleteRef] = useState(false);

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
  }, [deleteRef]);
  const handleCreatePage = () => {
    navigate("/AddProduct");
  };
  return (
    <>
      <div className="ProductsMainContainer">
        <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Inventory Products"/>
        <div className="ProductContainer">
          <div className="ProductSidebar">
            <Sidebar />
          </div>
          <div className="Product33Card">
            <div className="productcardcont">
              {product.map((item, index) => {
                return (
                  <>
                    <InventoryProductsCard data={item} setDeleteRef={setDeleteRef} deleteRef={deleteRef}/>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default InventoryProducts;
