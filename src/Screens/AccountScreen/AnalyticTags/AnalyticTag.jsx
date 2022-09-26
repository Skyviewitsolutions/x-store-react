import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'

const AnalyticTag = () => {

    const navigate = useNavigate();
   
    const [analyTag , setAnalyTag] = useState([]);
    const analyTagUrl = endpoints.AnalyticTag.allAnnTag;
    
    const getAnalyTag = () => {
        axios.post(analyTagUrl)
        .then((res) => {
            if(res.data.status === true){
                setAnalyTag(res.data.data);
            }
            else if(res.data.status === false)
            {
                toast(res.data.message,{type:"error"})
            }
        })
        .catch((err) => {
            console.log(err,"error")
        })
    }

    useEffect(() => {
     getAnalyTag();
    },[])

    const delteAnalyTag = endpoints.AnalyticTag.deleteAnnTag;
    const deleteItem = (data) => {
        const formData = new FormData();
        formData.append("ID",data);
        axios.post(delteAnalyTag,formData)
        .then((res) => {
            if(res.data.status === true)
            {
                getAnalyTag();
                toast("Analytic Tag deleted Successfully",{type:"success"});
            }
            else if(res.data.status === false)
            {
                toast(res.data.message,{type:"error"});
            }
        })
        .catch((err) => {
            console.log(err,"error");
        })
    }

    const handleUpdate = (data) => {
        console.log(data ,"value")
        const val = analyTag.filter((itm,index) => {
          return itm.ANALYTIC_TAG_ID == data
        })
        const orgValue = val[0];
        console.log(orgValue,"irhhcbsdh")
        navigate("/AddAnalyticTag" , {state:orgValue});
    }
    
    const column = [
        {label:"Analytic Tag", name:"ANALYTIC_TAG"},
        {
            label:"Action",
            name:"ANALYTIC_TAG_ID",
            options:{
                customBodyRender:(value,tableMeta,updateValue) => {
                 return(
                    <>
                     <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}/>
                    </div>
                    </>
                 )
                }
            }
        }
    ]

    const handleCreatePage = () => {
      navigate('/AddAnalyticTag');
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Analytic Tag" />
        <CustomTable data={analyTag} column={column}/>
    </div>
  )
}

export default AnalyticTag