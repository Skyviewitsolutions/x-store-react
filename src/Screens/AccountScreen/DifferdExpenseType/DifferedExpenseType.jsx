import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import CustomTable from '../../../components/CustomTable/CustomTable'

const DifferedExpenseType = () => {
 
  const navigate = useNavigate();
    const data = [
        {
            id:1,
            AssetType:"rent",
            ParentCategory:"",
            Journal:"Deferred Charges",
            ComputationMethod:"Linear"
        }
    ]

    const column = [
        {label:"Asset Type" , name:"AssetType"},
        {label:"Parent Category" , name:"ParentCategory"},
        {label:"Journal" , name:"Journal"},
        {label:"Computation Method" , name:"ComputationMethod"},
    ]

    const handleCreatePage = () => {
      navigate('/AddDifferedType');
    }
  return (
    <div>
           <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Differed Expense Type"/>
           <CustomTable data={data} column={column}/>
    </div>
  )
}

export default DifferedExpenseType