import React from 'react'
import Navebar from '../../../../components/Navbar/Navbar';
import './AddUomCate.css';

const AddUomCate = () => {
  return (
    <div>
        <Navebar showBelowMenu = {true} />
        <div className="AddUomCateCon">
            <div className="AddUomCateContent">
                <p>UOM Category</p>
                <input type="text" />
            </div>
        </div>
    </div>
  )
}

export default AddUomCate