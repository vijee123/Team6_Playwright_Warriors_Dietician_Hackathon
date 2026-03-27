# Feature: ViewTest Reports 

#   Background:
#     Given User is logged into the application
#     And User is on My Patients page
#     And Patients already exist

#   #################### Patient Information Section ####################

#   Scenario: Verify correct report opens for selected record
#     When User clicks on "View Previous Test Reports" for a specific record
#     Then Corresponding report for that record should be opened

#   Scenario: Verify patient details in report header
#     When User clicks on "View Previous Test Reports" for a specific record
#     Then Title "View Patient Test Reports" should be displayed
#     And Patient id, name, email and contact number should be displayed
#     And Close icon "X" should be displayed

#   #################### Reports Table Section ####################

#   Scenario: Verify reports table and headers
#     When User clicks on "View Previous Test Reports" for a specific record
#     Then Reports table should be displayed
#     And Table headers should be displayed:
#       | Record Number | File | Uploaded Time | File/Report Name | Vitals | Identified Health Conditions |

#   Scenario: Verify table column order
#     When User clicks on "View Previous Test Reports" for a specific record
#     Then Table columns should be in order:
#       | Record Number | File | Uploaded Time | File/Report Name | Vitals | Identified Health Conditions |

#   Scenario: Verify pagination controls
#     When User clicks on "View Previous Test Reports" for a specific record
#     Then Pagination controls first, previous, next, last should be displayed

#   #################### Reports Table Data ####################

#   Scenario: Verify report row details
#   When User clicks on "View Previous Test Reports" for a specific record
#   Then Each report should display:
#     | Record Number     |
#     | View PDF button   |
#     | Uploaded Time     |
#     | File/Report Name  |

#   Scenario: Verify vitals information
#     When User clicks on "View Previous Test Reports" for a specific record
#     Then Each report should display vitals information
#     And Vitals should be in order Weight -> Height -> Temperature -> SP -> DP
#     And Vitals should be displayed in multiline format

#   Scenario: Verify health conditions information
#     When User clicks on "View Previous Test Reports" for a specific record
#     Then Each report should display identified health conditions
#     And Health conditions should be displayed in multiline format


#   #################### View PDF ####################

#   Scenario: Verify user can open PDF report
#     When User clicks on "View Previous Test Reports" for a specific record
#     And User clicks on "View PDF" button for a record
#     Then Corresponding PDF report for that record should be opened

#   #################### Pagination with Multiple Records ####################

    
#   Scenario: Navigate to next page
#     Given User is on View Patient Test Reports page
#     And Multiple patient records exist
#     When User clicks on next page arrow ">"
#     Then Next set of patient records should be displayed

#   Scenario: Navigate to previous page
#     Given User is on View Patient Test Reports page
#     And Multiple patient records exist
#     When User clicks on previous page arrow "<"
#     Then Previous set of patient records should be displayed

#   Scenario: Navigate to first page
#     Given User is on View Patient Test Reports page
#     And Multiple patient records exist
#     When User clicks on first page arrow "<<"
#     Then First page of patient records should be displayed

#   Scenario: Navigate to last page
#     Given User is on View Patient Test Reports page
#     And Multiple patient records exist
#     When User clicks on last page arrow ">>"
#     Then Last page of patient records should be displayed

#   Scenario: Verify pagination count text
#     Given User is on View Patient Test Reports page
#     And Multiple patient records exist
#     When User clicks on any pagination control
#     Then Pagination text should display correct range and total number of patients

#   Scenario: Verify pagination controls visibility
#     Given User is on View Patient Test Reports page
#     And Multiple patient records exist
#     When User navigates to any page
#     Then Pagination controls should be displayed

#   #################### Pagination Arrow States ####################

# Scenario Outline: Verify pagination arrow states
#     Given User is on "<pageType>" page
#     Then "<arrow>" should be "<state>"

#     Examples:
#       | pageType    | arrow | state    |
#       | first page  | <     | disabled |
#       | first page  | <<    | disabled |
#       | first page  | >     | enabled  |
#       | first page  | >>    | enabled  |
#       | last page   | >     | disabled |
#       | last page   | >>    | disabled |
#       | last page   | <     | enabled  |
#       | last page   | <<    | enabled  |
#       | middle page | <     | enabled  |
#       | middle page | <<    | enabled  |
#       | middle page | >     | enabled  |
#       | middle page | >>    | enabled  |

#   #################### Pagination with One Record ####################

#   Scenario: Verify pagination when only one page exists
#     Given Only one patient record exists
#     When User clicks on "View Patient Test Reports"
#     Then First, previous, next, last arrows should be disabled

#   #################### Pagination with No Data ####################

#   Scenario: Verify pagination when no patient data exists
#     Given No patient records exist
#     When User clicks on "View Patient Test Reports"
#     Then Text "Showing 0 to 0 of 0 patients" should be displayed
#     And First, previous, next, last arrows should be disabled

#   #################### Records Per Page ####################

#   Scenario: Verify maximum records per page
#     Given User is on dashboard page
#     When User clicks on My Patients button
#     Then User should see only 2 records per page