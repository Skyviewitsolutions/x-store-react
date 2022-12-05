import axios from 'axios';
import React, { useEffect } from 'react'
import './Destination.css'

const Destination = (props) => {

  const {state,setState,countries,setCountries,zipTo, zipfrom,setZipTo,setZipFrom} = props;


  return (
    <div>
        <div className="descon">
        <div className="destext">
            <p>Filling this form allows you to filter delivery carriers according to the delivery address of your customer.</p>
        </div>
        <div className="desselect">
            <p>Countries</p>
          <input type="text" value={countries} onChange={(e) => setCountries(e.target.value)}/>
          {/* <div className="mutiselectbox">
          </div> */}
        </div>
        <div className="desselect">
            <p>State</p>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>
          {/* <div className="mutiselectbox">
          </div> */}
        </div>
          <div className="Zipbox">
           <div className="zipbox1">
            <div className="Zipfrom">
            <p>Zip From</p>
            <input type="text" value={zipfrom} onChange={(e) => setZipFrom(e.target.value)}/>
            </div>
           </div>
           <div className="zipbox2">
            <div className="Zipfrom">
            <p>Zip To</p>
            <input type="text" value={zipTo} onChange={(e) => setZipTo(e.target.value)}/>
            </div>
           </div>
          </div>
        </div>
        
    </div>
  )
}

export default Destination