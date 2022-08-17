import React, { useEffect, useState } from 'react'
import Navebar  from '../../components/Navbar/Navbar';
import CustomTable from '../../components/CustomTable/CustomTable';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProductCategories = () => {

  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate('/AddProductCategories');
  }

  const url = "https://xstore.skyviewads.com/ProductsXM/DisplayAllProductCategory";
  const [ProductCate ,  setProductCate] = useState([]);

  useEffect (() => {
    axios.post(url)
    .then((res) => {
      console.log(res,"result");
      if(res.data.status === true)
      {
        setProductCate(res.data.data);
      }
      else if(res.data.status === false)
      {
        alert(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err,"error");
    })
     
  },[])

  const column = [
    { label : 'Product Category', name: 'CATEGORY_NAME'},
  ];


  return (
    <div style={{width:"100vw",height:'100vh',overflow:'hidden'}}>
        <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage}/>
        <CustomTable data={ProductCate} column = {column}/>
    </div>
  )
}

export default ProductCategories