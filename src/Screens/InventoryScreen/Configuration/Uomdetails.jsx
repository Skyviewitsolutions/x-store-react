import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navebar from '../../../components/Navbar/Navbar';
import { endpoints } from '../../../services/endpoints';
import './Uomdetails.css';
import axios from 'axios';

const Uomdetails = () => {
  
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate('/Add')
  }

  const [Uom , setUom] = useState("")
  const [category , setCategory] = useState("")
  const [type , setType] = useState("")
  const [active , setActive] = useState("")
  
  return (
    <div>
        <Navebar showBelowMenu={true} handleCreatePage={handleCreatePage} showCanelBtn={true}/>
    <div className='UomdetailsContainer'>
        <div className="uompart1">
          <div className="Uomcontent">
            <p>Unit of Measure</p>
            <span>BAG</span>
          </div>
          <div className="Uomcontent">
            <p>Category</p>
            <span style={{color:'#00a09d'}}>Weight</span>
          </div>
          <div className="Uomcontent">
            <p>Type</p>
            <span>Bigger than the reference Unit of Measur</span>
          </div>
          <div className="Uomcontent">
            <p>Bigger Ratio</p>
            <span>25.00000 e.g: 1*(this unit)=ratio*(reference unit)</span>
          </div>
          </div>
          <div className="uompart2">
          <div className="uompart1">
          <div className="Uomcontent">
            <p>Active</p>
            <input type='checkbox' />
          </div>
          
          <div className="Uomcontent">
            <p>Rounding Precisio</p>
            <span>0.00010</span>
            
          </div>
          
          </div>
          </div>
    </div>
    </div>
  )
}

export default Uomdetails