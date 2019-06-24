@Smoke
Feature: DropDowns working for customers
    DropDown

    Scenario Outline: Customer able to select options in a drop down
        Given I am on the dropdown page
        Then I am able to select <option> in the drop down

        Examples:
            | option |
            | Option 1 |
            | Option 2 |
