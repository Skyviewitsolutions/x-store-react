// This is the loader which we are creating here will be used for loading ;
import React from "react" ;
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import "./Loader.css"

const Loader = () =>{
    return(<>
     <div className="loader">
     <Backdrop
     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
     open={true}
>
  {/* <CircularProgress color="inherit" /> */}
  <div className="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
</Backdrop>
     </div>
    </>)
}

// exporting the loader component ;
export default Loader ;