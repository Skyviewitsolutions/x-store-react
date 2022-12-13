import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import InventoryProductsCard from '../../../components/InventoryProductsCard/InventoryProductsCard';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { endpoints } from '../../../services/endpoints';

const AccountProduct = () => {

    const [product, setProduct] = useState([]);
  const [allProd, setAllProd] = useState([]);
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
    axios
      .post(url , formData)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setAllProd(res.data.data);
          setProduct(res.data.data);
        } else if (res.data.status === false) {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
          
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
    <div>
          <div className="ProductsMainContainer">
          <AccountNavbar showBelowMenu={true} title="Vendor" handleCreatePage={handleCreatePage}/>
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
          <ToastContainer />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default AccountProduct