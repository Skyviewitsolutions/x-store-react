import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTable from '../../../components/CustomTable/CustomTable'
import PurchaseNavbar from '../PurchaseNavbar'

const PurchaseAgreementTypes = () => {

  const navigate = useNavigate()
  const handleCreatePage = () => {
    navigate("/AddPurchaseAgreementType");
  };
  
    const data = [
        {
            id:"1",
            AgreementType:"Call for Tender",
            AgreementSelection:"Select multiple RFQ",
        },
        {
            id:"2",
            AgreementType:"Blanket Order",
            AgreementSelection:"Select multiple RFQ",
        }
    ]

    const column = [
        {title:"Agreement Type" , name:"AgreementType"},
        {title:"Agreement Selection" , name:"AgreementSelection"}
    ]
  return (
    <div>
      <PurchaseNavbar showBelowMenu={true} title="Purchase Agreement Types" handleCreatePage={handleCreatePage}/>
      <CustomTable data={data} column={column}/>
    </div>
  )
}

export default PurchaseAgreementTypes