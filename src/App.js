import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Screens/Authentication/Login/Login";
import SignUp from "./Screens/Authentication/SignUp/SignUp";
import ForgetPassword from "./Screens/Authentication/ForgetPassword/ForgetPassword";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Otp from "./Screens/Authentication/OTPPage/Otp";
import ChangePassword from "./Screens/Authentication/ChangePassword/ChangePassword";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme } from '@mui/material/styles'
import Navebar from "./components/Navbar/Navbar";
import InventoryScreen from "./Screens/InventoryScreen/Inventory/InventoryScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import InventoryVarient from "./Screens/InventoryScreen/InventoryVarient/InventoryVarient";
import InventoryProducts from "./Screens/InventoryScreen/InventoryProducts/InventoryProducts";
import InventoryProductDetails from "./Screens/InventoryScreen/InventoryProductDetails/InventoryProductDetails";
import Uom from "./Screens/InventoryScreen/Configuration/Uom";
import UomCategories from "./Screens/InventoryScreen/Configuration/UomCategories";
import ProductCategories from "./Screens/InventoryScreen/Configuration/ProductCategories";
import Attributes from "./Screens/InventoryScreen/Configuration/Attributes";
import Location from "./Screens/InventoryScreen/Location/Location";
import Warehouse from "./Screens/InventoryScreen/Configuration/Warehouse";
import ConfigRoutes from "./Screens/InventoryScreen/Configuration/ConfigRoutes";
import OperationTypes from "./Screens/InventoryScreen/Configuration/OperationTypes";
import Empty from "./Screens/Error/Empty";
import Importempty from "./Screens/InventoryScreen/Import/Importempty";
import Uomdetails from "./Screens/InventoryScreen/Configuration/Uomdetails";
import AddUomCate from "./Screens/InventoryScreen/Configuration/AddUomCate/AddUomCate";
import AddProduct from "./Screens/InventoryScreen/AddProduct/AddProduct";
import UnitPage from "./components/InventoryProductDetailsMain/GeneralInformationPage/UnitsPage";
import AddWarehouse from "./Screens/InventoryScreen/Configuration/AddWarehouse/AddWarehouse";
import WarehouseConfig from "./Screens/InventoryScreen/Configuration/AddWarehouse/WarehouseConfig";
import AddLocation from "./Screens/InventoryScreen/Configuration/AddLocation/AddLocation";
import AddProductCategories from "./Screens/InventoryScreen/Configuration/AddProductCategory/AddProductCategories";
import AddRoute from "./Screens/InventoryScreen/Configuration/AddRoute/AddRoute";
import AddAtrribute from "./Screens/InventoryScreen/Configuration/AddAtrribute/AddAtrribute";
import ChartAccount from "./Screens/AccountScreen/ChartAccouts/ChartAccount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddChartAccount from "./Screens/AccountScreen/AddchartAccount/AddChartAccount";
import Journal from "./Screens/AccountScreen/Journals/Journal";
import AddJournal from "./Screens/AccountScreen/AddJournal/AddJournal";
import JournalEntires from "./Screens/AccountScreen/AddJournal/JournalEntires/JournalEntires";
import AdvanceSetting from "./Screens/AccountScreen/AddJournal/AdvanceSetting/AdvanceSetting";
import PaymentTerms from "./Screens/AccountScreen/PaymentTerms/PaymentTerms";
import AddPayment from "./Screens/AccountScreen/AddPaymentTerms/AddPayment";
import BankAcc from "./Screens/AccountScreen/Bank Account/BankAcc";
import AddBankAcc from "./Screens/AccountScreen/AddBankAcc/AddBankAcc";
import PaymentCard from "./components/Payment Acquirers/PaymentCard";
import AccountNavbar from "./components/AccountNavbar/AccountNavbar";
import Incometerms from "./Screens/AccountScreen/Incometerms/Incometerms";
import AccPaymentCard from "./Screens/AccountScreen/AccPayemntCard/AccPaymentCard";
import Currencies from "./Screens/AccountScreen/Currencies/Currencies";
import AddCurrencies from "./Screens/AccountScreen/AddCurrencies/AddCurrencies";
import AddOperationTypes from "./Screens/InventoryScreen/Configuration/AddOperationTypes/AddOperationTypes";
import AddPutwayRules from "./Screens/InventoryScreen/Configuration/AddPutwayRules/AddPutwayRules";
import TaxName from "./Screens/AccountScreen/TaxName/TaxName";
import AddTaxName from "./Screens/AccountScreen/AddTaxName/AddTaxName";
import JournalGroup from "./Screens/AccountScreen/JournalGroup/JournalGroup";
import AddJournalGroup from "./Screens/AccountScreen/AddJournalGroup/AddJournalGroup";
import AccountTypes from "./Screens/AccountScreen/AcountTypes/AccountTypes";
import AddAccountType from "./Screens/AccountScreen/AddAccountType/AddAccountType";
import AccountTags from "./Screens/AccountScreen/AccountTags/AccountTags";
import AddAccountTag from "./Screens/AccountScreen/AddAccountTag/AddAccountTag";
import AccountGroup from "./Screens/AccountScreen/AccountGroup/AccountGroup";
import AddAccGroup from "./Screens/AccountScreen/AddAccGroup/AddAccGroup";
import AssetTypes from "./Screens/AccountScreen/AssetTypes/AssetTypes";
import AddAssetType from "./Screens/AccountScreen/AddAssetType/AddAssetType";
import AddIncoterms from "./Screens/AccountScreen/AddIncoterms/AddIncoterms";
import AccTaxGroup from "./Screens/AccountScreen/AccTaxGroup/AccTaxGroup";
import AddAccTaxGroup from "./Screens/AccountScreen/AddAccTaxGroup/AddAccTaxGroup";
import AssetUseStatus from "./Screens/AccountScreen/AssetUseStatus/AssetUseStatus";
import AddAssetUseStatus from "./Screens/AccountScreen/AddAssetUseStatus/AddAssetUseStatus";
import DifferedExpenseType from "./Screens/AccountScreen/DifferdExpenseType/DifferedExpenseType";
import AddDifferedType from "./Screens/AccountScreen/AddDifferedType/AddDifferedType";
import AnalyticAccounts from "./Screens/AccountScreen/AnalyticAccounts/AnalyticAccounts";
import AddAnalyticAccount from "./Screens/AccountScreen/AddAnalyticAccount/AddAnalyticAccount";
import AnalyticTag from "./Screens/AccountScreen/AnalyticTags/AnalyticTag";
import AddAnalyticTag from "./Screens/AccountScreen/AddAnalyticTag/AddAnalyticTag";
import AnalyticAccountGroups from "./Screens/AccountScreen/AnalyticAccountGroups/AnalyticAccountGroups";
import AddAnalyticAccountGroup from "./Screens/AccountScreen/AddAnalyticAccountGroup/AddAnalyticAccountGroup";
import AnalyticAccountType from "./Screens/AccountScreen/AnalyticAccountType/AnalyticAccountType";
import AddAnalyticAccountType from "./Screens/AccountScreen/AddAnalyticAccountType/AddAnalyticAccountType";
import Vendors from "./components/VendorsScreen/VendorsCard/Vendors";
import AddVendors from "./components/VendorsScreen/AddVendors/AddVendors";
import ProductBrand from "./Screens/InventoryScreen/ProductBrand/ProductBrand";
import SalesTerms from "./Screens/SalesScreen/SalesTerms/SalesTerms";
import ShippingMethods from "./Screens/SalesScreen/ShippingMethods/ShippingMethods";
import SalesAttribute from "./Screens/SalesScreen/SalesAttribute/SalesAttribute";
import SalesUOM from "./Screens/SalesScreen/SalesUOM/SalesUOM";
import SalesUOMCategory from "./Screens/SalesScreen/SalesUOMCategory/SalesUOMCategory";
import AddSalesTerms from "./Screens/SalesScreen/SalesTerms/AddSalesTerms/AddSalesTerms";
import AddShippingMethod from "./Screens/SalesScreen/ShippingMethods/AddShippingMethods/AddShippingMethod";
import AddSalesAttribute from "./Screens/SalesScreen/SalesAttribute/AddSalesAttribute/AddSalesAttribute";
import Pricelists from "./Screens/SalesScreen/Pricelists/Pricelists";
import AddPricelists from "./Screens/SalesScreen/Pricelists/AddPricelists/AddPricelists";
import PromotionPrograms from "./Screens/SalesScreen/PromotionPrograms/PromotionPrograms";
import CouponPrograms from "./Screens/SalesScreen/CouponPrograms/CouponPrograms";
import OrderstoInvoice from "./Screens/SalesScreen/OrderstoInvoice/OrderstoInvoice";
import Quotations from "./Screens/SalesScreen/Orders/Quotations/Quotations";
import SalesOrders from "./Screens/SalesScreen/Orders/SalesOrders/SalesOrders";
import ParentCategory from "./Screens/InventoryScreen/Configuration/ParentCategory/ParentCategory";
import SalesTeam from "./Screens/SalesScreen/Orders/SalesTeam/SalesTeam";
import ProductPriceList from "./Screens/InventoryScreen/AddProduct/ProductPriceList/ProductPriceList";
import AddParentCategory from "./Screens/InventoryScreen/Configuration/AddParentCategory/AddParentCategory";
import PurchasePriceLIst from "./Screens/PurchaseScreen/PurchasePriceList/PurchasePriceLIst";
import AddPurchasePriceList from "./Screens/PurchaseScreen/PurchasePriceList/AddPurchasePriceList/AddPurchasePriceList";
import PurchaseAgreementTypes from "./Screens/PurchaseScreen/Purchase Agreement Types/PurchaseAgreementTypes";
import AddPurchaseAgreementTypes from "./Screens/PurchaseScreen/Purchase Agreement Types/AddPurchaseAgreementTypes/AddPurchaseAgreementTypes";
import RequestforQuotation from "./Screens/PurchaseScreen/RequestsforQuotation/RequestforQuotation";
import AddRequestQuotation from "./Screens/PurchaseScreen/RequestsforQuotation/AddRequestQuotation/AddRequestQuotation";
import PurchaseOrder from "./Screens/PurchaseScreen/PurchasesOrder/PurchaseOrder";
import AddPurchaseOrders from "./Screens/PurchaseScreen/PurchasesOrder/AddPurchaseOrders/AddPurchaseOrders";
import PurchaseAgreement from "./Screens/PurchaseScreen/PurchaseAgreement/PurchaseAgreement";
import AddPurchaseAgreement from "./Screens/PurchaseScreen/PurchaseAgreement/AddPurchaseAgreement/AddPurchaseAgreement";
import AccountVendor from "./Screens/AccountScreen/AccountVendor/AccountVendor";
import AccountProduct from "./Screens/AccountScreen/AccountProduct/AccountProduct";
import Department from "./Screens/EmplyoeeScreen/Department/Department";
import AddDepartment from "./Screens/EmplyoeeScreen/Department/AddDepartment/AddDepartment";
import HeadDepartment from "./Screens/EmplyoeeScreen/HeadDepartment/HeadDepartment";
import AddHeadDepartment from "./Screens/EmplyoeeScreen/HeadDepartment/AddHeadDepartment/AddHeadDepartment";
import JobPosition from "./Screens/EmplyoeeScreen/JobPosition/JobPosition";
import AddJobPosition from "./Screens/EmplyoeeScreen/JobPosition/AddJobPosition/AddJobPosition";
import AddQuotation from "./Screens/SalesScreen/Orders/Quotations/AddQuotation/AddQuotation";
import AddEmployee from "./Screens/EmplyoeeScreen/AddEmployee/AddEmployee";
import Manager from "./Screens/EmplyoeeScreen/Manager/Manager";
import AddManager from "./Screens/EmplyoeeScreen/Manager/AddManager/AddManager";
import AddCustomer from "./Screens/SalesScreen/Customer/AddCustomer/AddCustomer";
import AddSalesOrders from "./Screens/SalesScreen/Orders/SalesOrders/AddSalesOrders/AddSalesOrders";
import Customer from "./Screens/SalesScreen/Customer/Customer";
import AddWorkAddress from "./Screens/EmplyoeeScreen/AddEmployee/WorkAddress/AddWorkAddress";
import AddPromotionProgram from "./Screens/SalesScreen/PromotionPrograms/AddPromotionPrograms/AddPromotionProgram";
import AddCouponProgram from "./Screens/SalesScreen/CouponPrograms/AddCouponProgram/AddCouponProgram";
import Testing from "./Screens/SalesScreen/Testing";
import WorkAddress from "./Screens/EmplyoeeScreen/AddEmployee/WorkAddress/WorkAddress";
import AllCoupon from "./Screens/SalesScreen/CouponPrograms/AllCoupon";
import DeletePopup from "./components/Model/DeletePopup/DeletePopup";
import {GetAllData} from "./Helper/ApiHelper";
import AddAccVendor from "./Screens/AccountScreen/AccountVendor/AddAccVendor";
import ProductBrandList from "./Screens/InventoryScreen/ProductBrand/ProductBrandList";
import PrintProductBarcode from "./Screens/InventoryScreen/AddAccount/PrintProductBarcode/PrintProductBarcode";
import PurchaseVendors from "./Screens/PurchaseScreen/PurchaseVendors/PurchaseVendors";
import AddPurchaseVendors from "./Screens/PurchaseScreen/PurchaseVendors/AddPurchaseVendors";
import AccAddProduct from "./Screens/AccountScreen/AccountProduct/AccAddProduct";
import AccProductCard from "./Screens/AccountScreen/AccountProduct/AccProductCard";
import AccProductDetails from "./Screens/AccountScreen/AccountProduct/AccProductDetails";
import Employee from "./Screens/EmplyoeeScreen/Employee/Employee";
import AddHeadManager from "./Screens/EmplyoeeScreen/HeadManager/AddHeadManager/AddHeadManager";
import HeadManager from "./Screens/EmplyoeeScreen/HeadManager/HeadManager";
import RFQInvoice from "./Screens/PurchaseScreen/Invence/RFQInvoice";
import MainRFQ from "./Screens/PurchaseScreen/Invence/MainRFQ";
import PAInvoice from "./Screens/PurchaseScreen/Invence/PAInvoice";
import RequestForQuotionDetails from "./Screens/PurchaseScreen/RequestsforQuotation/RequestForQuotionDetails";

const App = () => {
 
  // const AllData = await GetAllData()

  // console.log(AllData,"all data here")

  // useEffect(() => {
  //   $('input:required').each(function(){
  //     $(this).prevAll('label').first().append('<span style="color:red">*</span>');
  // });
  // },[])


  return(
  <>
    <Router>
      <Routes>

        {/* ----------------Inventory----------------- */}
        
        {/* <Route path="/" element={<SignUp/>}/> */}

        <Route path="/" element={<Login/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/OtpPage" element={<Otp/>} />
        <Route path="/ChangePassword" element={<ChangePassword/>} />

        <Route path="/AccProductCard" element={<AccProductCard/>} />

        {/* inside projects */}
        
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Inventory" element={<InventoryScreen/>} />
        <Route path="/InventoryVarient" element={<InventoryVarient/>} />
        <Route path="/InventoryProducts" element={<InventoryProducts/>} />
        <Route path='/InventoryProductsDetails' element={<InventoryProductDetails/>} />
        <Route path='/Uom' element={<Uom/>} />
        <Route path='/UomCategories' element={<UomCategories/>} />
        <Route path='/AddUomCate' element={<AddUomCate/>} />
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
        <Route path='/AddRoute' element={<AddRoute/>} />
        <Route path='/AddAttribute' element={<AddAtrribute/>} />
        <Route path="/AddOperationTypes" element={<AddOperationTypes/>} />
        <Route path='/AddPutwayRules' element={<AddPutwayRules/>} />
        <Route path='/ProductBrandList' element={<ProductBrandList/>} />
        <Route path='/ProductBrand' element={<ProductBrand/>} />
        <Route path="/AddParentCategory" element={<AddParentCategory/>}/>
        <Route path='/ParentCategory' element={<ParentCategory/>} />
        <Route path='/ProductPrice' element={<ProductPriceList/>} />
        <Route path='/PrintProductBarcode' element={<PrintProductBarcode/>} />

       {/* --------Accounting Pages------------- */}

       <Route path='/AccountNavbar' element={<AccountNavbar/>}/>
       <Route path='/AccountVendor' element={<AccountVendor/>} />
       <Route path='/AccountProduct' element={<AccountProduct/>} /> 
       <Route path="/AccAddProduct" element={<AccAddProduct/>} />
       <Route path="/AccProductDetails" element={<AccProductDetails/>} />
       <Route path='/PaymentTerms' element={<PaymentTerms/>}/>
       <Route path='AddPayment' element={<AddPayment/>} />
       <Route path='/ChartAccount' element={<ChartAccount/>} />
       <Route path='/AddChartAccount' element={<AddChartAccount/>} />
       <Route path='/Journal' element={<Journal/>} />
       <Route path='/AddJournal' element={<AddJournal/>} />
       <Route path="/JournalEntires" element={<JournalEntires/>} />
       <Route path="/AdvanceSetting" element={<AdvanceSetting/>} />
       <Route path='/BankAcc' element={<BankAcc/>} /> 
       <Route path='/AddBankAcc' element={<AddBankAcc/>} />
       <Route path='/PaymentCard' element={<PaymentCard/>} />
       <Route path='/Incometerms' element={<Incometerms/>} />
       <Route path='/AddIncoTerms' element={<AddIncoterms/>} />
       <Route path='/AccPaymentCard' element={<AccPaymentCard/>} />
       <Route path="/Currencies" element={<Currencies/>} /> 
       <Route path="/AddCurrencies" element={<AddCurrencies/>} />
      <Route path="/TaxName" element={<TaxName/>} />
      <Route path="/AddTaxName" element={<AddTaxName/>}/>
      <Route path="/JournalGroup" element={<JournalGroup/>} />
      <Route path="/AddJournalGroup" element={<AddJournalGroup/>} />
      <Route path="/AccountTypes" element={<AccountTypes/>} />
      <Route path="/AddAccountType" element={<AddAccountType/>} />
      <Route path="/AccountTags" element={<AccountTags/>} />
      <Route path="/AddAccountTag" element={<AddAccountTag/>} />
      <Route path="/AccountGroup" element={<AccountGroup/>} />
      <Route path="/AddAccGroup" element={<AddAccGroup/>} />
      <Route path="/AssetTypes" element={<AssetTypes/>} />
      <Route path="/AddAssetType" element={<AddAssetType/>}/>
      <Route path="/AccTaxGroup" element={<AccTaxGroup/>} />
      <Route path="/AddAccTaxGroup" element={<AddAccTaxGroup/>} />
      <Route path="/AssetUseStatus" element={<AssetUseStatus/>} />
      <Route path="/AddAssetUseStatus" element={<AddAssetUseStatus/>} />
      <Route path="/DifferedExpenseType" element={<DifferedExpenseType/>} />
      <Route path='/AddDifferedType' element={<AddDifferedType/>} />
      <Route path="/AnalyticAccounts" element={<AnalyticAccounts/>} />
      <Route path="/AddAnalyticAccount" element={<AddAnalyticAccount/>} />
      <Route path="/AnalyticTag" element={<AnalyticTag/>} />
      <Route path="/AddAnalyticTag" element={<AddAnalyticTag/>} />
      <Route path='/AnalyticAccountGroup' element={<AnalyticAccountGroups/>} />
      <Route path='/AddAnalyticAccountGroup' element={<AddAnalyticAccountGroup/>} />
      <Route path='/AnalyticAccountType' element={<AnalyticAccountType/>} />
      <Route path='/AddAnalyticAccountType' element={<AddAnalyticAccountType/>} />
      <Route path='/AddAccVendor' element={<AddAccVendor/>} />

      {/* -------------------------Vendors---------------------------------- */}
      
      <Route path="/Vendors" element={<Vendors/>} />
      <Route path="/AddVendors" element={<AddVendors/>} />

     {/* ------------------------------------SalesScreen------------------------ */}

       <Route path="/sales_teams" element={<SalesTerms/>} />
       <Route path="/AddSalesTeam" element={<AddSalesTerms/>}/>
       <Route path="/shipping_methods" element={<ShippingMethods/>}/>
       <Route path="/sales_attribute" element={<SalesAttribute/>}/>
       <Route path="/AddSalesAttribute" element={<AddSalesAttribute/>}/>
       <Route path="/sales_units_of_measure" element={<SalesUOM/>}/>
       <Route path="/sales_units_of_measure_category" element={<SalesUOMCategory/>}/>
       <Route path="/AddShippingMethod" element={<AddShippingMethod/>}/>
       <Route path="/Pricelists" element={<Pricelists/>} /> 
       <Route path="/AddPricelists" element={<AddPricelists/>}/>
       <Route path="/PromotionPrograms" element={<PromotionPrograms/>}/>
       <Route path='/AddPromotionProgram' element={<AddPromotionProgram/>} />
       <Route path="/CouponPrograms" element={<CouponPrograms/>} />
       <Route path="/AddCouponPrograms" element={<AddCouponProgram/>} />
       <Route path="/OrderstoInvoice" element={<OrderstoInvoice/>} />
       <Route path="/Quotations" element={<Quotations/>} />
       <Route path="/SalesOrders" element={<SalesOrders/>}/>
       <Route path='/OrdersSalesTeam' element={<SalesTeam/>} />
       <Route path='/Customer' element={<Customer/>} />
       <Route path='/AddCustomer' element={<AddCustomer/>} />
       <Route path='/AddQuotation' element={<AddQuotation/>} />
       <Route path='/AddSalesOrders' element={<AddSalesOrders/>} />
       <Route path='/AddSalesAttribute' element={<AddSalesAttribute/>} />
  

       {/* --------------------------------------Purchase Screens---------------------------- */}
       <Route path="/PurchasePriceList" element={<PurchasePriceLIst/>} />
       <Route path='/AddPurchasePriceList' element={<AddPurchasePriceList/>} />
       <Route path='/PurchaseAgreementTypes' element={<PurchaseAgreementTypes/>} />
       <Route path='/AddPurchaseAgreementType' element={<AddPurchaseAgreementTypes/>} />
       <Route path='/RequestforQuotation' element={<RequestforQuotation/>} />
       <Route path='/AddRequestQuotation' element={<AddRequestQuotation/>}  />
       <Route path='/PurchaseOrder' element={<PurchaseOrder/>}  />
       <Route path='/AddPurchaseOrders' element={<AddPurchaseOrders/>}/>
       <Route path='/PurchaseAgreement' element={<PurchaseAgreement/>}/>
       <Route path='/AddPurchaseAgreement' element={<AddPurchaseAgreement/>}/>
       <Route path='/PurchaseVendor'  element={<PurchaseVendors/>} />
       <Route path='/AddPurchaseVendor' element={<AddPurchaseVendors/>} /> 
       <Route path="/RequestForQuotaion/Details/:VendorId/:RFQID" element={<RequestForQuotionDetails/>} />
       {/* -------------------------------------Employee Screens-------------------------------- */}

       <Route path="/Employee" element={<Employee/>} />
       <Route path='/AddEmployee' element={<AddEmployee/>} />
       <Route path='/Manager' element={<Manager/>} />
       <Route path='/AddManager' element={<AddManager/>} />
       <Route path='/Department' element={<Department/>} />
       <Route path='/AddDepartment' element={<AddDepartment/>} />
       <Route path='/HeadDepartment' element={<HeadDepartment/>} />
       <Route path='/AddHeadDepartment' element={<AddHeadDepartment/>} />
       <Route path='/JobPosition' element={<JobPosition/>} />
       <Route path='/AddJobPosition' element={<AddJobPosition/>} />
       <Route path='/WorkAddress' element={<WorkAddress/>}/>
       <Route path='/AddWorkAddress' element={<AddWorkAddress/>} />
       <Route path='/HeadManager' element={<HeadManager/>} />
       <Route path ='/AddHeadManager' element={<AddHeadManager/>} />
      {/* <Route path='/Testing' element={<Testing/>} /> */}
      {/* <Route path='/AllCoupon' element={<AllCoupon/>} /> */}
      <Route path="/RFQInvoice" element={<RFQInvoice/>} />
      <Route path="/MainRFQ" element={<MainRFQ/>} />
      <Route path="/PAInvoice" element={<PAInvoice/>}/>


      </Routes>
    </Router>
  </>)
}

export default App;
