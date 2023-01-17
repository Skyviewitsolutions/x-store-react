import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from 'react'
import SalesNavbar from '../../SalesNavbar/SalesNavbar';
import './AddSalesTerms.css';
const AddSalesTerms = () => {
    const [selectedValue, setSelectedValue] = useState();
    const [teamMembers , setTeamMembers] = useState();
    const options = [
        { name: "VAT Goods Purchases-STD (Purchases)", id: 1 },
        { name: "Purchasing", id: 2 },
        { name: "Purchasing", id: 2 },
        { name: "Purchasing", id: 3 },
        { name: "Sales VAT-STD (Sales)", id: 4 },
        { name: "Sales VAT-Zero Rated (Sales)", id: 5 },
      ];

      const onSelect1 = (selectedList, selectedItem) => {
        setTeamMembers(selectedList);
      };
    
      const onRemove1 = (selectedList, removedItem) => {
        setTeamMembers(selectedList);
      };
  return (
    
    <div>
        <SalesNavbar  showBelowMenu={true}  title="Sales Teams" showCanelBtn={true}/>
      <div className="SalesTeamMainCon">
        <div className="SalesTeamCon">
        <div className="salesTeamName">
            <p>Sales Team</p>
            <input type="text" placeholder='Sales Team Name....' />
        </div>
        <div className="SalesTeamQuo">
            <input type="checkbox" />
            <p>Quotations</p>
        </div>
        <div className="salesteam">
            <p>Team Leader</p>
            <select>
                <option>choose any one</option>
                <option>Account 02</option>
                <option>Accountant-Ryd</option>
                <option>CRUH 01</option>
                <option>CRUH 02</option>
                <option>CRUH 03</option>
                <option>CRUH 04</option>
                <option>Data Entry</option>
            </select>
        </div>
        <div className="salesteam">
            <p>Invoicing Target</p>
            <input type="text"/>
        </div>
        <div className="SalesTermMultiselect">
              <p>Team Members</p>
              <Multiselect
                className="SalesTerMultiselect"
                options={options} // Options to display in the dropdown
                selectedValues={teamMembers} // Preselected value to persist in dropdown
                onSelect={onSelect1} // Function will trigger on select event
                onRemove={onRemove1} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default AddSalesTerms