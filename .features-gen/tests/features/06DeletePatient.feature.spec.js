// Generated from: tests\features\06DeletePatient.feature
import { test } from "../../../tests/fixtures/customFixtures.js";

test.describe('To validate the delete patient popup functionalities', () => {

  test.beforeEach('Background', async ({ Given, deletePatientFixture }, testInfo) => { if (testInfo.error) return;
    await Given('user clicks the Delete Icon of a patient after searching using contact number', null, { deletePatientFixture }); 
  });
  
  test.describe('To verify the \'<element>\' element displayed in the delete patient popup window', () => {

    test('To verify the \'alertTitle\' element displayed in the delete patient popup window', async ({ Then, deletePatientFixture }) => { 
      await Then('the user should see the \'alertTitle\' element displaying this \'Confirm\'', null, { deletePatientFixture }); 
    });

    test('To verify the \'alertText\' element displayed in the delete patient popup window', async ({ Then, deletePatientFixture }) => { 
      await Then('the user should see the \'alertText\' element displaying this \'Are you sure to delete Patient Name?\'', null, { deletePatientFixture }); 
    });

    test('To verify the \'yesButton\' element displayed in the delete patient popup window', async ({ Then, deletePatientFixture }) => { 
      await Then('the user should see the \'yesButton\' element displaying this \'Yes\'', null, { deletePatientFixture }); 
    });

    test('To verify the \'noButton\' element displayed in the delete patient popup window', async ({ Then, deletePatientFixture }) => { 
      await Then('the user should see the \'noButton\' element displaying this \'No\'', null, { deletePatientFixture }); 
    });

  });

  test('To verify the navigation to main page after dismissing the alert', async ({ When, Then, deletePatientFixture }) => { 
    await When('user clicks the NO button and dismiss the alert', null, { deletePatientFixture }); 
    await Then('user should return back to main page of patients', null, { deletePatientFixture }); 
  });

  test('To verify the navigation to main page after accepting the alert', async ({ When, Then, deletePatientFixture }) => { 
    await When('user clicks the OK button and accepts the alert', null, { deletePatientFixture }); 
    await Then('user should return back to main page of patients', null, { deletePatientFixture }); 
  });

  test('To confirm the removal of Patient after accepting the alert', async ({ When, Then, deletePatientFixture }) => { 
    await When('user clicks the OK button and accepts the alert', null, { deletePatientFixture }); 
    await Then('patient should be removed from the table', null, { deletePatientFixture }); 
  });

  test('To verify the success message after accepting the delete alert', async ({ When, Then, deletePatientFixture }) => { 
    await When('user clicks the OK button and accepts the alert', null, { deletePatientFixture }); 
    await Then('user should get a success message of delete', null, { deletePatientFixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\06DeletePatient.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user clicks the Delete Icon of a patient after searching using contact number","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should see the 'alertTitle' element displaying this 'Confirm'","stepMatchArguments":[{"group":{"start":24,"value":"'alertTitle'","children":[{"children":[{"children":[]}]},{"start":25,"value":"alertTitle","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"'Confirm'","children":[{"children":[{"children":[]}]},{"start":62,"value":"Confirm","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user clicks the Delete Icon of a patient after searching using contact number","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should see the 'alertText' element displaying this 'Are you sure to delete Patient Name?'","stepMatchArguments":[{"group":{"start":24,"value":"'alertText'","children":[{"children":[{"children":[]}]},{"start":25,"value":"alertText","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":60,"value":"'Are you sure to delete Patient Name?'","children":[{"children":[{"children":[]}]},{"start":61,"value":"Are you sure to delete Patient Name?","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user clicks the Delete Icon of a patient after searching using contact number","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should see the 'yesButton' element displaying this 'Yes'","stepMatchArguments":[{"group":{"start":24,"value":"'yesButton'","children":[{"children":[{"children":[]}]},{"start":25,"value":"yesButton","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":60,"value":"'Yes'","children":[{"children":[{"children":[]}]},{"start":61,"value":"Yes","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user clicks the Delete Icon of a patient after searching using contact number","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should see the 'noButton' element displaying this 'No'","stepMatchArguments":[{"group":{"start":24,"value":"'noButton'","children":[{"children":[{"children":[]}]},{"start":25,"value":"noButton","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"'No'","children":[{"children":[{"children":[]}]},{"start":60,"value":"No","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user clicks the Delete Icon of a patient after searching using contact number","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When user clicks the NO button and dismiss the alert","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then user should return back to main page of patients","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user clicks the Delete Icon of a patient after searching using contact number","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When user clicks the OK button and accepts the alert","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then user should return back to main page of patients","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user clicks the Delete Icon of a patient after searching using contact number","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When user clicks the OK button and accepts the alert","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then patient should be removed from the table","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user clicks the Delete Icon of a patient after searching using contact number","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When user clicks the OK button and accepts the alert","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then user should get a success message of delete","stepMatchArguments":[]}]},
]; // bdd-data-end