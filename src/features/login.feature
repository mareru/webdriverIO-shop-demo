Feature: Customer is able to login
Login
    Scenario: Customer is able to login with correct credentials
        Given I am on the login page
        When I login with username "tomsmith"
        Then I am located on the secure page
            And I see the a message with the text "You logged into a secure area!"
