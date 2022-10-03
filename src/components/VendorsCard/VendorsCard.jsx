import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import vendor from "../../assets/Images/vendor.png";
import './VendorsCard.css'

const VendorsCard = () => {
    const [iconColor, setIconColor] = useState("#7478a1");
  return (
    <div>
         <div
      className="VendorsContainer"
  
    >
      <div className="VendorsCon">
      <div className="VendorsImg">
        <img src={vendor} alt="vendors" />
      </div>
      <div className="VendorsContent">
        <h6>300048513700003</h6>
      </div>
  
      </div>
      <div className="deleteicon">
        <MdDelete
          size={20}
          style={{ color: iconColor }}
          onMouseOver={() => setIconColor("#293391")}
          onMouseOut={() => setIconColor("#7478a1")}
        />
      </div>
      
    </div>
    </div>
  )
}

export default VendorsCard