import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import CustomTable from '../../../components/CustomTable/CustomTable'
import DeletePopup from '../../../components/Model/DeletePopup/DeletePopup';
import Navebar from '../../../components/Navbar/Navbar'
import { endpoints } from '../../../services/endpoints';

const ProductBrandList = () => {

    const navigate = useNavigate()

    const handleCreatePage = () => {
        navigate("/ProductBrand");
      };

      const [show , setShow] = useState(false)
      const [deleteConfirm, setDeleteConfirm] = useState(false);
      const [selectedData, setSelectedData] = useState("");

    const [allBrand , setAllBrand] = useState([]);
    const userAuth = localStorage.getItem("userAuth");
    const getAuthtoken = localStorage.getItem("authtoken");

    const getBrandUrl = endpoints.productBrand.allProductBrand;
    const getBrand = () => {
        const formData = new FormData()
        formData.append("User_Authorization" , getAuthtoken);
        formData.append("User_AuthKey" , userAuth);
        axios.post(getBrandUrl ,formData)
        .then((res) => {
           var val = res.data.data;
           val.reverse()
           const filterProductBrand = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
           })
           setAllBrand(filterProductBrand)
        }) 
        .catch((err) => {
            console.log(err,"error")
        })
    }

    useEffect(() => {
      getBrand()
    },[])

    const deleteBrandUrl = endpoints.productBrand.deleteProductBrand;
    const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("Id", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deleteBrandUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          toast("Product Brand deleted successfully", { type: "success" });
          setShow(false)
          setDeleteConfirm(false)
          setSelectedData("")
          getBrand();
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
  }

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

    const handleUpdate = (data) => {
      const val = allBrand.filter((itm, index) => {
        return itm.BRAND_ID == data;
      });
      const orgValue = val[0];
    navigate("/ProductBrand", { state: orgValue });
  
    }

  

    const column = [
        { label: "Brand Code", name: "BRAND_CODE" },
        { label: "Brand Name", name: "BRAND_NAME_ENGLISH" },
        {
          label: "Actions",
          name: "BRAND_ID",
          options: {
            print : false ,
            customBodyRender: (value, tableMeta, updateValue) => {
              return (
                <>
                  <div className="updtdlt">
                    <FiEdit
                      size={23}
                      color="#4f4e4d"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleUpdate(value)}
                    />
                    <MdDelete
                      size={23}
                      color="#4f4e4d"
                      style={{ cursor: "pointer" }}
                     onClick={() => {
                    setShow(true);
                     setSelectedData(value)
                  }}
                    />
                  </div>
                </>
              );
            },
          },
        },
      ];
  return (
    <div>
        <Navebar showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Product Brand"
        disabledCreate={false}/>
        <div className="Main">
          {/* <div className="left">
       
          <Sidebar/>
          </div> */}
          <div className="Right">
            <CustomTable data={allBrand} column={column} />
            <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
          </div>
          
        </div>
        <ToastContainer />
      </div>
  )
}

export default ProductBrandList