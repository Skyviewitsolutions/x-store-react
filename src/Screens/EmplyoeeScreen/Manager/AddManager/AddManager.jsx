import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import HrSettings from '../../AddEmployee/HrSettings';
import PrivateInfo from '../../AddEmployee/PrivateInfo';
import WorkInfo from '../../AddEmployee/WorkInfo';
import EmployeeNavbar from '../../EmplyoeeNavbar/EmployeeNavbar';
import camera from '../../../../assets/Images/camera.png'
import { toast } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddManager = () => {

  const navigate = useNavigate()
    const [event, setEvent] = useState("WorkInfo");
    const [files , setFiles] = useState("");

    const addManagerUrl = endpoints.manager.AddManager; 
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    // -----------------------------Manager Add useState----------------------------

    const [empName , setEmpName] = useState("");
    const [jobPosition , setJobPosition] = useState("");
    const [workmobile , setWorkMobile] = useState("");
    const [workphone , setWorkPhone] = useState("");
    const [workemail , setWorkEmail] = useState("");
    const [location , setLocation] = useState("");
    const [department , setDepartment] = useState("");
    const [manager , setManager] = useState("");
    const [workAddr , setWorkAddr] = useState("");
    const [coach , setCoach] = useState("");
    const [expense , setExpense] = useState("");
    const [timeOff , setTimeOff] = useState("");
    const [address , setAdress] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [bankName , setBankName] = useState("");
    const [accNumber , setAccNumber] = useState("");
    const [homeWork , setHomeWork] = useState("");
    const [nationality , setNationality] = useState("");
    const [identyNo , setIdentiyNo] = useState("");
    const [passNo , setPassNo] = useState("");
    const [gender , setGendre] = useState("");
    const [pob , setPOB] = useState("");
    const [dob , setDOB] = useState("");
    const [cob , setCOB] = useState("");
    const [materialStatus , setMaterialStatus] = useState("");
    const [spouseName , setSpouseName] = useState("");
    const [spouseBirth , setSpouseBirth] = useState("");
    const [children , setChildren] = useState("")
    const [emgContact , setEmgContact] = useState("");
    const [emgPhone , setEmgPhone] = useState("");
    const [visaNo , setVisaNo] = useState("");
    const [workPermit , setWorkPermit] = useState("");
    const [visaExp , setVisaExp] = useState("");
    const [certificate , setCertificate] = useState("")
    const [fieldStudy , setFieldStudy] = useState("");
    const [school , setSchool] = useState("");
    const [relatedUser , setRelatedUser] = useState("");
    const [regNo , setRegNo] = useState("");
    const [pinCode , setPinCode] = useState("");
    const [badgeId , setBadge] = useState("");
    const [managerImg , setManagerImg] = useState("")

    // const save = () => { 
    //   if(empName === ""){
    //     toast("Employee Name is required !" , {type:"warning"})
    //   }else if(jobPosition === ""){
    //     toast("JOb Position is required !" ,{type:"warning"})
    //   }else if(workmobile === ""){
    //     toast("Work Mobile is required !" ,{type:"warning"})
    //   }else if(workphone === ""){
    //     toast("Work Phone is required !",{type:"warning"})
    //   }else if(workemail === ""){
    //     toast("Work Email is required !",{type:"warning"})
    //   }else if(location === ""){
    //     toast("Location is required !",{type:"warning"})
    //   }else if(department === ""){
    //     toast("Department is required !",{type:"warning"})
    //   }else if(manager === ""){
    //     toast("Manager is required !",{type:"warning"})
    //   }else if(workAddr === ""){
    //     toast("Work Address is required !",{type:"warning"})
    //   }else if(address === ""){
    //     toast("Address is required !",{type:"warning"})
    //   }else if(email === ""){
    //     toast("Email is required !",{type:"warnig"})
    //   }else if(phone === ""){
    //     toast("Phone is required !",{type:"warning"})
    //   }else if(bankName === ""){
    //     toast("Bank Name is required !",{type:"warning"})
    //   }else if(accNumber === ""){
    //     toast("Account Number is required !",{type:"warning"})
    //   }else if(homeWork === ""){
    //     toast("Home Work is Required !",{type:"warning"})
    //   }else if(nationality === ""){
    //     toast("Nationality is required !",{type:"warning"})
    //   }else if(identyNo === ""){
    //     toast("Identity is required !",{type:"warning"})
    //   }else if(passNo === ""){
    //     toast("Passport No is required !",{typer:'warning'})
    //   }else if(gender === ""){
    //     toast("Gender is required !",{type:"warning"})
    //   }else if(pob === ""){
    //     toast("Place Of Birth is required !",{type:"warning"})
    //   }else if(dob === ""){
    //     toast("Date of Birth is required !",{type:"warning"})
    //   }else if(cob === ""){
    //     toast("Country Of Birth is required !",{type:"warning"})
    //   }else if(materialStatus === ""){
    //     toast("Material Status is required !",{type:"warning"})
    //   }else if(emgContact === ""){
    //     toast("Emergency No is required !",{type:"warning"})
    //   }else if(emgPhone === ""){
    //     toast("Emergency Phone No is required !",{type:"warning"})
    //   }else if(visaNo === ""){
    //     toast("Visa No is required !",{type:"warning"})
    //   }else if(visaExp === ""){
    //    toast("Visa Expire Date is required !",{type:"warning"})
    //   }else if(certificate === ""){
    //     toast("Certificate is required !",{type:"warning"})
    //   }else if(fieldStudy === ""){
    //     toast("Field Study is required !",{type:"warning"})
    //   }else if(school === ""){
    //     toast("School is required !",{type:"warning"})
    //   }else if(relatedUser === ""){
    //     toast("Related User is required !",{type:"warning"})
    //   }else  if(regNo === ""){
    //     toast("Registration Number of the Employee is required !",{type:"warning"})
    //   }else if(pinCode === ""){
    //     toast("Pin Code is required !",{type:"warning"})
    //   }else if(badgeId === ""){
    //     toast("Badge Id is required !",{type:"warning"})
    //   }else if(managerImg === ""){
    //     toast("Manager Image is required !",{type:"warning"})
    //   }else{
    //      const formData = new FormData();
    //      formData.append("Manager_Name" , manager);
    //      formData.append("Work_Mobile" , workmobile);
    //      formData.append("Department_ID" , department);
    //      formData.append("Work_Phone" , workphone);
    //      formData.append("Work_Email" ,workemail);
    //      formData.append("Work_Location" ,location);
    //      formData.append("Work_Address" ,workAddr);
    //      formData.append("Coach" ,coach);
    //      formData.append("Expense" ,expense);
    //      formData.append("TimeOff" ,timeOff);
    //      formData.append("Private_Address" ,address);
    //      formData.append("Private_Email" ,email);
    //      formData.append("Private_Phone" ,phone);
    //      formData.append("Home_Location" ,homeWork);
    //      formData.append("Bank",accNumber);
    //      formData.append("Nationality" ,nationality);
    //      formData.append("Identification_Number" ,identyNo);
    //      formData.append("Passport_Number" ,passNo);
    //      formData.append("Gender" ,gender);
    //      formData.append("DateOfBirth" ,dob);
    //      formData.append("PlaceOfBirth" ,pob);
    //      formData.append("CountryOfBirth" ,cob);
    //      formData.append("Martial_Status" ,materialStatus);
    //      formData.append("Complete_Name" ,spouseName);
    //      formData.append("Suppose_BirthDate" ,spouseBirth);
    //      formData.append("No_Children" ,children);
    //      formData.append("Emergency_Contact" ,emgContact);
    //      formData.append("Emergency_Phone" ,emgPhone);
    //      formData.append("Visa_No" ,visaNo);
    //      formData.append("Work_PermitNo" ,workPermit);
    //      formData.append("Visa_ExpDate" ,visaExp);
    //      formData.append("Certificate_Level" ,certificate);
    //      formData.append("FieldOf_Study" ,fieldStudy);
    //      formData.append("School" ,school);
    //      formData.append("Related_User" ,relatedUser);
    //      formData.append("Registration_Number" ,regNo);
    //      formData.append("Pincode" ,pinCode);
    //      formData.append("Badge_ID" ,badgeId);
    //      formData.append("ChooseFile" ,files);
    //      formData.append("User_Authorization", getAuthtoken);
    //      formData.append("User_AuthKey", userAuth);
    //      axios
    //     .post(addManagerUrl, formData)
    //     .then((res) => {
    //       if (res.data.status === true) {
    //         toast("Manager is Added Successfully !", { type: "success" });
    //       } else if (res.data.status === false) {
    //         if (res.data.code === 3) {
    //           toast("Session expired , Please re-login", { type: "warning" });
    //           navigate("/");
    //         } else {
    //           toast(res.data.message, { type: "error" });
    //         }
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err, "something went wrong");
    //     });
    // }
    //   }
    



  return (
    <div>
      <EmployeeNavbar showBelowMenu={true} title="Manager"/>
      <div className="employee_maniContainer">
        <div className="employee_container">
          <div className="emp_details">
            <div className="emp_content">
              <div className="emp_Name">
                <input type="text" placeholder="Employee Name" />
              </div>
              <div className="emp_job">
                <input type="text" placeholder="Job Position" />
              </div>
            </div>
            <div className="employee_img">
              <img src={camera} alt="camera" />
            </div>
          </div>
          <div className="emp_persanalContent">
            <div className="emp_work">
              <div className="emp_mob">
                <p>Work Mobile</p>
                <input type="text" />
              </div>
              <div className="emp_mob">
                <p>Work Phone</p>
                <input type="text" />
              </div>
              <div className="emp_mob">
                <p>Work Email</p>
                <input type="text" />
              </div>
              <div className="emp_mob">
                <p>Work Location</p>
                <input type="text" />
              </div>
            </div>
            <div className="emp_dep">
              <div className="emp_select">
                <p>Department</p>
                <select>
                  <option> </option>
                  <option>HEAD OFFICE / Administration</option>
                  <option>STORE-RUH 01 / BackStore (WHB)</option>
                  <option>STORE-RUH 01 / Bakery</option>
                  <option>STORE-RUH 01 / Camera</option>
                </select>
              </div>
              <div className="emp_select">
                <p>Job Position</p>
                <select>
                  <option> </option>
                  <option>IT Consultant</option>
                  <option>Cashier</option>
                  <option>Branch Manager</option>
                </select>
              </div>
              <div className="emp_select">
                <p>Manager</p>
                <select>
                  <option> </option>
                  <option>ABDUL JALEEL MALLUR</option>
                  <option>ABDUL RAHMAN KARNAD</option>
                  <option>ABDULRAHEM SUIMAN</option>
                  <option>ABDULRAHMAN SALAH</option>
                  <option>ABDULREHMAN</option>
                  <option>ABDUS SALAM</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Adddetails">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item className={event ==="WorkInfo" ? "navLinkActive" : "navLinkDeactive"}>
                <Nav.Link
                  eventKey="link-1"
                  className={event === "WorkInfo" ? "navLinkActive" : "navLinkDeactive"}
                  onClick={() => setEvent("WorkInfo")}
                >
                  Work Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={event === "PrivateInfo" ? "navLinkActive" : "navLinkDeactive"}>
                <Nav.Link
                  eventKey="link-1"
                  className={event === "PrivateInfo" ? "navLinkActive" : "navLinkDeactive"}
                  onClick={() => setEvent("PrivateInfo")}
                >
                  Private Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={event === "PrivateInfo" ? "navLinkActive" : "navLinkDeactive"}>
                <Nav.Link
                  eventKey="link-1"
                  className={event === "HrSettings" ? "navLinkActive" : "navLinkDeactive"}
                  onClick={() => setEvent("HrSettings")}
                >
                 Hr Settings
                </Nav.Link>
              </Nav.Item>
             
            </Nav>
          </div>
        <div className="Warehouse">
            {event === "WorkInfo" && (
              <WorkInfo/>
            )}
            {event === "PrivateInfo" && (
              <PrivateInfo/>
            )}
            {event === "HrSettings" && (
              <HrSettings/>
            )}
          </div>
        </div>
        </div> 
    </div>
  )
}

export default AddManager