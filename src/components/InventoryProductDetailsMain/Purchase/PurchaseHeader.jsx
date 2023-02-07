import React from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import MainRFQ from '../../../Screens/PurchaseScreen/Invence/MainRFQ';

const PurchaseHeader = (props) => {
    const navigate = useNavigate()
      const { isEdit, setIsEdit, save,Print} = props;
      const RedirectToProduct = () => {
        navigate("/RequestforQuotation");
      };
  return (
     <div className="DetailsMainheader">
      <div className="Detaialsheader">
        <div className="detailsText">
        <p>Request For Quotation</p>
          <div className="detailsbutton">
            {isEdit === false && (
              <button className="btn2"  onClick={RedirectToProduct}>
                Cancel
              </button>
            )}
            {isEdit === true && (
              <button className="btn2"  onClick={RedirectToProduct}>
                Cancel
              </button>
            )}
               {isEdit === false && (
              <button className="btn1" onClick={() => setIsEdit(true)}>
                Edit
              </button>
            )}
            {isEdit === true && (
              <button className="btn1" onClick={save}>
                Save
              </button>
            )}
          </div>
        </div>
        <div className="deatailsdropdown">
   
            <div className="detailsIcons" onClick={Print}>
              <p>Print</p>
              <MdArrowDropDown
                size="20px"
                style={{ marginTop: "4px", color: "#666666" }}
              />
            </div>
       
          {/* <div className="detailsIcons">
                        <p>Action</p>
                        <MdArrowDropDown size="20px" style={{ marginTop: "4px", color: "#666666" }} />
                    </div> */}
        </div>
        {/* <div className="detailsArrow">
                    <p>1 / 80</p>
                    <IoIosArrowBack size="25px" style={{ color: "#666666", marginBottom: "15px" }} />
                    <IoIosArrowForward size="25px" style={{ color: "#666666", marginBottom: "15px", fontWeight: "bold", marginLeft: "10px" }} />
                </div> */}
      </div>
      {/* <div className="detailsheader2">
                <button className='btn3'>Update Quantity</button>
                <button className='btn3'>Replenish</button>
            </div> */}
            {/* <MainRFQ /> */}
    </div>
  )
}

export default PurchaseHeader
