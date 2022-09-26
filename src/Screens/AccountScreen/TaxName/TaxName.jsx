import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";
import "./TaxName.css";
import axios from "axios";
import { useState } from "react";
import { FaBullseye } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { Update } from "@mui/icons-material";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const TaxName = () => {
  const navigate = useNavigate();
  const allTaxUrl = endpoints.TaxName.allTaxName;
  const [taxName, setTaxname] = useState([]);

  const getTaxName = () => {
    axios
    .post(allTaxUrl)
    .then((res) => {
      console.log(res, "response");
      if (res.data.status === true) {
        setTaxname(res.data.data);
      } else if (res.data.status === false) {
        toast(res.data.message, { type: "error" });
      }
    })
    .catch((err) => {
      console.log(err, "error");
    });
  }

  useEffect(() => {
    getTaxName();
  }, []);

  const deleteTaxUrl = endpoints.TaxName.deleteTaxName;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("Id",data);
    axios.post(deleteTaxUrl,formData)
    .then((res) =>{
    if(res.data.status === true)
    {
      getTaxName();
      toast("Tax Name Is Deleted Successfully!",{type:"success"});
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
    const val = taxName.filter((itm,index) => {
      return itm.ID == data
    })
    const orgValue = val[0];
    navigate("/AddTaxName" , {state:orgValue});
  }


  const column = [
    { label: "TaxName", name: "TAX_NAME" },
    { label: "TaxScope", name: "TAX_SCOPE" },
    { label: "Label on Invoices", name: "LABEL_ON_INVOICES" },
    {
      label:"Action",
      name:"ID",
      options:{
          customBodyRender:(value,tableMeta,updateValue) => {
           return(
              <>
               <div className="updtdlt">
                  <FiEdit size={23} color="#4f434d"  onClick={() => handleUpdate(value)}/>
                  <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}/>
              </div>
              </>
           )
          }
      }
  }
  ];

  const handleCreatePage = () => {
    navigate("/AddTaxName");
  };
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="TaxName"
      />
      <CustomTable data={taxName} column={column} />
      <ToastContainer />
    </div>
  );
};

export default TaxName;
