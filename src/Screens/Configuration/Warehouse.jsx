import React, { useEffect, useState } from 'react'
import Navebar from '../../components/Navbar/Navbar'
import CustomTable from '../../components/CustomTable/CustomTable'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
const Warehouse = () => {
  
  const navigate  = useNavigate();
  const handleCreatePage = () => {
    navigate('/AddWarehouse');
  }

  const url = "https://xstore.skyviewads.com/WareHouse/WareHouseAddress/GetAllWareHouse";

  const [WareHousedetails,setWareHousedetails] = useState([]);
  const formData = new FormData();
  useEffect(() => {
     axios.post(url,formData)
     .then((res) => {
      console.log(res , "response");
      if(res.data.status === true)
      {
        setWareHousedetails(res.data.data);
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
  

  const column  = [
    {label : 'Warehouse' , name :'WAREHOUSE_NAME' },
    {label : 'Location stock' , name :'TRANSIT_LOCATION' },
    {label : 'Address' , name : 'WAREHOUSE_ADDRESS' },
  ]
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
        <Navebar showBelowMenu={true}  handleCreatePage={handleCreatePage}/>
        <CustomTable  column = {column} data={WareHousedetails}/>
    </div>
  )
}

export default Warehouse