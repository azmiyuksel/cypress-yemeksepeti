Feature: Login

    Scenario Outline: Failed login with empty credentials
        Given Yemeksepeti application is up and working
        When Login with credentials as username: "<userName>" and password: "<password>"
        Then Validation text is visible for username: "<userName>" and password: "<password>"

        Examples:

            | userName               | password   |
            | yegaji6397@petloca.com |            |
            |                        | Password1* |
            |                        |            |


    Scenario Outline: Failed login with wrong credentials
        Given Yemeksepeti application is up and working
        When Login with credentials as username: "<userName>" and password: "<password>"
        Then Login credentials are wrong and error message is displayed

        Examples:

            | userName               | password   |
            | yegaji6397@petloca.com | Password1  |
            | yegaji6397@petloca.com | Password2* |
            | veydimortu@vusra.co    | Password2* |
            | veydimortu@vusra.comp  | Password2* |
            
    Scenario Outline: Successful login with correct credentials
        Given Yemeksepeti application is up and working
        When Login with credentials as username: "<userName>" and password: "<password>"
        Then Login successful and main page is displayed
        And Logout

        Examples:

            | userName               | password   |
            | yegaji6397@petloca.com | Password1* |
            | veydimortu@vusra.com   | Password2* |


     Scenario: Failed login with a space character for username (expected to fail)
        Given Yemeksepeti application is up and working
        When Login with credentials as username: " " and password: " "
        Then Validation text is visible for username: " " and password: " "

       