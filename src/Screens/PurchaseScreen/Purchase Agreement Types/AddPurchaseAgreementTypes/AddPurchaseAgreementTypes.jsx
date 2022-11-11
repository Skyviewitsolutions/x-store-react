import React from 'react'
import PurchaseNavbar from '../../PurchaseNavbar'
  import './AddPurchaseAgreementTypes.css'
const AddPurchaseAgreementTypes = () => {
  return (
    <div>
        <PurchaseNavbar showBelowMenu={true} title="Purchase Agreement Types
"/>
        <div className="AddPATContainer">
            <div className="addpatCon">
                    <div className="agrementType">
                        <h1>Agreement Type</h1>
                        <div className="attext">
                            <p>Agreement Type</p>
                            <input type="text" />
                        </div>
                        <div className="atradio">
                            <p>Agreement Selection</p>
                            <div className="asradio">
                                <input type="radio" />
                                <span>Select only one RFQ (exclusive)</span>
                            </div>
                        </div>
                        <div className="atradio">
                            <p>Type</p>
                            <div className="asradio">
                                <input type="radio" />
                                <span>Select multiple RFQ</span>
                            </div>
                        </div>
                    </div>
                    <div className="datafor">
                    <h1>Data for new quotations</h1>
                    <div className="dataradio">
                            <p>Lines</p>
                            <div className="radio">
                            <div className="asradio">
                                <input type="radio" />
                                <span>Use lines of agreement</span>
                            </div>
                            <div className="asradio">
                                <input type="radio" />
                                <span>Do not create RfQ lines automatically</span>
                            </div>
                            </div>
                        </div>
                    <div className="dataradio">
                            <p>Quantities</p>
                            <div className="radio">
                            <div className="asradio">
                                <input type="radio" />
                                <span>Use quantities of agreement</span>
                            </div>
                            <div className="asradio">
                                <input type="radio" />
                                <span>Set quantities manually</span>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AddPurchaseAgreementTypes