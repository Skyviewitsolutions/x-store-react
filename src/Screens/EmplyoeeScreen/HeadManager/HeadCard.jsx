import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import camera from "../../../assets/Images/vendor.png";
import DeletePopup from '../../../components/Model/DeletePopup/DeletePopup';
import { endpoints } from '../../../services/endpoints';
import './HeadCard.css'

const HeadCard = (props) => {

  const {getAllHManager , data} = props;


  const renderToEditPage = (dta) =>{
    var vendorsData = JSON.stringify(dta);
    navigate("/AddHeadManager" , {state : vendorsData})
  }

    const [iconColor, setIconColor] = useState("#7478a1");

    const [show , setShow] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [selectedData, setSelectedData] = useState("");
    const navigate = useNavigate();

    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    const deleteHManagerurl = endpoints.Headmanager.deleteHeadManager;

    const deleteHManager = (dta) => {
      const formData = new FormData()
      formData.append("ID" ,dta.ID);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(deleteHManagerurl,formData)
      .then((res) => {
       console.log(res ,"resp")
       if (res.data.status == true) {
         toast("Head Manager Deleted Successfuly !", { type: "success" });
         setShow(false)
         setDeleteConfirm(false)
         setSelectedData("")
         getAllHManager();
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
    deleteHManager(selectedData);
  }
}, [deleteConfirm]);

  return (
    <div>
      {data.DELETE_STATUS == "X" ? (
        <div className="row HmCard_con" style={{opacity : 0.5}} >
            <div className="col-lg-4 col-md-4">
            <div className="emp_profile">
            <img src={data?.MANAGER_PROFILE} alt="vendors" className="center"/>
          </div>
            </div>
            <div className="col-lg-8 col-md-8 HM_contents">
            <h6>{data?.MANAGER_NAME}</h6>
            <p>{data?.PRIVATE_ADDRESS}</p>
            </div>
            <div className="deleteicon">
            <MdDelete
             className="deleteicon"
              size={20}
              style={{ color: "#b70000", zIndex: 10 }}
              onMouseOver={() => setIconColor("#293391")}
              onMouseOut={() => setIconColor("#7478a1")}
            />
          </div>
        </div>
      ): ( <div className="row HmCard_con" >
      <div className="col-lg-4 col-md-4" onClick={() => renderToEditPage(data)}>
      <div className="emp_profile">
      <img src={data?.MANAGER_PROFILE} alt="vendors" className="center"/>
    </div>
      </div>
      <div className="col-lg-8 col-md-8 HM_contents">
      <h6>{data?.MANAGER_NAME}</h6>
      <p>{data?.WORK_ADDRESS}</p>
      </div>
      <div className="deleteicon">
      <MdDelete
       className="deleteicon"
        size={20}
        style={{ color: iconColor, zIndex: 10 }}
        onMouseOver={() => setIconColor("#293391")}
        onMouseOut={() => setIconColor("#7478a1")}
        onClick={() => {
          setShow(true);
          setSelectedData(data)
        }}
      />
    </div>
  </div>)}
  <DeletePopup show={show}
     setShow={setShow}
     setDeleteConfirm={setDeleteConfirm}/>
    </div>
  )
}

export default HeadCard