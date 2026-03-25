Feature: To test the Edit Patient Details page functionality

  #------Verification of Edit Page Elements State and Presence
  # @smoke @regression @editPatientElementsDisplay
  # Scenario Outline: To test the display of Edit Patient page dialog box
  #   When User clicks the Edit Icon button of a patient
  #   Then User should see the "<element>" in the edit patient page

  #   Examples:
  #     | element                 |
  #     | pageTitle               |
  #     | submitButtonPresence    |
  # | closeButtonPresence     |
  # | fileUploadOption        |
  # | uploadHealthReportLabel |
  # | noFileChosenText        |



  #------Verification of Edit Page Field Elements Value displayed
  # @regression @editPatientFieldValuesDisplay
  # Scenario Outline: To test the presence of field with values entered during Patient creation
  #   Given Create a new Patient with below details
  #     | Field            | Value      |
  #     | First Name       | Sankar     |
  #     | Last Name        | Narayanan  |
  #     | Email            | emailId    |
  #     | Contact Number   | contactNo  |
  #     | Allergy          | Peanuts    |
  #     | Food Preference  | Vegetarian |
  #     | Cuisine Category | Rajasthani |
  #     | Date of Birth    | 1954-05-15 |

  #   When User search and clicks Edit Icon of newly created patient
  #   Then '<FieldName>' field should display expected value '<enteredValue>'

  #   Examples:
  #     | FieldName  | enteredValue |
  #     | First Name | firstName    |
  #         | Last Name        | lastName     |
  #         | Email            | emailId      |
  #         | Contact Number   | contactNo    |
  #         | Allergy          | Peanuts      |
  #         | Food Preference  | Vegetarian   |
  #         | Cuisine Category | Rajasthani   |
  #         | Date of Birth    | 1954-05-15   |



  # ##------------Verification of Vitals Section placeholders visibility---------------
  # @regression @vitalsPlaceholder
  #  Scenario Outline: To verify the '<vitalField>' field displays placeholder details when vital data is not given
  #   When User search and clicks Edit Icon of newly created patient
  #   Then the "<field>" field should display the placeholder text "<placeholderText>" in the Edit Patient Page
  #   Examples:
  #     | vitalField  | placeholderText |
  #     | SP          | SP              |
  # | DP          | DP              |
  # | Weight      | Weight          |
  # | Height      | Height          |
  # | Temperature | Temperature     |

  # ##------------Verifying that Vitals Fields dont have Mandatory Indicator--------------- (use chaining data from previous Scenario)
  #   @regression @vitalsFieldMandatoryIndicatorCheck
  #   Scenario Outline: Verify "<field>" vitals field does not have a mandatory indicator
  #   Given Create a new Patient with below details
  #       | Field            | Value      |
  #       | First Name       | firstName  |
  #       | Last Name        | lastName   |
  #       | Email            | emailId    |
  #       | Contact Number   | contactNo  |
  #       | Allergy          | Pistachio  |
  #       | Food Preference  | Vegetarian |
  #       | Cuisine Category | Kashmiri   |
  #       | Date of Birth    | 1984-09-21 |
  #       When  User search and clicks Edit Icon of newly created patient
  #       Then  the Vitals section "<field>" field should NOT display a mandatory indicator in Edit Patient Page

  #       Examples:
  #       | field       |
  #       | SP          |
  #       | DP          |
  #       | Weight      |
  #       | Height      |
  #       | Temperature |


  ##------------------Verify the display of placeholder text after removing the field data during Edit--------
  @placeholderDisplayAfterDeletingValue
  Scenario Outline: Verify the display of placeholder text after removing the '<Field>' field data during Edit
    Given Create a new Patient with below details
    | Field            | Value      |
    | First Name       | Sankar     |
    | Last Name        | Narayanan  |
    | Email            | emailId    |
    | Contact Number   | contactNo  |
    | Allergy          | Peanuts    |
    | Food Preference  | Vegetarian |
    | Cuisine Category | Rajasthani |
    | Date of Birth    | 1954-05-15 |

    And User search and clicks Edit Icon of newly created patient
    When User deletes the existing '<Field>' field data
    Then the "<Field>" field should display the placeholder text "<placeholderText>" in the Edit Patient Page

    Examples:
      | Field          | placeholderText |
      | First Name     | First name      |
      | Last Name      | Last name       |
      | Email          | Email           |
      | Contact Number | Contact Number  |


      
  ##--------------------Verify NO FILE CHOSEN text display when no health report is added----
  #  @noFileChosendisplay @regression
  #  Scenario: Verify "No File Chosen" text is displayed when no health report has been uploaded
  #     When  the user search and clicks the Edit icon of patient WITHOUT ANY FILE UPLOAD
  #     Then  the file upload field should display the text "No file chosen"








