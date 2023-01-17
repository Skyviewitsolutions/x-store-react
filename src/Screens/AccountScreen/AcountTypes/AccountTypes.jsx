import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";

const AccountTypes = () => {
  const navigate = useNavigate();

  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const [accType, setAccType] = useState([]);

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const allAccType = endpoints.AccountType.allAccountType;

  const getAccType = () => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios
      .post(allAccType , formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse()
         
          const filterAcctype = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
          })
          setAccType(filterAcctype);
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
        console.log(err, "something went wrong");
      });
  };

  useEffect(() => {
    getAccType();
  }, []);

  const deleteAcctypeUrl =endpoints.AccountType.deleteAccountType;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" ,data);
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios.post(deleteAcctypeUrl,formData)
    .then((res) => {
      getAccType();
      if(res.data.status === true)
      {
        toast("Account Type Deleted Successfully",{type:"success"});
        setShow(false)
        setDeleteConfirm(false)
        setSelectedData("")
        getAccType()
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
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

  const handleUpdate = (data) => {
    const val = accType.filter((itm,index) => {
      return itm.ACCOUNT_TYPE_ID == data
     })
     const orgValue = val[0];
     navigate("/AddAccountType",{state:orgValue});
  }

  const column = [
    { label: "Account Types", name: "ACCOUNT_TYPE" },
    { label: "Type", name: "TYPE" },
    { label: "Internal Group", name: "INTERNAL_GROUP" },
    {
      label: "Action",
      name: "ACCOUNT_TYPE_ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{cursor:"pointer"}}
                 
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
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
    navigate("/AddAccountType");
  };
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Account Type"
      />
      <CustomTable data={accType} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer/>
    </div>
  );
};

export default AccountTypes;
