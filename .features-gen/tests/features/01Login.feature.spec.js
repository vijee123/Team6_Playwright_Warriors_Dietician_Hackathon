// Generated from: tests\features\01Login.feature
import { test } from "../../../tests/fixtures/customFixtures.js";

test.describe('Login', () => {

  test('to test the login function', async ({ Given, When, Then, loginPageFixture }) => { 
    await Given('Enter the username and the password', null, { loginPageFixture }); 
    await When('User clicks the Login Button', null, { loginPageFixture }); 
    await Then('User should land in appropriate page', null, { loginPageFixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\01Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Enter the username and the password","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks the Login Button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should land in appropriate page","stepMatchArguments":[]}]},
]; // bdd-data-end