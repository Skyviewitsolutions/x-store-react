import React,{useState}from 'react'
import './AdvanceSetting.css';
import Multiselect from "multiselect-react-dropdown";

const AdvanceSetting = (props) => {

 

  const {acctypeAllow,setAccTypeAllow,accAllow,setAccAllow,lockPost,setLockPost} = props

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

const  onSelect1 = (selectedList, selectedItem) => {
  setAccTypeAllow(selectedList);
  console.log(selectedList , "selecctedList Here")
};

const onRemove1 = (selectedList, removedItem) => {
  setAccTypeAllow(selectedList);
}
const  onSelect2 = (selectedList, selectedItem) => {
  setAccAllow(selectedList);
  console.log(selectedList , "selecctedList Here")
};

const onRemove2 = (selectedList, removedItem) => {
  setAccAllow(selectedList);
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
              selectedValues={acctypeAllow} 
              onSelect={onSelect1}
              onRemove={onRemove1} 
              displayValue="name"
            />
      </div>
      <div className="AdvanceSettinginput">
        <p>Accounts Allowed</p>
        <Multiselect className='Advancemultiselect'
              options={options1}
              selectedValues={accAllow} 
              onSelect={onSelect2}
              onRemove={onRemove2} 
              displayValue="name"
            />
      </div>
      <div className="AdvanceSettingcheckbox">
        <p>Lock Posted Entries with Hash</p>
        <input type="checkbox" value={lockPost} onChange={()=> setLockPost(!lockPost)} checked={lockPost}/>
      </div>
    </div>
  )
}

export default AdvanceSetting