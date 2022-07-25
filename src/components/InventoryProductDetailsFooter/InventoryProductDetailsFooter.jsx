import React from 'react'
import './InventoryProductDetailsFooter.css';
import {FaClock} from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
const InventoryProductDetailsFooter = () => {
  return (
    <div className='ProductDeatilsFooter'>
        <div className="left">
            <p>Send Message</p>
            <p className='log'>Log note</p>
            <FaClock size="15px"  style={{color:"#008784",marginRight:"5px",marginBottom:"5px"}} />
            <p>Schedule activity</p>


        </div>
        <div className="right">
            <div className='clip'>
            <FaPaperclip size="15px"  style={{color:"#008784",marginRight:"5px",marginBottom:"5px"}} />
            <p>0</p>
            </div>
            <div className='clip' style={{marginLeft:"25px",marginRight:"20px"}}>
            <FaUser ize="15px"  style={{color:"#008784",marginRight:"5px",marginBottom:"5px"}} />
            <p>0</p>
            </div>
            <p>Follow</p>
        </div>
        
        </div>
  )
}

export default InventoryProductDetailsFooter