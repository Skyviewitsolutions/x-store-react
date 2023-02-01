import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CustomTable from "../../../components/CustomTable/CustomTable";
import DeletePopup from "../../../components/Model/DeletePopup/DeletePopup";
import { endpoints } from "../../../services/endpoints";
import PurchaseNavbar from "../PurchaseNavbar";

const PurchasePriceLIst = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddPurchasePriceList");
  };

  const [allVenprice, setAllVenprice] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");

  const [show, setShow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const allPurchaseurl = endpoints.vendorPriceList.allvendorpricelist;

  const getAllVendorPrice = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(allPurchaseurl, formData)
      .then((res) => {
        if (res.data.status === true) {
          var val = res.data.data;
            // val = val.reverse();
            const filterPricelist = val.filter((itm,ind) => {
              return itm.DELETE_STATUS != "X"
            })
          setAllVenprice(filterPricelist);
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.message, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    getAllVendorPrice();
  }, []);

  const deletePurchaseurl = endpoints.vendorPriceList.deletevendorpricelist;

  const deleteItem = (data) => {
    const formData = new FormData();
    formData.append("ID", data);
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(deletePurchaseurl, formData)
      .then((res) => {
        console.log(res, "response");
        if (res.data.status === true) {
          setShow(false);
          setDeleteConfirm(false);
          setSelectedData("");
          getAllVendorPrice();
          toast("Vendor Price List deleted Successfully", { type: "success" });
        } else if (res.data.status === false) {
          if (res.data.code === 3) {
            toast("Session expired , Please re-login", { type: "warning" });
            navigate("/");
          } else {
            toast(res.data.mrssage, { type: "error" });
          }
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (deleteConfirm) {
      deleteItem(selectedData);
    }
  }, [deleteConfirm]);

  const handleUpdate = (data) => {
    console.log(data, "value");
    const val = allVenprice.filter((itm, index) => {
      return itm.ID == data;
    });

    const orgValue = val[0];
    console.log(orgValue, "irhhcbsdh");
    navigate("/AddPurchasePriceList", { state: orgValue });
  };

  const column = [
    { label: "Vendor", name: "VENDOR_PRODUCT" },
    { label: "Products", name: "PRODUCT_NAME" },
    { label: "Currency", name: "VENDOR_CURRENCY" },
    { label: "Quantity", name: "VENDOR_QUANTITY" },
    { label: "Price", name: "VENDOR_PRICE", options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        var price ;
        if(typeof(value) == "string"){
          price = parseFloat(value).toFixed(2);
        }
        else {
          price = value.toFixed(2)
        }
        console.log(value , "value")
        return (
          <>
            <div className="updtdlt">
            <span>{price} </span>
            </div>
          </>
        );
      },
    }, 
  },
    {
      label: "Actions",
      name: "ID",
      options: {
        print:false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="updtdlt">
                <FiEdit
                  size={23}
                  color="#4f434d"
                  onClick={() => handleUpdate(value)}
                  style={{ cursor: "pointer" }}
                />
                 <MdDelete size={23} color="#4f434d" onClick={() => {
                    setShow(true);
                    setSelectedData(value)
                  }}  style={{cursor:"pointer"}}/>
              </div>
            </>
          );
        },
      },
    },
  ];

  return (
    <div>
      <PurchaseNavbar
        showBelowMenu={true}
        title="Venodr Pricelists"
        handleCreatePage={handleCreatePage}
      />
      <CustomTable data={allVenprice} column={column} />
      <DeletePopup show={show}
            setShow={setShow}
            setDeleteConfirm={setDeleteConfirm}/>
      <ToastContainer />
    </div>
  );
};

export default PurchasePriceLIst;
