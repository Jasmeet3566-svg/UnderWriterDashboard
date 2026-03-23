import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import './RiskAnalysisTable.css';

const RiskAnalysisTable = () => {
    const [data, setData] = useState(null);
    const [userName, setUserName] = useState('');

    const urlParams = new URLSearchParams(window.location.search);
    const wiName = urlParams.get('wiName') || 'MORTGAGE-0000001829-RLOS';

    useEffect(() => {
        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/card5/details?wiName=${wiName}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);

        fetch(`https://tytlmsdemo.newgensoftware.net/underwriterbackend/details?wiName=${wiName}`)
            .then(res => res.json())
            .then(userData => {
                if (userData && userData.firstName && userData.lastName) {
                    setUserName(`${userData.firstName} ${userData.lastName}`);
                }
            })
            .catch(console.error);
    }, [wiName]);

    const getOutput = (param, value) => {
        const num = parseFloat(value);
        switch (param) {
            case 'DBR':
                if (num > 35) return 'Rejected';
                if (num > 25) return 'Review';
                return 'Approved';
            case 'AML':
                return value === 'Positive' ? 'Rejected' : 'Approved';
            case 'LTV':
                if (num > 75) return 'Rejected';
                if (num > 60) return 'Review';
                return 'Approved';
            case 'Score':
                if (num < 30) return 'Rejected';
                if (num < 60) return 'Review';
                return 'Approved';
            case 'PD':
                if (num > 60) return 'Rejected';
                if (num > 40) return 'Review';
                return 'Approved';
            default:
                return 'Review';
        }
    };

    const getBadgeColor = (output) => {
        switch (output.toLowerCase()) {
            case 'approved': return '#34d399'; // light green
            case 'review': return '#f59e0b'; // orange
            case 'rejected': return '#ef4444'; // red
            default: return '#6b7280'; // gray
        }
    };

    const tableData = data ? [
        data.dbr ? { parameter: 'DBR', value: `${data.dbr}%`, expected: '<75%', output: getOutput('DBR', data.dbr) } : null,
        data.checkAml ? { parameter: 'AML', value: data.checkAml, expected: 'Negative', output: getOutput('AML', data.checkAml) } : null,
        data.loanToValue ? { parameter: 'LTV', value: `${data.loanToValue}%`, expected: '<80%', output: getOutput('LTV', data.loanToValue) } : null,
        data.score ? { parameter: 'Score', value: data.score, expected: '>450', output: getOutput('Score', data.score) } : null,
        data.probabilityOfDefault ? { parameter: 'PD', value: `${data.probabilityOfDefault}%`, expected: '<40%', output: getOutput('PD', data.probabilityOfDefault) } : null,
        data.bankAssessedIncome ? { parameter: 'Income', value: data.bankAssessedIncome, expected: '>30,000', output: parseFloat(data.bankAssessedIncome) > 30000 ? 'Approved' : 'Rejected' } : null,
        data.customerName ? {
            parameter: 'Name Match',
            value: data.customerName,
            expected: userName || '',
            output: userName ? (data.customerName === userName ? 'Approved' : 'Rejected') : ''
        } : null,
    ].filter(row => row !== null) : [];

    const score = data ? parseFloat(data.score) : 0;
    const fillWidth = `${Math.min(score, 100)}%`;
    const fillColor = score < 40 ? '#ef4444' : score < 60 ? '#f59e0b' : '#10b981';

    return (
        <div className="risk-table-container form-card">
            {/* Header */}
            <div className="risk-table-header">
                <AlertTriangle size={18} className="text-orange" />
                <h3 className="risk-title text-orange">Risk Analysis Report</h3>
            </div>

            {/* Risk Bar */}
            <div className="risk-bar-section">
                <div className="risk-labels">
                    <span className="risk-label">Low Risk</span>
                    <span className="risk-label">Moderate</span>
                    <span className="risk-label">High Risk</span>
                </div>
                <div className="risk-bar-track">
                    <div className="risk-bar-fill" style={{ width: fillWidth, backgroundColor: fillColor }}></div>
                </div>
            </div>

            {/* Table */}
            <div className="risk-table-wrapper">
                <table className="risk-table">
                    <thead>
                        <tr>
                            <th>PARAMETER</th>
                            <th>VALUE</th>
                            <th>EXPECTED</th>
                            <th className="text-center">OUTPUT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="font-semibold text-orange-light">{row.parameter}</td>
                                <td>{row.value}</td>
                                <td className="text-orange-light">{row.expected}</td>
                                <td className="text-center">
                                    <span className={`status-badge ${row.output.toLowerCase()}`} style={{backgroundColor: getBadgeColor(row.output)}}>
                                        {row.output}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiskAnalysisTable;
