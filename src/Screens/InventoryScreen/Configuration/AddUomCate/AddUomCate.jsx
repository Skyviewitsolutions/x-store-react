import React, { useState,useEffect } from 'react'
import { toast,ToastContainer} from 'react-toastify';
import Navebar from '../../../../components/Navbar/Navbar';
import { endpoints } from '../../../../services/endpoints';
import axios from 'axios'
import './AddUomCate.css';
import { useLocation } from 'react-router-dom';

const AddUomCate = () => {

  const AddUomCateUrl = endpoints.UomCategory.addUomCate;
  const [uomCategory , setUomCategory] = useState("");
  const [update , setUpdate] = useState("");

  const formData = new FormData();
  formData.append("unitname" , uomCategory);

  const save = () => {
    if(uomCategory === "")
    {
      toast("Uom Category is Required!" , {type:"warning"});
    }
    else{
      axios.post(AddUomCateUrl , formData)
      .then((res) => {
        if(res.data.status == true)
        {
          toast("Uom Category Added Successfully!" , {type:"success"})
        }
        else if(res.data.status == false)
        {
          toast(res.data.message,{type:"error"});
        }
      })
      .catch((err) => {
        console.log(err,"error")
      })
    }
  }

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData,"selectedData here")

  useEffect(() => {
    if(selectedData)
    {
      setUpdate(true)
      setUomCategory(selectedData.UNIT_NAME);
    }
  },[selectedData])

  const UomCateupdateUrl = endpoints.UomCategory.updateUomCate;

  const updateData = () => {
    if(uomCategory === "")
    {
      toast("Uom Category is Required!" , {type:"warning"});
    }
    else{
      const formData = new FormData();

      formData.append("unit" ,selectedData.ID );
      formData.append("Unitname" , uomCategory);
      axios.post(UomCateupdateUrl,formData) 
      .then((res) => {
        if(res.data.status == true)
        {
          toast("Uom Category Updated Successfully!" , {type:"success"})
        }
        else if(res.data.status == false)
        {
          toast(res.data.message,{type:"error"});
        }
      })
    }
  }
  return (
    <div>
        <Navebar showBelowMenu = {true}  save={update === true ? updateData : save} title="UOM Category"/>
        <div className="AddUomCateCon">
            <div className="AddUomCateContent">
                <p>UOM Category</p>
                <input type="text" value = {uomCategory} onChange={(e) => setUomCategory(e.target.value)}/>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AddUomCate