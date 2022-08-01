import React from 'react'
import Navebar from '../../components/Navbar/Navbar';
import empty from '../../assets/Images/empty.svg';
import { useLocation } from 'react-router-dom';
import './Empty.css';

const Empty = () => {

  const location = useLocation();
  const {state} = location;
  
  
  return (
    <div>
       <Navebar showBelowMenu={true}/>
       <div className="emptypage">
         <img src={empty} alt="empty" />
         <h1>{state.title}</h1>
         <p>{state.text}</p>
       </div>
    </div>
  )
}

export default Empty