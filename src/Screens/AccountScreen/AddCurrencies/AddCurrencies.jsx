import React from 'react'
import './AddCurrencies.css';
import {FaMoneyBillAlt} from 'react-icons/fa'
import { HiOutlineRefresh } from 'react-icons/hi';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';

const AddCurrencies = () => {
  return (
    <>
    <AccountNavbar showBelowMenu={true} title="Currencies"/>
    <div className='AddCurrenciesCon'>
       <div className="AddCurrencieshead">
        <div className="content">
          <FaMoneyBillAlt
            size="33px"
            style={{ color: "#848484", marginTop: "5px" }}
          />
          <div className="Currenciestext">
            <p>Rates</p>
          </div>
        </div>
      </div>
      <div className="AddCurrenciesdetails">
         <div className="Currenciesdetails1">
            <div className="currenciestext">
              <p>Currency</p>
              <input type="text" />
            </div>
            <div className="currenciestext">
              <p>Current Rate</p>
              <span>0.0000</span>
            </div>
            <div className="currenciescheckbox">
              <p>Active</p>
              <input type="checkbox" />
            </div>
         </div>
         <div className="Currenciesdetails2">
         <div className="currenciestext">
              <p>Currency Unit</p>
              <input type="text" />
            </div>
         <div className="currenciestext">
              <p>Currency Subunit</p>
              <input type="text" />
            </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default AddCurrencies