import React from "react";
import PhoneInput from "react-phone-input-2";
import { ToastContainer } from "react-toastify";
import "./PrivateInfo.css";
const PrivateInfo = (props) => {
  const {
    materialStatus,
    setMaterialStatus,
    address,
    setAddress,
    email,
    setEmail,
    phone,
    setPhone,
    bankName,
    setBankName,
    accNumber,
    setAccNumber,
    homeWork,
    setHomeWork,
    nationality,
    setNationality,
    identyNo,
    setIdentyNo,
    passNo,
    setPassNo,
    gender,
    setGender,
    pob,
    setPob,
    dob,
    setDob,
    cob,
    setCob,
    spouseName,
    setSpouseName,
    spouseBirth,
    setSpouseBirth,
    children,
    setChildren,
    emgContact,
    setEmgContact,
    emgPhone,
    setEmgPhone,
    visaNo,
    setVisaNo,
    workPermit,
    setWorkPermit,
    visaExp,
    setVisaExp,
    certificate,
    setCertificate,
    fieldStudy,
    setFieldStudy,
    school,
    setSchool,
  } = props;

  const handleMaterialStatus = (e) => {
    const val = e.target.value;
    setMaterialStatus(val);
  };

  return (
    <div>
      <div className="privateinfo_con">
        <div className="privateinfo_details">
          <div className="privateinfo_contact">
            <h3>Private Contact</h3>
            <div className="private_det">
              <p>Address</p>
              <select
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                <option>select any one</option>
                <option value="abdullah alsanee">abdullah alsanee</option>
                <option value="hisham">hisham</option>
                <option value="mav"> mav</option>
              </select>
            </div>
            <div className="private_det">
              <p>Email</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="private_det">
              <p>Phone</p>
              {/* <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              /> */}
              <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(e) => setPhone(e)}
                  containerClass="phone_sty"
                />
            </div>
            <div className="private_det">
              <p>Bank Name</p>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
            <div className="private_det">
              <p>Bank Account Number</p>
              <select
                value={accNumber}
                onChange={(e) => setAccNumber(e.target.value)}
              >
                <option>select any one</option>
                <option value="abdullah alsanee">abdullah alsanee</option>
                <option value="hisham">hisham</option>
                <option value="mav"> mav</option>
              </select>
            </div>
            <div className="private_det">
              <p>Km Home-Work</p>
              <input
                type="text"
                value={homeWork}
                onChange={(e) => setHomeWork(e.target.value)}
              />
            </div>
          </div>
          <div className="privateinfo_citizen">
            <h3>Citizenship</h3>
            <div className="private_det">
              <p>Nationality (Country)</p>
              <select
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option>select any one</option>
                <option value="India">India</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
              </select>
            </div>
            <div className="private_det">
              <p>Identification No</p>
              <input
                type="text"
                value={identyNo}
                onChange={(e) => setIdentyNo(e.target.value)}
              />
            </div>
            <div className="private_det">
              <p>Passport No</p>
              <input
                type="text"
                value={passNo}
                onChange={(e) => setPassNo(e.target.value)}
              />
            </div>
            <div className="private_det">
              <p>Gender</p>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option> </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="private_det">
              <p>Date of Birth</p>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="private_det">
              <p>Place of Birth</p>
              <input
                type="text"
                value={pob}
                onChange={(e) => setPob(e.target.value)}
              />
            </div>
            <div className="private_det">
              <p>Country of Birth</p>
              <select value={cob} onChange={(e) => setCob(e.target.value)}>
                <option value=""> </option>
                <option value="India">India</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Albania">Albania</option>
              </select>
            </div>
          </div>
        </div>

        <div className="privateinfo_status">
          <div className="private_mat">
            <h3>Marital Status</h3>
            <div className="private_det">
              <p>Marital Status</p>
              <select
                value={materialStatus}
                onChange={(e) => handleMaterialStatus(e)}
              >
                <option>select any one</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Legal cohabitant">Legal cohabitant</option>
                <option value="Widower">Widower</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
            {materialStatus === "Married" && (
              <>
                <div className="private_det">
                  <p>Spouse Complete Name</p>
                  <input
                    type="text"
                    value={spouseName}
                    onChange={(e) => setSpouseName(e.target.value)}
                  />
                </div>
                <div className="private_det">
                  <p>Spouse Birthdate</p>
                  <input
                    type="date"
                    value={spouseBirth}
                    onChange={(e) => setSpouseBirth(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
          <div className="private_dep">
            <h3>Dependant</h3>
            <div className="private_det">
              <p>Number of Children</p>
              <input
                type="text"
                placeholder="0"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="privateinfo_em">
          <div className="private_emergency">
            <h3>Emergency</h3>
            <div className="private_det">
              <p>Emergency Contact</p>
              {/* <input
                type="text"
                value={emgContact}
                onChange={(e) => setEmgContact(e.target.value)}
              /> */}
              <PhoneInput
                  country={"in"}
                  value={emgContact}
                  onChange={(e) => setEmgContact(e)}
                  containerClass="phone_sty"
                />
            </div>
            <div className="private_det">
              <p>Emergency Phone</p>
              {/* <input
                type="text"
                value={emgPhone}
                onChange={(e) => setEmgPhone(e.target.value)}
              /> */}
              <PhoneInput
                  country={"in"}
                  value={emgPhone}
                  onChange={(e) => setEmgPhone(e)}
                  containerClass="phone_sty"
                />
            </div>
          </div>
          <div className="private_work">
            <h3>Work Permit</h3>
            <div className="private_det">
              <p>Visa No</p>
              <input
                type="text"
                value={visaNo}
                onChange={(e) => setVisaNo(e.target.value)}
              />
            </div>
            <div className="private_det">
              <p>Work Permit No</p>
              <input
                type="text"
                value={workPermit}
                onChange={(e) => setWorkPermit(e.target.value)}
              />
            </div>
            <div className="private_det">
              <p>Visa Expire Date</p>
              <input
                type="date"
                value={visaExp}
                onChange={(e) => setVisaExp(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="privateinfo_enducation">
          <h3>Education</h3>
          <div className="private_det">
            <p>Certificate Level</p>
            <select
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
            >
              <option>select any one</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="private_det">
            <p>Field of Study</p>
            <input
              type="text"
              value={fieldStudy}
              onChange={(e) => setFieldStudy(e.target.value)}
            />
          </div>
          <div className="private_det">
            <p>School</p>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PrivateInfo;
