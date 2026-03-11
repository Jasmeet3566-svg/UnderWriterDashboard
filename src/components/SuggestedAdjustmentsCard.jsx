import React from 'react';
import { Lightbulb, TrendingDown, Check } from 'lucide-react';
import './SuggestedAdjustmentsCard.css';

const SuggestedAdjustmentsCard = () => {
    return (
        <div className="adjustments-card-container">
            {/* Header */}
            <div className="adjustments-header">
                <Lightbulb size={16} className="text-amber" />
                <h3 className="adjustments-title">SUGGESTED ADJUSTMENTS FOR APPROVAL</h3>
            </div>

            <div className="adjustments-content">
                {/* Loan Amount Adjustment */}
                <div className="adjustment-row">
                    <div className="adjustment-details">
                        <div className="adjustment-label">LOAN AMOUNT</div>
                        <div className="adjustment-values">
                            <div className="value-group">
                                <span className="value-label">Current</span>
                                <span className="value-number current">70,00,000</span>
                            </div>
                            <span className="arrow">→</span>
                            <div className="value-group">
                                <span className="value-label">TARGET</span>
                                <span className="value-number target">62,00,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="adjustment-impact impact-green">
                        <TrendingDown size={14} /> Reduces DBR to 74%
                    </div>
                </div>

                {/* Tenure Adjustment */}
                <div className="adjustment-row">
                    <div className="adjustment-details">
                        <div className="adjustment-label">TENURE</div>
                        <div className="adjustment-values">
                            <div className="value-group">
                                <span className="value-label">Current</span>
                                <span className="value-number current">15 Years</span>
                            </div>
                            <span className="arrow">→</span>
                            <div className="value-group">
                                <span className="value-label">TARGET</span>
                                <span className="value-number target">20 Years</span>
                            </div>
                        </div>
                    </div>
                    <div className="adjustment-impact impact-green">
                        <TrendingDown size={14} /> Reduces EMI burden
                    </div>
                </div>

                {/* LTV Adjustment */}
                <div className="adjustment-row border-none">
                    <div className="adjustment-details">
                        <div className="adjustment-label">LTV</div>
                        <div className="adjustment-values">
                            <div className="value-group">
                                <span className="value-label">Current</span>
                                <span className="value-number current">90%</span>
                            </div>
                            <span className="arrow">→</span>
                            <div className="value-group">
                                <span className="value-label">TARGET</span>
                                <span className="value-number target">80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="adjustment-impact impact-green">
                        <Check size={14} /> Meets standard policy
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="adjustments-footer-tip">
                * These adjustments are calculated to bring the application within standard policy thresholds.
            </div>
        </div>
    );
};

export default SuggestedAdjustmentsCard;
