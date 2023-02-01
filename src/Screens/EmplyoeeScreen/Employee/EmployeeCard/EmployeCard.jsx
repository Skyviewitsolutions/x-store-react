import React, { useEffect, useState } from "react";
import "./EmployeeCard.css";
import camera from "../../../../assets/Images/vendor.png";
import { MdDelete } from "react-icons/md";
import EmployeeNavbar from "../../EmplyoeeNavbar/EmployeeNavbar";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../../services/endpoints";
import axios from "axios";
import DeletePopup from "../../../../components/Model/DeletePopup/DeletePopup";
import { toast } from "react-toastify";

const EmployeCard = (props) => {
  const { getAllEmp, data } = props;

  const navigate = useNavigate();

  const renderToEditPage = (dta) => {
    var vendorsData = JSON.stringify(dta);
    navigate("/AddEmployee", { state: vendorsData });
  };

  const [iconColor, setIconColor] = useState("#7478a1");
  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const deleteHManagerurl = endpoints.employee.deleteEmp;

  const deleteEmployee = (dta) => {
    const formData = new FormData();
    formData.append("ID", dta.ID);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deleteHManagerurl, formData)
      .then((res) => {
        console.log(res, "resp");
        if (res.data.status == true) {
          toast("Employee Deleted Successfuly !", { type: "success" });
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          getAllEmp();
        } else if (res.data.status == false) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (deleteConfirm) {
      deleteEmployee(selectedData);
    }
  }, [deleteConfirm]);

  return (
    <>
    {data.DELETE_STATUS == "X" ? (
      <div className="row empCard_con"  style={{opacity : 0.5}}>
        <div className="col-lg-4">
          <div className="emp_profile">
          <img src={data.PROFILE_IMAGE} alt="vendors" className="center" />
          </div>
        </div>
        <div className="col-lg-8 emp_contents">
        <h6>{data.EMPLOYEE_NAME}</h6>
        <p>{data.WORK_LOCATION}</p>
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
    ):(
      <div className="row empCard_con">
      <div className="col-lg-4" onClick={() => renderToEditPage(data)}>
        <div className="emp_profile">
          <img src={data.PROFILE_IMAGE} alt="vendors" className="center" />
        </div>
      </div>
      <div className="col-lg-8 emp_contents">
        <h6>{data.EMPLOYEE_NAME}</h6>
        <p>{data.WORK_LOCATION}</p>
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
            setSelectedData(data);
          }}
        />
      </div>
    </div>
    )}
      <DeletePopup show={show}
     setShow={setShow}
     setDeleteConfirm={setDeleteConfirm}/>
    
    </>
  );
};

export default EmployeCard;
