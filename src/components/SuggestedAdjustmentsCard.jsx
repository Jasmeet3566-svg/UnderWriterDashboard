import React, { useState, useEffect } from 'react';
import { Lightbulb, TrendingDown, Check } from 'lucide-react';
import './SuggestedAdjustmentsCard.css';

const SuggestedAdjustmentsCard = () => {
    const [data, setData] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const wiName = urlParams.get('wiName') || 'MORTGAGE-0000001829-RLOS';

    useEffect(() => {
        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/suggested-adjustments?wiName=${wiName}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [wiName]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const formatTenure = (months) => {
        return `${(months / 12).toFixed(1)} Years`;
    };

    const formatPercentage = (value) => {
        return `${(value * 100).toFixed(1)}%`;
    };

    const hasLoanAmountData = data?.loanAmount?.current && data?.loanAmount?.target;
    const hasTenureData = data?.tenure?.current && data?.tenure?.target;
    const hasLtvData = data?.ltv?.current && data?.ltv?.target;

    return (
        <div className="adjustments-card-container">
            {/* Header */}
            <div className="adjustments-header">
                <Lightbulb size={16} className="text-amber" />
                <h3 className="adjustments-title">SUGGESTED ADJUSTMENTS FOR APPROVAL</h3>
            </div>

            <div className="adjustments-content">
                {/* Loan Amount Adjustment */}
                {hasLoanAmountData && (
                    <div className="adjustment-row">
                        <div className="adjustment-details">
                            <div className="adjustment-label">LOAN AMOUNT</div>
                            <div className="adjustment-values">
                                <div className="value-group">
                                    <span className="value-label">Current</span>
                                    <span className="value-number current">{formatCurrency(data.loanAmount.current)}</span>
                                </div>
                                <span className="arrow">→</span>
                                <div className="value-group">
                                    <span className="value-label">TARGET</span>
                                    <span className="value-number target">{formatCurrency(data.loanAmount.target)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="adjustment-impact impact-green">
                            <TrendingDown size={14} /> {data.loanAmount.message}
                        </div>
                    </div>
                )}

                {/* Tenure Adjustment */}
                {hasTenureData && (
                    <div className="adjustment-row">
                        <div className="adjustment-details">
                            <div className="adjustment-label">TENURE</div>
                            <div className="adjustment-values">
                                <div className="value-group">
                                    <span className="value-label">Current</span>
                                    <span className="value-number current">{formatTenure(data.tenure.current)}</span>
                                </div>
                                <span className="arrow">→</span>
                                <div className="value-group">
                                    <span className="value-label">TARGET</span>
                                    <span className="value-number target">{formatTenure(data.tenure.target)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="adjustment-impact impact-green">
                            <TrendingDown size={14} /> {data.tenure.message}
                        </div>
                    </div>
                )}

                {/* LTV Adjustment */}
                {hasLtvData && (
                    <div className="adjustment-row border-none">
                        <div className="adjustment-details">
                            <div className="adjustment-label">LTV</div>
                            <div className="adjustment-values">
                                <div className="value-group">
                                    <span className="value-label">Current</span>
                                    <span className="value-number current">{formatPercentage(data.ltv.current)}</span>
                                </div>
                                <span className="arrow">→</span>
                                <div className="value-group">
                                    <span className="value-label">TARGET</span>
                                    <span className="value-number target">{formatPercentage(data.ltv.target)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="adjustment-impact impact-green">
                            <Check size={14} /> {data.ltv.message}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Text */}
            <div className="adjustments-footer-tip">
                * These adjustments are calculated to bring the application within standard policy thresholds.
            </div>
        </div>
    );
};

export default SuggestedAdjustmentsCard;
