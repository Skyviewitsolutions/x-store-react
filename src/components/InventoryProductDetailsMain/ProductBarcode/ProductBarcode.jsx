import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from "../../../services/endpoints";
import CustomTable from "../../CustomTable/CustomTable";
import { MdArrowDropDown, MdDelete } from "react-icons/md";
import Barcode from "../../Model/BarcodeModal/Barcode";
import "./ProductBarcode.css";
import { FiEdit } from "react-icons/fi";
import ProductTable from "../../ProductTable/ProductTable";


const ProductBarcode = (props) => {

  const navigate = useNavigate();
  const { productId,isEdit} = props;
  const [modalShow, setModalShow] = useState(false);
  const userAuth = localStorage.getItem("userAuth");
  const getAuthtoken = localStorage.getItem("authtoken");
  const [proBarcodeAll, setProBarcodeAll] = useState([]);
  const [singleProBarcode, setSingleProBarcode] = useState([]);
  const [allBarcode, setAllBarcode] = useState([]);
  const allProductBarcodeUrl = endpoints.products.ProductBarcodeAll;
  const singleProductBarcodeUrl = endpoints.products.ProductBarcodeSingle;

   // creating useState for the model;
   const [barcode, setBarcode] = useState("");
   const [barcodeDes, setBarcodeDes] = useState("");
   const [uom, setUom] = useState("");
   const [selectedBarcodeId , setSelectedBarcodeId] = useState("");
   const [updateBarcode , setUpdateBarcode] = useState(false)


  const getProBarcode = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allProductBarcodeUrl, formData)
      .then((res) => {
        console.log(res, "all here");
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.filter((itm ,ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllBarcode(val);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
        toast("something went wrong", { type: "error" });
      });
  };

  const getSingleBarcode = () => {

    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    formData.append("Product_ID", productId);
    axios
      .post(singleProductBarcodeUrl, formData)
      .then((res) => {
      
        if (res.data.status === true) {
          var val = res.data.data;
          val = val.filter((itm ,ind) => {
            return itm.DELETE_STATUS != "X";
          });
          setAllBarcode(val);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          }
        }
      })
      .catch((err) => {

        toast("something went wrong", { type: "error" });
      });
  };

  useEffect(() => {
    if (productId) {
      getSingleBarcode();
    } else {
      getProBarcode();
    }
  }, []);

  const deleteBarcodeUrl = endpoints.products.ProductBarcodeDelete

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID" , data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(deleteBarcodeUrl,formData)
    .then((res) => {
      if(res.data.status === true)
      {
        getProBarcode();
        toast("Product Barcode Deleted Successfully!" ,{type:"success"});
      }
      else if(res.data.message === false)
      {
        toast(res.data.message,{type:"error"});
      }
    })
    .catch((err) => {
       console.log(err,"error");
    })
  }


  // ---------------Update Bracode------------------

  const barcodeUpdateUrl = endpoints.products.ProductBarcodeUpdate

  const handleUpdate = (id) => {
    setModalShow(true);

    var seletedProductBarcode = allBarcode.filter((itm,ind) => {
      return itm.ID == id
    })  
    setSelectedBarcodeId(id)
    console.log(seletedProductBarcode,"barcode id")

    seletedProductBarcode = seletedProductBarcode[0];
    setBarcode(seletedProductBarcode.BARCODE);
    setBarcodeDes(seletedProductBarcode.BARCODE_DESCRIPTION);
    setUom(seletedProductBarcode.UOM_ID);
    setUpdateBarcode(true)
  }

  const updateProductBarcode = () => {
    const formData = new FormData();
     formData.append("ID" ,selectedBarcodeId);
      formData.append("User_Authorization", getAuthtoken);
      formData.append("User_AuthKey", userAuth);
      formData.append("Barcode", barcode);
      formData.append("Barcode_Discription", barcodeDes);
      formData.append("UOM_ID", uom);
      axios
      .post(barcodeUpdateUrl, formData)
      .then((res) => {
        if (res.data.status) {
          toast("Product Barcode updated successfully", { type: "success" });
          // window.location.reload()
          setModalShow(false);
          getProBarcode();
          getSingleBarcode()
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "warning" });
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
    
      
  }

  const column = [
    { label: "Barcode", name: "BARCODE" },
    { label: "Barcode Description", name: "BARCODE_DESCRIPTION" },
    { label: "UOM", name: "UNIT_OF_MEASUREMENT" },
    {
      label: "Action",
      name: "ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
                  onClick={() => deleteItem(value)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          );
        },
      },
    },
  ];
  const column2 = [
    { label: "Barcode", name: "BARCODE" },
    { label: "Barcode Description", name: "BARCODE_DESCRIPTION" },
    { label: "UOM", name: "UNIT_OF_MEASUREMENT" },
    {
      label: "Action",
      name: "ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f4e4d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  size={23}
                  color="4f4e4d"
                  onClick={() => deleteItem(value)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          );
        },
      },
    },
  ];

  return (
    <div>
      <div className="barcode_container">
        {productId != "" ? (
          <ProductTable data={allBarcode} column={column} />
        ) : (
          <ProductTable data={allBarcode} column={column2} />
        )}
      {productId == undefined &&<button className="varients_btns" onClick={() => setModalShow(true)}>
          Add Line
        </button>
}
        <Barcode
          modalShow={modalShow}
          setModalShow={setModalShow}
          proBarcodeAll={proBarcodeAll}
          setProBarcodeAll={setProBarcodeAll}
          getSingleBarcode={getSingleBarcode}
          getProBarcode={getProBarcode}
          {...props}
          barcode={barcode}
          setBarcode={setBarcode}
          uom={uom}
          setUom={setUom}
          barcodeDes={barcodeDes}
          setBarcodeDes={setBarcodeDes}
          updateProductBarcode={updateProductBarcode}
          updateBarcode={updateBarcode}
          setUpdateBarcode={setUpdateBarcode}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductBarcode;
