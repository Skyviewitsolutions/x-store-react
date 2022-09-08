import React, { useEffect, useState } from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import axios from 'axios';
import { endpoints } from '../../../services/endpoints';

const UomCategories = () => {

  const [Uomdetails , setUomdetails] = useState([]);
  const url = "https://xstore.skyviewads.com/ProductsXM/ProductsUnitsAll";


 useEffect(() => {
      axios.get(url)
      .then((res) => {
        console.log(res,"response");
        if(res.data.status === true)
        {
          setUomdetails(res.data.data);
        }
        else if(res.data.status ===  false) 
        {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      })
 },[])

  const column = [
    {label : 'Unit of Measure Category', name: "UNIT_NAME"}
  ]
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
         <Navebar showBelowMenu={true} title="Units of Measure Categories"/>
        
            <CustomTable  data={Uomdetails} column={column}/>
              
         
    </div>
  )
}

export default UomCategories