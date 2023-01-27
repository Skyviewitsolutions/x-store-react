import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../../services/endpoints";
import EmployeeNavbar from "../../EmplyoeeNavbar/EmployeeNavbar";

const WorkAddress = () => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddWorkAddress");
  };

  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const [allWorkAddress, setAllWorkAddress] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const getWorkAddrUrl = endpoints.workAddress.allWorkAddres;

  const getWorkAddress = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(getWorkAddrUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          const filterWork = val.filter((itm, ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllWorkAddress(filterWork);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getWorkAddress();
  }, []);

  // --------------------------delete WorkAddress --------------------------

  const deleteWorkAddress = endpoints.workAddress.deleteWorkAddress;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deleteWorkAddress, formData)
      .then((res) => {
        if (res.data.status === true) {
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          getWorkAddress();
          toast("WorkAddress deleted Successfully!", { type: "success" });
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
    const val = allWorkAddress.filter((itm, index) => {
      return itm.ID == data;
    });
    const orgValue = val[0];
    console.log(orgValue, "irhhcbsdh");
    navigate("/AddWorkAddress", { state: orgValue });
  };

  const column = [
    { label: "Name", name: "WORK_NAME" },
    { label: "City", name: "WORK_CITY" },
    { label: "State", name: "WORK_STATE" },
    { label: "Country", name: "WORK_COUNTRY" },
    {
      label: "Action",
      name: "ID",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
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
        title="Work Address"
        handleCreatePage={handleCreatePage}
      />
      <CustomTable data={allWorkAddress} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default WorkAddress;
