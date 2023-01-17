import React, { useEffect, useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { endpoints } from "../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";

const Uom = () => {
  const UOMapiurl = endpoints.UOM.allUOM;
  const [UOM, setUOM] = useState();
  const navigate = useNavigate();
  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const getList = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(UOMapiurl, formData)
      .then((res) => {
        console.log(res, "uom");
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse()
          const filterUom = val.filter((itm,ind) =>{
            return itm.DELETE_STATUS != "X"
          })
          setUOM(filterUom);
        } else if (res.data.status === false) {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getList();
  }, []);

  const deleteUrl = endpoints.UOM.deleteUOM;

  const deleteItem = (data) => {

    const formData = new FormData();
    
    formData.append("id" , data)
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios
      .post(deleteUrl, formData)
      .then((res) => {
        console.log(res, "this is the delete res");
        if (res.data.status === true) {
          setShow(false)
          setDeleteConfirm(false)
          setSelectedData("")
          getList();
          toast("UOM deleted successfully", { type: "success" });
        } else if (res.data.status === false) {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
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
    const val = UOM.filter((itm, index) => {
      return itm.ID == data;
    });

    const orgValue = val[0];
    navigate("/UnitPage", { state: orgValue });
  };

  const column = [
    { label: "Unit of Measure", name: "UNIT_OF_MEASUREMENT" },
    { label: "Category", name: "UOM_CATEGORY" },
    { label: "Type", name: "UOM_TYPE" },
    {
      label: "Actions",
      name: "ID",
      options: {
        print : false ,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="#4f4e4d"
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

  const handleCreatePage = () => {
    navigate("/UnitPage");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Navebar
       showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Units of Measure"
      />
      <CustomTable data={UOM} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default Uom;
