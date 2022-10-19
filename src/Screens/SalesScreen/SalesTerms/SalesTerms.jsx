import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTable from '../../../components/CustomTable/CustomTable'

//import Navebar from '../../../components/Navbar/Navbar'
 import SalesNavbar from '../SalesNavbar/SalesNavbar'



const SalesTerms = () => {

  const navigate = useNavigate();

    const handleCreatePage = () => {
      navigate('/AddSalesTeam');
    }

    const data = [
        {
            id:1,
            salesTeam:"sales",
            teamLeader:""
        },
        {
            id:2,
            salesTeam:"E-commerce",
            teamLeader:""
        },
        {
            id:3,
            salesTeam:"Point of sale",
            teamLeader:"Store Manager",
        }
    ]

    const column = [
        {label:"Sales Team" , name:"salesTeam"},
        {label:"Team Leader" , name:"teamLeader"},
    ]
  return (
    <div>
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <SalesNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Sales Teams"/>
      <CustomTable column={column} data={data} />
      
    </div>
    </div>
  )
}

export default SalesTerms;