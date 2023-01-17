import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import "./OtherInfo.css";


const OtherInfo = (props) => {
  const {incoTerms,setIncoTerms,recepitDate,setRecepitDate,purchaseRep,setPurchaseRep,fisicalPosition,setFisicalPosition} = props
  const [incoTermsAll , setIncoTermsAll] = useState([]);
  const incoTermsUrl = endpoints.IncomeTerms.allIncomeTerms;
  const navigate = useNavigate();

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken);
    formData.append("User_AuthKey" , userAuth);
    axios.post(incoTermsUrl,formData)
    .then((res) => {
      console.log(res,"income")
      if(res.data.status === true){
        var val = res.data.data;
        const filterIncome = val.filter((itm,ind) => {
          return itm.DELETE_STATUS != "X"
        })
        setIncoTermsAll(filterIncome)
      }else if(res.data.status === false){
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
      console.log(err , "something went wrong");
    })
  },[])

  console.log(fisicalPosition,"fico")

  return (
    <div>
      <div className="OtherInfoCon">
        <div className="otherInfotext">
          <div className="otherinfo">
            <p>Receipt Date</p>
            <input type="date" value={recepitDate} onChange={(e) => setRecepitDate(e.target.value)} />
          </div>
          <div className="otherinfo">
            <p>Incoterm</p>
            <select value={incoTerms} onChange={(e) => setIncoTerms(e.target.value)}>

              <option value="">Choose any one</option>
             {incoTermsAll.map((item,index) => {
              return(
                <>
                <option value={item.ID}>{item.INCOME_NAME}</option>
                </>
              )
             })}
            </select>
          </div>
        </div>
        <div className="otherInfotext2">
          <div className="otherinfo">
            <p>Purchase Representative</p>
            <select value={purchaseRep} onChange={(e) => setPurchaseRep(e.target.value)}>
              <option>Choose any one</option>
              <option value="Accountant-Ryd">Accountant-Ryd</option>
              <option value="Account 02">Account 02</option>
              <option value="CRUH 01">CRUH 01</option>
              <option value="CRUH 02">CRUH 02</option>
              <option value="CRUH 03">CRUH 03</option>
              <option value="CRUH 04">CRUH 04</option>
              <option value="Data Entry">Data Entry</option>
            </select>
          </div>
          <div className="otherinfo">
            <p>Fiscal Position</p>
            <select value={fisicalPosition} onChange={(e) => setFisicalPosition(e.target.value)}>
              <option value="">Choose any one</option>
              <option value="Accountant-Ryd">Accountant-Ryd</option>
              <option value="Account 02">Account 02</option>
               
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
