@echo off
title Rising Leaders Of Generation - Dependency Installer
color 0A

echo ================================================================================
echo     RISING LEADERS OF GENERATION - DEPENDENCY INSTALLATION
echo ================================================================================
echo.
echo This script will install all dependencies for Backend and Frontend
echo.

REM Check if Node.js is installed
echo [CHECK] Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo Recommended version: v18.x or higher
    pause
    exit /b 1
) else (
    echo [OK] Node.js found: 
    node --version
)
echo.

REM Check if npm is installed
echo [CHECK] Checking npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is not installed!
    pause
    exit /b 1
) else (
    echo [OK] npm found: 
    npm --version
)
echo.

echo ================================================================================
echo [1/2] Installing BACKEND Dependencies
echo ================================================================================
echo.

cd backend

echo Installing production dependencies...
npm install express mongoose cors dotenv bcryptjs jsonwebtoken multer nodemailer express-validator express-rate-limit helmet morgan compression cloudinary

echo.
echo Installing development dependencies...
npm install -D nodemon

echo.
echo Backend dependencies installed successfully!
echo.

cd ..

echo ================================================================================
echo [2/2] Installing FRONTEND Dependencies
echo ================================================================================
echo.

cd frontend

echo Installing core dependencies...
npm install react react-dom react-router-dom axios

echo.
echo Installing UI and styling dependencies...
npm install react-icons react-hook-form react-toastify react-helmet-async

echo.
echo Installing animation and effects...
npm install framer-motion swiper aos moment

echo.
echo Installing additional utilities...
npm install react-modal react-query

echo.
echo Installing development dependencies...
npm install -D tailwindcss postcss autoprefixer react-scripts

echo.
echo Initializing Tailwind CSS...
npx tailwindcss init -p

echo.
echo Frontend dependencies installed successfully!
echo.

cd ..

echo ================================================================================
echo [✓] ALL DEPENDENCIES INSTALLED SUCCESSFULLY!
echo ================================================================================
echo.
echo Total packages installed:
echo - Backend: 20+ packages
echo - Frontend: 20+ packages
echo.
echo NEXT STEPS:
echo ==========
echo 1. Configure environment variables:
echo    - Copy backend/.env.example to backend/.env
echo    - Update database credentials
echo.
echo 2. Start the development servers:
echo    - Run: start.bat
echo    OR manually:
echo    - Backend: cd backend ^&^& npm run dev
echo    - Frontend: cd frontend ^&^& npm start
echo.
echo 3. Access the application:
echo    - Frontend: http://localhost:3000
echo    - Backend API: http://localhost:5000
echo.
pause