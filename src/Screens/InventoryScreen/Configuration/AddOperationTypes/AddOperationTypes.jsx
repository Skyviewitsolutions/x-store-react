import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Navebar from '../../../../components/Navbar/Navbar';
import { endpoints } from '../../../../services/endpoints';
import './AddOperationTypes.css';
const AddOperationTypes = () => {

    const warehouseurl = endpoints.wareHouse.allWarehouse;
    const locationUrl = endpoints.location.allLocation;
    const [warehouse , setWareHouse] = useState([]);
    const [location , setLocation] = useState([]);
   
    useEffect(() => {
      axios.post(warehouseurl)
      .then((res) => {
        console.log(res,"response");
        if(res.data.status === true)
        {
          setWareHouse(res.data.data);
        }
        else if(res.data.status === false)
        {
            alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err,'error');
      });
      axios.post(locationUrl)
      .then((res) => {
        console.log(res,"locationres");
        if(res.data.status === true)
        {
            setLocation(res.data.data);
        }
        else if(res.data.status === false)
        {
            alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err,"error");
      })
    },[])
  return (
    <>
    <Navebar showBelowMenu={true} title="Operation Types" />
    <div className='AddOperatintypeContainer'>
       <div className="Addoperationcontent">
        <div className="operationcon1">
            <div className="operation">
            <p>Operation Type</p>
            <input type="text" />
            </div>
            <div className="operation">
            <p>Code</p>
            <input type="text" />
            </div>
            <div className="operation">
            <p>WareHouse</p>
            <select>
                <option></option>
                {warehouse.map((item,index) => {
                    return(
                        <>
                        <option key={index}>{item.WAREHOUSE_NAME}</option>
                        </>
                    )
                })}
            </select>
            </div>
           
        </div>
        <div className="type">
        <div className="operation">
            <p>Type of Operation</p>
            <select>
                <option></option>
                <option>Receipt</option>
                <option>Delivery</option>
                <option>Internal Transfer</option>
            </select>
            </div>
        <div className="show">
            <p>Show Detailed Operations</p>
            <input type="checkbox" />
            </div>
        </div>
       </div>
       <div className="location">
        <h3>Location</h3>
        <div className="operation">
            <p>Default Source Location</p>
           <select>
            <option></option>
            {location.map((item,index) => {
                return(
                    <>
                 <option key={index}>{item.LOCATION_NAME}</option>
                    </>
                )
            })}
           
           </select>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddOperationTypes