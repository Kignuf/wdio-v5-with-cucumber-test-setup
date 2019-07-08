Feature: Login

Background: Prepare bg work
    Given I open the url "/login"

@test
Scenario Outline: Login
    Given using following credentials
    |login|password|expectedUrl|
    |<login>|<password>|<expectedUrl>|
    When  I set <login> to the inputfield "#username"
    And   I set <password> to the inputfield "#password"
    And   I click on the button "#login > button"
    Then  I expect that the path is "<expectedUrl>"

Examples:
    | login | password | expectedUrl |
    | tomsmith | SuperSecretPassword! | /secure |
    # | bill | whatever | /login |
