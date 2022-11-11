import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTable from '../../../components/CustomTable/CustomTable'
import PurchaseNavbar from '../PurchaseNavbar'

const PurchaseOrder = () => {

    const navigate = useNavigate()
    const handleCreatePage = () => {
        navigate("/AddPurchaseOrders");
      };

    const data = [
        {
            id:1,
            Reference:"P03577",
            confirmationDate:'23/10/2022 22:27:13',
            vendor:"Akun Logistics",
            ReceiptDate:"",
            PurchaseRepresentative:"Account-Ryd",
            sourceDocument:"",
            total:"24,188.78 SR",
            BillingStatus:"Fully Billed",
        },
        {
            id:2,
            Reference:"P03577",
            confirmationDate:'23/10/2022 22:27:13',
            vendor:"Akun Logistics",
            ReceiptDate:"",
            PurchaseRepresentative:"Account-Ryd",
            sourceDocument:"",
            total:"24,188.78 SR",
            BillingStatus:"Fully Billed",
        },
        {
            id:3,
            Reference:"P03577",
            confirmationDate:'23/10/2022 22:27:13',
            vendor:"Akun Logistics",
            ReceiptDate:"",
            PurchaseRepresentative:"Account-Ryd",
            sourceDocument:"",
            total:"24,188.78 SR",
            BillingStatus:"Fully Billed",
        },
    ]

    const column = [
        {title:"Reference" , name:"Reference"},
        {title:"Confirmation Date" , name:"confirmationDate"},
        {title:"Vendor" , name:"vendor"},
        {title:"Receipt Date" , name:"ReceiptDate"},
        {title:"Purchase Representative" , name:"PurchaseRepresentative"},
        {title:"Source Document" , name:"sourceDocument"},
        {title:"Total" , name:"total"},
        {title:"Billing Status" , name:"BillingStatus"},
        
    ]
  return (
    <div>
        <PurchaseNavbar showBelowMenu={true} title="Purchase Orders" handleCreatePage={handleCreatePage}/>
        <CustomTable data={data}  column = {column}/>
    </div>
  )
}

export default PurchaseOrder