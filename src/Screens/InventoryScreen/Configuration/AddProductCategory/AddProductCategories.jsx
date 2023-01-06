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
import DiffrentAccount from "../../../../components/Model/AddDiffrentAccount/DiffrentAccount";
import { endpoints } from "../../../../services/endpoints";
import { toast, ToastContainer } from "react-toastify";

const AddProductCategories = (props) => {
  const [showAccount, setShowAccount] = useState(false);
  const navigate = useNavigate();

  const addProductCateUrl = endpoints.productCategory.addProductCategory;
  const incomeUrl = endpoints.products.incomeAcoount;
  const pricediffUrl = endpoints.products.priceDifference;
  const expenseUrl = endpoints.products.expenseAccount;
  const allParentCateurl = endpoints.parentCate.allParentCate;

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [getParentCate, setGetParentCate] = useState([]);
  const [pricedif, setPriceDef] = useState([]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [removalStrategy, setRemovalStrategy] = useState("");
  const [parentCate, setParentCate] = useState("");
  const [incomeAcc, setIncomeAcc] = useState("");
  const [expenseAcc, setExpenseAcc] = useState("");
  const [pricedifAcc, setPriceDifAcc] = useState("");
  const [productCateCode, setProductCateCode] = useState("");
  const [costing, setCosting] = useState("");
  const [valuation, setValuation] = useState("");
  const [name, setName] = useState("");
  const [stockIn, setStockIn] = useState("");
  const [stockOut, setStockOut] = useState("");
  const [stockVal, setStockVal] = useState("");
  const [stockJournal, setStockJournal] = useState("");

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(incomeUrl,formData).then((res) => {
      if (res.data.status === true) {
        setIncome(res.data.data);
      } else if (res.data.status === false) {
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        else{
         toast(res.data.message,{type:"error"});
        }
      }
    });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(expenseUrl,formData).then((res) => {
      if (res.data.status === true) {
        setExpense(res.data.data);
      } else if (res.data.status === false) {
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        else{
         toast(res.data.message,{type:"error"});
        }
      }
    });
  }, []);
  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(pricediffUrl,formData).then((res) => {
      if (res.data.status === true) {
        setPriceDef(res.data.data);
      } else if (res.data.status === false) {
        if(res.data.code === 3)
        {
          toast("Session expired , Please re-login",{type:"warning"})
          navigate('/');
        }
        else{
         toast(res.data.message,{type:"error"});
        }
      }
    });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);

    axios.post(allParentCateurl, formData).then((res) => {
      if (res.data.status === true) {
        setGetParentCate(res.data.data);
      } else if (res.data.status === false) {
        toast(res.data.message, { type: "error" });
      }
    });
  }, []);

  const formData = new FormData();
  formData.append("Name", name);
  formData.append("Parent_Category", parentCate);
  formData.append("Price_Difference", pricedifAcc);
  formData.append("Income_Acc", incomeAcc);
  formData.append("Expense_Acc", expenseAcc);
  formData.append("Stock_In_Acc", stockIn);
  formData.append("Stock_Out_Acc", stockOut);
  formData.append("Stock_Val_Acc", stockVal);
  formData.append("Stock_Journal", stockJournal);
  formData.append("Force_Rem_Stra", removalStrategy);
  formData.append("Costing_Method", costing);
  formData.append("Inventory_Valuation", valuation);
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);

  const save = () => {
    if (name === "") {
      toast("Product Category Name is Required!", { type: "warning" });
    } else if (parentCate === "") {
      toast("Product Category Is Required !", { type: "warning" });
    } else if (incomeAcc === "") {
      toast("Income Account Is Required!", { type: "warning" });
    } else if (expenseAcc === "") {
      toast("Expense Account Is Required!", { type: "warning" });
    } else if (stockIn === "") {
      toast("Stock Input is Required!", { type: "warning" });
    } else if (stockOut === "") {
      toast("Stock Output is Required!", { type: "warning" });
    } else if (stockVal === "") {
      toast("Stock Valuation is required!", { type: "warning" });
    } else if (stockJournal === "") {
      toast("Stock Journal is Required!", { type: "warning" });
    } else if (removalStrategy === "") {
      toast("Force Removal Strategy Is Required!", { type: "warning" });
    } else if (costing === "") {
      toast("Costing Method Is Required!", { type: "warning" });
    } else if (valuation === "") {
      toast("Inventory Valuation Is Required!", { type: "warning" });
    } else {
      axios
        .post(addProductCateUrl, formData)
        .then((res) => {
          console.log(res, "responseresult");
          if (res.data.status == true) {
            toast("Product Category Added Successfully!", { type: "success" });
            setTimeout(() => {
              navigate('/ProductCategories')
            }, 1000);
          } else if (res.data.status == false) {
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
          console.log(err, "error");
        });
    }
  };

  const updateParentCategory = (val) => {
    if (val === "Create and Edit..") {
      setShowAccount(true);
    }
  };

  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData, "SelectedData here");

  useEffect(() => {
    if (selectedData) {
      setUpdate(true);
      setName(selectedData.CATEGORY_NAME);
      setParentCate(selectedData.PARENT_CATEGORY);
      setProductCateCode(selectedData.PRODUCT_CATEGORY_CODE);
      setIncomeAcc(selectedData.INCOME_ACCOUNT);
      setExpenseAcc(selectedData.EXPENSE_ACCOUNT);
      setRemovalStrategy(selectedData.FORCE_REMOVAL_STRATEGY);
      setCosting(selectedData.COSTING_METHOD);
      setValuation(selectedData.INVENTORY_VALUTION);
      setPriceDifAcc(selectedData.PRICE_DIFFERENCE_ACCOUNT);
      setStockIn(selectedData.STOCK_INPUT_ACCOUNT);
      setStockOut(selectedData.STOCK_OUTPUT_ACCOUNT);
      setStockVal(selectedData.STOCK_VALUATION_ACCOUNT);
      setStockJournal(selectedData.STOCK_JOURNAL);
      setValuation(selectedData.INVENTORY_VALUATION);
    }
  }, [selectedData]);

  const productcateUpadteUrl = endpoints.productCategory.updateProductCate;

  const updateData = () => {
    if (name === "") {
      toast("Product Category Name is Required!", { type: "warning" });
    } else if (parentCate === "") {
      toast("Product Category Is Required !", { type: "warning" });
    } else if (incomeAcc === "") {
      toast("Income Account Is Required!", { type: "warning" });
    } else if (expenseAcc === "") {
      toast("Expense Account Is Required!", { type: "warning" });
    } else if (removalStrategy === "") {
      toast("Force Removal Strategy Is Required!", { type: "warning" });
    } else if (costing === "") {
      toast("Costing Method Is Required!", { type: "warning" });
    } else if (valuation === "") {
      toast("Inventory Valuation Is Required!", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("id", selectedData.CATEGORY_ID);
      formData.append("Name", name);
      formData.append("Parent_Category", parentCate);
      formData.append("Price_Difference", pricedifAcc);
      formData.append("Income_Acc", incomeAcc);
      formData.append("Expense_Acc", expenseAcc);
      formData.append("Stock_In_Acc", stockIn);
      formData.append("Stock_Out_Acc", stockOut);
      formData.append("Stock_Val_Acc", stockVal);
      formData.append("Stock_Journal", stockJournal);
      formData.append("Force_Rem_Stra", removalStrategy);
      formData.append("Costing_Method", costing);
      formData.append("Inventory_Valuation", valuation);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);

      axios
        .post(productcateUpadteUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("ProductCategory Updated Successfully!", { type: "success" });
            setTimeout(() => {
              navigate('/ProductCategories')
            }, 1000);
          } else if (res.data.status === false) {
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
          console.log(err, "error");
          toast("Something went wrong", { type: "error" });
        });
    }
  };
  return (
    <>
      <Navebar
        showBelowMenu={true}
        title="Product Category"
        save={update === true ? updateData : save}
        showCanelBtn={true}
      />
      <div className="AddProductCategoriesContainer">
        {/* <div className="AddProductCatehead">
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
        </div> */}
        <div className="AddProductCateMain">
          <div className="AddProductCatedetails">
            <div className="AddProductCatedetails1">
              <div className="AddProductCatecontent">
                <p>Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="AddProductCatecontent">
                <p>Parent Category</p>
                <select
                  onChange={(e) => setParentCate(e.target.value)}
                  value={parentCate}
                  className="prntSlt"
                >
                  <option value="">Select any one</option>
                  {getParentCate.map((item, index) => {
                    return (
                      <>
                        <option value={item.CATEGORY_NAME}>
                          {item.CATEGORY_NAME}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
             {update === true &&  <div className="AddProductCatecontent">
                <p>Product Category Code</p>
                <input
                  type="text"
                  value={productCateCode}
                  readOnly={true}
                  onChange={(e) => setProductCateCode(e.target.value)}
                />
              </div> }
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
                <p>Price Difference Account</p>
                <select
                  value={pricedifAcc}
                  onChange={(e) => setPriceDifAcc(e.target.value)}
                >
                  <option value="">Please choose any one</option>
                  {pricedif.map((item, index) => {
                    return (
                      <>
                        <option value={item.AMOUNT_NAME} key={index}>
                          {item.AMOUNT_NAME}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="stockdropdown">
                <p>Income Account</p>
                <select
                  value={incomeAcc}
                  onChange={(e) => setIncomeAcc(e.target.value)}
                >
                  <option value="">Select any one</option>
                  {income.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item.PRODUCT_INCOME_NAME}>
                          {item.PRODUCT_INCOME_NAME}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="stockdropdown">
                <p>Expense Account</p>
                <select
                  value={expenseAcc}
                  onChange={(e) => setExpenseAcc(e.target.value)}
                >
                   <option value="">Select any one</option>
                  {expense.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item.EXPENSE_NAME}>
                          {item.EXPENSE_NAME}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="AccountStock">
              <h6>Account Stock Properties</h6>
              <div className="stockdropdown">
                <p>Stock Input Account</p>
                <select
                  onChange={(e) => setStockIn(e.target.value)}
                  value={stockIn}
                >
                   <option value="">Select any one</option>
                  <option value="100002 Bank">100002 Bank</option>
                  <option value="100003 Security Deposit">
                    100003 Security Deposit
                  </option>
                  <option value="100004 Un-Realized Collection">
                    100004 Un-Realized Collection
                  </option>
                  <option value="100010 MAIN CASH RYD01">
                    100010 MAIN CASH RYD01
                  </option>
                  <option value="100101 STORE CASH COLLECTION">
                    100101 STORE CASH COLLECTION
                  </option>
                  <option value="100201 STORE CARD COLLECTION">
                    100201 STORE CARD COLLECTION
                  </option>
                </select>
              </div>
              <div className="stockdropdown">
                <p>Stock Output Account</p>
                <select
                  value={stockOut}
                  onChange={(e) => setStockOut(e.target.value)}
                >
                   <option value="">Select any one</option>
                  <option value="100002 Bank">100002 Bank</option>
                  <option value="100003 Security Deposit">
                    100003 Security Deposit
                  </option>
                  <option value="100004 Un-Realized Collection">
                    100004 Un-Realized Collection
                  </option>
                  <option value="100010 MAIN CASH RYD01">
                    100010 MAIN CASH RYD01
                  </option>
                  <option value="100101 STORE CASH COLLECTION">
                    100101 STORE CASH COLLECTION
                  </option>
                  <option value="100201 STORE CARD COLLECTION">
                    100201 STORE CARD COLLECTION
                  </option>
                </select>
              </div>
              <div className="stockdropdown">
                <p>Stock Valuation Account</p>
                <select
                  value={stockVal}
                  onChange={(e) => setStockVal(e.target.value)}
                >
                   <option value="">Select any one</option>
                  <option value="100002 Bank">100002 Bank</option>
                  <option value="100003 Security Deposit">
                    100003 Security Deposit
                  </option>
                  <option value="100004 Un-Realized Collection">
                    100004 Un-Realized Collection
                  </option>
                  <option value="100010 MAIN CASH RYD01">
                    100010 MAIN CASH RYD01
                  </option>
                  <option value="100101 STORE CASH COLLECTION">
                    100101 STORE CASH COLLECTION
                  </option>
                  <option value="100201 STORE CARD COLLECTION">
                    100201 STORE CARD COLLECTION
                  </option>
                </select>
              </div>
              <div className="stockdropdown">
                <p>Stock Journal</p>
                <select
                  value={stockJournal}
                  onChange={(e) => setStockJournal(e.target.value)}
                >
                   <option value="">Select any one</option>
                  <option value="Customer Invoices (SAR)">
                    Customer Invoices (SAR)
                  </option>
                  <option value="Vendor Bills (SAR)">Vendor Bills (SAR)</option>
                  <option value="Miscellaneous Operations (SAR)">
                    Miscellaneous Operations (SAR)
                  </option>
                  <option value="Inventory Valuation (SAR)">
                    Inventory Valuation (SAR)
                  </option>
                  <option value="Exchange Difference (SAR)">
                    Exchange Difference (SAR)
                  </option>
                  <option value="Bank (SAR)">Bank (SAR)</option>
                  <option value="POS CARD BANK (SAR)">
                    POS CARD BANK (SAR)
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="AddProductdetailscontent3">
            <div className="Logistics">
              <h6>Logistics</h6>
              <div className="logistics_cl">
                <p>Force Removal Strategy</p>
                <select
                  value={removalStrategy}
                  onChange={(e) => setRemovalStrategy(e.target.value)}
                >
                   <option value="">Select any one</option>
                  <option value="First in first out (FIFO)">
                    First in first out (FIFO)
                  </option>
                  <option value="Last in First Out (LIFO)">
                    Last in First Out (LIFO)
                  </option>
                </select>
              </div>
            </div>
            <div className="InventoryValuation">
              <h6>Inventory Valuation</h6>
              <div className="force">
                <p>Costing Method</p>
                <select
                  value={costing}
                  onChange={(e) => setCosting(e.target.value)}
                >
                   <option value="">Select any one</option>
                  <option value="Standard Price">Standard Price</option>
                  <option value="First in first out (FIFO)">
                    First in first out (FIFO)
                  </option>
                  <option value="Average Cost(AVCO)">Average Cost(AVCO)</option>
                </select>
              </div>
              <div className="force">
                <p>Inventory Valuation</p>
                <select
                  value={valuation}
                  onChange={(e) => setValuation(e.target.value)}
                >
                   <option value="">Select any one</option>
                  <option value="Manual">Manual</option>
                  <option value="Automated">Automated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
      <DiffrentAccount
        showAccount={showAccount}
        setShowAccount={setShowAccount}
      />
    </>
  );
};

export default AddProductCategories;
