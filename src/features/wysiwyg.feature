@Smoke
Feature: A customer can edit a WYSIWYG Editor
    WYSIWYG Editor functionality

    Scenario: WYSIWYG Editor can be edited
        Given I am on WYSIWYG Editor site
        When I enter "test1234" in the editor
        Then I see the text "test1234" in the WYSIWYG Editor
