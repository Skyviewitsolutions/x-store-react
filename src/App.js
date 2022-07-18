import React from 'react'
import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp';
import ForgetPassword from "./Screens/ForgetPassword/ForgetPassword";
import Dashboard from "./Screens/Dashboard/Dashboard";
import { useNavigate ,BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Navebar from './components/Navebar/Navbar';
import InventoryScreen from './Screens/Inventory/InventoryScreen';


const App = () => {

  return(<>
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Inventory" element={<InventoryScreen/>} />
      </Routes>
    </Router>
    
  </>)
}

export default App