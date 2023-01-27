import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import EmployeeNavbar from "../EmplyoeeNavbar/EmployeeNavbar";

const HeadDepartment = () => {
  const [allHead, setAllHead] = useState([]);
  const allHeadDepartmentUrl = endpoints.headDepartment.allHeaddepartment;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const getHeadDepartment = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allHeadDepartmentUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          const filterHeadDep = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllHead(filterHeadDep);
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
    getHeadDepartment();
  }, []);

  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddHeadDepartment");
  };

  const deleteHeadUrl = endpoints.headDepartment.deleteHeaddepartment;
  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deleteHeadUrl, formData)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          getHeadDepartment();
          toast("Head Department deleted Successfully", { type: "success" });
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.mrssage, { type: "error" });
          }
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

  const handleUpdate = (data) => {
    console.log(data, "value");
    const val = allHead.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    console.log(orgValue, "irhhcbsdh");
    navigate("/AddHeadDepartment", { state: orgValue });
  };

  const column = [
    { label: "Department Name", name: "DEPARTMENT_NAME" },
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
                    setSelectedData(value)
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
        title="Head Department"
        handleCreatePage={handleCreatePage}
      />
      <CustomTable data={allHead} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default HeadDepartment;
