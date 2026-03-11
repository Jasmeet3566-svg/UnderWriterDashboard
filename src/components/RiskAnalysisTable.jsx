import React from 'react';
import { AlertTriangle } from 'lucide-react';
import './RiskAnalysisTable.css';

const RiskAnalysisTable = () => {
    const tableData = [
        { parameter: 'DBR', value: '80%', expected: '<75%', output: 'Rejected' },
        { parameter: 'AML', value: 'Positive', expected: 'Negative', output: 'Rejected' },
        { parameter: 'LTV', value: '85%', expected: '<80%', output: 'Review' },
        { parameter: 'Score', value: '350', expected: '>450', output: 'Review' },
        { parameter: 'PD', value: '45%', expected: '<40%', output: 'Review' },
        { parameter: 'Mismatch', value: 'Name Mismatch', expected: 'No', output: 'Rejected' },
        { parameter: 'Income', value: '30,000', expected: '>10,000', output: 'Review' },
    ];

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
                    <div className="risk-bar-fill"></div>
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
                                    <span className={`status-badge ${row.output.toLowerCase()}`}>
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
