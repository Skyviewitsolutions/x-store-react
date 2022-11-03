import React from 'react'
import { Modal } from 'react-bootstrap';
import {MdOutlineCancel} from 'react-icons/md';
import './UpdateCost.css';
import { useNavigate } from 'react-router-dom';

const UpdateCost = (props) => {
    const navigate =  useNavigate();
    
    const RedirectToProductdetails = () => {
      navigate('/InventoryProductsDetails');
    }

    const {showUpdateCost ,setShowUpdateCost} = props;
  return (
    <div>
           <Modal show={showUpdateCost} size='lg'>
           <div className="modalConts">
               <div className="div1">
                <p>Change Standard Price</p>
               </div>
               <div className="divtwo">
                <h4>Change Price</h4>
                </div>
                <div className="cost">
                    <p>Cost</p>
                    <input type="text" placeholder='0.000'/>
                </div>
                <div className="updatebtn">
                    <button className='Appbtn' onClick={() => setShowUpdateCost(false)}>Apply</button>
                    <button className='Canbtn' onClick={() => setShowUpdateCost(false)}>Cancel</button>
                </div>
                <div onClick={() => setShowUpdateCost(false)}>
                <MdOutlineCancel size='25px' className='icons'/>
                </div>
              
               </div>
               
        </Modal>
        </div>
  )
}

export default UpdateCost