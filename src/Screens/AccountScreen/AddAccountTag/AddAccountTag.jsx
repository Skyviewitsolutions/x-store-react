
import React,{useState} from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import './AddAccountTag.css';
import Multiselect from "multiselect-react-dropdown";
const AddAccountTag = () => {
    const [selectedValue, setSelectedValue] = useState();
    const options = [
        { name: "110101002 Zulfi Box", id: 1 },
        { name: "110101001 Riyadh Management Fund", id: 2 },
        { name: "110101005 Bisha Box", id: 2 },
        { name: "110101006 Yanbu Fund", id: 3 },
        { name: "110101009 Jeddah Fund", id: 4 },
      ];
    
      const onSelect = (selectedList, selectedItem) => {};
    
      const onRemove = (selectedList, removedItem) => {};
  return (
    <div>
        <AccountNavbar showBelowMenu={true}  title="Account Tag"/>
        <div className="AddAccountTagcon">
            <div className="AddAccountTagContent">
                <p>Tag Name</p>
                <input type="text" />
            </div>
            <div className="AddAccountTagContent">
                <p>Applicability</p>
                <select>
                    <option></option>
                    <option>Account</option>
                    <option>Taxes</option>
                </select>
            </div>
            <div className="multiselectcontent">
                <p>Accounts</p>
                <Multiselect
            className="Addmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
            </div>
        </div>
    </div>
  )
}

export default AddAccountTag