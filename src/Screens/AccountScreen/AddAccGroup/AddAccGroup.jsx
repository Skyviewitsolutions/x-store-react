import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import { endpoints } from "../../../services/endpoints";
import "./AddAccGrup.css";

const AddAccGroup = () => {

  const navigate = useNavigate()
  const [codePre, setCodePre] = useState("");
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const [acc, setAcc] = useState("");
  const [bank , setBank] = useState([]);
  const [update , setUpdate] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const AccGrpAddUrl = endpoints.AccountGroup.addAccGrp;
  const BankUrl = endpoints.BankAccount.allBank;

  useEffect(() =>  {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
   axios.post(BankUrl,formData)
   .then((res) => {
    if(res.data.status === true)
    {
        setBank(res.data.data);
    }
    else if(res.data.status === false)
    {
        alert(res.data.message);
    }
   })
  },[])

  const save = () => {
    if (codePre === "") {
      toast("Code Prefix is Required !", { type: "warning" });
    } else if (name === "") {
      toast("Name is Required !", { type: "warning" });
    } else if (parent === "") {
      toast("Parent is Required!", { type: "warning" });
    } else if (acc === "") {
      toast("Account is Required!", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Code_Prefix", codePre);
      formData.append("Name", name);
      formData.append("Parent", parent);
      formData.append("Account", acc);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(AccGrpAddUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Account Group Added Successfully", { type: "success" });
            setTimeout(() => {
              navigate('/AccountGroup')
            }, 1000);
          } else if (res.data.status === false) {
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
          console.log(err, "something wrong");
        });
    }
  };

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData , "selectedData here");

  useEffect(() => {
  if(selectedData)
  {
   setUpdate(true);
   setCodePre(selectedData.CODE_PREFIX);
   setName(selectedData.ACCOUNT_GROUP_NAME);
   setParent(selectedData.ACCOUNT_PARENT);
   setAcc(selectedData.GROUP_ACCOUNT);
  }
  },[selectedData])

  const updateAccGrpUrl = endpoints.AccountGroup.updateAccGrp;

  const updateData = () => {
    if (codePre === "") {
        toast("Code Prefix is Required !", { type: "warning" });
      } else if (name === "") {
        toast("Name is Required !", { type: "warning" });
      } else if (parent === "") {
        toast("Parent is Required!", { type: "warning" });
      } else if (acc === "") {
        toast("Account is Required!", { type: "warning" });
      } else {
        const formData = new FormData();
        formData.append("ID",selectedData.ID)
        formData.append("Code_Prefix", codePre);
        formData.append("Name", name);
        formData.append("Parent", parent);
        formData.append("Account", acc);
        formData.append("User_Authorization", getAuthtoken);
        formData.append("User_AuthKey", userAuth);
        axios.post(updateAccGrpUrl,formData)
        .then((res) => {
            if(res.data.status === true)
            {
              toast("Account Group is updated Successfully !",{type:"success"})
              setTimeout(() => {
                navigate('/AccountGroup')
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
           toast(res.data.mrssage,{type:"error"});
          }
            }
           })
           .catch((err) => {
            console.log(err,"error");
           })
      }
  }
  return (
    <>
      <AccountNavbar showBelowMenu={true} title="Account Group" save={update === true ? updateData : save} showCanelBtn={true}/>
      <div className="AddAccGroupCon">
        <div className="AddAccgroupdetails">
          <div className="accgroupfirst">
            <div className="acctext">
              <p>Code Prefix</p>
              <input type="text" value={codePre} onChange={(e) => setCodePre(e.target.value)}/>
            </div>
            <div className="acctext">
              <p>Name</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="acctext">
              <p>Parent</p>
              <select value={parent} onChange={(e) => setParent(e.target.value)}>
                <option value=""></option>
                <option value="Bank">Bank</option>
                <option value="Other C.Assets">Other C.Assets</option>
                <option value="accumulated depreciation">accumulated depreciation</option>
                <option value="Advance Payment">Advance Payment</option>
                <option value="Inventory/C.Assets">Inventory/C.Assets</option>
                <option value="Cash">Cash</option>
                <option value="Sub employee">Sub employee</option>
              </select>
            </div>
            <div className="acctext">
              <p>Account</p>
              <select value={acc} onChange={(e) => setAcc(e.target.value)}> 
                <option value="">choose any one</option>
                {
                 bank.map((itm,index) => {
                return(
                    <>
                    <option value={itm.BANK_ACCOUNT_NAME}>{itm.BANK_ACCOUNT_NAME}</option>
                    </>
                )
                 })
                }
              </select>
            </div>
          </div>
          {/* <div className="accgroupsecond">
            <p>Hierarchy</p>
            <div className="accgroupalertbox">
              <p>No hierarchy position.</p>
            </div>
          </div> */}
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default AddAccGroup;
