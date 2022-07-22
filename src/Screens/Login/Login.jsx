import React,{useState} from 'react'
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import XSTORE from '../../assets/Images/xstore.png';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
import validator from 'validator';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enablePassword, setEnablepassword] = useState(false);
  const [emailError , setEmailError] = useState("");
  const [passwordError , setPasswordError] = useState("");
  const navigate = useNavigate();
   const RedirecttoSignup = () => {
    navigate("/");
   }
   const RedirectToForgetPassword= () => {
    navigate("/ForgetPassword");
   }
  const submit = () => {
    if(!email)
    {
      setEmailError("Please enter valid email");
    }
    else if(!validator.isEmail(email)){
      setEmailError("InValid Email ")
   }
    else if(!password)
    {
      setEmailError("");
      setPasswordError("Please enter password");
    }
    else if(password.length < 6)
    {
      setPasswordError("Password must be gretar then 5 digit ")
    }
    else{
      setEmailError("");
      setPasswordError("");
      alert("Login successfully");
    }
  }
  return (
       <div className="LoginMaincontainer">
    <div className="LoginContainer ">
        <div className="row Loginlogo mt-4">
            <img src={XSTORE} alt="logo" />
        </div>
        <div className="Loginform">
          <label>Email</label><br/>
          <input type="email" required="Please Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <span style={{color:"red"}}>{emailError}</span>
        </div>
        <div className="Loginform">
          <label>Password</label><br/>
          <div className="Loginicons">
          <input type={enablePassword ? "text" : "password"} required="Please Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
         {enablePassword ?<AiOutlineEyeInvisible size="37px" className="eye" onClick={() => setEnablepassword(false)}/> :  <AiOutlineEye size="38px" className="eye"  onClick={() => setEnablepassword(true)}/>} 
        
          </div>
          <span style={{color:"red"}}>{passwordError}</span>
        </div>
        
          <button className="Loginbtn" onClick={submit}>Sign In</button>
       
        <div className="LoginContent mt-2">
        <span onClick={RedirecttoSignup}>Don't have an account?</span>
          <span onClick={RedirectToForgetPassword}>Forget Password</span>

        </div>
       
    </div>
    </div>
  )
}

export default Login;