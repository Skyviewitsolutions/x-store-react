import React from 'react'
import './VariantsEdit.css'
import {MdArrowDropDown} from 'react-icons/md'
const VariantsEdit = () => {
  return (
    <div className='VariantsEditContainer'>
    <div className="VariantsEdit">
    <div className="VariantsEditContent1">
        <p>Attributes</p>
        <MdArrowDropDown size="25px" style={{marginTop:"5px",color:"#212529"}}/>
    </div>
    <div className="VariantsEditcontent2">
    <p>Values</p>
    </div>
    </div>
    <div className="VariantsEdit2">
         <p>Add a line</p>
    </div>
    <p className='VariantsEditContainerp'>Warning: adding or deleting attributes will delete and recreate existing variants and lead to the loss of their possible customizations.</p>
</div>
  )
}

export default VariantsEdit