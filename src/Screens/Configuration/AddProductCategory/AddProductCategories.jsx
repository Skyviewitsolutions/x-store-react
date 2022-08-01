import React from 'react'
import './AddProductCategories.css';
import {FaRandom} from 'react-icons/fa';
import {FaCubes} from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
const AddProductCategories = () => {
  return (
    <div className='AddProductCategoriesContainer'>
        <div className="AddProductCatehead">
        <div className="AddProductCate1"></div>
        <div className="AddProductCate2">
          <div className="AddProductcatehead1">
            <FaRandom
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddLocationText">
              <p>Puteway Rules</p>
            </div>
          </div>
          <div className="head1">
            <FaCubes
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddLocationText">
              <p>Current Stock</p>
            </div>
          </div>
          <div className="head1">
            <FaList
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddLocationText">
              <p>Current Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductCategories