import React, { useEffect,useState  } from 'react'
import Navebar from '../../components/Navbar/Navbar';
import CustomTable from '../../components/CustomTable/CustomTable';
import axios from 'axios';
const Uom = () => {

  const UOMapiurl = "https://xstore.skyviewads.com/Units/GetAllUOM";
  const [UOM , setUOM] = useState();

    useEffect(()=>{
      axios.post(UOMapiurl)
      .then((res) => {
        console.log(res,"response");
        if(res.data.status === true)
        {
          setUOM(res.data.data);
        }
        else if(res.data.status ===  false) 
        {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err,"error");
      })
    },[])

  const column = [
    { label :'Unit of Measure', name:'UNITNAME'},
    { label :'Category', name:'UNITCATEGORY'},
    { label :'Type', name:'UNITTYPE'},
  ]
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
        <Navebar showBelowMenu={true}/>
        <CustomTable  data={UOM } column={column}/>
    </div>
  )
}

export default Uom                                                              