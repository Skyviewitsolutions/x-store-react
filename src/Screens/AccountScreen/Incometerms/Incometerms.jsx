import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";
import Currencies from "../Currencies/Currencies";
import "./Incometerms.css";
const Incometerms = () => {
  const navigate = useNavigate();

  const [incoTerms, setIncomeTerms] = useState([]);
  const IncoTermsUrl = endpoints.IncomeTerms.allIncomeTerms;

  const getIncometerms = ()=> {
    axios.post(IncoTermsUrl)
    .then((res) => {
        if(res.data.status === true)
        {
            setIncomeTerms(res.data.data);
        }
        else if(res.data.status === false)
        {
           alert(res.data.message);
        }
    })
    .catch((err) => {
        console.log(err,"error");
    })
  }

  useEffect(() => {
    getIncometerms();
  },[])

  const deleteIncoTermsUrl = endpoints.IncomeTerms.deleteIncomeTerms;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" , data);
    axios.post(deleteIncoTermsUrl,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        toast("Income Terms IS deleted Succesfully!",{type:"success"})
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

  const handleUpdate = (data) => {
  const val = incoTerms.filter((itm,index) => {
    return itm.ID == data
  })

  const orgValue = val[0];
    navigate("/AddIncoTerms",{state:orgValue});
  }

  const column = [
    { label: "Code", name: "INCOME_CODE" },
    { label: "Name", name: "INCOME_NAME" },
    {
      label: "Action",
      name: "ID",
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
    navigate("/AddIncoTerms");
  };
  return (
    <>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Income Terms"
      />
      <CustomTable data={incoTerms} column={column} />
      <ToastContainer/>
    </>
  );
};

export default Incometerms;
