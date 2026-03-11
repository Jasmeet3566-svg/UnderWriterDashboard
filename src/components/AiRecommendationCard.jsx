import React from 'react';
import { Cpu } from 'lucide-react';
import './AiRecommendationCard.css';

const AiRecommendationCard = () => {
    const strengths = [
        { label: 'Credit Score', value: 'Strong' },
        { label: 'Debt Burden Ratio', value: 'Healthy' },
        { label: 'Household Income', value: 'High' },
        { label: 'Employment', value: 'Stable' },
        { label: 'Financial Cushion', value: 'Positive' },
    ];

    return (
        <div className="ai-rec-container">
            {/* Header */}
            <div className="ai-rec-header">
                <div className="icon-box">
                    <Cpu size={16} className="text-blue-accent" />
                </div>
                <h3 className="ai-rec-title">AI-Based Recommendation</h3>
            </div>

            {/* Stamp Section */}
            <div className="ai-stamp-section">
                <div className="approved-stamp">APPROVED</div>
            </div>

            {/* Strengths Section */}
            <div className="strengths-section">
                <h4 className="strengths-title">Application Strengths:</h4>
                <div className="strengths-list">
                    {strengths.map((item, index) => (
                        <div key={index} className="strength-item">
                            <span className="strength-label">{item.label}</span>
                            <span className="strength-badge">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AiRecommendationCard;
