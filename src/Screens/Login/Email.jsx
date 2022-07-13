import React,{useState} from 'react'
import './Email.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import XSTORE from '../../assets/Images/xstore.png';
const Email = () => {
    const[email, setEmail] = useState("");
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
       
          <button className="Emailbtn mt-5">Confirm</button>
        <div className="mt-2 Emailback">
            <span>Back to login</span>
            </div>
    </div>
    </div>
  )
}

export default Email