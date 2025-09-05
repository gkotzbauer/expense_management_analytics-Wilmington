import React from 'react';
import { FinancialPerformanceData } from '../types/DashboardData';

interface RemainingYearCashflowProps {
  data: FinancialPerformanceData[];
}

const RemainingYearCashflow: React.FC<RemainingYearCashflowProps> = ({ data }) => {
  const formatCurrency = (value: number): string => {
    if (value === null || value === undefined || isNaN(value)) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatWholeNumber = (value: number | string): string => {
    if (value === null || value === undefined || value === '') return '';
    return Math.round(parseFloat(value.toString())).toString();
  };

  // Mock cashflow data - in a real implementation, this would come from the data
  const cashflowData = [
    {
      month: 'July',
      visitAvg: 1250,
      visitProj: 1350,
      expenses: 185000,
      revenue: 175000,
      profit: -10000,
      visitStatus: 108,
      cashPosition: 45000
    },
    {
      month: 'August',
      visitAvg: 1280,
      visitProj: 1380,
      expenses: 190000,
      revenue: 180000,
      profit: -10000,
      visitStatus: 108,
      cashPosition: 35000
    },
    {
      month: 'September',
      visitAvg: 1320,
      visitProj: 1420,
      expenses: 195000,
      revenue: 185000,
      profit: -10000,
      visitStatus: 108,
      cashPosition: 25000
    },
    {
      month: 'October',
      visitAvg: 1350,
      visitProj: 1450,
      expenses: 200000,
      revenue: 190000,
      profit: -10000,
      visitStatus: 107,
      cashPosition: 15000
    },
    {
      month: 'November',
      visitAvg: 1380,
      visitProj: 1480,
      expenses: 205000,
      revenue: 195000,
      profit: -10000,
      visitStatus: 107,
      cashPosition: 5000
    },
    {
      month: 'December',
      visitAvg: 1400,
      visitProj: 1500,
      expenses: 210000,
      revenue: 200000,
      profit: -10000,
      visitStatus: 107,
      cashPosition: -5000
    }
  ];

  const styleNegativeValue = (value: number | string, baseStyle: string): string => {
    const numValue = parseFloat(value.toString());
    if (numValue < 0) {
      return baseStyle + ' color: #e53e3e;';
    }
    return baseStyle;
  };

  return (
    <div className="section">
      <h2>Remaining Year Cashflow Projections</h2>
      <div className="table-container">
        <table className="data-table">
          <thead style={{ background: '#f7fafc' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Month
              </th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                2023/24 Visit Avg
              </th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                2025 Visit Projection
              </th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Expected Expenses
              </th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Expected Revenue
              </th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Expected Profit
              </th>
              <th style={{ padding: '12px', textAlign: 'center', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                Visit Status<br />vs. Goal
              </th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: '0.8rem', fontWeight: '600', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Cash Position
              </th>
            </tr>
          </thead>
          <tbody style={{ background: 'white' }}>
            {cashflowData.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '12px', textAlign: 'left', fontSize: '0.9rem', color: '#2d3748' }}>
                  {item.month}
                </td>
                <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                  {formatWholeNumber(item.visitAvg)}
                </td>
                <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                  {formatWholeNumber(item.visitProj)}
                </td>
                <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                  {formatCurrency(item.expenses)}
                </td>
                <td style={{ padding: '12px', textAlign: 'right', fontSize: '0.9rem', color: '#2d3748' }}>
                  {formatCurrency(item.revenue)}
                </td>
                <td style={styleNegativeValue(item.profit, 'padding: 12px; text-align: right; font-size: 0.9rem;')}>
                  {formatCurrency(item.profit)}
                </td>
                <td style={styleNegativeValue(item.visitStatus, 'padding: 12px; text-align: right; font-size: 0.9rem;')}>
                  {formatWholeNumber(item.visitStatus)}
                </td>
                <td style={styleNegativeValue(item.cashPosition, 'padding: 12px; text-align: right; font-size: 0.9rem;')}>
                  {formatCurrency(item.cashPosition)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RemainingYearCashflow;

