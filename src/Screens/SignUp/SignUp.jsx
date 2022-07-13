import React,{useState} from 'react'
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import XSTORE from '../../assets/images/xstore.png';
import { AiOutlineEye } from 'react-icons/ai';

const SignUp = () => {
    
const [name,setName] = useState(" ");
const [email,setEmail] = useState("");
const [phoneno, setPhoneno] = useState("");
const [password , setPassword] = useState("");
const [confirmpass, setConfirmpass] = useState("");
  return (
    <div className="SignupMainContainer">
    <div className="SignupContainer mt-4">
        <div className="row Signuplogo mt-4">
            <img src={XSTORE} alt="logo" />
        </div>
        <div className="Signupform">
          <label>Your Name</label><br/>
          <input type="text" required="Please Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="Signupform">
          <label>Email</label><br/>
          <input type="email" required="Please Enter Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="Signupform">
          <label>Your Phone Number</label><br/>
          <input type="number" required="Please Enter Phone No" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
        </div>
        <div className="Signupform2">
          <label>Password</label><br/>
          <div className="Signupicons">
          <input type="Password" required="Please Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
           <AiOutlineEye size="37px" className="eye"/>
          </div>
          </div>
        <div className="Signupform2">
          <label>Confirm Password</label><br/>
          <div className="Signupicons" style={{marginTop : "-8px !important"}}>
          <input type="Password" required="Please Enter Confirm Password" value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)}  /> 
           <AiOutlineEye size="37px" className="eye"/>
          </div>
        </div>
       
          <button  className="Signupbtn">Sign Up</button>
  
        <div className="SignupContent mt-2">
          <span>I already have an account</span>

        </div>
       </div>
       </div>
  )
}

export default SignUp;