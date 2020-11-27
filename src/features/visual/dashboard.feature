@Visual @Dashboard
Feature: Dashboard
  Test dashboard functionalities

  Background: Open dashboard page
    Given I visit home page

  Scenario: Open Product Detail Page of the last product in the list
    When I navigate to the "7"th product in the list
    Then I can see page "Product Detail Page of the last product"
