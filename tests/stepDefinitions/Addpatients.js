// step_definitions/AddPatientSteps.js
import { test } from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);

import ExcelUtil from '../utils/ExcelReader.js';
import DateUtils from '../utils/dateformatutils.js';
import AddPatientPage from '../../pages/AddPatientsPage.js';
import CommonMethods from '../utils/commonHelpers.js';
import DashboardPage from '../../pages/DashboardPage.js';
import { logger } from '../utils/logger.js';
import { expect } from 'allure-playwright';


Given('The user is on the home page', async function ({ page }) {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.goto();
  logger.info('Navigated to home page');
});

When('The user clicks on new patient tab in the header section', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.openDialog();
  logger.info('Add Patient dialog opened');
});

Then('The user should be able to view the dialog box to add patients', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const isVisible = await addPatientPage.dialog.isVisible();
  expect(isVisible).toBe(true);
  logger.info('Add Patient dialog is visible');
});


Then("The user should be able to view {int} input fields in the dialog box", async function ({ page }, count) {
  const inputs = page.locator('input[type="file"]');
  const inputCount = await inputs.count();
  expect(inputCount).toBeGreaterThanOrEqual(count);
});

Then("The user should be able to view {int} dropdowns in the dialog box", async function ({ page }, count) {
  const dropdowns = page.locator('input[type="dropdown"]');
  const inputCount = await dropdowns.count();
  expect(inputCount).toBeGreaterThanOrEqual(count);
  logger.info("User should be able to view 3 dropdowns in the dialog box...");
});



Then("The user should be able to view a date picker field with MM-DD-YYYY displayed", async function ({ page }) {
  const isVisible = await page.locator('input[type="date"]').isVisible();
  expect(isVisible).toBe(true);
  logger.info("Date picker field is visible in the dialog box...");
});
//

Then("The user should be able to view file upload button in the dialog box", async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const isVisible = await addPatientPage.isFileUploadVisible();
  expect(isVisible).toBe(true);
  logger.info("File upload button is visible in the dialog box...");
});


Then("The user should be able to view submit button in the dialog box", async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const isVisible = await addPatientPage.isSubmitButtonVisible();
  expect(isVisible).toBe(true);
  logger.info("Submit button is visible in the dialog box...");
});


Then("The user should be able to view close button in the dialog box", async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const isVisible = await addPatientPage.isCloseButtonVisible();
  expect(isVisible).toBe(true);
  logger.info("Close button is visible in the dialog box...");
});


Then("The close button should be enabled in the dialog box", async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const isEnabled = await addPatientPage.isCloseButtonEnabled();
  expect(isEnabled).toBe(true);
  logger.info("Close button is enabled in the dialog box...");
});

Then('The user should be able to view the mandatory fields with {string}', async function ({ page }, field) {
  const addPatientPage = new AddPatientPage(page);
  const isPresent = await addPatientPage.isMandatoryIndicatorPresent(field);
  expect(isPresent).toBe(true);
  logger.info(`Mandatory field "${field}" is visible`);
});


Then('The user should be able to view non-mandatory fields with {string}', async function ({ page }, field) {
  const addPatientPage = new AddPatientPage(page);
  const isPresent = await addPatientPage.isNonMandatoryIndicatorPresent(field);
  expect(isPresent).toBe(false);
  logger.info(`Non-mandatory field "${field}" is visible`);
});




Then("The user should be able to view {int} file upload button in the dialog box", async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await expect(addPatientPage.fileUpload).toBeVisible();
  logger.info("File upload button is visible in the dialog box...");
});


Then("The user should be able to view text 'No file chosen'", async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const fileUploadText = await addPatientPage.fileUploadText.textContent();
  expect(fileUploadText).toBe("No file chosen");
  logger.info('File upload button displays "No file chosen" text by default...');
});

Then("The user should be able to view scroll bar on the right side of the dialog box", async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const hasScroll = await addPatientPage.dialog.evaluate(el =>
    el.scrollHeight > el.clientHeight
  );
  expect(hasScroll).toBeTruthy();
  logger.info("Scroll bar is visible on the right side of the dialog box...");
});


// dropdown

When("User clicks on the dropdown for Allergy", async function ({ page }) {
  await page.getByPlaceholder("Allergy").click();
});

When("User clicks on the dropdown for Food Preference", async function ({ page }) {
  await page.getByPlaceholder("Food Preference").click();
});

When("User clicks on the dropdown for Cuisine Category", async function ({ page }) {
  await page.getByPlaceholder("Cuisine Category").click();
});

Then("values should be visible in the Allergy dropdown", async function ({ page }) {
  await expect(page.locator("option")).toBeVisible();
});

Then("Values should be present inside Cuisine dropdown", async function ({ page }) {
  await expect(page.locator("option")).toBeVisible();
});



Then("Dropdown should contain {int} values", async function ({ page }, count) {
  const options = await page.locator("option").count();
  expect(options).toBeGreaterThanOrEqual(count);
});

Then("Dropdown should contain {int} value", async function ({ page }, count) {
  const options = await page.locator("option").count();
  expect(options).toBeGreaterThanOrEqual(count);
  logger.info("Allergies Dropdown contains the expected number of values...");
});



Then("Allergy Dropdown should contain values", async function ({ page }, dataTable) {
  const expectedValues = dataTable.rows().map(row => row[0]);
  const dropdown = page.locator('select');
  const options = dropdown.locator('option');
  const actualValues = await options.allTextContents();
  expect(actualValues).toEqual(expectedValues);
});

Then("values should be visible in the Food Preference dropdown", async function ({ page }) {
  await expect(page.locator("option")).toBeVisible();
});

Then("Food Preference dropdown should contain {int} values", async function ({ page }, count) {
  const options = await page.locator("option").count();
  expect(options).toBeGreaterThanOrEqual(count);
});

Then("Dropdown should contain values", async function ({ page }, dataTable) {
  const expectedValues = dataTable.rows().map(row => row[0]);
  const dropdown = page.locator('select');
  const options = dropdown.locator('option');
  const actualValues = await options.allTextContents();
  expect(actualValues).toEqual(expectedValues);
  logger.info("Dropdown values are as expected...");
});

Then('dropdown should contain the following values', async function ({ page }, dataTable) {
  const expectedValues = dataTable.rows().map(row => row[0]);
  const dropdown = page.locator('select');
  const options = dropdown.locator('option');
  const actualValues = await options.allTextContents();
  expect(actualValues).toEqual(expectedValues);
  logger.info("Cuisine Category Dropdown values are as expected...");
});



// select
//Scenario:Select a single value from Allergy dropdown
When("User clicks on the single value from dropdown for Allergy", async function ({ page }) {
  await page.getByLabel("Allergy").click();
});

Then("Values should be visible in the dropdown", async function ({ page }) {
  await expect(page.locator("option")).toBeVisible();
  logger.info("Dropdown values are visible...");
});

Then("user should be able to select multiple values from the dropdown", async function ({ page }) {
  const options = page.locator("option");
  await options.nth(0).click();
  await options.nth(1).click();
  logger.info("User is able to select multiple values from the allergy dropdown...");
});


//Scenario:Select a single value from Food Preference dropdown
When("User clicks on the single value from dropdown for Food Preference", async function ({ page }) {
  await page.getByLabel("Food Preference").click();
});

Then("user should be able to select a single value from the dropdown for Food Preference", async function ({ page }) {
  const option = page.locator("option").first();
  await option.click();
  logger.info("User is able to select a single value from the dropdown...");
});



//Scenario:Select a single value from Cuisine Category dropdown
When("User clicks on the single value from dropdown for Cuisine Category", async function ({ page }) {
  await page.getByLabel("Cuisine Category").click();
});

Then("user should be able to select a single value from the dropdown", async function ({ page }) {
  const option = page.locator("option").first();
  await option.click();
  logger.info("User is able to select a single value from the dropdown...");
});



When("User clicks on the date picker for DOB field", async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.clickDOB();
  logger.info("User clicks on the date picker for DOB field...");
});

Then('User should see calender date picker displayed with Month,Day,Year', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await expect(addPatientPage.calendarPicker).toBeVisible();
  logger.info("Calendar date picker is displayed with Month, Day, Year...");
});

When("User clicks Date of Birth field and selects valid date {string}", async function ({ page }, dateString) {
  const addPatientPage = new AddPatientPage(page);
  const [monthStr, dayStr, yearStr] = dateString.split('/');
  const monthName = DateUtils.getMonthName(monthStr);
  await addPatientPage.selectDate(dayStr, monthName, yearStr);
  logger.info(`User selects date ${dateString} from the date picker for DOB field...`);
});

Then('User should see selected date in the DOB field', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const dobValue = await addPatientPage.getDOBValue();
  expect(dobValue).not.toBe('');
  console.log('Selected DOB:', dobValue);
});

//Scenario:Verify selected date is displayed in MM/DD/YYYY format
When("User clicks Date of Birth field, selects valid date {string} and clicks outside the calendar", async function ({ page }, dateString) {
  const addPatientPage = new AddPatientPage(page);
  const [monthStr, dayStr, yearStr] = dateString.split('/');
  const monthName = DateUtils.getMonthName(monthStr);
  await addPatientPage.selectDate(dayStr, monthName, yearStr);
  await addPatientPage.clickOutsideCalendar();
});

Then('User should see selected date in MM\\/DD\\/YYYY format in the DOB field', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const dobValue = await addPatientPage.getDOBValue();
  expect(DateUtils.isValidMMDDYYYY(dobValue)).toBe(true);
  console.log('DOB in MM/DD/YYYY format:', dobValue);
});

//Scenario:Prevent selection of future date in DOB field
When('User clicks Date of Birth field and selects future date {string}', async function ({ page }, dateString) {
  const addPatientPage = new AddPatientPage(page);
  const [monthStr, dayStr, yearStr] = dateString.split('/');
  const monthName = DateUtils.getMonthName(monthStr);
  await addPatientPage.selectDate(dayStr, monthName, yearStr);
});


Then("User should see the future date to be disabled", async function ({ page }) {
  const disabledFutureDays = page.locator('.react-datepicker__day--disabled');
  const count = await disabledFutureDays.count();
  expect(count).toBeGreaterThan(0);

  logger.info("Future date is disabled in the DOB date picker...");
});


When('User selects current date as DOB', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const today = new Date();
  const formatted = DateUtils.formatDate(today);
  const [year, month, day] = formatted.split('-');
  const monthName = DateUtils.getMonthName(month);
  await addPatientPage.selectDate(day, monthName, year);
});


Then('User should get error message {string}', async function ({ page }, errorMsg) {
  const errorLocator = page.locator('.error-message');
  await expect(errorLocator).toHaveText(errorMsg);
  logger.info("User sees error message for selecting current date as DOB...");
});


Then('User should see an error message {string}', async function ({ page }, errorMsg) {
  const errorLocator = page.locator('.error-message');
  await expect(errorLocator).toHaveText(errorMsg);
  logger.info("User sees error message for invalid date selection in DOB field...");
});


//enario:Boundary year Navigation

When('User selects date {int} in calendar', async function ({ page }, year) {
  await page.selectOption('.react-datepicker__year-select', year.toString());
});

Then("Years older than 100 years from today should be disabled in the calendar", async function ({ page }) {

  const oldDOB = DateUtils.getDOBOlderThan100Years();

  // 🔹 Extract year from YYYY-MM-DD
  const [oldYear] = oldDOB.split('-');

  // 🔹 Locate the ear in the calendar dropdown
  const yearOption = page
    .locator(`.react-datepicker__year-select option[value='${oldYear}']`);

  // 🔹 Verify that the year is disabled
  await expect(yearOption).toBeDisabled();

  console.log(`Year ${oldYear} is correctly disabled in the calendar.`);

  logger.info("Years older than 100 years from today are disabled in the calendar...");
});




Given('User is on Add Patient page', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.navigateToAddPatientPage();
});


When(
  'User enters patient details from Excel sheet for {string}',
  async function ({ page }, scenarioName) {
    const addPatientPage = new AddPatientPage(page);

    // 🔹 Get row from Excel using ScenarioName
    const data = ExcelUtil.getRow('addPatient', scenarioName);

    // ---------- TEXT FIELDS ----------

    await addPatientPage.firstName.fill(data.FirstName || '');
    await addPatientPage.lastName.fill(data.LastName || '');
    await addPatientPage.email.fill(data.Email || '');
    await addPatientPage.contact.fill(data.ContactNumber || '');
    await addPatientPage.dob.fill(data.DOB || '');

    await addPatientPage.weight.fill(data.Weight || '');
    await addPatientPage.height.fill(data.Height || '');
    await addPatientPage.temperature.fill(data.Temperature || '');

    await addPatientPage.sp.fill(data.SP || '');
    await addPatientPage.dp.fill(data.DP || '');



    if (data.Allergy)
      await addPatientPage.allergyDropdown.selectOption({ label: data.Allergy });

    if (data.FoodPreference)
      await addPatientPage.foodPreferenceDropdown.selectOption({ label: data.FoodPreference });

    if (data.CuisineCategory)
      await addPatientPage.cuisineDropdown.selectOption({ label: data.CuisineCategory });

  }
);


// Submit

When('User submits the form', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.submitBtn.click();
});

Then('User should see {string} from Excel', async function ({ page }, expectedResult) {
  const toast = page.locator('text=' + expectedResult);
  await expect(toast).toBeVisible();
  logger.info(`User sees expected result: ${expectedResult}`);
});




When('user fills mandatory patient details for scenario {string}', async function ({ page }, scenarioName) {
  const addPatientPage = new AddPatientPage(page);
  const testData = ExcelUtil.getRow('addPatient', scenarioName);

  let dobValue = testData.DOB;
  // Handle DOB if special value (future, leap year) is used in Excel
  if (dobValue.toLowerCase() === 'future') {
    dobValue = DateUtils.getFutureDOB();
  } else if (dobValue.toLowerCase() === 'leapyear') {
    dobValue = DateUtils.getLeapYearDOB();
  } else if (dobValue.toLowerCase() === 'olderthan100') {
    dobValue = DateUtils.getDOBOlderThan100Years();
  }

  await addPatientPage.fillMandatory({
    firstName: testData.FirstName,
    lastName: testData.LastName,
    email: testData.Email,
    contact: testData.ContactNumber,
    dob: dobValue,
    weight: testData.Weight
  });

  logger.info(`Mandatory fields filled for scenario: ${scenarioName}`);
});

When('user fills non-mandatory patient details for scenario {string}', async function ({ page }, scenarioName) {
  const addPatientPage = new AddPatientPage(page);
  const testData = ExcelUtil.getRow('addPatient', scenarioName);

  await addPatientPage.fillNonMandatory({
    height: testData.Height,
    bmi: testData.BMI,
    temperature: testData.Temperature,
    sp: testData.SP,
    dp: testData.DP,
  });

  logger.info(`Non-mandatory fields filled for scenario: ${scenarioName}`);
});



When('user submits the patient form', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.submit();
  logger.info('Patient form submitted');
});

Then('user should see success message {string}', async function ({ page }, expectedMessage) {
  const toast = page.locator('text=' + expectedMessage);
  expect(await toast.isVisible()).toBe(true);
  logger.info(`Success message displayed: ${expectedMessage}`);
});

Then('user should see error message {string}', async function ({ page }, expectedMessage) {
  const errorMsg = page.locator('text=' + expectedMessage);
  expect(await errorMsg.isVisible()).toBe(true);
  logger.info(`Error message displayed: ${expectedMessage}`);
});



// close

When("User clicks on the close button in the dialog box", async function ({ page }) {
  await page.getByRole("button", { name: /close/i }).click();
});

Then(
  "Add dialog should close and user should be on my patient page without new patient created",
  async function ({ page }) {
    const addPatientPage = new AddPatientPage(page);
    await expect(addPatientPage.dialog).not.toBeVisible();
  }
);


// ---------- NAVIGATION AFTER SUCCESS ----------

Then(
  "User should be navigated to My Patients page with new patients details created",
  async function ({ page }) {
    await expect(page).toHaveURL(/patients/i);
  }
);


// DOB

When('User clicks Date of Birth field and selects invalid date {int}\\/{int}\\/{int}', async function ({ page }, day, month, year) {
  const addPatientPage = new AddPatientPage(page);
  const monthName = CommonMethods.getMonthName(String(month));
  await addPatientPage.selectDate(String(day), monthName, String(year));
});

When('User enters {string} in the DOB field', async function ({ page }, dateString) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.dobField.fill(dateString);
  await page.keyboard.press('Tab');
});

When('User enters Feb {int} {int} in DOB', async function ({ page }, day, year) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.selectDate(String(day), 'February', String(year));
});

Then('User should be able to select the date without any error message', async function ({ page }) {
  const errorLocator = page.locator('.error-message');
  await expect(errorLocator).not.toBeVisible();
  logger.info("No error message displayed for the selected date...");
});


// Firstname

When('User navigate to next field after entering numeric data in First name field', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'FN_Numeric');
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill(data.FirstName || '');
  await page.keyboard.press('Tab');
});

Then('User should  see error message in Patient first name accepts only alphabets', async function ({ page }) {
  const errorLocator = page.locator('text=Patient first name accepts only alphabets');
  await expect(errorLocator).toBeVisible();
  logger.info("Error message displayed for first name...");
});

When('User navigate to next field after entering special characters in First name field', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'FN_SpecialChar');
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill(data.FirstName || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field leaving First name field empty', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill('');
  await page.keyboard.press('Tab');
});

Then('User should  see error message {string}', async function ({ page }, errorMsg) {
  const errorLocator = page.locator(`text=${errorMsg}`);
  await expect(errorLocator).toBeVisible();
  logger.info(`Error message displayed: ${errorMsg}`);
});


//Lastname

When('User navigate to next field after entering numeric data in Last name field', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'LN_Numeric');
  await addPatientPage.openDialog();
  await addPatientPage.lastName.fill(data.LastName || '');
  await page.keyboard.press('Tab');
});

Then('User should  see error message in Patient last name accepts only alphabets', async function ({ page }) {
  const errorLocator = page.locator('text=Patient last name accepts only alphabets');
  await expect(errorLocator).toBeVisible();
  logger.info("Error message displayed for last name...");
});

When('User navigate to next field after entering special characters in Last name field', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'LN_Numeric');
  await addPatientPage.openDialog();
  await addPatientPage.lastName.fill(data.LastName || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field leaving Last name field empty', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.openDialog();
  await addPatientPage.lastName.fill('');
  await page.keyboard.press('Tab');
});


// Email

When('User navigate to next field after entering email starting with number', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Email_NoAt');
  await addPatientPage.openDialog();
  await addPatientPage.email.fill(data.Email || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering email without @ symbol', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Email_NoAt');
  await addPatientPage.openDialog();
  await addPatientPage.email.fill(data.Email || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering email with special characters without @ symbol', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Email_NoAt');
  await addPatientPage.openDialog();
  await addPatientPage.email.fill(data.Email || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering email without .com', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Email_NoAt');
  await addPatientPage.openDialog();
  await addPatientPage.email.fill(data.Email || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering email which is already existing in the system', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Email_Exists');
  await addPatientPage.openDialog();
  await addPatientPage.email.fill(data.Email || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering all mandatory fields except email field', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill(data.FirstName || '');
  await addPatientPage.lastName.fill(data.LastName || '');
  await addPatientPage.email.fill('');
  await page.keyboard.press('Tab');
});


// Contact

When('User navigate to next field after  entering alphabets in contact number with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Contact_Alpha');
  await addPatientPage.openDialog();
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after  entering special characters in contact number with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Contact_Alpha');
  await addPatientPage.openDialog();
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after  entering less than required digits in contact number with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Contact_Short');
  await addPatientPage.openDialog();
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after  entering greater than required digits in contact number with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Contact_Short');
  await addPatientPage.openDialog();
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after  entering contact number which is already existing in the system with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.openDialog();
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after  entering all mandatory fields except contact number field', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill(data.FirstName || '');
  await addPatientPage.lastName.fill(data.LastName || '');
  await addPatientPage.email.fill(data.Email || '');
  await addPatientPage.contact.fill('');
  await page.keyboard.press('Tab');
});


// Mandatory

When('User navigate to next field leaving Allergies field empty with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Allergy_Empty');
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill(data.FirstName || '');
  await addPatientPage.lastName.fill(data.LastName || '');
  await addPatientPage.email.fill(data.Email || '');
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await addPatientPage.submitBtn.click();
});

When('User navigate to next field leaving Food Preference field empty with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Allergy_Empty');
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill(data.FirstName || '');
  await addPatientPage.lastName.fill(data.LastName || '');
  await addPatientPage.email.fill(data.Email || '');
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await addPatientPage.submitBtn.click();
});

When('User navigate to next field leaving Cusine Category field empty with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Allergy_Empty');
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill(data.FirstName || '');
  await addPatientPage.lastName.fill(data.LastName || '');
  await addPatientPage.email.fill(data.Email || '');
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await addPatientPage.submitBtn.click();
});

When('User navigate to next field leaving DOB field empty with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'DOB_Empty');
  await addPatientPage.openDialog();
  await addPatientPage.firstName.fill(data.FirstName || '');
  await addPatientPage.lastName.fill(data.LastName || '');
  await addPatientPage.email.fill(data.Email || '');
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await addPatientPage.submitBtn.click();
});


// Weight

When('User navigate to next field after entering valid weight data in weight field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.openDialog();
  await addPatientPage.weight.fill(data.Weight || '');
  await page.keyboard.press('Tab');
});

Then('User is directed to My Patient Page with New Patient Details created', async function ({ page }) {
  await expect(page).toHaveURL(/patients/i);
  logger.info("User is directed to My Patient Page...");
});

When('User navigate to next field after entering special characters in weight field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Weight_Special');
  await addPatientPage.openDialog();
  await addPatientPage.weight.fill(data.Weight || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering alphabets in weight field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Weight_Special');
  await addPatientPage.openDialog();
  await addPatientPage.weight.fill(data.Weight || '');
  await page.keyboard.press('Tab');
});


// Height

When('User navigate to next field after entering valid height data in height field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.openDialog();
  await addPatientPage.height.fill(data.Height || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering special characters in height field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Height_Alpha');
  await addPatientPage.openDialog();
  await addPatientPage.height.fill(data.Height || '');
  await page.keyboard.press('Tab');
});

Given('User navigate to next field after entering alphabets in height field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Height_Alpha');
  await addPatientPage.openDialog();
  await addPatientPage.height.fill(data.Height || '');
  await page.keyboard.press('Tab');
});


// Temp validation

Given('User navigate to next field after entering valid temperature data in temperature field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.openDialog();
  await addPatientPage.temperature.fill(data.Temperature || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering special characters in temperature field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Temp_Alpha');
  await addPatientPage.openDialog();
  await addPatientPage.temperature.fill(data.Temperature || '');
  await page.keyboard.press('Tab');
});

Given('User navigate to next field after entering alphabets in temperature field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'Temp_Alpha');
  await addPatientPage.openDialog();
  await addPatientPage.temperature.fill(data.Temperature || '');
  await page.keyboard.press('Tab');
});


// Sp, dp

Given('User navigate to next field after entering valid SP,DP data in SP,DP field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.openDialog();
  await addPatientPage.sp.fill(data.SP || '');
  await addPatientPage.dp.fill(data.DP || '');
  await page.keyboard.press('Tab');
});

Given('User navigate to next field after entering special characters in SP,DP field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'SPDP_Alpha');
  await addPatientPage.openDialog();
  await addPatientPage.sp.fill(data.SP || '');
  await addPatientPage.dp.fill(data.DP || '');
  await page.keyboard.press('Tab');
});

When('User navigate to next field after entering alphabets in SP,DP field with valid data in other mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'SPDP_Alpha');
  await addPatientPage.openDialog();
  await addPatientPage.sp.fill(data.SP || '');
  await addPatientPage.dp.fill(data.DP || '');
  await page.keyboard.press('Tab');
});


// File upload

When('User clicks Submit after uploading a valid file', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.submitBtn.click();
  logger.info("User clicks Submit after uploading a valid file...");
});

Then('User should be redirected to My Patient page with the uploaded file saved successfully', async function ({ page }) {
  await expect(page).toHaveURL(/patients/i);
  logger.info("User is redirected to My Patient page after file upload...");
});

When('User uploads health report in pdf', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.uploadFile('test-report.pdf');
  logger.info("User uploads health report in pdf...");
});

Then('User should be able to see the file name displayed with valid file name in the dialog box after successful upload', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const fileName = await addPatientPage.getUploadedFileName();
  expect(fileName).not.toBe('No file chosen');
  logger.info("File name is displayed after successful upload...");
});

When('User clicks {string} after being redirected to My Patient page for newly  created patient', async function ({ page }, buttonText) {
  await page.getByRole('button', { name: buttonText }).click();
  logger.info(`User clicks "${buttonText}" button...`);
});

Then('User should see upload date info in test report', async function ({ page }) {
  const uploadDate = page.locator('text=/uploaded/i');
  await expect(uploadDate).toBeVisible();
  logger.info("Upload date info is visible in test report...");
});

Then('User should see PDF file in test report', async function ({ page }) {
  const pdfFile = page.locator('text=.pdf');
  await expect(pdfFile).toBeVisible();
  logger.info("PDF file is visible in test report...");
});

Then('User should see health info detected from the health report like weight, height, BMI, temperature, SP, DP in test report', async function ({ page }) {
  await expect(page.locator('text=weight')).toBeVisible();
  logger.info("Health info is visible in test report...");
});

When('User uploads a file with other format', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.uploadFile('test-report.docx');
  logger.info("User uploads a file with other format...");
});

When('User uploads a file exceeding the size limit', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.uploadFile('large-report.pdf');
  logger.info("User uploads a file exceeding the size limit...");
});

Then('User should see error message {string}', async function ({ page }, errorMsg) {
  const errorLocator = page.locator(`text=${errorMsg}`);
  await expect(errorLocator).toBeVisible();
  logger.info(`Error message displayed: ${errorMsg}`);
});

When('User clicks Submit after entering valid data skips file upload', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  await addPatientPage.submitBtn.click();
  logger.info("User clicks Submit skipping file upload...");
});


// Submit

When('User enters valid values in all fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.firstName.fill(data.FirstName || '');
  await addPatientPage.lastName.fill(data.LastName || '');
  await addPatientPage.email.fill(data.Email || '');
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await addPatientPage.dob.fill(data.DOB || '');
  await addPatientPage.weight.fill(data.Weight || '');
  logger.info("User enters valid values in all fields...");
});

Then('submit button should be enabled in the dialog box', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const isEnabled = await addPatientPage.isSubmitButtonEnabled();
  expect(isEnabled).toBe(true);
  logger.info("Submit button is enabled...");
});

When('User clicks Submit after entering valid data in all mandatory fields', async function ({ page }) {
  const addPatientPage = new AddPatientPage(page);
  const data = ExcelUtil.getRow('addPatient', 'All_Valid');
  await addPatientPage.firstName.fill(data.FirstName || '');
  await addPatientPage.lastName.fill(data.LastName || '');
  await addPatientPage.email.fill(data.Email || '');
  await addPatientPage.contact.fill(data.ContactNumber || '');
  await addPatientPage.dob.fill(data.DOB || '');
  await addPatientPage.weight.fill(data.Weight || '');
  await addPatientPage.submitBtn.click();
  logger.info("User clicks Submit after entering valid data in all mandatory fields...");
});

Then('User should see {string} - toast message', async function ({ page }, message) {
  const toast = page.locator(`text=${message}`);
  await expect(toast).toBeVisible();
  logger.info(`Toast message displayed: ${message}`);
});