
import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { RiDeleteBin7Line } from 'react-icons/ri'
import './DeletePopup.css'

const DeletePopup = (props) => {

    const {show , setShow , setDeleteConfirm} = props;

  return (
    <div>
         <Modal show={show}  animation={false}>
        <Modal.Header  >
        <RiDeleteBin7Line style={{margin:"10px",color:"#0077b0"}}  size={35}/>
          <Modal.Title style={{fontSize:"20px",color:"#6a6a6a"}}>Are you sure you want to delete ?</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" className='btn_delte' onClick={() => setDeleteConfirm(true)}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DeletePopup