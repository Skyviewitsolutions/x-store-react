import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";

const AccountTypes = () => {
  const navigate = useNavigate();
  const [accType, setAccType] = useState([]);
  const allAccType = endpoints.AccountType.allAccountType;

  const getAccType = () => {
    axios
      .post(allAccType)
      .then((res) => {
        if (res.data.status === true) {
          setAccType(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
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
    axios.post(deleteAcctypeUrl,formData)
    .then((res) => {
      getAccType();
      if(res.data.status === true)
      {
        toast("Account Type Deleted Successfully",{type:"success"});
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
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                 
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
                  onClick={() => deleteItem(value)}
                  
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
      <ToastContainer/>
    </div>
  );
};

export default AccountTypes;
