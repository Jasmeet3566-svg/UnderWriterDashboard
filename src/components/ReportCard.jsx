import React, { useState } from 'react';
import './ReportCard.css';

const ReportCard = ({ icon: Icon, title, items }) => {
    const [showAll, setShowAll] = useState(false);
    const maxVisibleItems = 3;
    const displayedItems = showAll ? items : items.slice(0, maxVisibleItems);

    return (
        <div className="report-card">
            <div className="report-card-header">
                <div className="report-icon-container">
                    <Icon size={18} className="report-icon" />
                </div>
                <h3 className="report-title">{title}</h3>
            </div>
            <ul className="report-list">
                {displayedItems.map((item, index) => (
                    <li key={index} className="report-list-item">{item}</li>
                ))}
            </ul>
            {items.length > maxVisibleItems && (
                <div className="report-card-footer">
                    <button className="report-toggle" onClick={() => setShowAll(prev => !prev)}>
                        {showAll ? 'Show less' : `Show more (${items.length - maxVisibleItems})`}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReportCard;
