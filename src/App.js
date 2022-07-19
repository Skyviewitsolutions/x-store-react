import React from 'react'
import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp';
import ForgetPassword from "./Screens/ForgetPassword/ForgetPassword";
import Dashboard from "./Screens/Dashboard/Dashboard";
import { useNavigate ,BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Navebar from './components/Navbar/Navbar';
import InventoryScreen from './Screens/Inventory/InventoryScreen';
import Sidebar from './components/Sidebar/Sidebar';
import InventoryVarient from './Screens/InventoryVarient/InventoryVarient';
import InventoryProducts from './Screens/InventoryProducts/InventoryProducts';
import Otp from './Screens/OTPPage/Otp';
import ChangePassword from "./Screens/ChangePassword/ChangePassword"

const App = () => {

  return(<>
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/OtpPage" element={<Otp/>} />
        <Route path="/ChangePassword" element={<ChangePassword/>} />

        {/* inside projects */}
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Inventory" element={<InventoryScreen/>} />
        <Route path="/InventoryVarient" element={<InventoryVarient/>} />
        <Route path="/InventoryProducts" element={<InventoryProducts/>} />
        
      </Routes>
    </Router>
    
  </>)
}

export default App