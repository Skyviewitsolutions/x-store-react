import React,{useEffect, useState}from 'react'
import Navebar from '../../Navbar/Navbar';
import './UnitPage.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from '../../../services/endpoints';
import axios from 'axios'

const UnitPage = () => {
  const AddUOMUrl = endpoints.UOM.addUOM;
  const UomCateURL = endpoints.products.productUnitAll;
  const [unitName , setUnitName] = useState("");
  const [unitCategory , setUnitcategory] = useState("");
  const [unitType , setUnitType] = useState("");
  const [uomcate , setUomCate] = useState([]);

  const formData = new FormData();
   formData.append("UnitName" ,unitName );
   formData.append("UnitCategory",unitCategory);
   formData.append("UnitType",unitType);

   const save = () => {
    if(unitName === "")
    {
      toast("Unit Name is Required!",{type:"warning"})
    }
    else if(unitCategory=== "")
    {
      toast("Unit Category is Required!",{type:"warning"})
    }
    else if(unitType === "")
    {
     toast("Unit type is Require!",{type:"warning"})
    }
    else
    {
      axios.post( AddUOMUrl,formData)
      .then((res) => {
        console.log(res,"UOMResponse");
        if(res.data.status == true)
        {
          toast("UOM Added Successfully!",{type:"success"})
        }
        else if(res.data.status == false){
          toast(res.data.message ,{type:"error"});
        }
      })
      .catch((err) => {
        console.log(err,"error");
      })
    }
   }
   

   useEffect(() => {
    axios.get(UomCateURL)
    .then((res) => {
      console.log(res,"UOmCateResponse");
      if(res.data.status == true)
      {
        setUomCate(res.data.data);
      }
      else if(res.data.status == false)
      {
        alert(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err,"error");
    })
   },[])
  return (
    <div>
        <Navebar  showBelowMenu={true} save={save} title="Units of Measure "/>
    <div className='UnitContainer'>
        <div className="unitpart1">
          <div className="unitcontent">
            <p>Unit of Measure</p>
            <input type="text" onChange={(e) => setUnitName(e.target.value)}/>
          </div>
          <div className="unitcontent">
            <p>Category</p>
           <select onChange={(e) => setUnitcategory(e.target.value)} value={unitCategory}>
            <option></option>
            {uomcate.map((item,index) => {
              return(
                <>
                <option key={index} value={item.UNIT_NAME}>{item.UNIT_NAME}</option>
                </>
              )
            })}
           </select>
          </div>
          <div className="unitcontent">
            <p>Type</p>
             <select onChange={(e) => setUnitType(e.target.value)}>
              <option></option>
              <option value="Bigger than the reference Unit of Measure">Bigger than the reference Unit of Measure</option>
              <option value="Reference Unit of Measure for this category">Reference Unit of Measure for this category</option>
              <option value="Smaller than the reference Unit of Measure">Smaller than the reference Unit of Measure</option>
             </select>
          </div>
          </div>
          <div className="unitpart2">
          <div className="unitpart1">
          <div className="unitcontent">
            <p>Active</p>
            <input type='checkbox' />
          </div>
          
          <div className="unitcontent">
            <p>Rounding Precisio</p>
            <span>0.00010</span>
            
          </div>
          
          </div>
          </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default UnitPage