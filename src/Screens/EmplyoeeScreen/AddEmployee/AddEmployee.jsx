import React, { useEffect, useState } from "react";
import EmployeeNavbar from "../EmplyoeeNavbar/EmployeeNavbar";
import "./AddEmployee.css";
import camera from "../../../assets/Images/camera.png";
import { Nav } from "react-bootstrap";
import WorkInfo from "./WorkInfo";
import PrivateInfo from "./PrivateInfo";
import HrSettings from "./HrSettings";
import EmpHrsetings from "./EmpHrsetings";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import validator from "validator";
import PhoneInput from "react-phone-input-2";

const AddEmployee = () => {
  const [event, setEvent] = useState("WorkInfo");

  const navigate = useNavigate();

  const [allDepartments, setAllDepartments] = useState([]);
  const [allJobposition, setAllJobposition] = useState([]);
  const [accessModule, setAccessModule] = useState([]);
  const [allmanager, setAllManager] = useState([]);

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const allDepUrl = endpoints.department.allDepartment;
  const allJobUrl = endpoints.jobposition.getAlljobposition;
  const allmanagerUrl = endpoints.Manager.allmanager;

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

  const getAllJob = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allJobUrl, formData)
      .then((res) => {
        console.log(res, "job");
        if (res.data.status === true) {
          var val = res.data.data;
          const filterJob = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllJobposition(filterJob);
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

  const getManager = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allmanagerUrl, formData)
      .then((res) => {
        console.log(res, "manager");
        if (res.data.status === true) {
          var val = res.data.data;
          const filterJob = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllManager(filterJob);
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
    getAllJob();
    getManager();
  }, []);

  // -----------------------------Employee useState----------------------

  const addEmpUrl = endpoints.employee.addEmp;

  const [empName, setEmpName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [workmobile, setWorkMobile] = useState("");
  const [workphone, setWorkPhone] = useState("");
  const [workemail, setWorkEmail] = useState("");
  const [locations, setLocations] = useState("");
  const [department, setDepartment] = useState("");
  const [manager, setManager] = useState("");
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
  const [spouseName, setSpouseName] = useState("no");
  const [spouseBirth, setSpouseBirth] = useState("no");
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
  const [empImg, setEmpImg] = useState("");
  const [files, setFiles] = useState("");
  const [jobId, setJobId] = useState("");
  const [inventory, setInventory] = useState("");
  const [accounting, setAccounting] = useState("");
  const [purchase, setPurchase] = useState("");
  const [sales, setSales] = useState("");
  const [employee, setEmployee] = useState("");
  const [expense, setExpense] = useState("");
  const [contact, setContact] = useState("");
  const [inventoryRead, setInventoryRead] = useState(false);
  const [inventoryCrud, setInventoryCrud] = useState(false);
  const [accountingRead, setAccountingRead] = useState(false);
  const [accountingCrud, setAccountingCrud] = useState(false);
  const [salesRead, setSalesRead] = useState(false);
  const [salesCrud, setSalesCrud] = useState(false);
  const [purchaseRead, setPurchaseRead] = useState(false);
  const [purchaseCrud, setPurchaseCrud] = useState(false);
  const [employeeRead, setEmployeeRead] = useState(false);
  const [employeeCrud, setEmployeeCrud] = useState(false);
  const [expenseRead, setExpenseRead] = useState(false);
  const [expenseCrud, setExpenseCrud] = useState(false);
  const [contactRead, setContactRead] = useState(false);
  const [contactCrud, setContactCrud] = useState(false);

  const save = () => {
    if (empName == "") {
      toast("Employee Name is required !", { type: "warning" });
    } else if (manager === "") {
      toast("Manager Name is required !", { type: "warning" });
    } else if (jobId === "") {
      toast("JOb Position is required !", { type: "warning" });
    } else if (workmobile === "") {
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
    } else if (empImg === "") {
      toast("Employee Image is required !", { type: "warning" });
    } else {
      var formdata = new FormData();
      formdata.append("Name", empName);
      formdata.append("Position", jobPosition);
      formdata.append("Work_Mobile", workmobile);
      formdata.append("Department_ID", department);
      formdata.append("Work_Phone", workphone);
      formdata.append("JobPosition_ID", jobId);
      formdata.append("Work_Email", workemail);
      formdata.append("Manager_ID", manager);
      formdata.append("Work_Location", locations);
      formdata.append("Work_Address", workAddr);
      formdata.append("Address", address);
      formdata.append("Email", email);
      formdata.append("Nationality", nationality);
      formdata.append("Identification_No", identyNo);
      formdata.append("Phone", phone);
      formdata.append("Passport", passNo);
      formdata.append("Bank_Name", bankName);
      formdata.append("Account_Number", accNumber);
      formdata.append("Gender", gender);
      formdata.append("Distance_Home", homeWork);
      formdata.append("DoB", dob);
      formdata.append("PoB", pob);
      formdata.append("CoB", cob);
      formdata.append("Marital", materialStatus);
      formdata.append("Spouse_Name", spouseName);
      formdata.append("Spouse_Birthdate", spouseBirth);
      formdata.append("NoC", children);
      formdata.append("Emergency_Contact", emgContact);
      formdata.append("Emergency_Phone", emgPhone);
      formdata.append("Visa_No", visaNo);
      formdata.append("Work_Permit_No", workPermit);
      formdata.append("Visa_Expire_Date", visaExp);
      formdata.append("Certificate_Level", certificate);
      formdata.append("Field_of_Study", fieldStudy);
      formdata.append("School", school);
      formdata.append("Related_User", relatedUser);
      formdata.append("Registration_Number", regNo);
      formdata.append("Pin_Code", pinCode);
      formdata.append("Badge_ID", badgeId);
      formdata.append("Inventory", inventory);
      formdata.append("Accounting", accounting);
      formdata.append("Purchase", purchase);
      formdata.append("Sales", sales);
      formdata.append("Expense_Module", expense);
      formdata.append("Employee", employee);
      formdata.append("Contact_Module", contact);
      formdata.append("Inventory_Read", inventoryRead);
      formdata.append("Inventory_Write", inventoryCrud);
      formdata.append("Accounting_Read", accountingRead);
      formdata.append("Accounting_Write", accountingCrud);
      formdata.append("Purchase_Write", purchaseCrud);
      formdata.append("Purchase_Read", purchaseRead);
      formdata.append("Sales_Read", salesRead);
      formdata.append("Sales_Write", salesCrud);
      formdata.append("Expense_Module_Write", expenseCrud);
      formdata.append("Expense_Module_Read", expenseRead);
      formdata.append("Employee_Read", employeeRead);
      formdata.append("Employee_Write", employeeCrud);
      formdata.append("Contact_Module_Read", contactRead);
      formdata.append("Contact_Module_Write", contactCrud);
      formdata.append("User_Authorization", getAuthtoken);
      formdata.append("User_AuthKey", userAuth);
      formdata.append("ChooseFile", files);

      axios
        .post(addEmpUrl, formdata)
        .then((res) => {
          console.log(res, "data here");
          if (res.data.status === true) {
            toast("Employee Added Successfully !", { type: "success" });
            setTimeout(() => {
              navigate("/Employee");
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
    setEmpImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleJobPosition = (id) => {
    const filterData = allJobposition.filter((itm, ind) => {
      return itm.JOB_POSITION == id;
    });
    setJobId(filterData[0].ID);
    setJobPosition(filterData[0].JOB_POSITION);
  };


  // ..........................Update Employee............................

  const [id, setId] = useState("");
  const [updated, setUpdated] = useState(true);
  const [edit, setEdit] = useState(false);
  const updateEmpUrl = endpoints.employee.updateEmp
  const location = useLocation();

  const emplopyeeData = location.state;

  const empDetails = JSON.parse(emplopyeeData);
  console.log(empDetails,"all data")

  useEffect(() => {

    if(empDetails && updated) {
      setAccessModule([])
      setEmpName(empDetails.EMPLOYEE_NAME);
      setJobPosition(empDetails.JOB_POSITION);
      setManager(empDetails.MANAGER_ID);
      setId(empDetails.ID);
      setWorkEmail(empDetails.WORK_EMAIL);
      setWorkMobile(empDetails.WORKMOBILE);
      setWorkAddr(empDetails.WORK_ADDRESS);
      setWorkPhone(empDetails.WORK_PHONE);
      setWorkPermit(empDetails.WORK_PERMITNO);
      setLocations(empDetails.WORK_LOCATION);
      setDepartment(empDetails.DEPARTMENT_ID);
      setEmail(empDetails.EMAIL);
      setPhone(empDetails.PHONE);
      setAddress(empDetails.ADDRESS);
      setBankName(empDetails.BANK_NAME);
      setAccNumber(empDetails.BANK_ACCOUNTNO);
      setHomeWork(empDetails.HOME_WORK);
      setMaterialStatus(empDetails.MARITAL_STATUS);
      setNationality(empDetails.NATIONALITY);
      setSpouseName(empDetails.SPOUSE_COMPLETENO);
      setSpouseBirth(empDetails.SPOUSE_BIRTHDATE);
      setEmgContact(empDetails.EMERGENCY_CONTACT);
      setEmgPhone(empDetails.EMERGENCY_PHONE);
      setCertificate(empDetails.CERTIFICATE_LEVEL);
      setFieldStudy(empDetails.FIELDOFSTUDY);
      setSchool(empDetails.SCHOOL);
      setIdentyNo(empDetails.IDENTIFICATION_NO);
      setPassNo(empDetails.PASSPORT_NO)
      setGender(empDetails.GENDER);
      setDob(empDetails.DATEOFBIRTH);
      setPob(empDetails.PLACEOFBIRTH);
      setCob(empDetails.COUNTRYOFBIRTH);
      setChildren(empDetails.NUMBEROFCHILDREN);
      setVisaNo(empDetails.VISA_NO);
      setVisaExp(empDetails.VISA_EXPIREDATE);
      setRelatedUser(empDetails.RELATEDUSER);
      setRegNo(empDetails.REGISTRATION_NO);
      setPinCode(empDetails.PINCODE);
      setBadgeId(empDetails.BADGE_ID);
      if(empDetails.INVENTORY == "100202201"){
        setAccessModule((itm) =>{
          return [...itm , 'Inventory']
        })
      }
      setInventory(empDetails.INVENTORY);
      setAccounting(empDetails.ACCOUNTING);
      setSales(empDetails.SALES);
      setPurchase(empDetails.PURCHASE);
      setEmployee(empDetails.EMPLOYEE);
      setContact(empDetails.CONTACT);
      setExpense(empDetails.EXPENSEMODULE);
      setInventoryRead(JSON.parse(empDetails.INVENTORY_READ));
      setInventoryCrud(JSON.parse(empDetails.INVENTORY_WRITE));
      setAccountingCrud(JSON.parse(empDetails.ACCOUNTING_WRITE));
      setAccountingRead(JSON.parse(empDetails.ACCOUNTING_READ));
      setPurchaseRead(JSON.parse(empDetails.PURCHASE_READ));
      setPurchaseCrud(JSON.parse(empDetails.PURCHASE_WRITE));
      setSalesRead(JSON.parse(empDetails.SALES_READ));
      setSalesCrud(JSON.parse(empDetails.SALES_WRITE));
      setEmployeeRead(JSON.parse(empDetails.EMPLOYEE_READ));
      setEmployeeCrud(JSON.parse(empDetails.EMPLOYEE_WRITE));
      setExpenseRead(JSON.parse(empDetails.EXPENSE_READ));
      setExpenseCrud(JSON.parse(empDetails.EXPENSE_WRITE));
      setContactRead(JSON.parse(empDetails.CONTACT_READ));
      setContactCrud(JSON.parse(empDetails.CONTACT_WRITE));
      setEmpImg(empDetails.PROFILE_IMAGE);
      setEdit(true);
      const url = empDetails.PROFILE_IMAGE;
      const fileName = "myFile.jpg";
      fetch(url).then(async (response) => {
        const contentType = response.headers.get("content-type");
        const blob = await response.blob();
        const file = new File([blob], fileName, { contentType });
        setFiles(file);
      });
      setUpdated(false);
    }
  },[empDetails])

  const updateData = () => {

    if (empName == "") {
      toast("Employee Name is required !", { type: "warning" });
    } else if (manager === "") {
      toast("Manager Name is required !", { type: "warning" });
    } else if (jobId === "") {
      toast("JOb Position is required !", { type: "warning" });
    } else if (workmobile === "") {
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
    } else if (empImg === "") {
      toast("Employee Image is required !", { type: "warning" });
    } else {
      var formdata = new FormData();
      formdata.append("ID",empDetails.ID)
      formdata.append("Name", empName);
      formdata.append("Position", jobPosition);
      formdata.append("Work_Mobile", workmobile);
      formdata.append("Department_ID", department);
      formdata.append("Work_Phone", workphone);
      formdata.append("JobPosition_ID", jobId);
      formdata.append("Work_Email", workemail);
      formdata.append("Manager_ID", manager);
      formdata.append("Work_Location", locations);
      formdata.append("Work_Address", workAddr);
      formdata.append("Address", address);
      formdata.append("Email", email);
      formdata.append("Nationality", nationality);
      formdata.append("Identification_No", identyNo);
      formdata.append("Phone", phone);
      formdata.append("Passport", passNo);
      formdata.append("Bank_Name", bankName);
      formdata.append("Account_Number", accNumber);
      formdata.append("Gender", gender);
      formdata.append("Distance_Home", homeWork);
      formdata.append("DoB", dob);
      formdata.append("PoB", pob);
      formdata.append("CoB", cob);
      formdata.append("Marital", materialStatus);
      formdata.append("Spouse_Name", spouseName);
      formdata.append("Spouse_Birthdate", spouseBirth);
      formdata.append("NoC", children);
      formdata.append("Emergency_Contact", emgContact);
      formdata.append("Emergency_Phone", emgPhone);
      formdata.append("Visa_No", visaNo);
      formdata.append("Work_Permit_No", workPermit);
      formdata.append("Visa_Expire_Date", visaExp);
      formdata.append("Certificate_Level", certificate);
      formdata.append("Field_of_Study", fieldStudy);
      formdata.append("School", school);
      formdata.append("Related_User", relatedUser);
      formdata.append("Registration_Number", regNo);
      formdata.append("Pin_Code", pinCode);
      formdata.append("Badge_ID", badgeId);
      formdata.append("Inventory", inventory);
      formdata.append("Accounting", accounting);
      formdata.append("Purchase", purchase);
      formdata.append("Sales", sales);
      formdata.append("Expense_Module", expense);
      formdata.append("Employee", employee);
      formdata.append("Contact_Module", contact);
      formdata.append("Inventory_Read", inventoryRead);
      formdata.append("Inventory_Write", inventoryCrud);
      formdata.append("Accounting_Read", accountingRead);
      formdata.append("Accounting_Write", accountingCrud);
      formdata.append("Purchase_Write", purchaseCrud);
      formdata.append("Purchase_Read", purchaseRead);
      formdata.append("Sales_Read", salesRead);
      formdata.append("Sales_Write", salesCrud);
      formdata.append("Expense_Module_Write", expenseCrud);
      formdata.append("Expense_Module_Read", expenseRead);
      formdata.append("Employee_Read", employeeRead);
      formdata.append("Employee_Write", employeeCrud);
      formdata.append("Contact_Module_Read", contactRead);
      formdata.append("Contact_Module_Write", contactCrud);
      formdata.append("User_Authorization", getAuthtoken);
      formdata.append("User_AuthKey", userAuth);
      formdata.append("ChooseFile", files);
      axios
        .post(updateEmpUrl, formdata)
        .then((res) => {
          console.log(res, "data here");
          if (res.data.status === true) {
            toast("Employee Update Successfully !", { type: "success" });
            setTimeout(() => {
              navigate("/Employee");
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
        title="Employees"
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
                  value={empName}
                  onChange={(e) => setEmpName(e.target.value)}
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
                <img src={empImg ? empImg : camera} alt="camera" />
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
                <PhoneInput
                  country={"in"}
                  value={workmobile}
                  onChange={(e) => setWorkMobile(e)}
                  containerClass="phone_sty"
                />
              </div>
              <div className="emp_mob">
                <p>Work Phone</p>
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
              <div className="emp_select">
                <p>Job Position</p>
                <select
                  value={jobPosition}
                  onChange={(e) => handleJobPosition(e.target.value)}
                >
                  <option>select any one</option>
                  {allJobposition.map((itm, ind) => {
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
              <EmpHrsetings
                relatedUser={relatedUser}
                setRelatedUser={setRelatedUser}
                regNo={regNo}
                setRegNo={setRegNo}
                pinCode={pinCode}
                setPinCode={setPinCode}
                badgeId={badgeId}
                setBadgeId={setBadgeId}
                inventoryCrud={inventoryCrud}
                inventoryRead={inventoryRead}
                accountingRead={accountingRead}
                accountingCrud={accountingCrud}
                employeeRead={employeeRead}
                employeeCrud={employeeCrud}
                purchaseRead={purchaseRead}
                purchaseCrud={purchaseCrud}
                setAccessModule={setAccessModule}
                accessModule={accessModule}
                salesRead={salesRead}
                salesCrud={salesCrud}
                contactCrud={contactCrud}
                contactRead={contactRead}
                expenseCrud={expenseCrud}
                expenseRead={expenseRead}
                setInventoryCrud={setInventoryCrud}
                setInventoryRead={setInventoryRead}
                setAccountingCrud={setAccountingCrud}
                setAccountingRead={setAccountingRead}
                setPurchaseCrud={setPurchaseCrud}
                setPurchaseRead={setPurchaseRead}
                setSalesCrud={setSalesCrud}
                setSalesRead={setSalesRead}
                setEmployeeCrud={setEmployeeCrud}
                setEmployeeRead={setEmployeeRead}
                setExpenseCrud={setExpenseCrud}
                setExpenseRead={setExpenseRead}
                setContactCrud={setContactCrud}
                setContactRead={setContactRead}
                inventory={inventory}
                setInventory={setInventory}
                accounting={accounting}
                setAccounting={setAccounting}
                sales={sales}
                setSales={setSales}
                purchase={purchase}
                setPurchase={setPurchase}
                expense={expense}
                setExpense={setExpense}
                contact={contact}
                setContact={setContact}
                employee={employee}
                setEmployee={setEmployee}
              />
            )}
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
