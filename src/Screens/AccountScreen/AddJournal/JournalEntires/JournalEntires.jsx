import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { toast, ToastContainer } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints';
import './JournalEntires.css';

const JournalEntires = (props) => {
  const {
    shortCode,setShortCode,nextNum,setNextNum,debitAcc,setDebitAcc,creditAcc,setCreditAcc,currency,setCurrency} =props
    const [curr , setCurr] = useState([]);

    console.log(currency,"currency here")

    const CurrencyUrl = endpoints.Currency.allCurrency;
    const getAuthtoken = localStorage.getItem("authtoken");
const userAuth = localStorage.getItem("userAuth");

    useEffect(() => {
      const formData = new FormData();
      formData.append("User_Authorization" , getAuthtoken)
      formData.append("User_AuthKey" , userAuth);
    axios.post(CurrencyUrl , formData)
    .then((res) => {
      if(res.data.status === true)
      {
        var val = res.data.data;
        const filterJournal = val.filter((itm,ind) => {
          return itm.DELETE_STATUS != "X"
        })
       setCurr(filterJournal);
      }
      else if(res.data.status === false)
      {
        toast(res.data.message,{type:"error"});
      }
    })
    .catch((err) => {
      console.log(err,"error")
    })
    },[])

  return (
    <div className='JournalEntiresCon'>
       <div className="journalENtiresFirst">
             <div className="FirstContent">
             <p>Short Code</p>
            <input type="text" value={shortCode} onChange={(e) => setShortCode(e.target.value)}/>
             </div>
             <div className="FirstContent">
             <p>Next Number</p>
            <input type="number" value={nextNum} onChange={(e) => setNextNum(e.target.value)} />
             </div>
       </div>
       <div className="journalEntiresSecond">
        <div className="SecondContent">
        <p>Default Debit Account</p>
            <select value={debitAcc} onChange={(e) => setDebitAcc(e.target.value)}>
                <option>Choose any one</option>
                <option value="	479100 Product Sales">	479100 Product Sales</option>
                <option value="100003 Security Deposit">100003 Security Deposit</option>
                <option value="100004 Un-Realized Collection">100004 Un-Realized Collection</option>
                <option value="100010 MAIN CASH RYD01">100010 MAIN CASH RYD01</option>
                <option value="100010 MAIN CASH RYD01">100010 MAIN CASH RYD01</option>
                </select>
        </div>
        <div className="SecondContent">
        <p>Default Credit Account</p>
            <select value={creditAcc} onChange={(e) => setCreditAcc(e.target.value)}>
                <option>Choose any one</option>
                <option value="110101001">110101001</option>
                <option value="110101002">110101002</option>
                <option value="110101003">110101003 </option>
                <option value="110101004">110101005</option>
                <option value="110101005">110101007</option>
                </select>
        </div>
       
        <div className="SecondContent">
        <p>Currency</p>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="">Choose any one</option>
                {
                  curr.map((item,index) => {
                    return(
                      <>
                      <option>{item.CURRENCY_UNIT}</option>
                      </>
                    )
                  })
                }
                </select>
        </div>
       
       </div>
       <ToastContainer/>
    </div>
  )
}

export default JournalEntires