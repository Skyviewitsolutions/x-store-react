import React,{useState} from 'react'
import './ForgetPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import XSTORE from "../../assets/Images/xstore.png"
import {useNavigate} from 'react-router-dom';
const ForgetPassword = () => {
  const[email, setEmail] = useState("");
  const Navigate = useNavigate();
const  RedirectToLogin = () => {
   Navigate("/Login");
}
const RedirectToChangePassword = () => {
  Navigate("/ChangePassword");
}
  return (
    <div className="EmailMainContainer">
    <div className="EmailContainer mt-5">
     <div className="row Emaillogo mt-4">
            <img src={XSTORE} alt="logo" />
        </div>
        <div className="Emailform">
          <label>Your Email</label><br/>
          <input type="email" required="Please Enter Email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
       
          <button className="Emailbtn mt-4">Confirm</button>
        <div className="mt-2 Emailback">
        <span onClick={RedirectToLogin}>Back to login</span>
            </div>
    </div>
    </div>
  )
}

export default ForgetPassword