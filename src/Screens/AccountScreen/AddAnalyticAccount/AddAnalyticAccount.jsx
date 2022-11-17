import { Refresh } from '@mui/icons-material';
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import React,{useState} from 'react'
import { useEffect } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { TbCurrencyDollar } from 'react-icons/tb';
import { useLocation } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { endpoints } from '../../../services/endpoints';
import './AddAnalyticAcount.css';

const AddAnalyticAccount = () => {

  const [analyticAcc, setAnayticAcc] = useState("");
  const [reference , setReference] = useState("");
  const [customer , setCustomer] = useState("");
  const [business , setBusiness] = useState([]);
  const [manager , setManager] = useState("");
  const [team , setTeam] = useState("");
  const [administrator , setAdministrator] = useState("");
  const [staff , setStaff] = useState([]);
  const [group , setGroup] = useState("");
  const [currency , setCurrency] = useState("");
  const [analyticAccType , setAnayticAccType] = useState("")
  const [getCorrency , setGetCorrency] = useState([]);
  const [getAnaAccType , setGetAnaAccType] = useState([]);
  const [update , setUpdate] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth"); 

  const options = [
    { name: "Gamal Abd Alla Ahmed", id: 1 },
    { name: "Abd Alla Mohamed Ahmed", id: 2 },
    { name: "Ebrahim Ali Naji Al Rezaki", id: 3 },
    { name: "Farah Mestour Rashed Alhathali", id: 4 },
    { name: "Hani Mohammed Abdel Karim", id: 5 },
  ];

  const onSelect1 = (selectedList, selectedItem) => {
    setBusiness(selectedList);
  };

  const onRemove1 = (selectedList, removedItem) => {
    setBusiness(selectedList);
  };
  const onSelect2 = (selectedList, selectedItem) => {
    setStaff(selectedList);
  };

  const onRemove2 = (selectedList, removedItem) => {
    setStaff(selectedList);
  };

  const getCurrencyUrl = endpoints.Currency.allCurrency;
  const getAnalyticAcctypeUrl = endpoints.AnalyticAccType.allAnalytictype;
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
  axios.post(getCurrencyUrl,formData)
  .then((res) => {
    if(res.data.status === true)
    {
      setGetCorrency(res.data.data);
    }
    else if(res.data.status === false)
    {
      toast(res.data.message,{type:"error"});
    }
  })
  },[])

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(getAnalyticAcctypeUrl ,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        setGetAnaAccType(res.data.data);
      }
      else if(res.data.status === false)
      {
        toast(res.data.message,{type:"error"});
      }
    })
  },[])
  const analyticAccAddUrl = endpoints.AnalyticAcc.addAnaAcc;

  const save = () => {
    if(analyticAcc === ""){
      toast("Analytic Account is Required!",{type:"warning"});
    }
    else if(reference === "")
    {
      toast("Reference is Required!",{type:"warning"})
    }
    else if(customer === "")
    {
      toast("Customer Is Required!",{type:"warning"});
    }
    else if(business === "")
    {
      toast("Business Owner Is Required!",{type:"warning"});
    }
    else if(manager === "")
    {
      toast("Manager Is Required!",{type:"warning"});
    }
    else if(team === ""){
    toast("Team Name Is Required!",{type:"warning"});
    }
    else if(administrator === "")
    {
      toast("Administrator Is Required!",{type:"warning"});
    }
    else if(staff === "")
    {
      toast("Staff Is Required!",{type:"warning"});
    }
    else if(group === ""){
    toast("Group Is Required!",{type:"warning"});
    }
    else if(currency === "")
    {
      toast("Currency Is Required!",{type:"warning"});
    }
    else if(analyticAccType === "")
    {
      toast("Analytic Account Type Is Required!",{type:"warning"})
    }
    else{
      const formData = new FormData();
      formData.append("Analytic_Account",analyticAcc);
      formData.append("Reference",reference);
      formData.append("Customer",customer);
      formData.append("Group",group);
      formData.append("Currency",currency);
      formData.append("Business_Owner",business);
      formData.append("Analytic_Account_Type",analyticAccType);
      formData.append("Manager",manager);
      formData.append("Team_Name",team);
      formData.append("Administrator",administrator);
      formData.append("staff",staff);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(analyticAccAddUrl,formData)
      .then((res) => {
        console.log(res,"AccountTagAdd");
        if(res.data.status === true)
        {
            toast("Analytic Account  Added Successfully" , {type:"Success"})
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
  console.log(selectedData , "SelectedData here")

  useEffect(() => {
  if(selectedData){
  setUpdate(true);
  setAnayticAcc(selectedData.ANALYTIC_ACCOUNT);
  setReference(selectedData.ANALYTIC_REFERENCE);
  setCustomer(selectedData.ANALYTIC_CUSTOMER);
  setBusiness(selectedData.ANALYTIC_CUSTOMER1);
  setManager(selectedData.ANALYTIC_MANAGER);
  setTeam(selectedData.TEAM_NAME);
  setAdministrator(selectedData.ANALYTIC_ADMINISTRATOR);
  setStaff(selectedData.ANALYTIC_STAFF);
  setGroup(selectedData.ANALYTIC_GROUP);
  setCurrency(selectedData.ANALYTIC_CURRENCY);
  setAnayticAccType(selectedData.ANALYTIC_ACCOUNT_TYPE);
  }
  },[selectedData])

  const updateAnnAcc = endpoints.AnalyticAcc.updateAnaAcc;

  const updateData = () => {
    if(analyticAcc === ""){
      toast("Analytic Account is Required!",{type:"warning"});
    }
    else if(reference === "")
    {
      toast("Reference is Required!",{type:"warning"})
    }
    else if(customer === "")
    {
      toast("Customer Is Required!",{type:"warning"});
    }
    else if(business === "")
    {
      toast("Business Owner Is Required!",{type:"warning"});
    }
    else if(manager === "")
    {
      toast("Manager Is Required!",{type:"warning"});
    }
    else if(team === ""){
    toast("Team Name Is Required!",{type:"warning"});
    }
    else if(administrator === "")
    {
      toast("Administrator Is Required!",{type:"warning"});
    }
    else if(staff === "")
    {
      toast("Staff Is Required!",{type:"warning"});
    }
    else if(group === ""){
    toast("Group Is Required!",{type:"warning"});
    }
    else if(currency === "")
    {
      toast("Currency Is Required!",{type:"warning"});
    }
    else if(analyticAccType === "")
    {
      toast("Analytic Account Type Is Required!",{type:"warning"})
    }
    else{
      const formData = new FormData();
      formData.append("Id",selectedData.ID);
      formData.append("Analytic_Account",analyticAcc);
      formData.append("Reference",reference);
      formData.append("Customer",customer);
      formData.append("Group",group);
      formData.append("Currency",currency);
      formData.append("Business_Owner",business);
      formData.append("Analytic_Account_Type",analyticAccType);
      formData.append("Manager",manager);
      formData.append("Team_Name",team);
      formData.append("Administrator",administrator);
      formData.append("staff",staff);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(updateAnnAcc,formData)
      .then((res) => {
        console.log(res,"AccountTagAdd");
        if(res.data.status === true)
        {
            toast("Analytic Account  updated Successfully" , {type:"Success"})
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
    <div>
        <AccountNavbar showBelowMenu={true} title="Analytic Account" save={update === true ? updateData : save}/>
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
        <input type="text" placeholder='e.g Project XYZ' value={analyticAcc} onChange={(e) => setAnayticAcc(e.target.value)}/>
      </div>
      <div className="AnalyticContent">
        <div className="Analyticfirst">
          <div className="AnalyticInputcontent">
            <p>Reference</p>
            <input type="text" value={reference} onChange={(e) => setReference(e.target.value)}/>
          </div>
          <div className="Analyticselect">
            <p>Customer</p>
            <select value={customer} onChange={(e) => setCustomer(e.target.value)}>
              <option value=""></option>
              <option value="110">110</option>
              <option value="13103">13103</option>
              <option value="Aad Saud Alshaibani Alotaibi">Aad Saud Alshaibani Alotaibi</option>
              <option value="Aalok Kumar Bodhnath Maht">Aalok Kumar Bodhnath Maht</option>
              <option value="AALY ALQEMA EST.">AALY ALQEMA EST.</option>
            </select>
          </div>
          <div className="AnalyticMulti">
            <p>Business Owner </p>
          <Multiselect
            className="Analyticmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={business} // Preselected value to persist in dropdown
            onSelect={onSelect1} // Function will trigger on select event
            onRemove={onRemove1} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          </div>
          <div className="Analyticselect">
            <p>Manager</p>
            <select value={manager} onChange={(e) => setManager(e.target.value)}>
              <option value=""></option>
              <option value="110">110</option>
              <option value="13103">13103</option>
              <option value="Aad Saud Alshaibani Alotaibi">Aad Saud Alshaibani Alotaibi</option>
              <option value="Aalok Kumar Bodhnath Maht">Aalok Kumar Bodhnath Maht</option>
              <option value="AALY ALQEMA EST.">AALY ALQEMA EST.</option>
            </select>
          </div>
          <div className="AnalyticInputcontent">
            <p>Team Name</p>
            <input type="text" value={team} onChange={(e) => setTeam(e.target.value)}/>
          </div>
          <div className="Analyticselect">
            <p>Administrator</p>
            <select value={administrator} onChange={(e) => setAdministrator(e.target.value)}>
              <option value=""></option>
              <option value="110">110</option>
              <option value="13103">13103</option>
              <option value="Aad Saud Alshaibani Alotaibi">Aad Saud Alshaibani Alotaibi</option>
              <option value="Aad Saud Alshaibani Alotaibi">Aad Saud Alshaibani Alotaibi</option>
              <option value="Aalok Kumar Bodhnath Maht">Aalok Kumar Bodhnath Maht</option>
              <option value="AALY ALQEMA EST.">AALY ALQEMA EST.</option>
            </select>
          </div>
          <div className="AnalyticMulti">
            <p>Staff </p>
          <Multiselect
            className="Analyticmultiselect"
            options={options} // Options to display in the dropdown
            selectedValues={staff} // Preselected value to persist in dropdown
            onSelect={onSelect2} // Function will trigger on select event
            onRemove={onRemove2} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          </div>
        </div>
        <div className="AnaylticContentSecond">
        <div className="Analyticselect">
            <p>Group</p>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
              <option value=""></option>
              <option value="Macca Projects">Macca Projects</option>
              <option value="Yanbae Projects">Yanbae Projects</option>
              <option value="ِِAl Ahsa Projects">ِِAl Ahsa Projects</option>
              <option value="Central Region Projects">Central Region Projects</option>
              <option value="Al Baha Projects">Al Baha Projects</option>
            </select>
          </div>
        <div className="Analyticselect">
            <p>Currency</p>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value=""></option>
              {getCorrency.map((item,index) => {
                return(
                  <>
                  <option value={item.CURRENCY}>{item.CURRENCY}</option>
                  </>
                )
              })}
            </select>
          </div>
        <div className="Analyticselect">
            <p>Analytic Account Type</p>
            <select value={analyticAccType} onChange={(e) => setAnayticAccType(e.target.value)}>
              <option></option>
              {getAnaAccType.map((item,index) => {
                return(
                  <>
                  <option value={item.ANALYTIC_ACCOUNT_TYPE}>{item.ANALYTIC_ACCOUNT_TYPE}</option>
                  </>
                )
              })}
            </select>
          </div>
        </div>
      </div>
      </div>
     
        </div>
        <ToastContainer/>
    </div>
  )
}

export default AddAnalyticAccount