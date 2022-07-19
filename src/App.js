import React from 'react'
import Login from './Screens/Login/Login';
import SignUp from './Screens/SignUp/SignUp';
import ForgetPassword from "./Screens/ForgetPassword/ForgetPassword";
import Dashboard from "./Screens/Dashboard/Dashboard";
import { useNavigate ,BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Navebar from './components/Navbar/Navbar';
import InventoryScreen from './Screens/Inventory/InventoryScreen';
import ProductVarient from './components/ProductVarient/ProductVarient';
import Sidebar from './components/Sidebar/Sidebar';
import InventoryProducts from './Screens/InventoryProducts/InventoryProducts';

const App = () => {

  return(<>
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/Sidebar" element={<Sidebar/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Inventory" element={<InventoryScreen/>} />
        <Route path="/ProductVarient" element={<ProductVarient/>} />
        <Route path="/InventoryProducts" element={<InventoryProducts/>} />
      </Routes>
    </Router>
    
  </>)
}

export default App