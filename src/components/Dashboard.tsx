import React from 'react';
import { DashboardData } from '../types/DashboardData';
import Header from './Header';
import YOYExpenseAnalysis from './YOYExpenseAnalysis';
import FinancialPerformanceOverview from './FinancialPerformanceOverview';
import StatusSummary from './StatusSummary';
import KeyInsights from './KeyInsights';
import MarginRiskAssessment from './MarginRiskAssessment';
import RemainingYearCashflow from './RemainingYearCashflow';

interface DashboardProps {
  data: DashboardData;
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div className="dashboard-container">
      <Header />
      
      <div className="dashboard-content">
        <YOYExpenseAnalysis data={data.financialPerformance} />
        
        <FinancialPerformanceOverview data={data.financialPerformance} />
        
        <StatusSummary data={data.statusSummary} />
        
        <KeyInsights />
        
        <MarginRiskAssessment />
        
        <RemainingYearCashflow data={data.financialPerformance} />
      </div>
    </div>
  );
};

export default Dashboard;

