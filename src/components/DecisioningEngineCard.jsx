import React, { useState, useEffect } from 'react';
import { Activity, RefreshCcw, AlertTriangle, Info, ArrowRight, CheckCircle } from 'lucide-react';
import './DecisioningEngineCard.css';

const DecisioningEngineCard = () => {
    const [data, setData] = useState(null);
    const [showAllDrivers, setShowAllDrivers] = useState(false);
    const [showAllReasoning, setShowAllReasoning] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const wiName = urlParams.get('wiName') || 'MORTGAGE-0000001829-RLOS';

    useEffect(() => {
        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/card6/details?wiName=${wiName}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [wiName]);

    const eligibilityScore = data ? parseFloat(data.eligibilityStatus) : 0;
    const riskScore = Math.round(eligibilityScore / 10); // assuming 709 -> 71
    const isApproved = eligibilityScore >= 700;
    const recommendation = isApproved ? 'APPROVE' : 'DECLINE';
    const subtext = isApproved ? 'Low Risk Profile' : 'High Risk Profile';
    const bannerClass = isApproved ? 'approve' : 'decline';
    const StampIcon = isApproved ? CheckCircle : AlertTriangle;

    const reasoningText = data?.keyStrength || '';
    const reasoningLines = reasoningText.split('\n').filter(Boolean);
    const shouldTruncate = reasoningLines.length > 5 && !showAllReasoning;
    const displayedReasoning = shouldTruncate ? reasoningLines.slice(0, 5).join('\n') : reasoningText;

    return (
        <div className="decision-card-container">
            {/* Header */}
            <div className="decision-header">
                <div className="decision-title-group">
                    <Activity size={20} className="text-indigo" />
                    <h2 className="decision-title">DECISIONING ENGINE</h2>
                </div>
                <div className="decision-header-actions">
                    <button className="refresh-btn">
                        <RefreshCcw size={14} />
                    </button>
                    <div className="ai-powered-badge">
                        <span className="dot text-indigo">•</span> AI POWERED
                    </div>
                </div>
            </div>

            {/* Main Recommendation Banner */}
            <div className={`recommendation-banner ${bannerClass}`}>
                <div className="banner-left">
                    <div className="stamp-icon">
                        <StampIcon size={24} />
                    </div>
                    <div className="banner-text">
                        <div className="banner-label">RECOMMENDATION</div>
                        <div className="banner-value">{recommendation}</div>
                        <div className="banner-subtext">{subtext}</div>
                    </div>
                </div>
                
            </div>

            {/* Stats Row */}
            <div className="decision-stats-row">
                {/* Risk Score */}
                <div className="stat-box risk-score-box">
                    <div className="stat-box-label">RISK SCORE</div>
                    <div className="risk-score-value">
                        <span className="score-main">{riskScore}</span>
                        <span className="score-sub">/ 100</span>
                    </div>
                    <div className="score-bar-bg">
                        <div className="score-bar-fill" style={{ width: `${riskScore}%` }}></div>
                    </div>
                </div>

                {/* Primary Drivers */}
                <div className="stat-box drivers-box">
                    <div className="stat-box-label">PRIMARY DRIVERS</div>
                    <div className="drivers-list">
                        {(showAllDrivers ? data?.gridParameter : data?.gridParameter?.slice(0, 2))?.map((param, index) => (
                            <span key={index} className="driver-tag">{param}</span>
                        ))}
                        {!showAllDrivers && data?.gridParameter && data.gridParameter.length > 2 && (
                            <span className="driver-tag read-more" onClick={() => setShowAllDrivers(true)}>+{data.gridParameter.length - 2} more</span>
                        )}
                    </div>
                </div>
            </div>

            {/* AI Reasoning */}
            <div className="reasoning-box">
                <div className="reasoning-label">AI REASONING</div>
                <div className="reasoning-scroll-container">
                    <p className="reasoning-text">
                        {displayedReasoning}
                    </p>
                </div>
                {reasoningLines.length > 5 && (
                    <div className="read-more-row">
                        <button className="read-more-link" onClick={() => setShowAllReasoning(prev => !prev)}>
                            {showAllReasoning ? 'Read less' : 'Read more'}
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="decision-footer">
                <div className="last-updated">
                    <Info size={14} />
                    <span>Last updated: Just now</span>
                </div>
                <button className="override-btn">
                    OVERRIDE DECISION <ArrowRight size={14} />
                </button>
            </div>
        </div>
    );
}

export default DecisioningEngineCard;
