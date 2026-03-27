// Generated from: tests\features\05EditPatient.feature
import { test } from "../../../tests/fixtures/customFixtures.js";

test.describe('To test the Edit Patient Details page functionality', () => {

  test('To test the presence of field with values entered during Patient creation', { tag: ['@regression', '@editPatientFieldValuesDisplay'] }, async ({ Given, editPatientFixture }) => { 
    await Given('Create a new Patient with below details', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"First Name"},{"value":"Sankar"}]}]}}, { editPatientFixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\05EditPatient.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@regression","@editPatientFieldValuesDisplay"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given Create a new Patient with below details","stepMatchArguments":[]}]},
]; // bdd-data-end