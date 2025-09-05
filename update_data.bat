@echo off
REM Data Update Script for Expense Management Analytics Dashboard (Windows)
REM This script updates JSON data files from Excel sources

echo 🚀 Starting data update process...
echo ==================================

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python is not installed. Please install Python first.
    pause
    exit /b 1
)

REM Check if required Python packages are installed
echo 📦 Checking Python dependencies...
python -c "import pandas, openpyxl" >nul 2>&1
if %errorlevel% neq 0 (
    echo 📥 Installing required Python packages...
    pip install pandas openpyxl
    if %errorlevel% neq 0 (
        echo ❌ Failed to install Python packages. Please install manually:
        echo    pip install pandas openpyxl
        pause
        exit /b 1
    )
)

REM Check if universal_excel_converter.py exists
if not exist "universal_excel_converter.py" (
    echo ❌ universal_excel_converter.py not found in current directory.
    echo    Please ensure the converter script is in the same directory as this script.
    pause
    exit /b 1
)

REM Check if public directory exists
if not exist "public" (
    echo ❌ public directory not found.
    echo    Please ensure you're running this script from the project root directory.
    pause
    exit /b 1
)

REM Run the conversion script
echo 🔄 Converting Excel files to JSON...
python universal_excel_converter.py convert-all

if %errorlevel% equ 0 (
    echo ✅ Data update completed successfully!
    echo.
    echo 📊 Updated files:
    echo    - public/Financial Performance Data.json
    echo    - public/Status Summary Source File.json
    echo    - public/Summary RMT Rev & Expense Data for Dashboard.json
    echo.
    echo 🌐 Refresh your dashboard to see the updated data.
) else (
    echo ❌ Data update failed. Please check the error messages above.
)

pause

