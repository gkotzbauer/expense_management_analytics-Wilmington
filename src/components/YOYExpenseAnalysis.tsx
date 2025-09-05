import React from 'react';
import { FinancialPerformanceData } from '../types/DashboardData';

interface YOYExpenseAnalysisProps {
  data: FinancialPerformanceData[];
}

const YOYExpenseAnalysis: React.FC<YOYExpenseAnalysisProps> = ({ data }) => {
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

  const formatVisitCount = (value: number): string => {
    if (value === null || value === undefined || isNaN(value)) return '0';
    return Math.round(value).toLocaleString();
  };

  const renderTableRows = () => {
    return data.map((item, index) => {
      const val2024 = item.Value_2024_Jan_June || 0;
      const val2025 = item.Value_2025_Jan_June || 0;
      const growth = item.Growth_Rate_Decimal || 0;
      const absoluteDifference = val2025 - val2024;

      return (
        <tr key={index}>
          <td style={{ padding: '12px', textAlign: 'left', fontSize: '0.9rem', color: '#2d3748' }}>
            {item.Metric_Name}
          </td>
          <td style={{ padding: '12px', textAlign: 'left', fontSize: '0.9rem', color: '#2d3748' }}>
            {item.Responsibility}
          </td>
          <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
            {item.Metric_Name === 'Visit Count' || item.Metric_Name === 'Visits to Goal' 
              ? formatVisitCount(val2024)
              : formatCurrency(val2024)
            }
          </td>
          <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
            {item.Metric_Name === 'Visit Count' || item.Metric_Name === 'Visits to Goal'
              ? formatVisitCount(val2025)
              : formatCurrency(val2025)
            }
          </td>
          <td style={{ 
            padding: '12px', 
            textAlign: 'center', 
            fontSize: '0.9rem', 
            color: growth >= 0 ? '#38a169' : '#e53e3e',
            fontWeight: '600'
          }}>
            {item.Metric_Name === 'Visits to Goal' ? '' : formatGrowth(growth)}
          </td>
          <td style={{ 
            padding: '12px', 
            textAlign: 'center', 
            fontSize: '0.9rem', 
            color: absoluteDifference >= 0 ? '#38a169' : '#e53e3e',
            fontWeight: '600'
          }}>
            {item.Metric_Name === 'Visits to Goal' ? '' : (
              item.Metric_Name === 'Visit Count' 
                ? formatVisitCount(absoluteDifference)
                : formatCurrency(absoluteDifference)
            )}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="section">
      <h2>YOY Expense & Profitability Analysis</h2>
      <div className="table-container">
        <table className="data-table">
          <thead style={{ background: '#f7fafc' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Metric
              </th>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Responsibility
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
              <th style={{ padding: '12px', textAlign: 'center', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <span style={{ lineHeight: '1' }}>Absolute</span>
                <span style={{ lineHeight: '1' }}>Difference</span>
              </th>
            </tr>
          </thead>
          <tbody style={{ background: 'white' }}>
            {renderTableRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YOYExpenseAnalysis;

