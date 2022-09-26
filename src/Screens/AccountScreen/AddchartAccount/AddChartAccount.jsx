import React, { useEffect, useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import "./AddChartAccount.css";
import { FaList, FaExternalLinkAlt } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import { endpoints } from "../../../services/endpoints";
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AddChartAccount = () => {
  const [code, setCode] = useState("");
  const [chartAccName, setChartAccName] = useState("");
  const [type, setType] = useState("");
  const [defTax, setDefTax] = useState("");
  const [tag, setTag] = useState("");
  const [group, setGroup] = useState("");
  const [accCurrency, setAccCurrency] = useState("");
  const [allowRec, setAllowRec] = useState("");
  const [deprecated, setDeprecated] = useState(false);
  const [centralized, setCentralized] = useState(false);
  const [update,setUpdate] = useState("");

  const [selectedValue, setSelectedValue] = useState();

  const options = [
    { name: "VAT Goods Purchases-STD (Purchases)", id: 1 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 3 },
    { name: "Sales VAT-STD (Sales)", id: 4 },
    { name: "Sales VAT-Zero Rated (Sales)", id: 5 },
  ];
  const option = [
    { name: "Operating Activities", id: 1 },
    { name: "Financing Activities", id: 2 },
    { name: "Investing & Extraordinary Activities", id: 3 },
  ];
  const onSelect1 = (selectedList, selectedItem) => {
    setDefTax(selectedList);
  };

  const onRemove1 = (selectedList, removedItem) => {
    setDefTax(selectedList);
  };
  const onSelect2 = (selectedList, selectedItem) => {
    setTag(selectedList);
  };

  const onRemove2 = (selectedList, removedItem) => {
    setTag(selectedList);
  };

  const addChartAccc = endpoints.ChartAccount.addChartAcc;

  const [curr , setCurr] = useState([]);

    const CurrencyUrl = endpoints.Currency.allCurrency;

    useEffect(() => {
    axios.post(CurrencyUrl)
    .then((res) => {
      if(res.data.status === true)
      {
       setCurr(res.data.data);
      }
      else if(res.data.status === false)
      {
        alert(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err,"error")
    })
    },[])


  const save = () => {
    const formData = new FormData();
    formData.append("Code", code);
    formData.append("Name", chartAccName);
    formData.append("Type", type);
    formData.append("Default", defTax);
    formData.append("Tags", tag);
    formData.append("Group", group);
    formData.append("Account_Currency", accCurrency);
    formData.append("Allow_Reconciliation", allowRec);
    formData.append("Deprecated", deprecated);
    formData.append("Centralized", centralized);
    if (code === "") {
      toast("Code is Required!", { type: "warning" });
    } else if (chartAccName === "") {
      toast("Chart of Account Name is Required!", { type: "warning" });
    } else if (type === "") {
      toast("Type is Required!", { type: "warning" });
    } else if (defTax === "") {
      toast("default tax is required", { type: "warning" });
    } else if (tag === "") {
      toast("Tag is Required!", { type: "warning" });
    } else if (group === "") {
      toast("Group is Required !", { type: "warning" });
    } else if (accCurrency === "") {
      toast("Account Currency is Required!", { type: "warning" });
    } else if (allowRec === "") {
      toast("Allow Reconciliation is Required!", { type: "warning" });
    } else if (deprecated === "") {
      toast("Deprecated Is Required", { type: "warning" });
    } else if (centralized === "") {
      toast("Centralized Is Required!", { type: "warning" });
    } else {
      axios
        .post(addChartAccc, formData)
        .then((res) => {
          if (res.data.status == true) {
            toast("Chart of Account Added Sucessfully!", { type: "success" });
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
  console.log(selectedData , "selectedDataaaa")

  const updateChartAccURL = endpoints.ChartAccount.updateChartAcc;

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setCode(selectedData.CHART_CODE);
      setChartAccName(selectedData.CHART_OF_NAME);
      setType(selectedData.CHART_TYPE);
      setDefTax(selectedData.DEFAULT_TAXES);
      setTag(selectedData.CHART_OF_TAGS);
      setGroup(selectedData.CHART_GROUP);
      setAccCurrency(selectedData.ACCOUNT_CURRENCY);
      setAllowRec(selectedData.ALLOW_RECONCILIATION);
      setDeprecated(selectedData.CHART_DEPRECATED);
      setCentralized(selectedData.CHART_CENTRALIZED);
    }
  }, [selectedData]);

  const updateData = () => {
    if (code === "") {
      toast("Code is Required!", { type: "warning" });
    } else if (chartAccName === "") {
      toast("Chart of Account Name is Required!", { type: "warning" });
    } else if (type === "") {
      toast("Type is Required!", { type: "warning" });
    } else if (defTax === "") {
      toast("default tax is required", { type: "warning" });
    } else if (tag === "") {
      toast("Tag is Required!", { type: "warning" });
    } else if (group === "") {
      toast("Group is Required !", { type: "warning" });
    } else if (accCurrency === "") {
      toast("Account Currency is Required!", { type: "warning" });
    } else if (allowRec === "") {
      toast("Allow Reconciliation is Required!", { type: "warning" });
    } else if (deprecated === "") {
      toast("Deprecated Is Required", { type: "warning" });
    } else if (centralized === "") {
      toast("Centralized Is Required!", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Id",selectedData.ID);
      formData.append("Code", code);
      formData.append("Name", chartAccName);
      formData.append("Type", type);
      formData.append("Default", defTax);
      formData.append("Tags", tag);
      formData.append("Group", group);
      formData.append("Account_Currency", accCurrency);
      formData.append("Allow_Reconciliation", allowRec);
      formData.append("Deprecated", deprecated);
      formData.append("Centralized", centralized);
      axios.post(updateChartAccURL,formData)
      .then((res) => {
        console.log(res,"ressss")
        if (res.data.status == true) {
          toast("Chart Of Account Updated Sucessfully!", { type: "Success" });
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
      <AccountNavbar
        showBelowMenu={true}
        title="chart of Account"
        save={update === true ? updateData : save}
      />
      <div className="Accmaincon">
        <div className="AddChartAccountContainer">
          <div className="AddChartAccountHead">
            <div className="AddAccounthead1">
              <FaList
                size="25px"
                style={{ color: "#848484", marginTop: "5px" }}
              />
              <div className="AddChartAccText">
                <p>journal Item</p>
              </div>
            </div>
          </div>
          <div className="AddChartAccountContent">
            <div className="AddAccountCon1">
              <p>Code</p>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="AddAccountCon1">
              <p>Name</p>
              <input
                type="text"
                value={chartAccName}
                onChange={(e) => setChartAccName(e.target.value)}
              />
            </div>
            <div className="AddAccountCon1">
              <p>Type</p>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Receivable">Receivable</option>
                <option value="Bank and Cash">Bank and Cash</option>
                <option value="Current Assets">Current Assets</option>
                <option value="Non-current Assets">Non-current Assets</option>
                <option value="Prepayments">Prepayments</option>
                <option value="Fixed Assets">Fixed Assets</option>
                <option value="Payable">Payable</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Current Liabilities">Current Liabilities</option>
                <option value="Non-current Liabilities">
                  Non-current Liabilities
                </option>
              </select>
            </div>
            <div className="AddChartAccountMultiselect">
              <p>Default Taxes</p>
              <Multiselect
                className="AddChartAccmultiselect"
                options={options} // Options to display in the dropdown
                selectedValues={selectedValue} // Preselected value to persist in dropdown
                onSelect={onSelect1} // Function will trigger on select event
                onRemove={onRemove1} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
            <div className="AddChartAccountMultiselect">
              <p>Tags</p>
              <Multiselect
                className="AddChartAccmultiselect"
                options={option} // Options to display in the dropdown
                selectedValues={selectedValue} // Preselected value to persist in dropdown
                onSelect={onSelect2} // Function will trigger on select event
                onRemove={onRemove2} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
            <div className="AddAccountCon1">
              <p>Group</p>
              <select value={group} onChange={(e) => setGroup(e.target.value)}>
                <option value="Bank">Bank</option>
                <option value="Other C.Assets">Other C.Assets</option>
                <option value="accumulated depreciation">
                  accumulated depreciation
                </option>
                <option value="Advance Payment">Advance Payment</option>
                <option value="Inventory/C.Assets">Inventory/C.Assets</option>
                <option value="Cash">Cash</option>
                <option value="sub embloyees">sub embloyees</option>
              </select>
            </div>
            <div className="AddAccountCon1">
              <p>Account Currency</p>
              <select value={accCurrency} onChange={(e) => setAccCurrency(e.target.value)}>
                <option></option>
                {
                  curr.map((item,index) => {
                    return(
                      <>
                      <option>{item.CURRENCY}</option>
                      </>
                    )
                  })
                }
              </select>
            </div>
            <div className="AddAccountCheckbox">
              <p>Allow Reconciliation</p>
              <input type="Checkbox"  value={allowRec} onChange={() => setAllowRec(!allowRec)} checked={allowRec}/>
            </div>
            <div className="AddAccountCheckbox">
              <p>Deprecated</p>
              <input type="Checkbox" value={deprecated} onChange={() => setDeprecated(!deprecated)} checked={deprecated}/>
            </div>
            <div className="AddAccountCheckbox">
              <p>Centralized</p>
              <input type="Checkbox" value={centralized} onChange={() => setCentralized(!centralized)} checked={centralized}/>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default AddChartAccount;
