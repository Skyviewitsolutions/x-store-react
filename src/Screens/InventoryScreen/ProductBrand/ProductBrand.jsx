import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import Navebar from '../../../components/Navbar/Navbar';
import { endpoints } from '../../../services/endpoints';
import './ProductBrand.css';

const ProductBrand = () => {

  const addProductBrandUrl = endpoints.productBrand.addProductBrand;
  const navigate = useNavigate();
  const [brandCode , setBrandCode] = useState("");
  const [brandNameEn , setBrandNameEn] = useState("");
  const [brandNameAr , setBrandNameAr] = useState("");
  const userAuth = localStorage.getItem("userAuth");
  const getAuthtoken = localStorage.getItem("authtoken");

  const save = () => {
    const formData = new FormData();
    formData.append("Brand_Code" , brandCode);
    formData.append("Brand_Name" , brandNameEn);
    formData.append("Brand_Name_Arbic" , brandNameAr);
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    if(brandCode === "")
    {
      toast("Brand Code Is Required!",{type:"warning"});
    }
    else if(brandNameEn === "")
    {
      toast("Brand Name English is Required!",{type:"warning"})
    }
    else if(brandNameAr === "")
    {
      toast("Brand Name Arbic is Required!",{type:"warning"})
    }
    else{
      axios.post(addProductBrandUrl,formData)
      .then((res) => {
        if(res.data.status === true)
        {
          toast("Product Brand Added Is Successfully",{type:"success"})
        }
        else if(res.data.status === false)
        {
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
    }
  }
  return (
    <>
    <Navebar
    showBelowMenu={true}
    title="Product Brand"
    save={save}
    showCanelBtn={true}
  />
    <div className='productBrandCon'>
      <div className="productbrandtext">
        <div className="brand">
            <p>Brand Code</p>
            <input type="text" value={brandCode} onChange={(e) => setBrandCode(e.target.value)}/>
        </div>
        <div className="brand">
            <p>Brand Name(English)</p>
            <input type="text" value={brandNameEn} onChange={(e) => setBrandNameEn(e.target.value)}/>
        </div>
        <div className="brand">
            <p>Brand Name(Arabic)</p>
            <input type="text" value={brandNameAr} onChange={(e) => setBrandNameAr(e.target.value)}/>
        </div>
      </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default ProductBrand