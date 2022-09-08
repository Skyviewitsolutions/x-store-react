import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import './Currencies.css';
const Currencies = () => {
    const navigate = useNavigate()

    const handleCreatePage = () => {
        navigate('/AddCurrencies');
    }

    const data = [
        {
            id:1,
            Currencies:"SAR",
            Symbol:"SAR",
            Date:"",
            CurrentRate:"1.000000000000"
        },
        {
            id:2,
            Currencies:"AED",
            Symbol:"AED",
            Date:"",
            CurrentRate:"1.000000000000"
        },
        {
            id:3,
            Currencies:"AFN",
            Symbol:"Afs",
            Date:"",
            CurrentRate:"1.000000000000"
        },
        {
            id:4,
            Currencies:"ALL",
            Symbol:"L",
            Date:"",
            CurrentRate:"1.000000000000"
        },
        {
            id:5,
            Currencies:"AMD",
            Symbol:"դր.",
            Date:"",
            CurrentRate:"1.000000000000"
        },
    ]

    const column = [{label:"Currencies" , name:"Currencies"},
              {label:"Symbol" , name:"Symbol"},
              {label:"Date" , name:"Date"},
              {label:"CurrentRate" , name:"CurrentRate"}
]
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Currencies"/>
        <CustomTable data={data} column={column} />
    </div>
  )
}

export default Currencies