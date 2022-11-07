import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import vendor from "../../assets/Images/vendor.png";
import './VendorsCard.css'

const VendorsCard = (props) => {
    const [iconColor, setIconColor] = useState("#7478a1");
   const {data} = props;
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
        <h6>{data.VENDOR_NAME}</h6>
        <p>{data.CITY}</p>
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