import React from 'react';
import { FinancialPerformanceData } from '../types/DashboardData';

interface FinancialPerformanceOverviewProps {
  data: FinancialPerformanceData[];
}

const FinancialPerformanceOverview: React.FC<FinancialPerformanceOverviewProps> = ({ data }) => {
  const formatCurrency = (value: number): string => {
    if (value === null || value === undefined || isNaN(value)) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatGrowth = (value: number): string => {
    if (value === null || value === undefined || isNaN(value)) return '0%';
    return `${(value * 100).toFixed(1)}%`;
  };

  // Find specific metrics from the data
  const getMetricValue = (metricName: string, year: '2024' | '2025'): number => {
    const metric = data.find(item => item.Metric_Name === metricName);
    if (!metric) return 0;
    return year === '2024' ? metric.Value_2024_Jan_June : metric.Value_2025_Jan_June;
  };

  const getMetricGrowth = (metricName: string): number => {
    const metric = data.find(item => item.Metric_Name === metricName);
    return metric ? metric.Growth_Rate_Decimal : 0;
  };

  const totalExpensePerVisit2024 = getMetricValue('Total Expense per visit', '2024');
  const totalExpensePerVisit2025 = getMetricValue('Total Expense per visit', '2025');
  const revenuePerVisit2024 = getMetricValue('Revenue per Visit', '2024');
  const revenuePerVisit2025 = getMetricValue('Revenue per Visit', '2025');
  const profitPerVisit2024 = getMetricValue('Profit per Visit', '2024');
  const profitPerVisit2025 = getMetricValue('Profit per Visit', '2025');

  const totalExpenseGrowth = getMetricGrowth('Total Expense per visit');
  const revenueGrowth = getMetricGrowth('Revenue per Visit');
  const profitGrowth = getMetricGrowth('Profit per Visit');

  return (
    <div className="section">
      <h2>Financial Performance Overview</h2>
      <div className="table-container">
        <table className="data-table">
          <thead style={{ background: '#f7fafc' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Metric
              </th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                2024 Jan-June
              </th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                2025 Jan-June
              </th>
              <th style={{ padding: '12px', textAlign: 'center', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Growth
              </th>
            </tr>
          </thead>
          <tbody style={{ background: 'white' }}>
            <tr>
              <td style={{ padding: '12px', textAlign: 'left', fontSize: '0.9rem', color: '#2d3748' }}>
                Total Expense per visit
              </td>
              <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                {formatCurrency(totalExpensePerVisit2024)}
              </td>
              <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                {formatCurrency(totalExpensePerVisit2025)}
              </td>
              <td style={{ 
                padding: '12px', 
                textAlign: 'center', 
                fontSize: '0.9rem', 
                color: totalExpenseGrowth >= 0 ? '#38a169' : '#e53e3e',
                fontWeight: '600'
              }}>
                {formatGrowth(totalExpenseGrowth)}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px', textAlign: 'left', fontSize: '0.9rem', color: '#2d3748' }}>
                Revenue per Visit
              </td>
              <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                {formatCurrency(revenuePerVisit2024)}
              </td>
              <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                {formatCurrency(revenuePerVisit2025)}
              </td>
              <td style={{ 
                padding: '12px', 
                textAlign: 'center', 
                fontSize: '0.9rem', 
                color: revenueGrowth >= 0 ? '#38a169' : '#e53e3e',
                fontWeight: '600'
              }}>
                {formatGrowth(revenueGrowth)}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px', textAlign: 'left', fontSize: '0.9rem', color: '#2d3748' }}>
                Profit per Visit
              </td>
              <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                {formatCurrency(profitPerVisit2024)}
              </td>
              <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                {formatCurrency(profitPerVisit2025)}
              </td>
              <td style={{ 
                padding: '12px', 
                textAlign: 'center', 
                fontSize: '0.9rem', 
                color: profitGrowth >= 0 ? '#38a169' : '#e53e3e',
                fontWeight: '600'
              }}>
                {formatGrowth(profitGrowth)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '15px', fontStyle: 'italic' }}>
        Performance analysis for Jan-June 2024 vs 2025
      </p>
    </div>
  );
};

export default FinancialPerformanceOverview;

