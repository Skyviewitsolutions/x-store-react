import React from "react";
import "./Purchase.css";
import { MdArrowDropDown } from "react-icons/md";
import { borderBottom } from "@mui/system";
const Purchase = () => {
  return (
    <div className="VariantsContainer">
      <table class="table">
        <thead style={{ color: "#666666" }}>
          <tr>
            <th scope="col">Vendor</th>
            <th scope="col">Subtracted</th>
            <th scope="col">Agreement</th>
            <th scope="col">Currency</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Of Measure</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody className="table_body">
          <tr>
            <td>Baja Industrial Company</td>
            <td></td>
            <td></td>
            <td>Sar</td>
            <td>0.00</td>
            <td>unit</td>
            <td>9.800</td>
          </tr>
        </tbody>
      </table>
      <div className="content_purchase">
        <div className="content_first">
          <h1>Reordering</h1>
          <div className="reordering_purchase">
            <p>Procurement</p>
            <span>Create a draft purchase order</span>
          </div>
          <div className="reordering_purchase">
            <p>Purchase Description</p>
            <span>Create a draft purchase order</span>
          </div>
        </div>
        <div className="content_second">
          <h1>Vendor Bills</h1>
          <div className="reordering_purchase">
            <p>Vendor Taxes</p>
            <span>Purchase Vat 15%</span>
          </div>
          <div className="reordering_purchase">
            <p>Control Policy</p>
            <span>On received quantities</span>
          </div>
          <div className="reordering_purchase">
            <p>Warning when Purchasing this Product</p>
            <span>No message</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
