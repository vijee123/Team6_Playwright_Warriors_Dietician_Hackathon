import { logger } from '../utils/logger.js';
import{test} from '../fixtures/customFixtures.js';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);


When('User clicks the Edit Icon button of a patient', async ({editPatientFixture}) => {
  logger.info('User clicks the Edit Icon button of a patient..');
  await editPatientFixture.clickTopEditIcon();
});


Then('User should see the {string} in the edit patient page', async ({editPatientFixture}, element) => {
  logger.info(`User should see the ${element} in the edit patient page`);
   const Visible = await editPatientFixture.verifyElementVisibility(element);
   expect(Visible).toBe(true);
});


Given('Create a new Patient with below details', async ({editPatientFixture}, dataTable) => {
    const data = dataTable.rowsHash();
    logger.info('Creating patient: with given First Name and Last Name');
    await editPatientFixture.createPatient(data);
});

When('User search and clicks Edit Icon of newly created patient', async ({editPatientFixture}) => {
   logger.info('User searches newly created patient with contact Number and click its Edit Icon');
    await editPatientFixture.searchPatientWithContactNoAndClickEditIcon();
});

Then('{string} field should display expected value {string}', async ({editPatientFixture}, FieldName, enteredValue) => {
    logger.info("Verifying fieldname displayed and entered");
    const actualValue = await editPatientFixture.verifyFieldValue(FieldName);
    expect(actualValue).toBe(enteredValue);
});


Then('the {string} field should display the placeholder text {string} in the Edit Patient Page', async ({editPatientFixture}, field, placeholderText) => {
   logger.info("Verifying Vital Field Placeholder displayed...");
   const actualPlaceholder = await editPatientFixture.verifyPlaceholderDetail(field);
    expect(actualPlaceholder).toBe(placeholderText);
    logger.info(`"${vitalField}" placeholder correctly displays: "${actualPlaceholder}"`);

});


Then('the Vitals section {string} field should NOT display a mandatory indicator in Edit Patient Page', async ({editPatientFixture}, field) => {
  logger.info("Verifying Mandatory * indicator in fields of Vital Section Fields Placeholder...");
   const hasMandatoryIndicator = await editPatientFixture.isMandatoryIndicatorPresent(vitalField);
   expect(hasMandatoryIndicator).toBe(false);
});

When('User deletes the existing {string} field data', async ({editPatientFixture}, Field) => {
   logger.info(`User deletes the ${Field} field data...`);
   await editPatientFixture.deleteFieldText(Field); 
});

