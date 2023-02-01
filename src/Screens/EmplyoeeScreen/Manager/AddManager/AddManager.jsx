import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import HrSettings from "../../AddEmployee/HrSettings";
import PrivateInfo from "../../AddEmployee/PrivateInfo";
import WorkInfo from "../../AddEmployee/WorkInfo";
import EmployeeNavbar from "../../EmplyoeeNavbar/EmployeeNavbar";
import camera from "../../../../assets/Images/camera.png";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import validator from "validator";

const AddManager = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState("WorkInfo");
  const [files, setFiles] = useState("");
  const [allHeadDep, setAllHeadDep] = useState([]);
  const [allJob, setAllJob] = useState([]);
  const [allHM , setAllHM] = useState([]);


  const addManagerUrl = endpoints.Manager.addmanager;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const allDepUrl = endpoints.department.allDepartment;
  const allJobUrl = endpoints.jobposition.getAlljobposition;
  const allHMUrl = endpoints.Headmanager.allHeadmanager;

  const getDep = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allDepUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          const filterDep = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllHeadDep(filterDep);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "something went wrong");
      });
  };

  const getJobPosition = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allJobUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          const filterJob = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllJob(filterJob);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "something went wrong");
      });
  };
  const getHM = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allHMUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          const filterHM = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllHM(filterHM);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "something went wrong");
      });
  };



  useEffect(() => {
    getDep();
    getJobPosition();
    getHM();
  }, []);

  // -----------------------------Manager Add useState----------------------------

  const [manager, setManager] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [headManager , setHeadManager] = useState("");
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
  const [jobId, setJobId] = useState("");

  const save = () => {
    if (manager === "") {
      toast("Manager Name is required !", { type: "warning" });
    } else if (jobId === "") {
      toast("JOb Position is required !", { type: "warning" });
    } else if (workmobile === "") {
    } else if (headManager === "") {
      toast("Head Manager is required !", { type: "warning" });
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
      formData.append("Position", jobPosition);
      formData.append("Job_PositionID", jobId);
      formData.append("Head_ManagerID",headManager);
      formData.append("Manager_Name", manager);
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
        .post(addManagerUrl, formData)
        .then((res) => {
          console.log(res,"data here")
          if (res.data.status === true) {
            toast("Manager Added Successfully !", { type: "success" });
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

  const handleJobPosition = (id) => {
    const filterData = allJob.filter((itm, ind) => {
      return itm.JOB_POSITION == id;
    });
    setJobId(filterData[0].ID);
    setJobPosition(filterData[0].JOB_POSITION);
  };

  //  -----------------------------------------Update Manager-------------------------------

  const [id, setId] = useState("");
  const [updated, setUpdated] = useState(true);
  const [edit, setEdit] = useState(false);
  const updateManagerUrl = endpoints.Manager.updatemanager;
  const location = useLocation();

  const ManagerData = location.state;

  const ManagerDetails = JSON.parse(ManagerData);
  console.log(ManagerDetails,"all manager here")
  useEffect(() => {
    if (ManagerDetails && updated) {
      setManager(ManagerDetails.MANAGER_NAME);
      setJobPosition(ManagerDetails.JOB_POSITION)
      setId(ManagerDetails.ID);
      setHeadManager(ManagerDetails.HEAD_MANAGERID)
      setWorkMobile(ManagerDetails.WORK_MOBILE);
      setWorkPhone(ManagerDetails.WORK_PHONE);
      setWorkEmail(ManagerDetails.WORK_EMAIL);
      setLocations(ManagerDetails.WORK_LOCATION);
      setDepartment(ManagerDetails.DEPARTMENT_ID);
      setWorkAddr(ManagerDetails.WORK_ADDRESS);
      setEmail(ManagerDetails.PRIVATE_EMAIL);
      setPhone(ManagerDetails.PRIVATE_PHONE);
      setBankName(ManagerDetails.PRIVATE_BANK);
      setAccNumber(ManagerDetails.PRIVATE_BANK_ACCOUNT_NO);
      setHomeWork(ManagerDetails.PRIVATE_HOME_WORK);
      setNationality(ManagerDetails.NATIONALITY);
      setIdentyNo(ManagerDetails.IDENTIFICATION_NUMBER);
      setPassNo(ManagerDetails.PASSPORT_NUMBER);
      setGender(ManagerDetails.GENDER);
      setPob(ManagerDetails.PLACE_OF_BIRTH);
      setDob(ManagerDetails.DATE_OF_BIRTH);
      setCob(ManagerDetails.COUNTRY_OF_BIRTH);
      setMaterialStatus(ManagerDetails.MARTIAL_STATUS);
      setSpouseName(ManagerDetails.COMPLETE_NAME);
      setSpouseBirth(ManagerDetails.SUPPOSE_BIRTH_DATE);
      setChildren(ManagerDetails.NUMBER_CHILDREN);
      setEmgContact(ManagerDetails.EMERGENCY_CONTACT);
      setEmgPhone(ManagerDetails.EMERGENCY_PHONE);
      setVisaNo(ManagerDetails.VISA_NO);
      setWorkPermit(ManagerDetails.WORK_PERMITNO);
      setVisaExp(ManagerDetails.VISA_EXPDATE);
      setCertificate(ManagerDetails.CERTIFICATE_LEVEL);
      setFieldStudy(ManagerDetails.FIELDOF_STUDY);
      setSchool(ManagerDetails.SCHOOL);
      setRelatedUser(ManagerDetails.RELATED_USER);
      setRegNo(ManagerDetails.REGISTRATION_NUMBER);
      setPinCode(ManagerDetails.PINCODE);
      setBadgeId(ManagerDetails.BADGE_ID);
      setAddress(ManagerDetails.PRIVATE_ADDRESS)
      setManagerImg(ManagerDetails.MANAGER_PROFILE);
      setEdit(true);
      const url = ManagerDetails.MANAGER_PROFILE;
      const fileName = "myFile.jpg";

      fetch(url).then(async (response) => {
        const contentType = response.headers.get("content-type");
        const blob = await response.blob();
        const file = new File([blob], fileName, { contentType });
        setFiles(file);
      });
      setUpdated(false);
    }
  }, [ManagerDetails]);

  const updateData = () => {
    if (manager === "") {
      toast("Manager Name is required !", { type: "warning" });
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
      formData.append("Position", jobPosition);
      formData.append("Job_PositionID", jobId);
      formData.append("Manager_Name", manager);
      formData.append("Head_ManagerID",headManager);
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
        .post(updateManagerUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("Manager Updated Successfully !", { type: "success" });
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
  }


  return (
    <div>
      <EmployeeNavbar
        showBelowMenu={true}
        title="Manager"
        showCanelBtn={true}
        save={edit === true ? updateData : save}
      />
      <div className="employee_maniContainer">
        <div className="employee_container">
          <div className="emp_details">
            <div className="emp_content">
              <div className="emp_Name">
                <input
                  type="text"
                  placeholder="Employee Name"
                  value={manager}
                  onChange={(e) => setManager(e.target.value)}
                />
              </div>
              <div className="emp_job">
                <input
                  type="text"
                  placeholder="Job Position"
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>
            </div>
            <div className="Vendor_img">
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
          <div className="emp_persanalContent">
            <div className="emp_work">
              <div className="emp_mob">
                <p>Work Mobile</p>
                {/* <input type="text" value={workmobile} onChange={(e) => setWorkMobile(e.target.value)}/> */}
                <PhoneInput
                  country={"in"}
                  value={workmobile}
                  onChange={(e) => setWorkMobile(e)}
                  containerClass="phone_sty"
                />
              </div>
              <div className="emp_mob">
                <p>Work Phone</p>
                {/* <input type="text" value={workphone} onChange={(e) => setWorkPhone(e.target.value)}/> */}
                <PhoneInput
                  country={"in"}
                  value={workphone}
                  onChange={(e) => setWorkPhone(e)}
                  containerClass="phone_sty"
                />
              </div>
              <div className="emp_mob">
                <p>Work Email</p>
                <input
                  type="text"
                  value={workemail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                />
              </div>
              <div className="emp_mob">
                <p>Work Location</p>
                <input
                  type="text"
                  value={locations}
                  onChange={(e) => setLocations(e.target.value)}
                />
              </div>
            </div>
            <div className="emp_dep">
              <div className="emp_select">
                <p>Department</p>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="">Choose Any One</option>
                  {allHeadDep.map((item, ind) => {
                    return (
                      <>
                        <option value={item.ID}>{item.DEPARTMENT_NAME}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="emp_select">
                <p>Job Position</p>
                <select
                  value={jobPosition}
                  onChange={(e) => handleJobPosition(e.target.value)}
                >
                  <option>select any one</option>
                  {allJob.map((itm, ind) => {
                    return (
                      <>
                        <option value={itm.JOB_POSITION}>
                          {itm.JOB_POSITION}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="emp_select">
                <p>Head Manager</p>
                <select value={headManager} onChange={(e) => setHeadManager(e.target.value)}>
                  <option>select any one</option>
                  {allHM.map((itm,ind) => {
                    return(
                      <>
                      <option value={itm.ID}>{itm.MANAGER_NAME}</option>
                      </>
                    )
                  })}
                </select>
              </div>
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddManager;
