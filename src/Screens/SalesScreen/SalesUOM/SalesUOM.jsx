import React from 'react'
import CustomTable from '../../../components/CustomTable/CustomTable';
import SalesNavbar from '../SalesNavbar/SalesNavbar';

const SalesUOM = () => {
  const column = [
    { label: "Unit of Measure", name: "salesUOM" },
    { label: "Category", name: "salesCategory" },
    { label: "Type", name: "salesType" },
  ];
  const data = [
    {
      id: 1,
      salesUOM: "C150",
      salesCategory: "Unit",
      salesType: "Bigger than the reference Unit of Measure",
    },
    {
      id: 2,
      salesUOM: "CS150",
      salesCategory: "Unit",
      salesType: "Bigger than the reference Unit of Measure",
    },
    {
      id: 3,
      salesUOM: "C110",
      salesCategory: "Unit",
      salesType: "Bigger than the reference Unit of Measure",
    },
    {
      id: 4,
      salesUOM: "C1502",
      salesCategory: "Unit",
      salesType: "Bigger than the reference Unit of Measure",
    },
  ]
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <SalesNavbar showBelowMenu={true} title="Units of Measure" />
        <CustomTable column={column} data={data} />
      </div>

    </>
  )
}

export default SalesUOM;
