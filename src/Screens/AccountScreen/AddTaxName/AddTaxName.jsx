import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { endpoints } from '../../../services/endpoints';
import './AddTaxNAme.css';

const AddTaxName = () => {

    const navigate = useNavigate()
    const [taxName , setTaxname] = useState("");
    const [taxScope , setTaxscope] = useState("");
    const [taxComputation , setTaxComputation] = useState("");
    const [ammount ,  setAmmount] = useState("");
    const [labelInvoice , setLabelInvoice] = useState("");
    const [includedPrice , setIncludedPrice] = useState("");
    const [taxGroup , setTaxGroup] = useState("");
    const [affect , setAffect] = useState(false);
    const [cost , setCost] = useState(false);
    const [update , setUpdate] = useState("");
    const addTaxNameUrl = endpoints.TaxName.addTaxName;
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    const save = () => {
      if(taxName === "")
      {
        toast("Tax Name Is Required!",{type:"warning"});
      }
      else if(taxScope === "")
      {
       toast("Tax Scope Is Required!",{type:"warning"});
      }
      else if(taxComputation === "")
      {
        toast("Tax Computation Is Required!",{type:"warning"});
      }
      else if(ammount === "")
      {
        toast("Ammount Is Required!",{type:"warning"});
      }
      else if(labelInvoice === ""){
        toast("Label Invoice Is Required!",{type:"warning"});
      }
      else if(includedPrice === "")
      {
        toast("Included Price Is Required!",{type:"warning"})
      }
      else if(taxGroup === "")
      {
        toast("Tax Group Is Required!",{type:"warning"});
      }
      else if(cost === "")
      {
        toast("Cost Is Required!",{type:"warning"});
      }
      else if(affect === "")
      {
        toast("Subsequent Taxes Is Requirred!",{type:"warning"});
      }
      else{
        const formData = new FormData();
        formData.append("TaxName",taxName);
        formData.append("TaxScope",taxScope);
        formData.append("TaxComputation",taxComputation);
        formData.append("Amount",ammount);
        formData.append("Label_On_Invoices",labelInvoice);
        formData.append("Included_In_Prices",includedPrice);
        formData.append("Tax_Group",taxGroup);
        formData.append("Affect_Base_Of",affect);
        formData.append("Include_In_Analytic",cost);
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(addTaxNameUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
             toast("Tax Name Added Successfully",{type:"success"});
             setTimeout(() => {
              navigate('/TaxName')
             }, 1000);
            }
            else if(res.data.status === false)
            {
                toast(res.data.message,{type:"error"})
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
      setTaxname(selectedData.TAX_NAME);
      setTaxComputation(selectedData.TAX_COMPUTATION);
      setTaxscope(selectedData.TAX_SCOPE);
      setAmmount(selectedData.AMOUNT);
      setLabelInvoice(selectedData.LABEL_ON_INVOICES);
      setIncludedPrice(selectedData.INCLUDED_IN_PRICES)
      setAffect(selectedData.AFFECT_BASE_OF);
      setTaxGroup(selectedData.TAX_GROUP);
      setCost(selectedData.INCLUDE_IN_ANALYTIC)
     }
    },[selectedData])
  
    const updateTaxNameUrl = endpoints.TaxName.updateTaxName;

    const updateData = () => {
        if(taxName === "")
      {
        toast("Tax Name Is Required!",{type:"warning"});
      }
      else if(taxScope === "")
      {
       toast("Tax Scope Is Required!",{type:"warning"});
      }
      else if(taxComputation === "")
      {
        toast("Tax Computation Is Required!",{type:"warning"});
      }
      else if(ammount === "")
      {
        toast("Ammount Is Required!",{type:"warning"});
      }
      else if(labelInvoice === ""){
        toast("Label Invoice Is Required!",{type:"warning"});
      }
      else if(includedPrice === "")
      {
        toast("Included Price Is Required!",{type:"warning"})
      }
      else if(taxGroup === "")
      {
        toast("Tax Group Is Required!",{type:"warning"});
      }
      else if(cost === "")
      {
        toast("Cost Is Required!",{type:"warning"});
      }
      else if(affect === "")
      {
        toast("Subsequent Taxes Is Requirred!",{type:"warning"});
      }
      else{
        const formData = new FormData();
        formData.append("Id",selectedData.ID)
        formData.append("TaxName",taxName);
        formData.append("TaxScope",taxScope);
        formData.append("TaxComputation",taxComputation);
        formData.append("Amount",ammount);
        formData.append("Label_On_Invoices",labelInvoice);
        formData.append("Included_In_Prices",includedPrice);
        formData.append("Tax_Group",taxGroup);
        formData.append("Affect_Base_Of",affect);
        formData.append("Include_In_Analytic",cost);
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(updateTaxNameUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
              toast("TaxName is updated Successfully !",{type:"success"})
              setTimeout(() => {
                navigate('/TaxName')
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
    <AccountNavbar showBelowMenu={true} title="Tax Name" save={update === true ? updateData : save} showCanelBtn={true}/>
    <div className='TaxNameCon'>
        <div className="TaxNamemain">
        <div className="TaxNamecontent">
            <div className="AddTaxinput">
            <p>TaxName</p>
           <input type="text" value={taxName} onChange={(e) =>setTaxname(e.target.value)}/>
            </div>
            <div className="AddTaxinput">
            <p>Tax Computation</p>
             <select value={taxComputation} onChange={(e) => setTaxComputation(e.target.value)}>
                <option>Choose any one</option>
                <option value="Group Of Taxes">Group Of Taxes</option>
                <option value="Fixed">Fixed</option>
                <option value="Percentage of Price">Percentage of Price</option>
                <option value="Percentage of Price Tax Included">Percentage of Price Tax Included</option>
                <option value="Python Code">Python Code</option>
             </select>
            </div>
     </div>
     <div className="TaxNamecontent2">
            <div className="AddTaxinput">
            <p>Tax Scope</p>
            <select value={taxScope} onChange={(e) => setTaxscope(e.target.value)}>
                <option>Choose any one</option>
                <option value="Sales">Sales</option>
                <option value="Purchase">Purchase</option>
                <option value="None">None</option>
             </select>
            </div>
            <div className="AddTaxammount">
            <p>Amount</p>
            <input type="number" min="0"value={ammount} onChange={(e) => setAmmount(e.target.value)}/>
            <span>%</span>
            </div>
            </div>
     
        </div>
        <div className="TaxAdvance">
            <div className="Taxadvance1">
            <h3>Advance Setting</h3>
            <div className="Advanceinput">
            <p>Label on Invoices</p>
            <input type="text" value={labelInvoice} onChange={(e) => setLabelInvoice(e.target.value)}/>
            </div>
            <div className="Advanceinput">
            <p>Tax Group</p>
           <select value={taxGroup} onChange={(e) => setTaxGroup(e.target.value)}>
            <option>Choose any one</option>
            <option value="Taxes">Taxes</option>
            <option value="Reservation of the owner / advance payment">Reservation of the owner / advance payment</option>
            <option value="advance payment">advance payment</option>
            <option value="Primary Reservation">Primary Reservation</option>
           </select>
            </div>
            <div className="Advancecheckbox">
                <label htmlFor="cost">Include in Analytic Cost</label>
                <input type="checkbox" value={cost} onChange={() => setCost(!cost)} checked={cost} id="cost"/>

            </div>
            </div>
            <div className="Taxadvance2">
            <div className="Advancecheckbox">
                <label htmlFor="includedPrice">Included in Price</label>
                <input type="checkbox" value={includedPrice} onChange={() => setIncludedPrice(!includedPrice)} checked={includedPrice} id="includedPrice"/>
            </div>
            <div className="Advancecheckbox">
                <label htmlFor="affect">Affect Base of Subsequent Taxes</label>
                <input type="checkbox" value={affect} onChange={() => setAffect(!affect)} checked={affect} id="affect"/>
            </div>
            </div>
        </div>
     <ToastContainer/>
    </div>
    </>
  )
}

export default AddTaxName