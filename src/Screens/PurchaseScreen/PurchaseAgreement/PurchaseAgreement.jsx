import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTable from '../../../components/CustomTable/CustomTable'
import PurchaseNavbar from '../PurchaseNavbar'

const PurchaseAgreement = () => {

    const navigate = useNavigate()
    const handleCreatePage = () => {
        navigate("/AddPurchaseAgreement");
      };


    const data = [
        {
            id:1,
            reference:"CR#1010234010/VAT#310807391400003",
            PurchaseRepresentative:"Master Data",
            orderingDate:"",
            agreementDeadline:"",
            sourceDocument:"",
            status:"Draft",
        },
      
        {
            id:2,
            reference:"CR#1010234010/VAT#310807391400003",
            PurchaseRepresentative:"Master Data",
            orderingDate:"",
            agreementDeadline:"",
            sourceDocument:"",
            status:"Draft",
        },
      
        {
            id:3,
            reference:"CR#1010234010/VAT#310807391400003",
            PurchaseRepresentative:"Master Data",
            orderingDate:"",
            agreementDeadline:"",
            sourceDocument:"",
            status:"Draft",
        },
    ]

    const column = [
        {title:"Reference" , name:"reference"},
        {title:"Purchase Representative" , name:"PurchaseRepresentative"},
        {title:"Ordering Date" , name:"orderingDate"},
        {title:"Agreement Deadline" , name:"agreementDeadline"},
        {title:"Source Document" , name:"sourceDocument"},
        {title:"Status" , name:"status"},
    ]
  return (
    <div>
         <PurchaseNavbar showBelowMenu={true} title="Purchase Agreements" handleCreatePage={handleCreatePage}/>
         <CustomTable data={data} column={column}/>
    </div>
  )
}

export default PurchaseAgreement