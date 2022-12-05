import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../../components/CustomTable/CustomTable'
import EmployeeNavbar from '../EmplyoeeNavbar/EmployeeNavbar'

const Department = () => {

    const navigate = useNavigate();

    const handleCreatePage = () => {
      navigate('/AddDepartment');
    }
    const data = [
        {
            id:1,
            DepartmentName:"HEAD OFFICE / Administration",
            Manager:"ABDUL RAHMAN KARNAD"
        },
        {
            id:2,
            DepartmentName:"HEAD OFFICE / Administration",
            Manager:"ABDUL RAHMAN KARNAD"
        },
        {
            id:3,
            DepartmentName:"HEAD OFFICE / Administration",
            Manager:"ABDUL RAHMAN KARNAD"
        },
    ]

    const column = [
        {label:"Department Name" , name:"DepartmentName"},
        {label:"Manager" , name:"Manager"},
    ]

  return (
    <div>
        <EmployeeNavbar showBelowMenu={true} title="Department" handleCreatePage={handleCreatePage}/>
        <CustomTable data={data} column={column} />
    </div>
  )
}

export default Department