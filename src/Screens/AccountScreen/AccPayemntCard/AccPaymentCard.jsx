import React from 'react'
import './AccPaymentCard.css';
import PaymentCard from '../../../components/Payment Acquirers/PaymentCard';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
const AccPaymentCard = () => {
  return(
    <>
    <AccountNavbar showBelowMenu={true}/>
    <div className='PaymentCardContainer'>
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
    </div>
    </>
  )
}

export default AccPaymentCard