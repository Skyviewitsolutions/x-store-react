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
  const [allProd, setAllProd] = useState([]);
  const url = endpoints.products.allProduct;
  const [productCategory, setProductCategory] = useState("all");

  const navigate = useNavigate();
  const [deleteRef, setDeleteRef] = useState(false);

  const getProduct = () => {
    axios
      .post(url)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setAllProd(res.data.data);
          setProduct(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getProduct();
  }, [deleteRef]);

  const handleCreatePage = () => {
    navigate("/AddProduct");
  };

  useEffect(() => {
    if (productCategory === "all") {
      getProduct();
    } else {
      const filterProduct = allProd.filter((itm, ind) => {
        return itm.PRODUCT_CATEGORY == productCategory;
      });
      setProduct(filterProduct);
    }
  }, [productCategory]);

  return (
    <>
      <div className="ProductsMainContainer">
        <Navebar
          showBelowMenu={true}
          handleCreatePage={handleCreatePage}
          title="Products"
        />
        <div className="ProductContainer">
          <div className="ProductSidebar">
            <Sidebar
              productCategory={productCategory}
              setProductCategory={setProductCategory}
            />
          </div>
          <div className="Product33Card">
            <div className="productcardcont">
              {product.map((item, index) => {
                return (
                  <>
                    <InventoryProductsCard
                      data={item}
                      setDeleteRef={setDeleteRef}
                      deleteRef={deleteRef}
                    />
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
