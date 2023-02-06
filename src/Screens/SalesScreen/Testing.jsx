import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const Testing = () => {
    
  const [selectedValue, setSelectedValue] = useState();

    const options = [
    { name: "VAT Goods Purchases-STD (Purchases)", id: 1 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 2 },
    { name: "Purchasing", id: 3 },
    { name: "Sales VAT-STD (Sales)", id: 4 },
    { name: "Sales VAT-Zero Rated (Sales)", id: 5 },
  ];
  const option = [
    { name: "Operating Activities", id: 1 },
    { name: "Financing Activities", id: 2 },
    { name: "Investing & Extraordinary Activities", id: 3 },
  ];
  const onSelect1 = (selectedList, selectedItem) => {
    setArrValue(selectedList);
    console.log(selectedList,"slll")
    var dta = selectedList.map((item ,ind) => {
        return item.name
    })
   setArrValue2(dta)
  };

  const onRemove1 = (selectedList, removedItem) => {
    setArrValue(selectedList);
  };

  const [arrValue2,setArrValue2] = useState([])
  
    const [arrValue , setArrValue] = useState([]);
    const [arrName , setArrName] = useState([]);
    const [quantity , setQuantity] = useState([]);
    const [ammount , setAmmount] = useState([]);
    const testingUrl = "https://xstore.skyviewads.com/Testing/AddTest";

    console.log(arrName,"arrName")
    console.log(arrValue,"arrValue")

    const save = () => {
  const formData = new FormData()
  formData.append("Array_Value" ,arrValue2.toString());
  formData.append("Array_Name" ,arrName.toString());
  formData.append("Amount" ,ammount.toString());
  formData.append("Qty" ,quantity.toString());
   axios.post(testingUrl ,formData)
   .then((res) => {
    console.log(res,"response")
    if(res.data.status === true){
        toast("Testing Added successfully ",{type:"success"})
    }else if(res.data.status === false) {
        toast(res.data.message,{type:"error"})
    }
   })
   .catch((err) => {
    console.log(err,"erorr")
   })
    }

    const [getTestings , setGetTestings] = useState([])
    const getTesting = "https://xstore.skyviewads.com/Testing/GetArray";

    useEffect(() => {
axios.get(getTesting)
.then((res) => {
    console.log(res,"responsze")
    if(res.data.status === true){
        setGetTestings(res.data.data)
    }else if(res.data.status === false){
        toast(res.data.message,{type:"error"})
    }
})
.catch((err) => {
    console.log(err,"some thing went wrong")
})
    },[])


    // ----------------------------testing multiselect-------------------------------

    const multiSelectUrl = "https://xstore.skyviewads.com/Testing/AddTest"
    const getMultiselect = () => {

      const arr = [
        "Manisha","Anshika","12345","Sar"
      ]
      const formData = new FormData
      formData.append("Array_Value",arr)
      formData.append("Array_Name","that")
      formData.append("Amount","1213")
      formData.append("Qty","test")
      
      axios.post(multiSelectUrl,formData)
      .then((res) => {
        if(res.data.status === true){
          toast(res.data.message,{type:"success"})
        }
        else if(res.data.status === false){
          toast(res.data.message,{type:"error"})
        }
      })
      .catch((err) => {
        console.log(err,"error")
      })
    }

    useEffect(() => {
      getMultiselect()
    },[])

  return (
    <div>
        <div className="main_test">
        <div className="emp_mob">
                <p>Array Value</p>
                 <Multiselect
                className="AddChartAccmultiselect"
                options={options} // Options to display in the dropdown
                selectedValues={arrValue} // Preselected value to persist in dropdown
                onSelect={onSelect1} // Function will trigger on select event
                onRemove={onRemove1} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> 
              </div>
        <div className="emp_mob">
                <p>Array Name</p>
                <input type="text" value={arrName} onChange={(e) => setArrName(e.target.value)}/>
              </div>
        <div className="emp_mob">
                <p>Quantity</p>
                <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
              </div>
        <div className="emp_mob">
                <p>Ammount</p>
                <input type="text" value={ammount} onChange={(e) => setAmmount(e.target.value)}/>
              </div>
        </div>
        <button className='savebtn' onClick={save}>Save</button>
        <ToastContainer/>
    </div>
  )
}

export default Testing

