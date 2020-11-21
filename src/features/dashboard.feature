@Smoke @Dashboard
Feature: Dashboard
  Test dashboard functionalities

  Background: Open dashboard page
    Given I visit home page

  Scenario: Open Product Detail Page of the last product in the list
    When I click on the "7"th product (the last product) in the list
    Then Product Detail Page of the last product opens
