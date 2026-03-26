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

Then('The user be on Dashboard after Login', async function () {
    dashboardPage = new DashboardPage(this.page);
    await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard'); // adjust selector
});

Then('The user sees Login error message {string}', async function (errorMessage) {
    const message = await loginPage.getLoginErrorMessage();
    expect(message).toBe(errorMessage);
});

Then('The user should see Dashboard page with title {string}, Home icon', async function (pageTitle) {
    dashboardPage = new DashboardPage(this.page);
    await expect(this.page).toHaveTitle(pageTitle);
    await expect(dashboardPage.homeIcon).toBeVisible();
});

Then('The user should see four links {string}, {string}, {string}, and {string}', async function (link1, link2, link3, link4) {
    dashboardPage = new DashboardPage(this.page);
    await expect(dashboardPage.getNavLink(link1)).toBeVisible();
    await expect(dashboardPage.getNavLink(link2)).toBeVisible();
    await expect(dashboardPage.getNavLink(link3)).toBeVisible();
    await expect(dashboardPage.getNavLink(link4)).toBeVisible();
});

Given('User is on the dashboard page', async function () {
    dashboardPage = new DashboardPage(this.page);
    await dashboardPage.goto();
});

When('User clicks the {string} link in the navigation bar', async function (linkName) {
    await dashboardPage.clickNavLink(linkName);
});

Then('User should be redirected to the {string} page', async function (expectedPage) {
    const url = this.page.url();
    expect(url.toLowerCase()).toContain(expectedPage.toLowerCase().replace(' ', ''));
});

When('User clicks the home icon on the navigation bar', async function () {
    await dashboardPage.clickHomeIcon();
});

Then('User should be navigated to the dashboard page', async function () {
    const url = this.page.url();
    expect(url.toLowerCase()).toContain('dashboard');
});

Then('User should be logged out of the application', async function () {
    const url = this.page.url();
    expect(url.toLowerCase()).toContain('login');
});