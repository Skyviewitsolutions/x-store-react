import React from "react";
import MUIDataTable from 'mui-datatables';
// import { data} from './data';
import './ProductTab.css'

const CustomTable = (props) => {

  const {data,column} = props
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
<div className='protab where_house_tb'>
      <MUIDataTable
        data={data}
        columns={column}
        // titl='Books Directory'
        // options=-{options}
      />
      </div>
    </>
  )
}

export default CustomTable;
