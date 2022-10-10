import React from 'react'
import CustomTable from '../../../components/CustomTable/CustomTable';
import SalesNavbar from '../SalesNavbar/SalesNavbar';

const ShippingMethods = () => {
  const column = [
    {label:"Delivery Methods" , name:"deliveryMethods"},
    {label:"Provider" , name:"provider"},
];
const data = [
  {
      id:1,
      deliveryMethods:"Free delivery charges",
      provider:"Fixed Price"
  },
]

  return (
    <>
 <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
<SalesNavbar showBelowMenu={true}  title="Shipping Methods"/>
<CustomTable column={column} data={data}/>
 </div>

    </>
  )
}

export default ShippingMethods;
