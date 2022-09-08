import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable';
import './TaxName.css';


const TaxName = () => {

    const navigate = useNavigate();
const data = [
    {
      id:1,
      TaxName:"VAT Goods Purchases-STD",
      Taxscope:"Purchases",
      LabelOnInvoices:"15%"  
    },
    {
      id:2,
      TaxName:"	Reservation of the owner",
      Taxscope:"Purchases",
      LabelOnInvoices:"Reservation of the owner"  
    },
    {
      id:3,
      TaxName:"advance payment",
      Taxscope:"Purchases",
      LabelOnInvoices:"advance payment"  
    },
    {
      id:4,
      TaxName:"Primary Reservation",
      Taxscope:"Purchases",
      LabelOnInvoices:"Primary Reservation"  
    },
    {
      id:5,
      TaxName:"Sales VAT-STD",
      Taxscope:"Purchases",
      LabelOnInvoices:"15%"  
    }, 
]

const column = [{label:"TaxName",name:"TaxName"},
                 {label:"TaxScope",name:"Taxscope"},
                 {label:"Label on Invoices" , name:"LabelOnInvoices"}
]
 const handleCreatePage = () => {
    navigate('/AddTaxName');
 }
  return (
    <div>
        <AccountNavbar  showBelowMenu={true} handleCreatePage={handleCreatePage} title="TaxName" />
        <CustomTable data={data} column={column} />
    </div>
  )
}

export default TaxName