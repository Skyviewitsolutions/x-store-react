import React, { useEffect, useState } from 'react'
import Navebar from '../../../components/Navbar/Navbar'
import CustomTable from '../../../components/CustomTable/CustomTable';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../../../services/endpoints';
import axios from 'axios';
import {toast , ToastContainer} from "react-toastify";
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
const Attributes = () => {
 
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate('/AddAttribute')
  }

  const attributeUrl = endpoints.Attribute.allattribute;
  const [attribute , setAttribute] = useState();

  const formData = new FormData();

  const getAttribute = () => {
    axios.post(attributeUrl,formData)
    .then((res) => {
      console.log(res,"response");
      if(res.data.status === true)
      {
        setAttribute(res.data.data);
      }
      else if(res.data.status === false)
      {
        toast(res.data.message,{type:'info'});
      }
    })
    .catch((err) => {
      console.log(err,"error");
    })
  }

  useEffect(() => {
    getAttribute();
  },[])

  const attributeDeleteUrl = endpoints.Attribute.deleteattribute;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("id" , data);
    axios.post(attributeDeleteUrl,formData)
    .then((res) => {
       if(res.data.status === true)
       {
        getAttribute();
        toast("Attribute deleted Successfully" , {type:"ssuccess"});
       }
       else if(res.data.status === false)
       {
        toast(res.data.message , {type:"error"})
       }
    })
    .catch((err) => {
      console.log(err,"error");
    })
  }

  const handleUpdate = (data) => {
    const val = attribute.filter((itm,index) =>  {
      return itm.ID == data
    })
    const orgValue = val[0];
    navigate("/AddAttribute" , {state:orgValue});
  }

  const column = [
    { label : 'Attribute' , name : 'ATTRIBUTE_NAME'},
    { label : 'Variable Creation Mode' , name : 'VARIABLE_CREATION_MODE'},
    {
      label:"Action",
      name:"ID",
      options:{
        customBodyRender:(value , tableMeta , updateValue) => {
          return(
            <>
            <div className="updtdlt">
              <FiEdit size={23} color="#4f4e4d"  onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}} />
              <MdDelete
                  size={23}
                  color="#4f4e4d"
                  onClick={() => deleteItem(value)}
                  style={{cursor:"pointer"}}
                />
            </div>
            </>
          )
        }
      }
    }

  ]
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
        <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Attributes"/>
        <CustomTable  data={attribute} column={column}
        />
        <ToastContainer />
    </div>
  )
}

export default Attributes