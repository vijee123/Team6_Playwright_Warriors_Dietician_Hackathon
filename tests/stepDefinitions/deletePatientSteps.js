import { logger } from '../utils/logger.js';
import{test} from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';
import { expect } from 'allure-playwright';

const { Given, When, Then } = createBdd(test);

Given('user clicks the Delete Icon of a patient after searching using contact number', async ({deletePatientFixture}) => {
  logger.info("The user clicks the delete icon of the top patient in the patient list");
  await deletePatientFixture.searchByContactNoAndClickDeleteIcon();
});


Then('the user should see the {string} element displaying this {string}', async ({deletePatientFixture}, element, expectedValue) => {
   logger.info(`User verifies the details dsiplayed on the popup element ${element}`);
   const actualValue = await deletePatientFixture.getDeletePopupDetail(element);
   expect(actualValue).toBe(expectedValue);
});

When('user clicks the NO button and dismiss the alert', async ({deletePatientFixture}) => {
  logger.info('User clicks the NO button on the delete popup');
  await deletePatientFixture.clickDeleteNoButton();

});

Then('user should return back to main page of patients', async ({deletePatientFixture}) => {
  logger.info('User should return to the patient table page..');
  const isVisible = await deletePatientFixture.patientPageVisible();
  expect(isVisible).toBe(true);
});

When('user clicks the OK button and accepts the alert', async ({deletePatientFixture}) => {
  logger.info('User clicks the YES button on the delete popup');
  await deletePatientFixture.clickDeleteYesButton();
});

Then('patient should be removed from the table', async ({deletePatientFixture}) => {
    logger.info('User verifies that patient is removed successfully...');
    const isDeleted = await deletePatientFixture.isPatientPresentInTable();
    expect(isDeleted).toBe(true);
});

Then('user should get a success message of delete', async ({deletePatientFixture}) => {
  logger.info('User verifies the display of successful delete message..');
  const isVisible = await deletePatientFixture.isSuccessMessageVisible();
  expect(isVisible).toBe(true);
});