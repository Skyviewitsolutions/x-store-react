import React from "react";

const RFQOtherInfo = (props) => {
  const { singleRFQ } = props;
  return (
    <div className="rfq_products">
      <div className="row">
        <div className="col-lg-6">
          <div className="reqQuotext">
            <p>Receipt Date</p>
            <span>{singleRFQ.RECEIPT_DATE}</span>
          </div>
          <div className="reqQuotext">
            <p>Incoterm</p>
            <span>{singleRFQ.INCOME_NAME}</span>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="reqQuotext">
            <p>Purchase Representative</p>
            <span>{singleRFQ.PURCHASE_REPRESENTATIVE}</span>
          </div>
          <div className="reqQuotext">
            <p>Fiscal Position</p>
            <span>{singleRFQ.FISCAL_POSITION}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFQOtherInfo;
