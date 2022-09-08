import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import CustomTable from '../../../components/CustomTable/CustomTable';
import './Incometerms.css';
const Incometerms = () => {
   
    const navigate = useNavigate();
    const data = [
        {
            id:1,
            code:"EXW",
            name:"EX WORKS"
        },
        {
            id:2,
            code:"FCA",
            name:"FREE CARRIER"
        },
        {
            id:3,
            code:"FAS",
            name:"FREE ALONGSIDE SHIP"
        },
        {
            id:4,
            code:"FOB",
            name:"FREE ON BOARD"
        },
        {
            id:5,
            code:"CIF",
            name:"COST, INSURANCE AND FREIGHT"
        },
        {
            id:6,
            code:"CPT",
            name:"CARRIAGE PAID TO"
        },
    ]

    const column = [
        { label:'Code', name:'code'},
        {label:'Name', name:'name'}
    ]

   const handleCreatePage = () => {
        navigate('/AddIncoTerms')
    }
  return (
    <>
    <AccountNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="IncoTerms"/>
    <CustomTable data={data} column={column} />
    
    </>
  )
}

export default Incometerms