import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import './AccTaxGroup.css';
const AccTaxGroup = () => {
 
    const naviagte =  useNavigate();
    const data = [
        {
            id:1,
            Name:"Taxes",
            TaxCurrentAccount1:"",
            TaxCurrentAccount2:"",
            AdvanceTaxAcc:""
        },
        {
            id:2,
            Name:"Resevation of the owner / advance payment",
            TaxCurrentAccount1:"",
            TaxCurrentAccount2:"",
            AdvanceTaxAcc:""
        },
        {
            id:3,
            Name:"Advance Payment",
            TaxCurrentAccount1:"",
            TaxCurrentAccount2:"",
            AdvanceTaxAcc:""
        },
        {
            id:4,
            Name:"Primary Reservation",
            TaxCurrentAccount1:"",
            TaxCurrentAccount2:"",
            AdvanceTaxAcc:""
        },
    ]

    const column = [
        { label : "Name" , name :"Name"},
        { label : "Tax Curent Account(Payable)" , name:"TaxCurrentAccount1"},
        { label : "Tax Current Account(Receivable)", name:"TaxCurrentAccount2"},
        {label : "Advance Tax Payment Account" , name:"AdvanceTaxAcc"},
    ]

    const handleCreatePage = () => {
        naviagte('/AddAccTaxGroup');
    }
  return (
    <div>
        <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Account Tax Group"/>
        <CustomTable data={data} column={column}/>
    </div>
  )
}

export default AccTaxGroup