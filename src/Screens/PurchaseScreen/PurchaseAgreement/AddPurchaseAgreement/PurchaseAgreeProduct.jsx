import React, { useState } from 'react'
import { RequestProduct } from '../../../../components/Model/PurhcaseRequestProduct/RequestProduct'

const PurchaseAgreeProduct = () => {

    const [modalShow , setModalShow] = useState(false)
  return (
    <div> 
        <div className="addproduct_Con">
    <button className='add_productbtn' onClick={() => setModalShow(true)}>Add Product</button>
    <div className="addproduct_conditions">
        <div className="add_Part1">
            <input type="text" placeholder='Define your terms and conditions...' />
        </div>
    </div>
    <RequestProduct modalShow={modalShow} setModalShow={setModalShow}/>
</div>
</div>
  )
}

export default PurchaseAgreeProduct