import React from "react";
import EmployeeNavbar from "../../EmplyoeeNavbar/EmployeeNavbar";
import "./AddDepartment.css";

const AddDepartment = () => {
  return (
    <div>
      <EmployeeNavbar showBelowMenu={true} title="Department" />
      <div className="AddOperatintypeContainer_department">
        <div className="Addoperationcontent_department">
          <div className="operationcon1_department">
            <div className="operation_department">
              <p>Department Name</p>
              <input type="text" />
            </div>
            <div className="operation_department_1">
              <p>Head Department</p>

              <select>
                <option>ABDUL JALEEL MALLUR</option>
                <option>ABDUL RAHMAN KARNAD</option>
                <option>ABDULRAHEM SUIMAN</option>
                <option>ABDULRAHMAN SALAH</option>
                <option>ABDULREHMAN</option>
                <option>ABDULREHMAN</option>
              </select>
            </div>

            <div className="operation_department_1">
              <p>Manager</p>

              <select>
                <option>ABDUL JALEEL MALLUR</option>
                <option>ABDUL RAHMAN KARNAD</option>
                <option>ABDULRAHEM SUIMAN</option>
                <option>ABDULRAHMAN SALAH</option>
                <option>ABDULREHMAN</option>
                <option>ABDULREHMAN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
