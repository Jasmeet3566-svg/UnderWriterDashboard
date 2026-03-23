import React, { useState, useEffect } from 'react';
import './ApprovedLoanAmount.css';

const ApprovedLoanAmount = () => {
    const [approvedAmount, setApprovedAmount] = useState('');

    const urlParams = new URLSearchParams(window.location.search);
    const wiName = urlParams.get('wiName') || 'MORTGAGE-0000001829-RLOS';

    useEffect(() => {
        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/card10/details?wiName=${wiName}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.brokerPhone) {
                    const formatted = new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        minimumFractionDigits: 0,
                    }).format(parseFloat(data.brokerPhone));
                    setApprovedAmount(formatted);
                }
            })
            .catch(console.error);
    }, [wiName]);

    return (
        <div className="approved-loan-container">
            <div className="approved-loan-label">APPROVED LOAN AMOUNT</div>
            <div className="approved-loan-value-box">
                <span className="approved-loan-value">{approvedAmount}</span>
            </div>
        </div>
    );
};

export default ApprovedLoanAmount;
