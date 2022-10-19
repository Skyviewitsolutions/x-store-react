import React from 'react'
import './PriceRules.css';

const PriceRules = () => {

  return (
    <div>
        <div className="priceRulesCon">
            <h3>All Products</h3>
            <div className="PriceRulesdetail">
                <div className="detail1">
                    <div className="apply">
                        <div className="applytext">
                            <p>Apply On</p>
                        </div>
                        <div className="applyradio">
                            <div className="pricepro">
                            <input type="radio" name="apply"/>
                            <span>All Products</span>
                            </div>
                            <div className="pricepro">
                            <input type="radio" name="apply"/>
                            <span>Product Category</span>
                            </div>
                            <div className="pricepro">
                            <input type="radio" name="apply"/>
                            <span>Product</span>
                            </div>
                            <div className="pricepro">
                            <input type="radio" name="apply"/>
                            <span>Product Variant</span>
                             </div>
                            
                        </div>
                    </div>
                </div>
                <div className="detail2">
                    <div className="textin">
                        <p>Min. Quantity</p>
                        <input type="text" placeholder='0'/>
                    </div>
                    <div className="textin">
                        <p>Start Date</p>
                        <input type="Date" />
                    </div>
                    <div className="textin">
                        <p>End Date</p>
                        <input type="Date" />
                    </div>
                </div>
            </div>
            <div className="priceComp">
                <div className="computePrice">
                    <h3>Price Computation</h3>
                <div className="apply">
                        <div className="applytext">
                            <p>Compute Price</p>
                        </div>
                        <div className="applyradio">
                            <div className="pricepro">
                            <input type="radio" name="apply"/>
                            <span>Fixed Price</span>
                            </div>
                            <div className="pricepro">
                            <input type="radio" name="apply"/>
                            <span>Percentage (discount)</span>
                            </div>
                            <div className="pricepro">
                            <input type="radio" name="apply"/>
                            <span>Formula</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixedPrice">
                <div className="textin">
                        <p>Fixed Price</p>
                        <input type="text" placeholder='0.00'/>
                    </div>
                </div>
            </div>
            <div className="pricetext">
                <p>The computed price is expressed in the default Unit of Measure of the product.</p>
            </div>
        </div>
    </div>
  )
}

export default PriceRules