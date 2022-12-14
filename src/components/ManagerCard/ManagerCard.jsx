import React from 'react'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import camera from '../../assets/Images/camera.png'
import './ManagerCard.css'
const ManagerCard = (props) => {

    const [iconColor , setIconColor] = useState("#7478a1");
    const {data , getAllManager} = props;


  return (
    <div>
        <div style={{opacity : 0.5}}>
        <div className="manager_container">
            <div className="manager_con">
                <div className="manager_img">
                    <img src={data?.MANAGER_PROFILE} alt="manager" />
                </div>
                <div className="manager_contents">
                    <h6>{data?.MANAGER_NAME}</h6>
                    <p>{data?.PRIVATE_ADDRESS}</p>
                </div>
            </div>
            <div className="deleteicon">
          <MdDelete
            size={20}
            style={{ color: "#b70000", zIndex: 10 }}
            onMouseOver={() => setIconColor("#293391")}
            onMouseOut={() => setIconColor("#7478a1")}
          />
        </div> 
        </div>
        </div>
    </div>
  )
}

export default ManagerCard