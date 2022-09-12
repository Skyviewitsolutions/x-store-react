import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import { endpoints } from '../../../services/endpoints';
import './Currencies.css';
const Currencies = () => {
    const navigate = useNavigate()

    const handleCreatePage = () => {
        navigate('/AddCurrencies');
    }

   const [currencies , setCurrencies] = useState([]);
   const CurrenciesAllUrl = endpoints.Currency.allCurrency;
    
   useEffect(() => {
    axios.post(CurrenciesAllUrl)
    .then((res) => {
       if(res.data.status === true)
       {
        setCurrencies(res.data.data);
       }
       else if(res.data.status === false)
       {
        alert(res.data.message);
       }
    })
    .catch((err) => {
        console.log(err,"error");
    })
   },[])



    const column = [{label:"Currencies" , name:"CURRENCY"},
              {label:"Symbol" , name:"CURRENCY_UNIT"},
              {label:"Date" , name:"CREATE_DATE"},
              {label:"CurrentRate" , name:"CURRENCY_RATE"}
]
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Currencies"/>
        <CustomTable data={currencies} column={column} />
    </div>
  )
}

export default Currencies