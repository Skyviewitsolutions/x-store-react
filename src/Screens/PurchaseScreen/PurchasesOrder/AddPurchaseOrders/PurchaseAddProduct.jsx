import axios from 'axios';
import React from 'react'
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { endpoints } from '../../../../services/endpoints';

const PurchaseAddProduct = (props) => {

    const navigate = useNavigate();
    const {
      modalShow,
      setModalShow,
      productdet,
      getAllproductdetails,
      setProductDet,
      description,
      setDescription,
      quantity,
      setQuantity,
      uomdet,
      setUomdet,
      save,
      vendor,
      column,
      productAll,
      saveProduct,
      updateProductDetails,
      updateSelectedProductList,
      column2,
      requestId,
      singleProduct,
      setSingleProduct,
      uniqueId,
      allVendorProduct,
      selectedProductList ,
      selectedProductList2,
      setSelectedProductList2,
      setAllVendorProduct,
      setSelectedProductList,
      getAuthtoken,
      userAuth,
      update,
      setUpdate
    } = props;
  
    // const [showTable , setShowTable] = useState(false)
    console.log(selectedProductList2 , "selet")
  
    const addReqProductUrl = endpoints.requestQuotation.addProductdetails;
  
    const handleProductSelection = (val) => {
  
      var filterProduct = allVendorProduct.filter((product, index) => {
        return product.PRODUCT_NAME == val;
      });
  
      var filterProducts = filterProduct[0]
     
      const formData = new FormData();
      formData.append("Product_ID" ,filterProducts.PRODUCT_ID);
      formData.append("UOM_ID" ,filterProducts.UNITOFMEASUREMENT_ID);
      formData.append("Description",filterProducts.PRODUCT_DESCRIPTION);
      formData.append("Qty" ,filterProducts.QUANTITY);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(addReqProductUrl,formData)
      .then((res) => {
        if(res.data.status){
          setSelectedProductList((itm) => {
            return [...itm, filterProduct[0]];
          });
          toast("product added successfully" , {toast : "success"})
        }
        else if(res.data.status == false){
          toast(res.data.message , {type : "warning"})
        }
      })
      .catch((err) => {
        console.log(err,"dsfs")
      })
  
  
    };
  
    const deleteProductDetailsUrl = endpoints.requestQuotation.deleteProductdetails;
  
    const removeSelectedItem = (index) => {
  
      const filteredData = selectedProductList.filter((itm, ind) => {
        return ind != index;
      });
      var selectedData = selectedProductList.find((itm,ind) =>{
        return ind == index
      })
      var id = selectedData.ID
      const formData = new FormData();
      formData.append("ID" , id);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      axios.post(deleteProductDetailsUrl,formData)
      .then((res) => {
        if(res.data.status === true)
        {
            setSelectedProductList(filteredData);
            toast("Product deleted Successfully",{type:"success"});
            getAllproductdetails()
        }
        else if(res.data.status === false)
        {
          if(res.data.code === 3)
          {
            toast("Session expired , Please re-login",{type:"warning"})
            navigate('/');
          }
          else{
           toast(res.data.message,{type:"error"});
          }
        }
      })
      .catch((err) => {
        console.log(err,"error");
    })
    };
  
    console.log(selectedProductList , "selectedProduct list")
  
  return (
    <div>
      <div className="req_product">
        <table
          style={{ textAlign: "center", padding: "10px" }}
        >
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th className="req_product_des">Description</th>
              <th>Quantity</th>
              <th>Uom</th>
              <th>Unit Price</th>
            </tr>
          </thead>

          <tbody>
            {selectedProductList.length != 0 &&
              selectedProductList.map((itm, index) => {
                return (
                  <>
                    <tr className="pro_dropdowns">
                      <td>{index + 1}</td>
                      <td>
                        {itm.PRODUCT_CODE} {itm.PRODUCT_NAME}
                      </td>
                      <td className="req_product_des">
                        {" "}
                        {itm.PRODUCT_DESCRIPTION}
                      </td>
                      <td>{itm.QUANTITY}</td>
                      <td>{itm.UNITOFMEASUREMENT}</td>
                      <td>{itm.SALES_PRICE}</td>
                      <td>
                        {" "}
                        <MdDelete
                          size={23}
                          color="#4f4e4d"
                          onClick={() => removeSelectedItem(index)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            {selectedProductList2.length != 0 &&
              selectedProductList2.map((itm, index) => {
                return (
                  <>
                    <tr className="pro_dropdowns">
                      <td>{index + 1}</td>
                      <td>
                        {itm.PRODUCT_CODE} {itm.PRODUCT_NAME}
                      </td>
                      <td className="req_product_des">
                        {" "}
                        {itm.DESCRIPTION}
                      </td>
                      <td>{itm.PRODUCT_QUANTITY}</td>
                      <td>{itm.UNIT_OF_MEASUREMENT}</td>
                      <td>{itm.UNIT_PRICE}</td>
                      <td>
                        {" "}
                        <MdDelete
                          size={23}
                          color="#4f4e4d"
                          onClick={() => removeSelectedItem(index)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  </>
                );
              })}

            {modalShow && (
              <tr className="pro_dropdowns">
                <td></td>
                <td>
                  <select
                    className="product_select"
                    value=""
                    onChange={(e) => handleProductSelection(e.target.value)}
                  >
                    <option value="">Choose product</option>
                    {allVendorProduct.map((itm, ind) => {
                      return (
                        <>
                          <option value={itm.PRODUCT_NAME}>
                            {itm.PRODUCT_NAME}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
   {update === false &&  <button
        className="add_productbtn"
        onClick={() => setModalShow(!modalShow)}
      >
        Add Product
      </button>
}
    </div>
  )
}

export default PurchaseAddProduct
