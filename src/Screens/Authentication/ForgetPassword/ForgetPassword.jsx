import React,{useState} from 'react'
import './ForgetPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import XSTORE from "../../../assets/Images/xstore1.png"
import {useNavigate} from 'react-router-dom';
import validator from 'validator';

const ForgetPassword = () => {

  const[email, setEmail] = useState("");
  const[emailError,setEmailError]  = useState("");
  const Navigate = useNavigate();
const  RedirectToLogin = () => {
   Navigate("/");
}
const RedirectToChangePassword = () => {
  if(!email)
  {
    setEmailError("Please Enter Your valid email");
  }
  else if(!validator.isEmail(email)){
    setEmailError("InValid Email ")
  }
  else{
    setEmailError("");
    Navigate("/ChangePassword");
  alert("submited successfully");
  }
}
  return (
    <div className="EmailMainContainer">
    <div className="EmailContainer ">
     <div className="row Emaillogo mt-4">
            <img src={XSTORE} alt="logo" />
        </div>
        <div className="Emailform">
          <label>Your Email</label><br/>
          <input type="email" required="Please Enter Email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
          <span style={{color:"red"}}>{emailError }</span>
        </div>
       
          <button className="Emailbtn mt-4" onClick={RedirectToChangePassword}>Confirm</button>
        <div className="mt-2 Emailback">
        <span onClick={RedirectToLogin}>Back to login</span>
            </div>
    </div>
    </div>
  )
}

export default ForgetPassword