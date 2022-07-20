import React from 'react'
import Navebar from '../../components/Navbar/Navbar';
import ProductDetailsHeader from '../../components/ProductDeatilsHeader/ProductDetailsHeader';
import InventoryProductDetailsMain from '../../components/InventoryProductDetailsMain/InventoryProductDetailsMain';
const InventoryProductDetails = () => {
  return (
    <div>
        <Navebar />
        <ProductDetailsHeader />
        <InventoryProductDetailsMain />
    </div>
  )
}

export default InventoryProductDetails