import React from 'react'
import Navebar from '../../components/Navbar/Navbar';
import CustomTable from '../../components/CustomTable/CustomTable';
const Uom = () => {

  const data = [
      {
        id: 1,
        unitofmeasure: '	BAG',
        category: 'Weight',
        type:'	Bigger than the reference Unit of Measure',
      },
      {
        id: 2,
        unitofmeasure: 'Barell',
        category: '	Volume',
        type:'Bigger than the reference Unit of Measure',
      },
      {
        id: 3,
        unitofmeasure: 'cm',
        category: '	Length / Distance',
        type:'Smaller than the reference Unit of Measure',
      },
      {
        id: 4,
        unitofmeasure: 'cm',
        category: '	Length / Distance',
        type:'Smaller than the reference Unit of Measure',
      },
      {
        id: 5,
        unitofmeasure: 'Days',
        category: 'Working Time',
        type:'	Reference Unit of Measure for this category',
      },
      {
        id: 6,
        unitofmeasure: 'Dozens',
        category: 'Unit',
        type:'Bigger than the reference Unit of Measure',
      },
      {
        id: 7,
        unitofmeasure: 'DRUM',
        category: '	Volume',
        type:'Bigger than the reference Unit of Measure',
      },
      {
        id: 8,
        unitofmeasure: '	fl oz',
        category: 'Volume',
        type:'Smaller than the reference Unit of Measure',
      },
      {
        id: 9,
        unitofmeasure: 'foot(ft)',
        category: 'Length / Distance',
        type:'	Smaller than the reference Unit of Measure',
      },
      {
        id: 10,
        unitofmeasure: 'g',
        category: '	Weight',
        type:'Smaller than the reference Unit of Measure',
      },
  ];

  const column = [
    { label :'Unit of Measure', name:'unitofmeasure'},
    { label :'Category', name:'category'},
    { label :'Type', name:'type'},
  ]
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
        <Navebar showBelowMenu={true}/>
        <CustomTable  data={data} column={column}/>
    </div>
  )
}

export default Uom