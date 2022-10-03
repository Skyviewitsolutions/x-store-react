import React from 'react'
import {useNavigate} from 'react-router-dom';
import AccountNavbar from '../../AccountNavbar/AccountNavbar';
import VendorsCard from '../../VendorsCard/VendorsCard';
import './Vendors.css';

const Vendors = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddVendors");
  };
  return (
    <div>
      <AccountNavbar
        showBelowMenu={true}
        handleCreatePage={handleCreatePage}
        title="Vendors"
      />
             <VendorsCard/>
             <VendorsCard/>
             <VendorsCard/>
             <VendorsCard/>
        </div>
  )

}

export default Vendors