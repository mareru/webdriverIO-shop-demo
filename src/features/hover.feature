Feature: Customer is able to hover
Hover
    Scenario: Customer is able to hover
    Given I am on the hover page
    When I hover over image 1
    Then I am able to see the username "user1"
