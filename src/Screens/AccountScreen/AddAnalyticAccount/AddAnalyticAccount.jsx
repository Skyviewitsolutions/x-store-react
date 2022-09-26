import Multiselect from 'multiselect-react-dropdown';
import React,{useState} from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { TbCurrencyDollar } from 'react-icons/tb';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import './AddAnalyticAcount.css';
const AddAnalyticAccount = () => {
  const [selectedValue, setSelectedValue] = useState();
  const options = [
    { name: "Gamal Abd Alla Ahmed", id: 1 },
    { name: "Abd Alla Mohamed Ahmed", id: 2 },
    { name: "Ebrahim Ali Naji Al Rezaki", id: 3 },
    { name: "Farah Mestour Rashed Alhathali", id: 4 },
    { name: "Hani Mohammed Abdel Karim", id: 5 },
  ];

  const onSelect = (selectedList, selectedItem) => {};

  const onRemove = (selectedList, removedItem) => {};
  return (
    <div>
        <AccountNavbar showBelowMenu={true} title="Analytic Account" />
        <div className="AddAnalyticCon">
        <div className="AddAnalytichead">
        <div className="Analyticcontent">
          <TbCurrencyDollar
            size="33px"
            style={{ color: "#848484", marginTop: "5px" }}
          />
          <div className="Analytictext">
            <p>Rates</p>
          </div>
        </div>
      </div>
      <div className="Analyticmain">
      <div className="Analyticdetails">
        <p>Analytic Account</p>
        <input type="text" placeholder='e.g Project XYZ' />
      </div>
      <div className="AnalyticContent">
        <div className="Analyticfirst">
          <div className="AnalyticInputcontent">
            <p>Reference</p>
            <input type="text" />
          </div>
          <div className="Analyticselect">
            <p>Customer</p>
            <select>
              <option></option>
              <option>110</option>
              <option>13103</option>
              <option>Aad Saud Alshaibani Alotaibi</option>
              <option>Aalok Kumar Bodhnath Maht</option>
              <option>AALY ALQEMA EST.</option>
            </select>
          </div>
          <div className="AnalyticMulti">
            <p>Business Owner </p>
          <Multiselect
            className="Analyticmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          </div>
          <div className="Analyticselect">
            <p>Manager</p>
            <select>
              <option></option>
              <option>110</option>
              <option>13103</option>
              <option>Aad Saud Alshaibani Alotaibi</option>
              <option>Aalok Kumar Bodhnath Maht</option>
              <option>AALY ALQEMA EST.</option>
            </select>
          </div>
          <div className="AnalyticInputcontent">
            <p>Team Name</p>
            <input type="text" />
          </div>
          <div className="Analyticselect">
            <p>Administrator</p>
            <select>
              <option></option>
              <option>110</option>
              <option>13103</option>
              <option>Aad Saud Alshaibani Alotaibi</option>
              <option>Aalok Kumar Bodhnath Maht</option>
              <option>AALY ALQEMA EST.</option>
            </select>
          </div>
          <div className="AnalyticMulti">
            <p>Staff </p>
          <Multiselect
            className="Analyticmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          </div>
        </div>
        <div className="AnaylticContentSecond">
        <div className="Analyticselect">
            <p>Group</p>
            <select>
              <option></option>
              <option>Macca Projects</option>
              <option>Yanbae Projects</option>
              <option>ِِAl Ahsa Projects</option>
              <option>Central Region Projects</option>
              <option>Al Baha Projects</option>
            </select>
          </div>
        <div className="Analyticselect">
            <p>Currency</p>
            <select>
              <option></option>
              <option>SAR</option>
              <option>Rs</option>
            </select>
          </div>
        <div className="Analyticselect">
            <p>Analytic Account Type</p>
            <select>
              <option></option>
              <option>Administrative</option>
              <option>Projects</option>
              <option>Machines and Equipment</option>
              <option>Workshops</option>
              <option>Warehouses</option>
              <option>Properties</option>
            </select>
          </div>
          <div className="AnalyticInputcontent">
            <p>Debit</p>
            <input type="text" />
          </div>
          <div className="AnalyticInputcontent">
            <p>Credit</p>
            <input type="text" />
          </div>
          <div className="AnalyticInputcontent">
            <p>Balance</p>
            <input type="text" />
          </div>
        </div>
      </div>
      </div>
     
        </div>
    </div>
  )
}

export default AddAnalyticAccount