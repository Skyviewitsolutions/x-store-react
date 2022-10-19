import React from 'react'
import './PriceConfig.css';

const PriceConfig = () => {
  return (
    <div>
        <div className="priceConfigDetail">
            <div className="availbility">
                <h3>Availability</h3>
                <div className="contry">
                <p>Country Groups</p>
                <select>
                    <option></option>
                    <option>Europe</option>
                    <option>South America</option>
                </select>
                </div>
                
            </div>
            <div className="discounts">
                <h3>Discounts</h3>
                 <div className="dispolicy">
                    <div className="distext">
                        <p>Discount Policy</p>
                    </div>
                    <div className="disradio">
                        <div className="discount">
                            <input type="radio" name="discount"/>
                            <span>Discount included in the price</span>
                        </div>
                        <div className="discount">
                            <input type="radio" name="discount"/>
                            <span>Show public price & discount to the customer</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default PriceConfig