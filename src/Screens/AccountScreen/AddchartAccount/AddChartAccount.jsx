import React, { useEffect, useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import "./AddChartAccount.css";
import { FaList, FaExternalLinkAlt } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import { endpoints } from "../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddChartAccount = () => {

  const navigate = useNavigate()
  const [code, setCode] = useState("");
  const [chartAccName, setChartAccName] = useState("");
  const [type, setType] = useState("");
  const [defTax, setDefTax] = useState([]);
  const [tag, setTag] = useState([]);

  const [defTax2, setDefTax2] = useState([]);
  const [tag2, setTag2] = useState([]);

  const [group, setGroup] = useState("");
  const [accCurrency, setAccCurrency] = useState("");
  const [allowRec, setAllowRec] = useState("");
  const [deprecated, setDeprecated] = useState(false);
  const [centralized, setCentralized] = useState(false);
  const [update, setUpdate] = useState("");

  const [selectedChartAcc, setSelectedChartAcc] = useState({});

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [selectedValue, setSelectedValue] = useState();

  const options = [
    { name: "VAT Goods Purchases-STD (Purchases)", id: 1 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 3 },
    { name: "Purchasing", id: 4 },
    { name: "Sales VAT-STD (Sales)", id: 5 },
    { name: "Sales VAT-Zero Rated (Sales)", id: 6 },
  ];
  const option = [
    { name: "Operating Activities", id: 1 },
    { name: "Financing Activities", id: 2 },
    { name: "Investing & Extraordinary Activities", id: 3 },
  ];

  const onSelect1 = (selectedList, selectedItem) => {
    setDefTax(selectedList);

    const allDefTax = selectedList.map((itm, ind) => {
      return itm.name;
    });
    setDefTax2(allDefTax);
  };

  const onRemove1 = (selectedList, removedItem) => {
    setDefTax(selectedList);
    const allDefTax = selectedList.map((itm, ind) => {
      return itm.name;
    });
    setDefTax2(allDefTax);
  };

  const onSelect2 = (selectedList, selectedItem) => {
    setTag(selectedList);
    const alltags = selectedList.map((itm, ind) => {
      return itm.name;
    });

    setTag2(alltags);
  };

  const onRemove2 = (selectedList, removedItem) => {
    setTag(selectedList);
    const alltags = selectedList.map((itm, ind) => {
      return itm.name;
    });

    setTag2(alltags);
  };

  const addChartAccc = endpoints.ChartAccount.addChartAcc;

  const [curr, setCurr] = useState([]);

  const CurrencyUrl = endpoints.Currency.allCurrency;

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(CurrencyUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          setCurr(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const save = () => {
    const formData = new FormData();
    formData.append("Code", code);
    formData.append("Name", chartAccName);
    formData.append("Type", type);
    formData.append("Default", defTax2);
    formData.append("Tags", tag2);
    formData.append("Group", group);
    formData.append("Account_Currency", accCurrency);
    formData.append("Allow_Reconciliation", allowRec);
    formData.append("Deprecated", deprecated);
    formData.append("Centralized", centralized);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
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
            setTimeout(() => {
              navigate('/ChartAccount')
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

  const updateChartAccURL = endpoints.ChartAccount.updateChartAcc;

  const singleChartAcc = endpoints.ChartAccount.singleChartAcc;

  const getSingleChartAcc = (ID) => {
    const formData = new FormData();
    formData.append("Id", ID);
    formData.append("User_Authorization", getAuthtoken);
    axios
      .post(singleChartAcc, formData)
      .then((res) => {   
        const val = res.data.data;
        setSelectedChartAcc(val);
        setUpdate(true);
        setCode(val.Code);
        setChartAccName(val.Name);
        setType(val.Type);
        setGroup(val.Group);
        setAccCurrency(val.Account_Currency);
        setAllowRec(val.Allow_Reconciliation);
        setDeprecated(val.Centralized);
        setCentralized(val.Deprecated);
        setDefTax2(val.Default_Taxes);
        setTag2(val.Chart_Tags);
        var allDefTaxes = [];
        val.Default_Taxes.map((itm, ind) => {
          var dd = options.filter((itmm, indd) => {
            return itmm.name == itm;
          });
          dd = dd[0];
          allDefTaxes.push(dd);
        });
        setDefTax(allDefTaxes);
        var allTags = [];
        val.Chart_Tags.map((itm, ind) => {
          var dd = option.filter((itmm, indd) => {
            return itmm.name == itm;
          });
          dd = dd[0];
          allTags.push(dd);
        });
        setTag(allTags);
      })
      .catch((err) => {
        console.log(err, "error here");
      });
  };

  useEffect(() => {
    if (selectedData) {
      getSingleChartAcc(selectedData.ID);
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
      formData.append("Id", selectedData.ID);
      formData.append("Code", code);
      formData.append("Name", chartAccName);
      formData.append("Type", type);
      formData.append("Default", defTax2);
      formData.append("Tags", tag2);
      formData.append("Group", group);
      formData.append("Account_Currency", accCurrency);
      formData.append("Allow_Reconciliation", allowRec);
      formData.append("Deprecated", deprecated);
      formData.append("Centralized", centralized);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(updateChartAccURL, formData)
        .then((res) => {
          console.log(res, "ressss");
          if (res.data.status == true) {
            toast("Chart Of Account Updated Sucessfully!", { type: "success" });
            setTimeout(() => {
              navigate('/ChartAccount')
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
  return (
    <>
      <AccountNavbar
        showBelowMenu={true}
        title="Chart of Account"
        save={update === true ? updateData : save}
        showCanelBtn={true}
      />
      <div className="Accmaincon">
        <div className="AddChartAccountContainer">
          {/* <div className="AddChartAccountHead">
            <div className="AddAccounthead1">
              <FaList
                size="25px"
                style={{ color: "#848484", marginTop: "5px" }}
              />
              <div className="AddChartAccText">
                <p>journal Item</p>
              </div>
            </div>
          </div> */}
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
                <option>Choose any one</option>
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
            <div className="Add_Multi">
              <p>Default Taxes</p>

              {/* <select value={defTax} onChange={(e) => setDefTax(e.target.value)}>
                <option>Choose any one</option>
                <option value="VAT Goods Purchases-STD (Purchases)">VAT Goods Purchases-STD (Purchases)</option>
                <option value="Purchasing">Purchasing</option>
                <option value="Sales VAT-STD (Sales)">Sales VAT-STD (Sales)</option>
                <option value="Sales VAT-Zero Rated (Sales)">Sales VAT-Zero Rated (Sales)</option>
              </select> */}
              <Multiselect
                className="AddChartAccountMultiselect"
                options={options} // Options to display in the dropdown
                selectedValues={defTax} // Preselected value to persist in dropdown
                onSelect={onSelect1} // Function will trigger on select event
                onRemove={onRemove1} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
            <div className="Add_Multi">
              <p>Tags</p>
              {/* <select value={tag} onChange={(e) => setTag(e.target.value)}>
                <option value="Operating Activities">Operating Activities</option>
                <option value="Financing Activities">Financing Activities</option>
                <option value="Investing & Extraordinary Activities">Investing & Extraordinary Activities</option>
              </select> */}
              <Multiselect
                className="AddChartAccountMultiselect"
                options={option} // Options to display in the dropdown
                selectedValues={tag} // Preselected value to persist in dropdown
                onSelect={onSelect2} // Function will trigger on select event
                onRemove={onRemove2} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
            <div className="AddAccountCon1">
              <p>Group</p>
              <select value={group} onChange={(e) => setGroup(e.target.value)}>
                <option>Choose any one</option>
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
              <select
                value={accCurrency}
                onChange={(e) => setAccCurrency(e.target.value)}
              >
              <option>Choose any one</option>
                {curr.map((item, index) => {
                  return (
                    <>
                      <option>{item.CURRENCY}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="AddAccountCheckbox">
              <label htmlFor="allowRec">Allow Reconciliation</label>
              <input
                type="Checkbox"
                value={allowRec}
                onChange={() => setAllowRec(!allowRec)}
                checked={allowRec}
                id="allowRec"
              />
            </div>
            <div className="AddAccountCheckbox">
              <label htmlFor="deprecated">Deprecated</label>
              <input
                type="Checkbox"
                value={deprecated}
                onChange={() => setDeprecated(!deprecated)}
                checked={deprecated}
                id="deprecated"
              />
            </div>
            <div className="AddAccountCheckbox">
              <label htmlFor="centralized">Centralized</label>
              <input
                type="Checkbox"
                value={centralized}
                onChange={() => setCentralized(!centralized)}
                checked={centralized}
                id="centralized"
              />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddChartAccount;
