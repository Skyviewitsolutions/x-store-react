import React, { useState } from 'react'
import { RequestProduct } from '../../../../../components/Model/PurhcaseRequestProduct/RequestProduct'

const Optional = () => {
    const [modalShow , setModalShow] = useState(false)
  return (
    <div style={{padding:"10px 20px"}}>
              <button className='add_productbtn' onClick={() => setModalShow(true)}>Add Product</button>
         <RequestProduct modalShow={modalShow} setModalShow={setModalShow}/>
    </div>
  )
}

export default Optional