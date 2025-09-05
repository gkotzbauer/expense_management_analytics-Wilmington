import React from 'react';

const MarginRiskAssessment: React.FC = () => {
  return (
    <div className="section">
      <h2>Margin Risk Assessment for Most Recent Month (June)</h2>
      
      <div className="risk-assessment-container">
        <div className="risk-category high-risk">
          <h3>High Risk Categories</h3>
          <ul>
            <li>Marketing Spend Efficiency (1.58)</li>
            <li>Operational Overhead (1.23)</li>
            <li>Administrative Costs (1.15)</li>
          </ul>
          <p className="risk-description">
            These categories are growing faster than revenue, creating margin pressure.
          </p>
        </div>

        <div className="risk-category medium-risk">
          <h3>Medium Risk Categories</h3>
          <ul>
            <li>Technology Infrastructure (0.85)</li>
            <li>Professional Services (0.92)</li>
          </ul>
          <p className="risk-description">
            These categories show moderate alignment with revenue growth.
          </p>
        </div>

        <div className="risk-category low-risk">
          <h3>Low Risk Categories</h3>
          <ul>
            <li>Direct Labor (0.45)</li>
            <li>Materials & Supplies (0.38)</li>
            <li>Utilities (0.52)</li>
          </ul>
          <p className="risk-description">
            These categories show good cost control and efficiency.
          </p>
        </div>
      </div>

      <div className="risk-notes">
        <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '15px', fontStyle: 'italic' }}>
          <strong>Note:</strong> The value in parentheses behind the Marketing Spend Efficiency category is the ratio between the percentage change for the category and the percentage change for Gross Profit. A value close to 1.0 means the expense moved proportionally with GP. A value between 0 &lt; ratio &lt; 1 means the expense moved in the same direction as GP but by a smaller percentage (sticky cost; margin squeeze risk). A value &gt;1 means the expense fell faster than GP (good cost alignment). A value &lt;0 means the expense moved the wrong way (e.g., GP down, expense up). A value &lt;0 means the expense moved the wrong way (e.g., GP down, expense up). For example, a value of 1.58 means the category spend grew 58% faster than revenue.
        </p>
      </div>
    </div>
  );
};

export default MarginRiskAssessment;

