import React from 'react';
import "./InventoryScreen.css"
import Navbar from "../../components/Navbar/Navbar"
import InventoryCard from '../../components/InventoryCard/InventoryCard'

const InventoryScreen = () => {
  return (<>
  <div className="inveScren">
    <Navbar/>
    <div className="inveBox">
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
         
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
        <InventoryCard />
         
        
        
      
    </div>
    </div>
    </>)
}

export default InventoryScreen;