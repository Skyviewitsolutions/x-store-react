import React from 'react'
import EmployeeNavbar from '../../EmplyoeeNavbar/EmployeeNavbar'
import './AddJobPosition.css'
const AddJobPosition = () => {
  return (
    <div>
        <EmployeeNavbar showBelowMenu={true} title="Job Position" />
      <div className="AddOperatintypeContainer_department">
        <div className="Addoperationcontent_department">
          <div className="operationcon1_department">
            <div className="operation_department">
              <p>Job Position</p>
              <input type="text" />
            </div>
            <div className="operation_department">
              <p>Expected New Employees</p>
              <input type="text" />
            </div>
            <div className="operation_department_1">
              <p>Department</p>

              <select>
                <option>ABDUL JALEEL MALLUR</option>
                <option>ABDUL RAHMAN KARNAD</option>
                <option>ABDULRAHEM SUIMAN</option>
                <option>ABDULRAHMAN SALAH</option>
                <option>ABDULREHMAN</option>
                <option>ABDULREHMAN</option>
              </select>
            </div>
            <div className="operation_department">
              <p>Job Description</p>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddJobPosition