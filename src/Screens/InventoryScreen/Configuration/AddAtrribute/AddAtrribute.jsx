import React, { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import Navebar from '../../../../components/Navbar/Navbar';
import { endpoints } from '../../../../services/endpoints';
import './AddAtrribute.css';
import axios from 'axios';
const AddAtrribute = (props) => {

  const AddAttributeUrl =endpoints.Attribute.addallattribute;
  const [attributeName , setAttributename] = useState("");
  const [variablCreationmode , setVariableCreationmode] = useState("");
  const [attributeValues , setAttributeValues] = useState("");

  const formData = new FormData();

  formData.append("Attribute_Name" , attributeName);
  formData.append("Variable_Creation_Mode" , variablCreationmode);
  formData.append("Attribute_Value",attributeValues);

  const save = () => {
    if (attributeName === "")
    {
      toast("Attribute Name is Required !", {type:"warning"});
    }
    // else if (variablCreationmode === "")
    // {
    // toast("Variable Creation Mode is required !", {type:"warning"});
    // }
    else if(attributeValues === "")
    {
      toast("Attriute Value is Required !",{type:"warning"})
    }
    else{
      axios.post(AddAttributeUrl,formData)
      .then((res) => {
        console.log(res,"Attributeresult");
        if(res.data.status === true)
        {
          toast("Attribute Added Successfully",{type:"success"})
        }
        else if(res.data.status === false)
        {
        toast(res.data.message,{ype:"error"});
        }
      })
      .catch((err) => {
        console.log(err,"error");
      })
    }
  }

  return (
    <div>
           <Navebar showBelowMenu={true} save={save} title="Attribute"/>
           <div className="AddAtrributeCon">
              <div className="AddAtrributemain">
                  <div className="AddAttributedetails">
                    <div className="Attributename">
                    <p>Attribute Name</p>
                   <input type="text" value={attributeName}onChange={(e) => setAttributename(e.target.value)}/>
                    </div>
                    <div className="variable">
                        <p>Variable creation mode</p>
                        <div className="radio" name="variable" >
                            <div>
                            <input type="radio" name="variable" onChange={() => setVariableCreationmode("Instantly")}
                            />  <label>Instantly</label>
                            </div>
                          <div>
                          <input type="radio" name="variable" onChange={() => setVariableCreationmode("Dynamically")}/>  
                          <label>Dynamically</label>
                          </div>
                          <div>
                          <input type="radio" name="variable" onChange={() => setVariableCreationmode("Never")}/>  
                          <label>Never</label>
                          </div>
                        </div>
                        </div>
                    </div>
                    <div className="Attributename">
                    <p>Attribute Values</p>
                   <input type="text" value={attributeValues} onChange={(e) => setAttributeValues(e.target.value)} />
                    </div>
                    {/* <div className='AddValues'>
        <div className="AddAttributes">
        <div className="AddAttributeContent1">
            <p>Values</p>
        </div>
        </div>
        <div className="AddAtrributebox">
             <p>Add Line</p>
         
        </div>
    </div> */}
    <ToastContainer />
  </div>
    </div>
        </div>
        
  )
}

export default AddAtrribute