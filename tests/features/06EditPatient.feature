# Feature: To test the Edit Patient Details page functionality

#   //------Verification of Edit Page Elements State and Presence
#     @smoke @regression @editPatientElementsDisplay
#     Scenario Outline: To test the display of Edit Patient page dialog box
#         When User clicks the Edit Icon button of a patient
#         Then User should see the '<elements>' in the edit patient page

#         Examples:
#             | elements                |
#             | pageTitle               |
#             | submitButtonPresence    |
#             | submitButtonState       |
#             | closeButtonPresence     |
#             | closeButtonState        |
#             | closeButtonColor        |
#             | countOfInputFields      |
#             | countOfDropdowns        |
#             | fileUploadOption        |
#             | uploadHealthReportLabel |


#     //------Verification of Edit Page Field Elements Value displayed
#     @regression @editPatientFieldValuesDisplay
#     Scenario Outline: To test the presence of field with values entered during Patient creation
#         Given Create a new Patient with below details
#             | Field            | Value      |
#             | First Name       | firstName  |
#             | Last Name        | lastName   |
#             | Email            | emailId    |
#             | Contact Number   | contactNo  |
#             | Allergy          | Peanuts    |
#             | Food Preference  | Vegetarian |
#             | Cuisine Category | Rajasthani |
#             | Date of Birth    | 1954-05-15 |

#         When User search and clicks Edit Icon of newly created patient
#         Then '<FieldName>' field should display expected value '<enteredValue>'

#         Examples:
#             | FieldName        | enteredValue |
#             | First Name       | firstName    |
#             | Last Name        | lastName     |
#             | Email            | emailId      |
#             | Contact Number   | contactNo    |
#             | Allergy          | Peanuts      |
#             | Food Preference  | Vegetarian   |
#             | Cuisine Category | Rajasthani   |
#             | Date of Birth    | 1954-05-15   |

#      //--------------------Verify NO FILE CHOSEN text display when no health report is added----
#      @noFileChosendisplay @regression
#      Scenario: Verify "No File Chosen" text is displayed when no health report has been uploaded
#         When  the user search and clicks the Edit icon of patient WITHOUT ANY FILE UPLOAD
#         Then  the file upload field should display the text "No file chosen"


#     //------------Verification of Vitals Section placeholders visibility---------------
#     @regression @vitalsPlaceholder
#     Scenario Outline: To verify the '<Field>' field displays placeholder details when vital is not given
#         Given Create a new Patient WITHOUT entering vitals details
#             | Field            | Value      |
#             | First Name       | firstName  |
#             | Last Name        | lastName   |
#             | Email            | emailId    |
#             | Contact Number   | contactNo  |
#             | Allergy          | Pistachio  |
#             | Food Preference  | Vegetarian |
#             | Cuisine Category | Kashmiri   |
#             | Date of Birth    | 1984-09-21 |

#         When User searches and clicks Edit Icon of newly created patient
#         Then the "<field>" field should display the placeholder text "<placeholder>" in the Edit Patient Page
#         Examples:
#             | vitalField  | placeholder |
#             | SP          | SP          |
#             | DP          | DP          |
#             | Weight      | Weight      |
#             | Height      | Height      |
#             | Temperature | Temperature |

#     //------------Verifying that Vitals Fields dont have Mandatory Indicator--------------- (use chaining data from previous Scenario)
#     @regression @vitalsFieldMandatoryIndicatorCheck
#     Scenario Outline: Verify "<field>" vitals field does not have a mandatory indicator
#         When  the user clicks the Edit icon for the newly created patient without Vitals details
#         Then  the Vitals section "<field>" field should NOT display a mandatory indicator in Edit Patient Page

#         Examples:
#         | field       |
#         | SP          |
#         | DP          |
#         | Weight      |
#         | Height      |
#         | Temperature |


   

    





