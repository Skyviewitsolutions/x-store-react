import MUIDataTable from 'mui-datatables'
import React from 'react'
import './ProductTable.css'

const ProductTable = (props) => {
    const {data,column} = props
    const options = {
        filterType: 'checkbox'
      };
  return (
    <div className='product_table'>
      <MUIDataTable
        data={data}
        columns={column}
        // titl='Books Directory'
        // options=-{options}
      />
      </div>
  )
}

export default ProductTable