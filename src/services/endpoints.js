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
    priceDifference:
      BASE_URL + "/ProductManagement/ProductDifferentPrice/GetAllPDP",
    productUnitAll: BASE_URL + "/ProductsXM/ProductsUnitsAll",
    productType: BASE_URL + "/ProductsXM/GetAllProductType",
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
    allAccGrp: BASE_URL + "/AccountGroup/GetAllACCGrp",
    addAccGrp: BASE_URL + "/AccountGroup/AddACCGrp",
    singleAccGrp: BASE_URL + "/AccountGroup/GetSingleACCGrp",
    updateAccGrp: BASE_URL + "/AccountGroup/UpdateACCGrp",
    deleteAccGrp: BASE_URL + "/AccountGroup/DeleteACCGrp",
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
};
