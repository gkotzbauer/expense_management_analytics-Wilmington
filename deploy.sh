#!/bin/bash

# Complete Deployment Script for Expense Management Analytics Dashboard
# This script sets up the entire project from scratch

echo "🚀 Starting complete deployment process..."
echo "=========================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "🔍 Checking prerequisites..."

if ! command_exists git; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! command_exists python3; then
    echo "❌ Python3 is not installed. Please install Python3 first."
    exit 1
fi

echo "✅ All prerequisites found!"

# Clone or update repository
if [ -d "expense_management_analytics-RMT-v2" ]; then
    echo "📁 Repository already exists. Updating..."
    cd expense_management_analytics-RMT-v2
    git pull origin main
else
    echo "📥 Cloning repository..."
    git clone https://github.com/gkotzbauer/expense_management_analytics-RMT-v2.git
    cd expense_management_analytics-RMT-v2
fi

# Install Python dependencies
echo "🐍 Installing Python dependencies..."
pip3 install pandas openpyxl

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Run data conversion
echo "🔄 Converting Excel data to JSON..."
python3 universal_excel_converter.py convert-all

# Start development server
echo "🌐 Starting development server..."
echo "   Dashboard will be available at: http://localhost:5173"
echo "   Press Ctrl+C to stop the server"
echo ""

npm run dev

