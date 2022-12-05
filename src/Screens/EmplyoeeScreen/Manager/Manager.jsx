import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTable from '../../../components/CustomTable/CustomTable'
import EmployeeNavbar from '../EmplyoeeNavbar/EmployeeNavbar'

const Manager = () => {
   
    const navigate = useNavigate()
    const handleCreatePage = () => {
        navigate('/AddManager');
      }

    const data = [
        {
            id:1,
          managerName:"Shuaub Zafar "  ,
          jobPosition:"Managing Director"
        },{
            id:2,
            managerName:"Zubair Sir",
            jobPosition:"Chief Excecutive Officer"
        },
    ]

    const column =[
        {title:"Manager Name", name:"managerName"},
        {title:"Job Position", name:"jobPosition"},

    ]
  return (
    <div>
        <EmployeeNavbar showBelowMenu={true} title="Manager" handleCreatePage={handleCreatePage}/>
        <CustomTable data={data} column={column} />
    </div>
  )
}

export default Manager