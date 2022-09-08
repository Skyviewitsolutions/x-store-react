import React from 'react'
import './TechnicalInfor.css';

const TechnicalInfor = (props) => {
 const{transitLocation,setTransitLocation} = props;
  return (
    <div className='TechnicalInforCon'>
          <div className="tech1">
            <h4>Locations</h4>
            <div className="techdetails">
               <p>Warehouse view Location</p>
              
            </div>
            <div className="techdetails">
               <p>Location Stock</p>
              
            </div>
            <div className="techdetails">
               <p>Transit Location</p>
               <select className='transitlocation' value={transitLocation} onChange={(e) => setTransitLocation(e.target.value) }>
                  <option value=""></option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  </select>
            </div>
            <div className="techdetails">
               <p>Input Location</p>
             
            </div>
            <div className="techdetails">
               <p>Quality Control Location</p>
             
            </div>
            <div className="techdetails">
               <p>Packing Location</p>
              
            </div>
            <div className="techdetails">
               <p>Output Location</p>
             </div>
          </div>
          <div className="tech2">
          <h4>Operation Types</h4>
          <div className="techdetails">
               <p>In Type</p>
            </div>
          <div className="techdetails">
               <p>Internal Type</p>
               
            </div>
          <div className="techdetails">
               <p>Pick Type</p>
              
            </div>
          <div className="techdetails">
               <p>Pack Type</p>
            </div>
          <div className="techdetails">
               <p>Out Type</p>
            </div>
          </div>
    </div>
  )
}

export default TechnicalInfor