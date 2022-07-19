import React from "react";
import MUIDataTable from 'mui-datatables';
import { data } from './data';
import './ProductTab.css'
const ProductVarientTab = () => {
    
    const columns = [
        { label: 'Internal References', name: 'title' },
        { label: 'Name', name: 'authors' },
        { label: 'Attribute Value', name: 'num_pages', options: { sort: true } },
        { label: 'Sales Price', name: 'rating' },
        { label: 'Cast', name: 'rating' },
        { label: 'Quantity Of Hand', name: 'rating' },
        { label: 'Forcost Quantity', name: 'rating' },
        { label: 'Unit Of Measers', name: 'rating' },
      ];

      const options = {
        filterType: 'checkbox'
      };

  return(
    <>
<div style={{ maxWidth: '100%' }}>
      <MUIDataTable
        columns={columns}
        data={data}
        // title='Books Directory'
        // options={options}
      />
      </div>
    </>
  )
}

export default ProductVarientTab;
