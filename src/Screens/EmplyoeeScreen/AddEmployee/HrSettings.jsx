import React from 'react'
import './HrSettings.css'

const HrSettings = (props) => {

    const {relatedUser , setRelatedUser ,regNo ,setRegNo,pinCode,setPinCode,badgeId,setBadgeId} = props;
  return (
    <div>
        <div className="hrsettings_container">
           <div className="hrSettings_details">
                <div className="hr_status">
                    <h3>Status</h3>
                    <div className="hr_user">
                        <p>Related User</p>
                        <select value={relatedUser} onChange={(e) => setRelatedUser(e.target.value)}>
                            <option>select any one</option>
                            <option value="Account 02">Account 02</option>
                            <option value="Accountant-Ryd">Accountant-Ryd</option>
                            <option value="CRUH 01">CRUH 01</option>
                            <option value="CRUH 02">CRUH 02</option>
                            <option value="CRUH 03">CRUH 03</option>
                        </select>
                    </div>
                    <div className="hr_user">
                        <p>Registration Number of the Employee</p>
                        <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)}/>
                    </div>
                </div>
                <div className="hr_attendance">
                    <h3>Attendance</h3>
                    <div className="hr_user">
                        <p>Pin Code</p>
                        <input type="text" value={pinCode} onChange={(e) => setPinCode(e.target.value)}/>
                    </div>
                    <div className="hr_user">
                        <p>Badge ID</p>
                        <input type="text" value={badgeId} onChange={(e) => setBadgeId(e.target.value)}/>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default HrSettings