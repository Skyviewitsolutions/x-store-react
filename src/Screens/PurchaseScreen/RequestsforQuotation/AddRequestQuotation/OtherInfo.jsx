import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import "./OtherInfo.css";


const OtherInfo = () => {

  const [incoTerms , setIncoTerms] = useState([]);
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
      if(res.data.status === true){
        setIncoTerms(res.data.data)
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

  return (
    <div>
      <div className="OtherInfoCon">
        <div className="otherInfotext">
          <div className="otherinfo">
            <p>Receipt Date</p>
            <input type="date" />
          </div>
          <div className="otherinfo">
            <p>Incoterm</p>
            <select>
              <option>Choose any one</option>
             {incoTerms.map((item,index) => {
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
            <select>
              <option>Choose any one</option>
              <option>Accountant-Ryd</option>
              <option>Account 02</option>
              <option>CRUH 01</option>
              <option>CRUH 02</option>
              <option>CRUH 03</option>
              <option>CRUH 04</option>
              <option>Data Entry</option>
            </select>
          </div>
          <div className="otherinfo">
            <p>Fiscal Position</p>
            <select>
              <option>Choose any one</option>
              <option></option>
              <option>Accountant-Ryd</option>
              <option>Account 02</option>
            
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
