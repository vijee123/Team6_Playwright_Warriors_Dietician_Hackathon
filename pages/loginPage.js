export default class LoginPage{

    constructor(page){
       if (!page) throw new Error("Page object is undefined!");
       this.page = page;
       this.userName = this.page.locator('');
       this.password = this.page.locator('');
       this.loginBtn = this.page.locator('');
    }

    
    async navigateToUrl(){
        await this.page.goto('/');
    }


    async fillUsernamePwd(username, password){
        await this.userName.fill(username);
        await this.password.fill(password);
    }

    async clickLoginBtn(){
        await this.loginBtn.click();
    }

}