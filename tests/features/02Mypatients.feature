Feature: My Patient Page

  Background:
    Given User is logged into the application
    And User is in dietician application dashboard page
    When User clicks on My Patients button

  ############# HEADER & SEARCH #############
  Scenario: Verify page header and search components
    Then Page header "My Patients" should be displayed
    And Search bar should be displayed
    And Search icon should be displayed inside the search bar
    And Placeholder text "Search..." should be displayed

  ############# TABLE HEADERS #############
  Scenario: Verify patient table headers and sorting icons
    Then following table headers should be displayed
      | Patient Id       |
      | Name             |
      | Details          |
      | Last Visit Date  |
      | Actions          |
      | Edit/Delete      |
    And following columns should have sorting icons
      | Patient Id |
      | Name       |

  ############# TABLE DATA VALIDATION #############
  Scenario: Verify patient table data and details column
    Then All columns should have values
    And each patient record should contain
      | Patient Id   |
      | Patient Name |
    And Details column should display following for each patient
      | phone number |
      | email        |
      | date of birth|
    And Details should be displayed in multiline format

  ############# FIELD FORMAT VALIDATION #############
  Scenario Outline: Validate field formats in patient details
    Then "<field>" should be displayed in "<format>" format for each patient record

    Examples:
      | field           | format         |
      | Email           | valid email    |
      | Phone number    | valid digits   |
      | Date of birth   | dd-mm-yyyy     |
      | Last visit date | dd-mm-yyyy     |

  ############# ACTION BUTTONS #############
  Scenario: Verify actions and icons for each patient row
    Then following actions should be available for each patient
      | View Previous Test Reports |
      | View Previous Diet Plans   |
      | Create New Report/plan     |
    And Edit icon should be displayed for each patient record
    And Delete icon should be displayed for each patient record

  ############# EMPTY STATE #############
  Scenario: Verify My Patients page when no patient exists
    Given User logged into the application without patient records
    And User is in dietician application dashboard page
    When User clicks on My Patients button
    Then My Patients page should display empty table


  #################### SORTING ####################
  Scenario Outline: Verify column sorting functionality
    Given User is in My Patients page
    When User clicks "<direction>" arrow on "<column>" column
    Then Patient records should be sorted in "<order>" order by "<column>"

    Examples:
      | column      | direction | order      |
      | Patient Id  | up        | ascending  |
      | Patient Id  | down      | descending |
      | Name        | up        | ascending  |
      | Name        | down      | descending |

  #################### SEARCH ####################
  Scenario Outline: Verify search functionality
    Given User is in My Patients page
    When User searches using "<criteria>"
    Then Matching patient details should be displayed

    Examples:
      | criteria     |
      | patient name |
      | patient id   |

  Scenario: Verify clearing search restores all records
    Given User is in My Patients page
    And User entered text in search box
    When User clears the search text
    Then All patient records should be displayed again

  #################### PAGINATION NAVIGATION ####################
  Scenario Outline: Verify pagination navigation
    Given User is in "<page_position>" of My Patients page
    When User clicks "<action>" arrow
    Then "<expected_result>" should be displayed

    Examples:
      | page_position                          | action              | expected_result                          |
      | multiple pages of patient records      | next page (>)       | Next set of patient records              |
      | last page                              | previous page (<)   | Previous set of patient records          |
      | any page except first                  | first page (<<)     | First page of patient records            |
      | any page except last                   | last page (>>)      | Last page of patient records             |

  # #################### PAGINATION VALIDATION ####################
  #   Scenario: Verify pagination count and controls
  #   Given User is in any page of My Patients page
  #   When User navigates to any page
  #   Then Pagination text should display correct range and total number of patients
  #   And Pagination controls should be displayed

  # #################### PAGINATION BUTTON STATES ####################
  # Scenario Outline: Verify pagination arrow states
  #   Given User is in "<page_position>" of My Patients page
  #   When User navigates to that page
  #   Then "<arrow>" should be "<state>"

  #   Examples:
  #     | page_position | arrow              | state     |
  #     | first page    | Previous arrow (<) | disabled  |
  #     | first page    | First arrow (<<)   | disabled  |
  #     | first page    | Next arrow (>)     | enabled   |
  #     | first page    | Last arrow (>>)    | enabled   |
  #     | last page     | Next arrow (>)     | disabled  |
  #     | last page     | Last arrow (>>)    | disabled  |
  #     | last page     | Previous arrow (<) | enabled   |
  #     | last page     | First arrow (<<)   | enabled   |
  #     | middle page   | All arrows         | enabled   |