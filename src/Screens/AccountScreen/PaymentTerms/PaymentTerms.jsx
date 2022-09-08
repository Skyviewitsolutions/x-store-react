import React from 'react';
import './PaymentTerms.css';
import CustomTable from '../../../components/CustomTable/CustomTable';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { useNavigate } from 'react-router-dom';
const PaymentTerms = (props) => {

  const navigate = useNavigate();
    
  const handleCreatePage= () => {
    navigate('/AddPayment')
  }

      const data = [
        {
        id:1,
        PaymentTerms:"Immediate Payment",
      },
        {
        id:2,
        PaymentTerms:"15 Days",
      },
        {
        id:3,
        PaymentTerms:"21 Days",
      },
        {
        id:4,
        PaymentTerms:"30 Days",
      },
        {
        id:5,
        PaymentTerms:"45 Days",
      },
    ]

    const column = [
        { label :'Payment Terms', name:'PaymentTerms'},
      ]
  return (
    <div>
       <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Payment Terms"/>
         <CustomTable  data={data } column={column}/>
    </div>
  )
}

export default PaymentTerms