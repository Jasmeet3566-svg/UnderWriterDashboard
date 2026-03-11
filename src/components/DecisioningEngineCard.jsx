import React from 'react';
import { Activity, RefreshCcw, AlertTriangle, Info, ArrowRight } from 'lucide-react';
import './DecisioningEngineCard.css';

const DecisioningEngineCard = () => {
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
            <div className="recommendation-banner decline">
                <div className="banner-left">
                    <div className="stamp-icon decline-stamp">
                        <AlertTriangle size={24} />
                    </div>
                    <div className="banner-text">
                        <div className="banner-label">RECOMMENDATION</div>
                        <div className="banner-value">DECLINE</div>
                        <div className="banner-subtext">High Risk Profile</div>
                    </div>
                </div>
                <div className="banner-right text-right">
                    <div className="confidence-label">CONFIDENCE</div>
                    <div className="confidence-value">95%</div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="decision-stats-row">
                {/* Risk Score */}
                <div className="stat-box risk-score-box">
                    <div className="stat-box-label">RISK SCORE</div>
                    <div className="risk-score-value">
                        <span className="score-main">85</span>
                        <span className="score-sub">/ 100</span>
                    </div>
                    <div className="score-bar-bg">
                        <div className="score-bar-fill" style={{ width: '85%' }}></div>
                    </div>
                </div>

                {/* Primary Drivers */}
                <div className="stat-box drivers-box">
                    <div className="stat-box-label">PRIMARY DRIVERS</div>
                    <div className="drivers-list">
                        <span className="driver-tag">DBR</span>
                        <span className="driver-tag">AML</span>
                        <span className="driver-tag">Mismatch</span>
                    </div>
                </div>
            </div>

            {/* AI Reasoning */}
            <div className="reasoning-box">
                <div className="reasoning-label">AI REASONING</div>
                <p className="reasoning-text">
                    "Multiple critical risk factors including a high Debt Burden Ratio (DBR), a positive AML match, and name mismatches indicate a high probability of default and potential fraud. The combined impact of these parameters exceeds acceptable risk thresholds, warranting a decline decision."
                </p>
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
};

export default DecisioningEngineCard;
