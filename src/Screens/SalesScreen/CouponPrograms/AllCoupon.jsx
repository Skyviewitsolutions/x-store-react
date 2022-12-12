import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import CustomTable from '../../../components/CustomTable/CustomTable';

const AllCoupon = () => {

    const navigate = useNavigate();
    const [allCode , setAllCode] = useState([])
    const getAuthtoken = localStorage.getItem("authtoken");
    const userAuth = localStorage.getItem("userAuth");

    const allCodeUrl = "https://xstore.skyviewads.com/SalesDepartment/CouponCode/GetAll";

    useEffect(() => {
        const formData = new FormData()
        formData.append("User_Authorization" , getAuthtoken);
        formData.append("User_AuthKey" , userAuth);
        axios
        .post(allCodeUrl, formData)
        .then((res) => {
          if (res.data.status === true) {
            setAllCode(res.data.data);
          } else if (res.data.status === false) {
            if (res.data.code === 3) {
              toast("Session expired , Please re-login", { type: "warning" });
              navigate("/");
            } else {
              toast(res.data.message, { type: "error" });
            }
          }
        })
        .catch((err) => {
          console.log(err, "something went wrong");
        });
    },[])

  
  return (
    <div>
        <Table bordered hover>
     
            {allCode.map((itm,ind) => {
         return(
            <>
                <tr>
                <td>
                <p>{itm.COUPON_CODE}</p>
                </td>
                <td>
                <img src={itm.BARCODE} />
                </td>
                </tr>
            </>
         )
          
         })}

            
        </Table>
         <ToastContainer />
    </div>
  )
}

export default AllCoupon

