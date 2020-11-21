@Smoke @Login
Feature: Login
  Test login process

  Background: Open login page
    Given I visit home page
    When I navigate to login page

  # Make sure that scenario has unique name for each example execution
  # Otherwise the allure report will not show all executions, only the last example execution
  Scenario Outline: Login with invalid credentials <username>/<password>
    And I enter invalid username "<username>" or password "<password>"
    Then I can see "Authentication" error message

    Examples:
      | username     | password |
      # invalid password
      | ecx@test.com | 123456   |
      # invalid username
      | e@test.com   | 12345    |
      # invalid username and password
      | e@test.com   | 123456   |

  Scenario Outline: Login with invalid email <email>
    And I enter invalid email "<email>" as username
    Then I can see "Invalid email address" error message

    Examples:
      | email           |
      | test            |
      | test 1@test.com |
      | test@test       |

  Scenario: Login without password
    And I enter valid email
    But I do not enter password
    Then I can see "Password is required" error message

  # set at the end to avoid situation that if it fails and log out step is not executed,
  # then the app will be in bad state for other scenarios and they will fail
  # not because of the error in the app but because of the illogical flow
  Scenario: Login with valid credentials
    And I enter valid credentials
    Then I can see my username displayed on the page
    And I can successfully log out
