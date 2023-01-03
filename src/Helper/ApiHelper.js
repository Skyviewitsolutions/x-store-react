import axios from "axios";
import { endpoints } from "../services/endpoints"

 const  GetAllData = () => {
    
    const getWarehouse = endpoints.wareHouse.allWarehouse;
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");
    const formData = new FormData();
    formData.append("User_Authorization", getAuthtoken);
    formData.append("User_AuthKey", userAuth);
    axios.post(getWarehouse.formData)
    .then((res) => {
        console.log(res,"response here")
        return res;
    })
    .catch((err) => {
console.log(err,"error here")
    })
}
export default GetAllData