import React from 'react'
import './JournalEntires.css';

const JournalEntires = () => {
  return (
    <div className='JournalEntiresCon'>
       <div className="journalENtiresFirst">
             <div className="FirstContent">
             <p>Short Code</p>
            <input type="text" />
             </div>
             <div className="FirstContent">
             <p>Next Number</p>
            <input type="text" />
             </div>
       </div>
       <div className="journalEntiresSecond">
        <div className="SecondContent">
        <p>Default Debit Account</p>
            <select>
                <option>110101001 صندوق ادارة الرياض</option>
                <option>110101002 صندوق الزلفي</option>
                <option>110101003 الهفوفصندوق </option>
                <option>110101005 صندوق بيشة </option>
                <option>110101007 صندوق مكة</option>
                </select>
        </div>
        <div className="SecondContent">
        <p>Default Debit Account</p>
            <select>
                <option>110101001 صندوق ادارة الرياض</option>
                <option>110101002 صندوق الزلفي</option>
                <option>110101003 الهفوفصندوق </option>
                <option>110101005 صندوق بيشة </option>
                <option>110101007 صندوق مكة</option>
                </select>
        </div>
       
        <div className="SecondContent">
        <p>Currency</p>
            <select>
                <option>SAR</option>
                </select>
        </div>
       
       </div>
    </div>
  )
}

export default JournalEntires