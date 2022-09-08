import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar'
import './AddDifferedType.css'
const AddDifferedType = () => {
  return (
    <>
    <AccountNavbar showBelowMenu={true}  title="Differed Expense Type" />
    <div className="AddAssetTypeCon">
      <div className="assetType">
        <p>Deferred Expense Type</p>
        <input type="text" />
      </div>
      <div className="assetTypetextbox">
        <div className="assetTypeparent">
          <div className="parentcat">
            <p>Parent Category</p>
            <select>
              <option></option>
              <option>The machine and equipments</option>
              <option>The Cars</option>
              <option>Prehab houses</option>
              <option>Leaseholds improvements</option>
              <option>Lab equipments</option>
            </select>
          </div>
          <div className="parentcat">
            <p>Is Virtual</p>
            <input type="checkbox" />
          </div>
        </div>
        <div className="assettypebox">
          <p>Hierarchy</p>
          <div className="assetalertbox">
            <p>No hierarchy position.</p>
          </div>
        </div>
      </div>
      <div className="assetTypedetails">
        <div className="assetdetails1">
          <p>Journal Entries</p>
          <div className="assettext">
            <p>Journal</p>
            <select>
              <option></option>
              <option>Asset Account</option>
              <option>Deferred Expense Account</option>
              <option>Deferred Revenue Account</option>
              <option>Recognition Entries Account</option>
            </select>
          </div>
          <div className="assettext">
            <p>Asset Account</p>
            <select>
              <option></option>
              <option>110101001 Riyadh Management Found</option>
              <option>110101002 Zulfi Box</option>
              <option>110101003 Hoffuf Found</option>
              <option>110101004 Patito Box</option>
              <option>110101005 Bisha Box</option>
            </select>
          </div>
          <div className="assettext">
            <p>Depreciation Entries: Asset Account</p>
            <select>
              <option></option>
              <option>110101001 Riyadh Management Found</option>
              <option>110101002 Zulfi Box</option>
              <option>110101003 Hoffuf Found</option>
              <option>110101004 Patito Box</option>
              <option>110101005 Bisha Box</option>
            </select>
          </div>
          <div className="assettext">
            <p>Depreciation Entries: Expense Accountt</p>
            <select>
              <option></option>
              <option>110101001 Riyadh Management Found</option>
              <option>110101002 Zulfi Box</option>
              <option>110101003 Hoffuf Found</option>
              <option>110101004 Patito Box</option>
              <option>110101005 Bisha Box</option>
            </select>
          </div>
          <div className="assettext">
            <p>Analytic Account</p>
            <select>
              <option></option>
              <option>Al Aflaj Project</option>
              <option>Al Bahah Administration</option>
              <option>Al Bahah Warehouse</option>
              <option>Al Bahah Workshop</option>
              <option>Al Majma'ah 108 Projec</option>
            </select>
          </div>
        </div>
        <div className="assettypedetails2">
          <p>Periodicity</p>
          <div className="assetradio">
            <p>Time Method Based On</p>
            <input type="radio" name="method"/>
            <label>Number of Entries</label>
          </div>
          <div className="assetradio">
            <p></p>
            <input type="radio" name="method"/>
            <label>Ending Date</label>
          </div>
          <div className="assettext2">
            <p>Number of Entries</p>
            <input type="text" />
           </div>
          <div className="assettext2">
            <p>One Entry Every</p>
            <input type="text" />
            <span>Months</span>
           </div>
        </div>
      </div>
      <div className="AssettypeAddiDepri">
        <div className="Additional">
          <p>Additional Options</p>
          <div className="assettypecheckbox">
            <p>Auto-confirm Assets</p>
            <input type="checkbox" />
          </div>
          <div className="assettypecheckbox">
            <p>Group Journal Entries</p>
            <input type="checkbox" />
          </div>
          <div className="assettypeselect">
            <p>Automatic Creation</p>
            <select>
              <option></option>
              <option>Invoice</option>
              <option>Material Receipts</option>
              <option>Purchase Order</option>
            </select>
          </div>
          <div className="assettypecheckbox">
            <p>Create record for each quantity</p>
            <input type="checkbox" />
          </div>
        </div>
        <div className="Depreciation">
          <p>Depreciation Method</p>
          <div className="distradio">
            <p>Computation Method</p>
            <input type="radio" name="method"/>
            <label>Linear</label>
          </div>
          <div className="distradio">
            <p></p>
            <input type="radio" name="method" />
            <label>Degressive</label>
          </div>
          <div className="depcheckbox">
            <p>Accordance with the time</p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddDifferedType