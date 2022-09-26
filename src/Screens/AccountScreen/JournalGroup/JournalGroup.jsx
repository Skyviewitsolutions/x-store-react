import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { endpoints } from "../../../services/endpoints";
const JournalGroup = () => {
  const navigate = useNavigate();
  const [JournalGroup, setJournalGroup] = useState([]);

  const allJournalUrl = endpoints.JournalGroup.allJournalGroup;

  const getJournal = () => {
    axios
      .post(allJournalUrl)
      .then((res) => {
        if (res.data.status === true) {
          setJournalGroup(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message);
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
    axios.post(deleteJournalGURL,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        getJournal();
        toast("Journal Group Deleted Successfully!" ,{type:"success"});
      }
      else if(res.data.message === false)
      {
        toast(res.data.message,{type:"error"});
      }
    })
    .catch((err) => {
       console.log(err,"error");
    })
  }

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
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <FiEdit size={23} color="#4f4e4d" onClick={() => handleUpdate(value)}/>
              <MdDelete size={23} color="4f4e4d" onClick={() => deleteItem(value)}/>
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
      <ToastContainer/>
    </div>
  );
};

export default JournalGroup;
