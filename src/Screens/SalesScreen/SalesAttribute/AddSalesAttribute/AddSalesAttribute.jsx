import React from "react";
import SalesNavbar from "../../SalesNavbar/SalesNavbar";
import "./AddSalesAttribute.css";
const AddSalesAttribute = () => {
  const handleCreatePage = () => {};
  return (
    <div>
      <SalesNavbar
        showBelowMenu={true}
        title="Attribute"
        handleCreatePage={handleCreatePage}
      />
      <div className="AddAtrributeCon">
        <div className="AddAtrributemain">
          <div className="AddAttributedetails">
            <div className="Attributename">
              <p>Attribute Name</p>
              <input type="text" />
            </div>
            <div className="variable">
              <p>Display Type</p>
              <div className="radio" name="variable">
                <div>
                  <input type="radio" name="variable" />{" "}
                  <label>Radio</label>
                </div>
                <div>
                  <input type="radio" name="variable" />
                  <label>Select</label>
                </div>
                <div>
                  <input type="radio" name="variable" />
                  <label>Color</label>
                </div>
              </div>
            </div>
            <div className="variable">
              <p>Variable creation mode</p>
              <div className="radio" name="variable">
                <div>
                  <input type="radio" name="variable" />{" "}
                  <label>Instantly</label>
                </div>
                <div>
                  <input type="radio" name="variable" />
                  <label>Dynamically</label>
                </div>
                <div>
                  <input type="radio" name="variable" />
                  <label>Never</label>
                </div>
              </div>
            </div>
          </div>
          <div className="Attributename">
            <p>Attribute Values</p>
            <input type="text"  />
          </div>
          {/* <div className='AddValues'>
        <div className="AddAttributes">
        <div className="AddAttributeContent1">
            <p>Values</p>
        </div>
        </div>
        <div className="AddAtrributebox">
             <p>Add Line</p>
         
        </div>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddSalesAttribute;
