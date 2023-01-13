import React,{useState} from 'react'
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import XSTORE from '../../../assets/Images/xstore1.png';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
import validator from 'validator';
import axios from 'axios';
import { endpoints } from '../../../services/endpoints';
import { toast,ToastContainer} from 'react-toastify';
import { Password } from '@mui/icons-material';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enablePassword, setEnablepassword] = useState(false);
  const [emailError , setEmailError] = useState("");
  const [passwordError , setPasswordError] = useState("");
  const navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(false);
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
      setEmailError("Invalid Email ")
   }
    else if(!password)
    {
      setEmailError("");
      setPasswordError("Please enter password");
    }
    else if(password.length < 6)
    {
      setPasswordError("Password must be greater then 5 digit ")
    }
    else{
      setEmailError("");
      setPasswordError("");
      setIsLoading(true);
      
      const url = endpoints.authentication.login;

      const form = new FormData();

    form.append("email" , email);
    form.append("pass" , password);
     
    axios.post( url , form)
    .then((res) => {
      console.log(res , "response");
      if(res.data.status === true) 
      {
        const authtoken = res.data.User_Authorization;
        const userAuth = res.data.User_AuthKey;
        const loginTime = res.data.data[0].LoginTime;
        localStorage.setItem("authtoken",authtoken);
        localStorage.setItem("userAuth" , userAuth);
        localStorage.setItem("UserEmail" ,email)
        localStorage.setItem("loginTime",loginTime)
        setIsLoading(false);
        navigate('/Dashboard');
      }
      else if(res.data.status === false)
      {
       toast(res.data.message,{type:"error"});
       setIsLoading(false);
      }
    })
    .catch((error) => {
      setIsLoading(false);
      console.log(error , "error");
    })
    }
  }

  



  

  return (
    <>
    <div className="maindiv">
       <div className="LoginMaincontainer">
    <div className="LoginContainer ">
        <div className="row Loginlogo mt-4">
            <img src={XSTORE} alt="logo" />
        </div>
        <div className="Loginform">
          <label>Email</label><br/>
          <input type="email" required="Please Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
         
          <span style={{color:"red",marginLeft:"3px"}}>{emailError}</span>
        </div>
        <div className="Loginform">
          <label>Password</label><br/>
          <div className="Loginicons">
          <input type={enablePassword ? "text" : "password"} required="Please Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
         {enablePassword ?<AiOutlineEyeInvisible size="37px" className="eye" onClick={() => setEnablepassword(false)}/> :  <AiOutlineEye size="38px" className="eye"  onClick={() => setEnablepassword(true)}/>} 
        

         
          </div>
          <span style={{color:"red"}}>{passwordError}</span>
        </div>
        
          <button className="Loginbtn" onClick={submit}>
            {isLoading ?   <div class="spinner-border text-light" role="status" style={{width:"23px",height:"23px"}}> </div>  :"Sign In"}
          </button>    
        {/* <div className="LoginContent mt-2">
        <span onClick={RedirecttoSignup}>Don't have an account?</span> 
          <span onClick={RedirectToForgetPassword}>Forget Password</span>

        </div> */}
       
    </div>
    </div>
    <ToastContainer/>
    </div>
    </>
  )
}

export default Login;