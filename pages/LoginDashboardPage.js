// pages/LoginPage.js
//const { expect } = require('@playwright/test');
const xlsx = require('xlsx');

class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        if (!page) throw new Error("Page object is undefined!");
        this.page = page;
        this.usernameInput = page.locator('#username'); 
        this.passwordInput = page.locator('#password'); 
        this.loginButton = page.locator('#loginBtn');  
        this.errorMessage = page.locator('.error-msg');
    }

    async goto() {
        await this.page.goto('https://www.dietician.com/login'); 
    }

    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getLoginErrorMessage() {
        return this.errorMessage.textContent();
    }

    /**
     * Read credentials from Excel file
     * @param {string} sheetName - Excel sheet name
     * @param {number} rowIndex - row number (0-based)
     * @returns {{username: string, password: string}}
     */
    getCredentialsFromExcel(sheetName, rowIndex) {
        const workbook = xlsx.readFile('./data/LoginData.xlsx'); // place your Excel in /data folder
        const sheet = workbook.Sheets[sheetName];
        const rows = xlsx.utils.sheet_to_json(sheet);
        const row = rows[rowIndex];
        return {
            username: row.Username,
            password: row.Password
        };
    }
}

class DashboardPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.dashboardHeader = page.locator('h1'); 
        this.homeIcon = page.locator('#homeIcon'); 
        this.navLinks = {
            'My Patients': page.locator('nav >> text=My Patients'),
            'New Patient': page.locator('nav >> text=New Patient'),
            'Login': page.locator('nav >> text=Login'),
            'Logout': page.locator('nav >> text=Logout')
        };
    }

    async goto() {
        await this.page.goto('https://www.dietician.com/dashboard'); 
    }

    async clickNavLink(linkName) {
        const link = this.navLinks[linkName];
        if (!link) throw new Error(`Navigation link "${linkName}" not found`);
        await link.click();
    }

    async getNavLink(linkName) {
        const link = this.navLinks[linkName];
        if (!link) throw new Error(`Navigation link "${linkName}" not found`);
        return link;
    }

    async clickHomeIcon() {
        await this.homeIcon.click();
    }
}

module.exports = { LoginPage, DashboardPage };
// { LoginDashboardPage };