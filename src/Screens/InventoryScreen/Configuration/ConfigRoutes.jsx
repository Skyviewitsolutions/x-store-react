import React, { useState } from "react";
import Navebar from "../../../components/Navbar/Navbar";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";

const ConfigRoutes = () => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/AddRoute");
  };
  
  const data = [
    {
      id: "1",
      Route: "Buy",
    },
    {
      id: "2",
      Route: "Replenish on Order (MTO)",
    },
    {
      id: "3",
      Route: "مصنع روافد الحقول للاستثمار: الاستلام على خطوة واحدة (المخزون)",
    },
    {
      id: "4",
      Route: "Al-Majma ah Warehouse: Receive in 1 step (stock)",
    },
    {
      id: "5",
      Route:
        "ALBAHA Project Materials Store: الاستلام على خطوة واحدة (المخزون)",
    },
    {
      id: "6",
      Route: "RIYADH warehouse: Receive in 1 step (stock)",
    },
    {
      id: "7",
      Route:
        "الشركة السعودية لصناعة البيتومين: الاستلام على خطوة واحدة (المخزون)",
    },
    {
      id: "8",
      Route: "Yanbu Warehouse: Receive in 1 step (stock)",
    },
    {
      id: "9",
      Route: "Makkah Warehouse: Receive in 1 step (stock)",
    },
    {
      id: "10",
      Route: "Al-Bahah Warehouse: Receive in 1 step (stock)",
    },
  ];

  const column = [{ label: "Route", name: "Route" }];
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage} />
      <CustomTable data={data} column={column} />
    </div>
  );
};

export default ConfigRoutes;
