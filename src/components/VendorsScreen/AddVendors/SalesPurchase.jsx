import React from 'react'
import './SalesPurchase.css';
const SalesPurchase = (props) => {

    const {salesPerson, setSalesPersons,salesPaymentTerms,setSalesPaymentTerms,priceList,setPriceList,purchasePaymentTerms,setPurchaseSalesPaymentTerms,supplierCurrency,setSupplierCurrency,fiscalPosition,setFiscalPosition,refrence,setRefrence,industry,setIndustry} = props
  return (
    <div>
        <div className="SalesCon">
            <div className="SalesContent1">
            <div className="Sales">
                <h3>Sales</h3>
                <div className="inputText">
                    <p>Salesperson</p>
                    <select value={salesPerson} onChange={(e) => setSalesPersons(e.target.value)}>
                        <option value="">Select Any One</option>
                        <option value="Abd Alla Mohamed Ahmed">Abd Alla Mohamed Ahmed</option>
                        <option value="Abdel Hamid Ali Altawaita">Abdel Hamid Ali Altawaita</option>
                        <option value="Abdulaziz Fangal Sultan Alotaibi">Abdulaziz Fangal Sultan Alotaibi</option>
                        <option value="Abdul Basit Abdul Ghani">Abdul Basit Abdul Ghani</option>
                        <option value="Abdulmajeed Zidan Khan">Abdulmajeed Zidan Khan</option>
                    </select>
                </div>
                <div className="inputText">
                    <p>Payment Terms</p>
                    <select value={salesPaymentTerms} onChange={(e) => setSalesPaymentTerms(e.target.value)}>
                        <option value="">Choose any one</option>
                        <option value="Immediat Payment">Immediat Payment</option>
                        <option value="15 Days">15 Days</option>
                        <option value="21 Days">21 Days</option>
                        <option value="30 Days">30 Days</option>
                        <option value="45 Days">45 Days</option>
                        <option value="2 Months">2 Months</option>
                    </select>
                </div>
                <div className="inputText">
                    <p>Price List</p>
                    <select value={priceList} onChange={(e) => setPriceList(e.target.value)}>
                        <option value="">Choose any one</option>
                        <option value="Public Pricelist (EUR)">Public Pricelist (EUR)</option>
                    </select>
                </div>
            </div>
            <div className="Purchase">
                <h3>Purchase</h3>
                <div className="inputText">
                    <p>Payment Terms</p>
                    <select value={purchasePaymentTerms} onChange={(e) => setPurchaseSalesPaymentTerms(e.target.value)} >
                    <option value="">Choose any one</option>
                        <option value="Immediat Payment">Immediate Payment</option>
                        <option value="15 Days">15 Days</option>
                        <option value="21 Days">21 Days</option>
                        <option value="30 Days">30 Days</option>
                        <option value="45 Days">45 Days</option>
                        <option value="2 Months">2 Months</option>
                    </select>
                </div>
                <div className="inputText">
                    <p>Supplier Currency</p>
                    <select value={supplierCurrency} onChange={(e) => setSupplierCurrency(e.target.value)}>
                        <option value="">Select Any One</option>
                        <option value="SAR">SAR</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="SalesContent2">
            <div className="Fisical">
                <h3>Fiscal Information</h3>
            <div className="inputText">
                    <p>Fiscal Position</p>
                    <select value={fiscalPosition} onChange={(e) => setFiscalPosition(e.target.value)}>
                        <option value="">Choose any one</option>
                        <option value="Immediat Payment">Immediate Payment</option>
                    </select>
                </div>
            </div>
            <div className="Misc">
                <h3>Misc</h3>
                <div className="inputText">
                    <p>Reference</p>
                  <input type="text" value={refrence} onChange={(e) => setRefrence(e.target.value)}/>
                </div>
                <div className="inputText">
                    <p>Industry</p>
                    <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                        <option value="">Choose any one</option>
                        <option value="Administrative">Administrative</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Construction">Construction</option>
                        <option value="Education">Education</option>
                        
                        <option value="Entertainment">Entertainment</option>
                        <option value="Extraterritorial">Extraterritorial</option>
                    </select>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SalesPurchase