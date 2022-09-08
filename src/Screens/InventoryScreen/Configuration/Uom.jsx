import React, { useEffect, useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { endpoints } from "../../../services/endpoints";
import {toast , ToastContainer} from "react-toastify";

const Uom = () => {
  const UOMapiurl = endpoints.UOM.allUOM;
  const [UOM, setUOM] = useState();
  const navigate = useNavigate();

  const getList = () => {
    axios
      .post(UOMapiurl)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setUOM(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message , {type : "info"});
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
    formData.append("UnitName", data);

    axios
      .post(deleteUrl, formData)
      .then((res) => {
        console.log(res, "this is the delete res");
        if (res.data.status === true) {
          getList();
          toast("UOM deleted successfully", { type: "success" });
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const column = [
    { label: "Unit of Measure", name: "UNITNAME" },
    { label: "Category", name: "UNITCATEGORY" },
    { label: "Type", name: "UNITTYPE" },
    {
      label: "actions",
      name: "UNITNAME",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          console.log(value , "value")
          console.log(tableMeta , "tablemeta")
          console.log(updateValue , "updateValue")
          return (
            <>
              <div className="updtdlt">
                <FiEdit size={23} color="#4f4e4d" />                                                                                                                                    
                <MdDelete
                  size={23}
                  color="#4f4e4d"
                  onClick={() => deleteItem(value)}
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
      <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Units of Measure"/>
      <CustomTable data={UOM} column={column} />
      <ToastContainer/>
    </div>
  );
};

export default Uom;
