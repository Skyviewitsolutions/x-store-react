import React, { useEffect, useState } from "react";
import "./Products.css";
import InventoryProductsCard from "../../../components/InventoryProductsCard/InventoryProductsCard";
import Navebar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../services/endpoints";
import { toast } from "react-toastify";
import { ToastContainer } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";


const InventoryProducts = () => {

  const [product, setProduct] = useState([]);
  const [allProd, setAllProd] = useState([]);
  const [loading , setLoading] = useState(false)
  const [deActiveProduct, setDeActiveProduct] = useState([]);
  const [activeProduct, setActiveProduct] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const url = endpoints.products.allProduct;
  const [productCategory, setProductCategory] = useState("all");

  const navigate = useNavigate();
  const [deleteRef, setDeleteRef] = useState(false);

  const getProduct = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    setLoading(true)
    axios
      .post(url, formData)
      .then((res) => {
        setLoading(false)
        console.log(res, "response");
        if (res.data.status === true) {
          var pro = res.data.data;
          var pro = pro.reverse();
          const deleteProduct = pro.filter((itm, ind) => {
            return itm.DELETE_STATUS === "X";
          });
          setDeActiveProduct(deleteProduct);

          const allPro = pro.filter((itm, ind) => {
            return itm.DELETE_STATUS === null;
          });
          setActiveProduct(allPro);

          setAllProd(res.data.data);
          setProduct(res.data.data);
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
        setLoading(false)
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
      
      const filterActiveProduct = allProd.filter((itm, ind) => {
        return itm.PRODUCT_CATEGORY == productCategory && itm.DELETE_STATUS === null
      });

      setActiveProduct(filterActiveProduct);

      const filterDeactiveProduct = allProd.filter((itm , ind) =>{
        return itm.PRODUCT_CATEGORY == productCategory && itm.DELETE_STATUS === "X"
      })

      setDeActiveProduct(filterDeactiveProduct)

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
              {activeProduct.map((item, index) => {
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
              {deActiveProduct.map((item, index) => {
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
          <ToastContainer />
          {loading === true && <Loader/>}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default InventoryProducts;