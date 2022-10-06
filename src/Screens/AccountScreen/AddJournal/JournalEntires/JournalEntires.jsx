import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { endpoints } from '../../../../services/endpoints';
import './JournalEntires.css';

const JournalEntires = (props) => {
  const {
    shortCode,setShortCode,nextNum,setNextNum,debitAcc,setDebitAcc,creditAcc,setCreditAcc,currency,setCurrency} =props
    const [curr , setCurr] = useState([]);

    const CurrencyUrl = endpoints.Currency.allCurrency;

    useEffect(() => {
    axios.post(CurrencyUrl)
    .then((res) => {
      if(res.data.status === true)
      {
       setCurr(res.data.data);
      }
      else if(res.data.status === false)
      {
        alert(res.data.message);
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
            <input type="text" value={nextNum} onChange={(e) => setNextNum(e.target.value)} />
             </div>
       </div>
       <div className="journalEntiresSecond">
        <div className="SecondContent">
        <p>Default Debit Account</p>
            <select value={debitAcc} onChange={(e) => setDebitAcc(e.target.value)}>
                <option value=""></option>
                <option value="110101001">110101001</option>
                <option value="110101002">110101002</option>
                <option value="110101003">110101003</option>
                <option value="110101004">110101004</option>
                <option value="11010105">110101005</option>
                </select>
        </div>
        <div className="SecondContent">
        <p>Default Credit Account</p>
            <select value={creditAcc} onChange={(e) => setCreditAcc(e.target.value)}>
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
                <option value=""></option>
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
    </div>
  )
}

export default JournalEntires