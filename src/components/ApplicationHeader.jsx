import React from 'react';
import './ApplicationHeader.css';

const ApplicationHeader = () => {
    return (
        <div className="app-header-container">
            {/* Left Section - User Details */}
            <div className="app-header-left">
                <div className="blue-indicator"></div>
                <div className="user-details">
                    <h1 className="user-name">Mayank</h1>
                    <div className="user-meta">
                        Application ID: #APP-2023-894 <span className="separator">›</span> Credit Assessment
                    </div>
                </div>
            </div>

            {/* Middle Section - Stats */}
            <div className="app-header-middle">
                <div className="stat-group">
                    <div className="stat-label">BUREAU SCORE</div>
                    <div className="stat-value text-green">768</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-group">
                    <div className="stat-label">LOAN TO VALUE</div>
                    <div className="stat-value text-red">90%</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-group">
                    <div className="stat-label">DEBT BURDEN</div>
                    <div className="stat-value text-orange">80%</div>
                </div>
            </div>

            {/* Right Section - Badges */}
            <div className="app-header-right">
                <div className="badge badge-dark">Approved</div>
                <div className="badge badge-yellow">15 Years</div>
                <div className="badge badge-grey">INR 70,00,000</div>
            </div>
        </div>
    );
};

export default ApplicationHeader;
