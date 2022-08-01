import React from 'react'
import Navebar from '../../components/Navbar/Navbar';
import './Uomdetails.css';
const Uomdetails = () => {
  return (
    <div>
        <Navebar showBelowMenu={true}/>
    <div className='UomdetailsContainer'>
        <div className="uompart1">
          <div className="Uomcontent">
            <p>Unit of Measure</p>
            <span>BAG</span>
          </div>
          <div className="Uomcontent">
            <p>Category</p>
            <span style={{color:'#00a09d'}}>Weight</span>
          </div>
          <div className="Uomcontent">
            <p>Type</p>
            <span>Bigger than the reference Unit of Measur</span>
          </div>
          <div className="Uomcontent">
            <p>Bigger Ratio</p>
            <span>25.00000 e.g: 1*(this unit)=ratio*(reference unit)</span>
          </div>
          </div>
          <div className="uompart2">
          <div className="uompart1">
          <div className="Uomcontent">
            <p>Active</p>
            <input type='checkbox' />
          </div>
          
          <div className="Uomcontent">
            <p>Rounding Precisio</p>
            <span>0.00010</span>
            
          </div>
          
          </div>
          </div>
    </div>
    </div>
  )
}

export default Uomdetails