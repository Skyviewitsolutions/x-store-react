import React from "react";
import { useState } from "react";

const EmpHrsetings = (props) => {

 
  const {relatedUser , setRelatedUser ,regNo ,setRegNo,pinCode,setPinCode,badgeId,setBadgeId,inventoryCrud,inventoryRead,accountingRead,accountingCrud,employeeRead,employeeCrud,purchaseRead,purchaseCrud,salesRead,salesCrud,contactCrud,contactRead,expenseCrud,expenseRead,setInventoryCrud,setInventoryRead,setAccountingCrud,setAccountingRead,setPurchaseCrud,setPurchaseRead,setSalesCrud,setSalesRead,setEmployeeCrud,setEmployeeRead,setExpenseCrud,setExpenseRead,setContactCrud,setContactRead,inventory,setInventory,accounting,setAccounting,sales,setSales,purchase,setPurchase,expense,setExpense,contact,setContact,employee,setEmployee , setAccessModule ,accessModule} = props;

  const handleChecked = (dta) => {
    //  accessModule.includes("Inventory")
    if (accessModule.includes(dta)) {
      const filterModule = accessModule.filter((itm, ind) => {
        return itm != dta;
      });
      setAccessModule(filterModule);
      if(dta == "Inventory"){
        setInventory('100202201')
      }else if(dta == "Accounting"){
        setAccounting('100202202')
      }else if(dta == 'Sales'){
        setSales('100202203')
      }else if(dta == 'Purchase'){
        setPurchase('100202204')
      }else if(dta == 'Employee'){
        setEmployee('100202205')
      }else if(dta == 'Expenses'){
        setExpense('100202206')
      }else if(dta == 'Contact'){
        setContact('100202207')
      }
    
    } else {
      setAccessModule((itm) => {
        return [...itm, dta];
      });
      if(dta == "Inventory"){
        setInventory('100202201')
      }else if(dta == "Accounting"){
        setAccounting('100202202')
      }else if(dta == 'Sales'){
        setSales('100202203')
      }else if(dta == 'Purchase'){
        setPurchase('100202204')
      }else if(dta == 'Employee'){
        setEmployee('100202205')
      }else if(dta == 'Expenses'){
        setExpense('100202206')
      }else if(dta == 'Contact'){
        setContact('100202207')
      }
    }
  };
  console.log( contact, "data");
  return (
    <div>
      <div className="hrsettings_container">
        <div className="hrSettings_details">
          <div className="hr_status">
            <h3>Status</h3>
            <div className="hr_user">
              <p>Related User</p>
              <select value={relatedUser} onChange={(e) => setRelatedUser(e.target.value)}>
                <option>select any one</option>
                <option value="Account 02">Account 02</option>
                <option value="Accountant-Ryd">Accountant-Ryd</option>
                <option value="CRUH 01">CRUH 01</option>
                <option value="CRUH 02">CRUH 02</option>
                <option value="CRUH 03">CRUH 03</option>
              </select>
            </div>
            <div className="hr_user">
              <p>Registration Number of the Employee</p>
              <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)}/>
            </div>
          </div>
          <div className="hr_attendance">
            <h3>Attendance</h3>
            <div className="hr_user">
              <p>Pin Code</p>
              <input type="number" value={pinCode} onChange={(e) => setPinCode(e.target.value)}/>
            </div>
            <div className="hr_user">
              <p>Badge ID</p>
              <input type="text" value={badgeId} onChange={(e) => setBadgeId(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="permission_main">
          <div className="permission">
            <p>Access</p>
            <div>
              <div className="d-flex">
                <input
                  type="checkbox"
                  onChange={() => handleChecked("Inventory")}
                />
                <label>Inventory</label>
                {accessModule.includes("Inventory") && (
                  <div className="d-flex">
                    <div className="crud_perf">
                      <input type="radio" name="inventory" checked={inventoryRead == true} onChange={() => {setInventoryRead(!inventoryRead) 
                        setInventoryCrud(inventoryRead) }} />
                      <label>Read Only</label>
                    </div>
                    <div className="crud_perf">
                      <input type="radio" name="inventory" checked={inventoryCrud == true} onChange={() => {
                        setInventoryCrud(!inventoryCrud)
                        setInventoryRead(inventoryCrud)
                      }} />
                      <label>Write</label>
                    </div>
                  </div>
                )}
              </div>
              <div  className="d-flex">
                <input
                  type="checkbox"
                  onChange={() => handleChecked("Accounting")}
                />
                <label>Accounting</label>
                {accessModule.includes("Accounting") && (
                  <div className="d-flex">
                    <div className="crud_perf">
                      <input type="radio" name="accounting" checked={accountingRead == true} onChange={() => {setAccountingRead(!accountingRead) 
                        setAccountingCrud(accountingRead) }}/>
                      <label>Read Only</label>
                    </div>
                    <div className="crud_perf">
                      <input type="radio" name="accounting" checked={accountingCrud == true} onChange={() => {
                        setAccountingCrud(!accountingCrud)
                        setAccountingRead(accountingCrud)
                      }}/>
                      <label>Write</label>
                    </div>
                  </div>
                )}
              </div>
              <div  className="d-flex">
                <input
                  type="checkbox"
                  onChange={() => handleChecked("Purchase")}
                />
                <label>Purchase</label>
                {accessModule.includes("Purchase") && (
                  <div className="d-flex">
                    <div className="crud_perf">
                      <input type="radio" name="purchase" onChange={() => {{
                        setPurchaseRead(!purchaseRead)
                        setPurchaseCrud(purchaseRead)
                      }}} checked={purchaseRead == true}/>
                      <label>Read Only</label>
                    </div>
                    <div className="crud_perf">
                      <input type="radio" name="purchase" onChange={() => {
                        setPurchaseCrud(!purchaseCrud)
                        setPurchaseRead(purchaseCrud)
                      }} checked={purchaseCrud == true}/>
                      <label>Write</label>
                    </div>
                  </div>
                )}
              </div>
              <div  className="d-flex">
                <input
                  type="checkbox"
                  onChange={() => handleChecked("Sales")}
                />
                <label>Sales</label>
                {accessModule.includes("Sales") && (
                  <div className="d-flex">
                    <div className="crud_perf">
                      <input type="radio" name="sales"  checked={salesRead == true} onChange={() => {
                        setSalesRead(!salesRead)
                        setSalesCrud(salesRead)
                      }}/>
                      <label>Read Only</label>
                    </div>
                    <div className="crud_perf">
                      <input type="radio" name="sales" checked={salesCrud == true}  onChange={() => {
                        setSalesCrud(!salesCrud)
                        setSalesRead(salesCrud)
                      }}/>
                      <label>Write</label>
                    </div>
                  </div>
                )}
              </div>
              <div  className="d-flex">
                <input
                  type="checkbox"
                  onChange={() => handleChecked("Employee")}
                />
                <label>Employee</label>
                {accessModule.includes("Employee") && (
                  <div className="d-flex">
                    <div className="crud_perf">
                      <input type="radio" name="employee" onChange={() => {
                        setEmployeeRead(!employeeRead)
                        setEmployeeCrud(employeeRead)
                      }} checked={employeeRead == true}/>
                      <label>Read Only</label>
                    </div>
                    <div className="crud_perf">
                      <input type="radio" name="employee" onChange={() => {setEmployeeCrud(!employeeCrud)
                      setEmployeeRead(employeeCrud)
                      }} checked={employeeCrud == true}/>
                      <label>Write</label>
                    </div>
                  </div>
                )}
              </div>
              <div  className="d-flex">
                <input
                  type="checkbox"
                  onChange={() => handleChecked("Expenses")}
                />
                <label>Expenses</label>
                {accessModule.includes("Expenses") && (
                  <div className="d-flex">
                    <div className="crud_perf">
                      <input type="radio" name="expense" onChange={() => {
                        setExpenseRead(!expenseRead)
                        setExpenseCrud(expenseRead)
                      }} checked={expenseRead == true}/>
                      <label>Read Only</label>
                    </div>
                    <div className="crud_perf">
                      <input type="radio" name="expense" onChange={() => {
                        setExpenseCrud(!expenseCrud)
                        setExpenseRead(expenseCrud)
                      }} checked={expenseCrud == true}/>
                      <label>Write</label>
                    </div>
                  </div>
                )}
              </div>
              <div className="d-flex">
                <input
                  type="checkbox"
                  onChange={() => handleChecked("Contact")}
                  checked={contact == '100202207'}
                />
                <label>Contact</label>
                {accessModule.includes("Contact") && (
                  <div className="d-flex">
                    <div className="crud_perf">
                      <input type="radio" name="contact" onChange={() => {
                        setContactRead(!contactRead)
                        setContactCrud(contactRead)
                      }}
                      checked={contactRead == true} />
                      <label>Read Only</label>
                    </div>
                    <div className="crud_perf">
                      <input type="radio" name="contact" onChange={() => {
                        setContactCrud(!contactCrud)
                        setContactRead(contactCrud)
                      }} checked={contactCrud == true}/>
                      <label>Write</label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EmpHrsetings;
