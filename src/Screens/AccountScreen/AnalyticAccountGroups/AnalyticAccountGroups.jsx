import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer} from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'

const AnalyticAccountGroups = () => {

    const navigate = useNavigate()
   
    const [analyticAccGrp , setAnalyticAccGrp] = useState([]);

    const AnalyAccGrpUrl = endpoints.AnalyticAccGrp.allAnnAccGrp;
    const getAnalyticAccGrp = () => {
        axios.post(AnalyAccGrpUrl)
        .then((res) => {
            if(res.data.status === true)
            {
                setAnalyticAccGrp(res.data.data);
            }
            else if(res.data.status === false)
            {
                toast(res.data.message,{type:"warning"});
            }
        })
        .catch((err) => {
            console.log(err,"error");
        })
    }

    useEffect(() => {
        getAnalyticAccGrp();
    })

    const deleteAnnAccGrpUrl = endpoints.AnalyticAccGrp.deleteAnnAccGrp;

    const deleteItem = (data) => {
        const formData = new FormData();
        formData.append("Id",data);
        axios.post(deleteAnnAccGrpUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
                getAnalyticAccGrp();
                toast("Analytic Account Group deleted Successfully",{type:"success"});
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
        const val = analyticAccGrp.filter((itm,index) => {
          return itm.ID == data
        })
        const orgValue = val[0];
        console.log(orgValue,"irhhcbsdh")
        navigate("/AddAnalyticAccountGroup" , {state:orgValue});   
    }

    const column = [
        {label:"display Name" , name:"ANALYTIC_NAME"},
        {
            label:"Actions",
            name:"ID",
            options:{
                customBodyRender:(value , tableMeta , updateValue) => {
                    return(
                        <>
                         <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}/>
                        <MdDelete size={23} color="#4f434d"  onClick={() => deleteItem(value)}/>
                        </div>
                        </>
                        
                    )
                }
            }
        }
    ]




    const handleCreatePage = () => {
   navigate('/AddAnalyticAccountGroup');
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true}  handleCreatePage={handleCreatePage} title="Analytic Account Group"/>
        <CustomTable  data={analyticAccGrp} column={column}/>
        <ToastContainer/>
    </div>
  )
}

export default AnalyticAccountGroups