import React from 'react'
import { Modal } from 'react-bootstrap'
import { MdOutlineCancel } from 'react-icons/md'
import './Barcode.css'
const Barcode = (props) => {

    const {modalShow,setModalShow} = props;
  return (
    <div>
        <Modal show={modalShow} size='lg'>
            <div className="barcode_maincon">
                <div className="barcode_container">
                    <h3>Product Barcode</h3>
                    <div className="barcode_contents">
                        <p>Barcode</p>
                        <input type="text" />
                    </div>
                    <div className="barcode_contents">
                        <p>Barcode Description</p>
                        <input type="text" />
                    </div>
                    <div className="barcode_contents">
                        <p>UOM</p>
                        <select>
                            <option>Test</option>
                            <option>Testing</option>
                        </select>
                    </div>
                </div>
                <div className="bar_btn">
                    <button className='barcode_btns'>Save</button>
                </div>
                 <div onClick={() => setModalShow(false)}>
            <MdOutlineCancel size="25px" className="Acccuticons" />
          </div>
            </div>
        </Modal>
    </div>
  )
}

export default Barcode