import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeeNavbar from "../EmplyoeeNavbar/EmployeeNavbar";
import "./Employee.css";
import EmployeCard from "./EmployeeCard/EmployeCard";

const Employee = () => {

  const navigate = useNavigate()
  const handleCreatePage = () => {
    navigate("/AddEmployee");
  }
  return (
    <>
      <EmployeeNavbar showBelowMenu={true} title="Employee" handleCreatePage={handleCreatePage}/>
      <div className="container-fluid">
        <div className="row" >
          <div className="col-lg-4">
            <EmployeCard />
          </div>
          <div className="col-lg-4">
            <EmployeCard />
          </div>
          <div className="col-lg-4">
            <EmployeCard />
          </div>
          <div className="col-lg-4">
            <EmployeCard />
          </div>
          <div className="col-lg-4">
            <EmployeCard />
          </div>
          <div className="col-lg-4">
            <EmployeCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
