import{test} from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);


Given('Enter the username and the password', async ({loginPageFixture}) => {
  console.log("Enter the username and password..");
  loginPageFixture.fillUsernamePwd(process.env.username, process.env.password);
});

When('User clicks the Login Button', async ({}) => {
  console.log("Clicks the login..");
  loginPageFixture.clickLoginBtn();
});

Then('User should land in appropriate page', async ({}) => {
  console.log("Lands in dashboard page...");
});