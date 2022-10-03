import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import Navebar from "../../../components/Navbar/Navbar";
import { endpoints } from "../../../services/endpoints";
import "./Journals.css";
const Journal = () => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddJournal");
  };
const [journal , setJournal] = useState([]);
const allJournalUrl = endpoints.Journals.allJournals;

const getAllJournal = () => {
    axios.post(allJournalUrl)
    .then((res) => {
        if(res.data.status === true)
        {
            setJournal(res.data.data);
        }
        else if(res.data.status === false)
        {
            alert(res.data.message);
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
axios.post(deleteJournalUrl,formData)
.then((res) => {
    if(res.data.status === true)
    {
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
            customBodyRender :(value,tableMeta,updateValue) => {
                return(
                    <>
                    <div className="updtdlt">
                        <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
                        <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}  style={{cursor:"pointer"}}/>
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
      <CustomTable data={journal} column={column} />
      <ToastContainer/>
    </div>
  );
};

export default Journal;
