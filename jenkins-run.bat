@echo off
echo =============================
echo STEP 1 - Installing packages
echo =============================
call npm install

echo =============================
echo STEP 2 - Installing browsers
echo =============================
call npx playwright install --with-deps

echo =============================
echo STEP 3 - Running tests
echo =============================
call npm test

echo =============================
echo STEP 4 - Check results
echo =============================
dir allure-results