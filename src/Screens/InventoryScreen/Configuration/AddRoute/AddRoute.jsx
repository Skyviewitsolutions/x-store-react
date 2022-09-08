import React,{useState} from 'react'
import './AddRoute.css'
import {MdArrowDropDown } from 'react-icons/md'
import Multiselect from "multiselect-react-dropdown";
import Navebar from '../../../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import AddRoutePopup from '../../../../components/Model/AddRoutePopup/AddRoutePopup';
const AddRoute = () => {

    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState();
    const [showAddRoute , setShowAddRoute] = useState(false);
   
    const options = [
      { name: "Riyadh Project material store", id: 1 },
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
  
    const onSelect = (selectedList, selectedItem) => {};
  
    const onRemove = (selectedList, removedItem) => {};
  return (
    <>
    <Navebar showBelowMenu={true} title="Route"/>
    <div className='AddRouteContainer'>
        <div className="AddRouteinput">
        <p>Route</p>
       <input type="text" />
        </div>
        <div className="Applicationon">
            <h5>Applicable On</h5>
            <p>Select the places where this route can be selected</p>
        </div>
        <div className="AddRoutecheckbox">
            <div className="checkbox1">
                <div className="pro">
                    <p>Product Categories</p>
                    <input type="checkbox" />
                </div>
                <div className="pro">
                    <p>Products</p>
                    <input type="checkbox" />
                </div>
            </div>
            <div className="checkbox2">
            <div className="pro">
                    <p>Warehouse</p>
                    <input type="checkbox" />
                </div>
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
        <div className="Rules">
            <h5>Rules</h5>
            <div className="AddRouteboxmain">
        <div className="AddRoutebox">
        <div className="AddRoutecontent">
        <p>Location</p>
        </div>
        <div className="AddRoutecontent">
        <p>Source Location</p>
        </div>
        <div className="AddRoutecontent">
        <p>Distinition Location</p>
        </div>
        </div>
    </div> 
        <div className="AddRouteboxshadow">
        <p  onClick={ () => setShowAddRoute(true)}>Add line</p>
        </div>
            </div>
            <AddRoutePopup showAddRoute={showAddRoute} setShowAddRoute={setShowAddRoute}/>
        </div>
        </>
  )
}

export default AddRoute