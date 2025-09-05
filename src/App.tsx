import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { DashboardData } from './types/DashboardData';

function App() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load Financial Performance Data
      const financialResponse = await fetch('/public/Financial Performance Data.json');
      if (!financialResponse.ok) {
        throw new Error(`Failed to load financial data: ${financialResponse.status}`);
      }
      const financialData = await financialResponse.json();

      // Load Status Summary Data
      const statusResponse = await fetch('/public/Status Summary Source File.json');
      if (!statusResponse.ok) {
        throw new Error(`Failed to load status data: ${statusResponse.status}`);
      }
      const statusData = await statusResponse.json();

      // Process the data
      const processedData: DashboardData = {
        financialPerformance: financialData,
        statusSummary: processStatusSummaryData(statusData),
        lastUpdated: new Date().toISOString()
      };

      setDashboardData(processedData);
    } catch (err) {
      console.error('Error loading dashboard data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const processStatusSummaryData = (jsonData: any[]) => {
    return jsonData.map(item => ({
      label: item.Measures,
      data: {
        Jan: parseFloat(item.Jan) || 0,
        Feb: parseFloat(item.Feb) || 0,
        Mar: parseFloat(item.Mar) || 0,
        Apr: parseFloat(item.Apr) || 0,
        May: parseFloat(item.May) || 0,
        Jun: parseFloat(item.Jun) || 0
      }
    }));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error Loading Dashboard</h2>
        <p>{error}</p>
        <button onClick={loadDashboardData} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="error-container">
        <h2>No Data Available</h2>
        <p>Unable to load dashboard data.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Dashboard data={dashboardData} />
    </div>
  );
}

export default App;