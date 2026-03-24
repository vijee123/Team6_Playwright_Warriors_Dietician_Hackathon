import {logger} from '../utils/logger.js';
import{test} from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);


Given('Enter the username and the password', async ({loginPageFixture}) => {
  logger.info('Enter the username and password..');
  loginPageFixture.fillUsernamePwd(process.env.username, process.env.password);
});

When('User clicks the Login Button', async ({loginPageFixture}) => {
  logger.info('Clicks the login..');
  loginPageFixture.clickLoginBtn();
});

Then('User should land in appropriate page', async ({loginPageFixture}) => {
  logger.info('Lands in dashboard page...');
});