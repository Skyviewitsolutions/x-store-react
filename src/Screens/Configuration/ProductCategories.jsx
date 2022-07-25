import React from 'react'
import Navebar  from '../../components/Navbar/Navbar';
import CustomTable from '../../components/CustomTable/CustomTable';
const ProductCategories = () => {

  const data = [
    {
      id : '1',
      productCategories : 'Assets',
    },
    {
      id : '2',
      productCategories : 'Assets / Computers and printers',
    },
    {
      id : '3',
      productCategories : 'Assets / Extinguishing programs, permits and licenses',
    },
    {
      id : '4',
      productCategories : 'Assets / Furniture ',
    },
    {
      id : '5',
      productCategories : '	Assets / Houses',
    },
    {
      id : '6',
      productCategories : 'Assets / lab equipment',
    },
    {
      id : '7',
      productCategories : '	Assets / Prefabricated plastic and concrete barriers',
    },
    {
      id : '8',
      productCategories : 'Assets / The machines and the equipments',
    },
    {
      id : '9',
      productCategories : '	Assets / Vehicles',
    },
    {
      id : '10',
      productCategories : '	BATTERY',
    },
  ]; 

  const column = [
    { label : 'Product Category', name: 'productCategories'},
  ];


  return (
    <div>
        <Navebar />
        <CustomTable  data = {data} column = {column}/>
    </div>
  )
}

export default ProductCategories