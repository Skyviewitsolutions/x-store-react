import React from 'react'
import './Prricing.css';

const Pricing = (props) => {

  const {fixedPrice , setFixedPrice} = props;
  return (
    <div>
        <div className="fixedpri">
            <p>Fixed Price</p>
            <input type="text" value={fixedPrice} onChange={(e) => setFixedPrice(e.target.value)}/>
        </div>
    </div>
  )
}

export default Pricing