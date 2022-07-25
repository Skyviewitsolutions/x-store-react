import React from 'react'
import Navebar from '../../components/Navbar/Navbar';
import CustomTable from '../../components/CustomTable/CustomTable';
const UomCategories = () => {

  const data = [
    {
      id: 1,
      UnitofMeasurecategory:'Length / Distance' ,
    },
    {
      id: 2,
      UnitofMeasurecategory:'Unit' ,
    },
    {
      id: 3,
      UnitofMeasurecategory:'Unsorted/Imported Units' ,
    },
    {
      id: 4,
      UnitofMeasurecategory:'	Volume',
    },
    {
      id: 5,
      UnitofMeasurecategory:'Weight' ,
    },
    {
      id: 6,
      UnitofMeasurecategory:'Working Time' ,
    },
    {
      id: 7,
      UnitofMeasurecategory:'متر مربع' ,
    },
  ]

  const column = [
    {label : 'Unit of Measure Category', name: 'UnitofMeasurecategory'}
  ]
  return (
    <div>
         <Navebar />
         <CustomTable data = {data} column = {column}/>
    </div>
  )
}

export default UomCategories