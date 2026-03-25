export default class LoginPage{

    constructor(page){
       if (!page) throw new Error("Page object is undefined!");
       this.page = page;
       this.userName = this.page.locator('input[placeholder="Username"]');
       this.password = this.page.locator('input[placeholder="Password"]');
       this.loginBtn = this.page.getByRole('button', { name: 'Login' });
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