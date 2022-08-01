import React , {useState} from 'react'
import Navebar from '../../components/Navbar/Navbar'
import InventoryProductDetailsMain from '../../components/InventoryProductDetailsMain/InventoryProductDetailsMain'
import ProductDetailsHeader from '../../components/ProductDeatilsHeader/ProductDetailsHeader';
import { Modal } from 'react-bootstrap';
import './AddProduct.css'

const AddProduct = () => {
    const [isEdit , setIsEdit] = useState(false);
  return (
    <div>
     <Navebar  showBelowMenu={true}/>
     <ProductDetailsHeader isEdit={isEdit} setIsEdit={setIsEdit} />
        <InventoryProductDetailsMain isEdit={isEdit}/>

        {/* <Modal show={true}>
           <div className="modalCont">

           </div>
        </Modal> */}
    </div>
  )
}

export default AddProduct