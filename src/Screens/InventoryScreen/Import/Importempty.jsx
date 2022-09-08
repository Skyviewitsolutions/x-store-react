import React from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import Img from '../../../assets/Images/smiling_face.svg';
import './Importempty.css'
const Importempty = () => {
  return (
    <div>
        <Navebar showBelowMenu={true}/>
        <div className="importempty">
          <img src={Img} alt='import' />  
          <h1>Select a CSV or Excel file to import.</h1> 
          <p>Excel files are recommended as fields formatting is automatic.</p>
          <p>Need Help?</p>
          <p style={{color:'#5ec269'}}>Import FAQ</p>
        </div>
    </div>
  )
}

export default Importempty