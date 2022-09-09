const BASE_URL = "https://xstore.skyviewads.com";

export  const endpoints =  {
    products : {
        addProduct : BASE_URL + "/ProductManagement/ProductManagement/AddProduct",
        allProduct : BASE_URL + "/ProductManagement/ProductManagement/GetAllProduct",
        singleProduct : BASE_URL + "/ProductManagement/ProductManagement/GetSingleProduct",
        updateProduct : BASE_URL + "/ProductManagement/ProductManagement/UpdateProduct",
        deleteProduct : BASE_URL + "/ProductManagement/ProductManagement/DeleteProduct",
        incomeAcoount : BASE_URL + "/AccountDepartment/ProductIncome/GetAllPI",
        expenseAccount : BASE_URL + "/AccountDepartment/ExpenseAccount/GetAllExp",
        priceDifference : BASE_URL + "/ProductManagement/ProductDifferentPrice/GetAllPDP",
        productUnitAll : BASE_URL + "/ProductsXM/ProductsUnitsAll",
    } ,
    wareHouse : {
        addWarehouse : BASE_URL + "/WareHouse/WareHouseAddress/AddWareHouse",
        allWarehouse : BASE_URL + "/WareHouse/WareHouseAddress/GetAllWareHouse" ,
        singleWarehouse : BASE_URL + "/WareHouse/WareHouseAddress/GetSingleWarehouse",
        updateWarehouse : BASE_URL + "/WareHouse/WareHouseAddress/UpdateWareHouse",
        deleteWarehouse : BASE_URL + "/WareHouse/WareHouseAddress/DeleteWareHouse",
    },
    location : {
        addLocation : BASE_URL + "/WareHouse/LocationMaster/AddLocation",
        allLocation : BASE_URL + "/WareHouse/LocationMaster/GetAllLoc",
        singleLocation : BASE_URL + "/WareHouse/LocationMaster/GetSingleLocation",
        updateLocation : BASE_URL + "/WareHouse/LocationMaster/UpdateLocation",
        deleteLocation : BASE_URL + "/WareHouse/LocationMaster/DeleteLocation",
        locationType : BASE_URL + "/WareHouse/LocationTypeXs/GetAllLoc"
    },
    productCategory:{
       addProductCategory: BASE_URL + "/ProductsXM/AddProduct_Category",
       allProductCate : BASE_URL + "/ProductsXM/DisplayAllProductCategory",
       singleProductCate : BASE_URL + "/ProductsXM/GetSingleProductCat",
       updateProductCate : BASE_URL + "/ProductsXM/product_Categoryupdate",
       deleteProductCate : BASE_URL + "/ProductsXM/DeleteProduct_Category",
    },
    UOM:{
       addUOM : BASE_URL + "/Units/AddUnitOfMeasurement",
       allUOM : BASE_URL + "/Units/GetAllUOM",
       singleUOM : BASE_URL + "/Units/GetSingleUOM",
       updateUOM : BASE_URL + "/Units/UpdateUOM",
       deleteUOM : BASE_URL + "/Units/DeleteUOM",
     },
     UomCategory:{
       allUomCate : BASE_URL + "/ProductsUnitsAll",
       addUomCate : BASE_URL + "/ProductsUnitsAdd",
       updateUomCate : BASE_URL + "/UpdateUnits",
       deleteUomCate : BASE_URL + "/deleteproductunits",
     },
     OpertionType:{
        allOpertaionType: BASE_URL + "/OperationType/GetAllOperationType",
        addOperationType: BASE_URL + "/OperationType/AddOperationType",
        singleOperationType: BASE_URL + "/OperationType/GetSingleOperationType",
        updateOperationType: BASE_URL + "/OperationType/UpdateOperationType",
        deleteOperationType: BASE_URL + "/OperationType/DeleteOperationType"
     },

    authentication : {
        login : BASE_URL + "/UserLogin/login",
        signUp : BASE_URL + "/UserLogin/signup",
        changePassword : BASE_URL + "/UserLogin/ChangePassword",
        forgatPassword : BASE_URL + "/UserLogin/ForgatPassword",
    }  ,
    Attribute:{
        allattribute:BASE_URL + "/Attribute/GetAllAttribute",
        addallattribute:BASE_URL + "/Attribute/AddAttribute",
        singleattribute:BASE_URL + "/Attribute/GetSingleAttribute",
        updateatrriute:BASE_URL + "/Attribute/UpdateAttribute",
        deleteattribute:BASE_URL + "/Attribute/DeleteAttribute",
    } ,
    
    //----------- Accounting Api---------->
    Currency:{
        allCurrency:BASE_URL + "/Currency/GetAllCurrency",
        addCurrency:BASE_URL + "/Currency/AddCurrency",
        singleCurrency:BASE_URL + "/Currency/GetSingleCurrency",
        updateCurrency:BASE_URL + "/Currency/UpdateCurrency",
        deleteCurrency:BASE_URL + "/Currency/DeleteCurrency"
    },
    AccountTag:{
        allAccountTag:BASE_URL + "/AccountTag/GetAllAccTag",
        addAccountTag:BASE_URL + "/AccountTag/AddAccTag",
        singleAccountTag:BASE_URL + "/AccountTag/GetSingleAccTag",
        updateAccountTag:BASE_URL + "/AccountTag/UpdAccTag",
        deleteAccountTag:BASE_URL + "/AccountTag/DelAccTag",
    },
    AccountType:{
        allAccountType:BASE_URL + "/AccountType/GetAllACT",
        addAccountType:BASE_URL + "/AccountType/AddACT",
        singleAccountType:BASE_URL + "/AccountType/GetSingleACT",
        updateAccountType:BASE_URL + "/AccountType/UPDACT",
        deleteAccountType:BASE_URL + "/AccountType/DelACT"
    },
    TaxName:{
        allTaxName:BASE_URL + "/Accounting/GetAllAccounting",
        addTaxName: BASE_URL + "/Accounting/AddAccounting",
        singleTax: BASE_URL + "/Accounting/GetSingleAccounting",
        updateTaxName: BASE_URL + "/Accounting/UpdateAccounting",
        deleteTaxName: BASE_URL + "/Accounting/DeleteAccounting",
    },
    JournalGroup:{
        allJournalGroup:BASE_URL + "/JournalGroup/GetAllJG",
        addJournalGroup:BASE_URL + "/JournalGroup/AddJG",
        singleJournalGroup:BASE_URL + "/JournalGroup/GetSingleJG",
        updateJournalGroup:BASE_URL + "/JournalGroup/UpdateJG",
        deleteJournalGroup:BASE_URL + "/JournalGroup/DeleteJG"
    }

}