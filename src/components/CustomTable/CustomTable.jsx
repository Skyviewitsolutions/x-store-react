import React, { useEffect } from "react";
import MUIDataTable from "mui-datatables";
// import { data} from './data';
import "./ProductTab.css";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const CustomTable = (props) => {

  const { data, column , rowClicked } = props;
  // const columns = [
  //     { label: 'Title', name: 'title' },
  //     { label: 'Author', name: 'authors' },
  //     { label: 'Page Count', name: 'num_pages', options: { sort: true } },
  //     { label: 'Ratings', name: 'rating' }
  //   ];

  const navigate = useNavigate()

  

  const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    // onRowClick : rowClicked,
    selectableRows: false,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MUIDataTableToolbar: {
          root: {
            "@media print": {
              display: "none",
            },
          },
        },
        MUIDataTablePagination: {
          root: {
            "@media print": {
              display: "none",
            },
          },
        },
      },
    });

  useEffect(() => {
    getMuiTheme();
  }, [data]);


  // writing code for printing the table ;
  function printDiv() {
    var divContents = document.getElementById("GFG").innerHTML;
    var a = window.open('', '', 'height=800, width=1300');
    a.document.write('<html>');
    a.document.write('<body > <h1>Div contents are <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

  return (
    <>
      <div className="protab where_house_tb">
        <MUIDataTable
          data={data}
          columns={column}
          // titl='Books Directory'
          options={options}
        />
  {/* here we are creating a demo table just for printing the demo */}
        {/* <h2 onClick={printDiv}>download</h2> 
       <div className="customtable" id="GFG">
        <table border='1'>
          <thead>
            <tr>
              {column.map((itm, ind) => {
                return (
                  <>
                    <td>{itm.label}</td>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((itmm, ind) => {
              return (
                <>
                  <tr>
                    {column.map((itm, ind) => {
                      var key = itm.name;
                      return (
                        <>
                          <td>{itmm[key]}</td>
                        </>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        </div> */}
      </div>
    </>
  );
};

export default CustomTable;
