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

  const AddProductCateUrl = endpoints.productCategory.addProductCategory;
  const incomeUrl = endpoints.products.incomeAcoount;
  const pricediffUrl = endpoints.products.priceDifference;
  const expenseUrl = endpoints.products.expenseAccount;
  const [pricedif, setPriceDef] = useState([]);
  const [income, setIncome] = useState([]);
  const [removalStrategy, setRemovalStrategy] = useState("");
  const [expense, setExpense] = useState([]);
  const [parentCate, setParentCate] = useState("");
  const [incomeAcc, setIncomeAcc] = useState("");
  const [expenseAcc, setExpenseAcc] = useState("");
  const [productCateCode, setProductCateCode] = useState("");
  const [costing, setCosting] = useState("");
  const [valuation, setValuation] = useState("");
  const [name, setName] = useState("");

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.post(incomeUrl).then((res) => {
      if (res.data.status === true) {
        setIncome(res.data.data);
      } else if (res.data.status === false) {
        toast(res.data.message, { type: "error" });
      }
    });
  }, []);

  useEffect(() => {
    axios.post(expenseUrl).then((res) => {
      if (res.data.status === true) {
        setExpense(res.data.data);
      } else if (res.data.status === false) {
        toast(res.data.message, { type: "error" });
      }
    });
  }, []);
  useEffect(() => {
    axios.post(pricediffUrl).then((res) => {
      if (res.data.status === true) {
        setPriceDef(res.data.data);
      } else if (res.data.status === false) {
        toast(res.data.message, { type: "error" });
      }
    });
  }, []);
  const formData = new FormData();
  formData.append("name", name);
  formData.append("Parent_Category", parentCate);
  formData.append("Product_Category_Code", productCateCode);
  formData.append("Income_Account", incomeAcc);
  formData.append("Expense_Account", expenseAcc);
  formData.append("Force_RemovalStrategy", removalStrategy);
  formData.append("Costing_Method", costing);
  formData.append("Inventory_Valuation", valuation);

  const save = () => {
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
    } else if (removalStrategy === "") {
      toast("Force Removal Strategy Is Required!", { type: "warning" });
    } else if (costing === "") {
      toast("Costing Method Is Required!", { type: "warning" });
    } else if (valuation === "") {
      toast("Inventory Valuation Is Required!", { type: "warning" });
    } else {
      axios
        .post(AddProductCateUrl, formData)
        .then((res) => {
          console.log(res, "responseresult");
          if (res.data.status == true) {
            toast("Product Category Added Successfully!", { type: "success" });
          } else if (res.data.status == false) {
            toast(res.data.message, { type: "error" });
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
    }
  }, [selectedData]);

  const productcateUpadteUrl = endpoints.productCategory.updateProductCate;

  const updateData = () => {
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
    } else if (removalStrategy === "") {
      toast("Force Removal Strategy Is Required!", { type: "warning" });
    } else if (costing === "") {
      toast("Costing Method Is Required!", { type: "warning" });
    } else if (valuation === "") {
      toast("Inventory Valuation Is Required!", { type: "warning" });
    } else {
      const formData = new FormData();
      formData.append("id", selectedData.CATEGORY_ID);
      formData.append("Parent_Category", parentCate);
      formData.append("name", name);
      formData.append("Product_Category_Code", productCateCode);
      formData.append("Income_Account", incomeAcc);
      formData.append("Expense_Account", expenseAcc);
      formData.append("Force_RemovalStrategy", removalStrategy);
      formData.append("Costing_Method", costing);
      formData.append("Inventory_Valuation", valuation);

      axios
        .post(productcateUpadteUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            toast("ProductCategory Updated Successfully!", { type: "success" });
          } else if (res.data.status === false) {
            toast(res.data.message, { type: "error" });
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
      />
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
                  <option value="Assets">Assets</option>
                  <option value="Assets / Computers and printers">
                    Assets / Computers and printers
                  </option>
                  <option value="Assets / Extinguishing programs, permits and licenses">
                    Assets / Extinguishing programs, permits and licenses
                  </option>
                  <option value="Assets / Furniture">
                    Assets / Furniture{" "}
                  </option>
                  <option value="Assets / Houses">Assets / Houses</option>
                  <option value="Assets / lab equipment">
                    Assets / lab equipment
                  </option>
                  <option value="Assets / Prefabricated plastic and concrete barriers">
                    Assets / Prefabricated plastic and concrete barriers
                  </option>
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
                <select>
                  <option></option>
                  <option>100002 Bank</option>
                  <option>100003 Security Deposit</option>
                  <option>100004 Un-Realized Collection</option>
                  <option>100010 MAIN CASH RYD01</option>
                  <option>100101 STORE CASH COLLECTION</option>
                  <option>100201 STORE CARD COLLECTION</option>
                </select>
              </div>
              <div className="stockdropdown">
                <p>Stock Output Account</p>
                <select>
                  <option></option>
                  <option>100002 Bank</option>
                  <option>100003 Security Deposit</option>
                  <option>100004 Un-Realized Collection</option>
                  <option>100010 MAIN CASH RYD01</option>
                  <option>100101 STORE CASH COLLECTION</option>
                  <option>100201 STORE CARD COLLECTION</option>
                </select>
              </div>
              <div className="stockdropdown">
                <p>Stock Valuation Account</p>
                <select>
                  <option></option>
                  <option>100002 Bank</option>
                  <option>100003 Security Deposit</option>
                  <option>100004 Un-Realized Collection</option>
                  <option>100010 MAIN CASH RYD01</option>
                  <option>100101 STORE CASH COLLECTION</option>
                  <option>100201 STORE CARD COLLECTION</option>
                </select>
              </div>
              <div className="stockdropdown">
                <p>Stock Journal</p>
                <select>
                  <option></option>
                  <option>Customer Invoices (SAR)</option>
                  <option>Vendor Bills (SAR)</option>
                  <option>Miscellaneous Operations (SAR)</option>
                  <option>Inventory Valuation (SAR)</option>
                  <option>Exchange Difference (SAR)</option>
                  <option>Bank (SAR)</option>
                  <option>POS CARD BANK (SAR)</option>
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
    </>
  );
};

export default AddProductCategories;