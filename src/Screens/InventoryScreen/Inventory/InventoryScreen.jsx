import React from 'react';
import "./InventoryScreen.css"
import Navebar from '../../../components/Navbar/Navbar';
import InventoryCard from '../../../components/InventoryCard/InventoryCard'

const InventoryScreen = () => {
  return (<>
  <div className="inveScren">
    <Navebar title="Inventory"/>
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