import React,{useState} from 'react'
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import XSTORE from '../../assets/Images/xstore.png';
import { AiOutlineEye } from 'react-icons/ai';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
       <div className="LoginMaincontainer">
    <div className="LoginContainer mt-5">
        <div className="row Loginlogo mt-4">
            <img src={XSTORE} alt="logo" />
        </div>
        <div className="Loginform">
          <label>Email</label><br/>
          <input type="email" required="Please Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="Loginform">
          <label>Password</label><br/>
          <div className="Loginicons">
          <input type="Password" required="Please Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
           <AiOutlineEye size="50px" className="eye"/>
          </div>
        </div>
        
          <button className="Loginbtn">Sign In</button>
       
        <div className="LoginContent mt-2">
          <span>Don't have an account?</span>
          <span>Reset Password</span>

        </div>
       
    </div>
    </div>
  )
}

export default Login