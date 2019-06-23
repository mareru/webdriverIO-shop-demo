@Smoke
Feature: A customer can interact with checkboxes
    Checkbox functionality

    Scenario: Checkbox can be selected/deselected
        Given I am on the checkbox page
        And the checkbox is not selected
        When I click on the first checkbox
        Then the checkbox is marked as checked
        When I click on the first checkbox
        Then the checkbox is not selected
