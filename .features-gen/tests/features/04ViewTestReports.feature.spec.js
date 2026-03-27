// Generated from: tests\features\04ViewTestReports.feature
import { test } from "../../../tests/fixtures/customFixtures.js";

test.describe('ViewTest Reports', () => {

  test('Verify correct report opens for selected record', async ({ When, Then, viewTestReportFixture }) => { 
    await When('User clicks on "View Previous Test Reports" for a specific record', null, { viewTestReportFixture }); 
    await Then('Corresponding report for that record should be opened', null, { viewTestReportFixture }); 
  });

  test('Verify patient details in report header', async ({ When, Then, And, viewTestReportFixture }) => { 
    await When('User clicks on "View Previous Test Reports" for a specific record', null, { viewTestReportFixture }); 
    await Then('Title "View Patient Test Reports" should be displayed', null, { viewTestReportFixture }); 
    await And('Patient id, name, email and contact number should be displayed', null, { viewTestReportFixture }); 
    await And('Close icon "X" should be displayed', null, { viewTestReportFixture }); 
  });

  test('Verify reports table and headers', async ({ When, Then, And, viewTestReportFixture }) => { 
    await When('User clicks on "View Previous Test Reports" for a specific record', null, { viewTestReportFixture }); 
    await Then('Reports table should be displayed', null, { viewTestReportFixture }); 
    await And('Table headers should be displayed:', {"dataTable":{"rows":[{"cells":[{"value":"Record Number"},{"value":"File"},{"value":"Uploaded Time"},{"value":"File/Report Name"},{"value":"Vitals"},{"value":"Identified Health Conditions"}]}]}}, { viewTestReportFixture }); 
  });

  test('Verify table column order', async ({ When, Then, viewTestReportFixture }) => { 
    await When('User clicks on "View Previous Test Reports" for a specific record', null, { viewTestReportFixture }); 
    await Then('Table columns should be in order:', {"dataTable":{"rows":[{"cells":[{"value":"Record Number"},{"value":"File"},{"value":"Uploaded Time"},{"value":"File/Report Name"},{"value":"Vitals"},{"value":"Identified Health Conditions"}]}]}}, { viewTestReportFixture }); 
  });

  test('Verify pagination controls', async ({ When, Then, viewTestReportFixture }) => { 
    await When('User clicks on "View Previous Test Reports" for a specific record', null, { viewTestReportFixture }); 
    await Then('Pagination controls first, previous, next, last should be displayed', null, { viewTestReportFixture }); 
  });

  test('Verify report row details', async ({ When, Then, viewTestReportFixture }) => { 
    await When('User clicks on "View Previous Test Reports" for a specific record', null, { viewTestReportFixture }); 
    await Then('Each report should display:', {"dataTable":{"rows":[{"cells":[{"value":"Record Number"}]},{"cells":[{"value":"View PDF button"}]},{"cells":[{"value":"Uploaded Time"}]},{"cells":[{"value":"File/Report Name"}]}]}}, { viewTestReportFixture }); 
  });

  test('Verify vitals information', async ({ When, Then, And, viewTestReportFixture }) => { 
    await When('User clicks on "View Previous Test Reports" for a specific record', null, { viewTestReportFixture }); 
    await Then('Each report should display vitals information', null, { viewTestReportFixture }); 
    await And('Vitals should be in order Weight -> Height -> Temperature -> SP -> DP', null, { viewTestReportFixture }); 
    await And('Vitals should be displayed in multiline format', null, { viewTestReportFixture }); 
  });

  test('Verify health conditions information', async ({ When, Then, And, viewTestReportFixture }) => { 
    await When('User clicks on "View Previous Test Reports" for a specific record', null, { viewTestReportFixture }); 
    await Then('Each report should display identified health conditions', null, { viewTestReportFixture }); 
    await And('Health conditions should be displayed in multiline format', null, { viewTestReportFixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\04ViewTestReports.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks on \"View Previous Test Reports\" for a specific record","stepMatchArguments":[{"group":{"start":15,"value":"\"View Previous Test Reports\"","children":[{"start":16,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Corresponding report for that record should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on \"View Previous Test Reports\" for a specific record","stepMatchArguments":[{"group":{"start":15,"value":"\"View Previous Test Reports\"","children":[{"start":16,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Title \"View Patient Test Reports\" should be displayed","stepMatchArguments":[{"group":{"start":6,"value":"\"View Patient Test Reports\"","children":[{"start":7,"value":"View Patient Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And Patient id, name, email and contact number should be displayed","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And Close icon \"X\" should be displayed","stepMatchArguments":[{"group":{"start":11,"value":"\"X\"","children":[{"start":12,"value":"X","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User clicks on \"View Previous Test Reports\" for a specific record","stepMatchArguments":[{"group":{"start":15,"value":"\"View Previous Test Reports\"","children":[{"start":16,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Reports table should be displayed","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And Table headers should be displayed:","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks on \"View Previous Test Reports\" for a specific record","stepMatchArguments":[{"group":{"start":15,"value":"\"View Previous Test Reports\"","children":[{"start":16,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Table columns should be in order:","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":30,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User clicks on \"View Previous Test Reports\" for a specific record","stepMatchArguments":[{"group":{"start":15,"value":"\"View Previous Test Reports\"","children":[{"start":16,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Pagination controls first, previous, next, last should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":35,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User clicks on \"View Previous Test Reports\" for a specific record","stepMatchArguments":[{"group":{"start":15,"value":"\"View Previous Test Reports\"","children":[{"start":16,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Each report should display:","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":40,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When User clicks on \"View Previous Test Reports\" for a specific record","stepMatchArguments":[{"group":{"start":15,"value":"\"View Previous Test Reports\"","children":[{"start":16,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Each report should display vitals information","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And Vitals should be in order Weight -> Height -> Temperature -> SP -> DP","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"And Vitals should be displayed in multiline format","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When User clicks on \"View Previous Test Reports\" for a specific record","stepMatchArguments":[{"group":{"start":15,"value":"\"View Previous Test Reports\"","children":[{"start":16,"value":"View Previous Test Reports","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Each report should display identified health conditions","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"And Health conditions should be displayed in multiline format","stepMatchArguments":[]}]},
]; // bdd-data-end