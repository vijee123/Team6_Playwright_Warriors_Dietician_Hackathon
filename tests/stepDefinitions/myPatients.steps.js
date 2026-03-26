import { MyPatientsPage } from '../../pages/MyPatientsPage';
import{test} from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);


Given('User is logged into the application', async function (myPatientPageFixture) {
    // Assuming login steps are handled in a common page object
       await myPatientPageFixture.loginWithValidCredentials(); 
});

Given('User is in dietician application dashboard page', async function (myPatientPageFixture) {
    await myPatientPageFixture.gotoDashboard();
});

When('User clicks on My Patients button', async function (myPatientPageFixture) {
    await myPatientPageFixture.clickMyPatientsNav();
});

Then('Page header {string} should be displayed', async function (headerText) {
    await expect(myPatientPageFixture.pageHeader).toHaveText(headerText);
});

Then('Search bar should be displayed', async function () {
    await expect(myPatientPageFixture.searchInput).toBeVisible();
});

Then('Search icon should be displayed inside the search bar', async function (myPatientPageFixture) {
    await expect(myPatientPageFixture.searchIcon).toBeVisible();
});

Then('Placeholder text {string} should be displayed', async function (myPatientPageFixture, placeholder) {
    expect(await myPatientPageFixture.searchInput.getAttribute('placeholder')).toBe(placeholder);
});

Then('following table headers should be displayed', async function (myPatientPageFixture, dataTable) {
    const headers = dataTable.raw().flat();
    for (const header of headers) {
        await expect(myPatientPageFixture.getTableHeader(header)).toBeVisible();
    }
});

Then('following columns should have sorting icons', async function (myPatientPageFixture, dataTable) {
    const columns = dataTable.raw().flat();
    for (const col of columns) {
        await expect(myPatientPageFixture.getSortIcon(col)).toBeVisible();
    }
});

Then('All columns should have values', async function () {
    const allRows = await myPatientPageFixture.getAllTableRows();
    for (const row of allRows) {
        for (const cell of row.cells) {
            expect(cell).not.toBe('');
        }
    }
});

Then('each patient record should contain', async function (myPatientPageFixture, dataTable) {
    const fields = dataTable.raw().flat();
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        for (const field of fields) {
            expect(row[field]).not.toBe('');
        }
    }
});

Then('Details column should display following for each patient', async function (myPatientPageFixture, dataTable) {
    const fields = dataTable.raw().flat();
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        for (const field of fields) {
            expect(row.details[field]).not.toBe('');
        }
    }
});

Then('Details should be displayed in multiline format', async function () {
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        expect(row.detailsText.includes('\n')).toBe(true);
    }
});

Then('{string} should be displayed in {string} format for each patient record', async function (myPatientPageFixture,field, format) {
    const rows = await myPatientPageFixture.getAllTableRows();
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
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        for (const action of actions) {
            expect(await myPatientPageFixture.getActionButton(row.id, action)).toBeVisible();
        }
    }
});

Then('Edit icon should be displayed for each patient record', async function (myPatientPageFixture) {
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        expect(await myPatientPageFixture.getEditIcon(row.id)).toBeVisible();
    }
});

Then('Delete icon should be displayed for each patient record', async function (myPatientPageFixture) {
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        expect(await myPatientPageFixture.getDeleteIcon(row.id)).toBeVisible();
    }
});

Given('User logged into the application without patient records', async function (myPatientPageFixture) {
    myPatientsPage = new MyPatientsPage(this.page);
    await myPatientPageFixture.loginWithValidCredentials();
    await myPatientPageFixture.clearPatientRecords(); // to remove all records for empty state test
});

Then('My Patients page should display empty table', async function (myPatientPageFixture) {
    expect(await myPatientPageFixture.isTableEmpty()).toBe(true);
});

Given('User is in My Patients page', async function (myPatientPageFixture) {
    await myPatientPageFixture.gotoMyPatients();
});

When('User clicks {string} arrow on {string} column', async function (myPatientPageFixture, direction, column) {
    await myPatientPageFixture.sortColumn(column, direction);
});

Then('Patient records should be sorted in {string} order by {string}', async function (myPatientPageFixture, order, column) {
    const values = await myPatientPageFixture.getColumnValues(column);
    const sortedValues = [...values].sort();
    if (order === 'descending') sortedValues.reverse();
    expect(values).toEqual(sortedValues);
});

When('User searches using {string}', async function (myPatientPageFixture, criteria) {
    await myPatientPageFixture.searchPatient(criteria);
});

Then('Matching patient details should be displayed', async function (myPatientPageFixture) {
    const results = await myPatientPageFixture.getAllTableRows();
    expect(results.length).toBeGreaterThan(0);
});

When('User clears the search text', async function (myPatientPageFixture) {
    await myPatientPageFixture.clearSearch();
});

Then('All patient records should be displayed again', async function (myPatientPageFixture) {
    const allRows = await myPatientPageFixture.getAllTableRows();
    expect(allRows.length).toBeGreaterThan(0);
});

Given('User is in {string} of My Patients page', async function (myPatientPageFixture, pagePosition) {
    await myPatientPageFixture.goToPagePosition(pagePosition);
});

When('User clicks {string} arrow', async function (myPatientPageFixture, action) {
    await myPatientPageFixture.clickPaginationArrow(action);
});

Then('{string} should be displayed', async function (myPatientPageFixture, expectedResult) {
    expect(await myPatientPageFixture.verifyPaginationResult(expectedResult)).toBe(true);
});

Then('Pagination text should display correct range and total number of patients', async function (myPatientPageFixture) {
    expect(await myPatientPageFixture.verifyPaginationText()).toBe(true);
});

Then('Pagination controls should be displayed', async function (myPatientPageFixture) {
    expect(await myPatientPageFixture.arePaginationControlsVisible()).toBe(true);
});

Then('{string} should be {string}', async function (myPatientPageFixture, arrow, state) {
    expect(await myPatientPageFixture.getPaginationArrowState(arrow)).toBe(state);
});