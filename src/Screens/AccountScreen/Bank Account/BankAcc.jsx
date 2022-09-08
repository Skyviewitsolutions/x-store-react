import React from 'react'
import './BankAcc.css'
import CustomTable from '../../../components/CustomTable/CustomTable'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import { useNavigate } from 'react-router-dom'
const BankAcc = (props) => {

    const navigate = useNavigate();

    const handleCreatePage = () => {
        navigate('/AddBankAcc')
    }
    const data = [
        {
            id:1,
            JournalName:"Al Rajhi Bank, Mecca",
            AccountNumber:""
        },
        {
            id:2,
            JournalName:"Saudi National Bank / Account No. 6590000394006",
            AccountNumber:""
        },
        {
            id:3,
            JournalName:"Al Rajhi Bank Yanbu",
            AccountNumber:""
        },
        {
            id:4,
            JournalName:"Arab Bank",
            AccountNumber:"108095119960018"
        },
        {
            id:5,
            JournalName:"Salary Journal",
            AccountNumber:""
        }
    ]
    const column = [
        { label :'Journal Name', name:'JournalName'},
        { label :'Account Number', name:'AccountNumber'},
      ]
  return (
    <>
     <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Bank Account"/>
    <CustomTable  data={data} column={column}/>
    </>
  )
}

export default BankAcc