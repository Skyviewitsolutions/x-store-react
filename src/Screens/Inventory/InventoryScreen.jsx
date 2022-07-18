import React from 'react'
import Navebar from "../../components/Navebar/Navbar"
import InventoryCard from '../../components/InventoryCard/InventoryCard'

const InventoryScreen = () => {
  return (<>
    <Navebar/>
    <div style={{display : "flex" ,width:"100%"}}>
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        
      
    </div>
    </>)
}

export default InventoryScreen;