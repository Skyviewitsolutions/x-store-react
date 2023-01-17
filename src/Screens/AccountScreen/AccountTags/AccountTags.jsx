import axios from "axios";
import React,{useState} from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import "./AccountTags.css";
const AccountTags = () => {
  const navigate = useNavigate();

  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const [accountTag , setAccountTag] = useState([]);
  const AccountTagallUrl = endpoints.AccountTag.allAccountTag;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getAccountTag = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(AccountTagallUrl , formData)
    .then((res) => {
        console.log(res,"response");
        if(res.data.status === true)
        {
          var val = res.data.data;
          val = val.reverse();
           
            const filterAccTag = val.filter((itm,ind) => {
              return itm.DELETE_STATUS != "X"
            })
            setAccountTag(filterAccTag);
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

  useEffect(() => {
    getAccountTag();
  },[]);

  const accountTagUrl = endpoints.AccountTag.deleteAccountTag;


  const deleteItem = (data) => {
   const formData = new FormData();
   formData.append("User_Authorization", getAuthtoken);
   formData.append("User_AuthKey", userAuth);
   formData.append("ID" , data);
   axios.post(accountTagUrl,formData)
   .then((res) => {
    if(res.data.status === true)
    {
      setShow(false)
      setDeleteConfirm(false)
      setSelectedData("")
      getAccountTag();
      toast("Account Tag Deleted Successfully!" ,{type:"success"});
    }
    else if(res.data.message === false)
    {
      toast(res.data.message,{type:"error"});
    }
   })
   .catch((err) => {
    console.log(err,"error");
   })
  }

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

  
    const handleUpdate = (data) => {
      const val = accountTag.filter((itm,index) => {
        return itm.ACCOUNT_TAG_ID == data
      })
      const orgValue = val[0];
      navigate("/AddAccountTag" , {state:orgValue});
     
    }
    
  const column = [
    { label: "Tag Name", name: "TAG_NAME" },
    { label: "Applicability", name: "APPLICABILITY" },
    {
      label: "Actions",
      name: "ACCOUNT_TAG_ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit size={23} color="#4f4e4d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                <MdDelete size={23} color="4f4e4d"
                  onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}
                 style={{cursor:"pointer"}}
                />
              </div>
            </>
          );
        },
      },
    },
  ];

  const handleCreatePage = () => {
    navigate("/AddAccountTag");
  };
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        title="Account Tag"
        handleCreatePage={handleCreatePage}
      />
      <CustomTable data={accountTag} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default AccountTags;
