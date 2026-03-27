// Generated from: tests\features\07Addpatients.feature
import { test } from "../../../tests/fixtures/customFixtures.js";

test.describe('Add Patients', () => {

  test('User should be able to view the dialog box to add patients', async ({ Given, When, Then, page }) => { 
    await Given('The user is on the home page', null, { page }); 
    await When('The user clicks on new patient tab in the header section', null, { page }); 
    await Then('The user should be able to view the dialog box to add patients', null, { page }); 
  });

  test('Validation of 9 input fields in the add patient dialog box', async ({ Then, page }) => { 
    await Then('The user should be able to view 9 input fields in the dialog box', null, { page }); 
  });

  test('Validation of 3 dropdowns in the add patient dialog box', async ({ Then, page }) => { 
    await Then('The user should be able to view 3 dropdowns in the dialog box', null, { page }); 
  });

  test('Validation of a date picker field in the add patient dialog box', async ({ Then, page }) => { 
    await Then('The user should be able to view a date picker field with MM-DD-YYYY displayed', null, { page }); 
  });

  test('Validation of file upload button', async ({ Then, page }) => { 
    await Then('The user should be able to view file upload button in the dialog box', null, { page }); 
  });

  test('Validation of submit button', async ({ Then, page }) => { 
    await Then('The user should be able to view submit button in the dialog box', null, { page }); 
  });

  test('Presence of close button', async ({ Then, page }) => { 
    await Then('The user should be able to view close button in the dialog box', null, { page }); 
  });

  test('State of the close button', async ({ Then, page }) => { 
    await Then('The close button should be enabled in the dialog box', null, { page }); 
  });

  test('Mandatory field visibility for the placeholders', async ({ Then, page }) => { 
    await Then('The user should be able to view the mandatory fields with "<field>"', {"dataTable":{"rows":[{"cells":[{"value":"field"}]},{"cells":[{"value":"firstname"}]},{"cells":[{"value":"lastname"}]},{"cells":[{"value":"email"}]},{"cells":[{"value":"contact number"}]},{"cells":[{"value":"date of birth"}]},{"cells":[{"value":"weight"}]}]}}, { page }); 
  });

  test('Validation of non-mandatory fields with placeholders', async ({ Then, page }) => { 
    await Then('The user should be able to view non-mandatory fields with "<field>"', {"dataTable":{"rows":[{"cells":[{"value":"field"}]},{"cells":[{"value":"Height"}]},{"cells":[{"value":"BMI"}]},{"cells":[{"value":"Temperature"}]},{"cells":[{"value":"SP"}]},{"cells":[{"value":"DP"}]}]}}, { page }); 
  });

  test('Presence of text "No file Chosen" when no files uploaded', async ({ Then, page }) => { 
    await Then('The user should be able to view text \'No file chosen\'', null, { page }); 
  });

  test('Presence of scroll bar in the dialog box', async ({ Then, page }) => { 
    await Then('The user should be able to view scroll bar on the right side of the dialog box', null, { page }); 
  });

  test('Presence of dropdown values in Allergy', async ({ When, Then, page }) => { 
    await When('User clicks on the dropdown for Allergy', null, { page }); 
    await Then('values should be visible in the Allergy dropdown', null, { page }); 
  });

  test('Validation of 12 dropdown values in Allergy dropdown', async ({ Then, page }) => { 
    await Then('Dropdown should contain 12 values', null, { page }); 
  });

  test('Validation of the 12 text values in the Allergy dropdown', async ({ Then, page }) => { 
    await Then('Allergy Dropdown should contain values', {"dataTable":{"rows":[{"cells":[{"value":"Egg"}]},{"cells":[{"value":"Milk"}]},{"cells":[{"value":"Soy"}]},{"cells":[{"value":"Almond"}]},{"cells":[{"value":"Peanuts"}]},{"cells":[{"value":"Walnut"}]},{"cells":[{"value":"Pistachio"}]},{"cells":[{"value":"Sesame"}]},{"cells":[{"value":"Hazelnut"}]},{"cells":[{"value":"Pecan"}]},{"cells":[{"value":"Cashew"}]},{"cells":[{"value":"NONE"}]}]}}, { page }); 
  });

  test('Validation of dropdown values in Food Preference dropdown', async ({ When, Then, page }) => { 
    await When('User clicks on the dropdown for Food Preference', null, { page }); 
    await Then('values should be visible in the Food Preference dropdown', null, { page }); 
  });

  test('Validation of 5 dropdown values in Food Preference dropdown', async ({ Then, page }) => { 
    await Then('Food Preference dropdown should contain 5 values', null, { page }); 
  });

  test('Validation of the 5 text values in the Food Preference dropdown', async ({ Then, page }) => { 
    await Then('Dropdown should contain values', {"dataTable":{"rows":[{"cells":[{"value":"Vegan"}]},{"cells":[{"value":"Vegetarian"}]},{"cells":[{"value":"Jain"}]},{"cells":[{"value":"Eggitarian"}]},{"cells":[{"value":"NonVeg"}]}]}}, { page }); 
  });

  test('Presence of dropdown values in Cuisine Category dropdown', async ({ When, Then, page }) => { 
    await When('User clicks on the dropdown for Cuisine Category', null, { page }); 
    await Then('Values should be present inside Cuisine dropdown', null, { page }); 
  });

  test('Validation of 36 dropdown values in Cuisine Category dropdown', async ({ Then, page }) => { 
    await Then('Dropdown should contain 36 value', null, { page }); 
  });

  test('Validation of the 36 text values in the Cuisine Category dropdown', async ({ Then, page }) => { 
    await Then('dropdown should contain the following values', {"dataTable":{"rows":[{"cells":[{"value":"South Indian"}]},{"cells":[{"value":"Rajasthani"}]},{"cells":[{"value":"Punjabi"}]},{"cells":[{"value":"Bengali"}]},{"cells":[{"value":"Orissa"}]},{"cells":[{"value":"Gujarati"}]},{"cells":[{"value":"Maharashtrian"}]},{"cells":[{"value":"Andhra"}]},{"cells":[{"value":"Kerala"}]},{"cells":[{"value":"Goan"}]},{"cells":[{"value":"Kashmiri"}]},{"cells":[{"value":"Himachali"}]},{"cells":[{"value":"Tamil Nadu"}]},{"cells":[{"value":"Karnataka"}]},{"cells":[{"value":"Sindhi"}]},{"cells":[{"value":"Chhattisgarhi"}]},{"cells":[{"value":"Madhya Pradesh"}]},{"cells":[{"value":"Assamese"}]},{"cells":[{"value":"Manipuri"}]},{"cells":[{"value":"Tripuri"}]},{"cells":[{"value":"Sikkimese"}]},{"cells":[{"value":"Mizo"}]},{"cells":[{"value":"Arunachali"}]},{"cells":[{"value":"Uttarakhand"}]},{"cells":[{"value":"Haryanvi"}]},{"cells":[{"value":"Awadhi"}]},{"cells":[{"value":"Bihari"}]},{"cells":[{"value":"Uttar Pradesh"}]},{"cells":[{"value":"Delhi"}]},{"cells":[{"value":"North Indian"}]}]}}, { page }); 
  });

  test('Select a single value from Allergy dropdown', async ({ When, Then, page }) => { 
    await When('User clicks on the single value from dropdown for Allergy', null, { page }); 
    await Then('Values should be visible in the dropdown', null, { page }); 
  });

  test('Select multiple values from Allergy dropdown', async ({ Then, page }) => { 
    await Then('Values should be visible in the dropdown', null, { page }); 
    await Then('user should be able to select multiple values from the dropdown', null, { page }); 
  });

  test('Select a single value from Food Preference dropdown', async ({ When, Then, page }) => { 
    await When('User clicks on the single value from dropdown for Food Preference', null, { page }); 
    await Then('user should be able to select a single value from the dropdown for Food Preference', null, { page }); 
  });

  test('Select multiple values from Food Preference dropdown', async ({ Then, page }) => { 
    await Then('user should be able to select multiple values from the dropdown', null, { page }); 
  });

  test('Select a single value from Cuisine Category dropdown', async ({ When, Then, page }) => { 
    await When('User clicks on the single value from dropdown for Cuisine Category', null, { page }); 
    await Then('user should be able to select a single value from the dropdown', null, { page }); 
  });

  test('Select multiple values from Cuisine Category dropdown', async ({ Then, page }) => { 
    await Then('user should be able to select multiple values from the dropdown', null, { page }); 
  });

  test('Selecting date for DOB field', async ({ When, Then, page }) => { 
    await When('User clicks on the date picker for DOB field', null, { page }); 
    await Then('User should see calender date picker displayed with Month,Day,Year', null, { page }); 
  });

  test('Selecting date for DOB field', async ({ When, Then, page }) => { 
    await When('User clicks Date of Birth field and selects valid date "12/25/1990"', null, { page }); 
    await Then('User should see selected date in the DOB field', null, { page }); 
  });

  test('Verify selected date is displayed in MM/DD/YYYY format', async ({ When, Then, page }) => { 
    await When('User clicks Date of Birth field, selects valid date "01/12/2000" and clicks outside the calendar', null, { page }); 
    await Then('User should see selected date in MM/DD/YYYY format in the DOB field', null, { page }); 
  });

  test('Prevent selection of future date in DOB field', async ({ When, Then, page }) => { 
    await When('User clicks Date of Birth field and selects future date "12/31/2099"', null, { page }); 
    await Then('User should see the future date to be disabled', null, { page }); 
  });

  test('Selecting current date as DOB', async ({ When, Then, page }) => { 
    await When('User selects current date as DOB', null, { page }); 
    await Then('User should get error message "Date of Birth cannot be current or future date"', null, { page }); 
  });

  test('Selecting Invalid date', async ({ When, Then, page }) => { 
    await When('User clicks Date of Birth field and selects invalid date 34/20/2022', null, { page }); 
    await Then('User should see an error message "Invalid date ,Please select valid date"', null, { page }); 
  });

  test('User enters non-numeric value in DOB field', async ({ When, Then, page }) => { 
    await When('User enters "ab/cd/efgh" in the DOB field', null, { page }); 
    await Then('User should see an error message "Invalid date format"', null, { page }); 
  });

  test('Selecting partial date in DOB field', async ({ When, Then, page }) => { 
    await When('User enters "12/05" in the DOB field', null, { page }); 
    await Then('User should see an error message "Invalid date format"', null, { page }); 
  });

  test('Leap year validation', async ({ When, Then, page }) => { 
    await When('User enters Feb 29 2024 in DOB', null, { page }); 
    await Then('User should be able to select the date without any error message', null, { page }); 
  });

  test('Non Leap year validation', async ({ When, Then, page }) => { 
    await When('User enters Feb 29 2023 in DOB', null, { page }); 
    await Then('User should see an error message "Invalid date ,Please select valid date"', null, { page }); 
  });

  test.describe('Validate Add Patient form using Excel', () => {

    test('Example #1', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "FN_Numeric"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Patient first name accepts only alphabets" from Excel', null, { page }); 
    });

    test('Example #2', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "FN_SpecialChar"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Patient first name accepts only alphabets" from Excel', null, { page }); 
    });

    test('Example #3', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "FN_Empty"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Patient first name is required" from Excel', null, { page }); 
    });

    test('Example #4', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "LN_Numeric"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Patient last name accepts only alphabets" from Excel', null, { page }); 
    });

    test('Example #5', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "Email_NoAt"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Please enter valid email address" from Excel', null, { page }); 
    });

    test('Example #6', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "Email_Exists"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Email address already exists" from Excel', null, { page }); 
    });

    test('Example #7', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "Contact_Alpha"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Please enter valid contact number" from Excel', null, { page }); 
    });

    test('Example #8', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "Contact_Short"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Please enter valid contact number" from Excel', null, { page }); 
    });

    test('Example #9', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "Allergy_Empty"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Allergy information is required" from Excel', null, { page }); 
    });

    test('Example #10', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "DOB_Empty"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Date of Birth is required" from Excel', null, { page }); 
    });

    test('Example #11', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "Weight_Special"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Please enter valid weight" from Excel', null, { page }); 
    });

    test('Example #12', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "Height_Alpha"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Please enter valid height" from Excel', null, { page }); 
    });

    test('Example #13', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "Temp_Alpha"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Please enter valid temperature" from Excel', null, { page }); 
    });

    test('Example #14', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "SPDP_Alpha"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Please enter valid SP,DP" from Excel', null, { page }); 
    });

    test('Example #15', async ({ When, Then, And, page }) => { 
      await When('User enters patient details from Excel sheet for "All_Valid"', null, { page }); 
      await And('User submits the form', null, { page }); 
      await Then('User should see "Patient successfully created" from Excel', null, { page }); 
    });

  });

  test('Add first name field with numeric data', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering numeric data in First name field', null, { page }); 
    await Then('User should  see error message in Patient first name accepts only alphabets', null, { page }); 
  });

  test('Add first name field with special character data', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering special characters in First name field', null, { page }); 
    await Then('User should  see error message in Patient first name accepts only alphabets', null, { page }); 
  });

  test('Mandatory field check for firstname field', async ({ When, Then, page }) => { 
    await When('User navigate to next field leaving First name field empty', null, { page }); 
    await Then('User should  see error message "Patient first name is required"', null, { page }); 
  });

  test('Add last name field with numeric data', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering numeric data in Last name field', null, { page }); 
    await Then('User should  see error message in Patient last name accepts only alphabets', null, { page }); 
  });

  test('Add last name field with special character data', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering special characters in Last name field', null, { page }); 
    await Then('User should  see error message in Patient last name accepts only alphabets', null, { page }); 
  });

  test('Mandatory field check for lastname field', async ({ When, Then, page }) => { 
    await When('User navigate to next field leaving Last name field empty', null, { page }); 
    await Then('User should  see error message "Patient last name is required"', null, { page }); 
  });

  test('Add email with  starts with number', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering email starting with number', null, { page }); 
    await Then('User should  see error message "Please enter valid email address"', null, { page }); 
  });

  test('Add email without @ symbol', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering email without @ symbol', null, { page }); 
    await Then('User should  see error message "Please enter valid email address"', null, { page }); 
  });

  test('Add email with special characters withou @', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering email with special characters without @ symbol', null, { page }); 
    await Then('User should  see error message "Please enter valid email address"', null, { page }); 
  });

  test('Add email without .com', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering email without .com', null, { page }); 
    await Then('User should  see error message "Please enter valid email address"', null, { page }); 
  });

  test('Existing email id', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering email which is already existing in the system', null, { page }); 
    await Then('User should  see error message "Email address already exists"', null, { page }); 
  });

  test('Mandatory field check for email field', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering all mandatory fields except email field', null, { page }); 
    await Then('User should  see error message "Email address is required"', null, { page }); 
  });

  test('Add contact number with alphabets', async ({ When, Then, page }) => { 
    await When('User navigate to next field after  entering alphabets in contact number with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid contact number"', null, { page }); 
  });

  test('Add contact number with special characters', async ({ When, Then, page }) => { 
    await When('User navigate to next field after  entering special characters in contact number with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid contact number"', null, { page }); 
  });

  test('Add contact number with less than required digits', async ({ When, Then, page }) => { 
    await When('User navigate to next field after  entering less than required digits in contact number with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid contact number"', null, { page }); 
  });

  test('Add contact number with greater than required digits', async ({ When, Then, page }) => { 
    await When('User navigate to next field after  entering greater than required digits in contact number with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid contact number"', null, { page }); 
  });

  test('Existing contact number', async ({ When, Then, page }) => { 
    await When('User navigate to next field after  entering contact number which is already existing in the system with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Contact number already exists"', null, { page }); 
  });

  test('Mandatory field check for contact num field', async ({ When, Then, page }) => { 
    await When('User navigate to next field after  entering all mandatory fields except contact number field', null, { page }); 
    await Then('User should  see error message "Contact number is required"', null, { page }); 
  });

  test('Leaving Allergies field empty', async ({ When, Then, page }) => { 
    await When('User navigate to next field leaving Allergies field empty with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Allergy information is required"', null, { page }); 
  });

  test('Leaving Food Preference field empty', async ({ When, Then, page }) => { 
    await When('User navigate to next field leaving Food Preference field empty with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Food preference is required"', null, { page }); 
  });

  test('Leaving Cusine Category field empty', async ({ When, Then, page }) => { 
    await When('User navigate to next field leaving Cusine Category field empty with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Cuisine category is required"', null, { page }); 
  });

  test('Leaving DOB field empty', async ({ When, Then, page }) => { 
    await When('User navigate to next field leaving DOB field empty with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Date of Birth is required"', null, { page }); 
  });

  test('Add weight with valid data', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering valid weight data in weight field with valid data in other mandatory fields', null, { page }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { page }); 
  });

  test('Add weight with special characters', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering special characters in weight field with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid weight"', null, { page }); 
  });

  test('Add weight with alphabets', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering alphabets in weight field with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid weight"', null, { page }); 
  });

  test('Add height with valid data', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering valid height data in height field with valid data in other mandatory fields', null, { page }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { page }); 
  });

  test('Add height with special characters', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering special characters in height field with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid height"', null, { page }); 
  });

  test('Add height with alphabets', async ({ Given, Then, page }) => { 
    await Given('User navigate to next field after entering alphabets in height field with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid height"', null, { page }); 
  });

  test('Add temperature with valid data', async ({ Given, Then, page }) => { 
    await Given('User navigate to next field after entering valid temperature data in temperature field with valid data in other mandatory fields', null, { page }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { page }); 
  });

  test('Add temperature with special characters', async ({ When, Then, page }) => { 
    await When('User navigate to next field after entering special characters in temperature field with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid temperature"', null, { page }); 
  });

  test('Add temperature with alphabets', async ({ Given, Then, page }) => { 
    await Given('User navigate to next field after entering alphabets in temperature field with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid temperature"', null, { page }); 
  });

  test('Add SP,DP with valid data', async ({ Given, Then, page }) => { 
    await Given('User navigate to next field after entering valid SP,DP data in SP,DP field with valid data in other mandatory fields', null, { page }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { page }); 
  });

  test('Add SP,DP with special characters', async ({ Given, Then, page }) => { 
    await Given('User navigate to next field after entering special characters in SP,DP field with valid data in other mandatory fields', null, { page }); 
    await Then('User should  see error message "Please enter valid SP,DP"', null, { page }); 
  });

  test('Add SP ,DP with alphabets', async ({ Then, page }) => { 
    await Then('User should  see error message "Please enter valid SP,DP"', null, { page }); 
  });

  test('Upload valid file - pdf', async ({ When, Then, page }) => { 
    await When('User clicks Submit after uploading a valid file', null, { page }); 
    await Then('User should be redirected to My Patient page with the uploaded file saved successfully', null, { page }); 
  });

  test('File name after Upload valid file - pdf', async ({ When, Then, page }) => { 
    await When('User uploads health report in pdf', null, { page }); 
    await Then('User should be able to see the file name displayed with valid file name in the dialog box after successful upload', null, { page }); 
  });

  test('Presence of upload date info', async ({ When, Then, page }) => { 
    await When('User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient', null, { page }); 
    await Then('User should see upload date info in test report', null, { page }); 
  });

  test('Presence of PDF file in test report after file upload', async ({ When, Then, page }) => { 
    await When('User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient', null, { page }); 
    await Then('User should see PDF file in test report', null, { page }); 
  });

  test('Presence of health info detected from the health report', async ({ When, Then, page }) => { 
    await When('User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient', null, { page }); 
    await Then('User should see health info detected from the health report like weight, height, BMI, temperature, SP, DP in test report', null, { page }); 
  });

  test('upload invalid file type - docx,jpeg', async ({ When, Then, page }) => { 
    await When('User uploads a file with other format', null, { page }); 
    await Then('User should see error message "Invalid file type. Please upload a PDF file."', null, { page }); 
  });

  test('Upload file exceeding size limit', async ({ When, Then, page }) => { 
    await When('User uploads a file exceeding the size limit', null, { page }); 
    await Then('User should see error message "File size exceeds the limit. Please upload a smaller file."', null, { page }); 
  });

  test('Upload without selecting file', async ({ When, Then, page }) => { 
    await When('User clicks Submit after entering valid data skips file upload', null, { page }); 
    await Then('User is directed to My Patient Page with New Patient Details created', null, { page }); 
  });

  test('Close add dialog using Close button', async ({ When, Then, page }) => { 
    await When('User clicks on the close button in the dialog box', null, { page }); 
    await Then('Add dialog should close and user should be on my patient page without new patient created', null, { page }); 
  });

  test('Validation of the submit button\'s state in the add patient dialog box', async ({ When, Then, page }) => { 
    await When('User enters valid values in all fields', null, { page }); 
    await Then('submit button should be enabled in the dialog box', null, { page }); 
  });

  test('Success message validation for adding new patient with valid data', async ({ When, Then, page }) => { 
    await When('User clicks Submit after entering valid data in all mandatory fields', null, { page }); 
    await Then('User should see "Patient successfully created" - toast message', null, { page }); 
  });

  test('Navigation to My patient after adding new patient with valid data', async ({ Then, page }) => { 
    await Then('User should be navigated to My Patients page with new patients details created', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\07Addpatients.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is on the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When The user clicks on new patient tab in the header section","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view the dialog box to add patients","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view 9 input fields in the dialog box","stepMatchArguments":[{"group":{"start":32,"value":"9","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view 3 dropdowns in the dialog box","stepMatchArguments":[{"group":{"start":32,"value":"3","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view a date picker field with MM-DD-YYYY displayed","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view file upload button in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view submit button in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view close button in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then The close button should be enabled in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":41,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view the mandatory fields with \"<field>\"","stepMatchArguments":[{"group":{"start":58,"value":"\"<field>\"","children":[{"start":59,"value":"<field>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":45,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view non-mandatory fields with \"<field>\"","stepMatchArguments":[{"group":{"start":58,"value":"\"<field>\"","children":[{"start":59,"value":"<field>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view text 'No file chosen'","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":53,"tags":[],"steps":[{"pwStepLine":53,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view scroll bar on the right side of the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":56,"tags":[],"steps":[{"pwStepLine":57,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"When User clicks on the dropdown for Allergy","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then values should be visible in the Allergy dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":60,"tags":[],"steps":[{"pwStepLine":62,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Dropdown should contain 12 values","stepMatchArguments":[{"group":{"start":24,"value":"12","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":65,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":66,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Allergy Dropdown should contain values","stepMatchArguments":[]}]},
  {"pwTestLine":69,"pickleLine":78,"tags":[],"steps":[{"pwStepLine":70,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"When User clicks on the dropdown for Food Preference","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then values should be visible in the Food Preference dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":82,"tags":[],"steps":[{"pwStepLine":75,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Food Preference dropdown should contain 5 values","stepMatchArguments":[{"group":{"start":40,"value":"5","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":78,"pickleLine":85,"tags":[],"steps":[{"pwStepLine":79,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then Dropdown should contain values","stepMatchArguments":[]}]},
  {"pwTestLine":82,"pickleLine":93,"tags":[],"steps":[{"pwStepLine":83,"gherkinStepLine":94,"keywordType":"Action","textWithKeyword":"When User clicks on the dropdown for Cuisine Category","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then Values should be present inside Cuisine dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":87,"pickleLine":97,"tags":[],"steps":[{"pwStepLine":88,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then Dropdown should contain 36 value","stepMatchArguments":[{"group":{"start":24,"value":"36","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":91,"pickleLine":100,"tags":[],"steps":[{"pwStepLine":92,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then dropdown should contain the following values","stepMatchArguments":[]}]},
  {"pwTestLine":95,"pickleLine":133,"tags":[],"steps":[{"pwStepLine":96,"gherkinStepLine":134,"keywordType":"Action","textWithKeyword":"When User clicks on the single value from dropdown for Allergy","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":135,"keywordType":"Outcome","textWithKeyword":"Then Values should be visible in the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":100,"pickleLine":137,"tags":[],"steps":[{"pwStepLine":101,"gherkinStepLine":138,"keywordType":"Outcome","textWithKeyword":"Then Values should be visible in the dropdown","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":139,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select multiple values from the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":105,"pickleLine":141,"tags":[],"steps":[{"pwStepLine":106,"gherkinStepLine":142,"keywordType":"Action","textWithKeyword":"When User clicks on the single value from dropdown for Food Preference","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":143,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select a single value from the dropdown for Food Preference","stepMatchArguments":[]}]},
  {"pwTestLine":110,"pickleLine":145,"tags":[],"steps":[{"pwStepLine":111,"gherkinStepLine":146,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select multiple values from the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":114,"pickleLine":148,"tags":[],"steps":[{"pwStepLine":115,"gherkinStepLine":149,"keywordType":"Action","textWithKeyword":"When User clicks on the single value from dropdown for Cuisine Category","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":150,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select a single value from the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":119,"pickleLine":152,"tags":[],"steps":[{"pwStepLine":120,"gherkinStepLine":153,"keywordType":"Outcome","textWithKeyword":"Then user should be able to select multiple values from the dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":123,"pickleLine":155,"tags":[],"steps":[{"pwStepLine":124,"gherkinStepLine":156,"keywordType":"Action","textWithKeyword":"When User clicks on the date picker for DOB field","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":157,"keywordType":"Outcome","textWithKeyword":"Then User should see calender date picker displayed with Month,Day,Year","stepMatchArguments":[]}]},
  {"pwTestLine":128,"pickleLine":159,"tags":[],"steps":[{"pwStepLine":129,"gherkinStepLine":160,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field and selects valid date \"12/25/1990\"","stepMatchArguments":[{"group":{"start":55,"value":"\"12/25/1990\"","children":[{"start":56,"value":"12/25/1990","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":130,"gherkinStepLine":161,"keywordType":"Outcome","textWithKeyword":"Then User should see selected date in the DOB field","stepMatchArguments":[]}]},
  {"pwTestLine":133,"pickleLine":163,"tags":[],"steps":[{"pwStepLine":134,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field, selects valid date \"01/12/2000\" and clicks outside the calendar","stepMatchArguments":[{"group":{"start":52,"value":"\"01/12/2000\"","children":[{"start":53,"value":"01/12/2000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":135,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then User should see selected date in MM/DD/YYYY format in the DOB field","stepMatchArguments":[]}]},
  {"pwTestLine":138,"pickleLine":167,"tags":[],"steps":[{"pwStepLine":139,"gherkinStepLine":168,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field and selects future date \"12/31/2099\"","stepMatchArguments":[{"group":{"start":56,"value":"\"12/31/2099\"","children":[{"start":57,"value":"12/31/2099","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":140,"gherkinStepLine":169,"keywordType":"Outcome","textWithKeyword":"Then User should see the future date to be disabled","stepMatchArguments":[]}]},
  {"pwTestLine":143,"pickleLine":171,"tags":[],"steps":[{"pwStepLine":144,"gherkinStepLine":172,"keywordType":"Action","textWithKeyword":"When User selects current date as DOB","stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then User should get error message \"Date of Birth cannot be current or future date\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Date of Birth cannot be current or future date\"","children":[{"start":31,"value":"Date of Birth cannot be current or future date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":148,"pickleLine":174,"tags":[],"steps":[{"pwStepLine":149,"gherkinStepLine":175,"keywordType":"Action","textWithKeyword":"When User clicks Date of Birth field and selects invalid date 34/20/2022","stepMatchArguments":[{"group":{"start":57,"value":"34","children":[]},"parameterTypeName":"int"},{"group":{"start":60,"value":"20","children":[]},"parameterTypeName":"int"},{"group":{"start":63,"value":"2022","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":150,"gherkinStepLine":176,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date ,Please select valid date\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date ,Please select valid date\"","children":[{"start":34,"value":"Invalid date ,Please select valid date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":153,"pickleLine":177,"tags":[],"steps":[{"pwStepLine":154,"gherkinStepLine":178,"keywordType":"Action","textWithKeyword":"When User enters \"ab/cd/efgh\" in the DOB field","stepMatchArguments":[{"group":{"start":12,"value":"\"ab/cd/efgh\"","children":[{"start":13,"value":"ab/cd/efgh","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":155,"gherkinStepLine":179,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date format\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date format\"","children":[{"start":34,"value":"Invalid date format","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":158,"pickleLine":180,"tags":[],"steps":[{"pwStepLine":159,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When User enters \"12/05\" in the DOB field","stepMatchArguments":[{"group":{"start":12,"value":"\"12/05\"","children":[{"start":13,"value":"12/05","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":160,"gherkinStepLine":182,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date format\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date format\"","children":[{"start":34,"value":"Invalid date format","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":163,"pickleLine":183,"tags":[],"steps":[{"pwStepLine":164,"gherkinStepLine":184,"keywordType":"Action","textWithKeyword":"When User enters Feb 29 2024 in DOB","stepMatchArguments":[{"group":{"start":16,"value":"29","children":[]},"parameterTypeName":"int"},{"group":{"start":19,"value":"2024","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":165,"gherkinStepLine":185,"keywordType":"Outcome","textWithKeyword":"Then User should be able to select the date without any error message","stepMatchArguments":[]}]},
  {"pwTestLine":168,"pickleLine":187,"tags":[],"steps":[{"pwStepLine":169,"gherkinStepLine":188,"keywordType":"Action","textWithKeyword":"When User enters Feb 29 2023 in DOB","stepMatchArguments":[{"group":{"start":16,"value":"29","children":[]},"parameterTypeName":"int"},{"group":{"start":19,"value":"2023","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":170,"gherkinStepLine":189,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message \"Invalid date ,Please select valid date\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Invalid date ,Please select valid date\"","children":[{"start":34,"value":"Invalid date ,Please select valid date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":175,"pickleLine":197,"tags":[],"steps":[{"pwStepLine":176,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"FN_Numeric\"","stepMatchArguments":[{"group":{"start":49,"value":"\"FN_Numeric\"","children":[{"start":50,"value":"FN_Numeric","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":177,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":178,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient first name accepts only alphabets\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient first name accepts only alphabets\"","children":[{"start":17,"value":"Patient first name accepts only alphabets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":181,"pickleLine":198,"tags":[],"steps":[{"pwStepLine":182,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"FN_SpecialChar\"","stepMatchArguments":[{"group":{"start":49,"value":"\"FN_SpecialChar\"","children":[{"start":50,"value":"FN_SpecialChar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":183,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":184,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient first name accepts only alphabets\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient first name accepts only alphabets\"","children":[{"start":17,"value":"Patient first name accepts only alphabets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":187,"pickleLine":199,"tags":[],"steps":[{"pwStepLine":188,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"FN_Empty\"","stepMatchArguments":[{"group":{"start":49,"value":"\"FN_Empty\"","children":[{"start":50,"value":"FN_Empty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":189,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":190,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient first name is required\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient first name is required\"","children":[{"start":17,"value":"Patient first name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":193,"pickleLine":200,"tags":[],"steps":[{"pwStepLine":194,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"LN_Numeric\"","stepMatchArguments":[{"group":{"start":49,"value":"\"LN_Numeric\"","children":[{"start":50,"value":"LN_Numeric","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":195,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":196,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient last name accepts only alphabets\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient last name accepts only alphabets\"","children":[{"start":17,"value":"Patient last name accepts only alphabets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":199,"pickleLine":201,"tags":[],"steps":[{"pwStepLine":200,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Email_NoAt\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Email_NoAt\"","children":[{"start":50,"value":"Email_NoAt","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":201,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":202,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid email address\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid email address\"","children":[{"start":17,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":205,"pickleLine":202,"tags":[],"steps":[{"pwStepLine":206,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Email_Exists\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Email_Exists\"","children":[{"start":50,"value":"Email_Exists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":207,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":208,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Email address already exists\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Email address already exists\"","children":[{"start":17,"value":"Email address already exists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":211,"pickleLine":203,"tags":[],"steps":[{"pwStepLine":212,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Contact_Alpha\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Contact_Alpha\"","children":[{"start":50,"value":"Contact_Alpha","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":213,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":214,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid contact number\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid contact number\"","children":[{"start":17,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":217,"pickleLine":204,"tags":[],"steps":[{"pwStepLine":218,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Contact_Short\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Contact_Short\"","children":[{"start":50,"value":"Contact_Short","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":219,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid contact number\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid contact number\"","children":[{"start":17,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":223,"pickleLine":205,"tags":[],"steps":[{"pwStepLine":224,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Allergy_Empty\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Allergy_Empty\"","children":[{"start":50,"value":"Allergy_Empty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":225,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":226,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Allergy information is required\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Allergy information is required\"","children":[{"start":17,"value":"Allergy information is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":229,"pickleLine":206,"tags":[],"steps":[{"pwStepLine":230,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"DOB_Empty\"","stepMatchArguments":[{"group":{"start":49,"value":"\"DOB_Empty\"","children":[{"start":50,"value":"DOB_Empty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":231,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":232,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Date of Birth is required\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Date of Birth is required\"","children":[{"start":17,"value":"Date of Birth is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":235,"pickleLine":207,"tags":[],"steps":[{"pwStepLine":236,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Weight_Special\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Weight_Special\"","children":[{"start":50,"value":"Weight_Special","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":237,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":238,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid weight\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid weight\"","children":[{"start":17,"value":"Please enter valid weight","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":241,"pickleLine":208,"tags":[],"steps":[{"pwStepLine":242,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Height_Alpha\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Height_Alpha\"","children":[{"start":50,"value":"Height_Alpha","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":243,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":244,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid height\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid height\"","children":[{"start":17,"value":"Please enter valid height","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":247,"pickleLine":209,"tags":[],"steps":[{"pwStepLine":248,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"Temp_Alpha\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Temp_Alpha\"","children":[{"start":50,"value":"Temp_Alpha","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":249,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":250,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid temperature\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid temperature\"","children":[{"start":17,"value":"Please enter valid temperature","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":253,"pickleLine":210,"tags":[],"steps":[{"pwStepLine":254,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"SPDP_Alpha\"","stepMatchArguments":[{"group":{"start":49,"value":"\"SPDP_Alpha\"","children":[{"start":50,"value":"SPDP_Alpha","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":255,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":256,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Please enter valid SP,DP\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Please enter valid SP,DP\"","children":[{"start":17,"value":"Please enter valid SP,DP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":259,"pickleLine":211,"tags":[],"steps":[{"pwStepLine":260,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When User enters patient details from Excel sheet for \"All_Valid\"","stepMatchArguments":[{"group":{"start":49,"value":"\"All_Valid\"","children":[{"start":50,"value":"All_Valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":261,"gherkinStepLine":193,"keywordType":"Action","textWithKeyword":"And User submits the form","stepMatchArguments":[]},{"pwStepLine":262,"gherkinStepLine":194,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient successfully created\" from Excel","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient successfully created\"","children":[{"start":17,"value":"Patient successfully created","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":267,"pickleLine":212,"tags":[],"steps":[{"pwStepLine":268,"gherkinStepLine":213,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering numeric data in First name field","stepMatchArguments":[]},{"pwStepLine":269,"gherkinStepLine":214,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient first name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":272,"pickleLine":215,"tags":[],"steps":[{"pwStepLine":273,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in First name field","stepMatchArguments":[]},{"pwStepLine":274,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient first name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":277,"pickleLine":218,"tags":[],"steps":[{"pwStepLine":278,"gherkinStepLine":219,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving First name field empty","stepMatchArguments":[]},{"pwStepLine":279,"gherkinStepLine":220,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Patient first name is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Patient first name is required\"","children":[{"start":32,"value":"Patient first name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":282,"pickleLine":221,"tags":[],"steps":[{"pwStepLine":283,"gherkinStepLine":222,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering numeric data in Last name field","stepMatchArguments":[]},{"pwStepLine":284,"gherkinStepLine":223,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient last name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":287,"pickleLine":224,"tags":[],"steps":[{"pwStepLine":288,"gherkinStepLine":225,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in Last name field","stepMatchArguments":[]},{"pwStepLine":289,"gherkinStepLine":226,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message in Patient last name accepts only alphabets","stepMatchArguments":[]}]},
  {"pwTestLine":292,"pickleLine":227,"tags":[],"steps":[{"pwStepLine":293,"gherkinStepLine":228,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving Last name field empty","stepMatchArguments":[]},{"pwStepLine":294,"gherkinStepLine":229,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Patient last name is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Patient last name is required\"","children":[{"start":32,"value":"Patient last name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":297,"pickleLine":230,"tags":[],"steps":[{"pwStepLine":298,"gherkinStepLine":231,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email starting with number","stepMatchArguments":[]},{"pwStepLine":299,"gherkinStepLine":232,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid email address\"","children":[{"start":32,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":302,"pickleLine":233,"tags":[],"steps":[{"pwStepLine":303,"gherkinStepLine":234,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email without @ symbol","stepMatchArguments":[]},{"pwStepLine":304,"gherkinStepLine":235,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid email address\"","children":[{"start":32,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":307,"pickleLine":236,"tags":[],"steps":[{"pwStepLine":308,"gherkinStepLine":237,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email with special characters without @ symbol","stepMatchArguments":[]},{"pwStepLine":309,"gherkinStepLine":238,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid email address\"","children":[{"start":32,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":312,"pickleLine":239,"tags":[],"steps":[{"pwStepLine":313,"gherkinStepLine":240,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email without .com","stepMatchArguments":[]},{"pwStepLine":314,"gherkinStepLine":241,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid email address\"","children":[{"start":32,"value":"Please enter valid email address","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":317,"pickleLine":242,"tags":[],"steps":[{"pwStepLine":318,"gherkinStepLine":243,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering email which is already existing in the system","stepMatchArguments":[]},{"pwStepLine":319,"gherkinStepLine":244,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Email address already exists\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Email address already exists\"","children":[{"start":32,"value":"Email address already exists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":322,"pickleLine":245,"tags":[],"steps":[{"pwStepLine":323,"gherkinStepLine":246,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering all mandatory fields except email field","stepMatchArguments":[]},{"pwStepLine":324,"gherkinStepLine":247,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Email address is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Email address is required\"","children":[{"start":32,"value":"Email address is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":327,"pickleLine":248,"tags":[],"steps":[{"pwStepLine":328,"gherkinStepLine":249,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering alphabets in contact number with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":329,"gherkinStepLine":250,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid contact number\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid contact number\"","children":[{"start":32,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":332,"pickleLine":251,"tags":[],"steps":[{"pwStepLine":333,"gherkinStepLine":252,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering special characters in contact number with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":334,"gherkinStepLine":253,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid contact number\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid contact number\"","children":[{"start":32,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":337,"pickleLine":254,"tags":[],"steps":[{"pwStepLine":338,"gherkinStepLine":255,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering less than required digits in contact number with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":339,"gherkinStepLine":256,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid contact number\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid contact number\"","children":[{"start":32,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":342,"pickleLine":257,"tags":[],"steps":[{"pwStepLine":343,"gherkinStepLine":258,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering greater than required digits in contact number with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":344,"gherkinStepLine":259,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid contact number\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid contact number\"","children":[{"start":32,"value":"Please enter valid contact number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":347,"pickleLine":260,"tags":[],"steps":[{"pwStepLine":348,"gherkinStepLine":261,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering contact number which is already existing in the system with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":349,"gherkinStepLine":262,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Contact number already exists\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Contact number already exists\"","children":[{"start":32,"value":"Contact number already exists","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":352,"pickleLine":263,"tags":[],"steps":[{"pwStepLine":353,"gherkinStepLine":264,"keywordType":"Action","textWithKeyword":"When User navigate to next field after  entering all mandatory fields except contact number field","stepMatchArguments":[]},{"pwStepLine":354,"gherkinStepLine":265,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Contact number is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Contact number is required\"","children":[{"start":32,"value":"Contact number is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":357,"pickleLine":266,"tags":[],"steps":[{"pwStepLine":358,"gherkinStepLine":267,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving Allergies field empty with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":359,"gherkinStepLine":268,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Allergy information is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Allergy information is required\"","children":[{"start":32,"value":"Allergy information is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":362,"pickleLine":269,"tags":[],"steps":[{"pwStepLine":363,"gherkinStepLine":270,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving Food Preference field empty with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":364,"gherkinStepLine":271,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Food preference is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Food preference is required\"","children":[{"start":32,"value":"Food preference is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":367,"pickleLine":272,"tags":[],"steps":[{"pwStepLine":368,"gherkinStepLine":273,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving Cusine Category field empty with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":369,"gherkinStepLine":274,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Cuisine category is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Cuisine category is required\"","children":[{"start":32,"value":"Cuisine category is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":372,"pickleLine":275,"tags":[],"steps":[{"pwStepLine":373,"gherkinStepLine":276,"keywordType":"Action","textWithKeyword":"When User navigate to next field leaving DOB field empty with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":374,"gherkinStepLine":277,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Date of Birth is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Date of Birth is required\"","children":[{"start":32,"value":"Date of Birth is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":377,"pickleLine":278,"tags":[],"steps":[{"pwStepLine":378,"gherkinStepLine":279,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering valid weight data in weight field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":379,"gherkinStepLine":280,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":382,"pickleLine":281,"tags":[],"steps":[{"pwStepLine":383,"gherkinStepLine":282,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in weight field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":384,"gherkinStepLine":283,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid weight\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid weight\"","children":[{"start":32,"value":"Please enter valid weight","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":387,"pickleLine":284,"tags":[],"steps":[{"pwStepLine":388,"gherkinStepLine":285,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering alphabets in weight field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":389,"gherkinStepLine":286,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid weight\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid weight\"","children":[{"start":32,"value":"Please enter valid weight","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":392,"pickleLine":287,"tags":[],"steps":[{"pwStepLine":393,"gherkinStepLine":288,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering valid height data in height field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":394,"gherkinStepLine":289,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":397,"pickleLine":290,"tags":[],"steps":[{"pwStepLine":398,"gherkinStepLine":291,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in height field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":399,"gherkinStepLine":292,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid height\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid height\"","children":[{"start":32,"value":"Please enter valid height","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":402,"pickleLine":293,"tags":[],"steps":[{"pwStepLine":403,"gherkinStepLine":294,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering alphabets in height field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":404,"gherkinStepLine":295,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid height\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid height\"","children":[{"start":32,"value":"Please enter valid height","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":407,"pickleLine":296,"tags":[],"steps":[{"pwStepLine":408,"gherkinStepLine":297,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering valid temperature data in temperature field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":409,"gherkinStepLine":298,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":412,"pickleLine":299,"tags":[],"steps":[{"pwStepLine":413,"gherkinStepLine":300,"keywordType":"Action","textWithKeyword":"When User navigate to next field after entering special characters in temperature field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":414,"gherkinStepLine":301,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid temperature\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid temperature\"","children":[{"start":32,"value":"Please enter valid temperature","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":417,"pickleLine":302,"tags":[],"steps":[{"pwStepLine":418,"gherkinStepLine":303,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering alphabets in temperature field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":419,"gherkinStepLine":304,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid temperature\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid temperature\"","children":[{"start":32,"value":"Please enter valid temperature","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":422,"pickleLine":305,"tags":[],"steps":[{"pwStepLine":423,"gherkinStepLine":306,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering valid SP,DP data in SP,DP field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":424,"gherkinStepLine":307,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":427,"pickleLine":308,"tags":[],"steps":[{"pwStepLine":428,"gherkinStepLine":309,"keywordType":"Context","textWithKeyword":"Given User navigate to next field after entering special characters in SP,DP field with valid data in other mandatory fields","stepMatchArguments":[]},{"pwStepLine":429,"gherkinStepLine":310,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid SP,DP\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid SP,DP\"","children":[{"start":32,"value":"Please enter valid SP,DP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":432,"pickleLine":311,"tags":[],"steps":[{"pwStepLine":433,"gherkinStepLine":313,"keywordType":"Outcome","textWithKeyword":"Then User should  see error message \"Please enter valid SP,DP\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Please enter valid SP,DP\"","children":[{"start":32,"value":"Please enter valid SP,DP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":436,"pickleLine":314,"tags":[],"steps":[{"pwStepLine":437,"gherkinStepLine":315,"keywordType":"Action","textWithKeyword":"When User clicks Submit after uploading a valid file","stepMatchArguments":[]},{"pwStepLine":438,"gherkinStepLine":316,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to My Patient page with the uploaded file saved successfully","stepMatchArguments":[]}]},
  {"pwTestLine":441,"pickleLine":317,"tags":[],"steps":[{"pwStepLine":442,"gherkinStepLine":318,"keywordType":"Action","textWithKeyword":"When User uploads health report in pdf","stepMatchArguments":[]},{"pwStepLine":443,"gherkinStepLine":319,"keywordType":"Outcome","textWithKeyword":"Then User should be able to see the file name displayed with valid file name in the dialog box after successful upload","stepMatchArguments":[]}]},
  {"pwTestLine":446,"pickleLine":320,"tags":[],"steps":[{"pwStepLine":447,"gherkinStepLine":321,"keywordType":"Action","textWithKeyword":"When User clicks \"View Previous Test Report\" after being redirected to My Patient page for newly  created patient","stepMatchArguments":[{"group":{"start":12,"value":"\"View Previous Test Report\"","children":[{"start":13,"value":"View Previous Test Report","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":448,"gherkinStepLine":322,"keywordType":"Outcome","textWithKeyword":"Then User should see upload date info in test report","stepMatchArguments":[]}]},
  {"pwTestLine":451,"pickleLine":323,"tags":[],"steps":[{"pwStepLine":452,"gherkinStepLine":324,"keywordType":"Action","textWithKeyword":"When User clicks \"View Previous Test Report\" after being redirected to My Patient page for newly  created patient","stepMatchArguments":[{"group":{"start":12,"value":"\"View Previous Test Report\"","children":[{"start":13,"value":"View Previous Test Report","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":453,"gherkinStepLine":325,"keywordType":"Outcome","textWithKeyword":"Then User should see PDF file in test report","stepMatchArguments":[]}]},
  {"pwTestLine":456,"pickleLine":326,"tags":[],"steps":[{"pwStepLine":457,"gherkinStepLine":327,"keywordType":"Action","textWithKeyword":"When User clicks \"View Previous Test Report\" after being redirected to My Patient page for newly  created patient","stepMatchArguments":[{"group":{"start":12,"value":"\"View Previous Test Report\"","children":[{"start":13,"value":"View Previous Test Report","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":458,"gherkinStepLine":328,"keywordType":"Outcome","textWithKeyword":"Then User should see health info detected from the health report like weight, height, BMI, temperature, SP, DP in test report","stepMatchArguments":[]}]},
  {"pwTestLine":461,"pickleLine":329,"tags":[],"steps":[{"pwStepLine":462,"gherkinStepLine":330,"keywordType":"Action","textWithKeyword":"When User uploads a file with other format","stepMatchArguments":[]},{"pwStepLine":463,"gherkinStepLine":331,"keywordType":"Outcome","textWithKeyword":"Then User should see error message \"Invalid file type. Please upload a PDF file.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Invalid file type. Please upload a PDF file.\"","children":[{"start":31,"value":"Invalid file type. Please upload a PDF file.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":466,"pickleLine":332,"tags":[],"steps":[{"pwStepLine":467,"gherkinStepLine":333,"keywordType":"Action","textWithKeyword":"When User uploads a file exceeding the size limit","stepMatchArguments":[]},{"pwStepLine":468,"gherkinStepLine":334,"keywordType":"Outcome","textWithKeyword":"Then User should see error message \"File size exceeds the limit. Please upload a smaller file.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"File size exceeds the limit. Please upload a smaller file.\"","children":[{"start":31,"value":"File size exceeds the limit. Please upload a smaller file.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":471,"pickleLine":335,"tags":[],"steps":[{"pwStepLine":472,"gherkinStepLine":336,"keywordType":"Action","textWithKeyword":"When User clicks Submit after entering valid data skips file upload","stepMatchArguments":[]},{"pwStepLine":473,"gherkinStepLine":337,"keywordType":"Outcome","textWithKeyword":"Then User is directed to My Patient Page with New Patient Details created","stepMatchArguments":[]}]},
  {"pwTestLine":476,"pickleLine":338,"tags":[],"steps":[{"pwStepLine":477,"gherkinStepLine":339,"keywordType":"Action","textWithKeyword":"When User clicks on the close button in the dialog box","stepMatchArguments":[]},{"pwStepLine":478,"gherkinStepLine":340,"keywordType":"Outcome","textWithKeyword":"Then Add dialog should close and user should be on my patient page without new patient created","stepMatchArguments":[]}]},
  {"pwTestLine":481,"pickleLine":341,"tags":[],"steps":[{"pwStepLine":482,"gherkinStepLine":342,"keywordType":"Action","textWithKeyword":"When User enters valid values in all fields","stepMatchArguments":[]},{"pwStepLine":483,"gherkinStepLine":343,"keywordType":"Outcome","textWithKeyword":"Then submit button should be enabled in the dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":486,"pickleLine":344,"tags":[],"steps":[{"pwStepLine":487,"gherkinStepLine":345,"keywordType":"Action","textWithKeyword":"When User clicks Submit after entering valid data in all mandatory fields","stepMatchArguments":[]},{"pwStepLine":488,"gherkinStepLine":346,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Patient successfully created\" - toast message","stepMatchArguments":[{"group":{"start":16,"value":"\"Patient successfully created\"","children":[{"start":17,"value":"Patient successfully created","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":491,"pickleLine":347,"tags":[],"steps":[{"pwStepLine":492,"gherkinStepLine":348,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to My Patients page with new patients details created","stepMatchArguments":[]}]},
]; // bdd-data-end