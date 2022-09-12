import React, { useState } from 'react'
import './AddCurrencies.css';
import {FaMoneyBillAlt} from 'react-icons/fa'
import { HiOutlineRefresh } from 'react-icons/hi';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { toast } from 'react-toastify';
import { endpoints } from '../../../services/endpoints';
import axios from 'axios';

const AddCurrencies = () => {

  const [currencies , setCurrencies] = useState("");
  const [currenciesUnit , setCurrenciesUnit] = useState("");
  const [currenciesRate , setCurrenciesRate] = useState("");
  const [currenciesSubunit , setCurrenciesSubUnit] = useState("");
  const [active , setActive] = useState("");
  const AddCurrenciesUrl = endpoints.Currency.addCurrency;

  const formData = new FormData();
  formData.append("Currencys",currencies);
  formData.append("Currency_Unit",currenciesUnit);
  formData.append("Currency_Rate" , currenciesRate);
  formData.append("Currency_Subunit" , currenciesSubunit);
  formData.append("Active" , active);
  
  const save = () => {
    if(currencies === "")
    {
      toast("Currencies Is Required!",{type:"warning"});
    }
    else if(currenciesUnit === "")
    {
      toast("Currencies Unit is Required!",{type:"warning"});
    }
    else if(currenciesRate === "")
    {
      toast("Currencies Rate is Required!",{type:"warning"});
    }
    else if(currenciesSubunit === "")
    {
      toast("Currencies SubUnit is Required!" ,{type:"warning"});
    }
    else if(active === "")
    {
      toast("active is Required!",{type:"warning"});
    }
    else{
      axios.post(AddCurrenciesUrl,formData)
      .then((res) => {
        console.log(res,"AccountTagAdd");
        if(res.data.status === true)
        {
            toast("Currencies Added Successfully" , {type:"Success"})
        }
        else if(res.data.status === false)
        {
            toast(res.data.message,{type:"error"});
        }
    })
    .catch((err) => {
        console.log(err,"error");
    })
    }

  }
  return (
    <>
    <AccountNavbar showBelowMenu={true} title="Currencies" save={save}/>
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