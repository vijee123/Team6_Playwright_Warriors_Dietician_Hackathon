import { test as setup } from '@playwright/test';
import LoginPage from '../../pages/loginPage.js'

setup('authenticate', async ({ page }) => {
  try{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
   await loginPage.fillUsernamePwd(process.env.username, process.env.password);
   await loginPage.clickLoginBtn();
    console.log('Saved Auth session....');
    await page.context().storageState({path: 'auth/user.json' });
    
  }catch (error) {
    console.error('Failed to create authenticated state:', error.message);
  } 
  
});