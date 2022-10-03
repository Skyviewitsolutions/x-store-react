import React, { useEffect, useState } from "react";
import "./AddProductCategories.css";
import { FaRandom } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
import Navebar from "../../../../components/Navbar/Navbar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import DiffrentAccount  from "../../../../components/Model/AddDiffrentAccount/DiffrentAccount"
import { endpoints } from "../../../../services/endpoints";
import { toast,ToastContainer } from "react-toastify";

const AddProductCategories = (props) => {
  const [showAccount , setShowAccount] = useState(false);
  const navigate = useNavigate();

   const AddProductCateUrl = endpoints.productCategory.addProductCategory;
   const incomeUrl = endpoints.products.incomeAcoount;
   const pricediffUrl = endpoints.products.priceDifference;
   const expenseUrl = endpoints.products.expenseAccount;

   const [income , setIncome] = useState([]);
   const [pricediffacc , setPricediffacc] = useState([]);
   const [expense , setExpense] = useState([]);
   
   const [productCateName , setProductCateName] = useState("");
   const [update , setUpdate] = useState(false);

   const formData = new FormData();
   formData.append("categoryName",productCateName);

     const save = () => {
      if(productCateName === "" )
      {
        toast("Product Category Name is Required!",{type:"warning"})
      }
      else{
        axios.post(AddProductCateUrl,formData)
        .then((res) => {
          console.log(res,"responseresult");
          if(res.data.status == true)
          {
            toast("Product Category Added Successfully!",{type:"success"})
          }
          else if(res.data.status == false)
          {
            toast(res.data.message , {type:"error"})
          }
  
        })
        .catch((err) => {
          console.log(err,"error");
        })
       }
      }
     
  const updateParentCategory = (val) =>{
    if(val === "Create and Edit.."){
      setShowAccount(true);
    }
  }

  const location = useLocation();
  const selectedData = location.state;
   console.log(selectedData , "SelectedData here")
   
  useEffect( () => {
    if(selectedData)
    {
      setUpdate(true);
      setProductCateName(selectedData.CATEGORY_NAME);
    }
  },[selectedData]);

  const productcateUpadteUrl = endpoints.productCategory.updateProductCate;

  const updateData = () => {
    if(productCateName === "" )
    {
      toast("Product Category Name is Required!",{type:"warning"})
    }
    else{
      const formData = new FormData();
      formData.append("categoryid" , selectedData.ID);
      formData.append("categoryName",productCateName);
      axios.post(productcateUpadteUrl,formData)
      .then((res) => {
        if (res.data.status === true)
        {
        toast("ProductCategory Updated Successfully!" , {type:"success"})
        }
        else if(res.data.status === false)
        {
          toast(res.data.message,{type:"error"});
        }
      })
      .catch((err) => {
        console.log(err,"error");
        toast("Something went wrong" , {type:"error"})
      });
    }
  }

  
  return (

    <>
    <Navebar showBelowMenu={true} title="Product Category"   save={update === true ? updateData : save}/>
    <div className="AddProductCategoriesContainer">
      <div className="AddProductCatehead">
        <div className="AddProductCate1"></div>
        <div className="AddProductCate2">
          <div className="AddProductcatehead1">
            <FaList
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddProductCateText">
              <p>0</p>
              <p>Product</p>
            </div>
          </div>
          <div className="AddProductcatehead1">
            <FaRandom
              size="25px"
              style={{ color: "#848484", marginTop: "5px" }}
            />
            <div className="AddProductCateText">
              <p>Puteway Rules</p>
            </div>
          </div>
        </div>
      </div>
      <div className="AddProductCateMain">
      <div className="AddProductCatedetails">
        <div className="AddProductCatedetails1">
          <div className="AddProductCatecontent">
            <p>Name</p>
            <input type="text" value={productCateName} onChange={(e) => setProductCateName(e.target.value)}/>
          </div>
          <div className="AddProductCatecontent">
            <p>Parent Category</p>
            <select onChange={(e) => updateParentCategory(e.target.value)} className="prntSlt">
              <option value="Assets">Assets</option>
              <option value="Assets / Computers and printers">Assets / Computers and printers</option>
              <option value="Assets / Extinguishing programs, permits and licenses">
                Assets / Extinguishing programs, permits and licenses
              </option>
              <option  value="Assets / Furniture">Assets / Furniture </option>
              <option value="Assets / Houses">Assets / Houses</option>
              <option value="Assets / lab equipment">Assets / lab equipment</option>
              <option value="Assets / Prefabricated plastic and concrete barriers">
                Assets / Prefabricated plastic and concrete barriers
              </option>
            </select>
          </div>
          <div className="AddProductCatecontent">
            <p>Product Category Code</p>
            <input type="text"/>
          </div>
        </div>
        
        {/* <div className="AddProductdetails2">
          <p>Hierarchy</p>
          <div className="alertbox">
            <b>No hierarchy position.</b>
          </div>
        </div> */}
      </div>
      <div className="AddProductCatecontent4">
        <div className="AccountProperties">
          <h6>Account Properties</h6>
        <div className="stockdropdown">
            <p>Income Account</p>
            <select>
              <option></option>
            {income.map((item,index) => {
              return(
                <>
                <option key={index}>{item.PRODUCT_INCOME_NAME}</option>
                </>
              )
            })}
            </select>
          </div>
        <div className="stockdropdown">
            <p>Expense Account</p>
            <select>
              <option></option>
           {expense.map((item,index) => {
            return(
              <>
              <option key={index}>{item.EXPENSE_NAME}</option>
              </>
            )
           })}
            </select>
          </div>
        </div>
        </div>
      <div className="AddProductdetailscontent3">
      <div className="Logistics">
        <h6>Logistics</h6>
          <div className="force">
            <p>Force Removal Strategy</p>
            <select>
              <option>First in first out (FIFO)</option>
              <option>Last in First Out (LIFO)</option>
            </select>
          </div>
      </div>
        <div className="InventoryValuation">
          <h6>Inventory Valuation</h6>
        <div className="force">
            <p>Costing Method</p>
            <select>
              <option></option>
              <option>Standard Price</option>
              <option>First in first out (FIFO)</option>
              <option>Average Cost(AVCO)</option>
            </select>
          </div>
        <div className="force">
            <p>Inventory Valuation</p>
            <select>
              <option></option>
              <option>Manual</option>
              <option>Automated</option>
            </select>
          </div>
        </div>
      </div>
    
        </div>
   
      <ToastContainer />
      </div>
      <DiffrentAccount showAccount={showAccount} setShowAccount={setShowAccount}/>
      
      </>
  );
};

export default AddProductCategories;
