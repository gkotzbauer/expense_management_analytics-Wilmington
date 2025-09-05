# Expense Management Analytics Dashboard - Deployment Guide

This guide provides scripts and instructions for deploying the Expense Management Analytics Dashboard in any environment.

## 📋 Prerequisites

Before running any deployment scripts, ensure you have the following installed:

- **Git** - For cloning the repository
- **Node.js** (v16 or higher) - For running the React application
- **Python 3** - For data conversion scripts
- **pip** - Python package manager

## 🚀 Quick Start

### Option 1: Complete Automated Deployment

#### For macOS/Linux:
```bash
chmod +x deploy.sh
./deploy.sh
```

#### For Windows:
```cmd
deploy.bat
```

### Option 2: Manual Step-by-Step Deployment

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gkotzbauer/expense_management_analytics-RMT-v2.git
   cd expense_management_analytics-RMT-v2
   ```

2. **Install Python dependencies:**
   ```bash
   pip3 install pandas openpyxl
   # or on Windows:
   pip install pandas openpyxl
   ```

3. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

4. **Convert Excel data to JSON:**
   ```bash
   python3 universal_excel_converter.py convert-all
   # or on Windows:
   python universal_excel_converter.py convert-all
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Access the dashboard:**
   Open your browser and navigate to `http://localhost:5173`

## 📊 Data Update Scripts

### For Data Updates Only

If you only need to update the data (after modifying Excel files):

#### For macOS/Linux:
```bash
chmod +x update_data.sh
./update_data.sh
```

#### For Windows:
```cmd
update_data.bat
```

## 📁 Required Files

Ensure these files are present in your project directory:

### Essential Files:
- `universal_excel_converter.py` - Excel to JSON conversion script
- `public/Financial Performance Data.xlsx` - Source financial data
- `public/Status Summary Source File.xlsx` - Source status data
- `package.json` - Node.js dependencies
- `src/` directory with all React components

### Generated Files (after running conversion):
- `public/Financial Performance Data.json`
- `public/Status Summary Source File.json`
- `public/Summary RMT Rev & Expense Data for Dashboard.json`

## 🔧 Troubleshooting

### Common Issues:

1. **"Python not found" error:**
   - Install Python 3 from [python.org](https://python.org)
   - Ensure Python is added to your system PATH

2. **"Node not found" error:**
   - Install Node.js from [nodejs.org](https://nodejs.org)
   - Ensure Node.js is added to your system PATH

3. **"pip not found" error:**
   - Install pip: `python -m ensurepip --upgrade`
   - Or use: `python -m pip install pandas openpyxl`

4. **"Permission denied" on macOS/Linux:**
   - Make scripts executable: `chmod +x *.sh`

5. **Port 5173 already in use:**
   - Kill the process: `lsof -ti:5173 | xargs kill -9`
   - Or use a different port: `npm run dev -- --port 3000`

### Data Conversion Issues:

1. **Excel file format errors:**
   - Ensure Excel files are in .xlsx format (not .xls)
   - Check that files are not password protected
   - Verify files are not corrupted

2. **JSON parsing errors:**
   - Delete existing JSON files and re-run conversion
   - Check Excel file structure matches expected format

## 🌐 Production Deployment

For production deployment, build the application:

```bash
npm run build
```

The built files will be in the `dist/` directory and can be served by any static web server.

## 📝 Script Descriptions

### `deploy.sh` / `deploy.bat`
- Complete automated deployment script
- Clones repository, installs dependencies, converts data, starts server
- Use for first-time setup

### `update_data.sh` / `update_data.bat`
- Data update only script
- Converts Excel files to JSON format
- Use when Excel data has been modified

### `universal_excel_converter.py`
- Python script for Excel to JSON conversion
- Handles multiple Excel files automatically
- Creates backups of existing JSON files

## 🔄 Regular Updates

To keep your dashboard up to date:

1. **Update Excel files** in the `public/` directory
2. **Run the data update script:**
   ```bash
   ./update_data.sh  # macOS/Linux
   # or
   update_data.bat   # Windows
   ```
3. **Refresh your browser** to see updated data

## 📞 Support

If you encounter issues not covered in this guide:

1. Check the console output for error messages
2. Verify all prerequisites are installed correctly
3. Ensure all required files are present
4. Check file permissions (on macOS/Linux)

## 🎯 Features Included

The deployed dashboard includes:

- ✅ YOY Expense & Profitability Analysis with Absolute Difference column
- ✅ Financial Performance Overview
- ✅ Interactive charts (Revenue, Expenses, Margin)
- ✅ Key Insights with detailed ratio explanations
- ✅ Margin Risk Assessment
- ✅ Remaining Year Cashflow Projections with "Visit Status vs. Goal" column
- ✅ Responsive design for mobile devices
- ✅ Real-time data loading from JSON files

