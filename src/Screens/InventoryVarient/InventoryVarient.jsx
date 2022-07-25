import React from 'react';
import "./InventoryVarient.css";
import Navebar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import CustomTable from '../../components/CustomTable/CustomTable';

const InventoryVarient = () => {
  return (
    <div>
      <Navebar />
      <div className="container-fluid PROVAR">
        <div className="PVMain">
          
          <div className="pvmleft">
         
            <Sidebar/>
            </div>
          <div className="pvmRight">
         
            <CustomTable/>
            </div>
            </div>
          </div>
        </div>
    
  )
}

export default InventoryVarient