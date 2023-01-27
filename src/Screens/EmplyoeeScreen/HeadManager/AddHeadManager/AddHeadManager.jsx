import axios from "axios";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import HrSettings from "../../AddEmployee/HrSettings";
import EmployeeNavbar from "../../EmplyoeeNavbar/EmployeeNavbar";
import camera from "../../../../assets/Images/camera.png";
import { useLocation, useNavigate } from "react-router-dom";
import PrivateInfo from "../../AddEmployee/PrivateInfo";
import WorkInfo from "../../AddEmployee/WorkInfo";
import "./AddHeadManager.css";
import validator from "validator";
import PhoneInput from "react-phone-input-2";

const AddHeadManager = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState("WorkInfo");
  const [allDepartments, setAllDepartments] = useState([]);


  const [id, setId] = useState("");
  const [updated, setUpdated] = useState(true);
  const [edit, setEdit] = useState(false);

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const allDepUrl = endpoints.department.allDepartment;


  const getAllDep = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allDepUrl, formData)
      .then((res) => {
        console.log(res, "dep");
        if (res.data.status === true) {
          var val = res.data.data;
          const filterDep = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllDepartments(filterDep);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "something went wrong");
      });
  };



  useEffect(() => {
    getAllDep();

  }, []);

  // -----------------------------Employee useState----------------------

  const addHeadManagerUrl = endpoints.Headmanager.addHeadmanager;

  const [managerName, setManagerName] = useState("");
  const [workmobile, setWorkMobile] = useState("");
  const [workphone, setWorkPhone] = useState("");
  const [workemail, setWorkEmail] = useState("");
  const [locations, setLocations] = useState("");
  const [department, setDepartment] = useState("");
  const [workAddr, setWorkAddr] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [homeWork, setHomeWork] = useState("");
  const [nationality, setNationality] = useState("");
  const [identyNo, setIdentyNo] = useState("");
  const [passNo, setPassNo] = useState("");
  const [gender, setGender] = useState("");
  const [pob, setPob] = useState("");
  const [dob, setDob] = useState("");
  const [cob, setCob] = useState("");
  const [materialStatus, setMaterialStatus] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [spouseBirth, setSpouseBirth] = useState("");
  const [children, setChildren] = useState("");
  const [emgContact, setEmgContact] = useState("");
  const [emgPhone, setEmgPhone] = useState("");
  const [visaNo, setVisaNo] = useState("");
  const [workPermit, setWorkPermit] = useState("");
  const [visaExp, setVisaExp] = useState("");
  const [certificate, setCertificate] = useState("");
  const [fieldStudy, setFieldStudy] = useState("");
  const [school, setSchool] = useState("");
  const [relatedUser, setRelatedUser] = useState("");
  const [regNo, setRegNo] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [badgeId, setBadgeId] = useState("");
  const [managerImg, setManagerImg] = useState("");
  const [files, setFiles] = useState("");

  const save = () => {
    if (managerName === "") {
      toast("Head Manager Name is required !", { type: "warning" });
    } else if (workmobile === "") {
      toast("Work Mobile is required !", { type: "warning" });
    } else if (workphone === "") {
      toast("Work Phone is required !", { type: "warning" });
    } else if (workemail === "") {
      toast("Work Email is required !", { type: "warning" });
    } else if (!validator.isEmail(email)) {
      toast("InValid Work Email !", { type: "warning" });
    } else if (locations === "") {
      toast("Location is required !", { type: "warning" });
    } else if (department === "") {
      toast("Department is required !", { type: "warning" });
    } else if (workAddr === "") {
      toast("Work Address is required !", { type: "warning" });
    } else if (address === "") {
      toast("Address is required !", { type: "warning" });
    } else if (email === "") {
      toast("Email is required !", { type: "warnig" });
    } else if (!validator.isEmail(email)) {
      toast("InValid Email !", { type: "warning" });
    } else if (phone === "") {
      toast("Phone is required !", { type: "warning" });
    } else if (bankName === "") {
      toast("Bank Name is required !", { type: "warning" });
    } else if (accNumber === "") {
      toast("Account Number is required !", { type: "warning" });
    } else if (homeWork === "") {
      toast("Home Work is Required !", { type: "warning" });
    } else if (nationality === "") {
      toast("Nationality is required !", { type: "warning" });
    } else if (identyNo === "") {
      toast("Identity is required !", { type: "warning" });
    } else if (passNo === "") {
      toast("Passport No is required !", { typer: "warning" });
    } else if (gender === "") {
      toast("Gender is required !", { type: "warning" });
    } else if (pob === "") {
      toast("Place Of Birth is required !", { type: "warning" });
    } else if (dob === "") {
      toast("Date of Birth is required !", { type: "warning" });
    } else if (cob === "") {
      toast("Country Of Birth is required !", { type: "warning" });
    } else if (materialStatus === "") {
      toast("Material Status is required !", { type: "warning" });
    } else if (emgContact === "") {
      toast("Emergency No is required !", { type: "warning" });
    } else if (emgPhone === "") {
      toast("Emergency Phone No is required !", { type: "warning" });
    } else if (visaNo === "") {
      toast("Visa No is required !", { type: "warning" });
    } else if (visaExp === "") {
      toast("Visa Expire Date is required !", { type: "warning" });
    } else if (certificate === "") {
      toast("Certificate is required !", { type: "warning" });
    } else if (fieldStudy === "") {
      toast("Field Study is required !", { type: "warning" });
    } else if (school === "") {
      toast("School is required !", { type: "warning" });
    } else if (relatedUser === "") {
      toast("Related User is required !", { type: "warning" });
    } else if (regNo === "") {
      toast("Registration Number of the Employee is required !", {
        type: "warning",
      });
    } else if (pinCode === "") {
      toast("Pin Code is required !", { type: "warning" });
    } else if (badgeId === "") {
      toast("Badge Id is required !", { type: "warning" });
    } else if (managerImg === "") {
      toast("Manager Image is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Manager_Name", managerName);
      formData.append("Work_Mobile", workmobile);
      formData.append("Department_ID", department);
      formData.append("Work_Phone", workphone);
      formData.append("Work_Email", workemail);
      formData.append("Work_Location", locations);
      formData.append("Work_Address", workAddr);
      formData.append("Private_Address", address);
      formData.append("Private_Email", email);
      formData.append("Private_Phone", phone);
      formData.append("Home_Location", homeWork);
      formData.append("Bank", accNumber);
      formData.append("Nationality", nationality);
      formData.append("Identification_Number", identyNo);
      formData.append("Passport_Number", passNo);
      formData.append("Gender", gender);
      formData.append("DateOfBirth", dob);
      formData.append("PlaceOfBirth", pob);
      formData.append("CountryOfBirth", cob);
      formData.append("Martial_Status", materialStatus);
      formData.append("Complete_Name", spouseName);
      formData.append("Suppose_BirthDate", spouseBirth);
      formData.append("No_Children", children);
      formData.append("Emergency_Contact", emgContact);
      formData.append("Emergency_Phone", emgPhone);
      formData.append("Visa_No", visaNo);
      formData.append("Work_PermitNo", workPermit);
      formData.append("Visa_ExpDate", visaExp);
      formData.append("Certificate_Level", certificate);
      formData.append("FieldOf_Study", fieldStudy);
      formData.append("School", school);
      formData.append("Related_User", relatedUser);
      formData.append("Registration_Number", regNo);
      formData.append("Pincode", pinCode);
      formData.append("Badge_ID", badgeId);
      formData.append("ChooseFile", files);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(addHeadManagerUrl, formData)
        .then((res) => {
          console.log(res,"shagf")
          if (res.data.status === true) {
            toast("Head Manager Added Successfully !", { type: "success" });
            setTimeout(() => {
              navigate("/Manager");
            }, 1000);
          } else if (res.data.status === false) {
            if (res.data.code === 3) {
              toast("Session expired , Please re-login", { type: "warning" });
              navigate("/");
            } else {
              toast(res.data.message, { type: "error" });
            }
          }
        })
        .catch((err) => {
          console.log(err, "something went wrong");
        });
    }
  };

  const handleChange = (e) => {
    setFiles(e.target.files[0]);
    setManagerImg(URL.createObjectURL(e.target.files[0]));
  };

  // --------------------------Update Head Manager------------------------

  const updateHMUrl = endpoints.Headmanager.updateHeadManager;

  const location = useLocation();

  const HMData = location.state;

  const HMDetails = JSON.parse(HMData);

  console.log(HMDetails,"data update")

  useEffect(() => {
    if(HMDetails && updated){
      setManagerName(HMDetails.MANAGER_NAME);
      setId(HMDetails.ID);
      setWorkMobile(HMDetails.WORK_MOBILE);
      setWorkPhone(HMDetails.WORK_PHONE);
      setWorkEmail(HMDetails.WORK_EMAIL);
      setLocations(HMDetails.WORK_LOCATION);
      setDepartment(HMDetails.DEPARTMENT_ID);
    setWorkAddr(HMDetails.WORK_ADDRESS);
    setAddress(HMDetails.PRIVATE_ADDRESS);
    setEmail(HMDetails.PRIVATE_EMAIL);
    setPhone(HMDetails.PRIVATE_PHONE);
    setBankName(HMDetails.PRIVATE_BANK);
    setAccNumber(HMDetails.PRIVATE_BANK_ACCOUNT_NO);
    setHomeWork(HMDetails.PRIVATE_HOME_WORK);
    setNationality(HMDetails.NATIONALITY);
    setIdentyNo(HMDetails.IDENTIFICATION_NUMBER);
    setPassNo(HMDetails.PASSPORT_NUMBER);
    setGender(HMDetails.GENDER);
    setPob(HMDetails.PLACE_OF_BIRTH);
    setDob(HMDetails.DATE_OF_BIRTH);
    setCob(HMDetails.COUNTRY_OF_BIRTH);
    setMaterialStatus(HMDetails.MARTIAL_STATUS);
    setSpouseName(HMDetails.COMPLETE_NAME);
    setSpouseBirth(HMDetails.SUPPOSE_BIRTH_DATE);
    setChildren(HMDetails.NUMBER_CHILDREN);
    setEmgContact(HMDetails.EMERGENCY_CONTACT);
    setEmgPhone(HMDetails.EMERGENCY_PHONE);
    setVisaNo(HMDetails.VISA_NO);
    setWorkPermit(HMDetails.WORK_PERMITNO);
    setVisaExp(HMDetails.VISA_EXPDATE);
    setCertificate(HMDetails.CERTIFICATE_LEVEL);
    setFieldStudy(HMDetails.FIELDOF_STUDY);
    setSchool(HMDetails.SCHOOL);
    setRelatedUser(HMDetails.RELATED_USER);
    setRegNo(HMDetails.REGISTRATION_NUMBER);
    setPinCode(HMDetails.PINCODE);
    setBadgeId(HMDetails.BADGE_ID);
    setManagerImg(HMDetails.MANAGER_PROFILE);
    setEdit(true);
    const url = HMDetails.MANAGER_PROFILE;
    const fileName = "myFile.jpg";

    fetch(url).then(async(response) => {
      const contentType = response.headers.get("content-type");
      const blob = await response.blob();
      const file = new File([blob], fileName, { contentType });
      setFiles(file);
    })
    setUpdated(false)
    }
  },[HMDetails]);

  const updateData = () => {
    if (managerName === "") {
      toast("Head Manager Name is required !", { type: "warning" });
    } else if (workmobile === "") {
      toast("Work Mobile is required !", { type: "warning" });
    } else if (workphone === "") {
      toast("Work Phone is required !", { type: "warning" });
    } else if (workemail === "") {
      toast("Work Email is required !", { type: "warning" });
    } else if (!validator.isEmail(email)) {
      toast("InValid Work Email !", { type: "warning" });
    } else if (locations === "") {
      toast("Location is required !", { type: "warning" });
    } else if (department === "") {
      toast("Department is required !", { type: "warning" });
    } else if (workAddr === "") {
      toast("Work Address is required !", { type: "warning" });
    } else if (address === "") {
      toast("Address is required !", { type: "warning" });
    } else if (email === "") {
      toast("Email is required !", { type: "warnig" });
    } else if (!validator.isEmail(email)) {
      toast("InValid Email !", { type: "warning" });
    } else if (phone === "") {
      toast("Phone is required !", { type: "warning" });
    } else if (bankName === "") {
      toast("Bank Name is required !", { type: "warning" });
    } else if (accNumber === "") {
      toast("Account Number is required !", { type: "warning" });
    } else if (homeWork === "") {
      toast("Home Work is Required !", { type: "warning" });
    } else if (nationality === "") {
      toast("Nationality is required !", { type: "warning" });
    } else if (identyNo === "") {
      toast("Identity is required !", { type: "warning" });
    } else if (passNo === "") {
      toast("Passport No is required !", { typer: "warning" });
    } else if (gender === "") {
      toast("Gender is required !", { type: "warning" });
    } else if (pob === "") {
      toast("Place Of Birth is required !", { type: "warning" });
    } else if (dob === "") {
      toast("Date of Birth is required !", { type: "warning" });
    } else if (cob === "") {
      toast("Country Of Birth is required !", { type: "warning" });
    } else if (materialStatus === "") {
      toast("Material Status is required !", { type: "warning" });
    } else if (emgContact === "") {
      toast("Emergency No is required !", { type: "warning" });
    } else if (emgPhone === "") {
      toast("Emergency Phone No is required !", { type: "warning" });
    } else if (visaNo === "") {
      toast("Visa No is required !", { type: "warning" });
    } else if (visaExp === "") {
      toast("Visa Expire Date is required !", { type: "warning" });
    } else if (certificate === "") {
      toast("Certificate is required !", { type: "warning" });
    } else if (fieldStudy === "") {
      toast("Field Study is required !", { type: "warning" });
    } else if (school === "") {
      toast("School is required !", { type: "warning" });
    } else if (relatedUser === "") {
      toast("Related User is required !", { type: "warning" });
    } else if (regNo === "") {
      toast("Registration Number of the Employee is required !", {
        type: "warning",
      });
    } else if (pinCode === "") {
      toast("Pin Code is required !", { type: "warning" });
    } else if (badgeId === "") {
      toast("Badge Id is required !", { type: "warning" });
    } else if (managerImg === "") {
      toast("Manager Image is required !", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Manager_Name", managerName);
      formData.append("Work_Mobile", workmobile);
      formData.append("Department_ID", department);
      formData.append("Work_Phone", workphone);
      formData.append("Work_Email", workemail);
      formData.append("Work_Location", locations);
      formData.append("Work_Address", workAddr);
      formData.append("Private_Address", address);
      formData.append("Private_Email", email);
      formData.append("Private_Phone", phone);
      formData.append("Home_Location", homeWork);
      formData.append("Bank", accNumber);
      formData.append("Nationality", nationality);
      formData.append("Identification_Number", identyNo);
      formData.append("Passport_Number", passNo);
      formData.append("Gender", gender);
      formData.append("DateOfBirth", dob);
      formData.append("PlaceOfBirth", pob);
      formData.append("CountryOfBirth", cob);
      formData.append("Martial_Status", materialStatus);
      formData.append("Complete_Name", spouseName);
      formData.append("Suppose_BirthDate", spouseBirth);
      formData.append("No_Children", children);
      formData.append("Emergency_Contact", emgContact);
      formData.append("Emergency_Phone", emgPhone);
      formData.append("Visa_No", visaNo);
      formData.append("Work_PermitNo", workPermit);
      formData.append("Visa_ExpDate", visaExp);
      formData.append("Certificate_Level", certificate);
      formData.append("FieldOf_Study", fieldStudy);
      formData.append("School", school);
      formData.append("Related_User", relatedUser);
      formData.append("Registration_Number", regNo);
      formData.append("Pincode", pinCode);
      formData.append("Badge_ID", badgeId);
      formData.append("ChooseFile", files);
      formData.append("ID",id)
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios
        .post(updateHMUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Head Manager Updated Successfully !", { type: "success" });
            setTimeout(() => {
              navigate("/HeadManager");
            }, 1000);
          } else if (res.data.status === false) {
            if (res.data.code === 3) {
              toast("Session expired , Please re-login", { type: "warning" });
              navigate("/");
            } else {
              toast(res.data.message, { type: "error" });
            }
          }
        })
        .catch((err) => {
          console.log(err, "something went wrong");
        });
    }
  }

  return (
    <div>
      <EmployeeNavbar
        showBelowMenu={true}
        title="Head Manager"
        showCanelBtn={true}
        save={edit === true ? updateData : save}
      />
      <div className="HM_maniContainer">
        <div className="HM_container">
          <div className="HM_details">
            <div className="HM_content">
              <div className="HM_Name">
                <input
                  type="text"
                  placeholder="Manager Name"
                  value={managerName}
                  onChange={(e) => setManagerName(e.target.value)}
                />
              </div>
            </div>
            <div className="HM_img">
              <label htmlFor="takePhoto">
                <img src={managerImg ? managerImg : camera} alt="camera" />
              </label>
              <input
                type="file"
                id="takePhoto"
                style={{ visibility: "hidden" }}
                accept="image/png, image/gif, image/jpeg"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="HM_persanalContent">
            <div className="HM_work">
              <div className="HM_mob">
                <p>Work Mobile</p>
                <PhoneInput
                  country={"in"}
                  value={workmobile}
                  onChange={(e) => setWorkMobile(e)}
                  containerClass="phone_sty"
                />
              </div>
              <div className="HM_mob">
                <p>Work Phone</p>
                <PhoneInput
                  country={"in"}
                  value={workphone}
                  onChange={(e) => setWorkPhone(e)}
                  containerClass="phone_sty"
                />
              </div>
              <div className="HM_mob">
                <p>Work Email</p>
                <input
                  type="text"
                  value={workemail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                />
              </div>
              <div className="HM_mob">
                <p>Work Location</p>
                <input
                  type="text"
                  value={locations}
                  onChange={(e) => setLocations(e.target.value)}
                />
              </div>
              <div className="HM_select">
                <p>Department</p>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>select any one</option>
                  {allDepartments.map((itm, ind) => {
                    return (
                      <>
                        <option value={itm.ID}>{itm.DEPARTMENT_NAME}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              {/* <div className="HM_select">
                <p>Manager</p>
                <select
                  value={manager}
                  onChange={(e) => setManager(e.target.value)}
                >
                  <option>select any one</option>
                  {allmanager.map((itm, ind) => {
                    return (
                      <>
                        <option value={itm.ID}>{itm.MANAGER_NAME}</option>
                      </>
                    );
                  })}
                </select>
              </div> */}
            </div>
          </div>
          <div className="Adddetails">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item
                className={
                  event === "WorkInfo" ? "navLinkActive" : "navLinkDeactive"
                }
              >
                <Nav.Link
                  eventKey="link-1"
                  className={
                    event === "WorkInfo" ? "navLinkActive" : "navLinkDeactive"
                  }
                  onClick={() => setEvent("WorkInfo")}
                >
                  Work Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={
                  event === "PrivateInfo" ? "navLinkActive" : "navLinkDeactive"
                }
              >
                <Nav.Link
                  eventKey="link-1"
                  className={
                    event === "PrivateInfo"
                      ? "navLinkActive"
                      : "navLinkDeactive"
                  }
                  onClick={() => setEvent("PrivateInfo")}
                >
                  Private Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={
                  event === "PrivateInfo" ? "navLinkActive" : "navLinkDeactive"
                }
              >
                <Nav.Link
                  eventKey="link-1"
                  className={
                    event === "HrSettings" ? "navLinkActive" : "navLinkDeactive"
                  }
                  onClick={() => setEvent("HrSettings")}
                >
                  Hr Settings
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="Warehouse">
            {event === "WorkInfo" && (
              <WorkInfo workAddr={workAddr} setWorkAddr={setWorkAddr} />
            )}
            {event === "PrivateInfo" && (
              <PrivateInfo
                address={address}
                setAddress={setAddress}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                bankName={bankName}
                setBankName={setBankName}
                accNumber={accNumber}
                setAccNumber={setAccNumber}
                homeWork={homeWork}
                setHomeWork={setHomeWork}
                nationality={nationality}
                setNationality={setNationality}
                identyNo={identyNo}
                setIdentyNo={setIdentyNo}
                passNo={passNo}
                setPassNo={setPassNo}
                gender={gender}
                setGender={setGender}
                pob={pob}
                setPob={setPob}
                dob={dob}
                setDob={setDob}
                cob={cob}
                setCob={setCob}
                materialStatus={materialStatus}
                setMaterialStatus={setMaterialStatus}
                spouseName={spouseName}
                setSpouseName={setSpouseName}
                spouseBirth={spouseBirth}
                setSpouseBirth={setSpouseBirth}
                children={children}
                setChildren={setChildren}
                emgContact={emgContact}
                setEmgContact={setEmgContact}
                emgPhone={emgPhone}
                setEmgPhone={setEmgPhone}
                visaNo={visaNo}
                setVisaNo={setVisaNo}
                visaExp={visaExp}
                setVisaExp={setVisaExp}
                certificate={certificate}
                setCertificate={setCertificate}
                fieldStudy={fieldStudy}
                setFieldStudy={setFieldStudy}
                school={school}
                setSchool={setSchool}
                setWorkPermit={setWorkPermit}
                workPermit={workPermit}
              />
            )}
            {event === "HrSettings" && (
              <HrSettings
                relatedUser={relatedUser}
                setRelatedUser={setRelatedUser}
                regNo={regNo}
                setRegNo={setRegNo}
                pinCode={pinCode}
                setPinCode={setPinCode}
                badgeId={badgeId}
                setBadgeId={setBadgeId}
              />
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddHeadManager;
