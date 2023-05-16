Feature: As A User I want to verify login and products functionalities
Background: User is at the sauce demo home page
  @sanity @regression
    Scenario: Verify that user can login with valid credentials
    When I enter the username into username filed
    And I enter password into password field
    And I click on login button
    Then I can verify the Products text

    @smoke @regression
      Scenario: Verify that six products are displayed on the products page
      When I enter the username into username filed
      And I enter password into password field
      And I click on login button
      Then I can verify that six products are displayed on products page