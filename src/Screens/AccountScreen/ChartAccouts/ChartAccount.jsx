import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import Navebar from '../../../components/Navbar/Navbar';
import './ChartAccount.css';

function ChartAccount(props) {
   
  const navigate =  useNavigate()

  const handleCreatePage = () => {
    navigate('/AddChartAccount')
  }
  const data = [
    {
      id: "1",
      Code: "110101001",
      Name:"Riyadh Management Fund",
      Type:"	Bank and Cash",
      AccountCurrency:	"SAR",
    },
    {
      id: "2",
      Code: "110101002",
      Name:"zalfi box",
      Type:"	Bank and Cash",
      AccountCurrency:	"SAR",
    },
    {
      id: "3",
      Code: "110101003",
      Name:"Hofuf Fund",
      Type:"	Bank and Cash",
      AccountCurrency:	"SAR",
    },
    {
      id: "4",
      Code: "110101004",
      Name:"patio box",
      Type:"	Bank and Cash",
      AccountCurrency:	"SAR",
    },
    {
      id: "5",
      Code: "110101005",
      Name:"Bisha Box",
      Type:"	Bank and Cash",
      AccountCurrency:	"SAR",
    },
    {
      id: "6",
      Code: "110101006",
      Name:"Yanbu box",
      Type:"	Bank and Cash",
      AccountCurrency:	"SAR",
    },
  ]
  const column = [
    { label :'Code', name:'Code'},
    { label :'Name', name:'Name'},
    { label :'Type', name:'Type'},
    { label :'AccountCurrency', name:'AccountCurrency'},
  ]
  return (
    <div>
     <AccountNavbar  showBelowMenu={true} handleCreatePage={handleCreatePage} title = "Chart of Account"/>
    <CustomTable data={data} column={column} />
    </div>
  )
}

export default ChartAccount