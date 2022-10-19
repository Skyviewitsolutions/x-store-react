import React from 'react'
import CustomTable from '../../../components/CustomTable/CustomTable'
import SalesNavbar from '../SalesNavbar/SalesNavbar'

const CouponPrograms = () => {
    const handleCreatePage = () => {

    }
    const data = [
        {
            id:1,
            name:"5% discount coupon"
        },
    ]

    const column = [
        {label:"Name", name:"name"},
        {
            label: "Action",
            name:"ID",
            options:{
                customBodyRender:(value, tableMeta, updateValue) => {
                    return(
                        <>
                        <div style={{display:"flex",alignItems:"center",marginLeft:"20px"}}>
                        <input type="checkbox" checked={true}/>
                        </div>
                        </>
                    )
                }
            }
        }
    ]
   
  return (
    <div>
 <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <SalesNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Coupon Programs"/>
      <CustomTable  column = {column} data={data} />
    </div>
    </div>
  )
}

export default CouponPrograms