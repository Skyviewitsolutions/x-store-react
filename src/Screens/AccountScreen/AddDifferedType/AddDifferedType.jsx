import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import { endpoints } from '../../../services/endpoints';
import './AddDifferedType.css'

const AddDifferedType = () => {

  const navigate = useNavigate()
  const [defExType , setDefExType] = useState("");
  const [parentCate , setParentCate] = useState("");
  const [virtual , setVirtual] = useState(false);
  const [journal , setJournal] = useState("");
  const [assetAcc , setAssetAcc] = useState("");
  const [assAcc , setAssAcc] = useState("");
  const [expenceAcc , setExpenceAcc] = useState("");
  const [analAcc , setAnnaAcc] = useState("");
  const [time , setTime] = useState("");
  const [num , setNum] = useState("");
  const [every , setEvery] = useState("");
  const [auto , setAuto] = useState(false);
  const [group , setGroup] = useState(false);
  const [creation ,setCreation] = useState("");
  const [record ,setRecord] = useState(false);
  const [computation,setComputaion] = useState("");
  const [accordance,setAccordance] = useState(false);
  const [update , setUpdate] = useState("");

  const [getJournal,setGetJournal] = useState([]);
  const [getAnalyticAcc , setGetAnayticAcc] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const getJournalUrl = endpoints.Journals.allJournals;

  const getAnalyticAccoun = endpoints.AnalyticAcc.allAnaAcc;

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
   axios.post(getJournalUrl,formData)
   .then((res) => {
    if(res.data.status === true)
    {
      setGetJournal(res.data.data);
    }
    else if(res.data.status === false)
    {
      if(res.data.code === 3)
      {
        toast("Session expired , Please re-login",{type:"warning"})
        navigate('/');
      }
      else{
       toast(res.data.message,{type:"error"});
      }
    }
   })
   .catch((err) => {
    console.log(err,"error");
   })
  },[])

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(getAnalyticAccoun,formData)
    .then((res) => {
     if(res.data.status === true)
     {
       setGetAnayticAcc(res.data.data);
     }
     else if(res.data.status === false)
     {
      if(res.data.code === 3)
            {
              toast("Session expired , Please re-login",{type:"warning"})
              navigate('/');
            }
            else{
             toast(res.data.message,{type:"error"});
            }
     }
    })
    .catch((err) => {
     console.log(err,"error");
    })
    
   },[])

   const addDefExTypeUrl = endpoints.DefExpenseType.addDefExType;

const save = () => {
    if(defExType === "")
    {
      toast("Asset Type Is Required",{type:"warning"});
    }
    else if(parentCate === "")
    {
      toast("Parent Category Is Required!",{type:"warning"});
    }
    else if(virtual === "")
    {
      toast("Virtual Category Is Required!",{type:"warning"});
    }
    else if(journal === "")
    {
      toast("Joural Is Required!",{type:"warning"});
    }
    else if(assetAcc === "")
    {
      toast("Asset Account Is Required!",{type:"warning"});
    }
    else if(expenceAcc === "")
    {
      toast("Exense Account Is Required!",{type:"warning"});
    }
    else if(analAcc === "")
    {
      toast("Analyic Account Is Required!",{type:"warning"});
    }
    else if(time === "")
    {
      toast("Time Method Based On Is Required!",{type:"warning"});
    }
    else if(num === "")
    {
      toast("Number of Entries Is Required!",{type:"warning"});
    }
    else if(every === "")
    {
      toast("One Entry Every Is Required!",{type:"warning"});
    }
    else if(auto === "")
    {
      toast("Auto-confirm Assets Is Required!",{type:"warning"});
    }
    else if(group === "")
    {
      toast("Group Journal Entries Is Required!",{type:"warning"});
    }
    else if(creation === "")
    {
      toast("Automatic Creation Is Required!",{type:"warning"});
    }
    else if(record === "")
    {
      toast("Create record for each quantity Is Required!",{type:"warning"});
    }
   
    else if(computation === "")
    {
      toast("Computation Method Is Required!",{type:"warning"});
    }
    else if(accordance === "")
    {
      toast("Accordance with the time Is Required!",{type:"warning"});
    }
    else{
      const formData = new FormData();
       formData.append("Deffered_Type",defExType);
       formData.append("Parent_Category",parentCate);
       formData.append("Vartual",virtual);
       formData.append("Journal",journal);
       formData.append("Time_Method_Based_On",time);
       formData.append("Asset_Account",assetAcc);
       formData.append("Dep_Asset_Account",assAcc);
       formData.append("Dep_Expense_Account",expenceAcc);
       formData.append("Number_Of_Enteries",num);
       formData.append("Analytic_Account",analAcc);
       formData.append("One_Entery_Every",every);
       formData.append("Auto_Confirm_Assets",auto);
       formData.append("Group_Jr_Enteries",group);
       formData.append("Create_Reacord",record);
       formData.append("Computation_Method",computation);
       formData.append("Auto_Creation",creation);
       formData.append("Accordance_Time",accordance);
       formData.append("User_Authorization", getAuthtoken);
       formData.append("User_AuthKey", userAuth);
      axios.post(addDefExTypeUrl,formData)
      .then((res) => {
        if(res.data.status === true)
        {
          toast("Differed Expense Type Added Successfully",{type:"success"})
          setTimeout(() => {
            navigate('/DifferedExpenseType')
          }, 1000);
        }
        else if(res.data.status === false)
        {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err,"error");
      })
    }
  }

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");

  useEffect(() => {
    if(selectedData)
    {
      setUpdate(true)
      setDefExType(selectedData.EXPENSE_TYPE);
      setParentCate(selectedData.PRODUCT_CATEGORY);
      setVirtual(selectedData.VIRTUAL_STATUS);
      setJournal(selectedData.JOURNAL_INFORMATION);
      setAssetAcc(selectedData.ASSET_ACCOUNT);
      setAssAcc(selectedData.ASSETS_EXPENSE_ACCOUNT);
      setExpenceAcc(selectedData.ASSET_EXPENSE_ACCOUNT);
      setAnnaAcc(selectedData.ANALYTI_ACCOUNT);
      setTime(selectedData.TIME_METHOD);
      setNum(selectedData.NUMBER_OF_ENTERIES);
      setEvery(selectedData.ONE_ENTERY_EVERY);
      setAuto(selectedData.AUTO_CONFIRM_ASSETS);
      setGroup(selectedData.GROUP_JOURNAL_ENTERY);
      setCreation(selectedData.AUTOMATIC_CREATION);
      setRecord(selectedData.CREATE_RECORD);
      setComputaion(selectedData.COMPUTATION_METHOD);
      setAccordance(selectedData.ACCORDANCE_TIME);
      }
  },[selectedData])

  const updatedefExTypeUrl = endpoints.DefExpenseType.updateDefExType;

  const updateData = () => {
    if(defExType === "")
    {
      toast("Asset Type Is Required",{type:"warning"});
    }
    else if(parentCate === "")
    {
      toast("Parent Category Is Required!",{type:"warning"});
    }
    else if(virtual === "")
    {
      toast("Virtual Category Is Required!",{type:"warning"});
    }
    else if(journal === "")
    {
      toast("Joural Is Required!",{type:"warning"});
    }
    else if(assetAcc === "")
    {
      toast("Asset Account Is Required!",{type:"warning"});
    }
    else if(expenceAcc === "")
    {
      toast("Exense Account Is Required!",{type:"warning"});
    }
    else if(analAcc === "")
    {
      toast("Analyic Account Is Required!",{type:"warning"});
    }
    else if(time === "")
    {
      toast("Time Method Based On Is Required!",{type:"warning"});
    }
    else if(num === "")
    {
      toast("Number of Entries Is Required!",{type:"warning"});
    }
    else if(every === "")
    {
      toast("One Entry Every Is Required!",{type:"warning"});
    }
    else if(auto === "")
    {
      toast("Auto-confirm Assets Is Required!",{type:"warning"});
    }
    else if(group === "")
    {
      toast("Group Journal Entries Is Required!",{type:"warning"});
    }
    else if(creation === "")
    {
      toast("Automatic Creation Is Required!",{type:"warning"});
    }
    else if(record === "")
    {
      toast("Create record for each quantity Is Required!",{type:"warning"});
    }
   
    else if(computation === "")
    {
      toast("Computation Method Is Required!",{type:"warning"});
    }
    else if(accordance === "")
    {
      toast("Accordance with the time Is Required!",{type:"warning"});
    }
    else{
      const formData = new FormData();
      formData.append("ID",selectedData.ID);
      formData.append("Deffered_Type",defExType);
      formData.append("Parent_Category",parentCate);
      formData.append("Vartual",virtual);
      formData.append("Journal",journal);
      formData.append("Time_Method_Based_On",time);
      formData.append("Asset_Account",assetAcc);
      formData.append("Dep_Asset_Account",assAcc);
      formData.append("Dep_Expense_Account",expenceAcc);
      formData.append("Number_Of_Enteries",num);
      formData.append("Analytic_Account",analAcc);
      formData.append("One_Entery_Every",every);
      formData.append("Auto_Confirm_Assets",auto);
      formData.append("Group_Jr_Enteries",group);
      formData.append("Create_Reacord",record);
      formData.append("Computation_Method",computation);
      formData.append("Auto_Creation",creation);
      formData.append("Accordance_Time",accordance);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
       axios.post(updatedefExTypeUrl,formData)
       .then((res) => {
        if(res.data.status === true)
        {
          toast("Asset Type is updated Successfully !",{type:"success"})
          setTimeout(() => {
            navigate('/DifferedExpenseType')
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
    <AccountNavbar showBelowMenu={true}  title="Differed Expense Type" save={update === true ? updateData : save} showCanelBtn={true}/>
    <div className="AddDiffered_TypeCon">
        <div className="Diff_Type">
          <p>Deferred Expense Type</p>
          <input type="text" value={defExType} onChange={(e) => setDefExType(e.target.value)}/>
        </div>
        <div className="DiffTypetextbox">
          <div className="DiffTypeparent">
            <div className="Diff_parentcat">
              <p>Parent Category</p>
              <select value={parentCate} onChange={(e) => setParentCate(e.target.value)}>
              <option>Select any one</option>
                <option value="The machine and equipments">The machine and equipments</option>
                <option value="The Cars">The Cars</option>
                <option value="Prehab houses">Prehab houses</option>
                <option value="Leaseholds improvements">Leaseholds improvements</option>
                <option value="Lab equipments">Lab equipments</option>
              </select>
            </div>
            <div className="Diff_parentcat">
              <label htmlFor='virtual'>Is Virtual</label>
              <input type="checkbox" value={virtual} onChange={() => setVirtual(!virtual)} checked={virtual} id="virtual"/>
            </div>
          </div>
          {/* <div className="assettypebox">
            <p>Hierarchy</p>
            <div className="assetalertbox">
              <p>No hierarchy position.</p>
            </div>
          </div> */}
        </div>
        <div className="Diff_details">
          <div className="Diff_details1">
            <p>Journal Entries</p>
            <div className="Diff_text">
              <p>Journal</p>
              <select value={journal} onChange={(e) => setJournal(e.target.value)}>
                <option value=""></option>
                {
                  getJournal.map((itm,index) => {
                    return(
                      <>
                      <option value={itm.JOURNALS_NAME}>{itm.JOURNALS_NAME}</option>
                      </>
                    )
                  })
                }
              </select>
            </div>
            <div className="Diff_text">
              <p>Asset Account</p>
              <select value={assetAcc} onChange={(e) => setAssetAcc(e.target.value)}>
                <option>Select any one</option>
                <option value="110101001 Riyadh Management Found">110101001 Riyadh Management Found</option>
                <option value="110101002 Zulfi Box">110101002 Zulfi Box</option>
                <option value="110101003 Hoffuf Found">110101003 Hoffuf Found</option>
                <option value="110101004 Patito Box">110101004 Patito Box</option>
                <option value="110101005 Bisha Box">110101005 Bisha Box</option>
              </select>
            </div>
            <div className="Diff_text">
              <p>Depreciation Entries: Asset Account</p>
              <select value={assAcc} onChange={(e) => setAssAcc(e.target.value)}>
              <option>Select any one</option>
                <option value="110101001 Riyadh Management Found">110101001 Riyadh Management Found</option>
                <option value="110101002 Zulfi Box">110101002 Zulfi Box</option>
                <option value="110101003 Hoffuf Found">110101003 Hoffuf Found</option>
                <option value="110101004 Patito Box">110101004 Patito Box</option>
                <option value="110101005 Bisha Box">110101005 Bisha Box</option>
              </select>
            </div>
            <div className="Diff_text">
              <p>Depreciation Entries: Expense Account</p>
              <select value={expenceAcc} onChange={(e) => setExpenceAcc(e.target.value)} >
              <option>Select any one</option>
                <option value="110101001 Riyadh Management Found">110101001 Riyadh Management Found</option>
                <option value="110101002 Zulfi Box">110101002 Zulfi Box</option>
                <option value="110101003 Hoffuf Found">110101003 Hoffuf Found</option>
                <option value="110101004 Patito Box">110101004 Patito Box</option>
                <option value="110101005 Bisha Box">110101005 Bisha Box</option>
              </select>
            </div>
            <div className="Diff_text">
              <p>Analytic Account</p>
              <select value={analAcc} onChange={(e) => setAnnaAcc(e.target.value)}>
                <option value=""></option>
               {
                getAnalyticAcc.map((itm,index) => {
                  return(
                    <>
                    <option value={itm.ANALYTIC_ACCOUNT}>{itm.ANALYTIC_ACCOUNT}</option>
                    </>
                  )
                })
               }
              </select>
            </div>
          </div>
          <div className="Diff_details2">
            <p>Periodicity</p>
            <div className="diff_radio">
              <p>Time Method Based On</p>
              <input type="radio" name="method" checked={time==="Number of Entries"} value={time} onChange={(e) => setTime("Number of Entries")} id="time"/>
              <label htmlFor='time'>Number of Entries</label>
            </div>
            <div className="diff_radio">
              <p></p>
              <input type="radio" name="method" checked={time==="Ending Date"} value={time} onChange={(e) => setTime("Ending Date")} id="Date"/>
              <label htmlFor='Date'>Ending Date</label>
            </div>
            <div className="diff_text2">
              <p>Number of Entries</p>
              <input type="text" value={num} onChange={(e) => setNum(e.target.value)}/>
             </div>
            <div className="diff_text2">
              <p>One Entry Every Months</p>
              <input type="text" value={every} onChange={(e) => setEvery(e.target.value)}/>
             </div>
          </div>
        </div>
        <div className="Diff_AddiDepri">
          <div className="Diff_Additional">
            <p>Additional Options</p>
            <div className="Diff_typecheckbox">
              <label htmlFor='auto'>Auto-confirm Assets</label>
              <input type="checkbox" value={auto} onChange={(e) => setAuto(!auto)} checked={auto} id="auto"/>
            </div>
            <div className="Diff_typecheckbox">
              <label htmlFor='group'>Group Journal Entries</label>
              <input type="checkbox" value={group} onChange={(e) => setGroup(!group)} checked={group} id='group'/>
            </div>
            <div className="Diff_typeselect">
              <p>Automatic Creation</p>
              <select value={creation} onChange={(e) => setCreation(e.target.value)}>
              <option>Select any one</option>
                <option value="Invoice">Invoice</option>
                <option value="Material Receipts">Material Receipts</option>
                <option value="Purchase Order">Purchase Order</option>
              </select>
            </div>
            <div className="Diff_typecheckbox">
              <label htmlFor='record'>Create record for each quantity</label>
              <input type="checkbox" value={record} onChange={() => setRecord(!record)} checked={record} id='record'/>
            </div>
          </div>
          <div className="Dif_Depreciation">
            <p>Depreciation Method</p>
            <div className="dif_distradio">
              <p>Computation Method</p>
              <input type="radio" name="Depreciation" value={computation} onChange={(e) => setComputaion("Linear")} checked={computation==="Linear"} id='computation'/>
              <label htmlFor='computation'>Linear</label>
            </div>
            <div className="dif_distradio">
              <p></p>
              <input type="radio" name="Depreciation" value={computation} onChange={(e) => setComputaion("Degressive")} checked={computation==="Degressive"} id='Degressive'/>
              <label htmlFor='Degressive'>Degressive</label>
            </div>
            <div className="deff_checkbox">
              <label htmlFor='accordance'>Accordance with the time</label>
              <input type="checkbox" value={accordance} onChange={(e) => setAccordance(!accordance)} checked={accordance} id='accordance'/>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>

    </>
  )
}

export default AddDifferedType