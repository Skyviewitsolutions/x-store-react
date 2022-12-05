import React from 'react'
import './HrSettings.css'
const HrSettings = () => {
  return (
    <div>
        <div className="hrsettings_container">
           <div className="hrSettings_details">
                <div className="hr_status">
                    <h3>Status</h3>
                    <div className="hr_user">
                        <p>Related User</p>
                        <select>
                            <option>Account 02</option>
                            <option>Accountant-Ryd</option>
                            <option>CRUH 01</option>
                            <option>CRUH 02</option>
                            <option>CRUH 03</option>
                        </select>
                    </div>
                    <div className="hr_user">
                        <p>Registration Number of the Employee</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="hr_attendance">
                    <h3>Attendance</h3>
                    <div className="hr_user">
                        <p>Pin Code</p>
                        <input type="text" />
                    </div>
                    <div className="hr_user">
                        <p>Badge ID</p>
                        <input type="text" />
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default HrSettings