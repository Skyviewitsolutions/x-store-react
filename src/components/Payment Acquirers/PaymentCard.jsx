import React from 'react'
import './PaymentCard.css';
import notes from "../../assets/Images/notes.png";
const  PaymentCard = () => {
  return (
    <>
    <div className="PaymentCardcon">
      <div className="Paymentcard">
      <div className="PaymentCardContent">
        <p>Wire Transfer</p>
        <span>Provide instructions to customers so that they can pay their orders manually.</span>
        </div>
        <div className="notesimg">
            <img src={notes}  />
        </div>
      </div>
      <div> <button className='Enablebtn'>Enabled</button></div>
    </div>
    
    </>
  )
}

export default PaymentCard