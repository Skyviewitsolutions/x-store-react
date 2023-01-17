import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
const JournalGroup = () => {
  const navigate = useNavigate();

  const [show , setShow] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [JournalGroup, setJournalGroup] = useState([]);

  const allJournalUrl = endpoints.JournalGroup.allJournalGroup;
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const getJournal = () => {
    const formData = new FormData();
    formData.append("User_Authorization" , getAuthtoken)
    formData.append("User_AuthKey" , userAuth);
    axios
      .post(allJournalUrl , formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.reverse();
          const filterJournalGrp = val.filter((itm,ind) => {
            return itm.DELETE_STATUS != "X"
          })
          setJournalGroup(filterJournalGrp);
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
        console.log(err, "something went wrong");
      });
  };

  useEffect(() => {
    getJournal();
  }, []);

  const deleteJournalGURL = endpoints.JournalGroup.deleteJournalGroup;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" , data);
    formData.append("User_Authorization" , getAuthtoken)
    formData.append("User_AuthKey" , userAuth);
    axios.post(deleteJournalGURL,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        setShow(false)
        setDeleteConfirm(false)
        setSelectedData("")
        getJournal();
        toast("Journal Group Deleted Successfully!" ,{type:"success"});
      }
      else if(res.data.message === false)
      {
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
       console.log(err,"error");
    })
  }

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

  const handleUpdate = (data) => {
   const val = JournalGroup.filter((itm,index) => {
    return itm.JOURNAL_GROUP_ID == data
   })
   const orgValue = val[0];
   navigate("/AddJournalGroup",{state:orgValue});
  }

  const column = [
    { label: "Journal Group", name: "JOURNAL_GROUP" },
    { label: "Excluded Journals", name: "EXCLUDED_JOURNALS" },
    {
      label: "Action",
      name: "JOURNAL_GROUP_ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <FiEdit size={23} color="#4f4e4d" onClick={() => handleUpdate(value)}  style={{cursor:"pointer"}}/>
              <MdDelete size={23} color="4f4e4d" onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}  style={{cursor:"pointer"}}/>
            </>
          );
        },
      },
    },
  ];

  const handleCreatePage = () => {
    navigate("/AddJournalGroup");
  };
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Journal Group"
      />
      <CustomTable column={column} data={JournalGroup} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer/>
    </div>
  );
};

export default JournalGroup;
