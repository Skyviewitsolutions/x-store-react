import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import vendor from "../../assets/Images/vendor.png";
import { useNavigate } from "react-router-dom";
import "./VendorsCard.css";
import { endpoints } from "../../services/endpoints";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import DeletePopup from "../Model/DeletePopup/DeletePopup";


const VendorsCard = (props) => {

  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const [iconColor, setIconColor] = useState("#7478a1");
  const { data ,getVendors} = props;
  const navigate = useNavigate();

  const renderToEditPage = (dta) =>{
    var vendorsData = JSON.stringify(dta);
    navigate("/AddAccVendor" , {state : vendorsData})
  }

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const deleteVendorUrl = endpoints.vendors.deleteVendors;

  const deleteVendor = (dta) => {
  
       const formData = new FormData()
       formData.append("ID" ,dta.VENDOR_ID);
       formData.append("User_Authorization", getAuthtoken);
       formData.append("User_AuthKey", userAuth);
       axios.post(deleteVendorUrl,formData)
       .then((res) => {
        console.log(res ,"resp")
        if (res.data.status == true) {
          toast("Vendor Deleted Successfuly !", { type: "success" });
          setShow(false)
          setDeleteConfirm(false)
          setSelectedData("")
          getVendors();
        } else if (res.data.status == false) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
       
  }

  useEffect(() => {
    if (deleteConfirm) {
      deleteVendor(selectedData);
    }
  }, [deleteConfirm]);

  return (<>

  {data.VENDOR_STATUS == "X" ? (
    <div style={{opacity : 0.5}} className="vendor_card">
      <div className="yf_card">
      <div className="VendorsContainer">
        <div className="VendorsCon"  >
          <div className="VendorsImg">
            <img src={data.VENDOR_PROFILE} alt="vendors" />
          </div>
          <div className="VendorsContent">
            <h6>{data.VENDOR_NAME}</h6>
            <p>{data.CITY}</p>
          </div>
        </div>
        <div className="deleteicon">
          <MdDelete
            size={20}
            style={{ color:"#b70000" ,zIndex:10}}
            onMouseOver={() => setIconColor("#293391")}
            onMouseOut={() => setIconColor("#7478a1")}
          />
        </div>
      </div>
      </div>
      <ToastContainer/>
    </div>) : ( 
    <div >
      <div className="VendorsContainer">
        <div className="VendorsCon"  onClick={() => renderToEditPage(data)}>
          <div className="VendorsImg">
            <img src={data.VENDOR_PROFILE} alt="vendors" />
          </div>
          <div className="VendorsContent">
            <h6>{data.VENDOR_NAME}</h6>
            <p>{data.CITY}</p>
          </div>
        </div>
        <div className="deleteicon">
          <MdDelete
            size={20}
            style={{ color: iconColor ,zIndex:10}}
            onMouseOver={() => setIconColor("#293391")}
            onMouseOut={() => setIconColor("#7478a1")}
            onClick={() => {
              setShow(true);
              setSelectedData(data)
            }}
          />
        </div>
      </div> 
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer/>
    </div> )}
    </>);
};
export default VendorsCard;












