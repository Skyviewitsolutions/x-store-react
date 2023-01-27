import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import "./Currencies.css";
const Currencies = () => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddCurrencies");
  };

  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const [currencies, setCurrencies] = useState([]);
  const CurrenciesAllUrl = endpoints.Currency.allCurrency;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getCurrencies = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
    .post(CurrenciesAllUrl ,formData)
    .then((res) => {
      if (res.data.status === true) {
        var val = res.data.data;
        val = val.reverse();
        const filterCurrency = val.filter((itm,ind) => {
          return itm.DELETE_STATUS != "X"
        })
        setCurrencies(filterCurrency);
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
      console.log(err, "error");
    });
  }

  useEffect(() => {
    getCurrencies();
  }, []);

  const deleteCurrenciesUrl = endpoints.Currency.deleteCurrency;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" , data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(deleteCurrenciesUrl,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        setShow(false)
        setDeleteConfirm(false)
        setSelectedData("")
        getCurrencies();
        toast("Currencies Deleted Successfully!" ,{type:"success"});
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
 
  const handleUpdate = (data) =>{
    const val = currencies.filter((itm,index) => {
      return itm.ID == data
    })
    const orgValue = val[0];
    navigate("/AddCurrencies" , {state:orgValue});
    }

  const column = [
    { label: "Currencies", name: "CURRENCY" },
    { label: "Symbol", name: "CURRENCY_UNIT" },
    { label: "Date", name: "CREATE_DATE" },
    { label: "CurrentRate", name: "CURRENCY_RATE" },
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
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Currencies"
      />
      <CustomTable data={currencies} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer/>
    </div>
  );
};

export default Currencies;
