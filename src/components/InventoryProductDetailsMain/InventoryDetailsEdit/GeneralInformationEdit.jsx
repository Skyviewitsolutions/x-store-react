import React, { useEffect, useState } from "react";
import "./GeneralInformationEdit.css";
import { FaArrowRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

const GeneralInformationEdit = (props) => {
  
  const [proCate, setProCate] = useState([]);
  const [uoms , setUoms] = useState([]);
  const [purchase , setPurchase] = useState([]);
  const [proTypes , setProductTypes] = useState([]);

  const productCategoryurl =
    "https://xstore.skyviewads.com/ProductsXM/DisplayAllProductCategory";
   
    const uomsurl = "https://xstore.skyviewads.com/Units/GetAllUOM";

    const unitsurl = "https://xstore.skyviewads.com/ProductsXM/ProductsUnitsAll";
    const protypeurl = "https://xstore.skyviewads.com/ProductsXM/GetAllProductType";
   
  useEffect(() => {
    axios
      .post(productCategoryurl)
      .then((res) => {
        console.log(res, "responsedddd");
        if (res.data.status == true) {
          setProCate(res.data.data);
        } else if (res.data.status == false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  useEffect(() => {
    axios.post(uomsurl)
    .then((res) => {
      
      if(res.data.status == true)
      {
        setUoms(res.data.data);
      }
      else if(res.data.status ==  false)
      {
        alert(res.data.message)
      }
    })
    .catch((err) =>{
      console.log(err,"error");
    })
  },[])
  useEffect(() => {
  axios.get(unitsurl)
  .then((res) => {
    console.log(res,'result');
    if(res.data.status == true)
    {
      setPurchase(res.data.data);
    }
    else if(res.data.status == false)
    {
      alert(res.data.message);
    }
  })
  .catch((err) => {
    console.log(err,'this is error')
  })
  },[])
  useEffect(() => {
    axios.post(protypeurl)
    .then((res) => {
      console.log(res,"this is product")
      if(res.data.status == true)
      {
        setProductTypes(res.data.data);
      }
      else if(res.data.status == false)
      {
        alert(res.data.message)
      }
    })
    .catch((err) => {
      console.log(err,'error')
    })
  },[])
  const {
    productType,
    setProductType,
    productCategory,
    setProductCategory,
    interRef,
    setInterRef,
    units,
    setUnits,
    salesPrice,
    setSalesPrice,
    customerTax,
    setCustomerTax,
    cost,
    setCost,
    description,
    setDescription,
  } = props;

  return (
    <div>
      <div className="GeneralInformationEditContainer">
        <div className="Editpart1">
          <div className="Editfirstcontent">
            <p>Product Type</p>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              {proTypes.map((item,index) => {
                return(
                  <>
                 <option value="Consumable" key={index}>{item.PRODUCT_TYPE}</option>
                  </>
                )
              })}
              
              <option value="Service">Service</option>
              <option value="Storable Product">Storable Product</option>
            </select>
          </div>
          <div className="Editfirstcontent">
            
            <p> Product Category</p>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              {proCate.map((item,index)=>{
                return(
                  <>
                  <option key={index} value={item.CATEGORY_NAME}>{item.CATEGORY_NAME}</option>
                  </>
                )
              })}
              
            </select>
          </div>
          <div className="Editfirstcontent2">
            <p>Internal Reference</p>
            <input
              type="text"
              value={interRef}
              onChange={(e) => setInterRef(e.target.value)}
            />
          </div>
          <div className="Editfirstcontent2">
            <p>Barcode</p>
            <input type="text" />
          </div>
          <h5>Internal Notes</h5>
          <textarea
            placeholder="This note is only for internal purposes."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "450px", border: "none", outline: "none" }}
          />
        </div>
        <div className="Editpart2">
          <div className="Editfirstcontent3">
            <p>Sales Price</p>
            <input
              type="text"
              placeholder="1.0000 SAR"
              value={salesPrice}
              onChange={(e) => setSalesPrice(e.target.value)}
            />
            <FaArrowRight
              size="20px"
              style={{ color: "#008784", marginLeft: "10px" }}
            />
            <span>Extra Prices</span>
          </div>
          <div className="Editfirstcontent3">
            <p
              style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}
            >
              Customer Taxes
            </p>
            <input
              type="text"
              style={{
                width: "450px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid #cccc",
              }}
              value={customerTax}
              onChange={(e) => setCustomerTax(e.target.value)}
            />
          </div>
          <div className="Editfirstcontent3">
            <p>Cost</p>
            <input
              type="text"
              placeholder="0.0000 SAR per Units"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              style={{
                width: "450px",
                border: "none",
                outline: "none",
                borderBottom: "1px solid #cccc",
              }}
            />
            {/* <span style={{ color: "#008784" }}>Update Cost</span> */}
          </div>
          <div className="Editfirstcontent3">
            <p>Unit of Measure</p>
            <select value={units} onChange={(e) => setUnits(e.target.value)}>
              {
                uoms.map((item,index) => {
                  return(
                    <>
                     <option value="Barell" key={index}>{item.UNITCATEGORY}</option>
                    </>
                  )
                  } )}
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8x", marginTop: "10px" }}
            />
          </div>
          <div className="Editfirstcontent3">
            <p>Purchase Unit of</p>
            <select>
              {purchase.map((item,index) => {
                return(
                  <>
                  <option value="Barell" key={index}>{item.UNIT_NAME}</option>
                  </>
                )
              })}
            </select>
            <FaExternalLinkAlt
              size="14px"
              style={{ color: "#79757d", marginLeft: "8px", marginTop: "10px" }}
            />
          </div>
          <p style={{ color: "#6a666a", fontSize: "17px", fontWeight: "500" }}>
            Measure
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformationEdit;
