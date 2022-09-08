import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable';
const JournalGroup = () => {

    const navigate = useNavigate();
    const data = [
        {id:1,
          JournalGroup:"",
          Excludedjournals:"",
        }
    ]

    const column = [
        {label:"Journal Group", name:"JournalGroup"},
        {label:"Excluded Journals" , name:"Exccludedjournals"}
    ]

    const  handleCreatePage = () => {
      navigate('/AddJournalGroup')
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true}  handleCreatePage={handleCreatePage} title="Journal Group"/>
        <CustomTable column={column} data={data}/>
    </div>
  )
}

export default JournalGroup