import React, { useEffect, useState } from 'react'
import './Location.css'
import Navebar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import CustomTable from '../../components/CustomTable/CustomTable';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Location = () => {

  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate('/AddLocation')
  }
  const url = "https://xstore.skyviewads.com/WareHouse/LocationMaster/GetAllLoc";

  const [Locationdetails , setLocationdetails] = useState([]);

useEffect(() => {
   axios.post(url)
   .then((res) => {
    console.log(res,"response");
    if(res.data.status === true)
    {
      setLocationdetails(res.data.data);
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

    
    const column = [

            { label: 'Location', name: 'LOCATION_NAME' },
            { label: 'Location Type', name: 'LOCATION_TYPE' },
        
    ];

  return (
    <div>
    <Navebar showBelowMenu={true}  handleCreatePage={handleCreatePage}/>
    <div className="container-fluid PROVAR">
      <div className="Main">
        
        {/* <div className="left">
       
          <Sidebar/>
          </div> */}
        <div className="Right">
          <CustomTable data={Locationdetails} column = {column}/>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Location