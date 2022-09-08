import React, { useState } from "react";
import "./InventoryProductDetailsFooter.css";
import { FaClock } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import img from "../../assets/Images/user.png";
import { FaPlusSquare } from "react-icons/fa";

const InventoryProductDetailsFooter = () => {
  const [ShowMessage, setShowMessage] = useState(false);

  const sendmessage = () => {
    setShowMessage(!ShowMessage);
  };
  return (
    <div className="ProductDeatilsFooter">
      <div className="productdetails">
        <div className="left">
          <p onClick={sendmessage}>Send Message</p>
          <p className="log" onClick={sendmessage}>
            Log note
          </p>
          <FaClock
            size="15px"
            style={{
              color: "#1669a2",
              marginRight: "5px",
              marginBottom: "5px",
            }}
          />
          <p>Schedule activity</p>
        </div>
        <div className="right">
          <div className="clip">
            <FaPaperclip
              size="15px"
              style={{
                color: "#1669a2",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            />
            <p>0</p>
          </div>
          <div
            className="clip"
            style={{ marginLeft: "25px", marginRight: "20px" }}
          >
            <FaUser
              ize="15px"
              style={{
                color: "#1669a2",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            />
            <p>0</p>
          </div>
          <p>Follow</p>
        </div>
      </div>
      {ShowMessage === true && (
        <div className="sendmessage" onClick={sendmessage}>
          <i>
            To: Followers of
            <span
              style={{ color: "#1669a2", fontSize: "13px", fontWeight: "bold" }}
            >
              "01182672-FUEL"
            </span>{" "}
          </i>
          <div className="message">
            <div className="user">
              <img src={img} alt="user" />
            </div>
            <div className="messagebox">
              <input type="text" placeholder="Write Something...." />
            </div>
          </div>
          <button className="sendbtn">Send</button>
        </div>
      )}
      <div className="attachment">
        <p>Attachment</p>
        <FaPlusSquare style={{ marginLeft: "46%", color: "#1669a2" }} />
        <label  htmlFor="attach">Add Attachment</label>
        <input type="file" style={{ display: "none" }} id="attach" />
      </div>
    </div>
  );
};

export default InventoryProductDetailsFooter;
