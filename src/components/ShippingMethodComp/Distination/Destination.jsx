import axios from 'axios';
import React, { useEffect } from 'react'
import './Destination.css'

const Destination = () => {

    const contriesApi = "https://api.first.org/data/v1/countries";
  useEffect(() =>{
    axios.get(contriesApi)
    .then((res) => {
        console.log(res,"response countries");
    })
    .catch((err) => {
        console.log(err,"error");
    })
  },[])
  return (
    <div>
        <div className="descon">
        <div className="destext">
            <p>Filling this form allows you to filter delivery carriers according to the delivery address of your customer.</p>
        </div>
        <div className="desselect">
            <p>Countries</p>
          <input type="text" />
          {/* <div className="mutiselectbox">
          </div> */}
        </div>
        <div className="desselect">
            <p>State</p>
          <input type="text" />
          {/* <div className="mutiselectbox">
          </div> */}
        </div>
          <div className="Zipbox">
           <div className="zipbox1">
            <div className="Zipfrom">
            <p>Zip From</p>
            <input type="text" />
            </div>
           </div>
           <div className="zipbox2">
            <div className="Zipfrom">
            <p>Zip To</p>
            <input type="text" />
            </div>
           </div>
          </div>
        </div>
        
    </div>
  )
}

export default Destination