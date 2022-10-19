import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../../components/CustomTable/CustomTable';
import SalesNavbar from '../SalesNavbar/SalesNavbar';

const ShippingMethods = () => {
  
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate('/AddShippingMethod')
  }
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
<SalesNavbar showBelowMenu={true}  title="Shipping Methods"  handleCreatePage={handleCreatePage}/>
<CustomTable column={column} data={data}/>
 </div>

    </>
  )
}

export default ShippingMethods;
