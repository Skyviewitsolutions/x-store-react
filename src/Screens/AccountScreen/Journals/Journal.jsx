import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import Navebar from '../../../components/Navbar/Navbar';
import './Journals.css';
const Journal = () => {

    const navigate = useNavigate()

    const handleCreatePage= () => {
        navigate('/AddJournal')
    }
    const data = [
        {
        id:1,
        JournalName:"Al Rajhi Bank, Mecca",
        Type:"Bank",
        JournalGroups:"",
    },
      {
        id:2,
        JournalName:"Saudi National Bank / Account No. 6590000394006",
        Type:"Bank",
        JournalGroups:"",
    },
        {
        id:3,
        JournalName:"The custody of Abdulaziz Al-Asiri",
        Type:"Cash",
        JournalGroups:"",
    },
        {
        id:4,
        JournalName:"Iddah / Asil Muhammad Ali Alwan - 11037",
        Type:"Cash",
        JournalGroups:"",
    },
        {
        id:5,
        JournalName:"Salah Massad Jehish File - 1458",
        Type:"Cash",
        JournalGroups:"",
    }
]
const column = [
    { label :'JournalName', name:'JournalName'},
    { label :'Type', name:'Type'},
    { label :'JournalGroups', name:'JournalGroups'},
  ]
  return (
    <div>
         <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Journal"/>
        <CustomTable data={data} column={column} />
    </div>
  )
}

export default Journal