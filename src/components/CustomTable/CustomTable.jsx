import React from "react";
import MUIDataTable from 'mui-datatables';
// import { data} from './data';
import './ProductTab.css'

const CustomTable = (props) => {

  const {column , data} = props
    
    // const columns = [
    //     { label: 'Title', name: 'title' },
    //     { label: 'Author', name: 'authors' },
    //     { label: 'Page Count', name: 'num_pages', options: { sort: true } },
    //     { label: 'Ratings', name: 'rating' }
    //   ];

      const options = {
        filterType: 'checkbox'
      };

  return(
    <>
<div className='protab'>
      <MUIDataTable
        columns={column}
        data={data}
        // title='Books Directory'
        // options={options}
      />
      </div>
    </>
  )
}

export default CustomTable;
