import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../../components/CustomTable/CustomTable'
import EmployeeNavbar from '../EmplyoeeNavbar/EmployeeNavbar'

const JobPosition = () => {

    const navigate = useNavigate();

    const handleCreatePage = () => {
      navigate('/AddJobPosition');
    }
    const data = [
        {
            id:1,
            JobPosition:"IT Consultant",
            DepartmentName:"HEAD OFFICE / Administration",
            Expectednew:"ABDUL RAHMAN KARNAD"
        },
        {
            id:2,
            JobPosition:"Cashier",
            DepartmentName:"HEAD OFFICE / Administration",
            Expectednew:"ABDUL RAHMAN KARNAD"
        },
        {
            id:3,
            JobPosition:"Branch Manager",
            DepartmentName:"HEAD OFFICE / Administration",
            Expectednew:"ABDUL RAHMAN KARNAD"
        },
    ]

    const column = [
        {label:"Job Position" , name:"JobPosition"},
        {label:"Department" , name:"DepartmentName"},
        {label:"Expected New Employees" , name:"Expectednew"},
    ]
  return (
    <div>
        <EmployeeNavbar showBelowMenu={true}  title="Job Position" handleCreatePage={handleCreatePage}/>
        <CustomTable data={data} column={column}/>
    </div>
  )
}

export default JobPosition