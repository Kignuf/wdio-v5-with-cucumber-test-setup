Feature: Login

Scenario: Correct credentials
    Given I open the url "/login"
    When  I set "tomsmith" to the inputfield "#username"
    And   I set "SuperSecretPassword!" to the inputfield "#password"
    And   I click on the button "#login > button"
    Then  I expect that the path is "/secure"
