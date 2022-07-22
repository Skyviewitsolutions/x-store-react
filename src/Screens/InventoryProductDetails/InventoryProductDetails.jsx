import React from 'react'
import Navebar from '../../components/Navbar/Navbar';
import ProductDetailsHeader from '../../components/ProductDeatilsHeader/ProductDetailsHeader';
import InventoryProductDetailsMain from '../../components/InventoryProductDetailsMain/InventoryProductDetailsMain';
import InventoryProductDetailsFooter from '../../components/InventoryProductDetailsFooter/InventoryProductDetailsFooter';
const InventoryProductDetails = () => {
  return (
    <div>
        <Navebar />
        <ProductDetailsHeader />
        <InventoryProductDetailsMain />
        <InventoryProductDetailsFooter />
    </div>
  )
}

export default InventoryProductDetails