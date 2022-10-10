import React from "react";
import SalesNavbar from "../SalesNavbar/SalesNavbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const SalesAttribute = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/create_sales_attribute");
  };

  const column = [
    { label: "Attribute", name: "attribute" },
    { label: "Display Type", name: "displayType" },
    { label: "Varients Creation Mode", name: "varientMode" },
    {
      label: "Action",
      name: "ID",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="AtrributrUpdDel">
              <FiEdit
                size={23}
                color="#4f4e4d"
                // onClick={() => handleUpdate(value)}
                style={{ cursor: "pointer" }}
              />
              <MdDelete
                size={23}
                color="#4f4e4d"
                //   onClick={() => deleteItem(value)}
                style={{ cursor: "pointer" }}
              />
            </div>
          );
        },
      },
    },
  ];
  const data = [
    {
      id: 1,
      attribute: "kurkure",
      displayType: "Yes",
      varientMode: "Yes",
      action: "Updatee Delete",
    },
  ];
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <SalesNavbar showBelowMenu={true} title="Attribute" />
        <CustomTable column={column} data={data} />
      </div>
    </>
  );
};
export default SalesAttribute;
