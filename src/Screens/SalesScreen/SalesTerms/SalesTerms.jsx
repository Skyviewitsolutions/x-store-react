import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CustomTable from '../../../components/CustomTable/CustomTable'
import { endpoints } from '../../../services/endpoints'

//import Navebar from '../../../components/Navbar/Navbar'
 import SalesNavbar from '../SalesNavbar/SalesNavbar'



const SalesTerms = () => {

  const navigate = useNavigate();

    const handleCreatePage = () => {
      navigate('/AddSalesTeam');
    }

    const [allSalesTeam , setAllSalesTeam] = useState([])
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
 const allSalesTeamUrl = endpoints.SalesTeams.allSalesTeam;

 const getSalesTeam = () => {
  const formData = new FormData()
  formData.append("User_Authorization", getAuthtoken);
  axios.post(allSalesTeamUrl,formData)
  .then((res) => {
    console.log(res,"rexsponse hd")
    if(res.data.status === true){
      setAllSalesTeam(res.data.data)
    }else if(res.data.status === false){
      toast(res.data.message ,{type:'error'})
    }
  })
  .catch((err) => {
    console.log(err,"error")
  })
 }

 useEffect(() => {
   getSalesTeam()
 },[])


    const column = [
        {label:"Sales Team" , name:"salesTeam"},
        {label:"Team Leader" , name:"teamLeader"},
    ]
  return (
    <div>
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <SalesNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Sales Teams"/>
      <CustomTable column={column} data={allSalesTeam} />
      
    </div>
    </div>
  )
}

export default SalesTerms;