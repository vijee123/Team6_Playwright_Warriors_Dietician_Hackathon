import { test as setup } from '@playwright/test';
import LoginPage from '../../pages/loginPage.js'

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToUrl();
  await loginPage.clickMenuLogin();
  await loginPage.validLogin(process.env.username, process.env.password);
  await page.context().storageState({path: 'auth/user.json' });
  console.log('Saved Auth session....');
});