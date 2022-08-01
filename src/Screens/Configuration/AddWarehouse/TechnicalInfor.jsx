import React from 'react'
import './TechnicalInfor.css';
const TechnicalInfor = () => {
  return (
    <div className='TechnicalInforCon'>
          <div className="tech1">
            <h4>Locations</h4>
            <div className="techdetails">
               <p>Warehouse view Location</p>
               <span>RIMS</span>
            </div>
            <div className="techdetails">
               <p>Location Stock</p>
               <span>RIPMS/Riyadh Projects Materials Store</span>
            </div>
            <div className="techdetails">
               <p>Transit Location</p>
               <span>Physical Locations/Alenjaz Trading & Constraction: Transit Location</span>
            </div>
            <div className="techdetails">
               <p>Input Location</p>
               <span>RIPMS/الدخول</span>
            </div>
            <div className="techdetails">
               <p>Quality Control Location</p>
               <span>RIPMS/مراقبة الجودة</span>
            </div>
            <div className="techdetails">
               <p>Packing Location</p>
               <span>RRIPMS/منطقة التعبئة</span>
            </div>
            <div className="techdetails">
               <p>Output Location</p>
               <span>RIPMS/المخرجات</span>
            </div>
          </div>
          <div className="tech2">
          <h4>Operation Types</h4>
          <div className="techdetails">
               <p>In Type</p>
               <span>Riyadh Projects Materials Store: Receipts</span>
            </div>
          <div className="techdetails">
               <p>Internal Type</p>
               <span>Riyadh Projects Materials Store: Internal Transfers</span>
            </div>
          <div className="techdetails">
               <p>Pick Type</p>
               <span>Riyadh Projects Materials Store: استلام</span>
            </div>
          <div className="techdetails">
               <p>Pack Type</p>
               <span>Riyadh Projects Materials Store: حزم</span>
            </div>
          <div className="techdetails">
               <p>Out Type</p>
               <span>Riyadh Projects Materials Store: Delivery Orders</span>
            </div>
          </div>
    </div>
  )
}

export default TechnicalInfor