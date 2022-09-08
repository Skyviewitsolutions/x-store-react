import React from 'react'
import Navebar from '../../../../components/Navbar/Navbar';
import './AddPutwayRules.css';
const AddPutwayRules = () => {
  return (
    <>
    <Navebar showBelowMenu={true}/>
    <div className='AddPutwayRulesCon'>
<div className="Putwaycon">
    <p>Product</p>
    <select>
        <option></option>
    </select>
</div>
    </div>
    </>
  )
}

export default AddPutwayRules