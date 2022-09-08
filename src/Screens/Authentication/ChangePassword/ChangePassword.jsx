import React,{useState} from 'react'
import './ChangePassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import XSTORE from '../../../assets/Images/xstore1.png';
import {useNavigate} from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
const ChangePassword = () => {
 const navigate = useNavigate();
 const RedirectToLogin = () => {
  navigate("/Login");
 }
 const [newPassword , setNewpassword] = useState("");
 const [confirmPass, setConfirmpass] = useState("");
 const [enablePassword , setEnablePassword] = useState(false);  
 const [enableChangePassword,setEnableChangepassword] = useState(false);
 const [newPasswordError, setNewpasswordError] = useState("");
 const [confirmPassError, setConfirmError] = useState("");
  const submit = () => {
    if(!newPassword)
    {
      setNewpasswordError("Please enter new password")
    }
    else if(newPassword.length < 5){
      setNewpasswordError("Password must be gretar then 5 char");
    }
    else if(!confirmPass){
       setNewpasswordError("");
       setConfirmError("Please enter confirm password");
    }
    else if(confirmPass !== newPassword){
      setConfirmError(" Password does not match");
    }
  }
  return (
    <div className="ChangePassMainContainer">
        <div className="ChangePassContainer">
          <div className="row ChangePasslogo mt-4">
            <img src={XSTORE} alt="logo" />
        </div>
        <div className="ChangePassform">
          <label>New Password</label><br/>
          <div className="ChangePassicon">
          <input type={enablePassword? "text" : "password" } required="Please Enter Password" value={newPassword} onChange={(e) => setNewpassword(e.target.value)}/>
          {enablePassword ?  <AiOutlineEyeInvisible size="37px" className="eye" onClick={ () => setEnablePassword(false)} /> : <AiOutlineEye size="37px" className="eye" onClick={ () =>setEnablePassword(true)}/>}
          </div>
        </div>
        <span style={{color:"red"}}>{newPasswordError}</span>
        <div className="ChangePassform">
          <label>Confirm Password</label><br/>
          <div className="ChangePassicon">
          <input type={enableChangePassword ? "text" : "password" }required="Please Enter Password" value={confirmPass} onChange={(e) => setConfirmpass(e.target.value)} />
          {enableChangePassword ?  <AiOutlineEyeInvisible size="37px" className="eye" onClick={ () => setEnableChangepassword(false)} /> : <AiOutlineEye size="37px" className="eye" onClick={ () => setEnableChangepassword(true)}/>}
          </div>
        </div>
        <span style={{color:"red"}}>{confirmPassError}</span>
        <button  className="ConfirmPassbtn" onClick={submit}>Submit</button>
        <div className="ConfirmPassContent mt-2">
          <span onClick={RedirectToLogin}>Back to Login</span>
        </div>
    </div>
    </div>
  )
}

export default ChangePassword