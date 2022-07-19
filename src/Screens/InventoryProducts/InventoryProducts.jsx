import React from 'react'
import './Products.css';
import InventoryProductsCard from '../../components/InventoryProductsCard/InventoryProductsCard';
import Navebar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
const InventoryProducts = () => {
  return (
    <>
      <div className="ProductsMainContainer">
        <Navebar />
        <div className="ProductContainer">
          <div className="ProductSidebar">
            <Sidebar />
          </div>
          <div className="Product2Card">
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
            <InventoryProductsCard />
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default InventoryProducts
