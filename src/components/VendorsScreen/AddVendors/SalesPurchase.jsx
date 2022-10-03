import React from 'react'
import './SalesPurchase.css';
const SalesPurchase = () => {
  return (
    <div>
        <div className="SalesCon">
            <div className="SalesContent1">
            <div className="Sales">
                <h3>Sales</h3>
                <div className="inputText">
                    <p>Salesperson</p>
                    <select>
                        <option></option>
                        <option>Abd Alla Mohamed Ahmed</option>
                        <option>Abdel Hamid Ali Altawaita</option>
                        <option>Abdulaziz Fangal Sultan Alotaibi</option>
                        <option>Abdul Basit Abdul Ghani</option>
                        <option>Abdulmajeed Zidan Khan</option>
                    </select>
                </div>
                <div className="inputText">
                    <p>Payment Terms</p>
                    <select>
                        <option></option>
                        <option>Immediat Payment</option>
                        <option>15 Days</option>
                        <option>21 Days</option>
                        <option>30 Days</option>
                        <option>45 Days</option>
                        <option>2 Months</option>
                    </select>
                </div>
                <div className="inputText">
                    <p>Price List</p>
                    <select>
                        <option></option>
                        <option>Public Pricelist (EUR)</option>
                    </select>
                </div>
            </div>
            <div className="Purchase">
                <h3>Purchase</h3>
                <div className="inputText">
                    <p>Payment Terms</p>
                    <select>
                        <option></option>
                        <option>Immediat Payment</option>
                        <option>15 Days</option>
                        <option>21 Days</option>
                        <option>30 Days</option>
                        <option>45 Days</option>
                        <option>2 Months</option>
                    </select>
                </div>
                <div className="inputText">
                    <p>Supplier Currency</p>
                    <select>
                        <option></option>
                        <option>SAR</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="SalesContent2">
            <div className="Fisical">
                <h3>Fiscal Information</h3>
            <div className="inputText">
                    <p>Fiscal Position</p>
                    <select>
                        <option></option>
                        <option>Immediat Payment</option>
                    </select>
                </div>
            </div>
            <div className="Misc">
                <h3>Misc</h3>
                <div className="inputText">
                    <p>Reference</p>
                  <input type="text" />
                </div>
                <div className="inputText">
                    <p>Industry</p>
                    <select>
                        <option></option>
                        <option>Administrative</option>
                        <option>Agriculture</option>
                        <option>Construction</option>
                        <option>Education</option>
                        <option>Energy supply</option>
                        <option>Entertainment</option>
                        <option>Extraterritorial</option>
                    </select>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SalesPurchase