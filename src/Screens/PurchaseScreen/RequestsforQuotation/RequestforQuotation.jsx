import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTable from '../../../components/CustomTable/CustomTable'
import PurchaseNavbar from '../PurchaseNavbar'
import './AddRequestQuotation/AddRequestQuotation.css'

const RequestforQuotation = () => {

     const navigate = useNavigate();
     const handleCreatePage = () => {
       navigate("/AddRequestQuotation");
     };
  

    const data = [
        {
             id:1,
             refrence:"P03577",
             orederDate:"23/10/2022 22:27:13",
             vendor:"Akun Logistics",
             purchaseRepresentive:"Account-Ryd",
             sourceDocument:"",
             total:"24,188.78 SR",
             status:"Locked",
        },
        {
             id:2,
             refrence:"P03577",
             orederDate:"23/10/2022 22:27:13",
             vendor:"Akun Logistics",
             purchaseRepresentive:"Account-Ryd",
             sourceDocument:"",
             total:"24,188.78 SR",
             status:"Locked",
        },
        {
             id:3,
             refrence:"P03577",
             orederDate:"23/10/2022 22:27:13",
             vendor:"Akun Logistics",
             purchaseRepresentive:"Account-Ryd",
             sourceDocument:"",
             total:"24,188.78 SR",
             status:"Locked",
        },
        {
             id:4,
             refrence:"P03577",
             orederDate:"23/10/2022 22:27:13",
             vendor:"Akun Logistics",
             purchaseRepresentive:"Account-Ryd",
             sourceDocument:"",
             total:"24,188.78 SR",
             status:"Locked",
        },
    ]

    const column = [
        {title:"Refrence" , name:"refrence"},
        {title:"Order Date" , name:"orederDate"},
        {title:"Vendor" , name:"vendor"},
        {title:"Purchase Representative" , name:"purchaseRepresentive"},
        {title:"Source Document" , name:"sourceDocument"},
        {title:"Total" , name:"total"},
        {title:"Status" , name:"status"}
    ]
  return (
    <div>
        <PurchaseNavbar showBelowMenu={true} title="Requests for Quotation" handleCreatePage={handleCreatePage}/>
        <CustomTable data={data} column={column}/>
    </div>
  )
}

export default RequestforQuotation