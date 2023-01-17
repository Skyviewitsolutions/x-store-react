import React, { useEffect } from "react";
import MUIDataTable from 'mui-datatables';
// import { data} from './data';
import './ProductTab.css'
import { createTheme } from '@mui/material/styles'

const CustomTable = (props) => {
  
  const getMuiTheme = () => createTheme({
    overrides: {
      MUIDataTableToolbar: {
        root: {
          '@media print': {
            display: 'none'
          }
        },
      },
      MUIDataTablePagination: {
        root: {
          '@media print': {
            display: 'none'
          }
        },
      }
    }
  });


  useEffect(() =>{
    getMuiTheme()
  },[])

  const {data,column} = props
    // const columns = [
    //     { label: 'Title', name: 'title' },
    //     { label: 'Author', name: 'authors' },
    //     { label: 'Page Count', name: 'num_pages', options: { sort: true } },
    //     { label: 'Ratings', name: 'rating' }
    //   ];

    const options = {
      search: true,
      download: true,
      print: true,
      viewColumns: true,
      filter: true,
      filterType: 'dropdown',
      selectableRows: false,
      onTableChange: (action, state) => {
        console.log(action);
        console.dir(state);
      },
    }

  return(
    <>
<div className='protab where_house_tb'>
      <MUIDataTable
        data={data}
        columns={column}
        // titl='Books Directory'
        options={options}
      />
      </div>
    </>
  )
}

export default CustomTable;
