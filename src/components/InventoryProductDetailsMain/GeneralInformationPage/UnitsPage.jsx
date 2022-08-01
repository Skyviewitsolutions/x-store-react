import React from 'react'
import Navebar from '../../Navbar/Navbar';
import './UnitPage.css';
const UnitPage = () => {
  return (
    <div>
        <Navebar  showBelowMenu={true} />
    <div className='UnitContainer'>
        <div className="unitpart1">
          <div className="unitcontent">
            <p>Unit of Measure</p>
            <span>Units</span>
          </div>
          <div className="unitcontent">
            <p>Category</p>
            <span style={{color:'#00a09d'}}>Unit</span>
          </div>
          <div className="unitcontent">
            <p>Type</p>
            <span>Reference Unit of Measure for this category</span>
          </div>
          </div>
          <div className="unitpart2">
          <div className="unitpart1">
          <div className="unitcontent">
            <p>Active</p>
            <input type='checkbox' />
          </div>
          
          <div className="unitcontent">
            <p>Rounding Precisio</p>
            <span>0.00010</span>
            
          </div>
          
          </div>
          </div>
    </div>
    </div>
  )
}

export default UnitPage