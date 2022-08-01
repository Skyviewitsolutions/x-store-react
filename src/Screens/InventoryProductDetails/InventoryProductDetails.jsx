import React ,{useState} from 'react'
import Navebar from '../../components/Navbar/Navbar';
import ProductDetailsHeader from '../../components/ProductDeatilsHeader/ProductDetailsHeader';
import InventoryProductDetailsMain from '../../components/InventoryProductDetailsMain/InventoryProductDetailsMain';
import InventoryProductDetailsFooter from '../../components/InventoryProductDetailsFooter/InventoryProductDetailsFooter';

const InventoryProductDetails = () => {
  const [isEdit , setIsEdit] = useState(false);

  return (
    <div>
        <Navebar />
        <ProductDetailsHeader isEdit={isEdit} setIsEdit={setIsEdit} />
        <InventoryProductDetailsMain isEdit={isEdit}/>
        {/* <InventoryProductDetailsFooter /> */}
    </div>
  )
}

export default InventoryProductDetails