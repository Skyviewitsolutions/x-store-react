import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";
import EmployeeNavbar from "../EmplyoeeNavbar/EmployeeNavbar";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
const JobPosition = () => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddJobPosition");
  };
  const getAllJobPositionUrl = endpoints.jobposition.getAlljobposition;
  const deleteInformationUrl = endpoints.jobposition.Employeedeletejobposition;
  const [jobPosition, SetJobPosition] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const Alljobpopsitons = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios
      .post(getAllJobPositionUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          const filterJob = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          SetJobPosition(filterJob);
        } else if (res.data.status !== true) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    Alljobpopsitons();
  }, []);

  const handleUpdate = (data) => {
    console.log(data, "value");
    const LookForiD = jobPosition.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = LookForiD[0];
    console.log(orgValue, "value recieved");
    navigate("/AddJobPosition", { state: orgValue });
  };

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("ID", data);

    axios
      .post(deleteInformationUrl, formData)
      .then((res) => {
        if (res.data.status == true) {
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          Alljobpopsitons();
          toast(res.data.message, { type: "error" });
        } else if (res.data.status !== true) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

  const column = [
    { label: "Job Position", name: "JOB_POSITION" },
    { label: "Department", name: "DEPARTMENT_NAME" },
    { label: "Expected New Employees", name: "NEW_EMPOLYEES" },
    {
      label: "Actions",
      name: "ID",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f434d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="#4f434d"
                  onClick={() => {
                    setShow(true);
                    setSelectedData(value);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          );
        },
      },
    },
  ];
  return (
    <div>
      <EmployeeNavbar
        showBelowMenu={true}
        title="Job Position"
        handleCreatePage={handleCreatePage}
      />
      <CustomTable data={jobPosition} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
    </div>
  );
};

export default JobPosition;
