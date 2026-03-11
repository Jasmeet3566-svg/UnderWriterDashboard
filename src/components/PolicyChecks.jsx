import React from 'react';
import { Home, Briefcase, FileText, User, CreditCard, Clock, ShieldCheck, UserCheck, CheckCircle2, XCircle } from 'lucide-react';
import './PolicyChecks.css';

const PolicyChecks = () => {
    const checks = [
        { id: 1, icon: Home, title: 'Loan to Value', subtitle: '75%', status: 'pass' },
        { id: 2, icon: Briefcase, title: 'Debt Burden Ratio', subtitle: '75%', status: 'pass' },
        { id: 3, icon: FileText, title: 'Bureau Score', subtitle: '550', status: 'fail' },
        { id: 4, icon: User, title: 'Age', subtitle: '40 YRS', status: 'pass' },
        { id: 5, icon: CreditCard, title: 'Income', subtitle: 'Rs. 40,000', status: 'fail' },
        { id: 6, icon: Clock, title: 'Tenure', subtitle: '75%', status: 'pass' },
        { id: 7, icon: ShieldCheck, title: 'CIBIL Check', subtitle: 'VERIFIED', status: 'pass' },
        { id: 8, icon: UserCheck, title: 'KYC Status', subtitle: 'VERIFIED', status: 'pass' },
    ];

    return (
        <div className="policy-checks-container">
            {/* Header */}
            <div className="policy-header">
                <h3 className="policy-title">Policy Checks</h3>
                <div className="policy-score-badge">
                    <span className="text-green font-bold">6</span> / 8
                </div>
            </div>

            {/* Checks List */}
            <div className="policy-list">
                {checks.map((check) => {
                    const Icon = check.icon;
                    return (
                        <div key={check.id} className="policy-item">
                            <div className="policy-item-left">
                                <div className="policy-icon-wrapper">
                                    <Icon size={16} />
                                </div>
                                <div className="policy-item-details">
                                    <div className="policy-item-title">{check.title}</div>
                                    <div className="policy-item-subtitle">{check.subtitle}</div>
                                </div>
                            </div>
                            <div className="policy-item-right">
                                {check.status === 'pass' ? (
                                    <CheckCircle2 size={18} className="text-green" />
                                ) : (
                                    <XCircle size={18} className="text-red" />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer link */}
            <div className="policy-footer">
                <a href="#" className="policy-link">VIEW DETAILED POLICY REPORT</a>
            </div>
        </div>
    );
};

export default PolicyChecks;
