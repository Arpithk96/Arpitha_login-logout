@Login
Feature:Login_Logout

    @TCID:0001
    Scenario: Login and Initiate New Workflow
        Given the user 'megaAutomation' launches the app
        Then I navigate to the Initiate Workflow screen
        When Click on Initiate button
        When Click on logout button
        Then I should see the login page




