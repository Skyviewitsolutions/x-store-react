import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomTable from '../../../components/CustomTable/CustomTable'
import SalesNavbar from '../SalesNavbar/SalesNavbar'

const Pricelists = () => {

    const navigate = useNavigate();
    const data = [
        {
            id:1,
            PricelistsName:"Public Pricelist",
            DiscountPolicy:"Duscount included in the price",
            Currency:"SAR"
        },
        {
            id:2,
            PricelistsName:"Akun-20",
            DiscountPolicy:"Duscount included in the price",
            Currency:"SAR"
        },
        {
            id:3,
            PricelistsName:"10% Off",
            DiscountPolicy:"Duscount included in the price",
            Currency:"SAR"
        },
        {
            id:4,
            PricelistsName:"WA Pricelist",
            DiscountPolicy:"Duscount included in the price",
            Currency:"SAR"
        },
        {
            id:5,
            PricelistsName:"Akun-10",
            DiscountPolicy:"Duscount included in the price",
            Currency:"SAR"
        },
    ]

    const column = [
        {label:"PriceList Name",name:"PricelistsName"},
        {label:"Discount Policy",name:"DiscountPolicy"},
        {label:"Currency",name:"Currency"},
    ]

    const handleCreatePage = () => {
        navigate('/AddPricelists')
    }
  return (
    <div>
       <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <SalesNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="PriceLists"/>
      <CustomTable column={column} data={data} />
      
    </div>
    </div>
  )
}

export default Pricelists