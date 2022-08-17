import React,{useState} from 'react'
import './DiffrentAccount.css'
import { Modal } from 'react-bootstrap';
import {MdOutlineCancel} from 'react-icons/md';
import {MdArrowDropDown } from 'react-icons/md'
import Multiselect from "multiselect-react-dropdown";
import { FaBars } from 'react-icons/fa';
import {FaExternalLinkAlt} from 'react-icons/fa'
const DiffrentAccount = (props) => {
    const [selectedValue, setSelectedValue] = useState();
    const {showAccount , setShowAccount} = props;
    const onSelect = (selectedList, selectedItem) => {};

    const onRemove = (selectedList, removedItem) => {};
    const options = [
        { name: "VAT Goods Purchases-STD (Purchases)", id: 1 },
        { name: "Jaddah Project material store", id: 2 },
        { name: "Bisha Project material store", id: 2 },
        { name: "ALBHA Project Material Store", id: 3 },
        { name: "Yanbu Project Material Store", id: 4 },
        { name: "AlJouf Project Material Store", id: 5 },
        { name: "Al-Bahah Warehouse", id: 6 },
        { name: "Bisha Warehouse", id: 7 },
        { name: "Search More...", id: 8 },
        { name: "Create and Edit", id: 9 },
      ];
  return (
    <>
    <Modal show={showAccount} size='lg'>
      <div className='DiffrentAccountcon'>
            <div className="CreateDiffrentAcc">
                <p>Create: Price Difference Account</p>
            </div>
            <div className="Accountmain">
                <div className="Accountemptydiv">  
                </div>
                <div className="itemsdiv">
                    <div className="iconcontent">
                    <FaBars  size="25px" className='barsicon'/>
                    <span>Journal Items</span>
                    </div>
                </div>
            </div>
            <div className="Accountdetails">
                <div className="inputcontent">
                    <p>Code</p>
                    <input type="text" />
                </div>
                <div className="inputcontent">
                    <p>Name</p>
                    <input type="text" />
                </div>
                <div className="accdropdown">
            <p>Type</p>
            <select>
                <option></option>
                <option>Receivable</option>
                <option>Bank and Cash</option>
                <option>Current Assets</option>
                <option>Non-current Assets</option>
                <option>Prepayments</option>
                <option>Fixed Assets</option>
                <option>Payable</option>
                <option>Credit Card</option>
                <option>Non-current Liabilities</option>
                <option>Equity</option>
                <option>Current Year Earnings</option>
                <option>Income</option>
            </select>
            </div>
            <div className="accmultidropdown">
                <p>Default Taxes</p>
                <Multiselect
            className="Accmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
            </div>
            <div className="accmultidropdown">
                <p>Tags</p>
                <Multiselect
            className="Accmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
            </div>
            <div className="accdropdown">
            <p>Group</p>
            <select>
                <option></option>
                <option>Bank</option>
                <option>Other C.Assets</option>
                <option>accumulated depreciation</option>
                <option>Advance Payment</option>
                <option>Cash</option>
                <option>sub embloyees</option>
                <option>Search more..</option>
                <option>Create and Edit</option>
            </select>
            <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
            </div>
          
            <div className="accdropdown">
            <p>Account Currency</p>
            <select>
                <option></option>
                <option>SAR</option>
            </select>
            <FaExternalLinkAlt
            size="14px"
            style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
          />
            </div>
            <div className="AccCheckbox">
                <p>Allow Reconciliation</p>
                <input type="checkbox" />
            </div>
            <div className="AccCheckbox">
                <p>Deprecated</p>
                <input type="checkbox" />
            </div>
            <div className="AccCheckbox">
                <p>Centralized</p>
                <input type="checkbox" />
            </div>
            </div>
            <div className="Accfooter">
                <button className='Accbtn1'>Save</button>
                <button className='Accbtn2'>Discard</button>
            </div>
            <div onClick={() => setShowAccount(false)}>
                <MdOutlineCancel size='25px' className='Acccuticons'/>
                </div>
            </div>
    </Modal>
    </>
  )
}

export default DiffrentAccount