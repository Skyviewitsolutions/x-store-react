import React, { useState } from "react";
import "./Otp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import XSTORE from "../../../assets/Images/xstore1.png";
// import OtpInput from "react-otp-input";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/core/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "grey",
    height: "50vh",
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Otp = () => {
  const value = "1234";

  const classes = useStyles();
  const theme = useTheme();

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num1Error, setNum1Error] = useState("");
  const [num2Error,setNum2Error] = useState("");
  const navigate = useNavigate();
  const varify = () => {
    navigate('/Dashboard');
  }
  const handleNum1 = (e) => {
    const value = e.target.value;
    const nextSibling = e.target.nextSibling;
    setNum1(value);
    if (nextSibling) {
      nextSibling.focus();
    }
  };
  const handleNum2 = (e) => {
    const value = e.target.value;
    const nextSibling = e.target.nextSibling;
    setNum2(value);
    if (nextSibling) {
      nextSibling.focus();
    }
  };
  const handleNum3 = (e) => {
    const value = e.target.value;
    const nextSibling = e.target.nextSibling;
    setNum3(value);
    if (nextSibling) {
      nextSibling.focus();
    }
  };
  const handleNum4 = (e) => {
    const value = e.target.value;
    const nextSibling = e.target.nextSibling;
    setNum4(value);
  };

  return (
    <div className="OtpMainContainer">
      <div className="OtpContainer">
        <div className="Otplogo">
          <img src={XSTORE} alt="logo" />
        </div>
        <div className="OtpContent">
          <h4>Enter OTP</h4>
        </div>
        <div className="OTPinput">
          <input type="number" value={num1} onChange={(e) => handleNum1(e)} />
          <input type="number" value={num2} onChange={(e) => handleNum2(e)} />
          <input type="number" value={num3} onChange={(e) => handleNum3(e)} />
          <input type="number" value={num4} onChange={(e) => handleNum4(e)} />
        </div>
        <p className="Error">{num1Error}</p>
        <button className="Otpbtn" onClick={varify}>Verify</button>
      </div>
    </div>
  );
};

export default Otp;
