import React from 'react' 
import Navebar from '../../components/Navbar/Navbar'
import CustomTable from '../../components/CustomTable/CustomTable'
const OperationTypes = () => {

    const data = [
        {
            id : '1',
            operationtype: 'Receipts',
            warehouse: 'RIYADH warehouse',
        },
        {
            id : '2',
            operationtype: 'Receipts',
            warehouse: 'Al-Aflaj Warehouse',
        },
        {
            id : '3',
            operationtype: 'Receipts',
            warehouse: 'Al-Majmaah Warehouse',
        },
        {
            id : '4',
            operationtype: 'Receipts',
            warehouse: 'Yanbu Warehouse',
        },
        {
            id : '5',
            operationtype: 'Receipts',
            warehouse: 'Makkah Warehouse',
        },
        
    ];

    const column = [
        {label : 'Operaation Type', name : 'operationtype'},
        {label : 'WareHouse', name : 'warehouse'}
    ]
    return(
        <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
        <Navebar showBelowMenu={true}/>
        <CustomTable  data = {data} column = {column}/>
        </div>
    )
}

export default OperationTypes