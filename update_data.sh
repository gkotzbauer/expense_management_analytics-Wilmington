#!/bin/bash

# Data Update Script for Expense Management Analytics Dashboard
# This script updates JSON data files from Excel sources

echo "🚀 Starting data update process..."
echo "=================================="

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 is not installed. Please install Python3 first."
    exit 1
fi

# Check if required Python packages are installed
echo "📦 Checking Python dependencies..."
python3 -c "import pandas, openpyxl" 2>/dev/null
if [ $? -ne 0 ]; then
    echo "📥 Installing required Python packages..."
    pip3 install pandas openpyxl
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Python packages. Please install manually:"
        echo "   pip3 install pandas openpyxl"
        exit 1
    fi
fi

# Check if universal_excel_converter.py exists
if [ ! -f "universal_excel_converter.py" ]; then
    echo "❌ universal_excel_converter.py not found in current directory."
    echo "   Please ensure the converter script is in the same directory as this script."
    exit 1
fi

# Check if public directory exists
if [ ! -d "public" ]; then
    echo "❌ public directory not found."
    echo "   Please ensure you're running this script from the project root directory."
    exit 1
fi

# Run the conversion script
echo "🔄 Converting Excel files to JSON..."
python3 universal_excel_converter.py convert-all

if [ $? -eq 0 ]; then
    echo "✅ Data update completed successfully!"
    echo ""
    echo "📊 Updated files:"
    echo "   - public/Financial Performance Data.json"
    echo "   - public/Status Summary Source File.json"
    echo "   - public/Summary RMT Rev & Expense Data for Dashboard.json"
    echo ""
    echo "🌐 Refresh your dashboard to see the updated data."
else
    echo "❌ Data update failed. Please check the error messages above."
    exit 1
fi

