import axios from 'axios'
import React,{useState}from 'react'
import { useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { endpoints } from '../../../../services/endpoints'
import SalesNavbar from '../../SalesNavbar/SalesNavbar'
import './AddPricelists.css'
import PriceConfig from './PriceConfig/PriceConfig'
import PriceRules from './PriceRules/PriceRules'

const AddPricelists = () => {

const CurrencyUrl = endpoints.Currency.allCurrency;
const [currency , setCurrency] = useState([]);
const [isEdit , setIsEdit] = useState(false);
  const [events, setEvents] = useState("PriceRules");

useEffect(() => {
axios.post(CurrencyUrl)
.then((res) => {
    if(res.data.status === true){
        setCurrency(res.data.data);
    }
    else if(res.data.status === false){
        toast(res.data.message,{type:"message"});
    }
})
.catch((err) => {
    console.log(err,"Currency Error");
})
},[])


  return (
    <div>
        <SalesNavbar
        showBelowMenu={true}
        title="PriceLists"
        showCanelBtn={true}
      />
        <div className="PricelistMainCon">
            <div className="PricelistCon">
                <div className="pricelistName">
                    <p>Name</p>
                    <input type="text" placeholder='e.g. USD Retailers'/>
                </div>
                <div className="Pricecurrency">
                    <p>Currency</p>
                   <select>
                    <option></option>
                    {currency.map((item,index) => {
                      return(
                        <>
                        <option value={item.CURRENCY_UNIT} key={index}>{item.CURRENCY_UNIT}</option>
                        </>
                      )
                    })}
                   </select>
                </div>
            </div>
            <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item
             className={
              events === "PriceRules"
                ? "navLinkActive"
                : "navLinkDeactive"
            }
              onClick={() => setEvents("PriceRules")}
            >
              <Nav.Link  className={
                  events === "PriceRules"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }>Price Rules</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className={
                events === "PriceConfig"
                  ? "navLinkActive"
                  : "navLinkDeactive"
              }
              onClick={() => setEvents("PriceConfig")}
            >
              <Nav.Link eventKey="link-1" className={
                  events === "PriceConfig"
                    ? "navLinkActive"
                    : "navLinkDeactive"
                }>Configuration</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="GeneralInformation">
          {events === "PriceRules" && isEdit === false && (
            <PriceRules/>
          )}
          {events === "PriceConfig" && isEdit === false && (
            <PriceConfig/>
          )}
        </div>
        </div>
    </div>
  )
}

export default AddPricelists