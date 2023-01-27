import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer} from 'react-toastify'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'
import DeletePopup from '../../../components/Model/DeletePopup/DeletePopup'
import { endpoints } from '../../../services/endpoints'

const AnalyticAccountGroups = () => {

    const navigate = useNavigate()
   
    const [analyticAccGrp , setAnalyticAccGrp] = useState([]);
    
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");  

    const [show , setShow] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [selectedData, setSelectedData] = useState("");

    const AnalyAccGrpUrl = endpoints.AnalyticAccGrp.allAnnAccGrp;
    const getAnalyticAccGrp = () => {
        const formData = new FormData();
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(AnalyAccGrpUrl , formData)
        .then((res) => {
            if(res.data.status === true)
            {
                var val = res.data.data;
                val = val.reverse()

                const filterAnaAccGrp = val.filter((itm,ind) => {
                    return itm.DELETE_STATUS != "X"
                  })
                setAnalyticAccGrp(filterAnaAccGrp);
            }
            else if(res.data.status === false)
            {
                if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
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
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(deleteAnnAccGrpUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
                setShow(false)
                setDeleteConfirm(false)
                setSelectedData("")
                getAnalyticAccGrp();
                toast("Analytic Account Group deleted Successfully",{type:"success"});
            }
            else if(res.data.status === false)
            {
                if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
            }
        })
        .catch((err) => {
            console.log(err,"error");
        })
    }

    useEffect(() => {
        if (deleteConfirm) {
          deleteItem(selectedData);
        }
      }, [deleteConfirm]);

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
                print:false,
                customBodyRender:(value , tableMeta , updateValue) => {
                    return(
                        <>
                         <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}  style={{cursor:"pointer"}}/>
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
        <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
        <ToastContainer/>
    </div>
  )
}

export default AnalyticAccountGroups