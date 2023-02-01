const BASE_URL = "https://xstore.skyviewads.com";


export const endpoints = {

  products: {
    addProduct: BASE_URL + "/ProductManagement/ProductManagement/AddProduct",
    allProduct: BASE_URL + "/ProductManagement/ProductManagement/GetAllProduct",
    singleProduct:
      BASE_URL + "/ProductManagement/ProductManagement/GetSingleProduct",
    updateProduct:
      BASE_URL + "/ProductManagement/ProductManagement/UpdateProduct",
    deleteProduct:
      BASE_URL + "/ProductManagement/ProductManagement/DeleteProduct",
    incomeAcoount: BASE_URL + "/AccountDepartment/ProductIncome/GetAllPI",
    expenseAccount: BASE_URL + "/AccountDepartment/ExpenseAccount/GetAllExp",
    priceDifference:BASE_URL + "/ProductManagement/ProductDifferentPrice/GetAllPDP",
    productUnitAll: BASE_URL + "/ProductsXM/ProductsUnitsAll",
    productType: BASE_URL + "/ProductsXM/GetAllProductType",
    vendorListAllProduct : BASE_URL + "/ProductManagement/ProductManagement/GetAllVendorList",
    vendorListAdd : BASE_URL + "/ProductManagement/ProductManagement/AddVendorList",
    vendorListdelete :  BASE_URL + "/ProductManagement/ProductManagement/DelVendorList",
    vendorListsingle : BASE_URL + "/ProductManagement/ProductManagement/GetSingleVendorList",
    vendorListUpdate : BASE_URL + "/ProductManagement/ProductManagement/UpdateVendorlist",
    ProductBarcodeAll : BASE_URL + "/ProductManagement/ProductAdditionalBarcode/GetAll",
    ProductBarcodeAdd : BASE_URL + "/ProductManagement/ProductAdditionalBarcode/Add",
    ProductBarcodeDelete : BASE_URL + "/ProductManagement/ProductAdditionalBarcode/Delete",
    ProductBarcodeSingle : BASE_URL + "/ProductManagement/ProductAdditionalBarcode/GetSingle",
    ProductBarcodeUpdate : BASE_URL + "/ProductManagement/ProductAdditionalBarcode/Update",
    ProductAllVarients : BASE_URL + "/ProductManagement/ProductVariants/GetAll",
    ProductAddVarients : BASE_URL + "/ProductManagement/ProductVariants/Add",
    ProductSingleVariens : BASE_URL + "/ProductManagement/ProductVariants/GetSingle",
    ProductUpdateVarients : BASE_URL + "/ProductManagement/ProductVariants/Update",
    ProductDeleteVarients : BASE_URL + "/ProductManagement/ProductVariants/Delete"
  },
  productBrand: {
    allProductBrand: BASE_URL + "/ProductManagement/ProductBrand/GetAll",
    addProductBrand: BASE_URL + "/ProductManagement/ProductBrand/Add",
    updateProductBrand: BASE_URL + "/ProductManagement/ProductBrand/Update",
    deleteProductBrand: BASE_URL + "/ProductManagement/ProductBrand/Delete",
    singleProductBrand: BASE_URL + "/ProductManagement/ProductBrand/GetSingle",
  },
  parentCate: {
    deleteParentCate : "/ProductManagement/ParentProductCategory/Delete",
    allParentCate:
      BASE_URL + "/ProductManagement/ParentProductCategory/GetAllProductCat",
    addParentCate:
      BASE_URL + "/ProductManagement/ParentProductCategory/AddProduct_Category",
      updateParentCate : "/ProductManagement/ParentProductCategory/Update"
  },
  productPriceList: {
    allPricelist: BASE_URL + "/SalesDepartment/PriceList/GetAll",
    addPriceList: BASE_URL + "/SalesDepartment/PriceList/Add",
    updatePriceList: BASE_URL + "/SalesDepartment/PriceList/Update",
    deletePriceList: BASE_URL + "/SalesDepartment/PriceList/Delete",
  },
  wareHouse: {
    addWarehouse: BASE_URL + "/WareHouse/WareHouseAddress/AddWareHouse",
    allWarehouse: BASE_URL + "/WareHouse/WareHouseAddress/GetAllWareHouse",
    singleWarehouse:
      BASE_URL + "/WareHouse/WareHouseAddress/GetSingleWarehouse",
    updateWarehouse: BASE_URL + "/WareHouse/WareHouseAddress/UpdateWareHouse",
    deleteWarehouse: BASE_URL + "/WareHouse/WareHouseAddress/DeleteWareHouse",
  },
  location: {
    addLocation: BASE_URL + "/WareHouse/LocationMaster/AddLocation",
    allLocation: BASE_URL + "/WareHouse/LocationMaster/GetAllLoc",
    singleLocation: BASE_URL + "/WareHouse/LocationMaster/GetSingleLocation",
    updateLocation: BASE_URL + "/WareHouse/LocationMaster/UpdateLocation",
    deleteLocation: BASE_URL + "/WareHouse/LocationMaster/DeleteLocation",
    locationType: BASE_URL + "/WareHouse/LocationTypeXs/GetAllLoc",
  },
  productCategory: {
    addProductCategory:
      BASE_URL + "/ProductManagement/ProductCategory/AddProduct_Category",
    allProductCate:
      BASE_URL + "/ProductManagement/ProductCategory/GetAllProductCat",
      deleteProductCate : BASE_URL + "/ProductManagement/ProductCategory/Delete",
      updateProductCate : BASE_URL + "/ProductManagement/ProductCategory/Update"
  },
  UOM: {
    addUOM: BASE_URL + "/Units/AddUnitOfMeasurement",
    allUOM: BASE_URL + "/Units/GetAllUOM",
    singleUOM: BASE_URL + "/Units/GetSingleUOM",
    updateUOM: BASE_URL + "/Units/UpdateUOM",
    deleteUOM: BASE_URL + "/Units/DeleteUOM",
  },
  UomCategory: {
    allUomCate: BASE_URL + "/ProductsXM/ProductsUnitsAll",
    addUomCate: BASE_URL + "/ProductsXM/ProductsUnitsAdd",
    updateUomCate: BASE_URL + "/ProductsXM/UpdateUnits",
    deleteUomCate: BASE_URL + "/ProductsXM/deleteproductunits",
  },
  OpertionType: {
    allOpertaionType: BASE_URL + "/OperationType/GetAllOperationType",
    addOperationType: BASE_URL + "/OperationType/AddOperationType",
    singleOperationType: BASE_URL + "/OperationType/GetSingleOperationType",
    updateOperationType: BASE_URL + "/OperationType/UpdateOperationType",
    deleteOperationType: BASE_URL + "/OperationType/DeleteOperationType",
  },
  authentication: {
    login: BASE_URL + "/UserLogin/login",
    signUp: BASE_URL + "/UserLogin/signup",
    changePassword: BASE_URL + "/UserLogin/ChangePassword",
    forgatPassword: BASE_URL + "/UserLogin/ForgatPassword",
    logout : BASE_URL + "/UserLogin/Logout",
  },
  Attribute: {
    allattribute: BASE_URL + "/Attribute/GetAllAttribute",
    addallattribute: BASE_URL + "/Attribute/AddAttribute",
    singleattribute: BASE_URL + "/Attribute/GetSingleAttribute",
    updateatrriute: BASE_URL + "/Attribute/UpdateAttribute",
    deleteattribute: BASE_URL + "/Attribute/DeleteAttribute",
  },
  vendors:{
    allVendors: BASE_URL + "/SalesDepartment/Vendors/GetAll",
    addVendors: BASE_URL + "/SalesDepartment/Vendors/Add",
    singleVendors: BASE_URL + "/SalesDepartment/Vendors/GetSingle",
    updateVendors: BASE_URL + "/SalesDepartment/Vendors/Update",
    deleteVendors: BASE_URL + "/SalesDepartment/Vendors/Delete",
  },
  overView:{
      allOverview : BASE_URL + "/Inventory/Overview/GetAll",
  },

  //----------- Accounting Api---------->

  PaymentTerms: {
    allPayment: BASE_URL + "/PaymentTerms/GetAllPaymentTerms",
    addPayment: BASE_URL + "/PaymentTerms/AddPaymentTerms",
    singlePayment: BASE_URL + "/PaymentTerms/GetSinglePaymentTerms",
    updatePayment: BASE_URL + "/PaymentTerms/UpdatePaymentTerms",
    deletePayment: BASE_URL + "/PaymentTerms/DeletePaymentTerms",
  },
  Currency: {
    allCurrency: BASE_URL + "/Currency/GetAllCurrency",
    addCurrency: BASE_URL + "/Currency/AddCurrency",
    singleCurrency: BASE_URL + "/Currency/GetSingleCurrency",
    updateCurrency: BASE_URL + "/Currency/UpdateCurrency",
    deleteCurrency: BASE_URL + "/Currency/DeleteCurrency",
  },
  AccountTag: {
    allAccountTag: BASE_URL + "/AccountTag/GetAllAccTag",
    addAccountTag: BASE_URL + "/AccountTag/AddAccTag",
    singleAccountTag: BASE_URL + "/AccountTag/GetSingleAccTag",
    updateAccountTag: BASE_URL + "/AccountTag/UpdAccTag",
    deleteAccountTag: BASE_URL + "/AccountTag/DelAccTag",
  },
  AccountType: {
    allAccountType: BASE_URL + "/AccountType/GetAllACT",
    addAccountType: BASE_URL + "/AccountType/AddACT",
    singleAccountType: BASE_URL + "/AccountType/GetSingleACT",
    updateAccountType: BASE_URL + "/AccountType/UPDACT",
    deleteAccountType: BASE_URL + "/AccountType/DelACT",
  },
  TaxName: {
    allTaxName: BASE_URL + "/Accounting/GetAllAccounting",
    addTaxName: BASE_URL + "/Accounting/AddAccounting",
    singleTax: BASE_URL + "/Accounting/GetSingleAccounting",
    updateTaxName: BASE_URL + "/Accounting/UpdateAccounting",
    deleteTaxName: BASE_URL + "/Accounting/DeleteAccounting",
  },
  JournalGroup: {
    allJournalGroup: BASE_URL + "/JournalGroup/GetAllJG",
    addJournalGroup: BASE_URL + "/JournalGroup/AddJG",
    singleJournalGroup: BASE_URL + "/JournalGroup/GetSingleJG",
    updateJournalGroup: BASE_URL + "/JournalGroup/UpdateJG",
    deleteJournalGroup: BASE_URL + "/JournalGroup/DeleteJG",
  },
  IncomeTerms: {
    allIncomeTerms: BASE_URL + "/IncomeTerms/GetAllICT",
    addIncomeTerms: BASE_URL + "/IncomeTerms/AddICT",
    singleIncomeTerms: BASE_URL + "/IncomeTerms/GetSingleICT",
    updateIncomeTerms: BASE_URL + "/IncomeTerms/UpdateICT",
    deleteIncomeTerms: BASE_URL + "/IncomeTerms/DeleteICT",
  },
  Journals: {
    allJournals: BASE_URL + "/Invoices/Journals/GetAllJr",
    addJournals: BASE_URL + "/Invoices/Journals/AddJr",
    singleJournals: BASE_URL + "/Invoices/Journals/GetSingleJr",
    updateJournals: BASE_URL + "/Invoices/Journals/UpdateJr",
    deleteJournals: BASE_URL + "/Invoices/Journals/DeleteJr",
  },
  BankAccount: {
    allBank: BASE_URL + "/BankAcc/GetAllBA",
    addBank: BASE_URL + "/BankAcc/AddBA",
    singleBank: BASE_URL + "/BankAcc/GetSingleBA",
    updateBank: BASE_URL + "/BankAcc/UpdateBA",
    deleteBank: BASE_URL + "/BankAcc/DeleteBA",
  },
  ChartAccount: {
    allChartAcc: BASE_URL + "/ChartsOfAccount/GetAllCrtAcc",
    addChartAcc: BASE_URL + "/ChartsOfAccount/AddCrtAcc",
    singleChartAcc: BASE_URL + "/ChartsOfAccount/GetSingleCrtAcc",
    updateChartAcc: BASE_URL + "/ChartsOfAccount/UpdateCrtAcc",
    deleteChartAcc: BASE_URL + "/ChartsOfAccount/DeleteCrtAcc",
  },
  AccountGroup: {
    allAccGrp: BASE_URL + "/AccountDepartment/AccountGroup/GetAllACCGrp",
    addAccGrp: BASE_URL + "/AccountDepartment/AccountGroup/AddACCGrp",
    singleAccGrp: BASE_URL + "/AccountDepartment/AccountGroup/GetSingleACCGrp",
    updateAccGrp: BASE_URL + "/AccountDepartment/AccountGroup/UpdateACCGrp",
    deleteAccGrp: BASE_URL + "/AccountDepartment/AccountGroup/DeleteACCGrp",
  },
  AccountTaxGrp: {
    allAccgrpTax: BASE_URL + "/AccountTaxGroup/GetAllAccTaxGrp",
    addAccGrpTax: BASE_URL + "/AccountTaxGroup/AddAccTaxGrp",
    updateAccGrpTax: BASE_URL + "/AccountTaxGroup/UpdateAccTaxGrp",
    deleteAccGrpTax: BASE_URL + "/AccountTaxGroup/DeleteAccTaxGrp",
    singleAccGrpTax: BASE_URL + "/AccountTaxGroup/GetSingleAccTaxGrp",
  },
  AssetType: {
    allAssettype: BASE_URL + "/AssetType/GetAllAst",
    addAssetType: BASE_URL + "/AssetType/AddAst",
    singleAssetType: BASE_URL + "/AssetType/GetSingleAst",
    updateAssetType: BASE_URL + "/AssetType/UpdateAst",
    deleteAssetType: BASE_URL + "/AssetType/DeleteAst",
  },
  AssetUseStatus: {
    allAssetuseStatus: BASE_URL + "/AssetUseStatus/GetAllAUS",
    addAssetUseStatus: BASE_URL + "/AssetUseStatus/AddAUS",
    singleAssetUseStatus: BASE_URL + "/AssetUseStatus/GetSingleAUS",
    updateAssetUseStatus: BASE_URL + "/AssetUseStatus/UpdateAUS",
    deleteAssetUseStatus: BASE_URL + "/AssetUseStatus/DeleteAUS",
  },
  
  AnalyticAccType: {
    allAnalytictype: BASE_URL + "/AnalyticType/GetAllAnAccType",
    addAnAccType: BASE_URL + "/AnalyticType/AddAnAccType",
    singleAnAccType: BASE_URL + "/AnalyticType/GetSingleAnAccType",
    updateAnAccType: BASE_URL + "/AnalyticType/UpdateAnAccType",
    deleteAnAccType: BASE_URL + "/AnalyticType/DeleteAnAccType",
  },

  AnalyticAcc: {
    allAnaAcc: BASE_URL + "/AnalyticAccount/GetAllAnalyticAccount",
    addAnaAcc: BASE_URL + "/AnalyticAccount/AddAnalyticAccount",
    singleAnaAcc: BASE_URL + "/AnalyticAccount/GetSingleAnalyticAccount",
    updateAnaAcc: BASE_URL + "/AnalyticAccount/UpdateAnalyticAccount",
    deleteAnaAcc: BASE_URL + "/AnalyticAccount/DeleteAnalyticAccount",
  },

  DefExpenseType: {
    allDefExType: BASE_URL + "/DeferedExpType/GetAllDefferedType",
    addDefExType: BASE_URL + "/DeferedExpType/AddDefferedType",
    singleDefExType: BASE_URL + "/DeferedExpType/GetSingleDefferedType",
    updateDefExType: BASE_URL + "/DeferedExpType/UpdateDefferedType",
    deleteDefExType: BASE_URL + "/DeferedExpType/DeleteDefferedType",
  },

  AnalyticAccGrp: {
    allAnnAccGrp: BASE_URL + "/AnalyticAccGrp/GetAllAnalyticAccGrp",
    addAnnAccGrp: BASE_URL + "/AnalyticAccGrp/AddAnalyticAccGrp",
    singleAnnAccGrp: BASE_URL + "/AnalyticAccGrp/GetSingleAnalyticAccGrp",
    updateAnnAccGrp: BASE_URL + "/AnalyticAccGrp/UpdateAnalyticAccGrp",
    deleteAnnAccGrp: BASE_URL + "/AnalyticAccGrp/DeleteAnalyticAccGrp",
  },

  AnalyticTag: {
    allAnnTag: BASE_URL + "/AnalyticTag/GetAllAT",
    addAnnTag: BASE_URL + "/AnalyticTag/AddAT",
    singleAnnTag: BASE_URL + "/AnalyticTag/GetSingleAT",
    updateAnnTag: BASE_URL + "/AnalyticTag/UpdateAT",
    deleteAnnTag: BASE_URL + "/AnalyticTag/DeleteAT",
  },

  // --------------------Purchase All Api-------------------------

  vendorPriceList:{
    allvendorpricelist : BASE_URL + "/Purchase/VendorPriceList/GetAll",
    addvendorpricelist : BASE_URL + "/Purchase/VendorPriceList/Add",
    singlevendorpricelist : BASE_URL + "/Purchase/VendorPriceList/GetSingle",
    updatevendorpricelist : BASE_URL + "/Purchase/VendorPriceList/Update",
    deletevendorpricelist : BASE_URL + "/Purchase/VendorPriceList/Delete"
  },

  purchaseAgreementtype:{
    allAgreementtype : BASE_URL + "/Purchase/PurchaseAgreementType/GetAll",
    addAgreementtype : BASE_URL + "/Purchase/PurchaseAgreementType/Add",
    updateAgreementtype : BASE_URL + "/Purchase/PurchaseAgreementType/Update",
    deleteAgreementtype : BASE_URL + "/Purchase/PurchaseAgreementType/Delete",
    singleAgreementtype : BASE_URL + "/Purchase/PurchaseAgreementType/GetSingle",
  },

  requestQuotation:{
    allRequestQuotation : BASE_URL + "/Purchase/RequestQuotation/GetAll",
    addRequestQuotation : BASE_URL + "/Purchase/RequestQuotation/Add",
    updatrRequestQuotation : BASE_URL + "/Purchase/RequestQuotation/Update",
    deleteRequestQuotation :  BASE_URL + "/Purchase/RequestQuotation/Delete",
    singleRequestQuotation : BASE_URL + "/Purchase/RequestQuotation/GetSingle",
    getAllproductdetails : BASE_URL + "/Purchase/RequestQuotation/GetAllProductDetail",
    addProductdetails : BASE_URL + "/Purchase/RequestQuotation/AddProduct",
    deleteProductdetails : BASE_URL + "/Purchase/RequestQuotation/DeleteProduct",
    singleProductDetails : BASE_URL + "/Purchase/RequestQuotation/GetSingleProduct",
    updateProductDetails : BASE_URL + "/Purchase/RequestQuotation/UpdateProduct",
    vendorAllProduct : BASE_URL + "/Purchase/RequestQuotation/GetProduct"
  },

  agreementType:{
    allAgreement : BASE_URL + "/Purchase/PurchaseAgreement/GetAll",
    addAgreement : BASE_URL + "/Purchase/PurchaseAgreement/Add",
    updateAgreement : BASE_URL + "/Purchase/PurchaseAgreement/Update",
    deleteAgreement : BASE_URL + "/Purchase/PurchaseAgreement/Delete",
    productdeletepurchase : BASE_URL + "/Purchase/PurchaseAgreement/DeleteProduct",
    addProductdetailsPurchase : BASE_URL + "/Purchase/PurchaseAgreement/AddProduct",
    singleProductDetails : BASE_URL + "/Purchase/PurchaseAgreement/GetSingleProduct",
    updateProductDetails : BASE_URL + "/Purchase/PurchaseAgreement/UpdateProduct",
    allProductDetails : BASE_URL + "/Purchase/PurchaseAgreement/GetAllProductDetail",
  },
  purchaseOrders:{
    allProductDetails : BASE_URL + "/Purchase/PurchaseOrders/GetAllProductDetail",
    addProductdetails : BASE_URL + "/Purchase/PurchaseOrders/AddProduct",
    singleProductDetails : BASE_URL + "/Purchase/PurchaseOrders/GetSingleProduct",
    deleteProductdetails : BASE_URL + "/Purchase/PurchaseOrders/DeleteProduct",
    PurchaseupdateProductDetails : BASE_URL + "/Purchase/PurchaseOrders/UpdateProduct",
    allpurchaseOrder : BASE_URL + "/Purchase/PurchaseOrders/GetAll",
    addpurchaseOrder : BASE_URL + "/Purchase/PurchaseOrders/Add",
    updatepurchaseOrder : BASE_URL + "/Purchase/PurchaseOrders/Update",
    deletePurchaseOrders : BASE_URL + "/Purchase/PurchaseOrders/Delete",
  },

  // --------------------------------Sales All Api----------------------------------------

  attribute:{
      allsalesattribute : BASE_URL + "/SalesDepartment/Attribute/GetAll",
      addsalesattribute : BASE_URL + "/SalesDepartment/Attribute/Add",
      updatesalesattribute : BASE_URL + "/SalesDepartment/Attribute/Update",
      deletesalesattribute : BASE_URL + "/SalesDepartment/Attribute/Delete",
      singleattribute : BASE_URL + "/SalesDepartment/Attribute/GetSingle",
      addValue : BASE_URL + "/SalesDepartment/Attribute/AddValue",
      allValue : BASE_URL + "/SalesDepartment/Attribute/GetAllValue",
      singleValue : BASE_URL + "/SalesDepartment/Attribute/GetValueID" ,
      deleteValue : BASE_URL + "/SalesDepartment/Attribute/DeleteValue"
  },
  
  shippingMethod:{
    allShipping: BASE_URL + "/SalesDepartment/ShippingMethod/GetAll",
    addShipping: BASE_URL + "/SalesDepartment/ShippingMethod/Add",
    updatShipping : BASE_URL + "/SalesDepartment/ShippingMethod/Update",
    deleteShipping : BASE_URL + "/SalesDepartment/ShippingMethod/Delete"
  },

  customer:{
    allCustomer : BASE_URL + "/SalesDepartment/Customers/GetAll",
    addCustomer : BASE_URL + "/SalesDepartment/Customers/Add",
    singleCustomer : BASE_URL + "/SalesDepartment/Customers/GetSingle",
    updateCustomer : BASE_URL + "/SalesDepartment/Customers/Update",
    deleteCustomer : BASE_URL + "/SalesDepartment/Customers/Delete",
  },

  promotionProgram:{
    allPromotion:BASE_URL + "/SalesDepartment/Promotion/GetAll",
    addPromotion : BASE_URL + "/SalesDepartment/Promotion/Add" ,
    singlePromotion :  BASE_URL + "/SalesDepartment/Promotion/GetSingle",
    updatePromotion : BASE_URL + "/SalesDepartment/Promotion/Update",
    deletePromotion : BASE_URL + "/SalesDepartment/Promotion/Delete",
    getById : BASE_URL + "/SalesDepartment/Promotion/GetByID",
  },

  // -------------------------------------Employee------------------------------
    Manager:{
        allmanager: BASE_URL + "/Employee/Manager/GetAll",
        addmanager : BASE_URL + "/Employee/Manager/Add",
        updatemanager : BASE_URL + "/Employee/Manager/Update",
        deletemanager : BASE_URL + "/Employee/Manager/Delete",
        singlemanager : BASE_URL + "/Employee/Manager/GetSingle"
    },
   Headmanager:{
    allHeadmanager : BASE_URL + "/Employee/HeadManager/GetAll",
    addHeadmanager : BASE_URL + "/Employee/HeadManager/Add",
    updateHeadManager : BASE_URL + "/Employee/HeadManager/Update",
    deleteHeadManager : BASE_URL + "/Employee/HeadManager/Delete",
    singleHeadManager : BASE_URL + "/Employee/HeadManager/GetSingle",
   },

   department :{
    allDepartment : BASE_URL + "/Employee/Deparment/GetAll",
    addDepartment : BASE_URL + "/Employee/Deparment/Add",
    singleDepartment : BASE_URL + "/Employee/Deparment/GetSingle",
    updateDepartment : BASE_URL + "/Employee/Deparment/Update",
    deleteDepartment : BASE_URL + "/Employee/Deparment/Delete",
   },

   workAddress : {
    allWorkAddres : BASE_URL + "/Employee/WorkAddress/GetAll",
    addWorkAddress : BASE_URL + "/Employee/WorkAddress/Add" ,
    singleWorkAddress : BASE_URL + "/Employee/WorkAddress/Add",
    upadteWorkAddress : BASE_URL + "/Employee/WorkAddress/Update" ,
    deleteWorkAddress : BASE_URL + "/Employee/WorkAddress/Delete"  
   },

   headDepartment : {
    allHeaddepartment : BASE_URL + "/Employee/HeadDepartment/GetAll",
    addHeaddepartment : BASE_URL + "/Employee/HeadDepartment/Add",
    singleHeaddepartment : BASE_URL +"/Employee/HeadDepartment/GetSingle",
    updateHeaddepartment : BASE_URL + "/Employee/HeadDepartment/Update",
    deleteHeaddepartment : BASE_URL + "/Employee/HeadDepartment/Delete"
   },

   jobposition :{
    getAlljobposition:BASE_URL+ "/Employee/Designation/GetAll",
    getsinglejobposition:BASE_URL+ "/Employee/Designation/GetSingle",
    Addemployeejobposition :BASE_URL+"/Employee/Designation/Add",
    Employeeupdatejobposition:BASE_URL+ "/Employee/Designation/Update",
    Employeedeletejobposition:BASE_URL+ "/Employee/Designation/Delete",
   },
   employee :{
    allEmp :BASE_URL + "/Employee/EmployeesUsers/GetAll",
    addEmp :BASE_URL + "/Employee/EmployeesUsers/Add",
    singleEmp :BASE_URL + "/Employee/EmployeesUsers/GetSingle",
    updateEmp :BASE_URL + "/Employee/EmployeesUsers/Update",
    deleteEmp :BASE_URL + "/Employee/EmployeesUsers/Delete",
   }


};
