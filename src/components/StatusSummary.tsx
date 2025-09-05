import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { StatusSummaryData } from '../types/DashboardData';

interface StatusSummaryProps {
  data: StatusSummaryData[];
}

Chart.register(...registerables);

const StatusSummary: React.FC<StatusSummaryProps> = ({ data }) => {
  const revenueChartRef = useRef<HTMLCanvasElement>(null);
  const expensesChartRef = useRef<HTMLCanvasElement>(null);
  const marginChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Create Revenue and Expenses Chart
    if (revenueChartRef.current) {
      const ctx = revenueChartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Total'],
            datasets: [
              {
                label: 'Revenue 2024',
                data: [120000, 135000, 142000, 138000, 145000, 152000, 832000],
                backgroundColor: 'rgba(102, 126, 234, 0.8)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 1
              },
              {
                label: 'Revenue 2025',
                data: [145000, 158000, 162000, 168000, 175000, 182000, 990000],
                backgroundColor: 'rgba(118, 75, 162, 0.8)',
                borderColor: 'rgba(118, 75, 162, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Revenue Comparison'
              },
              legend: {
                display: true,
                position: 'top'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function(value) {
                    return '$' + (value as number).toLocaleString();
                  }
                }
              }
            }
          }
        });
      }
    }

    // Create Expenses Chart
    if (expensesChartRef.current) {
      const ctx = expensesChartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Total'],
            datasets: [
              {
                label: 'Expenses 2024',
                data: [180000, 195000, 202000, 198000, 205000, 212000, 1192000],
                backgroundColor: 'rgba(245, 101, 101, 0.8)',
                borderColor: 'rgba(245, 101, 101, 1)',
                borderWidth: 1
              },
              {
                label: 'Expenses 2025',
                data: [165000, 178000, 182000, 188000, 195000, 202000, 1110000],
                backgroundColor: 'rgba(72, 187, 120, 0.8)',
                borderColor: 'rgba(72, 187, 120, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Expenses Comparison'
              },
              legend: {
                display: true,
                position: 'top'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function(value) {
                    return '$' + (value as number).toLocaleString();
                  }
                }
              }
            }
          }
        });
      }
    }

    // Create Margin Chart with hardcoded values
    if (marginChartRef.current) {
      const ctx = marginChartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Total'],
            datasets: [
              {
                label: 'Margin 2024',
                data: [-50, -44, -42, -43, -41, -39, -61],
                backgroundColor: 'rgba(245, 101, 101, 0.8)',
                borderColor: 'rgba(245, 101, 101, 1)',
                borderWidth: 1
              },
              {
                label: 'Margin 2025',
                data: [-14, -13, -12, -12, -11, -10, -16],
                backgroundColor: 'rgba(72, 187, 120, 0.8)',
                borderColor: 'rgba(72, 187, 120, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Margin Comparison (%)'
              },
              legend: {
                display: true,
                position: 'top'
              }
            },
            scales: {
              y: {
                beginAtZero: false,
                ticks: {
                  callback: function(value) {
                    return value + '%';
                  }
                }
              }
            }
          }
        });
      }
    }
  }, [data]);

  return (
    <div className="section">
      <h2>2025 Profit Performance</h2>
      <div className="charts-container">
        <div className="chart-wrapper">
          <canvas ref={revenueChartRef} width="400" height="200"></canvas>
        </div>
        <div className="chart-wrapper">
          <canvas ref={expensesChartRef} width="400" height="200"></canvas>
        </div>
        <div className="chart-wrapper">
          <canvas ref={marginChartRef} width="400" height="200"></canvas>
        </div>
      </div>
      <div className="status-summary-notes">
        <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '15px', fontStyle: 'italic' }}>
          <strong>Note:</strong> The value behind the category is the ratio between the percentage change for the category and the percentage change for Gross Profit. A value close to 1.0 means the expense moved proportionally with GP. A value between 0 &lt; ratio &lt; 1 means the expense moved in the same direction as GP but by a smaller percentage (sticky cost; margin squeeze risk). A value &gt;1 means the expense fell faster than GP (good cost alignment). A value &lt;0 means the expense moved the wrong way (e.g., GP down, expense up). For example, a value of 1.58 means the category spend grew 58% faster than revenue.
        </p>
      </div>
    </div>
  );
};

export default StatusSummary;

