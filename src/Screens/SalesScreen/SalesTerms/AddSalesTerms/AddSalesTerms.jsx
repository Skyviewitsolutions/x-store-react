import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../../services/endpoints";
import SalesNavbar from "../../SalesNavbar/SalesNavbar";
import "./AddSalesTerms.css";
const AddSalesTerms = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [teamMembers, setTeamMembers] = useState();
  const [teamMembers2, setTeamMembers2] = useState();
  const [salesTeam, setSalesTeam] = useState("");
  const [quotation, setQuotation] = useState(false);
  const [teamLeader, setTeamLeader] = useState("");
  const [invoiceTarget, setInvoiceTarget] = useState("");
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [getEmployee, setGetEmployee] = useState([]);
  const [getLeader , setGetLeader] = useState([])

  const allEmpUrl = endpoints.employee.allEmp;

  const allEmployee = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    axios.post(allEmpUrl, formData).then((res) => {
      if (res.data.status === true) {
        var data = res.data.data;
        const filterEmp = data.filter((itm,ind) => {
          return itm.DELETE_STATUS != 'X'
        })

        var b = [];
        for (var i = 0; i < filterEmp.length; i++) {
          var items = filterEmp[i];

          var dta = { name: items.EMPLOYEE_NAME, id: items.ID };
          b.push(dta)
        }
        setGetEmployee(b)
      }
    });
  };

  const allLeaders = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    axios.post(allEmpUrl, formData)
    .then((res) => {
      if (res.data.status === true) {
        var val = res.data.data;
        const filterLeaders = val.filter((itm,ind) => {
          return itm.DELETE_STATUS != "X"
        })
        setGetLeader(filterLeaders)

      }else if(res.data.status === false){
        toast(res.data.message,{type:"error"})
      }
    })
      .catch((err) => {
        console.log(err,"error")
      })
  }

  useEffect(() => {
    allEmployee();
    allLeaders()
  }, []);


  const onSelect1 = (selectedList, selectedItem) => {
    setTeamMembers(selectedList);
    const allteamMembers = selectedList.map((itm, ind) => {
      return itm.name;
    });
    setTeamMembers2(allteamMembers);
  };

  const onRemove1 = (selectedList, removedItem) => {
    setTeamMembers(selectedList);
    const allteamMembers = selectedList.map((itm, ind) => {
      return itm.name;
    });
    setTeamMembers2(allteamMembers);
  };

  const addsalesteamUrl = endpoints.SalesTeams.addSalesTeam;
  const save = () => {
    if (salesTeam === "") {
      toast("Sales Team Name is required", { type: "warning" });
    } else if (quotation === "") {
      toast("Quotation Is Required", { type: "warning" });
    } else if (teamLeader === "") {
      toast("Team Leader Is Required", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("Sales_Team", salesTeam);
      formData.append("Quotation", quotation);
      formData.append("TeamLeader_ID", teamLeader);
      formData.append("Invoicing_Target", invoiceTarget);
      formData.append("Team_Member", teamMembers);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(addsalesteamUrl, formData)
      .then((res) => {
        console.log(res,"cdsc")
        if (res.data.status === true) {
          toast(res.data.message, { type: "success" });
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      });
    }
  };


  return (
    <div>
      <SalesNavbar
        showBelowMenu={true}
        title="Sales Teams"
        showCanelBtn={true}
        save={save}
      />
      <div className="SalesTeamMainCon">
        <div className="SalesTeamCon">
          <div className="salesTeamName">
            <p>Sales Team</p>
            <input
              type="text"
              placeholder="Sales Team Name...."
              value={salesTeam}
              onChange={(e) => setSalesTeam(e.target.value)}
            />
          </div>
          <div className="SalesTeamQuo">
            <input
              type="checkbox"
              checked={quotation}
              onChange={(e) => setQuotation(!quotation)}
            />
            <p>Quotations</p>
          </div>
          <div className="salesteam">
            <p>Team Leader</p>
            <select
              value={teamLeader}
              onChange={(e) => setTeamLeader(e.target.value)}
            >
              <option>choose any one</option>
             {getLeader.map((itm,ind) => {
              return(
                <>
                  <option value={itm.ID}>{itm.EMPLOYEE_NAME}</option>
                </>
              )
            
             })}
            </select>
          </div>
          <div className="salesteam">
            <p>Invoicing Target</p>
            <input
              type="text"
              value={invoiceTarget}
              onChange={(e) => setInvoiceTarget(e.target.value)}
            />
          </div>
          <div className="SalesTermMultiselect">
            <p>Team Members</p>
            <Multiselect
              className="SalesTerMultiselect"
              options={getEmployee} // Options to display in the dropdown
              selectedValues={teamMembers} // Preselected value to persist in dropdown
              onSelect={onSelect1} // Function will trigger on select event
              onRemove={onRemove1} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddSalesTerms;
