import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";
import "./Currencies.css";
const Currencies = () => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddCurrencies");
  };

  const [currencies, setCurrencies] = useState([]);
  const CurrenciesAllUrl = endpoints.Currency.allCurrency;

  const getCurrencies = () => {
    axios
    .post(CurrenciesAllUrl)
    .then((res) => {
      if (res.data.status === true) {
        setCurrencies(res.data.data);
      } else if (res.data.status === false) {
        alert(res.data.message);
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
    axios.post(deleteCurrenciesUrl,formData)
    .then((res) => {
      if(res.data.status === true)
      {
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
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Currencies"
      />
      <CustomTable data={currencies} column={column} />
      <ToastContainer/>
    </div>
  );
};

export default Currencies;
