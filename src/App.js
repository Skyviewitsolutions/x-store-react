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
import InventoryProductDetails from './Screens/InventoryProductDetails/InventoryProductDetails';
import Uom from './Screens/Configuration/Uom';
import UomCategories from './Screens/Configuration/UomCategories';
import ProductCategories from './Screens/Configuration/ProductCategories';
import Attributes from './Screens/Configuration/Attributes';
import Location from './Screens/Location/Location';
import Warehouse from './Screens/Configuration/Warehouse';
import ConfigRoutes from './Screens/Configuration/ConfigRoutes';
import OperationTypes from './Screens/Configuration/OperationTypes';
import Empty from './Screens/Error/Empty';
import Importempty from './Screens/Import/Importempty';
import Uomdetails from './Screens/Configuration/Uomdetails';
import AddProduct from './Screens/AddProduct/AddProduct';
import UnitPage from './components/InventoryProductDetailsMain/GeneralInformationPage/UnitsPage';
import AddWarehouse from './Screens/Configuration/AddWarehouse/AddWarehouse';
import WarehouseConfig from './Screens/Configuration/AddWarehouse/WarehouseConfig';
import AddLocation from './Screens/Configuration/AddLocation/AddLocation';
import AddProductCategories from './Screens/Configuration/AddProductCategory/AddProductCategories';

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
        <Route path='/InventoryProductsDetails' element={<InventoryProductDetails/>} />
        <Route path='/Uom' element={<Uom/>} />
        <Route path='/UomCategories' element={<UomCategories/>} />
        <Route path="/ProductCategories" element={<ProductCategories/>} />
        <Route path="/Attributes" element={<Attributes/>} />
        <Route path="/Location" element={<Location/>} />
        <Route path= '/Warehouse' element = {<Warehouse/>} />
        <Route path='/ConfigRoutes' element = {<ConfigRoutes/>} />
        <Route path='/OperationType' element = {<OperationTypes/>} />
        <Route path='/Empty' element={<Empty/>} />
        <Route path='/Importempty' element={<Importempty/>} />
        <Route path='/Uomdetails' element={<Uomdetails/>} />
        <Route path='/AddProduct' element={<AddProduct/>} />
        <Route path='/UnitPage' element={<UnitPage/>} />
        <Route path='/AddWarehouse' element={<AddWarehouse/>} />
        <Route path='/WarehouseConfig' element={<WarehouseConfig/>}/>
        <Route path='/AddLocation' element={<AddLocation/>}/>
        <Route path='/AddProductCategories' element={<AddProductCategories/>}/>
      </Routes>
    </Router>
    
  </>)
}

export default App