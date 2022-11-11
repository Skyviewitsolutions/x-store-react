import React from 'react'
import Vendors from '../../components/VendorsScreen/VendorsCard/Vendors'
import PurchaseNavbar from './PurchaseNavbar'
 
const PurchaseVendor = () => {
  return (
    <div>
      <PurchaseNavbar showBeloMenu={true} title="Vendor"/>
      <Vendors/>
    </div>
  )
}

export default PurchaseVendor