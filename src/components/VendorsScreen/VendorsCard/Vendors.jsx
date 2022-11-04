import React from 'react'
import {useNavigate} from 'react-router-dom';
import AccountNavbar from '../../AccountNavbar/AccountNavbar';
import Navebar from '../../Navbar/Navbar';
import VendorsCard from '../../VendorsCard/VendorsCard';
import './Vendors.css';

const Vendors = () => {
  const navigate = useNavigate();
  const handleCreatePage = () => {
    navigate("/AddVendors");
  };
  return (
    <div>
    <Navebar
        showBelowMenu={true}
        title="Vendors"
        handleCreatePage={handleCreatePage}
      />
             <VendorsCard/>
             <VendorsCard/>
             <VendorsCard/>
             <VendorsCard/>
        </div>
  )

}

export default Vendors