import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import Navebar from "../../../../components/Navbar/Navbar";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import axios from "axios";
import { useEffect } from "react";
import {endpoints} from "../../../../services/endpoints"
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";


const ParentCategory = () => {

    const [allParentCategory , setAllParentCategory] = useState([]);
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");


  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddParentCategory");
  };

  const handleUpdate = (data) => {
    const val = allParentCategory.filter((itm, index) => {
      return itm.LOCATION_ID == data;
    });

    const orgValue = val[0];
    // console.log(orgValue , "orgValue");
    navigate("/AddParentCategory", { state: orgValue });
  };

  const deleteItem = (data) => {

    const parentCateDeleteUrl = endpoints.parentCate.deleteUrl;

    const formData = new FormData();
    formData.append("id", data);
    axios
      .post(parentCateDeleteUrl, formData)
      .then((res) => {
        console.log(res, "deleteLoaction");
        if (res.data.status === true) {
            getAllParentCategory();
          toast("Location deleted Successfully", { type: "success" });
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };


  const getAllParentCategory = () =>{

    const url = endpoints.parentCate.allParentCate;
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res, "response location");
        if (res.data.status === true) {
            setAllParentCategory(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }


  useEffect(() =>{
    getAllParentCategory()
  },[])

  const column = [
    { label: "CATEGORY_NAME", name: "CATEGORY_NAME" },
    { label: "PARENT_CATEGORY", name: "PARENT_CATEGORY" },
    {
      label: "Actions",
      name: "LOCATION_ID",
      options: {
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
                  onClick={() => deleteItem(value)}
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
    <>
      <div>
        <Navebar
          showBelowMenu={true}
          handleCreatePage={handleCreatePage}
          title="Parent Category"
          disabledCreate={false}
        />
        <div className="container-fluid PROVAR">
          <div className="Main">
            {/* <div className="left">
       
          <Sidebar/>
          </div> */}
            <div className="Right">
              <CustomTable data={allParentCategory} column={column} />
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ParentCategory;
