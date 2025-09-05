@echo off
REM Complete Deployment Script for Expense Management Analytics Dashboard (Windows)
REM This script sets up the entire project from scratch

echo 🚀 Starting complete deployment process...
echo ==========================================

REM Check if Git is available
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first.
    pause
    exit /b 1
)

REM Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python is not installed. Please install Python first.
    pause
    exit /b 1
)

echo ✅ All prerequisites found!

REM Clone or update repository
if exist "expense_management_analytics-RMT-v2" (
    echo 📁 Repository already exists. Updating...
    cd expense_management_analytics-RMT-v2
    git pull origin main
) else (
    echo 📥 Cloning repository...
    git clone https://github.com/gkotzbauer/expense_management_analytics-RMT-v2.git
    cd expense_management_analytics-RMT-v2
)

REM Install Python dependencies
echo 🐍 Installing Python dependencies...
pip install pandas openpyxl

REM Install Node.js dependencies
echo 📦 Installing Node.js dependencies...
npm install

REM Run data conversion
echo 🔄 Converting Excel data to JSON...
python universal_excel_converter.py convert-all

REM Start development server
echo 🌐 Starting development server...
echo    Dashboard will be available at: http://localhost:5173
echo    Press Ctrl+C to stop the server
echo.

npm run dev

