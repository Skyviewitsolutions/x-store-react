import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import Currencies from "../Currencies/Currencies";
import "./Incometerms.css";
const Incometerms = () => {


  const navigate = useNavigate();

  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const [incoTerms, setIncomeTerms] = useState([]);
  const IncoTermsUrl = endpoints.IncomeTerms.allIncomeTerms;

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const getIncometerms = ()=> {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken)
    formData.append("User_AuthKey" , userAuth);
    axios.post(IncoTermsUrl,formData)
    .then((res) => {
        if(res.data.status === true)
        {
            var val = res.data.data;
            val = val.reverse();
            const filterIncometerm = val.filter((itm,ind) => {
              return itm.DELETE_STATUS != "X"
            })
            setIncomeTerms(filterIncometerm);
          
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
    getIncometerms();
  },[])

  const deleteIncoTermsUrl = endpoints.IncomeTerms.deleteIncomeTerms;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" , data);
    formData.append("User_Authorization" , getAuthtoken)
    formData.append("User_AuthKey" , userAuth);
    axios.post(deleteIncoTermsUrl,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        toast("Income Terms IS deleted Succesfully!",{type:"success"})
        setShow(false)
        setDeleteConfirm(false)
        setSelectedData("")
        getIncometerms()
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

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

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
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer/>
    </>
  );
};

export default Incometerms;
