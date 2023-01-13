import React,{useState}from 'react'
import './AdvanceSetting.css';
import Multiselect from "multiselect-react-dropdown";

const AdvanceSetting = (props) => {

 

  const {acctypeAllow,setAccTypeAllow,accAllow,setAccAllow,lockPost,setLockPost,accAllow1,setAccAllow1,acctypeAllow1,setAccTypeAllow1,getSingleJournal,onSelect1,onRemove1,onSelect2,onRemove2,options,options1} = props
    console.log(accAllow,"hhhfh")

  return (
    <div className='AdvanceSettingCon'>
      <div className="AdvanceSettingContent">
      <p>Control-Access</p>
      <span>Keep empty for no control</span>
      </div>
      <div className="AdvanceSettinginput">
        <p>Account Types Allowed</p>
        {/* <select value={acctypeAllow} onChange={(e) => setAccTypeAllow(e.target.value)}>
        <option>Choose any one</o 
        ption>
          <option value="Receviable">Receviable</option>
          <option value="Payable">Payable</option>
          <option value="Bank and Cash">Bank and Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Current Assetss">Current Assets</option>
        </select> */}
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
        {/* <select value={accAllow} onChange={(e) => setAccAllow(e.target.value)}>
          <option>Choose any one</option>
          <option value="100003 Security Deposit">100003 Security Deposit</option>
          <option value="100004 Security Deposit">100004 Security Deposit</option>
          <option value="100005 Security Deposit">100005 Security Deposit</option>

        </select> */}
        <Multiselect className='Advancemultiselect'
              options={options1}
              selectedValues={accAllow} 
              onSelect={onSelect2}
              onRemove={onRemove2} 
              displayValue="name"
            />
      </div>
      <div className="AdvanceSettingcheckbox">
        <label htmlFor='lockPost'>Lock Posted Entries with Hash</label>
        <input type="checkbox" value={lockPost} onChange={()=> setLockPost(!lockPost)} checked={lockPost} id="lockPost"/>
      </div>
    </div>
  )
}

export default AdvanceSetting