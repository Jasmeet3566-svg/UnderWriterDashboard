import React from 'react';
import './App.css'; // Added App.css import
import ApplicationHeader from './components/ApplicationHeader';
import UserProfileCard from './components/UserProfileCard';
import AiRecommendationCard from './components/AiRecommendationCard';
import ApprovedLoanAmount from './components/ApprovedLoanAmount';
import DecisioningEngineCard from './components/DecisioningEngineCard';
import SuggestedAdjustmentsCard from './components/SuggestedAdjustmentsCard';
import ReportCard from './components/ReportCard';
import RiskAnalysisTable from './components/RiskAnalysisTable';
import PolicyChecks from './components/PolicyChecks';
import { TrendingUp, BarChart3 } from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      {/* Container for ApplicationHeader */}
      <div className="header-container">
        <ApplicationHeader />
      </div>

      {/* Main Content Area Layout */}
      <div className="main-content-layout">

        {/* Left Sidebar Area */}
        <div className="left-sidebar">
          <UserProfileCard />
          <AiRecommendationCard />
          <ApprovedLoanAmount />
        </div>

        {/* Right Main Content Area */}
        <div className="right-content">

          {/* Top Row: Report Cards */}
          <div className="row-container">
            <div className="flex-1">
              <ReportCard
                icon={TrendingUp}
                title="Collateral Report"
                items={[
                  "Increasing Price Trend",
                  "80% Approval Rate for this collateral",
                  "Less than 5% default rate for this"
                ]}
              />
            </div>
            <div className="flex-1">
              <ReportCard
                icon={BarChart3}
                title="Risk Analysis Report"
                items={[
                  "Over 50% of approved apps have higher bureau score",
                  "Most Approved Applicants have lower LTV",
                  "Average Applicant Spend similar alcohol expenses"
                ]}
              />
            </div>
          </div>

          {/* Main Tables Row */}
          <div className="row-container">
            <div className="flex-3">
              <RiskAnalysisTable />
            </div>
            <div className="flex-2">
              <PolicyChecks />
            </div>
          </div>

          {/* Decisioning Engine Row */}
          <div className="row-container">
            <div className="flex-1">
              <DecisioningEngineCard />
            </div>
            <div className="flex-1">
              <SuggestedAdjustmentsCard />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
