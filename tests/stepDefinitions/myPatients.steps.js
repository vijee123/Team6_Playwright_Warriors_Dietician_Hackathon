import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();
const { MyPatientsPage } = require('../pages/MyPatientsPage');


let myPatientsPage;

Given('User is logged into the application', async function () {
    // Assuming login steps are handled in a common page object
    myPatientsPage = new MyPatientsPage(this.page);
    await myPatientsPage.loginWithValidCredentials(); 
});

Given('User is in dietician application dashboard page', async function () {
    await myPatientsPage.gotoDashboard();
});

When('User clicks on My Patients button', async function () {
    await myPatientsPage.clickMyPatientsNav();
});

Then('Page header {string} should be displayed', async function (headerText) {
    await expect(myPatientsPage.pageHeader).toHaveText(headerText);
});

Then('Search bar should be displayed', async function () {
    await expect(myPatientsPage.searchInput).toBeVisible();
});

Then('Search icon should be displayed inside the search bar', async function () {
    await expect(myPatientsPage.searchIcon).toBeVisible();
});

Then('Placeholder text {string} should be displayed', async function (placeholder) {
    expect(await myPatientsPage.searchInput.getAttribute('placeholder')).toBe(placeholder);
});

Then('following table headers should be displayed', async function (dataTable) {
    const headers = dataTable.raw().flat();
    for (const header of headers) {
        await expect(myPatientsPage.getTableHeader(header)).toBeVisible();
    }
});

Then('following columns should have sorting icons', async function (dataTable) {
    const columns = dataTable.raw().flat();
    for (const col of columns) {
        await expect(myPatientsPage.getSortIcon(col)).toBeVisible();
    }
});

Then('All columns should have values', async function () {
    const allRows = await myPatientsPage.getAllTableRows();
    for (const row of allRows) {
        for (const cell of row.cells) {
            expect(cell).not.toBe('');
        }
    }
});

Then('each patient record should contain', async function (dataTable) {
    const fields = dataTable.raw().flat();
    const rows = await myPatientsPage.getAllTableRows();
    for (const row of rows) {
        for (const field of fields) {
            expect(row[field]).not.toBe('');
        }
    }
});

Then('Details column should display following for each patient', async function (dataTable) {
    const fields = dataTable.raw().flat();
    const rows = await myPatientsPage.getAllTableRows();
    for (const row of rows) {
        for (const field of fields) {
            expect(row.details[field]).not.toBe('');
        }
    }
});

Then('Details should be displayed in multiline format', async function () {
    const rows = await myPatientsPage.getAllTableRows();
    for (const row of rows) {
        expect(row.detailsText.includes('\n')).toBe(true);
    }
});

Then('{string} should be displayed in {string} format for each patient record', async function (field, format) {
    const rows = await myPatientsPage.getAllTableRows();
    for (const row of rows) {
        const value = row.details[field] || row[field];
        switch (format) {
            case 'valid email':
                expect(value).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
                break;
            case 'valid digits':
                expect(value).toMatch(/^\d+$/);
                break;
            case 'dd-mm-yyyy':
                expect(value).toMatch(/^\d{2}-\d{2}-\d{4}$/);
                break;
            default:
                throw new Error(`Unknown format: ${format}`);
        }
    }
});

Then('following actions should be available for each patient', async function (dataTable) {
    const actions = dataTable.raw().flat();
    const rows = await myPatientsPage.getAllTableRows();
    for (const row of rows) {
        for (const action of actions) {
            expect(await myPatientsPage.getActionButton(row.id, action)).toBeVisible();
        }
    }
});

Then('Edit icon should be displayed for each patient record', async function () {
    const rows = await myPatientsPage.getAllTableRows();
    for (const row of rows) {
        expect(await myPatientsPage.getEditIcon(row.id)).toBeVisible();
    }
});

Then('Delete icon should be displayed for each patient record', async function () {
    const rows = await myPatientsPage.getAllTableRows();
    for (const row of rows) {
        expect(await myPatientsPage.getDeleteIcon(row.id)).toBeVisible();
    }
});

Given('User logged into the application without patient records', async function () {
    myPatientsPage = new MyPatientsPage(this.page);
    await myPatientsPage.loginWithValidCredentials();
    await myPatientsPage.clearPatientRecords(); // to remove all records for empty state test
});

Then('My Patients page should display empty table', async function () {
    expect(await myPatientsPage.isTableEmpty()).toBe(true);
});

Given('User is in My Patients page', async function () {
    await myPatientsPage.gotoMyPatients();
});

When('User clicks {string} arrow on {string} column', async function (direction, column) {
    await myPatientsPage.sortColumn(column, direction);
});

Then('Patient records should be sorted in {string} order by {string}', async function (order, column) {
    const values = await myPatientsPage.getColumnValues(column);
    const sortedValues = [...values].sort();
    if (order === 'descending') sortedValues.reverse();
    expect(values).toEqual(sortedValues);
});

When('User searches using {string}', async function (criteria) {
    await myPatientsPage.searchPatient(criteria);
});

Then('Matching patient details should be displayed', async function () {
    const results = await myPatientsPage.getAllTableRows();
    expect(results.length).toBeGreaterThan(0);
});

When('User clears the search text', async function () {
    await myPatientsPage.clearSearch();
});

Then('All patient records should be displayed again', async function () {
    const allRows = await myPatientsPage.getAllTableRows();
    expect(allRows.length).toBeGreaterThan(0);
});

Given('User is in {string} of My Patients page', async function (pagePosition) {
    await myPatientsPage.goToPagePosition(pagePosition);
});

When('User clicks {string} arrow', async function (action) {
    await myPatientsPage.clickPaginationArrow(action);
});

Then('{string} should be displayed', async function (expectedResult) {
    expect(await myPatientsPage.verifyPaginationResult(expectedResult)).toBe(true);
});

Then('Pagination text should display correct range and total number of patients', async function () {
    expect(await myPatientsPage.verifyPaginationText()).toBe(true);
});

Then('Pagination controls should be displayed', async function () {
    expect(await myPatientsPage.arePaginationControlsVisible()).toBe(true);
});

Then('{string} should be {string}', async function (arrow, state) {
    expect(await myPatientsPage.getPaginationArrowState(arrow)).toBe(state);
});