import React from 'react'
import Navebar from '../../components/Navbar/Navbar'
import CustomTable from '../../components/CustomTable/CustomTable'
const Attributes = () => {
  const data = [
    {
      id : '',
      attibute : ' ',
    },
    {
      id : '',
      attibute : ' ',
    },
    {
      id : '',
      attibute : ' ',
    }
  ];

  const column = [
    { label : 'Attribute' , name : 'attribute'},
    { label : 'وضع إنشاء المتغيرات' , name : 'attribute'},

  ]
  return (
    <div>
        <Navebar />
        <CustomTable  data={data} column={column}/>
    </div>
  )
}

export default Attributes