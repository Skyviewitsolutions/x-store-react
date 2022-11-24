import React,{useEffect, useState} from 'react'
import './AddJournal.css';
import Nav from "react-bootstrap/Nav";
import AdvanceSetting from './AdvanceSetting/AdvanceSetting';
import JournalEntires from './JournalEntires/JournalEntires';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import { endpoints } from '../../../services/endpoints';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const AddJournal = (props) => {

  const [events, setEvents] = useState("JournalEntires");
  const getAuthtoken = localStorage.getItem("authtoken");
const userAuth = localStorage.getItem("userAuth");

  const [journalName , setJournalName] = useState("");
  const [journalType , setJournalType] = useState("");
  const [shortCode , setShortCode] = useState("");
  const [nextNum , setNextNum] = useState("");
  const [debitAcc , setDebitAcc] = useState("");
  const [creditAcc , setCreditAcc] = useState("");
  const [currency , setCurrency] = useState("");
  const [acctypeAllow, setAccTypeAllow] = useState("");
  const [accAllow , setAccAllow] = useState("");
  const [lockPost , setLockPost] = useState(false);
  const [update , setUpdate] = useState("");
 
   
  const addJournalUrl = endpoints.Journals.addJournals;

  const save = () => {
  const formData = new FormData();
  formData.append("Journal_Name",journalName);
  formData.append("Journal_Type",journalType);
  formData.append("Short_Code",shortCode);
  formData.append("Next_Numer",nextNum);
  formData.append("Def_Debit_Account",debitAcc);
  formData.append("Def_Credit_Account",creditAcc);
  formData.append("Currency",currency);
  formData.append("Acc_Type_Allowd",acctypeAllow);
  formData.append("Acc_Allowd",accAllow);
  formData.append("Lock_Enteries",lockPost);
  formData.append("User_Authorization" , getAuthtoken)
  formData.append("User_AuthKey" , userAuth);
  
  if (journalName === "") {
    toast("journalName required !", { type: "warning" });
  } else if (journalType === "") {
    toast("journalType is required !", { type: "warning" });
  }else if(shortCode === "")
  {
    toast("Short Code is required !", { type: "warning" });
  } 
  else if (nextNum === "") {
    toast("Next Number is required !", { type: "warning" });
  } else if (debitAcc === "") {
    toast("Default Debit Account is required !", { type: "warning" });
  } else if (creditAcc === "") {
    toast("Default Credit Account is required !", { type: "warning" });
  } else if (currency === "") {
    toast("Currency is required !", { type: "warning" });
  } else if (acctypeAllow === "") {
    toast("Account Types Allowed is required !", { type: "warning" });
  } else if (accAllow === "") {
    toast("Accounts Allowed is required !", { type: "warning" });
  }
  else if (lockPost === "") {
    toast("Lock Posted Entries with Hash is required !", { type: "warning" });
  }
   else {
    axios
        .post(addJournalUrl, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Journals Added Sucessfully!", { type: "success" });
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
  }
  }

  const location = useLocation();

  const selectedData = location.state;
  console.log(selectedData , "selectedDataaaa")

  const updateJournalUrl = endpoints.Journals.updateJournals;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setJournalName(selectedData.JOURNALS_NAME);
      setJournalType(selectedData.JOURNALS_TYPE);
      setShortCode(selectedData.SHORT_CODE);
      setNextNum(selectedData.NEXT_NUMBER);
      setDebitAcc(selectedData.DEFAULT_DEBIT_ACCOUNT);
      setCreditAcc(selectedData.DEFAULT_CREDIT_ACCOUNT);
      setCurrency(selectedData.JOURNALS_CURRENCY);
      setAccTypeAllow(selectedData.ACCOUNT_TYPE_ALLOWD);
      setAccAllow(selectedData.ACCOUNT_ALLOWD);
      setLockPost(selectedData.LOCK_POSTED_ENTERIES);
    }
  }, [selectedData]);

  const updateData = () => {
    if (journalName === "") {
      toast("journalName required !", { type: "warning" });
    } else if (journalType === "") {
      toast("journalType is required !", { type: "warning" });
    }else if(shortCode === "")
    {
      toast("Short Code is required !", { type: "warning" });
    } 
    else if (nextNum === "") {
      toast("Next Number is required !", { type: "warning" });
    } else if (debitAcc === "") {
      toast("Default Debit Account is required !", { type: "warning" });
    } else if (creditAcc === "") {
      toast("Default Credit Account is required !", { type: "warning" });
    } else if (currency === "") {
      toast("currency is required !", { type: "warning" });
    } else if (acctypeAllow === "") {
      toast("Account Types Allowed is required !", { type: "warning" });
    } else if (accAllow === "") {
      toast("Accounts Allowed is required !", { type: "warning" });
    }
    else if (lockPost === "") {
      toast("Lock Posted Entries with Hash is required !", { type: "warning" });
    }
     else {
      const formData = new FormData();
      formData.append("ID", selectedData.JOURNALS_ID);
      formData.append("Journal_Name", journalName);
      formData.append("Journal_Type", journalType);
      formData.append("Short_Code", shortCode);
      formData.append("Next_Numer", nextNum);
      formData.append("Def_Debit_Account", debitAcc);
      formData.append("Def_Credit_Account", creditAcc);
      formData.append("Currency", currency);
      formData.append("Acc_Type_Allowd", acctypeAllow);
      formData.append("Acc_Allowd", accAllow);
      formData.append("Lock_Enteries", lockPost); 
      formData.append("User_Authorization" , getAuthtoken)
      formData.append("User_AuthKey" , userAuth);
      axios
        .post(updateJournalUrl, formData)
        .then((res) => {
          console.log(res,"ressss")
          if (res.data.status == true) {
            toast("Journal Updated Sucessfully!", { type: "Success" });
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
     }
  }

   return (
    <>
     <AccountNavbar showBelowMenu={true} title = "Journal" save={update === true ? updateData : save} showCanelBtn={true}/>
    <div className="JournalMainCon">
        <div className="JournalContainer">
            <p>Journal Name</p>
            <input type="text" value={journalName} onChange={(e) => setJournalName(e.target.value)}/>
            <div className="Journalinput">
            <p>Type</p>
            <select value={journalType} onChange={(e)=> setJournalType(e.target.value)}>
                <option value="Sales">Sales</option>
                <option value="Purchase">Purchase</option>
                <option value="Case">Case</option>
                <option value="Bank">Bank</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
            </div>
            <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home" >
            <Nav.Item
              className="detailslink"
              onClick={ ()=> setEvents("JournalEntires")}>
              <Nav.Link href="">Journal Entires</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="detailslink"
              onClick={ ()=> setEvents("AdvanceSetting")}>
              <Nav.Link eventKey="link-1">Advance Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="AdvanceSettingNAv">
        {events === "JournalEntires" &&(
            <JournalEntires shortCode={shortCode} nextNum={nextNum} debitAcc={debitAcc} creditAcc={creditAcc} currency={currency} setShortCode={setShortCode} setNextNum={setNextNum} setDebitAcc={setDebitAcc} setCreditAcc={setCreditAcc} setCurrency={setCurrency}/>
          )}
          {events === "AdvanceSetting" && <AdvanceSetting acctypeAllow={acctypeAllow} accAllow={accAllow} lockPost={lockPost} setAccTypeAllow={setAccTypeAllow} setAccAllow={setAccAllow} setLockPost={setLockPost}/>}
        </div>
        <ToastContainer />
        </div>
    </div>
    </>
  )
}

export default AddJournal