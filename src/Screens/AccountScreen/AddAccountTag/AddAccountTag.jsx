import React, { useEffect, useState } from "react";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import "./AddAccountTag.css";
import Multiselect from "multiselect-react-dropdown";
import { endpoints } from "../../../services/endpoints";
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddAccountTag = () => {

  const [selectedValue, setSelectedValue] = useState();
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const navigate = useNavigate()

  const AddAccountTag = endpoints.AccountTag.addAccountTag;
  const [tagName, setTagName] = useState("");
  const [aplicibility, setApliciblity] = useState("");
  const [account, setAccount] = useState([]);
  const [account1, setAccount1] = useState([]);
  const [update , setUpdate] = useState("");

  const [selectedAccountTag , setSelectedAccountTag] = useState({})

     const options = [
    { name: "110101002 Zulfi Box", id: 1 },
    { name: "110101001 Riyadh Management Fund", id: 2 },
    { name: "110101005 Bisha Box", id: 2 },
    { name: "110101006 Yanbu Fund", id: 3 },
    { name: "110101009 Jeddah Fund", id: 4 },
  ];

  const onSelect = (selectedList, selectedItem) => {
  setAccount(selectedList);
    const allAcc = selectedList.map((itm,ind) => {
      return itm.name;
    });
    setAccount1(allAcc)
  };

  const onRemove = (selectedList, removedItem) => {
    setAccount(selectedList);
    const allAcc = selectedList.map((itm,ind) => {
      return itm.name;
    });
    setAccount1(allAcc)
  };

  const formData = new FormData();

  formData.append("Tag_Name", tagName);
  formData.append("Applicability", aplicibility);
  formData.append("Accounts", JSON.stringify(account));
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);

  const save = () => {
    const formData = new FormData();
    formData.append("Tag_Name", tagName);
    formData.append("Applicability", aplicibility);
    formData.append("Accounts", account1);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    if(tagName === "") 
    {
        toast("Tag Name is Required !" , {type:"warning"});
    }
    else if(aplicibility === "")
    {
        toast("Aplicibilty Name is Required!" , {type:"warning"});
    }
    else if(selectedValue === "")
    {
        toast("Account Name is Required!",{type:"warning"});
    }
    else{
        axios.post(AddAccountTag,formData)
        .then((res) => {
            console.log(res,"AccountTagAdd");
            if(res.data.status === true)
            {
                toast("Account Tag Added Successfully" , {type:"success"})
                setTimeout(() => {
                  navigate('/AccountTags')
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
  console.log(selectedData , "SelectedData here")


  const accountTagupdateUrl = endpoints.AccountTag.updateAccountTag;

  const singleAccTag = endpoints.AccountTag.singleAccountTag;

  const getSingleAccTag = (ID) => {
    const formData = new FormData();
    formData.append("Id" ,ID);
    formData.append("User_Authorization" , getAuthtoken)
    axios.post(singleAccTag ,formData)
    .then((res) => {
      const val = res.data.data;
      setSelectedAccountTag(val);
      setUpdate(true);
      setTagName(val.Tag_Name);
      setApliciblity(val.Applicability);
      setAccount1(val.Accounts);
      var allAccTag = [];
      val.Accounts.map((itm,ind) => {
        var at = options.filter((itmm , indd) => {
          return itmm.name == itm;
        })
        at = at[0];
        allAccTag.push(at); 
      });
      setAccount(allAccTag)
    })
    .catch((err) => {
      console.log(err,"error")
    })
  }

  
  useEffect(() => {
    if(selectedData) {
        setUpdate(true);
        getSingleAccTag(selectedData.ACCOUNT_TAG_ID)
    }
   },[selectedData])

  const updateData = () => {
    if(tagName === "")
    {
      toast("Tag Name is Required !" ,{type:"warning"});
    }
    else if(aplicibility === "")
    {
      toast("Applicibility Name is Required," ,{type:"warning"}); 
    }
    else if(selectedValue === "")
    {
      toast("Account Name is Required!" ,{type:"warning"});
    }
    else{
      const formData = new FormData();
      formData.append("ID" , selectedData.ACCOUNT_TAG_ID
      );
      formData.append("Tag_Name" ,tagName);
      formData.append("Applicability" , aplicibility);
      formData.append("Accounts" ,account1);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth)
      axios.post(accountTagupdateUrl,formData)
      .then((res) => {
        if(res.data.status === true)
        {
          toast("Account Tag is updated Successfully !",{type:"success"})
          setTimeout(() => {
            navigate('/AccountTags')
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
    <div>
      <AccountNavbar showBelowMenu={true} title="Account Tag" save={update === true ? updateData : save} showCanelBtn={true}/>
      <div className="AddAccountTagcon">
        <div className="AddAccountTagContent">
          <p>Tag Name</p>
          <input type="text" value={tagName} onChange={(e) => setTagName(e.target.value)}/>
        </div>
        <div className="AddAccountTagContent">
          <p>Applicability</p>
          <select value={aplicibility} onChange={(e) => setApliciblity(e.target.value)}>
            <option value="" ></option>
            <option value="Account">Account</option>
            <option value="Taxes" >Taxes</option>
          </select>
        </div>
        <div className="AddAccountTag_Multi">
          <p>Accounts</p>
          <Multiselect
            className="Addmultiselect"
            // value={account}
            // onChange={(e) => setAccount(e.target.value)}
            options={options} // Options to display in the dropdown
            selectedValues={account} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddAccountTag;
