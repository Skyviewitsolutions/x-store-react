import React,{useState} from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import './AddChartAccount.css';
import { FaList,FaExternalLinkAlt } from 'react-icons/fa';
import Multiselect from "multiselect-react-dropdown";
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
const AddChartAccount = () => {
    const [selectedValue, setSelectedValue] = useState();
    const options = [
        { name: "VAT Goods Purchases-STD (Purchases)", id: 1 },
        { name: "Purchasing", id: 2 },
        { name: "Purchasing", id: 2 },
        { name: "Purchasing", id: 3 },
        { name: "Sales VAT-STD (Sales)", id: 4 },
        { name: "Sales VAT-Zero Rated (Sales)", id: 5 },
      ];
    const option = [
        { name: "Operating Activities", id: 1 },
        { name: "Financing Activities", id: 2 },
        { name: "Investing & Extraordinary Activities", id: 3 },
      ];
      const onSelect = (selectedList, selectedItem) => {};

      const onRemove = (selectedList, removedItem) => {};
  return (
    <>
     <AccountNavbar  showBelowMenu={true} title="chart of Account"/>
    <div className="Accmaincon">
      <div className='AddChartAccountContainer'>
        <div className="AddChartAccountHead">
            <div className="AddAccounthead1">
            <FaList
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddChartAccText">
              <p>journal Item</p>
            </div>
          </div>
        </div>
        <div className="AddChartAccountContent"> 
            <div className="AddAccountCon1">
             <p>Code</p>
            <input type="text" />
            </div>
            <div className="AddAccountCon1">
             <p>Name</p>
            <input type="text" />
            </div>  
            <div className="AddAccountCon1">
             <p>Type</p>
           <select>
            <option>Receivable</option>
            <option>Bank and Cash</option>
            <option>Current Assets</option>
            <option>Non-current Assets</option>
            <option>Prepayments</option>
            <option>Fixed Assets</option>
            <option>Payable</option>
            <option>Credit Card</option>
            <option>Current Liabilities</option>
            <option>Non-current Liabilities</option>
           </select>
            </div> 
            <div className="AddChartAccountMultiselect">
          <p>Default Taxes</p>
          <Multiselect
            className="AddChartAccmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div> 
            <div className="AddChartAccountMultiselect">
          <p>Tags</p>
          <Multiselect
            className="AddChartAccmultiselect"
            options={option} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div> 
        <div className="AddAccountCon1">
             <p>Group</p>
           <select>
            <option>Bank</option>
            <option>Other C.Assets</option>
            <option>accumulated depreciation</option>
            <option>Advance Payment</option>
            <option>Inventory/C.Assets</option>
            <option>Cash</option>
            <option>sub embloyees</option>
           </select>
            </div> 
        <div className="AddAccountCon1">
             <p>Account Currency</p>
           <select>
            <option>SAR</option>
           </select>
            </div> 
            <div className="AddAccountCheckbox">
             <p>Allow Reconciliation</p>
            <input type="Checkbox" />
            </div>
            <div className="AddAccountCheckbox">
             <p>Deprecated</p>
            <input type="Checkbox" />
            </div>
            <div className="AddAccountCheckbox">
             <p>Centralized</p>
            <input type="Checkbox" />
            </div>
          </div>
  </div>
  </div>
    </>
  
  )
}

export default AddChartAccount