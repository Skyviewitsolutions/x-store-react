import React from 'react'
import Navebar from '../../../components/Navbar/Navbar';
import './AddAtrribute.css'
const AddAtrribute = () => {
  return (
    <div>
           <Navebar showBelowMenu={true}/>
           <div className="AddAtrributeCon">
              <div className="AddAtrributemain">
                  <div className="AddAttributedetails">
                    <div className="Attributename">
                    <p>Attribute Name</p>
                   <input type="text" />
                    </div>
                    <div className="variable">
                        <p>Variable creation mode</p>
                        <div className="radio">
                            <div>
                            <input type="radio" />  <label>Instantly</label>
                            </div>
                          <div>
                          <input type="radio" />  
                          <label>Dynamically</label>
                          </div>
                          <div>
                          <input type="radio" />  
                          <label>Never</label>
                          </div>
                        </div>
                        </div>
                    </div>
                    <div className="AttributeValues">
                        <div className="values">  
                        <p>Attribute Values</p>
                        </div>
                    </div>
                    <div className='AddValues'>
        <div className="AddAttributes">
        <div className="AddAttributeContent1">
            <p>Values</p>
        </div>
        </div>
        <div className="AddAtrributebox">
             <p>Add Line</p>
         
        </div>
    </div>
  </div>
    </div>
        </div>
        
  )
}

export default AddAtrribute