import React, { useState } from 'react'
import Barcode from '../../Model/BarcodeModal/Barcode'
import './ProductBarcode.css'

const ProductBarcode = () => {
    const [modalShow , setModalShow] = useState(false)
  return (
    <div>
       <div className="barcode_container">
        <button className='barcode_btn' onClick={() => setModalShow(true)}>Add Line</button>
        <Barcode modalShow={modalShow} setModalShow={setModalShow}/>
        </div> 
    </div>
  )
}

export default ProductBarcode