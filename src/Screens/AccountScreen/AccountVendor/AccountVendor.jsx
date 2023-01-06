import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import VendorsCard from '../../../components/VendorsCard/VendorsCard';
import { endpoints } from '../../../services/endpoints';


 
const AccountVendor = () => {
  const navigate = useNavigate();
  const [vendorsAll, setVendorsAll] = useState([]);
  const [deActiveVendor, setDeActiveVendor] = useState([]);
  const [activeVendor, setActiveVendor] = useState([]);
  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const vendorsAllUrl = endpoints.vendors.allVendors;

  const getVendors = () => {
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios
      .post(vendorsAllUrl, formData)
      .then((res) => {
        if (res.data.status === true) {
          const vendor = res.data.data;
          var val = vendor.reverse();

          const deletedVendor = val.filter((itm, ind) => {
            return itm.VENDOR_STATUS === "X";
          });
          setDeActiveVendor(deletedVendor);

          const allVendor = vendor.filter((itm, index) => {
            return itm.VENDOR_STATUS === null;
          });
          setActiveVendor(allVendor);

          setVendorsAll(res.data.data);
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "something went wrong");
      });
  };

  useEffect(() => {
    getVendors();
  }, []);

  const handleCreatePage = () => {
    navigate("/AddAccVendor");
  };
  return (
    <div>
      <AccountNavbar showBelowMenu={true} title="Vendor" handleCreatePage={handleCreatePage}/>
      <div className="vendor_Container">
        {activeVendor.map((item, index) => {
          return (
            <>
              <VendorsCard data={item} getVendors={getVendors} />
            </>
          );
        })}
        {deActiveVendor.map((item, index) => {
          return (
            <>
              <VendorsCard data={item} getVendors={getVendors} />
            </>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  )
}

export default AccountVendor