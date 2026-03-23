import React, { useState, useEffect } from 'react';
import './ApplicationHeader.css';

const ApplicationHeader = () => {
    const [data, setData] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const wiName = urlParams.get('wiName') || 'MORTGAGE-0000001829-RLOS';
    const customerName = urlParams.get('customerName') || 'Mayank';
    const stractivityName = urlParams.get('stractivityName') || 'Credit Assessment';

    useEffect(() => {
        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/api/details/${wiName}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [wiName]);

    const isApproved = data ? 
        (parseFloat(data.bureauScore) > 750 && 
         parseFloat(data.loanToValue) < 85 && 
         parseFloat(data.debtBurden) < 65) : false;
    const approvedStatus = isApproved ? 'Approved' : 'Not Eligible';

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="app-header-container">
            {/* Left Section - User Details */}
            <div className="app-header-left">
                <div className="blue-indicator"></div>
                <div className="user-details">
                    <h1 className="user-name">{customerName}</h1>
                    <div className="user-meta">
                        Application ID: {wiName} <span className="separator">›</span> {stractivityName}
                    </div>
                </div>
            </div>

            {/* Middle Section - Stats */}
            <div className="app-header-middle">
                <div className="stat-group">
                    <div className="stat-label">BUREAU SCORE</div>
                    <div className="stat-value text-green">{data && data.bureauScore ? data.bureauScore : ''}</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-group">
                    <div className="stat-label">LOAN TO VALUE</div>
                    <div className="stat-value text-red">{data && data.loanToValue ? `${data.loanToValue}%` : ''}</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-group">
                    <div className="stat-label">DEBT BURDEN</div>
                    <div className="stat-value text-orange">{data && data.debtBurden ? `${data.debtBurden}%` : ''}</div>
                </div>
            </div>

            {/* Right Section - Badges */}
            <div className="app-header-right">
                <div className="badge badge-dark">{approvedStatus}</div>
                <div className="badge badge-yellow">{data && data.loanTenureYears ? `${Math.round(data.loanTenureYears)} Years` : ''}</div>
                <div className="badge badge-grey">{data && data.loanAmount ? formatCurrency(data.loanAmount) : ''}</div>
            </div>
        </div>
    );
};

export default ApplicationHeader;
