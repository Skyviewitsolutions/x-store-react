import React,{useState}from 'react'
import './AdvanceSetting.css';
import Multiselect from "multiselect-react-dropdown";

const AdvanceSetting = () => {

  const [selectedValue,setSelectedValue] = useState()
  const options = [
    { name: "Receviable", id: 1 },
    { name: "Payable", id: 2 },
    { name: "Bank and Cash", id: 2 },
    { name: "Credit Card", id: 3 },
    { name: "Current Assets", id: 4 },
    { name: "Non Current Assets", id: 5 },
    { name: "PrePayments", id: 6 },
    { name: "Fixed Assets", id: 7},
  ];
  const options1 = [
    { name: "110101001 صندوق ادارة الرياض", id: 1 },
    { name: "110101003 صندوق الهفوف", id: 2 },
    { name: "110101004 صندوق الباحة", id: 2 },
    { name: "110101005 صندوق بيشة", id: 3 },
    { name: "110101007 صندوق مكة", id: 4 },
  ];

const  onSelect = (selectedList, selectedItem) => {
   
}

const onRemove = (selectedList, removedItem) => {
    
}
  return (
    <div className='AdvanceSettingCon'>
      <div className="AdvanceSettingContent">
      <p>Control-Access</p>
      <span>Keep empty for no control</span>
      </div>
      <div className="AdvanceSettinginput">
        <p>Account Types Allowed</p>
        <Multiselect className='Advancemultiselect'
              options={options}
              selectedValues={selectedValue} 
              onSelect={onSelect}
              onRemove={onRemove} 
              displayValue="name"
            />
      </div>
      <div className="AdvanceSettinginput">
        <p>Accounts Allowed</p>
        <Multiselect className='Advancemultiselect'
              options={options1}
              selectedValues={selectedValue} 
              onSelect={onSelect}
              onRemove={onRemove} 
              displayValue="name"
            />
      </div>
      <div className="AdvanceSettingcheckbox">
        <p>Lock Posted Entries with Hash</p>
        <input type="checkbox" />
      </div>
    </div>
  )
}

export default AdvanceSetting