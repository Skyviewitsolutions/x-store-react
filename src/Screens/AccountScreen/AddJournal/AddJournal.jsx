import React, { useEffect, useState } from "react";
import "./AddJournal.css";
import Nav from "react-bootstrap/Nav";
import AdvanceSetting from "./AdvanceSetting/AdvanceSetting";
import JournalEntires from "./JournalEntires/JournalEntires";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import { endpoints } from "../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const AddJournal = (props) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState("JournalEntires");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [journalName, setJournalName] = useState("");
  const [journalType, setJournalType] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [nextNum, setNextNum] = useState("");
  const [debitAcc, setDebitAcc] = useState("");
  const [creditAcc, setCreditAcc] = useState("");
  const [currency, setCurrency] = useState("");
  const [acctypeAllow, setAccTypeAllow] = useState([]);
  const [acctypeAllow1, setAccTypeAllow1] = useState([]);
  const [accAllow, setAccAllow] = useState([]);
  const [accAllow1, setAccAllow1] = useState([]);
  const [lockPost, setLockPost] = useState(false);
  const [update, setUpdate] = useState("");

  const [selectedValue, setSelectedValue] = useState({});

  const addJournalUrl = endpoints.Journals.addJournals;

  const save = () => {
    const formData = new FormData();
    formData.append("Journal_Name", journalName);
    formData.append("Journal_Type", journalType);
    formData.append("Short_Code", shortCode);
    formData.append("Next_Numer", nextNum);
    formData.append("Def_Debit_Account", debitAcc);
    formData.append("Def_Credit_Account", creditAcc);
    formData.append("Currency", currency);
    formData.append("Acc_Type_Allowd", acctypeAllow1);
    formData.append("Acc_Allowd", accAllow1);
    formData.append("Lock_Enteries", lockPost);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    if (journalName === "") {
      toast("journalName required !", { type: "warning" });
    } else if (journalType === "") {
      toast("journalType is required !", { type: "warning" });
    } else if (shortCode === "") {
      toast("Short Code is required !", { type: "warning" });
    } else if (nextNum === "") {
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
    } else if (lockPost === "") {
      toast("Lock Posted Entries with Hash is required !", { type: "warning" });
    } else {
      axios
        .post(addJournalUrl, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Journals Added Sucessfully!", { type: "success" });
            setTimeout(() => {
              navigate("/Journal");
            }, 1000);
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }
  };

  const location = useLocation();

  const selectedData = location.state;

  console.log(selectedData, "data here");

  const updateJournalUrl = endpoints.Journals.updateJournals;

  // useEffect(() => {
  //   if (selectedData) {
  //     setUpdate(true);
  //     setJournalName(selectedData.JOURNALS_NAME);
  //     setJournalType(selectedData.JOURNALS_TYPE);
  //     setShortCode(selectedData.SHORT_CODE);
  //     setNextNum(selectedData.NEXT_NUMBER);
  //     setDebitAcc(selectedData.DEFAULT_DEBIT_ACCOUNT);
  //     setCreditAcc(selectedData.DEFAULT_CREDIT_ACCOUNT);
  //     setCurrency(selectedData.JOURNALS_CURRENCY);
  //     setAccTypeAllow(selectedData.ACCOUNT_TYPE_ALLOWD);
  //     setAccAllow(selectedData.ACCOUNT_ALLOWD);
  //     setLockPost(selectedData.LOCK_POSTED_ENTERIES);
  //   }
  // }, [selectedData]);

  const updateData = () => {
    if (journalName === "") {
      toast("journalName required !", { type: "warning" });
    } else if (journalType === "") {
      toast("journalType is required !", { type: "warning" });
    } else if (shortCode === "") {
      toast("Short Code is required !", { type: "warning" });
    } else if (nextNum === "") {
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
    } else if (lockPost === "") {
      toast("Lock Posted Entries with Hash is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("ID", selectedData.JOURNALS_ID);
      formData.append("Journal_Name", journalName);
      formData.append("Journal_Type", journalType);
      formData.append("Short_Code", shortCode);
      formData.append("Next_Numer", nextNum);
      formData.append("Def_Debit_Account", debitAcc);
      formData.append("Def_Credit_Account", creditAcc);
      formData.append("Currency", currency);
      formData.append("Acc_Type_Allowd", acctypeAllow1);
      formData.append("Acc_Allowd", accAllow1);
      formData.append("Lock_Enteries", lockPost);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(updateJournalUrl, formData)
        .then((res) => {
          console.log(res, "ressss");
          if (res.data.status == true) {
            toast("Journal Updated Sucessfully!", { type: "success" });
            setTimeout(() => {
              navigate("/Journal");
            }, 1000);
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast("something went wrong", { type: "error" });
        });
    }
  };

  const options = [
    { name: "Receviable", id: 1 },
    { name: "Payable", id: 2 },
    { name: "Bank and Cash", id: 2 },
    { name: "Credit Card", id: 3 },
    { name: "Current Assets", id: 4 },
    { name: "Non Current Assets", id: 5 },
    { name: "PrePayments", id: 6 },
    { name: "Fixed Assets", id: 7 },
  ];
  const options1 = [
    { name: "110101001 صندوق ادارة الرياض", id: 1 },
    { name: "110101003 صندوق الهفوف", id: 2 },
    { name: "110101004 صندوق الباحة", id: 2 },
    { name: "110101005 صندوق بيشة", id: 3 },
    { name: "110101007 صندوق مكة", id: 4 },
  ];

  // -----------multiSelect options--------------
  const onSelect1 = (selectedList, selectedItem) => {
    setAccTypeAllow(selectedList);

    const allAcctype = selectedList.map((itm, ind) => {
      return itm.name;
    });
    setAccTypeAllow1(allAcctype);
  };

  const onRemove1 = (selectedList, removedItem) => {
    setAccTypeAllow(selectedList);
    const allAcctype = selectedList.map((itm, ind) => {
      return itm.name;
    });
    setAccTypeAllow1(allAcctype);
  };
  const onSelect2 = (selectedList, selectedItem) => {
    setAccAllow(selectedList);
    const accAllow = selectedList.map((itm, ind) => {
      return itm.name;
    });
    setAccAllow1(accAllow);
  };

  const onRemove2 = (selectedList, removedItem) => {
    setAccAllow(selectedList);
    const accAllow = selectedList.map((itm, ind) => {
      return itm.name;
    });
    setAccAllow1(accAllow);
  };

  const singleJournalUrl = endpoints.Journals.singleJournals;

  const getSingleJournal = (ID) => {
    const formData = new FormData();
    formData.append("ID", ID);
    formData.append("user_Authorization", getAuthtoken);
    axios
      .post(singleJournalUrl, formData)
      .then((res) => {
        const val = res.data.data;
        setSelectedValue(val);
        setUpdate(true);
        setJournalName(val.Journal_Name);
        setJournalType(val.Journal_Type);
        setShortCode(val.Short_Code);
        setNextNum(val.Next_Numer);
        setDebitAcc(val.Def_Debit_Account);
        setCreditAcc(val.Def_Credit_Account);
        setCurrency(val.Currency);
        setLockPost(val.Lock_Enteries);
        setAccTypeAllow1(val.Acc_Type_Allowd);
        setAccAllow1(val.Acc_Allowd);
        var allAccType = [];
        val.Acc_Type_Allowd.map((itm, ind) => {
          var acct = options.filter((itmm, indd) => {
            return itmm.name == itm;
          });
          acct = acct[0];
          allAccType.push(acct);
        });
        setAccTypeAllow(allAccType);
        
        var allAccAllow = [];
        val.Acc_Allowd.map((itm ,ind) => {
          var accA = options1.filter((itmm,ind) => {
            return itmm.name = itm
          });
          accA = accA[0];
          allAccAllow.push(accA)
          setAccAllow(allAccAllow);
        })

      })
      .catch((err) => {
        console.log(err, "error here");
      });
  };

  useEffect(() => {
    if (selectedData) {
      getSingleJournal(selectedData.JOURNALS_ID);
    }
  }, [selectedData]);

  return (
    <>
      <AccountNavbar
        showBelowMenu={true}
        title="Journal"
        save={update === true ? updateData : save}
        showCanelBtn={true}
      />
      <div className="JournalMainCon">
        <div className="JournalContainer">
          <p>Journal Name</p>
          <input
            type="text"
            value={journalName}
            onChange={(e) => setJournalName(e.target.value)}
          />
          <div className="Journalinput">
            <p>Type</p>
            <select
              value={journalType}
              onChange={(e) => setJournalType(e.target.value)}
            >
              <option>Choose any one</option>
              <option value="Sales">Sales</option>
              <option value="Purchase">Purchase</option>
              <option value="Case">Case</option>
              <option value="Bank">Bank</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>
          <div className="detail_journal">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item
                className={
                  events === "JournalEntires"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }
                onClick={() => setEvents("JournalEntires")}
              >
                <Nav.Link
                  href=""
                  className={
                    events === "JournalEntires"
                      ? "navLinkActive"
                      : "navLinkDeactive"
                  }
                >
                  Journal Entires
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={
                  events === "AdvanceSetting"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }
                onClick={() => setEvents("AdvanceSetting")}
              >
                <Nav.Link
                  eventKey="link-1"
                  className={
                    events === "AdvanceSetting"
                      ? "navLinkActive"
                      : "navLinkDeactive"
                  }
                >
                  Advance Settings
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="AdvanceSettingNAv">
            {events === "JournalEntires" && (
              <JournalEntires
                shortCode={shortCode}
                nextNum={nextNum}
                debitAcc={debitAcc}
                creditAcc={creditAcc}
                currency={currency}
                setShortCode={setShortCode}
                setNextNum={setNextNum}
                setDebitAcc={setDebitAcc}
                setCreditAcc={setCreditAcc}
                setCurrency={setCurrency}
              />
            )}
            {events === "AdvanceSetting" && (
              <AdvanceSetting
                acctypeAllow={acctypeAllow}
                accAllow={accAllow}
                lockPost={lockPost}
                setAccTypeAllow={setAccTypeAllow}
                setAccAllow={setAccAllow}
                setLockPost={setLockPost}
                accAllow1={accAllow1}
                setAccAllow1={setAccAllow1}
                acctypeAllow1={acctypeAllow1}
                setAccTypeAllow1={setAccTypeAllow1}
                setSelectedValue={setSelectedValue}
                selectedValue={selectedValue}
                getSingleJournal={getSingleJournal}
                onSelect1={onSelect1}
                onRemove1={onRemove1}
                onSelect2={onSelect2}
                onRemove2={onRemove2}
                options={options}
                options1={options1}
              />
            )}
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AddJournal;
