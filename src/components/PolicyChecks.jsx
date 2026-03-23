import React, { useState, useEffect } from 'react';
import { Home, Briefcase, FileText, User, CreditCard, Clock, ShieldCheck, UserCheck, CheckCircle2, XCircle } from 'lucide-react';
import './PolicyChecks.css';

const PolicyChecks = () => {
    const [data, setData] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const wiName = urlParams.get('wiName') || 'MORTGAGE-0000001829-RLOS';

    useEffect(() => {
        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/card8/details?wiName=${wiName}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [wiName]);

    const checks = data ? [
        data.loanToValue ? { id: 1, icon: Home, title: 'Loan to Value', subtitle: `${data.loanToValue}%`, status: parseFloat(data.loanToValue) < 85 ? 'pass' : 'fail' } : null,
        data.dbr ? { id: 2, icon: Briefcase, title: 'Debt Burden Ratio', subtitle: `${data.dbr}%`, status: parseFloat(data.dbr) < 65 ? 'pass' : 'fail' } : null,
        data.checkCibil ? { id: 3, icon: FileText, title: 'Bureau Score', subtitle: data.checkCibil, status: parseFloat(data.checkCibil) > 750 ? 'pass' : 'fail' } : null,
        data.age ? { id: 4, icon: User, title: 'Age', subtitle: `${data.age} YRS`, status: parseFloat(data.age) < 60 ? 'pass' : 'fail' } : null,
        data.bankAssessed ? { id: 5, icon: CreditCard, title: 'Income', subtitle: `Rs. ${data.bankAssessed}`, status: parseFloat(data.bankAssessed) > 30000 ? 'pass' : 'fail' } : null,
        data.loanTenure ? { id: 6, icon: Clock, title: 'Tenure', subtitle: `${Math.round(parseFloat(data.loanTenure) / 12)} YRS`, status: Math.round(parseFloat(data.loanTenure) / 12) < 30 ? 'pass' : 'fail' } : null,
        data.cibilVerification ? { id: 7, icon: ShieldCheck, title: 'CIBIL Check', subtitle: data.cibilVerification, status: data.checkCibil ? 'pass' : 'fail' } : null,
        data.verificationStatus ? { id: 8, icon: UserCheck, title: 'KYC Status', subtitle: data.verificationStatus, status: data.verificationStatus ? 'pass' : 'fail' } : null,
    ].filter(check => check !== null) : [];

    const passedCount = checks.filter(check => check.status === 'pass').length;
    const totalCount = checks.length;

    return (
        <div className="policy-checks-container">
            {/* Header */}
            <div className="policy-header">
                <h3 className="policy-title">Policy Checks</h3>
                <div className="policy-score-badge">
                    <span className="text-green font-bold">{passedCount}</span> / {totalCount}
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
