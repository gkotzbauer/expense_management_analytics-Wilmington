export interface DashboardData {
  financialPerformance: FinancialPerformanceData[];
  statusSummary: StatusSummaryData[];
  lastUpdated: string;
}

export interface FinancialPerformanceData {
  Metric_ID: string;
  Metric_Name: string;
  Category: string;
  Responsibility: string;
  Value_2024_Jan_June: number;
  Value_2025_Jan_June: number;
  Growth_Rate_Decimal: number;
  Growth_Rate_Percentage: number;
}

export interface StatusSummaryData {
  label: string;
  data: {
    Jan: number;
    Feb: number;
    Mar: number;
    Apr: number;
    May: number;
    Jun: number;
  };
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
}

export interface TableRow {
  metric: string;
  responsibility: string;
  value2024: number;
  value2025: number;
  growth: number;
  absoluteDifference: number;
}

