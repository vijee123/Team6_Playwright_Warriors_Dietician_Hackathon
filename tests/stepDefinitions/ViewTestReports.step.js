import { logger } from '../utils/logger.js';
import{test} from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);


// Given('User is in dietician application dashboard page', async function ({myPatientPageFixture}) {
//     await myPatientPageFixture.gotoDashboard();
// });

// When('User clicks on My Patients button', async function ({myPatientPageFixture}) {
//     await myPatientPageFixture.clickMyPatientsNav();
// });

// Then('Patients already exist', async function () {
//   const count = await this.myPatientsPage.getPatientCount();
//   expect(count).toBeGreaterThan(0);
// });

////Patient info section
When('User clicks on {string} for a specific record', async function ({ viewTestReportFixture }, action) {
  await viewTestReportFixture.clickViewReportsForFirstPatient();
});

Then('Corresponding report for that record should be opened', async function ({ viewTestReportFixture }) {
  await expect(viewTestReportFixture.reportModal).toBeVisible();
});

Then('Title {string} should be displayed', async function ({ viewTestReportFixture }, title) {
  await expect(viewTestReportFixture.title).toHaveText(title);
});

Then('Patient id, name, email and contact number should be displayed', async function ({ viewTestReportFixture }) {
  await expect(viewTestReportFixture.patientDetails).toBeVisible();
});

Then('Close icon {string} should be displayed', async function ({ viewTestReportFixture }, closeIcon) {
  await expect(viewTestReportFixture.closeIcon).toBeVisible();
});

//report table section

Then('Reports table should be displayed', async function ({ viewTestReportFixture }) {
  await expect(viewTestReportFixture.table).toBeVisible();
});

Then('Table headers should be displayed:', async function ({ viewTestReportFixture }, dataTable) {
  const expectedHeaders = dataTable.raw().flat();
  const actualHeaders = await viewTestReportFixture.getTableHeaders();
  expect(actualHeaders).toEqual(expectedHeaders);
});

Then('Table columns should be in order:', async function ({ viewTestReportFixture }, dataTable) {
  const expectedOrder = dataTable.raw().flat();
  const actualOrder = await viewTestReportFixture.getTableHeaders();
  expect(actualOrder).toEqual(expectedOrder);
});

Then('Pagination controls first, previous, next, last should be displayed', async function ({ viewTestReportFixture }) {
  await expect(viewTestReportFixture.firstBtn).toBeVisible();
  await expect(viewTestReportFixture.prevBtn).toBeVisible();
  await expect(viewTestReportFixture.nextBtn).toBeVisible();
  await expect(viewTestReportFixture.lastBtn).toBeVisible();
});


///Table data

Then('Each report should display:', async function ({ viewTestReportFixture }, dataTable) {
  const fields = dataTable.raw().flat();
  for (const field of fields) {
    const isVisible = await viewTestReportFixture.verifyColumn(field);
    expect(isVisible).toBeTruthy();
  }
});

Then('Each report should display vitals information', async function ({ viewTestReportFixture }) {
  await expect(viewTestReportFixture.vitalsColumn).toBeVisible();
});

Then('Vitals should be in order Weight -> Height -> Temperature -> SP -> DP', async function ({ viewTestReportFixture }) {
  const vitals = await viewTestReportFixture.getVitalsText();
  expect(vitals).toContain('Weight');
  expect(vitals).toContain('Height');
  expect(vitals).toContain('Temperature');
  expect(vitals).toContain('SP');
  expect(vitals).toContain('DP');
});

Then('Vitals should be displayed in multiline format', async function ({ viewTestReportFixture }) {
  const vitals = await viewTestReportFixture.getVitalsText();
  expect(vitals).toContain('\n');
});

Then('Each report should display identified health conditions', async function ({ viewTestReportFixture }) {
  await expect(viewTestReportFixture.healthConditions).toBeVisible();
});

Then('Health conditions should be displayed in multiline format', async function ({ viewTestReportFixture }) {
  const text = await viewTestReportFixture.getHealthConditionsText();
  expect(text).toContain('\n');
});

// ////View PDF

// When('User clicks on {string} button for a record', async function ({ viewTestReportFixture }, button) {
//   await viewTestReportFixture.clickViewPDF();
// });

// Then('Corresponding PDF report for that record should be opened', async function ({ viewTestReportFixture }) {
//   const [newPage] = await Promise.all([
//     viewTestReportFixture.context.waitForEvent('page'),
//     viewTestReportFixture.clickViewPDF()
//   ]);
//   await newPage.waitForLoadState();
//   expect(newPage.url()).toContain('.pdf');
// });


// /// pagination with multiple records

// Given('User is on View Patient Test Reports page', async function ({ viewTestReportFixture }) {
//     await viewTestReportFixture.openReportForFirstPatient();
// });

// Given('Multiple patient records exist', async function ({ viewTestReportFixture }) {
//   const count = await viewTestReportFixture.getRowCount();
//   expect(count).toBeGreaterThan(1); 
// });


// When('User clicks on next page arrow ">"', async function ({ viewTestReportFixture }) {
//   await viewTestReportFixture.clickArrow('>');
// });
// Then('Next set of patient records should be displayed', async function ({ viewTestReportFixture }) {
//   const rows = await viewTestReportFixture.getRowCount();
//   expect(rows).toBeGreaterThan(0); 
// });


// When('User clicks on previous page arrow "<"', async function ({ viewTestReportFixture }) {
//   await viewTestReportFixture.clickArrow('<');
// });
// Then('Previous set of patient records should be displayed', async function ({ viewTestReportFixture }) {
//   const rows = await viewTestReportFixture.getRowCount();
//   expect(rows).toBeGreaterThan(0);
// });


// When('User clicks on first page arrow "<<"', async function ({ viewTestReportFixture }) {
//   await viewTestReportFixture.clickArrow('<<');
// });
// Then('First page of patient records should be displayed', async function ({ viewTestReportFixture }) {
//   const currentPage = await viewTestReportFixture.getCurrentPageNumber();
//   expect(currentPage).toBe(1);
// });


// When('User clicks on last page arrow ">>"', async function ({ viewTestReportFixture }) {
//   await viewTestReportFixture.clickArrow('>>');
// });
// Then('Last page of patient records should be displayed', async function ({ viewTestReportFixture }) {
//   const lastPage = await viewTestReportFixture.getTotalPages();
//   const currentPage = await viewTestReportFixture.getCurrentPageNumber();
//   expect(currentPage).toBe(lastPage);
// });


// When('User clicks on any pagination control', async function ({ viewTestReportFixture }) {
//    await viewTestReportFixture.clickArrow('>');
// });
// Then('Pagination text should display correct range and total number of patients', async function ({ viewTestReportFixture }) {
//   const text = await viewTestReportFixture.getPaginationText();
//   expect(text).toMatch(/Showing \d+ to \d+ of \d+ patients/);
// });


// // // When('User navigates to any page', async function ({ viewTestReportFixture }) {
// // //    await viewTestReportFixture.clickArrow('>');
// // // });
// // // Then('Pagination controls should be displayed', async function ({ viewTestReportFixture }) {
// // //   await expect(viewTestReportFixture.firstBtn).toBeVisible();
// // //   await expect(viewTestReportFixture.prevBtn).toBeVisible();
// // //   await expect(viewTestReportFixture.nextBtn).toBeVisible();
// // //   await expect(viewTestReportFixture.lastBtn).toBeVisible();
// // });


// /// pagination arrows

// When('User clicks on {string} arrow', async function ({ viewTestReportFixture }, arrow) {
//   await viewTestReportFixture.clickArrow(arrow);
// });

// Then('Pagination text should display correct range', async function ({ viewTestReportFixture }) {
//   await expect(viewTestReportFixture.paginationText).toContainText('Showing');
// });

// Then('{string} should be {string}', async function ({ viewTestReportFixture }, arrow, state) {
//   const element = viewTestReportFixture.getArrow(arrow);
//   if (state === 'disabled') await expect(element).toBeDisabled();
//   else await expect(element).toBeEnabled();
// });


// //// record per page

// Then('User should see only {int} records per page', async function ({ viewTestReportFixture }, count) {
//   const rows = await viewTestReportFixture.getRowCount();
//   expect(rows).toBeLessThanOrEqual(count);
// });