import React from 'react';
import './ReportCard.css';

const ReportCard = ({ icon: Icon, title, items }) => {
    return (
        <div className="report-card">
            <div className="report-card-header">
                <div className="report-icon-container">
                    <Icon size={18} className="report-icon" />
                </div>
                <h3 className="report-title">{title}</h3>
            </div>
            <ul className="report-list">
                {items.map((item, index) => (
                    <li key={index} className="report-list-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReportCard;
