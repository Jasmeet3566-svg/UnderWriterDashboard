import React from 'react';
import './ApprovedLoanAmount.css';

const ApprovedLoanAmount = () => {
    return (
        <div className="approved-loan-container">
            <div className="approved-loan-label">APPROVED LOAN AMOUNT</div>
            <div className="approved-loan-value-box">
                <span className="approved-loan-value">INR 50,000</span>
            </div>
        </div>
    );
};

export default ApprovedLoanAmount;
