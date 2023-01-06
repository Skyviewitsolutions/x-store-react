import React, { useEffect, useState } from 'react'
import './AddCurrencies.css';
import {FaMoneyBillAlt} from 'react-icons/fa'
import { HiOutlineRefresh } from 'react-icons/hi';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { toast,ToastContainer} from 'react-toastify';
import { endpoints } from '../../../services/endpoints';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddCurrencies = () => {
  const navigate = useNavigate()
  const [currencies , setCurrencies] = useState("");
  const [currenciesUnit , setCurrenciesUnit] = useState("");
  const [currenciesRate , setCurrenciesRate] = useState("");
  const [currenciesSubunit , setCurrenciesSubUnit] = useState("");
  const [active , setActive] = useState(false);
  const [update , setUpdate] = useState("")
  const AddCurrenciesUrl = endpoints.Currency.addCurrency;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  
  const save = () => {
  const formData = new FormData();
  formData.append("Currencys",currencies);
  formData.append("Currency_Unit",currenciesUnit);
  formData.append("Currency_Rate" , currenciesRate);
  formData.append("Currency_Subunit" , currenciesSubunit);
  formData.append("Active" , active);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);
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
            toast("Currencies Added Successfully" , {type:"success"})
            setTimeout(() => {
              navigate('/Currencies')
            }, 1000);
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

  const location = useLocation();

  const selectedData = location.state;
  console.log(selectedData , "SelectedData here");

  useEffect(() => {
   if(selectedData) {
    setUpdate(true);
    setActive(JSON.parse(selectedData.ACTIVE.toLowerCase()));
    setCurrencies(selectedData.CURRENCY);
    setCurrenciesRate(selectedData.CURRENCY_RATE);
    setCurrenciesUnit(selectedData.CURRENCY_UNIT);
    setCurrenciesSubUnit(selectedData.CURRENCY_SUBUNIT);
   }
  },[selectedData])

  const updateCurrenciesUrl = endpoints.Currency.updateCurrency;

  const updateData = () => {
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
     const formData = new FormData();
     formData.append("Id" , selectedData.ID);
     formData.append("Currencys" , currencies);
     formData.append("Currency_Unit" , currenciesUnit);
     formData.append("Currency_Rate" , currenciesRate);
     formData.append("Currency_Subunit" , currenciesSubunit);
     formData.append("Active" , active);
     formData.append("User_Authorization", getAuthtoken);
     formData.append("User_AuthKey", userAuth);
     axios.post(updateCurrenciesUrl,formData)
     .then((res) => {
      if(res.data.status === true)
      {
        toast("Currencies is updated Successfully !",{type:"success"})
        setTimeout(() => {
          navigate('/Currencies')
        }, 1000);
      }
      else if(res.data.status === false)
      {
        toast(res.data.message , {type:"error"});
      }
     })
     .catch((err) => {
      console.log(err,"error");
     })
    }
  }
  
  return (
    <>
    <AccountNavbar showBelowMenu={true} title="Currencies"save={update === true ? updateData : save} showCanelBtn={true}/>
    <div className='AddCurrenciesCon'>
       {/* <div className="AddCurrencieshead">
        <div className="content">
          <FaMoneyBillAlt
            size="33px"
            style={{ color: "#848484", marginTop: "5px" }}
          />
          <div className="Currenciestext">
            <p>Rates</p>
          </div>
        </div>
      </div> */}
      <div className="AddCurrenciesdetails">
         <div className="Currenciesdetails1">
            <div className="currenciestext">
              <p>Currency</p>
              <input type="text" value={currencies} onChange={(e) => setCurrencies(e.target.value)}/>
            </div>
            <div className="currenciestext">
              <p>Current Rate</p>
             <input type="text" value={currenciesRate} onChange={(e) => setCurrenciesRate(e.target.value)}/>
            </div>
            <div className="currenciescheckbox">
              <label htmlFor='active'>Active</label>
              <input type="checkbox" value={active} onChange={() => setActive(!active)} checked={active} id="active"/>
            </div>
         </div>
         <div className="Currenciesdetails2">
         <div className="currenciestext">
              <p>Currency Unit</p>
              <input type="text" value={currenciesUnit} onChange={(e) => setCurrenciesUnit(e.target.value)}/>
            </div>
         <div className="currenciestext">
              <p>Currency Subunit</p>
              <input type="text" value={currenciesSubunit} onChange={(e) => setCurrenciesSubUnit(e.target.value)}/>
            </div>
         </div>
      </div>
      <ToastContainer/>
    </div>
    </>
  )
}

export default AddCurrencies