import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaList, FaRandom } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import DiffrentAccount from "../../../../components/Model/AddDiffrentAccount/DiffrentAccount";
import Navebar from "../../../../components/Navbar/Navbar";
import { endpoints } from "../../../../services/endpoints";

const AddParentCategory = () => {
  const navigate = useNavigate();
  const [showAccount, setShowAccount] = useState(false);
  const parentCateUrl = endpoints.parentCate.addParentCate;
  const incomeUrl = endpoints.products.incomeAcoount;
  const pricediffUrl = endpoints.products.priceDifference;
  const expenseUrl = endpoints.products.expenseAccount;
  const allParentCateurl = endpoints.parentCate.allParentCate;
  const [getParentCate, setGetParentCate] = useState([]);
  const [pricedif, setPriceDef] = useState([]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [removalStrategy, setRemovalStrategy] = useState("");
  const [parentCate, setParentCate] = useState("");
  const [incomeAcc, setIncomeAcc] = useState("");
  const [expenseAcc, setExpenseAcc] = useState("");
  const [productCateCode, setProductCateCode] = useState("");
  const [costing, setCosting] = useState("");
  const [valuation, setValuation] = useState("");
  const [name, setName] = useState("");
  const [stockIn, setStockIn] = useState("");
  const [stockOut, setStockOut] = useState("");
  const [stockVal, setStockVal] = useState("");
  const [stockJournal, setStockJournal] = useState("");

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  useEffect(() => {
    axios.post(incomeUrl).then((res) => {
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
    axios.post(expenseUrl).then((res) => {
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
    axios.post(pricediffUrl).then((res) => {
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

  const save = () => {
    
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Parent_Category", parentCate);
    formData.append("Price_Difference", pricedif);
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
    if (name === "") {
      toast("Product Category Name is Required!", { type: "warning" });
    } else if (parentCate === "") {
      toast("Product Category Is Required !", { type: "warning" });
    } else if (productCateCode === "") {
      toast("Product Category Code Is Required!", { type: "warning" });
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
        .post(parentCateUrl, formData)
        .then((res) => {
          console.log(res, "responseresult");
          if (res.data.status == true) {
            toast("Parent Category Added Successfully!", { type: "success" });
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

  return (
    <div>
      <Navebar showBelowMenu={true} title="Parent Category" save={save} />
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
                  <option value=""></option>
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
              <div className="AddProductCatecontent">
                <p>Product Category Code</p>
                <input
                  type="text"
                  value={productCateCode}
                  onChange={(e) => setProductCateCode(e.target.value)}
                />
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
                <p>Price Difference Account</p>
                <select
                  value={expenseAcc}
                  onChange={(e) => setExpenseAcc(e.target.value)}
                >
                  <option value=""></option>
                  {pricedif.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item.AMOUNT_NAME}>
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
                  <option value=""></option>
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
                  <option value=""></option>
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
                  <option value=""></option>
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
                  <option value=""></option>
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
                  <option value=""></option>
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
                  <option value=""></option>
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
              <div className="force">
                <p>Force Removal Strategy</p>
                <select
                  value={removalStrategy}
                  onChange={(e) => setRemovalStrategy(e.target.value)}
                >
                  <option value=""></option>
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
                  <option value=""></option>
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
                  <option value=""></option>
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
    </div>
  );
};

export default AddParentCategory;
