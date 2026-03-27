// Generated from: tests\features\03Addpatients.feature
import { test } from "../../../tests/fixtures/customFixtures.js";

test.describe('Add Patients', () => {

  test.beforeEach('Background', async ({ When, addPatientFixture }, testInfo) => { if (testInfo.error) return;
    await When('The user clicks on new patient tab in the header section', null, { addPatientFixture }); 
  });
  
  test('User should be able to view the dialog box to add patients', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view the dialog box to add patients', null, { addPatientFixture }); 
  });

  test('Validation of 9 input fields in the add patient dialog box', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view 9 input fields in the dialog box', null, { addPatientFixture }); 
  });

  test('Validation of 3 dropdowns in the add patient dialog box', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view 3 dropdowns in the dialog box', null, { addPatientFixture }); 
  });

  test('Validation of a date picker field in the add patient dialog box', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view a date picker field with MM-DD-YYYY displayed', null, { addPatientFixture }); 
  });

  test('Validation of file upload button', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view file upload button in the dialog box', null, { addPatientFixture }); 
  });

  test('Validation of submit button', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view submit button in the dialog box', null, { addPatientFixture }); 
  });

  test('Presence of close button', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view close button in the dialog box', null, { addPatientFixture }); 
  });

  test('State of the close button', async ({ Then, addPatientFixture }) => { 
    await Then('The close button should be enabled in the dialog box', null, { addPatientFixture }); 
  });

  test('Mandatory field visibility for the placeholders', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view the mandatory fields with "<field>"', {"dataTable":{"rows":[{"cells":[{"value":"field"}]},{"cells":[{"value":"firstname"}]},{"cells":[{"value":"lastname"}]},{"cells":[{"value":"email"}]},{"cells":[{"value":"contact number"}]},{"cells":[{"value":"date of birth"}]},{"cells":[{"value":"weight"}]}]}}, { addPatientFixture }); 
  });

  test('Validation of non-mandatory fields with placeholders', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view non-mandatory fields with "<field>"', {"dataTable":{"rows":[{"cells":[{"value":"field"}]},{"cells":[{"value":"Height"}]},{"cells":[{"value":"BMI"}]},{"cells":[{"value":"Temperature"}]},{"cells":[{"value":"SP"}]},{"cells":[{"value":"DP"}]}]}}, { addPatientFixture }); 
  });

  test('Presence of text "No file Chosen" when no files uploaded', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view text \'No file chosen\'', null, { addPatientFixture }); 
  });

  test('Presence of scroll bar in the dialog box', async ({ Then, addPatientFixture }) => { 
    await Then('The user should be able to view scroll bar on the right side of the dialog box', null, { addPatientFixture }); 
  });

  test('Presence of dropdown values in Allergy', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks on the dropdown for Allergy', null, { addPatientFixture }); 
    await Then('values should be visible in the Allergy dropdown', null, { addPatientFixture }); 
  });

  test('Validation of 12 dropdown values in Allergy dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('Dropdown should contain 12 values', null, { addPatientFixture }); 
  });

  test('Validation of the 12 text values in the Allergy dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('Allergy Dropdown should contain values', {"dataTable":{"rows":[{"cells":[{"value":"Egg"}]},{"cells":[{"value":"Milk"}]},{"cells":[{"value":"Soy"}]},{"cells":[{"value":"Almond"}]},{"cells":[{"value":"Peanuts"}]},{"cells":[{"value":"Walnut"}]},{"cells":[{"value":"Pistachio"}]},{"cells":[{"value":"Sesame"}]},{"cells":[{"value":"Hazelnut"}]},{"cells":[{"value":"Pecan"}]},{"cells":[{"value":"Cashew"}]},{"cells":[{"value":"NONE"}]}]}}, { addPatientFixture }); 
  });

  test('Validation of dropdown values in Food Preference dropdown', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks on the dropdown for Food Preference', null, { addPatientFixture }); 
    await Then('values should be visible in the Food Preference dropdown', null, { addPatientFixture }); 
  });

  test('Validation of 5 dropdown values in Food Preference dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('Food Preference dropdown should contain 5 values', null, { addPatientFixture }); 
  });

  test('Validation of the 5 text values in the Food Preference dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('Dropdown should contain values', {"dataTable":{"rows":[{"cells":[{"value":"Vegan"}]},{"cells":[{"value":"Vegetarian"}]},{"cells":[{"value":"Jain"}]},{"cells":[{"value":"Eggitarian"}]},{"cells":[{"value":"NonVeg"}]}]}}, { addPatientFixture }); 
  });

  test('Presence of dropdown values in Cuisine Category dropdown', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks on the dropdown for Cuisine Category', null, { addPatientFixture }); 
    await Then('Values should be present inside Cuisine dropdown', null, { addPatientFixture }); 
  });

  test('Validation of 36 dropdown values in Cuisine Category dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('Dropdown should contain 36 value', null, { addPatientFixture }); 
  });

  test('Validation of the 36 text values in the Cuisine Category dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('dropdown should contain the following values', {"dataTable":{"rows":[{"cells":[{"value":"South Indian"}]},{"cells":[{"value":"Rajasthani"}]},{"cells":[{"value":"Punjabi"}]},{"cells":[{"value":"Bengali"}]},{"cells":[{"value":"Orissa"}]},{"cells":[{"value":"Gujarati"}]},{"cells":[{"value":"Maharashtrian"}]},{"cells":[{"value":"Andhra"}]},{"cells":[{"value":"Kerala"}]},{"cells":[{"value":"Goan"}]},{"cells":[{"value":"Kashmiri"}]},{"cells":[{"value":"Himachali"}]},{"cells":[{"value":"Tamil Nadu"}]},{"cells":[{"value":"Karnataka"}]},{"cells":[{"value":"Sindhi"}]},{"cells":[{"value":"Chhattisgarhi"}]},{"cells":[{"value":"Madhya Pradesh"}]},{"cells":[{"value":"Assamese"}]},{"cells":[{"value":"Manipuri"}]},{"cells":[{"value":"Tripuri"}]},{"cells":[{"value":"Sikkimese"}]},{"cells":[{"value":"Mizo"}]},{"cells":[{"value":"Arunachali"}]},{"cells":[{"value":"Uttarakhand"}]},{"cells":[{"value":"Haryanvi"}]},{"cells":[{"value":"Awadhi"}]},{"cells":[{"value":"Bihari"}]},{"cells":[{"value":"Uttar Pradesh"}]},{"cells":[{"value":"Delhi"}]},{"cells":[{"value":"North Indian"}]}]}}, { addPatientFixture }); 
  });

  test('Select a single value from Allergy dropdown', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks on the single value from dropdown for Allergy', null, { addPatientFixture }); 
    await Then('Values should be visible in the dropdown', null, { addPatientFixture }); 
  });

  test('Select multiple values from Allergy dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('Values should be visible in the dropdown', null, { addPatientFixture }); 
    await Then('user should be able to select multiple values from the dropdown', null, { addPatientFixture }); 
  });

  test('Select a single value from Food Preference dropdown', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks on the single value from dropdown for Food Preference', null, { addPatientFixture }); 
    await Then('user should be able to select a single value from the dropdown for Food Preference', null, { addPatientFixture }); 
  });

  test('Select multiple values from Food Preference dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('user should be able to select multiple values from the dropdown', null, { addPatientFixture }); 
  });

  test('Select a single value from Cuisine Category dropdown', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks on the single value from dropdown for Cuisine Category', null, { addPatientFixture }); 
    await Then('user should be able to select a single value from the dropdown', null, { addPatientFixture }); 
  });

  test('Select multiple values from Cuisine Category dropdown', async ({ Then, addPatientFixture }) => { 
    await Then('user should be able to select multiple values from the dropdown', null, { addPatientFixture }); 
  });

  test('Selecting date using DatePicker field', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks on the date picker for DOB field', null, { addPatientFixture }); 
    await Then('User should see calender date picker displayed with Month,Day,Year', null, { addPatientFixture }); 
  });

  test('Selecting date for DOB field', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks Date of Birth field and selects valid date "12/25/1990"', null, { addPatientFixture }); 
    await Then('User should see selected date in the DOB field', null, { addPatientFixture }); 
  });

  test('Verify selected date is displayed in MM/DD/YYYY format', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks Date of Birth field, selects valid date "01/12/2000" and clicks outside the calendar', null, { addPatientFixture }); 
    await Then('User should see selected date in MM/DD/YYYY format in the DOB field', null, { addPatientFixture }); 
  });

  test('Prevent selection of future date in DOB field', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks Date of Birth field and selects future date "12/31/2099"', null, { addPatientFixture }); 
    await Then('User should see the future date to be disabled', null, { addPatientFixture }); 
  });

  test('Selecting current date as DOB', async ({ When, Then, addPatientFixture }) => { 
    await When('User selects current date as DOB', null, { addPatientFixture }); 
    await Then('User should get error message "Date of Birth cannot be current or future date"', null, { addPatientFixture }); 
  });

  test('Selecting Invalid date', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks Date of Birth field and selects invalid date 34/20/2022', null, { addPatientFixture }); 
    await Then('User should see an error message "Invalid date ,Please select valid date"', null, { addPatientFixture }); 
  });

  test('User enters non-numeric value in DOB field', async ({ When, Then, addPatientFixture }) => { 
    await When('User enters "ab/cd/efgh" in the DOB field', null, { addPatientFixture }); 
    await Then('User should see an error message "Invalid date format"', null, { addPatientFixture }); 
  });

  test('Selecting partial date in DOB field', async ({ When, Then, addPatientFixture }) => { 
    await When('User enters "12/05" in the DOB field', null, { addPatientFixture }); 
    await Then('User should see an error message "Invalid date format"', null, { addPatientFixture }); 
  });

  test('Leap year validation', async ({ When, Then, addPatientFixture }) => { 
    await When('User enters Feb 29 2024 in DOB', null, { addPatientFixture }); 
    await Then('User should be able to select the date without any error message', null, { addPatientFixture }); 
  });

  test('Non Leap year validation', async ({ When, Then, addPatientFixture }) => { 
    await When('User enters Feb 29 2023 in DOB', null, { addPatientFixture }); 
    await Then('User should see an error message "Invalid date ,Please select valid date"', null, { addPatientFixture }); 
  });

  test.describe('Validate Add Patient form using Excel', () => {

    test('Example #1', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "FN_Numeric"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Patient first name accepts only alphabets" from Excel', null, { addPatientFixture }); 
    });

    test('Example #2', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "FN_SpecialChar"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Patient first name accepts only alphabets" from Excel', null, { addPatientFixture }); 
    });

    test('Example #3', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "FN_Empty"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Patient first name is required" from Excel', null, { addPatientFixture }); 
    });

    test('Example #4', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "LN_Numeric"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Patient last name accepts only alphabets" from Excel', null, { addPatientFixture }); 
    });

    test('Example #5', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "Email_NoAt"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Please enter valid email address" from Excel', null, { addPatientFixture }); 
    });

    test('Example #6', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "Email_Exists"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Email address already exists" from Excel', null, { addPatientFixture }); 
    });

    test('Example #7', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "Contact_Alpha"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Please enter valid contact number" from Excel', null, { addPatientFixture }); 
    });

    test('Example #8', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "Contact_Short"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Please enter valid contact number" from Excel', null, { addPatientFixture }); 
    });

    test('Example #9', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "Allergy_Empty"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Allergy information is required" from Excel', null, { addPatientFixture }); 
    });

    test('Example #10', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "DOB_Empty"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Date of Birth is required" from Excel', null, { addPatientFixture }); 
    });

    test('Example #11', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "Weight_Special"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Please enter valid weight" from Excel', null, { addPatientFixture }); 
    });

    test('Example #12', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "Height_Alpha"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Please enter valid height" from Excel', null, { addPatientFixture }); 
    });

    test('Example #13', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "Temp_Alpha"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Please enter valid temperature" from Excel', null, { addPatientFixture }); 
    });

    test('Example #14', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "SPDP_Alpha"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Please enter valid SP,DP" from Excel', null, { addPatientFixture }); 
    });

    test('Example #15', async ({ When, Then, And, addPatientFixture }) => { 
      await When('User enters patient details from Excel sheet for "All_Valid"', null, { addPatientFixture }); 
      await And('User submits the form', null, { addPatientFixture }); 
      await Then('User should see "Patient successfully created" from Excel', null, { addPatientFixture }); 
    });

  });

  test('Add first name field with numeric data', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering numeric data in First name field', null, { addPatientFixture }); 
    await Then('User should  see error message in Patient first name accepts only alphabets', null, { addPatientFixture }); 
  });

  test('Add first name field with special character data', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering special characters in First name field', null, { addPatientFixture }); 
    await Then('User should  see error message in Patient first name accepts only alphabets', null, { addPatientFixture }); 
  });

  test('Mandatory field check for firstname field', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field leaving First name field empty', null, { addPatientFixture }); 
    await Then('User should  see error message "Patient first name is required"', null, { addPatientFixture }); 
  });

  test('Add last name field with numeric data', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering numeric data in Last name field', null, { addPatientFixture }); 
    await Then('User should  see error message in Patient last name accepts only alphabets', null, { addPatientFixture }); 
  });

  test('Add last name field with special character data', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering special characters in Last name field', null, { addPatientFixture }); 
    await Then('User should  see error message in Patient last name accepts only alphabets', null, { addPatientFixture }); 
  });

  test('Mandatory field check for lastname field', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field leaving Last name field empty', null, { addPatientFixture }); 
    await Then('User should  see error message "Patient last name is required"', null, { addPatientFixture }); 
  });

  test('Add email with  starts with number', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering email starting with number', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid email address"', null, { addPatientFixture }); 
  });

  test('Add email without @ symbol', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering email without @ symbol', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid email address"', null, { addPatientFixture }); 
  });

  test('Add email with special characters withou @', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering email with special characters without @ symbol', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid email address"', null, { addPatientFixture }); 
  });

  test('Add email without .com', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering email without .com', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid email address"', null, { addPatientFixture }); 
  });

  test('Existing email id', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering email which is already existing in the system', null, { addPatientFixture }); 
    await Then('User should  see error message "Email address already exists"', null, { addPatientFixture }); 
  });

  test('Mandatory field check for email field', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering all mandatory fields except email field', null, { addPatientFixture }); 
    await Then('User should  see error message "Email address is required"', null, { addPatientFixture }); 
  });

  test('Add contact number with alphabets', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after  entering alphabets in contact number with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid contact number"', null, { addPatientFixture }); 
  });

  test('Add contact number with special characters', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after  entering special characters in contact number with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid contact number"', null, { addPatientFixture }); 
  });

  test('Add contact number with less than required digits', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after  entering less than required digits in contact number with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid contact number"', null, { addPatientFixture }); 
  });

  test('Add contact number with greater than required digits', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after  entering greater than required digits in contact number with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid contact number"', null, { addPatientFixture }); 
  });

  test('Existing contact number', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after  entering contact number which is already existing in the system with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Contact number already exists"', null, { addPatientFixture }); 
  });

  test('Mandatory field check for contact num field', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after  entering all mandatory fields except contact number field', null, { addPatientFixture }); 
    await Then('User should  see error message "Contact number is required"', null, { addPatientFixture }); 
  });

  test('Leaving Allergies field empty', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field leaving Allergies field empty with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Allergy information is required"', null, { addPatientFixture }); 
  });

  test('Leaving Food Preference field empty', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field leaving Food Preference field empty with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Food preference is required"', null, { addPatientFixture }); 
  });

  test('Leaving Cusine Category field empty', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field leaving Cusine Category field empty with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Cuisine category is required"', null, { addPatientFixture }); 
  });

  test('Leaving DOB field empty', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field leaving DOB field empty with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Date of Birth is required"', null, { addPatientFixture }); 
  });

  test('Add weight with valid data', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering valid weight data in weight field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { addPatientFixture }); 
  });

  test('Add weight with special characters', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering special characters in weight field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid weight"', null, { addPatientFixture }); 
  });

  test('Add weight with alphabets', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering alphabets in weight field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid weight"', null, { addPatientFixture }); 
  });

  test('Add height with valid data', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering valid height data in height field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { addPatientFixture }); 
  });

  test('Add height with special characters', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering special characters in height field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid height"', null, { addPatientFixture }); 
  });

  test('Add height with alphabets', async ({ Given, Then, addPatientFixture }) => { 
    await Given('User navigate to next field after entering alphabets in height field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid height"', null, { addPatientFixture }); 
  });

  test('Add temperature with valid data', async ({ Given, Then, addPatientFixture }) => { 
    await Given('User navigate to next field after entering valid temperature data in temperature field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { addPatientFixture }); 
  });

  test('Add temperature with special characters', async ({ When, Then, addPatientFixture }) => { 
    await When('User navigate to next field after entering special characters in temperature field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid temperature"', null, { addPatientFixture }); 
  });

  test('Add temperature with alphabets', async ({ Given, Then, addPatientFixture }) => { 
    await Given('User navigate to next field after entering alphabets in temperature field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid temperature"', null, { addPatientFixture }); 
  });

  test('Add SP,DP with valid data', async ({ Given, Then, addPatientFixture }) => { 
    await Given('User navigate to next field after entering valid SP,DP data in SP,DP field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { addPatientFixture }); 
  });

  test('Add SP,DP with special characters', async ({ Given, Then, addPatientFixture }) => { 
    await Given('User navigate to next field after entering special characters in SP,DP field with valid data in other mandatory fields', null, { addPatientFixture }); 
    await Then('User should  see error message "Please enter valid SP,DP"', null, { addPatientFixture }); 
  });

  test('Add SP ,DP with alphabets', async ({ Then, addPatientFixture }) => { 
    await Then('User should  see error message "Please enter valid SP,DP"', null, { addPatientFixture }); 
  });

  test('Upload valid file - pdf', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks Submit after uploading a valid file', null, { addPatientFixture }); 
    await Then('User should be redirected to My Patient page with the uploaded file saved successfully', null, { addPatientFixture }); 
  });

  test('File name after Upload valid file - pdf', async ({ When, Then, addPatientFixture, page }) => { 
    await When('User uploads health report in pdf', null, { page }); 
    await Then('User should be able to see the file name displayed with valid file name in the dialog box after successful upload', null, { addPatientFixture }); 
  });

  test('Presence of upload date info', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient', null, { addPatientFixture }); 
    await Then('User should see upload date info in test report', null, { addPatientFixture }); 
  });

  test('Presence of PDF file in test report after file upload', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient', null, { addPatientFixture }); 
    await Then('User should see PDF file in test report', null, { addPatientFixture }); 
  });

  test('Presence of health info detected from the health report', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient', null, { addPatientFixture }); 
    await Then('User should see health info detected from the health report like weight, height, BMI, temperature, SP, DP in test report', null, { addPatientFixture }); 
  });

  test('upload invalid file type - docx,jpeg', async ({ When, Then, addPatientFixture }) => { 
    await When('User uploads a file with other format', null, { addPatientFixture }); 
    await Then('User should see error message "Invalid file type. Please upload a PDF file."', null, { addPatientFixture }); 
  });

  test('Upload file exceeding size limit', async ({ When, Then, addPatientFixture }) => { 
    await When('User uploads a file exceeding the size limit', null, { addPatientFixture }); 
    await Then('User should see error message "File size exceeds the limit. Please upload a smaller file."', null, { addPatientFixture }); 
  });

  test('Upload without selecting file', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks Submit after entering valid data skips file upload', null, { addPatientFixture }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { addPatientFixture }); 
  });

  test('Close add dialog using Close button', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks on the close button in the dialog box', null, { addPatientFixture }); 
    await Then('Add dialog should close and user should be on my patient page without new patient created', null, { addPatientFixture }); 
  });

  test('Validation of the submit button\'s state in the add patient dialog box', async ({ When, Then, addPatientFixture }) => { 
    await When('User enters valid values in all fields', null, { addPatientFixture }); 
    await Then('submit button should be enabled in the dialog box', null, { addPatientFixture }); 
  });

  test('Success message validation for adding new patient with valid data', async ({ When, Then, addPatientFixture }) => { 
    await When('User clicks Submit after entering valid data in all mandatory fields', null, { addPatientFixture }); 
    await Then('User should see "Patient successfully created" - toast message', null, { addPatientFixture }); 
  });

  test('Navigation to My patient after adding new patient with valid data', async ({ Then, addPatientFixture }) => { 
    await Then('User should be navigated to My Patients page with new patients details created', null, { addPatientFixture }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\03Addpatients.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view the dialog box to add patients","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view 9 input fields in the dialog box","stepMatchArguments":[{"group":{"start":32,"value":"9","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":18,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view 3 dropdowns in the dialog box","stepMatchArguments":[{"group":{"start":32,"value":"3","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view a date picker field with MM-DD-YYYY displayed","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view file upload button in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view submit button in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view close button in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then The close button should be enabled in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view the mandatory fields with \"<field>\"","stepMatchArguments":[{"group":{"start":58,"value":"\"<field>\"","children":[{"start":59,"value":"<field>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view non-mandatory fields with \"<field>\"","stepMatchArguments":[{"group":{"start":58,"value":"\"<field>\"","children":[{"start":59,"value":"<field>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":50,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view text 'No file chosen'","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view scroll bar on the right side of the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":57,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When User clicks on the dropdown for Allergy","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then values should be visible in the Allergy dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":63,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then Dropdown should contain 12 values","stepMatchArguments":[{"group":{"start":24,"value":"12","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":67,"pickleLine":64,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then Allergy Dropdown should contain values","stepMatchArguments":[]}]},
  {"pwTestLine":71,"pickleLine":79,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When User clicks on the dropdown for Food Preference","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then values should be visible in the Food Preference dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":83,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then Food Preference dropdown should contain 5 values","stepMatchArguments":[{"group":{"start":40,"value":"5","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":80,"pickleLine":86,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then Dropdown should contain values","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":94,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":95,"keywordType":"Action","textWithKeyword":"When User clicks on the dropdown for Cuisine Category","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":96,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Cuisine dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":98,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Dropdown should contain 36 value","stepMatchArguments":[{"group":{"start":24,"value":"36","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":93,"pickleLine":101,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then dropdown should contain the following values","stepMatchArguments":[]}]},
  {"pwTestLine":97,"pickleLine":134,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":135,"keywordType":"Action","textWithKeyword":"When User clicks on the single value from dropdown for Allergy","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":136,"keywordType":"Outcome","textWithKeyword":"Then Values should be visible in the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":102,"pickleLine":138,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":139,"keywordType":"Outcome","textWithKeyword":"Then Values should be visible in the dropdown","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":140,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select multiple values from the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":107,"pickleLine":142,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When User clicks on the single value from dropdown for Food Preference","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":144,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select a single value from the dropdown for Food Preference","stepMatchArguments":[]}]},
  {"pwTestLine":112,"pickleLine":146,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":147,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select multiple values from the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":116,"pickleLine":149,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":150,"keywordType":"Action","textWithKeyword":"When User clicks on the single value from dropdown for Cuisine Category","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":151,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select a single value from the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":121,"pickleLine":153,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":154,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select multiple values from the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":125,"pickleLine":156,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":157,"keywordType":"Action","textWithKeyword":"When User clicks on the date picker for DOB field","stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":158,"keywordType":"Outcome","textWithKeyword":"Then User should see calender date picker displayed with Month,Day,Year","stepMatchArguments":[]}]},
  {"pwTestLine":130,"pickleLine":160,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":161,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field and selects valid date \"12/25/1990\"","stepMatchArguments":[{"group":{"start":55,"value":"\"12/25/1990\"","children":[{"start":56,"value":"12/25/1990","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":132,"gherkinStepLine":162,"keywordType":"Outcome","textWithKeyword":"Then User should see selected date in the DOB field","stepMatchArguments":[]}]},
  {"pwTestLine":135,"pickleLine":164,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field, selects valid date \"01/12/2000\" and clicks outside the calendar","stepMatchArguments":[{"group":{"start":52,"value":"\"01/12/2000\"","children":[{"start":53,"value":"01/12/2000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":137,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then User should see selected date in MM/DD/YYYY format in the DOB field","stepMatchArguments":[]}]},
  {"pwTestLine":140,"pickleLine":168,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":169,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field and selects future date \"12/31/2099\"","stepMatchArguments":[{"group":{"start":56,"value":"\"12/31/2099\"","children":[{"start":57,"value":"12/31/2099","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":142,"gherkinStepLine":170,"keywordType":"Outcome","textWithKeyword":"Then User should see the future date to be disabled","stepMatchArguments":[]}]},
  {"pwTestLine":145,"pickleLine":172,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":173,"keywordType":"Action","textWithKeyword":"When User selects current date as DOB","stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":174,"keywordType":"Outcome","textWithKeyword":"Then User should get error message \"Date of Birth cannot be current or future date\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Date of Birth cannot be current or future date\"","children":[{"start":31,"value":"Date of Birth cannot be current or future date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":150,"pickleLine":175,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":176,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field and selects invalid date 34/20/2022","stepMatchArguments":[{"group":{"start":57,"value":"34","children":[]},"parameterTypeName":"int"},{"group":{"start":60,"value":"20","children":[]},"parameterTypeName":"int"},{"group":{"start":63,"value":"2022","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":152,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date ,Please select valid date\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date ,Please select valid date\"","children":[{"start":34,"value":"Invalid date ,Please select valid date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":155,"pickleLine":178,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":179,"keywordType":"Action","textWithKeyword":"When User enters \"ab/cd/efgh\" in the DOB field","stepMatchArguments":[{"group":{"start":12,"value":"\"ab/cd/efgh\"","children":[{"start":13,"value":"ab/cd/efgh","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":157,"gherkinStepLine":180,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date format\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date format\"","children":[{"start":34,"value":"Invalid date format","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":160,"pickleLine":181,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":182,"keywordType":"Action","textWithKeyword":"When User enters \"12/05\" in the DOB field","stepMatchArguments":[{"group":{"start":12,"value":"\"12/05\"","children":[{"start":13,"value":"12/05","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":162,"gherkinStepLine":183,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date format\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date format\"","children":[{"start":34,"value":"Invalid date format","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":165,"pickleLine":184,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":185,"keywordType":"Action","textWithKeyword":"When User enters Feb 29 2024 in DOB","stepMatchArguments":[{"group":{"start":16,"value":"29","children":[]},"parameterTypeName":"int"},{"group":{"start":19,"value":"2024","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":167,"gherkinStepLine":186,"keywordType":"Outcome","textWithKeyword":"Then User should be able to select the date without any error message","stepMatchArguments":[]}]},
  {"pwTestLine":170,"pickleLine":188,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":189,"keywordType":"Action","textWithKeyword":"When User enters Feb 29 2023 in DOB","stepMatchArguments":[{"group":{"start":16,"value":"29","children":[]},"parameterTypeName":"int"},{"group":{"start":19,"value":"2023","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":172,"gherkinStepLine":190,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date ,Please select valid date\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date ,Please select valid date\"","children":[{"start":34,"value":"Invalid date ,Please select valid date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":177,"pickleLine":198,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":178,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"FN_Numeric\"","stepMatchArguments":[{"group":{"start":49,"value":"\"FN_Numeric\"","children":[{"start":50,"value":"FN_Numeric","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":179,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":180,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient first name accepts only alphabets\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient first name accepts only alphabets\"","children":[{"start":17,"value":"Patient first name accepts only alphabets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":183,"pickleLine":199,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":184,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"FN_SpecialChar\"","stepMatchArguments":[{"group":{"start":49,"value":"\"FN_SpecialChar\"","children":[{"start":50,"value":"FN_SpecialChar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":185,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":186,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient first name accepts only alphabets\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient first name accepts only alphabets\"","children":[{"start":17,"value":"Patient first name accepts only alphabets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":189,"pickleLine":200,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":190,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"FN_Empty\"","stepMatchArguments":[{"group":{"start":49,"value":"\"FN_Empty\"","children":[{"start":50,"value":"FN_Empty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":191,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient first name is required\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient first name is required\"","children":[{"start":17,"value":"Patient first name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":195,"pickleLine":201,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":196,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"LN_Numeric\"","stepMatchArguments":[{"group":{"start":49,"value":"\"LN_Numeric\"","children":[{"start":50,"value":"LN_Numeric","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":197,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient last name accepts only alphabets\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient last name accepts only alphabets\"","children":[{"start":17,"value":"Patient last name accepts only alphabets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":201,"pickleLine":202,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":202,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Email_NoAt\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Email_NoAt\"","children":[{"start":50,"value":"Email_NoAt","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":203,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid email address\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid email address\"","children":[{"start":17,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":207,"pickleLine":203,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":208,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Email_Exists\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Email_Exists\"","children":[{"start":50,"value":"Email_Exists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":209,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Email address already exists\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Email address already exists\"","children":[{"start":17,"value":"Email address already exists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":213,"pickleLine":204,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":214,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Contact_Alpha\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Contact_Alpha\"","children":[{"start":50,"value":"Contact_Alpha","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":215,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":216,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid contact number\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid contact number\"","children":[{"start":17,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":219,"pickleLine":205,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Contact_Short\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Contact_Short\"","children":[{"start":50,"value":"Contact_Short","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":221,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":222,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid contact number\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid contact number\"","children":[{"start":17,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":225,"pickleLine":206,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":226,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Allergy_Empty\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Allergy_Empty\"","children":[{"start":50,"value":"Allergy_Empty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":227,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":228,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Allergy information is required\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Allergy information is required\"","children":[{"start":17,"value":"Allergy information is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":231,"pickleLine":207,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":232,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"DOB_Empty\"","stepMatchArguments":[{"group":{"start":49,"value":"\"DOB_Empty\"","children":[{"start":50,"value":"DOB_Empty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":233,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":234,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Date of Birth is required\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Date of Birth is required\"","children":[{"start":17,"value":"Date of Birth is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":237,"pickleLine":208,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":238,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Weight_Special\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Weight_Special\"","children":[{"start":50,"value":"Weight_Special","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":239,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":240,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid weight\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid weight\"","children":[{"start":17,"value":"Please enter valid weight","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":243,"pickleLine":209,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":244,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Height_Alpha\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Height_Alpha\"","children":[{"start":50,"value":"Height_Alpha","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":245,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":246,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid height\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid height\"","children":[{"start":17,"value":"Please enter valid height","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":249,"pickleLine":210,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":250,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Temp_Alpha\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Temp_Alpha\"","children":[{"start":50,"value":"Temp_Alpha","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":251,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":252,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid temperature\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid temperature\"","children":[{"start":17,"value":"Please enter valid temperature","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":255,"pickleLine":211,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":256,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"SPDP_Alpha\"","stepMatchArguments":[{"group":{"start":49,"value":"\"SPDP_Alpha\"","children":[{"start":50,"value":"SPDP_Alpha","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":257,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":258,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid SP,DP\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid SP,DP\"","children":[{"start":17,"value":"Please enter valid SP,DP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":261,"pickleLine":212,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":262,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"All_Valid\"","stepMatchArguments":[{"group":{"start":49,"value":"\"All_Valid\"","children":[{"start":50,"value":"All_Valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":263,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":264,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient successfully created\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient successfully created\"","children":[{"start":17,"value":"Patient successfully created","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":269,"pickleLine":213,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":270,"gherkinStepLine":214,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering numeric data in First name field","stepMatchArguments":[]},{"pwStepLine":271,"gherkinStepLine":215,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient first name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":274,"pickleLine":216,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":275,"gherkinStepLine":217,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in First name field","stepMatchArguments":[]},{"pwStepLine":276,"gherkinStepLine":218,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient first name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":279,"pickleLine":219,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":280,"gherkinStepLine":220,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving First name field empty","stepMatchArguments":[]},{"pwStepLine":281,"gherkinStepLine":221,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Patient first name is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Patient first name is required\"","children":[{"start":32,"value":"Patient first name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":284,"pickleLine":222,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":285,"gherkinStepLine":223,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering numeric data in Last name field","stepMatchArguments":[]},{"pwStepLine":286,"gherkinStepLine":224,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient last name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":289,"pickleLine":225,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":290,"gherkinStepLine":226,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in Last name field","stepMatchArguments":[]},{"pwStepLine":291,"gherkinStepLine":227,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient last name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":294,"pickleLine":228,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":295,"gherkinStepLine":229,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving Last name field empty","stepMatchArguments":[]},{"pwStepLine":296,"gherkinStepLine":230,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Patient last name is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Patient last name is required\"","children":[{"start":32,"value":"Patient last name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":299,"pickleLine":231,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":300,"gherkinStepLine":232,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email starting with number","stepMatchArguments":[]},{"pwStepLine":301,"gherkinStepLine":233,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid email address\"","children":[{"start":32,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":304,"pickleLine":234,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":305,"gherkinStepLine":235,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email without @ symbol","stepMatchArguments":[]},{"pwStepLine":306,"gherkinStepLine":236,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid email address\"","children":[{"start":32,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":309,"pickleLine":237,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":310,"gherkinStepLine":238,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email with special characters without @ symbol","stepMatchArguments":[]},{"pwStepLine":311,"gherkinStepLine":239,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid email address\"","children":[{"start":32,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":314,"pickleLine":240,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":315,"gherkinStepLine":241,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email without .com","stepMatchArguments":[]},{"pwStepLine":316,"gherkinStepLine":242,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid email address\"","children":[{"start":32,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":319,"pickleLine":243,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":320,"gherkinStepLine":244,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email which is already existing in the system","stepMatchArguments":[]},{"pwStepLine":321,"gherkinStepLine":245,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Email address already exists\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Email address already exists\"","children":[{"start":32,"value":"Email address already exists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":324,"pickleLine":246,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":325,"gherkinStepLine":247,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering all mandatory fields except email field","stepMatchArguments":[]},{"pwStepLine":326,"gherkinStepLine":248,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Email address is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Email address is required\"","children":[{"start":32,"value":"Email address is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":329,"pickleLine":249,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":330,"gherkinStepLine":250,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering alphabets in contact number with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":331,"gherkinStepLine":251,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid contact number\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid contact number\"","children":[{"start":32,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":334,"pickleLine":252,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":335,"gherkinStepLine":253,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering special characters in contact number with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":336,"gherkinStepLine":254,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid contact number\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid contact number\"","children":[{"start":32,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":339,"pickleLine":255,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":340,"gherkinStepLine":256,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering less than required digits in contact number with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":341,"gherkinStepLine":257,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid contact number\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid contact number\"","children":[{"start":32,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":344,"pickleLine":258,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":345,"gherkinStepLine":259,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering greater than required digits in contact number with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":346,"gherkinStepLine":260,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid contact number\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid contact number\"","children":[{"start":32,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":349,"pickleLine":261,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":350,"gherkinStepLine":262,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering contact number which is already existing in the system with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":351,"gherkinStepLine":263,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Contact number already exists\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Contact number already exists\"","children":[{"start":32,"value":"Contact number already exists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":354,"pickleLine":264,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":355,"gherkinStepLine":265,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering all mandatory fields except contact number field","stepMatchArguments":[]},{"pwStepLine":356,"gherkinStepLine":266,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Contact number is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Contact number is required\"","children":[{"start":32,"value":"Contact number is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":359,"pickleLine":267,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":360,"gherkinStepLine":268,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving Allergies field empty with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":361,"gherkinStepLine":269,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Allergy information is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Allergy information is required\"","children":[{"start":32,"value":"Allergy information is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":364,"pickleLine":270,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":365,"gherkinStepLine":271,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving Food Preference field empty with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":366,"gherkinStepLine":272,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Food preference is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Food preference is required\"","children":[{"start":32,"value":"Food preference is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":369,"pickleLine":273,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":370,"gherkinStepLine":274,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving Cusine Category field empty with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":371,"gherkinStepLine":275,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Cuisine category is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Cuisine category is required\"","children":[{"start":32,"value":"Cuisine category is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":374,"pickleLine":276,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":375,"gherkinStepLine":277,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving DOB field empty with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":376,"gherkinStepLine":278,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Date of Birth is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Date of Birth is required\"","children":[{"start":32,"value":"Date of Birth is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":379,"pickleLine":279,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":380,"gherkinStepLine":280,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering valid weight data in weight field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":381,"gherkinStepLine":281,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":384,"pickleLine":282,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":385,"gherkinStepLine":283,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in weight field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":386,"gherkinStepLine":284,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid weight\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid weight\"","children":[{"start":32,"value":"Please enter valid weight","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":389,"pickleLine":285,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":390,"gherkinStepLine":286,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering alphabets in weight field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":391,"gherkinStepLine":287,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid weight\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid weight\"","children":[{"start":32,"value":"Please enter valid weight","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":394,"pickleLine":288,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":395,"gherkinStepLine":289,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering valid height data in height field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":396,"gherkinStepLine":290,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":399,"pickleLine":291,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":400,"gherkinStepLine":292,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in height field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":401,"gherkinStepLine":293,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid height\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid height\"","children":[{"start":32,"value":"Please enter valid height","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":404,"pickleLine":294,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":405,"gherkinStepLine":295,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering alphabets in height field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":406,"gherkinStepLine":296,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid height\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid height\"","children":[{"start":32,"value":"Please enter valid height","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":409,"pickleLine":297,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":410,"gherkinStepLine":298,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering valid temperature data in temperature field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":411,"gherkinStepLine":299,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":414,"pickleLine":300,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":415,"gherkinStepLine":301,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in temperature field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":416,"gherkinStepLine":302,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid temperature\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid temperature\"","children":[{"start":32,"value":"Please enter valid temperature","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":419,"pickleLine":303,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":420,"gherkinStepLine":304,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering alphabets in temperature field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":421,"gherkinStepLine":305,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid temperature\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid temperature\"","children":[{"start":32,"value":"Please enter valid temperature","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":424,"pickleLine":306,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":425,"gherkinStepLine":307,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering valid SP,DP data in SP,DP field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":426,"gherkinStepLine":308,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":429,"pickleLine":309,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":430,"gherkinStepLine":310,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering special characters in SP,DP field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":431,"gherkinStepLine":311,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid SP,DP\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid SP,DP\"","children":[{"start":32,"value":"Please enter valid SP,DP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":434,"pickleLine":312,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":435,"gherkinStepLine":314,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid SP,DP\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid SP,DP\"","children":[{"start":32,"value":"Please enter valid SP,DP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":438,"pickleLine":315,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":439,"gherkinStepLine":316,"keywordType":"Action","textWithKeyword":"When User clicks Submit after uploading a valid file","stepMatchArguments":[]},{"pwStepLine":440,"gherkinStepLine":317,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to My Patient page with the uploaded file saved successfully","stepMatchArguments":[]}]},
  {"pwTestLine":443,"pickleLine":318,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":444,"gherkinStepLine":319,"keywordType":"Action","textWithKeyword":"When User uploads health report in pdf","stepMatchArguments":[]},{"pwStepLine":445,"gherkinStepLine":320,"keywordType":"Outcome","textWithKeyword":"Then User should be able to see the file name displayed with valid file name in the dialog box after successful upload","stepMatchArguments":[]}]},
  {"pwTestLine":448,"pickleLine":321,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":449,"gherkinStepLine":322,"keywordType":"Action","textWithKeyword":"When User clicks \"View Previous Test Report\" after being redirected to My Patient page for newly  created patient","stepMatchArguments":[{"group":{"start":12,"value":"\"View Previous Test Report\"","children":[{"start":13,"value":"View Previous Test Report","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":450,"gherkinStepLine":323,"keywordType":"Outcome","textWithKeyword":"Then User should see upload date info in test report","stepMatchArguments":[]}]},
  {"pwTestLine":453,"pickleLine":324,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":454,"gherkinStepLine":325,"keywordType":"Action","textWithKeyword":"When User clicks \"View Previous Test Report\" after being redirected to My Patient page for newly  created patient","stepMatchArguments":[{"group":{"start":12,"value":"\"View Previous Test Report\"","children":[{"start":13,"value":"View Previous Test Report","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":455,"gherkinStepLine":326,"keywordType":"Outcome","textWithKeyword":"Then User should see PDF file in test report","stepMatchArguments":[]}]},
  {"pwTestLine":458,"pickleLine":327,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":459,"gherkinStepLine":328,"keywordType":"Action","textWithKeyword":"When User clicks \"View Previous Test Report\" after being redirected to My Patient page for newly  created patient","stepMatchArguments":[{"group":{"start":12,"value":"\"View Previous Test Report\"","children":[{"start":13,"value":"View Previous Test Report","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":460,"gherkinStepLine":329,"keywordType":"Outcome","textWithKeyword":"Then User should see health info detected from the health report like weight, height, BMI, temperature, SP, DP in test report","stepMatchArguments":[]}]},
  {"pwTestLine":463,"pickleLine":330,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":464,"gherkinStepLine":331,"keywordType":"Action","textWithKeyword":"When User uploads a file with other format","stepMatchArguments":[]},{"pwStepLine":465,"gherkinStepLine":332,"keywordType":"Outcome","textWithKeyword":"Then User should see error message \"Invalid file type. Please upload a PDF file.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Invalid file type. Please upload a PDF file.\"","children":[{"start":31,"value":"Invalid file type. Please upload a PDF file.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":468,"pickleLine":333,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":469,"gherkinStepLine":334,"keywordType":"Action","textWithKeyword":"When User uploads a file exceeding the size limit","stepMatchArguments":[]},{"pwStepLine":470,"gherkinStepLine":335,"keywordType":"Outcome","textWithKeyword":"Then User should see error message \"File size exceeds the limit. Please upload a smaller file.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"File size exceeds the limit. Please upload a smaller file.\"","children":[{"start":31,"value":"File size exceeds the limit. Please upload a smaller file.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":473,"pickleLine":336,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":474,"gherkinStepLine":337,"keywordType":"Action","textWithKeyword":"When User clicks Submit after entering valid data skips file upload","stepMatchArguments":[]},{"pwStepLine":475,"gherkinStepLine":338,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":478,"pickleLine":339,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":479,"gherkinStepLine":340,"keywordType":"Action","textWithKeyword":"When User clicks on the close button in the dialog box","stepMatchArguments":[]},{"pwStepLine":480,"gherkinStepLine":341,"keywordType":"Outcome","textWithKeyword":"Then Add dialog should close and user should be on my patient page without new patient created","stepMatchArguments":[]}]},
  {"pwTestLine":483,"pickleLine":342,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":484,"gherkinStepLine":343,"keywordType":"Action","textWithKeyword":"When User enters valid values in all fields","stepMatchArguments":[]},{"pwStepLine":485,"gherkinStepLine":344,"keywordType":"Outcome","textWithKeyword":"Then submit button should be enabled in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":488,"pickleLine":345,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":489,"gherkinStepLine":346,"keywordType":"Action","textWithKeyword":"When User clicks Submit after entering valid data in all mandatory fields","stepMatchArguments":[]},{"pwStepLine":490,"gherkinStepLine":347,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient successfully created\" - toast message","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient successfully created\"","children":[{"start":17,"value":"Patient successfully created","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":493,"pickleLine":348,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","isBg":true,"stepMatchArguments":[]},{"pwStepLine":494,"gherkinStepLine":349,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to My Patients page with new patients details created","stepMatchArguments":[]}]},
]; // bdd-data-end