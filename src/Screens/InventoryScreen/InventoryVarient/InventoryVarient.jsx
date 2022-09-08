import React from "react";
import "./InventoryVarient.css";
import Navebar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import CustomTable from "../../../components/CustomTable/CustomTable";

const InventoryVarient = () => {
  const data = [
    {
      id: "1",
      internalrefrence: "04-01-0001",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "2",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "3",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "3",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "3",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "4",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "5",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "6",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "7",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "7",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "8",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "9",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
    {
      id: "10",
      internalrefrence: "",
      Name: "	01182672-FUEL",
      Attributesvalues: "",
      SalesPrice: "1.0000",
      cost: "0.0000",
      Quantityonhand: "0.000	",
      ForecastedQuantity: "15,187,588.520",
      UnitofMeasure: "Liters",
    },
  ];

  const column = [
    { label: "internal Refrence", name: "internalrefrence" },
    { label: "Name ", name: "Name" },
    { label: "Attributesvalues", name: "Attributesvalues" },
    { label: "SalesPrice", name: "SalesPrice" },
    { label: "cost", name: "cost" },
    { label: "Quantityonhand", name: "Quantityonhand" },
    { label: "ForecastedQuantity", name: "ForecastedQuantity" },
    { label: "UnitofMeasure", name: "UnitofMeasure" },
  ];
  
  return (
    <div className="varcontainer">
      <Navebar showBelowMenu={true} />

      <div className="PVMain">
        <div className="pvmleft">
          <Sidebar />
        </div>
        <div className="pvmRight">
          <CustomTable data={data} column={column} />
        </div>
      </div>
    </div>
  );
};

export default InventoryVarient;
