import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../../../components/CustomTable/CustomTable';
import SalesNavbar from '../../SalesNavbar/SalesNavbar';

const Quotations = () => {

  const navigate = useNavigate();

    const handleCreatePage = () => {
         navigate('/AddQuotation')
    }
    const data = [
        {
            id:1,
            OrderNumber:"S00200",
            OrderDate:"03/02/2022 16:12:14",
            DeliveryDate:"",
            ExpectedDate:"03/02/2022 16:12:14",
            customer:"Akun Logistics",
            SalesPersons:"Accountant-Ryd",
            total:"2,896.62 SR",
            InvoiceStatus:"Quotations"
        },
        {
            id:2,
            OrderNumber:"S00225",
            OrderDate:"07/08/2022 17:16:19",
            DeliveryDate:"",
            ExpectedDate:"19/08/2022 17:16:19",
            customer:"Sampling & Testing",
            SalesPersons:"Accountant-Ryd",
            total:"0.00 SR",
            InvoiceStatus:"Quotations"
        },
    ]
    const column = [
        {label:"Order Number",name:"OrderNumber"},
        {label:"Order Date",name:"OrderDate"},
        {label:"Delivery Date",name:"DeliveryDate"},
        {label:"Expected Date",name:"ExpectedDate"},
        {label:"Customer",name:"customer"},
        {label:"SalesPersons",name:"SalesPersons"},
        {label:"Total",name:"total"},
        {label:"Status",name:"InvoiceStatus"},
    ]
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <SalesNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Quotations"/>
      <CustomTable column={column} data={data} />
      
    </div>
    </div>
  )
}

export default Quotations