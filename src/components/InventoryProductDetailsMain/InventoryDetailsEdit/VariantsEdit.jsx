import React, { useState } from 'react'
import './VariantsEdit.css'
import {MdArrowDropDown} from 'react-icons/md'
import { endpoints } from '../../../services/endpoints'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Table } from 'react-bootstrap'
import { useEffect } from 'react'

const VariantsEdit = () => {

  const navigate = useNavigate()

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [attributesValues , setAttributeValues] = useState([])

  const allattValUrl = endpoints.attribute.allValue;

  const GetAllAttribute = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(allattValUrl , formData)
    .then((res) => {
      if(res.data.status === true){
        setAttributeValues(res.data.data);
      }else if (res.data.status === false) {
        if (res.data.code === 3) {
          toast("Session expired , Please re-login", { type: "warning" });
          navigate("/");
        } else {
          toast(res.data.message, { type: "error" });
        }
      }
    })
    .catch((err) => {
      console.log(err,"error")
    })
  }

  useEffect(() => {
    GetAllAttribute()
  })
  return (
    <div className='VariantsEditContainer'>
    <div className="VariantsEdit">
  
    <Table  bordered hover>
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {attributesValues.map((item,ind) => {
            return(
              <>
              <td>{item.ATTRIBUTE_NAME}</td>
                <td>{item.VALUE}</td>
              </>
            )
          })}
        
        </tr>
      </tbody>
    </Table>
    </div>
    <Button variant="outline-info">Add Line</Button>
    <p className='VariantsEditContainerp'>Warning: adding or deleting attributes will delete and recreate existing variants and lead to the loss of their possible customizations.</p>
</div>
  )
}

export default VariantsEdit