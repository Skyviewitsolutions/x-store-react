import React, { useState } from "react";
import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import XSTORE from "../../../assets/Images/xstore1.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [enblePassword, setEnblepassword] = useState(false);
  const [enableConfirmpass, setEnableconfirmpass] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailerror] = useState("");
  const [phonenoError, setPhonenoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const Redirecttologin = () => {
    navigate("/login");
  };
  const submit = () => {
    if (!name) {
      setNameError("Please Enter Your Name");
    } else if (name.length < 4) {
      setNameError("Name must be gretar then 3 charcter");
    } else if (!email) {
      setNameError("");
      setEmailerror("Please Enter Your valid email");
    } else if (!validator.isEmail(email)) {
      setEmailerror("InValid Email ");
    } else if (!phoneno) {
      setEmailerror("");
      setPhonenoError("Please Enter Your Phoneno");
    } else if (phoneno.length !== 10) {
      setPhonenoError("Please Enter 10 digit");
    } else if (!password) {
      setPhonenoError("");
      setPasswordError("Please Enter password");
    } else if (password.length < 6) {
      setPasswordError("Password must be gretar then 5 digit ");
    } else if (!confirmpass) {
      setPasswordError("");
      setConfirmError("Please Enter Confirm Password");
    } else if (confirmpass !== password) {
      setConfirmError("Password does not match");
    } else {
      setNameError("");
      setEmailerror("");
      setPhonenoError("");
      setPasswordError("");
      setConfirmError("");
      setIsLoading(true);

      const url = endpoints.authentication.signUp;

      const form = new FormData();

      form.append("name", name);
      form.append("email", email);
      form.append("mobile", phoneno);
      form.append("pass", password);

      axios
        .post(url, form)
        .then((res) => {
          console.log(res, "result");
          if (res.data.status === true) {
            setIsLoading(false);
            navigate("/Dashboard");
          } else if (res.data.status === false) {
            setIsLoading(false);
            alert(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error, "error");
        });
    }
  };

  return (
    <div className="SignupMainContainer">
      <div className="SignupContainer ">
        <div className="row Signuplogo mt-4">
          <img src={XSTORE} alt="logo" />
        </div>
        <div className="Signupform">
          <label>Your Name</label>
          <br />
          <input
            type="text"
            required="Please Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span style={{ color: "red" }}>{nameError}</span>
        </div>
        <div className="Signupform">
          <label>Email</label>
          <br />
          <input
            type="email"
            required="Please Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={{ color: "red" }}>{emailError}</span>
        </div>
        <div className="Signupform">
          <label>Your Phone Number</label>
          <br />
          <input
            type="number"
            required="Please Enter Phone No"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
          />
          <span style={{ color: "red" }}>{phonenoError}</span>
        </div>
        <div className="Signupform2">
          <label>Password</label>
          <br />
          <div className="Signupicons">
            <input
              type={enblePassword ? "text" : "password"}
              required="Please Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {enblePassword ? (
              <AiOutlineEyeInvisible
                size="37px"
                className="eye"
                onClick={() => setEnblepassword(false)}
              />
            ) : (
              <AiOutlineEye
                size="37px"
                className="eye"
                onClick={() => setEnblepassword(true)}
              />
            )}
          </div>
          <span style={{ color: "red" }}>{passwordError}</span>
        </div>
        <div className="Signupform2">
          <label>Confirm Password</label>
          <br />
          <div className="Signupicons" style={{ marginTop: "-8px !important" }}>
            <input
              type={enableConfirmpass ? "text" : "password"}
              required="Please Enter Confirm Password"
              value={confirmpass}
              onChange={(e) => setConfirmpass(e.target.value)}
            />
            {enableConfirmpass ? (
              <AiOutlineEyeInvisible
                size="37px"
                className="eye"
                onClick={() => setEnableconfirmpass(false)}
              />
            ) : (
              <AiOutlineEye
                size="37px"
                className="eye"
                onClick={() => setEnableconfirmpass(true)}
              />
            )}
          </div>
          <span style={{ color: "red" }}>{confirmError}</span>
        </div>

        <button className="Signupbtn" onClick={submit}>
          {isLoading ? (
            <div
              class="spinner-border text-light"
              role="status"
              style={{ width: "23px", height: "23px" }}
            ></div>
          ) : (
            "Sign Up"
          )}
        </button>

        <div className="SignupContent mt-2">
          <span onClick={Redirecttologin}>I already have an account</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
