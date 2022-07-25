import React from 'react'
import './AccountingEdit.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
const AccountingEdit = () => {
  return (
    <div className='AccountingContainer'>
            <div className="acc1">
              <h5>Receivables</h5>
              <div className="AccountingEditcontent">
              <p>Income Account</p>
            <select>
                <option></option>
              <option>110306001 ضريبة القيمة المضافة على المشتريات</option>
              <option>110601001 مخزون قطع غيار</option>
              <option>110601002 مخزون كفرات</option>
              <option>110601003 مخزون زيوت وشحوم</option>
              <option>110601004 مخزون ديزل </option>
              <option>110601005 مخزون مواد جاهزة</option>
              <option>110601006 وسيط مخزون</option>
              <option><span  style={{ color: "#008784" }}>Search More....</span></option>
              <option><span  style={{ color: "#008784" }}>Create and Edit...</span></option>
            </select>
            <FaExternalLinkAlt size="14px" style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }} />
          </div>
            </div>
            <div className="acc2">
            <h5>Payables</h5>
      
            <div className="AccountingEditcontent">
            <p>Expense Account</p>
            <select>
                <option></option>
              <option>110306001 ضريبة القيمة المضافة على المشتريات</option>
              <option>110601001 مخزون قطع غيار</option>
              <option>110601002 مخزون كفرات</option>
              <option>110601003 مخزون زيوت وشحوم</option>
              <option>110601004 مخزون ديزل </option>
              <option>110601005 مخزون مواد جاهزة</option>
              <option>110601006 وسيط مخزون</option>
              <option><span  style={{ color: "#008784" }}>Search More....</span></option>
              <option><span  style={{ color: "#008784" }}>Create and Edit...</span></option>
            </select>
           </div>
          
            
            <div className="AccountingEditcontent">
            <p>Asset/Expense Type</p>
            <select>
                <option></option>
              <option>110306001 ضريبة القيمة المضافة على المشتريات</option>
              <option>110601001 مخزون قطع غيار</option>
              <option>110601002 مخزون كفرات</option>
              <option>110601003 مخزون زيوت وشحوم</option>
              <option>110601004 مخزون ديزل </option>
              <option>110601005 مخزون مواد جاهزة</option>
              <option>110601006 وسيط مخزون</option>
              <option><span  style={{ color: "#008784" }}>Search More....</span></option>
              <option><span  style={{ color: "#008784" }}>Create and Edit...</span></option>
            </select>
           </div>
            <div className="AccountingEditcontent">
            <p>Price Difference</p>
            <select>
                <option></option>
              <option>110306001 ضريبة القيمة المضافة على المشتريات</option>
              <option>110601001 مخزون قطع غيار</option>
              <option>110601002 مخزون كفرات</option>
              <option>110601003 مخزون زيوت وشحوم</option>
              <option>110601004 مخزون ديزل </option>
              <option>110601005 مخزون مواد جاهزة</option>
              <option>110601006 وسيط مخزون</option>
              <option><span  style={{ color: "#008784" }}>Search More....</span></option>
              <option><span  style={{ color: "#008784" }}>Create and Edit...</span></option>
            </select>
           </div>
           
            <div className="AccountingEditcontent">
            <p>Account</p>
            <select>
                <option></option>
              <option>110306001 ضريبة القيمة المضافة على المشتريات</option>
              <option>110601001 مخزون قطع غيار</option>
              <option>110601002 مخزون كفرات</option>
              <option>110601003 مخزون زيوت وشحوم</option>
              <option>110601004 مخزون ديزل </option>
              <option>110601005 مخزون مواد جاهزة</option>
              <option>110601006 وسيط مخزون</option>
              <option><span  style={{ color: "#008784" }}>Search More....</span></option>
              <option><span  style={{ color: "#008784" }}>Create and Edit...</span></option>
            </select>
           </div>
            </div>
    </div>
  )
}

export default AccountingEdit