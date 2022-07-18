import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import InventoryCard from '../../components/InventoryCard/InventoryCard'

const InventoryScreen = () => {
  return (<>
    <Navbar/>
    <div style={{display : "flex" ,width:"100%"}}>
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        
        
      
    </div>
    </>)
}

export default InventoryScreen;