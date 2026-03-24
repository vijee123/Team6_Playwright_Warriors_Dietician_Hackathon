Feature: Login page Functional Verification
  
 Background: 
  Given  The user is on the sign in page

######### Login Scenarios  ##########   
 @validLogin
  Scenario: User Login in with valid credentials
    When The user enters Login credentials from "LoginData" and 0
    And The user clicks Login button
    Then The user be on Dashboard after Login
    
  @invalidLogin
  Scenario Outline: User attempts Login with invalid credentials
    When The user enters Login username "<Username>"
    And The user enters Login password "<Password>"
    And The user clicks Login button
    Then The user sees Login error message "<ErrorMessage>"

    Examples:
      | Username     | Password  | ErrorMessage                  |
      |abcdef        | Test@1234 |User does not exist |
      |*&^%$#@!      |    abcd   | Invalid Username and Password |
      |test          |           | Invalid Username and Password |
      |              | Test@1234 | Username required   |
      | testuser123  |           | Password required |
      | playwrightjs | Test@1234 | Invalid Username and Password |
      | cena         | wrongpass | Invalid Username and Password |


######### Dashboard Scenarios  ##########   
 @dashboard
  Scenario: User should see Dashboard after successful login
    When The user enters Login credentials from "LoginData" and 0
    And The user clicks Login button
    Then The user should see Dashboard page with title "Dietician Project", Home icon
    And The user should see four links "My Patients", "New Patient", "Login", and "Logout"


 Scenario: Verify "My Patients" link navigation
    Given User is on the dashboard page
    When User clicks the "My Patients" link in the navigation bar
    Then User should be redirected to the "My Patients" page

  Scenario: Verify "New Patient" link navigation
    Given User is on the dashboard page
    When User clicks the "New Patient" link in the navigation bar
    Then User should be redirected to the "New Patient" page

  Scenario: Verify "Logout" functionality
    Given User is on the dashboard page
    When User clicks the "Logout" link in the navigation bar
    Then User should be logged out of the application

  Scenario: Verify Home icon navigation
    Given User is on the dashboard page
    When User clicks the home icon on the navigation bar
    Then User should be navigated to the dashboard page




