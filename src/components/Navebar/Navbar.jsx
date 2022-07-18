import React from 'react'
import {Nav,Navbar, } from 'react-bootstrap';
import {BsFillGrid3X3GapFill} from 'react-icons/bs';
import {FaSearchMinus} from 'react-icons/fa';
import './Navbar.css';
const Navebar = () => {
  return (
    <>
    <div className='container-fluid'>
       <Navbar className='Navbar' expand="lg" style={{color:"white"}}>
     
       <Navbar.Brand href="#home">
       <span style={{color:'white',marginLeft:"15px"}}> {<BsFillGrid3X3GapFill/>}</span>
          <span style={{marginLeft:"25px" ,color:"white", fontWeight:"bold"}}>Inventory</span> 
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white",marginRight:"15px",backgroundColor:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav" style={{color:"white"}}>
          <Nav className="me-auto px-5">
            <Nav.Link href="#home" className='navetext'>OverView</Nav.Link>
            <Nav.Link href="#link" className='navetext'>Operations</Nav.Link>
            <Nav.Link href="#link" className='navetext'>Master Data</Nav.Link>
            <Nav.Link href="#link" className='navetext'>Wherehouses Reports</Nav.Link>
            <Nav.Link href="#link" className='navetext'>Reporting</Nav.Link>
            <Nav.Link href="#link" className='navetext'>Configurations</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>

    
    </div>
    <div className='container-fluid'>
    <div className='row head'>
      <div className="col-sm-6" style={{width:"50%"}}><h5 style={{marginTop:"10px",color:"#8f8f8f"}}>Inventory Overview</h5></div>
      <div className="col-sm-6 d-flex justify-content-center" style={{width:"50%"}}>
       <div class="input-box " className='search'>
                    <input type="text"  placeholder='Search ...' /><span>{<FaSearchMinus/>}</span> 
                                       
                  </div>
                  </div>
    </div>
    </div>

    </>
  )
}

export default Navebar;

