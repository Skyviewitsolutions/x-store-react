import React from 'react'
import CustomTable from '../../../components/CustomTable/CustomTable'
import SalesNavbar from '../SalesNavbar/SalesNavbar'

const PromotionPrograms = () => {

    const handleCreatePage = () => {

    }
    const data = [
        {
            id:1,
            name:"Happy Hour"
        },{
            id:2,
            name:"5% discount",
        },
        {
            id:3,
            name:"Akun-20"
        }
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
      <SalesNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Promotion Programs"/>
      <CustomTable  column = {column} data={data} />
    </div>
    </div>
  )
}

export default PromotionPrograms