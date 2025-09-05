#!/usr/bin/env python3
"""
Convert ZNC07 Financial Performance Data.xlsx to JSON format
"""

import pandas as pd
import json
import os
from datetime import datetime

def convert_financial_performance_data():
    # File paths
    input_file = "public/ZNC07 Financial Performance Data.xlsx"
    output_file = "public/financial-performance-data.json"
    
    try:
        # Read the Excel file
        print(f"📖 Reading {input_file}...")
        df = pd.read_excel(input_file)
        
        print(f"📊 Found {len(df)} rows and {len(df.columns)} columns")
        print(f"📋 Columns: {list(df.columns)}")
        
        # Convert to JSON records
        data = df.to_dict('records')
        
        # Write to JSON file (array format to match existing structure)
        with open(output_file, 'w') as f:
            json.dump(data, f, indent=2, default=str)
        
        print(f"✅ Successfully converted {input_file} to {output_file}")
        print(f"📊 Data: {len(data)} rows converted")
        
        # Show first few rows for validation
        print("\n📋 First 3 rows of data:")
        for i, row in enumerate(data[:3]):
            print(f"Row {i+1}: {row}")
        
        # Show YOY Expense & Profitability Analysis entries
        yoy_data = [row for row in data if row.get('Category') == 'YOY Expense & Profitability Analysis']
        print(f"\n📊 Found {len(yoy_data)} YOY Expense & Profitability Analysis entries")
        
        # Show the key metrics
        for row in yoy_data:
            if row['Metric_Name'] in ['Total Expenses', 'Total Revenue', 'Visit Count', 'Profit per Visit']:
                print(f"📈 {row['Metric_Name']}: 2024=${row['Value_2024_Jan_July']}, 2025=${row['Value_2025_Jan_July']}, Growth={row['Growth_Rate_Percentage']*100:.1f}%")
        
        return data
        
    except Exception as e:
        print(f"❌ Error converting {input_file}: {str(e)}")
        return None

if __name__ == "__main__":
    convert_financial_performance_data()
