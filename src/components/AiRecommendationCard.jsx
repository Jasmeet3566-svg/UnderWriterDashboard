import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';
import './AiRecommendationCard.css';

const AiRecommendationCard = () => {
    const [data, setData] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const wiName = urlParams.get('wiName') || 'MORTGAGE-0000001829-RLOS';

    useEffect(() => {
        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/card3/details?wiName=${wiName}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [wiName]);

    const strengths = data ? [
        data.checkCibil ? {
            label: 'Credit Score',
            value: parseFloat(data.checkCibil) >= 750 ? 'Strong' : 'Weak',
            status: parseFloat(data.checkCibil) >= 750 ? 'approve' : 'decline'
        } : null,
        data.dbr ? {
            label: 'Debt Burden Ratio',
            value: parseFloat(data.dbr) <= 35 ? 'Healthy' : 'Distressed',
            status: parseFloat(data.dbr) <= 35 ? 'approve' : 'decline'
        } : null,
        data.bankAssessed ? {
            label: 'Household Income',
            value: parseFloat(data.bankAssessed) >= 30000 ? 'High' : 'Low',
            status: parseFloat(data.bankAssessed) >= 30000 ? 'approve' : 'decline'
        } : null,
        data.yearsCompany ? {
            label: 'Employment',
            value: parseFloat(data.yearsCompany) >= 2 ? 'Stable' : 'Unstable',
            status: parseFloat(data.yearsCompany) >= 2 ? 'approve' : 'decline'
        } : null
    ].filter(item => item !== null) : [];

    const allApproved = strengths.length > 0 && strengths.every(item => item.status === 'approve');

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
                <div className="approved-stamp" style={allApproved ? {} : {color: '#ef4444', borderColor: '#ef4444'}}>{allApproved ? 'APPROVED' : 'DECLINED'}</div>
            </div>

            {/* Strengths Section */}
            <div className="strengths-section">
                <h4 className="strengths-title">Application Strengths:</h4>
                <div className="strengths-list">
                    {strengths.map((item, index) => (
                        <div key={index} className="strength-item">
                            <span className="strength-label">{item.label}</span>
                            <span className="strength-badge" style={{backgroundColor: item.status === 'approve' ? '#4ade80' : '#ef4444'}}>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AiRecommendationCard;
