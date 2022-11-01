import React, { useEffect, useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../services/endpoints";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const ProductCategories = () => {

  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddProductCategories");
  };

  const allProductCate = endpoints.productCategory.allProductCate;
  const [productCate, setProductCate] = useState([]);

  const token = localStorage.getItem("token")

  const getProductCate = () => {

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const formData = new FormData();
  formData.append("User_Authorization" , getAuthtoken);
  formData.append("User_AuthKey" , userAuth);

    axios
      .post(allProductCate , formData )
      .then((res) => {
        console.log(res, "result");
        if (res.data.status === true) {
          setProductCate(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  useEffect(() => {
    getProductCate();
  }, []);

  // const productdeleteUrl = endpoints.productCategory.deleteProductCate;

  // const deleteItem = (data) => {
  //   const formData = new FormData();
  //   formData.append("id", data);
  //   axios
  //     .post(productdeleteUrl, formData)
  //     .then((res) => {
  //       // console.log(res,"productcatedelete");
  //       if (res.data.status === true) {
  //         getProductCate();
  //         toast("Product Category deleted Successfully !", { type: "success" });
  //       } else if (res.data.status === false) {
  //         toast(res.data.message, { type: "error" });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err, "error");
  //     });
  // };

  const handleUpdate = (data) => {

    const val = productCate.filter((itm, index) => {
      return itm.CATEGORY_ID == data;
    });

    const orgValue = val[0];
    navigate("/AddProductCategories", { state: orgValue });
  };

  
  const column = [
    { label: "Product Category", name: "CATEGORY_NAME" },
    {
      label: "Action",
      name: "CATEGORY_ID",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="#4f4e4d"
                
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          );
        },
      },
    },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Navebar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Product Category"
      />
      <CustomTable data={productCate} column={column} />
      <ToastContainer />
    </div>
  );
};

export default ProductCategories;
