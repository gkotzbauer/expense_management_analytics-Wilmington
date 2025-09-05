import React from 'react';

const KeyInsights: React.FC = () => {
  return (
    <div className="section">
      <h2>Key Insights for Most Recent Month (June)</h2>
      <p style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '15px', fontStyle: 'italic' }}>
        <strong>Note:</strong> The value in parentheses behind the Marketing Spend Efficiency category shows the Expense vs GP Growth Ratio. The sign shows alignment (Positive ⇒ expense and GP moved the same direction; Negative ⇒ they moved in opposite directions (misaligned)). The magnitude shows pace (≈1× ⇒ matched pace. &lt;1× ⇒ expense changed slower than GP. &gt;1× ⇒ expense changed faster than GP). A few examples: (1) a value of -5.9 means the category changed in the opposite direction of Gross Profit by 5.9 times the rate; (2) a value of +1.58× means the expense rose 158% as fast as GP; and (3) a value of +0.06× means the expense moved 6% as fast as GP.
      </p>
      
      <div className="insights-container">
        <div className="insight-item">
          <h3>Expense Categories Outpacing Growth</h3>
          <p>Categories where expense growth exceeded revenue growth, indicating potential margin pressure.</p>
          <div className="insight-metric">
            <span className="metric-value">5</span>
            <span className="metric-label">Categories</span>
          </div>
        </div>

        <div className="insight-item">
          <h3>Cost Efficiency Improvements</h3>
          <p>Categories showing better cost alignment with revenue performance.</p>
          <div className="insight-metric">
            <span className="metric-value">12</span>
            <span className="metric-label">Categories</span>
          </div>
        </div>

        <div className="insight-item">
          <h3>Margin Risk Assessment</h3>
          <p>Categories requiring immediate attention for margin protection.</p>
          <div className="insight-metric">
            <span className="metric-value">3</span>
            <span className="metric-label">High Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyInsights;
