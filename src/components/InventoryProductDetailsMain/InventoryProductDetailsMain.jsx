import React from 'react'
import './InventoryProductDetailsMain.css';
import { FaCubes } from 'react-icons/fa';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaRandom } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import GeneralInformation from './GeneralInformation';
import Accounting from './Accounting';
import ProductDetailsInventory from './ProductDetailsInventory';
import Variants from './Variants';
import Purchase from './Purchase';
const InventoryProductDetailsMain = () => {
  return (
    <div className='MainContainer'>
      <div className="Container">
        <div className="ContainerHeader">
          <div className="div1">

          </div>
          <div className="div2">
            <FaCubes size="30px" style={{ color: "#848484", marginTop: "5px" }} />
            <div className="text">
              <p>0.000 Units</p>
              <span>On Hand</span>
            </div>
          </div>
          <div className="div2">
            <FaCubes size="30px" style={{ color: "#848484", marginTop: "5px" }} />
            <div className="text">
              <p>0.000 Units</p>
              <span>Forecasted</span>
            </div>
          </div>
          <div className="div2">
            <TbArrowsLeftRight size="25px" style={{ color: "#848484", marginTop: "5px", }} />
            <div className="text2">
              <p>Traceability</p>
            </div>  
          </div>
          <div className="div2">
            <HiOutlineRefresh size="25px" style={{ color: "#848484", marginTop: "5px", }} />
            <div className="text">
              <p>0</p>
              <span>Reordering Rules</span>
            </div>
          </div>
          <div className="div2">
            <FaCogs size="25px" style={{ color: "#848484", marginTop: "5px", }} />
            <div className="text2">
              <p>Routes</p>
            </div>
          </div>
          <div className="div2">
            <FaRandom size="25px" style={{ color: "#848484", marginTop: "5px", }} />
            <div className="text2">
              <p>Puteway Rules</p>
            </div>
          </div>
        </div>
        <div className="detailsbox">
          <div className="detailsheading">
            <p>001122335215-HYD</p>
            <div className="detailsinput">
              <div>
              <input type="checkbox" />
              <label>Can be Sold</label>
              </div>
              <div>
              <input type="checkbox" />
              <label>Can be Purchased</label>
              </div>
              <div>
              <input type="checkbox" />
              <label>Can be Expensed</label>
              </div>
              <div>
              <input type="checkbox" />
              <label>Can be Deduction</label>
              </div>
            </div>
          </div>

        </div>
        <div className="detailsbtn">
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item className='detailslink'> 
        <Nav.Link href="">General Information</Nav.Link>
      </Nav.Item>
      <Nav.Item className='detailslink'>
        <Nav.Link eventKey="link-1">Variants</Nav.Link>
      </Nav.Item>
      <Nav.Item className='detailslink'>
        <Nav.Link eventKey="link-2">
          Purchase
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='detailslink'>
        <Nav.Link eventKey="link-3">
          Inventory
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='detailslink'>
        <Nav.Link eventKey="link-4" >
          Accounting
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
          <div className="GeneralInformation">
            {/* <GeneralInformation /> */}
            {/* <Accounting /> */}
            {/* <ProductDetailsInventory /> */}
            {/* <Variants /> */}
            <Purchase />
          </div>
      </div>
    </div>
  )
}

export default InventoryProductDetailsMain