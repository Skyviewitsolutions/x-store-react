import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import Navebar from "../../../components/Navbar/Navbar";
import { endpoints } from "../../../services/endpoints";
import "./Journals.css";
const Journal = () => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddJournal");
  };

  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

const [journal , setJournal] = useState([]);
const getAuthtoken = localStorage.getItem("authtoken");
const userAuth = localStorage.getItem("userAuth");
const allJournalUrl = endpoints.Journals.allJournals;

const getAllJournal = () => {
  const formData = new FormData();
  formData.append("User_Authorization" , getAuthtoken)
  formData.append("User_AuthKey" , userAuth);
    axios.post(allJournalUrl , formData)
    .then((res) => {
        if(res.data.status === true)
        {
          var val = res.data.data;
          val = val.reverse();
          const filterJournal = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
          })
            setJournal(filterJournal);
        }
        else if(res.data.status === false)
        {
            toast(res.data.message,{type:"error"});
        }
    })
    .catch((err) => {
        console.log(err,"error");
    })
}

useEffect(() => {
    getAllJournal();
},[])

const deleteJournalUrl = endpoints.Journals.deleteJournals;

const deleteItem = (data) => {
const formData = new FormData();
formData.append("ID" , data);
formData.append("User_Authorization" , getAuthtoken)
formData.append("User_AuthKey" , userAuth);
axios.post(deleteJournalUrl,formData)
.then((res) => {
    if(res.data.status === true)
    {
      setShow(false)
      setDeleteConfirm(false)
        setSelectedData("")
        getAllJournal();
        toast("Journals Is Deleted Successfully!",{type:"success"})
    }
    else if(res.data.status === false)
    {
        toast(res.data.message,{type:"error"});
    }
})
.catch((err) => {
    console.log(err,"error");
})
}
useEffect(() => {
  if (deleteConfirm) {
    deleteItem(selectedData);
  }
}, [deleteConfirm]);
const handleUpdate = (data) =>{
  console.log(data ,"value")
    const val = journal.filter((itm,index) => {
      return itm.JOURNALS_ID == data
    })
    const orgValue = val[0];
    console.log(orgValue,"irhhcbsdh")
    navigate("/AddJournal" , {state:orgValue});
    }
 
  const column = [
    { label: "JournalName", name: "JOURNALS_NAME" },
    { label: "Type", name: "JOURNALS_TYPE" },
    {
        label:"Action",
        name:"JOURNALS_ID",
        options:{
          print:false,
            customBodyRender :(value,tableMeta,updateValue) => {
                return(
                    <>
                    <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}  style={{cursor:"pointer"}}/>
                    </div>
                    </>
                )
            }
        }
    }
  ];
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Journal"
      />
       <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <CustomTable data={journal} column={column} />
      <ToastContainer/>
    </div>
  );
};

export default Journal;
