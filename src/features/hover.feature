Feature: Customer is able to hover
Hover
    Scenario Outline:Customer is able to hover
        Given I am on the hover page
        When I hover over image <order>
        Then I am able to see the username <username>

        Examples:
            |order| username|
            |1| "user1"|
            |2| "user2"|
            |3| "user3"|
