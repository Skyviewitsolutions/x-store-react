import React from 'react'
import './InventoryProductDetailsMain.css';
import { FaCubes } from 'react-icons/fa';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaRandom } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';

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
      </div>
    </div>
  )
}

export default InventoryProductDetailsMain