import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'

const AnalyticAccountGroups = () => {

    const navigate = useNavigate()
    const data = [
        {
            id:1,
            displayName:"Macca Projects"
        },
        {
            id:2,
            displayName:"Yanbae Projects"
        },
        {
            id:3,
            displayName:"Al Ahsa Projects"
        },
        {
            id:4,
            displayName:"Central Region Projects"
        },
        {
            id:5,
            displayName:"Al Baha Projects"
        },
    ]

    const column = [
        {label:"display Name" , name:"displayName"}
    ]




    const handleCreatePage = () => {
   navigate('/AddAnalyticAccountGroup');
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true}  handleCreatePage={handleCreatePage} title="Analytic Account Group"/>
        <CustomTable  data={data} column={column}/>
    </div>
  )
}

export default AnalyticAccountGroups