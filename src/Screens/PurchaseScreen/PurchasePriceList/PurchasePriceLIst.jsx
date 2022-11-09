import React from 'react'
import CustomTable from '../../../components/CustomTable/CustomTable'
import PurchaseNavbar from '../PurchaseNavbar'

const PurchasePriceLIst = () => {

    const data = [
        {
            id:1,
            vendors:"EJAN TRADING ESTABLISHMENT",
            product:"[11109341] Coffee Brewer colombia 21gm كوفي بروير كولومبيا 21 جم",
            currency:"SAR",
            Quantity:"9.00",
            UOM:"units",
            price:"12.00",
        },
        {
            id:2,
            vendors:"Isam Kabbani & Partners",
            product:"[80113001] Victoria hummus 135gm حمص طحينة حدائق فكتوريا 135غ",
            currency:"SAR",
            Quantity:"0.00",
            UOM:"units",
            price:"1.560"
        }
    ]

    const column  = [
        {title:"Vendor" , name:"vendors"},
        {title:"Products" , name:"product"},
        {title:"Currency" , name:"currency"},
        {title:"Quantity" , name:"Quantity"},
        {title:"Unit Of Measurment" , name:"UOM"},
        {title:"Price" , name:"price"},
    ]

  return (
    <div>
        <PurchaseNavbar  showBelowMenu={true} title="Venodr Pricelists"/>
        <CustomTable data={data} column={column}/>
    </div>
  )
}

export default PurchasePriceLIst