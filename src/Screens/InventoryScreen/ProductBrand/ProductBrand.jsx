import React from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import './ProductBrand.css';
const ProductBrand = () => {
  return (
    <>
    <Navebar
    showBelowMenu={true}
    title="ProductBrand"
  />
    <div className='productBrandCon'>
      <div className="productbrandtext">
        <div className="brand">
            <p>Brand Code</p>
            <input type="text"/>
        </div>
        <div className="brand">
            <p>Brand Name(English)</p>
            <input type="text"/>
        </div>
        <div className="brand">
            <p>Brand Name(Arabic)</p>
            <input type="text"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductBrand