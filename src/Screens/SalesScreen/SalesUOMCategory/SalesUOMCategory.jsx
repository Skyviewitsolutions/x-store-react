import React from 'react'
import CustomTable from '../../../components/CustomTable/CustomTable';
import SalesNavbar from '../SalesNavbar/SalesNavbar';

const SalesUOMCategory = () => {
    const column = [
        { label: "Unit of Measure Category", name: "salesUOMCategory" },

    ];
    const data = [
        {
            id: 1,
            salesUOMCategory: "Unit",
        },
        {
            id: 2,
            salesUOMCategory: "Weight",
        },
        {
            id: 3,
            salesUOMCategory: "Working Time",
        },
        {
            id: 4,
            salesUOMCategory: "Volume",
        },
        {
            id: 5,
            salesUOMCategory: "Length",
        },
    ]
    return (
        <>
            <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
                <SalesNavbar showBelowMenu={true} title="Units of Measure Category" />
                <CustomTable column={column} data={data} />
            </div>
        </>
    )
}
export default SalesUOMCategory;