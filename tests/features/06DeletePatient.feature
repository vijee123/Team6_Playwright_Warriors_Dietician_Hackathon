Feature: To validate the delete patient popup functionalities

  Background:
    Given user clicks the Delete Icon of a patient after searching using contact number

  Scenario Outline: To verify the '<element>' element displayed in the delete patient popup window
    Then the user should see the '<element>' element displaying this '<value>'

    Examples:
      | element    | value                                |
      | alertTitle | Confirm                              |
      | alertText  | Are you sure to delete Patient Name? |
      | yesButton  | Yes                                  |
      | noButton   | No                                   |


  Scenario: To verify the navigation to main page after dismissing the alert
    When user clicks the NO button and dismiss the alert
    Then user should return back to main page of patients


  Scenario: To verify the navigation to main page after accepting the alert
    When user clicks the OK button and accepts the alert
    Then user should return back to main page of patients


  Scenario: To confirm the removal of Patient after accepting the alert
    When user clicks the OK button and accepts the alert
    Then patient should be removed from the table


  Scenario: To verify the success message after accepting the delete alert
    When user clicks the OK button and accepts the alert
    Then user should get a success message of delete





