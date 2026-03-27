Feature: Add Patients

  Scenario: User should be able to view the dialog box to add patients
    Given The user is on the home page
    When The user clicks on new patient tab in the header section
    Then The user should be able to view the dialog box to add patients

  Scenario: Validation of 9 input fields in the add patient dialog box
    Then The user should be able to view 9 input fields in the dialog box

  Scenario: Validation of 3 dropdowns in the add patient dialog box
    Then The user should be able to view 3 dropdowns in the dialog box

  Scenario: Validation of a date picker field in the add patient dialog box
    Then The user should be able to view a date picker field with MM-DD-YYYY displayed

  Scenario: Validation of file upload button
    Then The user should be able to view file upload button in the dialog box

  Scenario: Validation of submit button
    Then The user should be able to view submit button in the dialog box

  Scenario: Presence of close button
    Then The user should be able to view close button in the dialog box

  Scenario: State of the close button
    Then The close button should be enabled in the dialog box

  Scenario: Mandatory field visibility for the placeholders
    Then The user should be able to view the mandatory fields with "<field>"
      | field          |
      | firstname      |
      | lastname       |
      | email          |
      | contact number |
      | date of birth  |
      | weight         |

  Scenario: Validation of non-mandatory fields with placeholders
    Then The user should be able to view non-mandatory fields with "<field>"
      | field       |
      | Height      |
      | BMI         |
      | Temperature |
      | SP          |
      | DP          |
  # Scenario: Presence of Upload Health Report
  #   Then The user should be able to view  text  "Upload Health Report"

  Scenario: Presence of text "No file Chosen" when no files uploaded
    Then The user should be able to view text 'No file chosen'

  Scenario: Presence of scroll bar in the dialog box
    Then The user should be able to view scroll bar on the right side of the dialog box    

  Scenario: Presence of dropdown values in Allergy
    When User clicks on the dropdown for Allergy
    Then values should be visible in the Allergy dropdown

  Scenario: Validation of 12 dropdown values in Allergy dropdown
    Then Dropdown should contain 12 values

  Scenario: Validation of the 12 text values in the Allergy dropdown
    Then Allergy Dropdown should contain values
      | Egg       |
      | Milk      |
      | Soy       |
      | Almond    |
      | Peanuts   |
      | Walnut    |
      | Pistachio |
      | Sesame    |
      | Hazelnut  |
      | Pecan     |
      | Cashew    |
      | NONE      |

  Scenario: Validation of dropdown values in Food Preference dropdown    
    When User clicks on the dropdown for Food Preference
    Then values should be visible in the Food Preference dropdown

  Scenario: Validation of 5 dropdown values in Food Preference dropdown
    Then Food Preference dropdown should contain 5 values

  Scenario: Validation of the 5 text values in the Food Preference dropdown
    Then Dropdown should contain values
      | Vegan      |
      | Vegetarian |
      | Jain       |
      | Eggitarian |
      | NonVeg     |

  Scenario: Presence of dropdown values in Cuisine Category dropdown
    When User clicks on the dropdown for Cuisine Category
    Then Values should be present inside Cuisine dropdown

  Scenario: Validation of 36 dropdown values in Cuisine Category dropdown
    Then Dropdown should contain 36 value

  Scenario: Validation of the 36 text values in the Cuisine Category dropdown
    Then dropdown should contain the following values
      | South Indian   |
      | Rajasthani     |
      | Punjabi        |
      | Bengali        |
      | Orissa         |
      | Gujarati       |
      | Maharashtrian  |
      | Andhra         |
      | Kerala         |
      | Goan           |
      | Kashmiri       |
      | Himachali      |
      | Tamil Nadu     |
      | Karnataka      |
      | Sindhi         |
      | Chhattisgarhi  |
      | Madhya Pradesh |
      | Assamese       |
      | Manipuri       |
      | Tripuri        |
      | Sikkimese      |
      | Mizo           |
      | Arunachali     |
      | Uttarakhand    |
      | Haryanvi       |
      | Awadhi         |
      | Bihari         |
      | Uttar Pradesh  |
      | Delhi          |
      | North Indian   |

  Scenario: Select a single value from Allergy dropdown
    When User clicks on the single value from dropdown for Allergy
    Then Values should be visible in the dropdown

  Scenario: Select multiple values from Allergy dropdown
    Then Values should be visible in the dropdown
    Then user should be able to select multiple values from the dropdown

  Scenario: Select a single value from Food Preference dropdown
    When User clicks on the single value from dropdown for Food Preference
    Then user should be able to select a single value from the dropdown for Food Preference

  Scenario: Select multiple values from Food Preference dropdown
    Then user should be able to select multiple values from the dropdown

  Scenario: Select a single value from Cuisine Category dropdown
    When User clicks on the single value from dropdown for Cuisine Category
    Then user should be able to select a single value from the dropdown

  Scenario: Select multiple values from Cuisine Category dropdown
    Then user should be able to select multiple values from the dropdown

  Scenario: Selecting date using DatePicker field
    When User clicks on the date picker for DOB field
    Then User should see calender date picker displayed with Month,Day,Year

  Scenario: Selecting date for DOB field
    When User clicks Date of Birth field and selects valid date "12/25/1990"
    Then User should see selected date in the DOB field

  Scenario: Verify selected date is displayed in MM/DD/YYYY format
    When User clicks Date of Birth field, selects valid date "01/12/2000" and clicks outside the calendar
    Then User should see selected date in MM/DD/YYYY format in the DOB field

  Scenario: Prevent selection of future date in DOB field
    When User clicks Date of Birth field and selects future date "12/31/2099"
    Then User should see the future date to be disabled

  Scenario: Selecting current date as DOB
    When User selects current date as DOB
    Then User should get error message "Date of Birth cannot be current or future date"
 Scenario: Selecting Invalid date
 When User clicks Date of Birth field and selects invalid date 34/20/2022
 Then User should see an error message "Invalid date ,Please select valid date"
 Scenario:User enters non-numeric value in DOB field
 When User enters "ab/cd/efgh" in the DOB field
 Then User should see an error message "Invalid date format"
 Scenario:Selecting partial date in DOB field
 When User enters "12/05" in the DOB field
 Then User should see an error message "Invalid date format"
  Scenario: Leap year validation
    When User enters Feb 29 2024 in DOB
    Then User should be able to select the date without any error message

  Scenario: Non Leap year validation
    When User enters Feb 29 2023 in DOB
    Then User should see an error message "Invalid date ,Please select valid date"

  Scenario Outline: Validate Add Patient form using Excel
    When User enters patient details from Excel sheet for "<ScenarioName>"
    And User submits the form
    Then User should see "<ExpectedResult>" from Excel
    Examples:
      | ScenarioName   | ExpectedResult                            |
      | FN_Numeric     | Patient first name accepts only alphabets |
      | FN_SpecialChar | Patient first name accepts only alphabets |
      | FN_Empty       | Patient first name is required            |
      | LN_Numeric     | Patient last name accepts only alphabets  |
      | Email_NoAt     | Please enter valid email address          |
      | Email_Exists   | Email address already exists              |
      | Contact_Alpha  | Please enter valid contact number         |
      | Contact_Short  | Please enter valid contact number         |
      | Allergy_Empty  | Allergy information is required           |
      | DOB_Empty      | Date of Birth is required                 |
      | Weight_Special | Please enter valid weight                 |
      | Height_Alpha   | Please enter valid height                 |
      | Temp_Alpha     | Please enter valid temperature            |
      | SPDP_Alpha     | Please enter valid SP,DP                  |
      | All_Valid      | Patient successfully created              |
 Scenario:Add first name field with numeric data
 When User navigate to next field after entering numeric data in First name field 
 Then User should  see error message in Patient first name accepts only alphabets
 Scenario:Add first name field with special character data
 When User navigate to next field after entering special characters in First name field 
 Then User should  see error message in Patient first name accepts only alphabets
 Scenario:Mandatory field check for firstname field
 When User navigate to next field leaving First name field empty
 Then User should  see error message "Patient first name is required"
 Scenario:Add last name field with numeric data
 When User navigate to next field after entering numeric data in Last name field 
 Then User should  see error message in Patient last name accepts only alphabets
 Scenario:Add last name field with special character data
 When User navigate to next field after entering special characters in Last name field 
 Then User should  see error message in Patient last name accepts only alphabets
 Scenario:Mandatory field check for lastname field
 When User navigate to next field leaving Last name field empty
 Then User should  see error message "Patient last name is required"
 Scenario:Add email with  starts with number
 When User navigate to next field after entering email starting with number
 Then User should  see error message "Please enter valid email address"
 Scenario:Add email without @ symbol
 When User navigate to next field after entering email without @ symbol
 Then User should  see error message "Please enter valid email address"
 Scenario:Add email with special characters withou @ 
 When User navigate to next field after entering email with special characters without @ symbol
 Then User should  see error message "Please enter valid email address"
 Scenario:Add email without .com
 When User navigate to next field after entering email without .com
 Then User should  see error message "Please enter valid email address"
 Scenario:Existing email id
 When User navigate to next field after entering email which is already existing in the system
 Then User should  see error message "Email address already exists"
 Scenario:Mandatory field check for email field
 When User navigate to next field after entering all mandatory fields except email field
 Then User should  see error message "Email address is required"
 Scenario:Add contact number with alphabets
 When User navigate to next field after  entering alphabets in contact number with valid data in other mandatory fields
 Then User should  see error message "Please enter valid contact number"
 Scenario:Add contact number with special characters
 When User navigate to next field after  entering special characters in contact number with valid data in other mandatory fields
 Then User should  see error message "Please enter valid contact number"
 Scenario:Add contact number with less than required digits
 When User navigate to next field after  entering less than required digits in contact number with valid data in other mandatory fields
 Then User should  see error message "Please enter valid contact number"
 Scenario:Add contact number with greater than required digits
 When User navigate to next field after  entering greater than required digits in contact number with valid data in other mandatory fields
 Then User should  see error message "Please enter valid contact number"
 Scenario:Existing contact number
 When User navigate to next field after  entering contact number which is already existing in the system with valid data in other mandatory fields
 Then User should  see error message "Contact number already exists"
 Scenario:Mandatory field check for contact num field
 When User navigate to next field after  entering all mandatory fields except contact number field
 Then User should  see error message "Contact number is required"
 Scenario:Leaving Allergies field empty
 When User navigate to next field leaving Allergies field empty with valid data in other mandatory fields
 Then User should  see error message "Allergy information is required"
 Scenario:Leaving Food Preference field empty
 When User navigate to next field leaving Food Preference field empty with valid data in other mandatory fields
 Then User should  see error message "Food preference is required"
 Scenario:Leaving Cusine Category field empty
 When User navigate to next field leaving Cusine Category field empty with valid data in other mandatory fields
 Then User should  see error message "Cuisine category is required"
 Scenario:Leaving DOB field empty
 When User navigate to next field leaving DOB field empty with valid data in other mandatory fields
 Then User should  see error message "Date of Birth is required"
 Scenario:Add weight with valid data
 When User navigate to next field after entering valid weight data in weight field with valid data in other mandatory fields
 Then User is directed to My Patient Page with New Patient Details created
 Scenario:Add weight with special characters
 When User navigate to next field after entering special characters in weight field with valid data in other mandatory fields
 Then User should  see error message "Please enter valid weight"
 Scenario:Add weight with alphabets
 When User navigate to next field after entering alphabets in weight field with valid data in other mandatory fields
 Then User should  see error message "Please enter valid weight"
 Scenario:Add height with valid data
 When User navigate to next field after entering valid height data in height field with valid data in other mandatory fields
 Then User is directed to My Patient Page with New Patient Details created
 Scenario:Add height with special characters
 When User navigate to next field after entering special characters in height field with valid data in other mandatory fields
 Then User should  see error message "Please enter valid height"
 Scenario:Add height with alphabets
 Given User navigate to next field after entering alphabets in height field with valid data in other mandatory fields
 Then User should  see error message "Please enter valid height"
 Scenario:Add temperature with valid data
 Given User navigate to next field after entering valid temperature data in temperature field with valid data in other mandatory fields
 Then User is directed to My Patient Page with New Patient Details created
 Scenario:Add temperature with special characters
 When User navigate to next field after entering special characters in temperature field with valid data in other mandatory fields
 Then User should  see error message "Please enter valid temperature"
 Scenario:Add temperature with alphabets
 Given User navigate to next field after entering alphabets in temperature field with valid data in other mandatory fields
 Then User should  see error message "Please enter valid temperature"
 Scenario:Add SP,DP with valid data
 Given User navigate to next field after entering valid SP,DP data in SP,DP field with valid data in other mandatory fields
 Then User is directed to My Patient Page with New Patient Details created
 Scenario:Add SP,DP with special characters
 Given User navigate to next field after entering special characters in SP,DP field with valid data in other mandatory fields
 Then User should  see error message "Please enter valid SP,DP"
 Scenario:Add SP ,DP with alphabets
 when User navigate to next field after entering alphabets in SP,DP field with valid data in other mandatory fields
 Then User should  see error message "Please enter valid SP,DP"
 Scenario:Upload valid file - pdf
 When User clicks Submit after uploading a valid file 
 Then User should be redirected to My Patient page with the uploaded file saved successfully
 Scenario:File name after Upload valid file - pdf
 When User uploads health report in pdf
 Then User should be able to see the file name displayed with valid file name in the dialog box after successful upload
 Scenario:Presence of upload date info
 When User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient
 Then User should see upload date info in test report
 Scenario: Presence of PDF file in test report after file upload
 When User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient
 Then User should see PDF file in test report
 Scenario:Presence of health info detected from the health report
 When User clicks "View Previous Test Report" after being redirected to My Patient page for newly  created patient
 Then User should see health info detected from the health report like weight, height, BMI, temperature, SP, DP in test report
 Scenario:upload invalid file type - docx,jpeg
 When User uploads a file with other format
 Then User should see error message "Invalid file type. Please upload a PDF file."
 Scenario:Upload file exceeding size limit
 When User uploads a file exceeding the size limit
 Then User should see error message "File size exceeds the limit. Please upload a smaller file."
 Scenario:Upload without selecting file
 When User clicks Submit after entering valid data skips file upload
 Then User is directed to My Patient Page with New Patient Details created
 Scenario:Close add dialog using Close button
 When User clicks on the close button in the dialog box
 Then Add dialog should close and user should be on my patient page without new patient created 
 Scenario:Validation of the submit button's state in the add patient dialog box
   When User enters valid values in all fields
  Then submit button should be enabled in the dialog box
  Scenario:Success message validation for adding new patient with valid data 
  When User clicks Submit after entering valid data in all mandatory fields
  Then User should see "Patient successfully created" - toast message
  Scenario:Navigation to My patient after adding new patient with valid data
  Then User should be navigated to My Patients page with new patients details created
