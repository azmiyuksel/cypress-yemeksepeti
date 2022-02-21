Feature: Restaurant

    Scenario: Adding a restaurant to favorite list
        Given Yemeksepeti application is up and working
        And Login with credentials as username: "yegaji6397@petloca.com" and password: "Password1*"
        And Login successful and main page is displayed
        And User searched for "Et" in "Etimesgut"
        And Results page is opened and first result contains "Et"
        When Add "Et" restaurant to the list
        Then Favorite restaurant count should be 1

    
    Scenario: Removing a restaurant to favorite list
        Given Yemeksepeti application is up and working
        And Login with credentials as username: "yegaji6397@petloca.com" and password: "Password1*"
        And Login successful and main page is displayed
        When Removing first restaurant from the list
        Then Favorite restaurant count should be 0
