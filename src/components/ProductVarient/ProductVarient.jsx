import React from 'react'
import Navebar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './ProductVarient.css';
const ProductVarient = () => {
  return (
    <div>
        <Navebar/>
        <div className='container-fluid'>
            <div className='main'>
                <div className='col-sm-2'>
                    <Sidebar/>
                </div>
                <div className='col-sm-10'></div>
            </div>
        </div>
    </div>
  )
}

export default ProductVarient;