import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import { RequestProduct } from "../../../../components/Model/PurhcaseRequestProduct/RequestProduct";
import ProductTable from "../../../../components/ProductTable/ProductTable";
import { endpoints } from "../../../../services/endpoints";
import "./AddProductRequest.css";

const AddProductRequest = (props) => {
  const navigate = useNavigate();
  const {
    modalShow,
    setModalShow,
    productdet,
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
    setAllVendorProduct,
  } = props;

  // const [showTable , setShowTable] = useState(false)
  const [selectedProductList, setSelectedProductList] = useState([]);

  const handleProductSelection = (val) => {
    var filterProduct = allVendorProduct.filter((product, index) => {
      return product.PRODUCT_NAME == val;
    });

    setSelectedProductList((itm) => {
      return [...itm, filterProduct[0]];
    });
  };

  const removeSelectedItem = (index) =>{
    const filteredData = selectedProductList.filter((itm,ind) =>{
      return ind != index
    })
    setSelectedProductList(filteredData)
  }

  return (
    <div>
      {/* <div className="addproduct_Con">
        {uniqueId  ?  <ProductTable data={singleProduct} column={column2}/> : <ProductTable data={productAll} column={column}/>
    }
         {!uniqueId ? <button className='add_productbtn' onClick={() => setModalShow(true)}>Add Product</button> : null}
            <div className="addproduct_conditions">
                <div className="add_part2">
                <hr style={{width:"250px",color:"#6666",fontWeight:"bold",height:"2px"}}/>
                    <div className="add_text">
                        <p>Untaxed Amount:</p>
                        <span>0.00 SR</span>
                    </div>
                    <div className="add_text">
                        <p>Taxes:</p>
                        <span>0.00 SR</span>
                    </div>
                    <hr style={{width:"250px",color:"#6666",height:"2px"}}/>
                    <div className="add_text">
                        <p>Total:</p>
                        <span>0.00 SR</span>
                    </div>
                </div>
            </div>

        </div>
       
        <RequestProduct {...props}/> */}

      <div className="req_product">
        <table
          striped
          bordered
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
              

              { selectedProductList.length != 0 &&
                selectedProductList.map((itm, index) => {
                  console.log(itm , "items here")
                  return (
                    <>
                      <tr className="pro_dropdowns">
                        <td>{index + 1}</td>
                        <td>{itm.PRODUCT_NAME}</td>
                        <td className="req_product_des"> {itm.PRODUCT_DESCRIPTION}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td onClick={() => removeSelectedItem(index)}>delete</td>
                      </tr>
                    </>
                  );
                })}

                {modalShow &&  
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
                <td ></td>
              </tr>}
            </tbody>
          
        </table>
      </div>
      <button className="add_productbtn" onClick={() => setModalShow(!modalShow)}>
        Add Product
      </button>
    </div>
  );
};

export default AddProductRequest;
