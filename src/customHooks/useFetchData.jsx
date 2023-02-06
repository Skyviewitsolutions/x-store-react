import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {

  const getAuthtoken = localStorage.getItem("authtoken");
  const userAuth = localStorage.getItem("userAuth");
  const [data, setData] = useState([]);

  const formData = new FormData();
  formData.append("User_Authorization", getAuthtoken);
  formData.append("User_AuthKey", userAuth);

  useEffect(() => {
    axios
      .post(url, formData)
      .then((res) => {
        if (res.data.status) {
          var val = res.data.data;
          setData(val);
        }
      })
      .catch((err) => {
        console.log(err);
      });

   
  }, [url]);

  return [data];
};

export default useFetchData;
