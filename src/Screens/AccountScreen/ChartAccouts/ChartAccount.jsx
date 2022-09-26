import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";
import AccountNavbar from "../../../components/AccountNavbar/AccountNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import Navebar from "../../../components/Navbar/Navbar";
import { endpoints } from "../../../services/endpoints";
import "./ChartAccount.css";

function ChartAccount(props) {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddChartAccount");
  };

  const [chartAcc, setChartAcc] = useState([]);
  const allChartAccUrl = endpoints.ChartAccount.allChartAcc;

  const getChartAcc = () => {
    axios
      .post(allChartAccUrl)
      .then((res) => {
        if (res.data.status === true) {
          setChartAcc(res.data.data);
        } else if (res.data.status === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getChartAcc();
  }, []);

  const deleteChartAccURL = endpoints.ChartAccount.deleteChartAcc;

const deleteItem = (data) => {
const formData = new FormData();
formData.append("Id",data);
axios.post(deleteChartAccURL,formData)
.then((res) => {
  if(res.data.status === true)
  {
    getChartAcc();
      toast("Chart Of Account Is Deleted Successfully!",{type:"success"})
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
    const val = chartAcc.filter((itm,index) => {
      return itm.ID == data
    })
    const orgValue = val[0];
    console.log(orgValue,"irhhcbsdh")
    navigate("/AddChartAccount" , {state:orgValue});
    }
 

  const column = [
    { label: "Code", name: "CHART_CODE" },
    { label: "Name", name: "CHART_OF_NAME" },
    { label: "Type", name: "CHART_TYPE" },
    { label: "AccountCurrency", name: "ACCOUNT_CURRENCY" },
    {
      label: "Action",
      name: "ID",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <FiEdit size={23} color="#4f434d" onClick={() => handleUpdate(value)}/>
              <MdDelete size={23} color="#4f434d" onClick={() => deleteItem(value)}/>
            </>
          );
        },
      },
    },
  ];
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Chart of Account"
      />
      <CustomTable data={chartAcc} column={column} />
      <ToastContainer/>
    </div>
  );
}

export default ChartAccount;
