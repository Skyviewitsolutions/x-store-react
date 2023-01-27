import React from 'react'
import './WorkInfo.css'
const WorkInfo = (props) => {

  const {workAddr , setWorkAddr} = props
  
  return (
    <div>
       <div className="workInfo_con">
           <div className="workInfo_content">
              <p>Work Address</p>
             <select value={workAddr} onChange={(e) => setWorkAddr(e.target.value)}>
             <option>select any one</option>
              <option value="Akun Market">Akun Market</option>
              <option value="abdullah alsanee">abdullah alsanee</option>
              <option value="hisham">hisham</option>
             </select>
           </div>
           {/* <div className="workInfo_content">
              <p>Coach</p>
             <select>
              <option> </option>
              <option>ABDUL JALEEL MALLUR</option>
              <option>ABDUL RAHMAN KARNAD</option>
              <option>ABDULRAHEM SUIMAN</option>
              <option>ABDULRAHMAN SALAH</option>
             </select>
           </div>
           <div className="workInfo_content">
              <p>Expense</p>
             <select>
              <option> </option>
              <option>Account 02</option>
              <option>Accountant-Ryd</option>
              <option>Finance & Controlling</option>
              <option>General Manager</option>
              <option>Master Data</option>
              <option>System Admin</option>
             </select>
           </div>
           <div className="workInfo_content">
              <p>Time Off</p>
             <select>
              <option> </option>
              <option>Account 02</option>
              <option>Accountant-Ryd</option>
              <option>CRUH 01</option>
              <option>CRUH 02</option>
              <option>CRUH 03</option>
              <option>CRUH 04</option>
             </select>
           </div> */}
       </div>
    </div>
  )
}

export default WorkInfo