import React from 'react'
import { ToastContainer } from 'react-toastify'
import './PrivateInfo.css'
const PrivateInfo = (props) => {

    const {materialStatus , setMaterialStatus} = props 
  

    const handleMaterialStatus = (e) => {
          const val = e.target.value;
          setMaterialStatus(val)
    }

  return (
    <div>
        <div className="privateinfo_con">
            <div className="privateinfo_details">
                <div className="privateinfo_contact">
                    <h3>Private Contact</h3>
                    <div className="private_det">
                        <p>Address</p>
                        <select>
                            <option> </option>
                            <option>abdullah alsanee</option>
                            <option>hisham</option>
                            <option> mav</option>
                        </select>
                    </div>
                    <div className="private_det">
                        <p>Email</p>
                        <input type="text" />
                    </div>
                    <div className="private_det">
                        <p>Phone</p>
                        <input type="text" />
                    </div>
                    <div className="private_det">
                        <p>Bank Name</p>
                        <input type="text" />
                    </div>
                    <div className="private_det">
                        <p>Bank Account Number</p>
                        <select>
                            <option> </option>
                            <option>abdullah alsanee</option>
                            <option>hisham</option>
                            <option> mav</option>
                        </select>
                    </div>
                    <div className="private_det">
                        <p>Km Home-Work</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="privateinfo_citizen">
                    <h3>Citizenship</h3>
                <div className="private_det">
                        <p>Nationality (Country)</p>
                        <select>
                            <option> </option>
                            <option>India</option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                        </select>
                    </div>
                    <div className="private_det">
                        <p>Identification No</p>
                        <input type="text" />
                    </div>
                    <div className="private_det">
                        <p>Passport No</p>
                        <input type="text" />
                    </div>
                    <div className="private_det">
                        <p>Gender</p>
                        <select>
                            <option> </option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="private_det">
                        <p>Date of Birth</p>
                        <input type="date" />
                    </div>
                    <div className="private_det">
                        <p>Place of Birth</p>
                        <input type="text" />
                    </div>
                    <div className="private_det">
                        <p>Country of Birth</p>
                        <select>
                            <option> </option>
                            <option>India</option>
                            <option>American Samoa</option>
                            <option>Albania</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className="privateinfo_status">
                <div className="private_mat">
                    <h3>Marital Status</h3>
                    <div className="private_det">
                        <p>Marital Status</p>
                        <select value={materialStatus} onChange={(e) => handleMaterialStatus(e)}>
                            <option></option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Legal cohabitant">Legal cohabitant</option>
                            <option value="Widower">Widower</option>
                            <option value="Divorced">Divorced</option>
                        </select>
                    </div>
                    {materialStatus === "Married" && 
                    (<>
                     <div className="private_det">
                        <p>Spouse Complete Name</p>
                        <input type="text" />
                    </div>
                    <div className="private_det">
                        <p>Spouse Birthdate</p>
                        <input type="date" />
                    </div></>
                    )}
                   


                </div>
                <div className="private_dep">
                    <h3>Dependant</h3>
                    <div className="private_det">
                        <p>Number of Children</p>
                       <input type="text" placeholder='0' />
                    </div>

                </div>
            </div>
            <div className="privateinfo_em">
                <div className="private_emergency">
                    <h3>Emergency</h3>
                    <div className="private_det">
                        <p>Emergency Contact</p>
                       <input type="text"  />
                    </div>
                    <div className="private_det">
                        <p>Emergency Phone</p>
                       <input type="text"  />
                    </div>
                </div>
                <div className="private_work">
                    <h3>Work Permit</h3>
                    <div className="private_det">
                        <p>Visa No</p>
                       <input type="text"  />
                    </div>
                    <div className="private_det">
                        <p>Work Permit No</p>
                       <input type="text"  />
                    </div>
                    <div className="private_det">
                        <p>Visa Expire Date</p>
                       <input type="date"  />
                    </div>
                </div>
            </div>
            <div className="privateinfo_enducation">
                <h3>Education</h3>
                <div className="private_det">
                        <p>Certificate Level</p>
                      <select>
                        <option> </option>
                        <option>Bachelor</option>
                        <option>Master</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="private_det">
                        <p>Field of Study</p>
                       <input type="text"  />
                    </div>
                    <div className="private_det">
                        <p>School</p>
                       <input type="text"  />
                    </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default PrivateInfo