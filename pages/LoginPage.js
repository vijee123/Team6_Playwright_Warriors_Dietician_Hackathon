// pages/LoginPage.js


export default class LoginPage {
    constructor(page) {
        if (!page) throw new Error("Page object is undefined!");
        this.page = page;
        this.usernameInput = page.locator('#username'); 
        this.passwordInput = page.locator('#password'); 
        this.loginButton = page.locator('#loginBtn');  
        this.errorMessage = page.locator('.error-msg');
    }

    async goto() {
        await this.page.goto('/login'); 
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
    
}

