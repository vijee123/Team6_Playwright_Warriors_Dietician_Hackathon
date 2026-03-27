import { MyPatientsPage } from '../../pages/MyPatientsPage';
import{test} from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);


Given('User is logged into the application', async function ({myPatientPageFixture}) {
       await myPatientPageFixture.loginWithValidCredentials(); 
});

Given('User is in dietician application dashboard page', async function ({myPatientPageFixture}) {
    await myPatientPageFixture.gotoDashboard();
});

When('User clicks on My Patients button', async function ({myPatientPageFixture}) {
    await myPatientPageFixture.clickMyPatientsNav();
});

/////////header and search bar validation steps

Then('Page header {string} should be displayed', async function ({myPatientPageFixture}, headerText) {
    await expect(myPatientPageFixture.pageHeader).toHaveText(headerText);
});

Then('Search bar should be displayed', async function ({myPatientPageFixture}) {
    await expect(myPatientPageFixture.searchInput).toBeVisible();
});

Then('Search icon should be displayed inside the search bar', async function ({myPatientPageFixture}) {
    await expect(myPatientPageFixture.searchIcon).toBeVisible();
});

Then('Placeholder text {string} should be displayed', async function ({myPatientPageFixture}, placeholder) {
    expect(await myPatientPageFixture.searchInput.getAttribute('placeholder')).toBe(placeholder);
});



/////////table headers and columns validation steps

Then('following table headers should be displayed', async function ({myPatientPageFixture}, dataTable) {
    const headers = dataTable.raw().flat();
    for (const header of headers) {
        await expect(myPatientPageFixture.getTableHeader(header)).toBeVisible();
    }
});

Then('following columns should have sorting icons', async function ({myPatientPageFixture}, dataTable) {
    const columns = dataTable.raw().flat();
    for (const col of columns) {
        await expect(myPatientPageFixture.getSortIcon(col)).toBeVisible();
    }
});

////////////table data validation steps
Then('All columns should have values', async function ({myPatientPageFixture}) {
    const allRows = await myPatientPageFixture.getAllTableRows();
    for (const row of allRows) {
        for (const cell of row.cells) {
            expect(cell).not.toBe('');
        }
    }
});

Then('each patient record should contain', async function ({myPatientPageFixture}, dataTable) {
    const fields = dataTable.raw().flat();
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        for (const field of fields) {
            expect(row[field]).not.toBe('');
        }
    }
});

Then('Details column should display following for each patient', async function ({myPatientPageFixture}, dataTable) {
    const fields = dataTable.raw().flat();
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        for (const field of fields) {
            expect(row.details[field]).not.toBe('');
        }
    }
});

Then('Details should be displayed in multiline format', async function ({myPatientPageFixture}) {
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        expect(row.detailsText.includes('\n')).toBe(true);
    }
});


////////validation of data formats and actions
Then('{string} should be displayed in {string} format for each patient record', async function ({myPatientPageFixture},field, format) {
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

/////////actions validation steps
Then('following actions should be available for each patient', async function ({myPatientPageFixture}, dataTable) {
    const actions = dataTable.raw().flat();
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        for (const action of actions) {
            expect(await myPatientPageFixture.getActionButton(row.id, action)).toBeVisible();
        }
    }
});

Then('Edit icon should be displayed for each patient record', async function ({myPatientPageFixture}) {
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        expect(await myPatientPageFixture.getEditIcon(row.id)).toBeVisible();
    }
});

Then('Delete icon should be displayed for each patient record', async function ({myPatientPageFixture}) {
    const rows = await myPatientPageFixture.getAllTableRows();
    for (const row of rows) {
        expect(await myPatientPageFixture.getDeleteIcon(row.id)).toBeVisible();
    }
});

/////////validation of empty state of the table
Given('User logged into the application without patient records', async function ({myPatientPageFixture}) {
    myPatientsPage = new MyPatientsPage(this.page);
    await myPatientPageFixture.loginWithValidCredentials();
    await myPatientPageFixture.clearPatientRecords(); // to remove all records for empty state test
});

Then('My Patients page should display empty table', async function ({myPatientPageFixture}) {
    expect(await myPatientPageFixture.isTableEmpty()).toBe(true);
});

/////
Given('User is in My Patients page', async function ({myPatientPageFixture}) {
    await myPatientPageFixture.gotoMyPatients();
});

When('User clicks {string} arrow on {string} column', async function ({myPatientPageFixture}, direction, column) {
    await myPatientPageFixture.sortColumn(column, direction);
});

Then('Patient records should be sorted in {string} order by {string}', async function ({myPatientPageFixture}, order, column) {
    const values = await myPatientPageFixture.getColumnValues(column);
    const sortedValues = [...values].sort();
    if (order === 'descending') sortedValues.reverse();
    expect(values).toEqual(sortedValues);
});


/////////validation of search functionality

When('User searches using {string}', async function ({myPatientPageFixture}, criteria) {
    await myPatientPageFixture.searchPatient(criteria);
});

Then('Matching patient details should be displayed', async function ({myPatientPageFixture}) {
    const results = await myPatientPageFixture.getAllTableRows();
    expect(results.length).toBeGreaterThan(0);
});

Given('User entered text in search box', async ({ myPatientPageFixture }) => {
  await myPatientPageFixture.enterSearchText('test'); // Replace 'test' with dynamic text if needed
});

When('User clears the search text', async function ({myPatientPageFixture}) {
    await myPatientPageFixture.clearSearch();
});

Then('All patient records should be displayed again', async function ({myPatientPageFixture}) {
    const allRows = await myPatientPageFixture.getAllTableRows();
    expect(allRows.length).toBeGreaterThan(0);
});

//////////navigation pagination functionality
Given('User is in {string} of My Patients page', async ({ myPatientPageFixture }, page_position) => {
  await myPatientPageFixture.navigateToPage(page_position);
});

When('User clicks {string} arrow', async ({ myPatientPageFixture }, action) => {
    await myPatientPageFixture.clickPagination(action);
});

Then('{string} should be displayed', async ({ myPatientPageFixture }, expected_result) => {
   const actualResult = await myPatientPageFixture.getPaginationResult();
  expect(actualResult).toContain(expected_result); 
});

///////validation of pagination controls and text

Given('User is in any page of My Patients page', async ({ myPatientPageFixture }) => {
    await myPatientPageFixture.verifyPageLoaded();
});

When('User navigates to any page', async ({ myPatientPageFixture }) => {
    await myPatientPageFixture.navigateToPage('any');
});

Then('Pagination text should display correct range and total number of patients', async ({ myPatientPageFixture }) => {
  const paginationText = await myPatientPageFixture.getPaginationText();
  expect(paginationText).toMatch(/\d+\s*-\s*\d+\s*of\s*\d+/); 
 });

Then('Pagination controls should be displayed', async ({ myPatientPageFixture }) => {
  const controls = await myPatientPageFixture.getPaginationControls();
  for (const control of controls) {
    await expect(control).toBeVisible();
  }
});

// ///pagination arrow states validation
// Given('User is in {string} of My Patients page', async ({ myPatientPageFixture }, page_position) => {
//    await myPatientPageFixture.navigateToPage(page_position);
// });

// When('User navigates to that page', async ({ myPatientPageFixture }) => {
//   await myPatientPageFixture.verifyPageLoaded();
// });

// Then('{string} should be {string}', async ({ myPatientPageFixture }, arrow, state) => {
//   if (arrow === 'All arrows') {
//     // For "middle page", check all four arrows
//     const arrows = await myPatientPageFixture.getAllPaginationArrows();
//     for (const element of arrows) {
//       if (state === 'disabled') {
//         await expect(element).toBeDisabled();
//       } else {
//         await expect(element).toBeEnabled();
//       }
//     }
//   } else {
//    const element = await myPatientPageFixture.getPaginationArrow(arrow);
//     if (state === 'disabled') {
//       await expect(element).toBeDisabled();
//     } else {
//       await expect(element).toBeEnabled();
//     }
//   }
// });
