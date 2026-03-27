// Generated from: tests\features\01LoginDashboard.feature
import { test } from "../../../tests/fixtures/customFixtures.js";

test.describe('Login page Functional Verification', () => {

  test('User Login in with valid login credentials', { tag: ['@validLogin'] }, async ({ When, Then, And, dashboardPageFixture, loginPageFixture }) => { 
    await When('The user enters valid Login credentials', null, { loginPageFixture }); 
    await And('The user clicks Login button', null, { loginPageFixture }); 
    await Then('The user be on Dashboard after Login', null, { dashboardPageFixture }); 
  });

  test.describe('User attempts Login with invalid credentials', () => {

    test('Example #1', { tag: ['@invalidLogin'] }, async ({ When, Then, And, loginPageFixture }) => { 
      await When('The user enters Login username "abcdef"', null, { loginPageFixture }); 
      await And('The user enters Login password "Test@1234"', null, { loginPageFixture }); 
      await And('The user clicks Login button', null, { loginPageFixture }); 
      await Then('The user sees Login error message "User does not exist"', null, { loginPageFixture }); 
    });

    test('Example #2', { tag: ['@invalidLogin'] }, async ({ When, Then, And, loginPageFixture }) => { 
      await When('The user enters Login username "*&^%$#@!"', null, { loginPageFixture }); 
      await And('The user enters Login password "abcd"', null, { loginPageFixture }); 
      await And('The user clicks Login button', null, { loginPageFixture }); 
      await Then('The user sees Login error message "Invalid Username and Password"', null, { loginPageFixture }); 
    });

    test('Example #3', { tag: ['@invalidLogin'] }, async ({ When, Then, And, loginPageFixture }) => { 
      await When('The user enters Login username "test"', null, { loginPageFixture }); 
      await And('The user enters Login password ""', null, { loginPageFixture }); 
      await And('The user clicks Login button', null, { loginPageFixture }); 
      await Then('The user sees Login error message "Invalid Username and Password"', null, { loginPageFixture }); 
    });

    test('Example #4', { tag: ['@invalidLogin'] }, async ({ When, Then, And, loginPageFixture }) => { 
      await When('The user enters Login username ""', null, { loginPageFixture }); 
      await And('The user enters Login password "Test@1234"', null, { loginPageFixture }); 
      await And('The user clicks Login button', null, { loginPageFixture }); 
      await Then('The user sees Login error message "Username required"', null, { loginPageFixture }); 
    });

    test('Example #5', { tag: ['@invalidLogin'] }, async ({ When, Then, And, loginPageFixture }) => { 
      await When('The user enters Login username "testuser123"', null, { loginPageFixture }); 
      await And('The user enters Login password ""', null, { loginPageFixture }); 
      await And('The user clicks Login button', null, { loginPageFixture }); 
      await Then('The user sees Login error message "Password required"', null, { loginPageFixture }); 
    });

    test('Example #6', { tag: ['@invalidLogin'] }, async ({ When, Then, And, loginPageFixture }) => { 
      await When('The user enters Login username "playwrightjs"', null, { loginPageFixture }); 
      await And('The user enters Login password "Test@1234"', null, { loginPageFixture }); 
      await And('The user clicks Login button', null, { loginPageFixture }); 
      await Then('The user sees Login error message "Invalid Username and Password"', null, { loginPageFixture }); 
    });

    test('Example #7', { tag: ['@invalidLogin'] }, async ({ When, Then, And, loginPageFixture }) => { 
      await When('The user enters Login username "cena"', null, { loginPageFixture }); 
      await And('The user enters Login password "wrongpass"', null, { loginPageFixture }); 
      await And('The user clicks Login button', null, { loginPageFixture }); 
      await Then('The user sees Login error message "Invalid Username and Password"', null, { loginPageFixture }); 
    });

  });

  test('User should see Dashboard after successful login', { tag: ['@dashboard'] }, async ({ When, Then, And, dashboardPageFixture, loginPageFixture }) => { 
    await When('The user enters Login credentials from "LoginData" and 0', null, { loginPageFixture }); 
    await And('The user clicks Login button', null, { loginPageFixture }); 
    await Then('The user should see Dashboard page with title "Dietician Project", Home icon', null, { dashboardPageFixture }); 
    await And('The user should see four links "My Patients", "New Patient", "Login", and "Logout"', null, { dashboardPageFixture }); 
  });

  test('Verify "My Patients" link navigation', async ({ Given, When, Then, dashboardPageFixture }) => { 
    await Given('User is on the dashboard page', null, { dashboardPageFixture }); 
    await When('User clicks the "My Patients" link in the navigation bar', null, { dashboardPageFixture }); 
    await Then('User should be redirected to the "My Patients" page', null, { dashboardPageFixture }); 
  });

  test('Verify "New Patient" link navigation', async ({ Given, When, Then, dashboardPageFixture }) => { 
    await Given('User is on the dashboard page', null, { dashboardPageFixture }); 
    await When('User clicks the "New Patient" link in the navigation bar', null, { dashboardPageFixture }); 
    await Then('User should be redirected to the "New Patient" page', null, { dashboardPageFixture }); 
  });

  test('Verify "Logout" functionality', async ({ Given, When, Then, dashboardPageFixture }) => { 
    await Given('User is on the dashboard page', null, { dashboardPageFixture }); 
    await When('User clicks the "Logout" link in the navigation bar', null, { dashboardPageFixture }); 
    await Then('User should be logged out of the application', null, { dashboardPageFixture }); 
  });

  test('Verify Home icon navigation', async ({ Given, When, Then, dashboardPageFixture }) => { 
    await Given('User is on the dashboard page', null, { dashboardPageFixture }); 
    await When('User clicks the home icon on the navigation bar', null, { dashboardPageFixture }); 
    await Then('User should be navigated to the dashboard page', null, { dashboardPageFixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\01LoginDashboard.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@validLogin"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The user enters valid Login credentials","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user be on Dashboard after Login","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":21,"tags":["@invalidLogin"],"steps":[{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user enters Login username \"abcdef\"","stepMatchArguments":[{"group":{"start":31,"value":"\"abcdef\"","children":[{"start":32,"value":"abcdef","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And The user enters Login password \"Test@1234\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Test@1234\"","children":[{"start":32,"value":"Test@1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user sees Login error message \"User does not exist\"","stepMatchArguments":[{"group":{"start":34,"value":"\"User does not exist\"","children":[{"start":35,"value":"User does not exist","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":22,"tags":["@invalidLogin"],"steps":[{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user enters Login username \"*&^%$#@!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"*&^%$#@!\"","children":[{"start":32,"value":"*&^%$#@!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And The user enters Login password \"abcd\"","stepMatchArguments":[{"group":{"start":31,"value":"\"abcd\"","children":[{"start":32,"value":"abcd","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user sees Login error message \"Invalid Username and Password\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Invalid Username and Password\"","children":[{"start":35,"value":"Invalid Username and Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":23,"tags":["@invalidLogin"],"steps":[{"pwStepLine":29,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user enters Login username \"test\"","stepMatchArguments":[{"group":{"start":31,"value":"\"test\"","children":[{"start":32,"value":"test","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And The user enters Login password \"\"","stepMatchArguments":[{"group":{"start":31,"value":"\"\"","children":[{"start":32,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user sees Login error message \"Invalid Username and Password\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Invalid Username and Password\"","children":[{"start":35,"value":"Invalid Username and Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":24,"tags":["@invalidLogin"],"steps":[{"pwStepLine":36,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user enters Login username \"\"","stepMatchArguments":[{"group":{"start":31,"value":"\"\"","children":[{"start":32,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And The user enters Login password \"Test@1234\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Test@1234\"","children":[{"start":32,"value":"Test@1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user sees Login error message \"Username required\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Username required\"","children":[{"start":35,"value":"Username required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":25,"tags":["@invalidLogin"],"steps":[{"pwStepLine":43,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user enters Login username \"testuser123\"","stepMatchArguments":[{"group":{"start":31,"value":"\"testuser123\"","children":[{"start":32,"value":"testuser123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And The user enters Login password \"\"","stepMatchArguments":[{"group":{"start":31,"value":"\"\"","children":[{"start":32,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user sees Login error message \"Password required\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Password required\"","children":[{"start":35,"value":"Password required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":49,"pickleLine":26,"tags":["@invalidLogin"],"steps":[{"pwStepLine":50,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user enters Login username \"playwrightjs\"","stepMatchArguments":[{"group":{"start":31,"value":"\"playwrightjs\"","children":[{"start":32,"value":"playwrightjs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And The user enters Login password \"Test@1234\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Test@1234\"","children":[{"start":32,"value":"Test@1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user sees Login error message \"Invalid Username and Password\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Invalid Username and Password\"","children":[{"start":35,"value":"Invalid Username and Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":27,"tags":["@invalidLogin"],"steps":[{"pwStepLine":57,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user enters Login username \"cena\"","stepMatchArguments":[{"group":{"start":31,"value":"\"cena\"","children":[{"start":32,"value":"cena","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And The user enters Login password \"wrongpass\"","stepMatchArguments":[{"group":{"start":31,"value":"\"wrongpass\"","children":[{"start":32,"value":"wrongpass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then The user sees Login error message \"Invalid Username and Password\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Invalid Username and Password\"","children":[{"start":35,"value":"Invalid Username and Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":65,"pickleLine":32,"tags":["@dashboard"],"steps":[{"pwStepLine":66,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When The user enters Login credentials from \"LoginData\" and 0","stepMatchArguments":[{"group":{"start":39,"value":"\"LoginData\"","children":[{"start":40,"value":"LoginData","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"0","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":67,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And The user clicks Login button","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then The user should see Dashboard page with title \"Dietician Project\", Home icon","stepMatchArguments":[{"group":{"start":46,"value":"\"Dietician Project\"","children":[{"start":47,"value":"Dietician Project","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And The user should see four links \"My Patients\", \"New Patient\", \"Login\", and \"Logout\"","stepMatchArguments":[{"group":{"start":31,"value":"\"My Patients\"","children":[{"start":32,"value":"My Patients","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"New Patient\"","children":[{"start":47,"value":"New Patient","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"Login\"","children":[{"start":62,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":74,"value":"\"Logout\"","children":[{"start":75,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":73,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given User is on the dashboard page","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User clicks the \"My Patients\" link in the navigation bar","stepMatchArguments":[{"group":{"start":16,"value":"\"My Patients\"","children":[{"start":17,"value":"My Patients","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":75,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the \"My Patients\" page","stepMatchArguments":[{"group":{"start":33,"value":"\"My Patients\"","children":[{"start":34,"value":"My Patients","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":79,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User is on the dashboard page","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User clicks the \"New Patient\" link in the navigation bar","stepMatchArguments":[{"group":{"start":16,"value":"\"New Patient\"","children":[{"start":17,"value":"New Patient","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":81,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the \"New Patient\" page","stepMatchArguments":[{"group":{"start":33,"value":"\"New Patient\"","children":[{"start":34,"value":"New Patient","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":84,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":85,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"Given User is on the dashboard page","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When User clicks the \"Logout\" link in the navigation bar","stepMatchArguments":[{"group":{"start":16,"value":"\"Logout\"","children":[{"start":17,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":87,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then User should be logged out of the application","stepMatchArguments":[]}]},
  {"pwTestLine":90,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":91,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given User is on the dashboard page","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When User clicks the home icon on the navigation bar","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to the dashboard page","stepMatchArguments":[]}]},
]; // bdd-data-end