import { logger } from '../utils/logger.js';
import{test} from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);

// filename: steps/login.steps.js
//const { LoginPage } = require('../pages/LoginPage');
//const { DashboardPage } = require('../pages/DashboardPage');



When('The user enters Login credentials from {string} and {int}', async function (loginPageFixture,sheetName, rowIndex) {
    const credentials = loginPage.getCredentialsFromExcel(sheetName, rowIndex);
    await loginPageFixture.enterUsername(credentials.username);
    await loginPageFixture.enterPassword(credentials.password);
});

When('The user enters Login username {string}', async function (loginPageFixture, username) {
    await loginPageFixture.enterUsername(username);
});

When('The user enters Login password {string}', async function (loginPageFixture, password) {
    await loginPageFixture.enterPassword(password);
});

When('The user clicks Login button', async function (loginPageFixture) {
    await loginPageFixture.clickLogin();
});

Then('The user be on Dashboard after Login', async function (dashboardPageFixture) {
    await expect(dashboardPageFixture.dashboardHeader).toHaveText('Dashboard'); // adjust selector
});

Then('The user sees Login error message {string}', async function (errorMessage) {
    const message = await loginPage.getLoginErrorMessage();
    expect(message).toBe(errorMessage);
});

Then('The user should see Dashboard page with title {string}, Home icon', async function (dashboardPageFixture, pageTitle) {
    await expect(dashboardPageFixture.page).toHaveTitle(pageTitle);
    await expect(dashboardPageFixture.homeIcon).toBeVisible();
});

Then('The user should see four links {string}, {string}, {string}, and {string}', async function (dashboardPageFixture, link1, link2, link3, link4) {
    await expect(dashboardPageFixture.getNavLink(link1)).toBeVisible();
    await expect(dashboardPageFixture.getNavLink(link2)).toBeVisible();
    await expect(dashboardPageFixture.getNavLink(link3)).toBeVisible();
    await expect(dashboardPageFixture.getNavLink(link4)).toBeVisible();
});

Given('User is on the dashboard page', async function (dashboardPageFixture) {
    await dashboardPageFixture.goto();
});

When('User clicks the {string} link in the navigation bar', async function (dashboardPageFixture, linkName) {
    await dashboardPageFixture.clickNavLink(linkName);
});

Then('User should be redirected to the {string} page', async function (dashboardPageFixture, expectedPage) {
    const url = dashboardPageFixture.page.url();
    expect(url.toLowerCase()).toContain(expectedPage.toLowerCase().replace(' ', ''));
});

When('User clicks the home icon on the navigation bar', async function (dashboardPageFixture) {
    await dashboardPageFixture.clickHomeIcon();
});

Then('User should be navigated to the dashboard page', async function (dashboardPageFixture) {
    const url = dashboardPageFixture.page.url();
    expect(url.toLowerCase()).toContain('dashboard');
});

Then('User should be logged out of the application', async function (dashboardPageFixture) {
    const url = dashboardPageFixture.page.url();
    expect(url.toLowerCase()).toContain('login');
});